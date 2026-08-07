#!/usr/bin/env python3
"""
seed_data.py — DB'yi başlangıç verileriyle doldurur.

Kullanım:
    uv run python scripts/seed_data.py

Açıklama:
    data/word_lists/ altındaki txt dosyalarından kelime - anlam çiftlerini okur
    ve "demo" kullanıcısı için DB'ye ekler. Geliştirme ortamında uygulamayı
    hızlıca test etmek için kullanılır.
"""

from __future__ import annotations

import asyncio
import sys
from pathlib import Path

# Proje kökünü Python path'e ekle
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from app.config import get_settings
from app.db.base import Base
from app.db.models import User
from app.db.session import SessionLocal, engine
from app.services.word_service import WordService

settings = get_settings()

_DATA_DIR = Path(__file__).resolve().parent.parent / "data" / "word_lists"
_DEMO_USER_ID = "d" * 32  # Sabit demo kullanıcı ID'si

# Hangi dosyaların hangi kategoriye ekleneceği
_FILE_CATEGORY_MAP = {
    "common_verbs.txt": "Fiiller",
    "common_toefl_verbs.txt": "TOEFL Fiilleri",
    "common_adjectives.txt": "Sıfatlar",
    "common_adverbs.txt": "Zarflar",
}


async def seed() -> None:
    """Veritabanını başlangıç verileriyle doldurur."""
    print("🌱 Seed başlatılıyor...")

    # DB tablolarını oluştur
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    async with SessionLocal() as session:
        # Demo kullanıcıyı oluştur veya bul
        user = await session.get(User, _DEMO_USER_ID)
        if user is None:
            user = User(id=_DEMO_USER_ID)
            session.add(user)
            await session.flush()
            print(f"✅ Demo kullanıcı oluşturuldu: {_DEMO_USER_ID}")
        else:
            print(f"ℹ️  Demo kullanıcı zaten mevcut: {_DEMO_USER_ID}")

        svc = WordService(session)
        total_added = 0

        for filename, category in _FILE_CATEGORY_MAP.items():
            filepath = _DATA_DIR / filename
            if not filepath.exists():
                print(f"⚠️  Dosya bulunamadı: {filepath}")
                continue

            text = filepath.read_text(encoding="utf-8")
            items = WordService.parse_bulk_text(text, category=category)

            added, skipped = await svc.add_words(_DEMO_USER_ID, items)
            total_added += len(added)
            print(
                f"📚 {filename}: {len(added)} eklendi, {skipped} atlandı "
                f"(kategori: {category})"
            )

        await session.commit()
        print(f"\n✨ Toplam {total_added} kelime eklendi.")
        print(f"🔑 Demo kullanıcı ID: {_DEMO_USER_ID}")
        print("   (Bu ID'yi toefl_session cookie olarak kullanabilirsiniz)")


if __name__ == "__main__":
    asyncio.run(seed())
