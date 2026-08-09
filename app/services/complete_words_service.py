"""
CompleteWordsService — 2026 TOEFL "Complete the Words" görevi simülasyonu.

Kullanıcının kelime kartlarından 10 soruluk egzersiz üretir.
Her soruda İngilizce kelime gösterilir, Türkçe karşılığında
bazı harfler gizlenir → kullanıcı tamamlar.

Format: "oca_" → "ocak" (Türkçe tanım tamamlama)
Ya da: kelimenin kendisi tamamlanır: "phe_____on" → "phenomenon"
"""

from __future__ import annotations

import random
import re

from sqlalchemy.ext.asyncio import AsyncSession

from app.core.exceptions import AppError
from app.repositories import ALL_CATEGORIES, WordRepository


class CompleteWordsService:
    def __init__(self, session: AsyncSession) -> None:
        self._repo = WordRepository(session)

    async def generate_round(self, user_id: str, category: str | None = None) -> dict:
        """10 soruluk Complete the Words turu üretir."""
        all_words = await self._repo.list_by_user(
            user_id, category if category != ALL_CATEGORIES else None
        )
        if len(all_words) < 5:
            raise AppError("Complete the Words için en az 5 kelime gerekli.", status_code=422)

        selected = random.sample(all_words, min(10, len(all_words)))
        questions = []
        for word in selected:
            question = _make_question(word.word, word.definition)
            questions.append(question)
        return {"questions": questions, "total": len(questions)}

    async def check_answer(self, word_id_or_word: str, user_answer: str) -> dict:
        """Tek bir cevabı doğrular (tam eşleşme, büyük/küçük harf duyarsız)."""
        correct = user_answer.strip().lower()
        # word_id_or_word burada correct_answer olarak geliyor
        expected = word_id_or_word.strip().lower()
        is_correct = correct == expected
        return {"correct": is_correct, "expected": word_id_or_word}


def _mask_word(word: str) -> tuple[str, str]:
    """
    Kelimenin ilk ~40%'ini gösterir, kalanı '_' ile maskeler.
    Örnek: 'phenomenon' → 'phe_______'
    Döndürür: (masked, full_word)
    """
    if len(word) <= 3:
        return word[0] + '_' * (len(word) - 1), word
    reveal_count = max(1, len(word) // 3)
    masked = word[:reveal_count] + '_' * (len(word) - reveal_count)
    return masked, word


def _make_question(word: str, definition: str) -> dict:
    """Tek soru objesi üretir."""
    masked, full = _mask_word(word)
    return {
        "masked": masked,
        "full_word": full,
        "hint": definition,  # Türkçe tanım ipucu olarak gösterilir
        "reveal_count": len(full) - masked.count('_'),
    }
