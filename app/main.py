"""
TOEFL Vocab — FastAPI uygulama giriş noktası.

Başlatma sırası (lifespan):
  1. SQLAlchemy ile tüm tabloları oluştur (create_all)
  2. Router'ları kaydet
  3. Session middleware'ini bağla
  4. Hata işleyicilerini tanımla

Geliştirme:
    uv run uvicorn app.main:app --reload

Production:
    uv run uvicorn app.main:app --host 0.0.0.0 --port 8000 --workers 4
"""

from __future__ import annotations

from collections.abc import AsyncGenerator
from contextlib import asynccontextmanager

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from app.config import get_settings
from app.core.exceptions import AppError
from app.core.middleware import SessionMiddleware
from app.db.base import Base
from app.db.session import engine
from app.routers import placement, quiz, stats, words, writing
from app.routers import complete_words, build_sentence

settings = get_settings()


# ---------------------------------------------------------------------------
# Lifespan — uygulama başlangıç / bitiş
# ---------------------------------------------------------------------------


@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncGenerator[None, None]:
    """Uygulama başlarken DB tablolarını oluştur."""
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield
    # Kapatma işlemleri (şimdilik yok)
    await engine.dispose()


# ---------------------------------------------------------------------------
# FastAPI uygulaması
# ---------------------------------------------------------------------------


app = FastAPI(
    title=settings.app_name,
    description=(
        "Modüler TOEFL kelime öğrenme uygulaması — "
        "Leitner box sistemi, AI yazma geri bildirimi ve CEFR seviye testi."
    ),
    version="0.1.0",
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan,
)

# ---------------------------------------------------------------------------
# Middleware
# ---------------------------------------------------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"] if not settings.is_production else [],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_middleware(SessionMiddleware)

# ---------------------------------------------------------------------------
# Hata işleyiciler
# ---------------------------------------------------------------------------


@app.exception_handler(AppError)
async def app_error_handler(request: Request, exc: AppError) -> JSONResponse:
    """AppError hiyerarşisini uygun HTTP yanıtına çevirir."""
    return JSONResponse(
        status_code=exc.status_code,
        content={"detail": exc.message},
    )


# ---------------------------------------------------------------------------
# Router'lar
# ---------------------------------------------------------------------------

app.include_router(words.router)
app.include_router(quiz.router)
app.include_router(stats.router)
app.include_router(writing.router)
app.include_router(placement.router)
app.include_router(complete_words.router)
app.include_router(build_sentence.router)


# ---------------------------------------------------------------------------
# Sağlık kontrolü
# ---------------------------------------------------------------------------


@app.get("/health", tags=["system"], summary="Sağlık kontrolü")
async def health_check() -> dict:
    """Uygulamanın çalışıp çalışmadığını kontrol eder."""
    return {
        "status": "ok",
        "app": settings.app_name,
        "env": settings.app_env,
    }
