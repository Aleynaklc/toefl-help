"""
QuizService — Leitner box sistemi ve ağırlıklı soru seçimi.

Algoritma (JSX'teki pickWeighted ile birebir aynı):
  - Box 1 → ağırlık 5 (en sık görünür)
  - Box 5 → ağırlık 1 (en seyrek)
  - Ağırlıklı rastgele seçim, tekrar olmadan

Çoktan seçmeli mod: kategoride ≥ 4 kelime varsa aktif.
Context (boşluklu cümle) modu: kelimede example varsa kullanılır.
"""

from __future__ import annotations

import random
import re

from sqlalchemy.ext.asyncio import AsyncSession

from app.core.exceptions import AppError
from app.db.models import Word
from app.domain.schemas import (
    QuizAnswerRequest,
    QuizOption,
    QuizQuestion,
    QuizRoundRequest,
    QuizRoundResponse,
    WordRead,
)
from app.repositories import ALL_CATEGORIES, WordRepository, word_to_schema

_ROUND_SIZE = 7
_MIN_OPTIONS = 4


class QuizService:
    """Quiz iş mantığı."""

    def __init__(self, session: AsyncSession) -> None:
        self._repo = WordRepository(session)

    async def generate_round(
        self, user_id: str, request: QuizRoundRequest
    ) -> QuizRoundResponse:
        """7 soruluk bir quiz turu üretir."""
        category = request.category
        all_words = await self._repo.list_by_user(user_id, category if category != ALL_CATEGORIES else None)

        if not all_words:
            raise AppError("Bu kategoride henüz kelime yok.", status_code=422)

        from datetime import datetime, timezone
        now = datetime.now(timezone.utc)
        due = [w for w in all_words if w.next_review_at is None or w.next_review_at <= now]
        not_due = [w for w in all_words if w.next_review_at is not None and w.next_review_at > now]
        pool = due + not_due
        selected = _pick_weighted(pool, min(_ROUND_SIZE, len(pool)))
        can_mc = len(all_words) >= _MIN_OPTIONS

        questions: list[QuizQuestion] = []
        for word in selected:
            schema = word_to_schema(word)
            options: list[QuizOption] = []
            blank_sentence: str | None = None

            if can_mc:
                options = _build_options(word, all_words)

            uses_context = bool(word.example)
            if uses_context:
                blank_sentence = _make_blank(word.example, word.word)

            questions.append(
                QuizQuestion(
                    word=schema,
                    options=options,
                    uses_context=uses_context,
                    blank_sentence=blank_sentence,
                )
            )

        return QuizRoundResponse(questions=questions, mode=request.mode)

    async def record_answer(
        self, user_id: str, answer: QuizAnswerRequest
    ) -> WordRead:
        """Cevabı kaydeder ve Leitner box'ı günceller."""
        word = await self._repo.get(user_id, answer.word_id)
        if word is None:
            from app.core.exceptions import NotFoundError

            raise NotFoundError("Kelime bulunamadı")

        from datetime import datetime, timezone, timedelta
        import math

        now = datetime.now(timezone.utc)
        word.last_reviewed = now

        if answer.correct:
            word.correct_count += 1
            word.repetition_count += 1
            # SM-2 interval calculation
            if word.repetition_count == 1:
                interval_days = 1
            elif word.repetition_count == 2:
                interval_days = 6
            else:
                # Use ease_factor for exponential growth
                prev_interval = max(1, (now - (word.last_reviewed or now)).days)
                interval_days = round(prev_interval * word.ease_factor)
            interval_days = max(1, min(interval_days, 365))
            word.next_review_at = now + timedelta(days=interval_days)
            word.ease_factor = max(1.3, word.ease_factor + 0.1)
            word.box = min(5, word.box + 1)
        else:
            word.wrong_count += 1
            word.repetition_count = 0
            word.next_review_at = now  # Review again today
            word.ease_factor = max(1.3, word.ease_factor - 0.2)
            word.box = max(1, word.box - 1)
        await self._repo.update(word)
        return word_to_schema(word)


# ---------------------------------------------------------------------------
# Ağırlıklı seçim yardımcıları
# ---------------------------------------------------------------------------


def _weight_for_box(box: int) -> int:
    """Box 1 → 5, Box 5 → 1"""
    return 6 - box


def _pick_weighted(pool: list[Word], n: int) -> list[Word]:
    """Leitner ağırlıklarına göre n adet benzersiz kelime seçer."""
    candidates = list(pool)
    chosen: list[Word] = []

    while candidates and len(chosen) < n:
        weights = [_weight_for_box(w.box) for w in candidates]
        total = sum(weights)
        r = random.random() * total
        idx = 0
        for i, w in enumerate(weights):
            r -= w
            if r <= 0:
                idx = i
                break
        idx = min(idx, len(candidates) - 1)
        chosen.append(candidates[idx])
        candidates.pop(idx)

    return chosen


def _build_options(correct: Word, pool: list[Word]) -> list[QuizOption]:
    """Doğru cevabı içeren 4 seçeneği döndürür (karıştırılmış)."""
    distractors = [w for w in pool if w.id != correct.id]
    picked = random.sample(distractors, min(3, len(distractors)))
    all_opts = [correct] + picked
    random.shuffle(all_opts)
    return [QuizOption(id=w.id, word=w.word, definition=w.definition) for w in all_opts]


def _make_blank(example: str, word: str) -> str:
    """Örnek cümlede kelimeyi '___' ile değiştirir (büyük/küçük harf duyarsız)."""
    pattern = re.compile(re.escape(word), re.IGNORECASE)
    blanked = pattern.sub("___", example, count=1)
    return blanked
