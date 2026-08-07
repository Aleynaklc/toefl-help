from collections.abc import AsyncGenerator

from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine

from app.config import get_settings

settings = get_settings()

engine = create_async_engine(
    settings.database_url,
    echo=settings.debug and not settings.is_production,
)

SessionLocal = async_sessionmaker(engine, expire_on_commit=False, class_=AsyncSession)


async def get_session() -> AsyncGenerator[AsyncSession, None]:
    """
    FastAPI bağımlılığı: her istek için bir async session sağlar.

    Başarılı tamamlanmada commit, herhangi bir hata durumunda rollback yapılır.
    Bu olmadan tüm yazma işlemleri production'da sessizce geri alınır.
    """
    async with SessionLocal() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise

