"""
/api/complete-words — Complete the Words endpoints.
"""

from __future__ import annotations

from fastapi import APIRouter, Depends, Request
from pydantic import BaseModel
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_session
from app.services.complete_words_service import CompleteWordsService

def get_user_id(request: Request) -> str:
    return request.state.user_id

router = APIRouter(prefix="/api/complete-words", tags=["complete-words"])


@router.get("/round", summary="Complete the Words turu")
async def get_round(
    request: Request,
    category: str = "Tümü",
    session: AsyncSession = Depends(get_session),
) -> dict:
    user_id = get_user_id(request)
    svc = CompleteWordsService(session)
    return await svc.generate_round(user_id, category if category != "Tümü" else None)


class CheckRequest(BaseModel):
    full_word: str
    user_answer: str


@router.post("/check", summary="Cevabı doğrula")
async def check_answer(body: CheckRequest) -> dict:
    svc = CompleteWordsService(None)
    return await svc.check_answer(body.full_word, body.user_answer)
