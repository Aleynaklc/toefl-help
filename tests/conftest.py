"""
Test fixtures — in-memory SQLite DB ve async HTTP istemcisi.

Her test için ayrı engine + commit eden session kullanılır.
SessionMiddleware.dispatch() mock'lanarak user_id doğrudan set edilir.
"""

from __future__ import annotations

from unittest.mock import patch

import pytest_asyncio
from httpx import ASGITransport, AsyncClient
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine

from app.db.base import Base
from app.db.session import get_session
from app.main import app

TEST_DATABASE_URL = "sqlite+aiosqlite:///:memory:"
TEST_USER_ID = "a" * 32


@pytest_asyncio.fixture
async def client():
    """
    Test HTTP istemcisi.

    - Her test için izole in-memory SQLite.
    - override_get_session: her istekte aynı engine'den session açar,
      commit ile veriyi kalıcı hale getirir.
    - SessionMiddleware.dispatch mock'lanarak user_id doğrudan set edilir.
    """
    engine = create_async_engine(TEST_DATABASE_URL, echo=False)
    session_factory = async_sessionmaker(
        engine, expire_on_commit=False, class_=AsyncSession
    )

    # Tabloları oluştur + test kullanıcısını ekle
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    async with session_factory() as setup_session:
        from app.db.models import User

        setup_session.add(User(id=TEST_USER_ID))
        await setup_session.commit()

    # Bağımlılık override: yeni session aç, commit et, kapat
    async def override_get_session():
        async with session_factory() as session:
            yield session
            await session.commit()   # ← test istekleri arasında veriyi kalıcı yap

    app.dependency_overrides[get_session] = override_get_session

    # SessionMiddleware dispatch'ini patch'le
    async def _mock_dispatch(self_mw, request, call_next):
        request.state.user_id = TEST_USER_ID
        return await call_next(request)

    with patch(
        "app.core.middleware.SessionMiddleware.dispatch",
        new=_mock_dispatch,
    ):
        transport = ASGITransport(app=app)
        async with AsyncClient(transport=transport, base_url="http://test") as ac:
            yield ac

    # Temizlik
    app.dependency_overrides.clear()
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
    await engine.dispose()
