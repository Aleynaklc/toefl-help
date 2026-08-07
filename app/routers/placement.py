"""
Seviye testi endpoint'leri.

GET    /api/placement/levels                   → mevcut CEFR seviyelerini listele
GET    /api/placement/words/{level}            → seviyeye ait kelimeleri getir
GET    /api/placement/progress                 → kullanıcının mevcut ilerlemesi
POST   /api/placement/answer                   → kelime cevabını kaydet
POST   /api/placement/import/{level}           → bilinmeyenleri kelime kartına aktar
DELETE /api/placement/progress/{level}         → seviye ilerlemesini sıfırla
"""

from __future__ import annotations

from typing import Annotated, Any

from fastapi import APIRouter, Depends, HTTPException, Request
from pydantic import BaseModel
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_session
from app.domain.enums import PlacementAnswerStatus
from app.domain.schemas import PlacementProgress
from app.repositories import PlacementRepository
from app.services.placement_service import PlacementService

router = APIRouter(prefix="/api/placement", tags=["placement"])

Session = Annotated[AsyncSession, Depends(get_session)]


def _user_id(request: Request) -> str:
    return request.state.user_id


# ---------------------------------------------------------------------------
# Request modelleri (router'a özgü, domain schema'larına karışmamalı)
# ---------------------------------------------------------------------------


class WordAnswerPayload(BaseModel):
    """Tek kelime cevabı."""

    level: str               # CEFR seviyesi: A1, B2 vb.
    word: str                # Kelime string'i: "abandon"
    status: PlacementAnswerStatus  # know | partial | unknown


class ImportPayload(BaseModel):
    """Kelime kartına aktarma isteği."""

    category: str | None = None  # Atanacak kategori; varsayılan "Placement {level}"


# ---------------------------------------------------------------------------
# Endpoint'ler
# ---------------------------------------------------------------------------


@router.get("/levels", summary="Mevcut seviyeleri listele")
async def list_levels() -> list[str]:
    """Veri tabanında mevcut CEFR seviyelerini döndürür: A1, A2, B1, ..."""
    return PlacementService.get_available_levels()


@router.get("/words/{level}", summary="Seviye kelimelerini getir")
async def get_words(level: str) -> dict[str, Any]:
    """
    Belirtilen CEFR seviyesindeki kelime listelerini döndürür.
    Kelimeler bucket'a göre gruplandırılmıştır (noun, verb, adjective, adverb, other).
    """
    try:
        data = PlacementService.get_words_for_level(level.upper())
    except Exception as exc:
        raise HTTPException(status_code=404, detail=str(exc)) from exc
    return {"level": level.upper(), "buckets": data}


@router.get("/progress", response_model=PlacementProgress, summary="İlerleme durumu")
async def get_progress(request: Request, session: Session) -> PlacementProgress:
    """Kullanıcının tüm seviyelerdeki seviye testi ilerlemesini döndürür."""
    svc = PlacementService(session)
    return await svc.get_progress(_user_id(request))


@router.post("/answer", response_model=PlacementProgress, summary="Kelime cevabı kaydet")
async def record_answer(
    request: Request,
    session: Session,
    payload: WordAnswerPayload,
) -> PlacementProgress:
    """
    Bir kelime için seviye testi cevabını kaydeder.

    - `level`: CEFR seviyesi (A1, A2, B1, B2, C1, C2)
    - `word`: Kelime (örn. "abandon")
    - `status`: know | partial | unknown
    """
    svc = PlacementService(session)
    return await svc.record_word_answer(
        user_id=_user_id(request),
        cefr_level=payload.level.upper(),
        word=payload.word,
        status=payload.status,
    )


@router.post(
    "/import/{level}",
    summary="Bilinmeyenleri kelime kartına aktar",
)
async def import_unknown_words(
    request: Request,
    session: Session,
    level: str,
    payload: ImportPayload | None = None,
) -> dict[str, Any]:
    """
    Kullanıcının 'unknown' veya 'partial' işaretlediği kelimeleri
    Kelime Kartı bölümüne aktarır.
    """
    svc = PlacementService(session)
    category = payload.category if payload else None
    added, skipped = await svc.import_unknown_words(
        user_id=_user_id(request),
        cefr_level=level.upper(),
        category=category,
    )
    return {
        "added": len(added),
        "skipped": skipped,
        "words": [w.model_dump() for w in added],
    }


@router.delete(
    "/progress/{level}",
    status_code=204,
    summary="Seviye ilerlemesini sıfırla",
)
async def reset_level_progress(
    request: Request,
    session: Session,
    level: str,
) -> None:
    """Belirtilen CEFR seviyesinin tüm cevaplarını siler."""
    svc = PlacementService(session)
    progress = await svc.get_progress(_user_id(request))

    level_key = level.upper()
    if level_key in progress.levels:
        del progress.levels[level_key]

    repo = PlacementRepository(session)
    await repo.save_progress(_user_id(request), progress)
