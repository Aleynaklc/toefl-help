"""
Kelime CRUD endpoint'leri.

GET    /api/words              → tüm kelimeleri listele (opsiyonel ?category=)
POST   /api/words              → tekil kelime ekle
POST   /api/words/bulk         → toplu metin parse + ekle
DELETE /api/words/{word_id}    → kelime sil
"""

from __future__ import annotations

from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, Query, Request
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_session
from app.domain.schemas import WordBulkCreate, WordCreate, WordRead
from app.services.word_service import WordService

router = APIRouter(prefix="/api/words", tags=["words"])

# ---------------------------------------------------------------------------
# Bağımlılıklar
# ---------------------------------------------------------------------------

Session = Annotated[AsyncSession, Depends(get_session)]


def _user_id(request: Request) -> str:
    return request.state.user_id


# ---------------------------------------------------------------------------
# Endpoint'ler
# ---------------------------------------------------------------------------


@router.get("", response_model=list[WordRead], summary="Kelimeleri listele")
async def list_words(
    request: Request,
    session: Session,
    category: str | None = Query(default=None, description="Kategori filtresi"),
) -> list[WordRead]:
    """Kullanıcının kelime listesini döndürür. category parametresi ile filtrelenebilir."""
    svc = WordService(session)
    return await svc.list_words(_user_id(request), category)


@router.post("", response_model=WordRead, status_code=201, summary="Kelime ekle")
async def add_word(
    request: Request,
    session: Session,
    payload: WordCreate,
) -> WordRead:
    """Tekil kelime ekler. Zaten varsa 409 döner."""
    svc = WordService(session)
    added, skipped = await svc.add_words(_user_id(request), [payload])
    if not added:
        raise HTTPException(status_code=409, detail="Bu kelime zaten mevcut.")
    return added[0]


@router.post("/bulk", summary="Toplu kelime ekle")
async def add_words_bulk(
    request: Request,
    session: Session,
    payload: WordBulkCreate,
) -> dict:
    """
    `word - definition` formatında yapıştırılmış metni ayrıştırır ve ekler.
    Zaten var olan kelimeler atlanır.

    Örnek giriş:
    ```
    abandon - terk etmek
    acquire - edinmek
    ```
    """
    svc = WordService(session)
    items = WordService.parse_bulk_text(payload.text, payload.category)
    if not items:
        raise HTTPException(status_code=422, detail="Ayrıştırılabilir kelime bulunamadı.")

    added, skipped = await svc.add_words(_user_id(request), items)
    return {
        "added": len(added),
        "skipped": skipped,
        "words": added,
    }


@router.delete("/{word_id}", status_code=204, summary="Kelime sil")
async def delete_word(
    request: Request,
    session: Session,
    word_id: str,
) -> None:
    """Kelimeyi siler. Bulunamazsa 404 döner."""
    svc = WordService(session)
    deleted = await svc.delete_word(_user_id(request), word_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Kelime bulunamadı.")
