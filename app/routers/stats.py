"""
İstatistik endpoint'i.

GET   /api/stats   → kullanıcı performans özeti
"""

from __future__ import annotations

from typing import Annotated

from fastapi import APIRouter, Depends, Query, Request
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_session
from app.domain.schemas import StatsSummary
from app.services.stats_service import StatsService

router = APIRouter(prefix="/api/stats", tags=["stats"])

Session = Annotated[AsyncSession, Depends(get_session)]


def _user_id(request: Request) -> str:
    return request.state.user_id


@router.get("", response_model=StatsSummary, summary="İstatistik özeti")
async def get_stats(
    request: Request,
    session: Session,
    category: str | None = Query(default=None, description="Kategori filtresi; boş = tümü"),
) -> StatsSummary:
    """
    Kullanıcının kelime kartı performans istatistiklerini döndürür:

    - Toplam kelime ve deneme sayısı
    - Doğruluk oranı (%)
    - Ustalaşılan kelime sayısı (box 5)
    - Her Leitner box'ı için kelime dağılımı
    - En çok yanlış yapılan 5 kelime
    """
    svc = StatsService(session)
    return await svc.compute_stats(_user_id(request), category)
