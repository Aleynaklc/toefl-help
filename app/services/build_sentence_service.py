"""
BuildSentenceService — 2026 TOEFL "Build a Sentence" görevi simülasyonu.

Kullanıcının kelime kartlarından cümle kurma egzersizi üretir.
Cümlenin kelimeleri karıştırılır + 1-2 decoy kelime eklenir.
Kullanıcı doğru sırayı bulmalı (all-or-nothing puanlama).
"""

from __future__ import annotations

import random

from sqlalchemy.ext.asyncio import AsyncSession

from app.core.exceptions import AppError
from app.repositories import ALL_CATEGORIES, WordRepository

# Statik TOEFL seviyesi cümle şablonları. {word} yerlerine kelime enjekte edilir.
_TEMPLATES = [
    ("The concept of {word} is fundamental to understanding academic discourse.",
     ["concept", "of", "is", "fundamental", "to", "understanding", "academic", "discourse"]),
    ("Researchers often analyze {word} in the context of broader social phenomena.",
     ["often", "analyze", "in", "the", "context", "of", "broader", "social", "phenomena"]),
    ("A thorough understanding of {word} enables students to engage with complex texts.",
     ["thorough", "understanding", "of", "enables", "students", "to", "engage", "with", "complex", "texts"]),
    ("The {word} theory has been widely discussed in academic literature.",
     ["theory", "has", "been", "widely", "discussed", "in", "academic", "literature"]),
    ("Scholars debate the role of {word} in shaping modern educational systems.",
     ["scholars", "debate", "the", "role", "of", "in", "shaping", "modern", "educational", "systems"]),
    ("{word} plays a significant role in the development of critical thinking skills.",
     ["plays", "a", "significant", "role", "in", "the", "development", "of", "critical", "thinking", "skills"]),
    ("Many scientists argue that {word} is essential for academic progress.",
     ["many", "scientists", "argue", "that", "is", "essential", "for", "academic", "progress"]),
    ("The study of {word} requires both analytical and creative approaches.",
     ["the", "study", "of", "requires", "both", "analytical", "and", "creative", "approaches"]),
]

_DECOYS = [
    "however", "therefore", "moreover", "subsequently", "consequently",
    "alternatively", "specifically", "primarily", "essentially", "particularly"
]


class BuildSentenceService:
    def __init__(self, session: AsyncSession | None) -> None:
        self._repo = WordRepository(session) if session else None

    async def generate_round(self, user_id: str, category: str | None = None) -> dict:
        """5 soruluk Build a Sentence turu üretir."""
        if not self._repo:
            raise AppError("Session gerekli", status_code=500)
        all_words = await self._repo.list_by_user(
            user_id, category if category != ALL_CATEGORIES else None
        )
        if len(all_words) < 3:
            raise AppError("Build a Sentence için en az 3 kelime gerekli.", status_code=422)

        selected = random.sample(all_words, min(5, len(all_words)))
        questions = []
        for word in selected:
            q = _make_question(word.word, word.definition)
            questions.append(q)
        return {"questions": questions, "total": len(questions)}

    def check_answer(self, correct_sentence: str, user_answer: str) -> dict:
        """Cümleyi doğrular (tam eşleşme, büyük/küçük harf duyarsız)."""
        norm_correct = " ".join(correct_sentence.lower().split())
        norm_user = " ".join(user_answer.lower().split())
        is_correct = norm_correct == norm_user
        return {"correct": is_correct, "correct_sentence": correct_sentence}


def _make_question(word: str, definition: str) -> dict:
    """Tek Build a Sentence sorusu üretir."""
    template, extra_words = random.choice(_TEMPLATES)
    sentence = template.replace("{word}", word)
    
    # Cümlenin tüm kelimeleri
    sentence_words = sentence.split()
    
    # 1-2 decoy kelime ekle
    num_decoys = random.randint(1, 2)
    decoys = random.sample(_DECOYS, num_decoys)
    
    all_tokens = sentence_words + decoys
    random.shuffle(all_tokens)
    
    return {
        "sentence": sentence,
        "tokens": all_tokens,
        "decoys": decoys,
        "target_word": word,
        "hint": definition,
    }
