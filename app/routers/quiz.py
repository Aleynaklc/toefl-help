"""
Quiz endpoint'leri.

POST   /api/quiz/round    → yeni quiz turu başlat
POST   /api/quiz/answer   → cevap kaydet (Leitner box günceller)
"""

from __future__ import annotations

from typing import Annotated

from fastapi import APIRouter, Depends, Request
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_session
from app.domain.schemas import QuizAnswerRequest, QuizRoundRequest, QuizRoundResponse, WordRead
from app.services.quiz_service import QuizService

router = APIRouter(prefix="/api/quiz", tags=["quiz"])

Session = Annotated[AsyncSession, Depends(get_session)]


def _user_id(request: Request) -> str:
    return request.state.user_id


@router.post("/round", response_model=QuizRoundResponse, summary="Quiz turu başlat")
async def start_round(
    request: Request,
    session: Session,
    payload: QuizRoundRequest,
) -> QuizRoundResponse:
    """
    Leitner ağırlıklı seçimle 7 soruluk bir quiz turu oluşturur.

    - `category`: "Tümü" veya belirli bir kategori adı
    - `mode`: "meaning" (tanım göster) veya "context" (cümle tamamlama)
    """
    svc = QuizService(session)
    return await svc.generate_round(_user_id(request), payload)


@router.post("/answer", response_model=WordRead, summary="Cevap kaydet")
async def record_answer(
    request: Request,
    session: Session,
    payload: QuizAnswerRequest,
) -> WordRead:
    """
    Doğru/yanlış cevabı kaydeder ve Leitner box'ı günceller.
    Güncellenmiş kelimeyi döndürür.
    """
    svc = QuizService(session)
    return await svc.record_answer(_user_id(request), payload)
