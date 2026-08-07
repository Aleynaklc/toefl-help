"""
PlacementService — TOEFL seviye testi iş mantığı.

Seviye sıralaması: A1 → A2 → B1 → B2 → C1 → C2
Her seviyede kelimeler JSON'dan yüklenir (data/placement/level_words.json).
Kullanıcının ilerleme durumu DB'de JSON olarak saklanır.
"""

from __future__ import annotations

import json
from pathlib import Path
from typing import Any

from sqlalchemy.ext.asyncio import AsyncSession

from app.core.exceptions import AppError
from app.domain.enums import PlacementAnswerStatus
from app.domain.schemas import (
    PlacementProgress,
    PlacementProgressLevel,
    WordCreate,
    WordRead,
)
from app.repositories import PlacementRepository, WordRepository
from app.services.word_service import WordService

_DATA_DIR = Path(__file__).resolve().parent.parent.parent / "data" / "placement"

_LEVEL_ORDER = ["A1", "A2", "B1", "B2", "C1", "C2"]
_WORDS_PER_PAGE = 20  # Bir sayfada gösterilen kelime sayısı


def _load_level_data() -> dict[str, dict[str, list[str]]]:
    """Tüm seviyelerdeki kelime verilerini yükler."""
    path = _DATA_DIR / "level_words.json"
    if not path.exists():
        return {}
    with path.open(encoding="utf-8") as f:
        return json.load(f)


_LEVEL_DATA: dict[str, dict[str, list[str]]] = _load_level_data()


class PlacementService:
    """Seviye testi iş mantığı."""

    def __init__(self, session: AsyncSession) -> None:
        self._placement_repo = PlacementRepository(session)
        self._word_repo = WordRepository(session)
        self._word_service = WordService(session)

    # ------------------------------------------------------------------
    # Kelime yükleme (DB gerektirmez — statik JSON)
    # ------------------------------------------------------------------

    @staticmethod
    def get_available_levels() -> list[str]:
        """Mevcut seviyeleri sıralı döndürür."""
        return [lvl for lvl in _LEVEL_ORDER if lvl in _LEVEL_DATA]

    @staticmethod
    def get_words_for_level(level: str) -> dict[str, list[str]]:
        """Seviyeye ait kelime listelerini döndürür (bucket → kelimeler)."""
        if level not in _LEVEL_DATA:
            raise AppError(f"'{level}' seviyesi bulunamadı.", status_code=404)
        return _LEVEL_DATA[level]

    @staticmethod
    def get_all_words_flat(level: str) -> list[str]:
        """Seviyedeki tüm kelimeleri düz liste olarak döndürür."""
        data = PlacementService.get_words_for_level(level)
        result: list[str] = []
        for bucket_words in data.values():
            result.extend(bucket_words)
        return result

    # ------------------------------------------------------------------
    # İlerleme yönetimi
    # ------------------------------------------------------------------

    async def get_progress(self, user_id: str) -> PlacementProgress:
        """Kullanıcının seviye testi ilerlemesini döndürür."""
        return await self._placement_repo.get_progress(user_id)

    async def record_word_answer(
        self,
        user_id: str,
        cefr_level: str,          # Hangi CEFR seviyesi: "B1", "C2" vb.
        word: str,                 # Hangi kelime: "abandon", "acquire" vb.
        status: PlacementAnswerStatus,
    ) -> PlacementProgress:
        """
        Belirli bir CEFR seviyesindeki kelime için cevap kaydeder.

        Progress yapısı:
            {
              "B1": {
                "answers": {
                  "abandon": "know",
                  "acquire": "unknown",
                  ...
                }
              }
            }
        """
        progress = await self._placement_repo.get_progress(user_id)

        if cefr_level not in progress.levels:
            progress.levels[cefr_level] = PlacementProgressLevel()

        # Düzeltildi: level_key (CEFR seviyesi) ile word (kelime) ayrı
        progress.levels[cefr_level].answers[word] = status
        await self._placement_repo.save_progress(user_id, progress)
        return progress

    # ------------------------------------------------------------------
    # Kelime kartına aktarma
    # ------------------------------------------------------------------

    async def import_unknown_words(
        self,
        user_id: str,
        cefr_level: str,
        category: str | None = None,
    ) -> tuple[list[WordRead], int]:
        """
        Kullanıcının 'unknown' veya 'partial' işaretlediği kelimeleri
        kelime kartlarına ekler.

        Returns:
            (eklenen_kelimeler, atlanan_count) tuple'ı
        """
        progress = await self._placement_repo.get_progress(user_id)
        level_progress = progress.levels.get(cefr_level)

        if not level_progress:
            return [], 0

        # Bilinmeyen veya kısmen bilinen kelimeler
        target_words = [
            word
            for word, status in level_progress.answers.items()
            if status in (PlacementAnswerStatus.UNKNOWN, PlacementAnswerStatus.PARTIAL)
        ]

        if not target_words:
            return [], 0

        effective_category = category or f"Placement {cefr_level}"
        items = [
            WordCreate(
                word=w,
                definition="",  # Kullanıcı sonradan dolduracak
                example="",
                category=effective_category,
            )
            for w in target_words
        ]

        return await self._word_service.add_words(user_id, items)

    # ------------------------------------------------------------------
    # İstatistik yardımcıları
    # ------------------------------------------------------------------

    @staticmethod
    def compute_level_stats(
        level: str, progress: PlacementProgress
    ) -> dict[str, Any]:
        """Seviye için know/partial/unknown dağılımını hesaplar."""
        level_progress = progress.levels.get(level)
        if not level_progress:
            return {"know": 0, "partial": 0, "unknown": 0, "total_answered": 0}

        counts: dict[str, int] = {"know": 0, "partial": 0, "unknown": 0}
        for status in level_progress.answers.values():
            key = status if isinstance(status, str) else status.value
            if key in counts:
                counts[key] += 1

        return {**counts, "total_answered": sum(counts.values())}
