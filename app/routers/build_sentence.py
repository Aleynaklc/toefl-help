"""
/api/build-sentence — Build a Sentence endpoints.
"""

from __future__ import annotations

from fastapi import APIRouter, Depends, Request
from pydantic import BaseModel
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_session
from app.services.build_sentence_service import BuildSentenceService

def get_user_id(request: Request) -> str:
    return request.state.user_id

router = APIRouter(prefix="/api/build-sentence", tags=["build-sentence"])


@router.get("/round", summary="Build a Sentence turu")
async def get_round(
    request: Request,
    category: str = "Tümü",
    session: AsyncSession = Depends(get_session),
) -> dict:
    user_id = get_user_id(request)
    svc = BuildSentenceService(session)
    return await svc.generate_round(user_id, category if category != "Tümü" else None)


class CheckRequest(BaseModel):
    correct_sentence: str
    user_answer: str


@router.post("/check", summary="Cevabı doğrula")
async def check_answer(body: CheckRequest) -> dict:
    svc = BuildSentenceService(None)
    return svc.check_answer(body.correct_sentence, body.user_answer)
