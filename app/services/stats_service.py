"""
StatsService — kullanıcı performans istatistiklerini hesaplar.

Döndürülen veriler JSX Stats bileşeni ile birebir eşleşmektedir:
- Toplam kelime sayısı
- Toplam deneme (doğru + yanlış)
- Doğruluk oranı (%)
- Ustalaşılan (box == 5) kelime sayısı
- Her box için kelime dağılımı [box1, box2, box3, box4, box5]
- En çok yanlış yapılan 5 kelime

Performans: toplu istatistikler SQL aggregates ile, hardest listesi
için küçük sonuç kümesi Python'da işlenir.
"""

from __future__ import annotations

from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.models import Word
from app.domain.schemas import StatsSummary, WordRead
from app.repositories import ALL_CATEGORIES, WordRepository, word_to_schema


class StatsService:
    """İstatistik hesaplama iş mantığı."""

    def __init__(self, session: AsyncSession) -> None:
        self._session = session
        self._repo = WordRepository(session)

    async def compute_stats(
        self, user_id: str, category: str | None = None
    ) -> StatsSummary:
        """
        SQL aggregates ile performanslı istatistik hesaplar.

        Tüm kelimeler belleğe çekilmez; sadece toplamlar ve
        en fazla hatalı 5 kelime sorgulanır.
        """
        effective_category = (
            None if not category or category == ALL_CATEGORIES else category
        )

        # Temel aggregate sorgular
        base_stmt = select(Word).where(Word.user_id == user_id)
        if effective_category:
            base_stmt = base_stmt.where(Word.category == effective_category)

        agg_stmt = select(
            func.count(Word.id).label("total"),
            func.coalesce(func.sum(Word.correct_count), 0).label("total_correct"),
            func.coalesce(func.sum(Word.wrong_count), 0).label("total_wrong"),
        ).where(Word.user_id == user_id)
        if effective_category:
            agg_stmt = agg_stmt.where(Word.category == effective_category)

        agg_result = await self._session.execute(agg_stmt)
        row = agg_result.one()

        total_words: int = row.total or 0
        total_correct: int = int(row.total_correct or 0)
        total_wrong: int = int(row.total_wrong or 0)
        total_attempts = total_correct + total_wrong

        accuracy: int | None = None
        if total_attempts > 0:
            accuracy = round((total_correct / total_attempts) * 100)

        # Box dağılımı — GROUP BY box
        box_stmt = (
            select(Word.box, func.count(Word.id).label("cnt"))
            .where(Word.user_id == user_id)
            .group_by(Word.box)
        )
        if effective_category:
            box_stmt = box_stmt.where(Word.category == effective_category)

        box_result = await self._session.execute(box_stmt)
        box_map: dict[int, int] = {r.box: r.cnt for r in box_result}
        box_counts = [box_map.get(b, 0) for b in range(1, 6)]
        mastered = box_map.get(5, 0)  # box 5 = ustalaşıldı

        # En çok hata yapılan 5 kelime (sadece wrong_count > 0 olanlar)
        hardest_stmt = (
            base_stmt.where(Word.wrong_count > 0)
            .order_by(Word.wrong_count.desc())
            .limit(5)
        )
        hardest_result = await self._session.execute(hardest_stmt)
        hardest: list[WordRead] = [
            word_to_schema(w) for w in hardest_result.scalars().all()
        ]

        return StatsSummary(
            total_words=total_words,
            total_attempts=total_attempts,
            accuracy=accuracy,
            mastered=mastered,
            box_counts=box_counts,
            hardest=hardest,
        )
