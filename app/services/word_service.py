"""
WordService — kelime ekleme, ayrıştırma ve tekrar kontrolü.

Desteklenen toplu giriş formatları (satır başına bir kelime):
  word - definition
  word — definition
  word: definition
  word, definition   (ilk virgüle kadar kelime)
"""

from __future__ import annotations

import re

from sqlalchemy.ext.asyncio import AsyncSession

from app.domain.schemas import WordCreate, WordRead
from app.repositories import WordRepository, word_to_schema


class WordService:
    """Kelime iş mantığı."""

    def __init__(self, session: AsyncSession) -> None:
        self._repo = WordRepository(session)

    # ------------------------------------------------------------------
    # Toplu metin ayrıştırma
    # ------------------------------------------------------------------

    @staticmethod
    def parse_bulk_text(text: str, category: str = "Genel") -> list[WordCreate]:
        """
        Kullanıcının yapıştırdığı metni `WordCreate` listesine çevirir.

        Desteklenen ayırıcılar: ` - `, ` — `, `: `, `,` (ilk virgül).
        Boş satırlar ve '#' ile başlayan açıklama satırları atlanır.
        """
        results: list[WordCreate] = []
        for raw_line in text.splitlines():
            line = raw_line.strip()
            if not line or line.startswith("#"):
                continue

            pair = _split_line(line)
            if pair is None:
                continue

            word_str, definition_str = pair
            word_str = word_str.strip()
            definition_str = definition_str.strip()

            if not word_str or not definition_str:
                continue

            # Pydantic şemasındaki max_length sınırlarını aşanları (örn. prompt kalıntıları) atla
            if len(word_str) > 120 or len(definition_str) > 500:
                continue

            results.append(
                WordCreate(
                    word=word_str,
                    definition=definition_str,
                    example="",
                    category=category,
                )
            )
        return results

    # ------------------------------------------------------------------
    # Kelime ekleme
    # ------------------------------------------------------------------

    async def add_words(
        self, user_id: str, items: list[WordCreate]
    ) -> tuple[list[WordRead], int]:
        """
        Kelimeleri ekler, zaten var olanları atlar.

        Returns:
            (eklenen_kelimeler, atlanan_count) tuple'ı
        """
        if not items:
            return [], 0

        existing_lower = await self._repo.existing_words_lower(user_id)
        
        # İstek içindeki tekrarları temizle (ilk geleni al)
        unique_items: list[WordCreate] = []
        seen = set()
        for it in items:
            key = it.word.lower()
            if key not in seen:
                seen.add(key)
                unique_items.append(it)

        # DB'de zaten var olanları atla
        to_add = [it for it in unique_items if it.word.lower() not in existing_lower]
        skipped = len(items) - len(to_add)

        added_models = await self._repo.add_many(user_id, to_add)
        return [word_to_schema(w) for w in added_models], skipped

    async def list_words(
        self, user_id: str, category: str | None = None
    ) -> list[WordRead]:
        """Kullanıcının kelimelerini döndürür."""
        words = await self._repo.list_by_user(user_id, category)
        return [word_to_schema(w) for w in words]

    async def delete_word(self, user_id: str, word_id: str) -> bool:
        """Kelimeyi siler. Bulunamazsa False döner."""
        return await self._repo.delete(user_id, word_id)


# ---------------------------------------------------------------------------
# Yardımcı fonksiyonlar
# ---------------------------------------------------------------------------

_SEPARATORS = re.compile(
    r"\s+[-—]\s+|\s*:\s*",   # " - ", " — ", ":"
)


def _split_line(line: str) -> tuple[str, str] | None:
    """Satırı (kelime, anlam) ikilisine böler."""
    # En güçlü ayırıcılar önce
    m = _SEPARATORS.search(line)
    if m:
        return line[: m.start()], line[m.end() :]

    # Fallback: ilk virgül
    if "," in line:
        idx = line.index(",")
        return line[:idx], line[idx + 1 :]

    return None
