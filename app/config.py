from functools import lru_cache
from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    app_name: str = "TOEFL Vocab"
    app_env: str = "development"
    debug: bool = True
    secret_key: str = "dev-secret-change-me"

    database_url: str = "sqlite+aiosqlite:///./toefl_vocab.db"

    anthropic_api_key: str = ""
    anthropic_model: str = "claude-sonnet-4-20250514"
    anthropic_max_tokens: int = 1200

    session_cookie_name: str = "toefl_session"
    session_max_age_days: int = 365

    data_dir: Path = Path(__file__).resolve().parent.parent / "data"

    @property
    def is_production(self) -> bool:
        return self.app_env == "production"


@lru_cache
def get_settings() -> Settings:
    return Settings()
