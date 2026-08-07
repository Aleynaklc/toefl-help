"""
Session middleware — cookie tabanlı anonim kimlik doğrulama.

Her istekte:
1. SESSION_COOKIE_NAME cookie'si okunur.
2. Geçerli bir user_id varsa request.state.user_id atanır.
3. Cookie yoksa veya geçersizse yeni bir user_id üretilir,
   DB'de User kaydı oluşturulur ve response'a cookie eklenir.
"""

from __future__ import annotations

import secrets

from sqlalchemy.ext.asyncio import AsyncSession
from starlette.middleware.base import BaseHTTPMiddleware, RequestResponseEndpoint
from starlette.requests import Request
from starlette.responses import Response

from app.config import get_settings
from app.db.models import User
from app.db.session import SessionLocal

settings = get_settings()


class SessionMiddleware(BaseHTTPMiddleware):
    """Cookie'den user_id çöz; yoksa yeni kullanıcı oluştur."""

    async def dispatch(self, request: Request, call_next: RequestResponseEndpoint) -> Response:
        user_id: str | None = request.cookies.get(settings.session_cookie_name)
        new_cookie: str | None = None

        if not user_id or not _is_valid_id(user_id):
            user_id = secrets.token_hex(16)
            new_cookie = user_id
            async with SessionLocal() as session:
                await _ensure_user(session, user_id)

        request.state.user_id = user_id
        response = await call_next(request)

        if new_cookie:
            response.set_cookie(
                key=settings.session_cookie_name,
                value=new_cookie,
                max_age=settings.session_max_age_days * 86_400,
                httponly=True,
                samesite="lax",
            )
        return response


def _is_valid_id(value: str) -> bool:
    """Basit uzunluk ve hex doğrulaması."""
    return len(value) == 32 and all(c in "0123456789abcdef" for c in value)


async def _ensure_user(session: AsyncSession, user_id: str) -> None:
    """Kullanıcı yoksa oluştur."""
    user = await session.get(User, user_id)
    if user is None:
        session.add(User(id=user_id))
        await session.commit()
