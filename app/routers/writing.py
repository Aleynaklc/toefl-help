"""
Yazma görevi endpoint'leri.

GET    /api/writing/prompts          → rastgele prompt (task_type: email|discussion)
POST   /api/writing/submit           → yazı gönder, AI geri bildirimi al
GET    /api/writing/history          → geçmiş yazılar
"""

from __future__ import annotations

import json
from typing import Annotated, Any

from fastapi import APIRouter, Depends, HTTPException, Query, Request
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.exceptions import AIServiceError
from app.db.session import get_session
from app.domain.enums import WritingTaskType
from app.domain.schemas import WritingFeedback, WritingSubmitRequest
from app.repositories import WritingRepository
from app.services.writing_service import WritingService

router = APIRouter(prefix="/api/writing", tags=["writing"])

Session = Annotated[AsyncSession, Depends(get_session)]


def _user_id(request: Request) -> str:
    return request.state.user_id


# ---------------------------------------------------------------------------
# Endpoint'ler
# ---------------------------------------------------------------------------


@router.get("/prompts", summary="Rastgele prompt getir")
async def get_prompt(
    task_type: WritingTaskType = Query(
        default=WritingTaskType.EMAIL,
        description="Görev türü: email veya discussion",
    ),
) -> dict[str, Any]:
    """
    Verilen görev türüne göre rastgele bir yazma prompt'u döndürür.
    Sonuç her çağrıda farklı olabilir.
    """
    return WritingService.get_random_prompt(task_type)


@router.get("/prompts/all", summary="Tüm prompt'ları getir")
async def get_all_prompts(
    task_type: WritingTaskType = Query(
        default=WritingTaskType.EMAIL,
        description="Görev türü: email veya discussion",
    ),
) -> list[dict[str, Any]]:
    """Belirtilen görev türündeki tüm prompt'ları döndürür."""
    return WritingService.get_all_prompts(task_type)


@router.post("/submit", response_model=WritingFeedback, summary="Yazı gönder, geri bildirim al")
async def submit_writing(
    request: Request,
    session: Session,
    payload: WritingSubmitRequest,
) -> WritingFeedback:
    """
    Yazıyı Anthropic Claude API ile değerlendirir ve geri bildirim döndürür.

    - `task_type`: email veya discussion
    - `prompt_id`: kullanılan prompt'un ID'si (kayıt için)
    - `response`: kullanıcının yazdığı metin

    ANTHROPIC_API_KEY ayarlanmamışsa 503 döner.
    """
    # Prompt verisini al
    all_prompts = WritingService.get_all_prompts(payload.task_type)
    prompt_data = next((p for p in all_prompts if p.get("id") == payload.prompt_id), None)

    if prompt_data is None:
        raise HTTPException(status_code=404, detail="Prompt bulunamadı.")

    try:
        feedback = await WritingService.get_feedback(
            payload.task_type, prompt_data, payload.response
        )
    except AIServiceError as exc:
        raise HTTPException(status_code=503, detail=str(exc)) from exc

    # Geri bildirimi DB'ye kaydet
    repo = WritingRepository(session)
    await repo.add_entry(
        user_id=_user_id(request),
        task_type=payload.task_type.value,
        prompt_id=payload.prompt_id,
        prompt_title=prompt_data.get("title", ""),
        response=payload.response,
        overall_score=feedback.overall_score,
        feedback_json=json.dumps(feedback.model_dump(), ensure_ascii=False),
    )

    return feedback


@router.get("/history", summary="Yazma geçmişi")
async def get_history(
    request: Request,
    session: Session,
    limit: int = Query(default=20, ge=1, le=100, description="Maksimum kayıt sayısı"),
) -> list[dict[str, Any]]:
    """Kullanıcının son yazma denemelerini döndürür (en yeni önce)."""
    repo = WritingRepository(session)
    entries = await repo.list_recent(_user_id(request), limit)

    return [
        {
            "id": e.id,
            "task_type": e.task_type,
            "prompt_id": e.prompt_id,
            "prompt_title": e.prompt_title,
            "word_count": len(e.response.split()),
            "overall_score": e.overall_score,
            "created_at": e.created_at.isoformat(),
        }
        for e in entries
    ]
