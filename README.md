# TOEFL Vocab

Modüler TOEFL kelime öğrenme uygulaması — **Leitner box sistemi**, **AI yazma geri bildirimi** ve **CEFR seviye testi**.

## Mimari

```
app/
├── main.py              # FastAPI giriş noktası
├── config.py            # Pydantic Settings (.env'den yüklenir)
├── core/
│   ├── exceptions.py    # AppError hiyerarşisi
│   ├── ids.py           # ID üretici
│   └── middleware.py    # Cookie tabanlı anonim session
├── db/
│   ├── base.py          # SQLAlchemy DeclarativeBase
│   ├── models.py        # ORM modelleri (User, Word, PlacementProgress, WritingEntry)
│   └── session.py       # Async engine + session factory
├── domain/
│   ├── enums.py         # QuizMode, WritingTaskType, PlacementAnswerStatus
│   └── schemas.py       # Pydantic giriş/çıkış şemaları
├── repositories/        # Veri erişim katmanı
├── services/            # İş mantığı katmanı
│   ├── word_service.py       # Kelime parse + ekleme
│   ├── quiz_service.py       # Leitner + çoktan seçmeli
│   ├── writing_service.py    # Anthropic AI entegrasyonu
│   ├── placement_service.py  # CEFR seviye testi
│   └── stats_service.py      # Performans istatistikleri
└── routers/             # HTTP endpoint'leri
    ├── words.py     → /api/words
    ├── quiz.py      → /api/quiz
    ├── stats.py     → /api/stats
    ├── writing.py   → /api/writing
    └── placement.py → /api/placement
```

## Kurulum

```bash
# 1. Bağımlılıkları yükle
pip install uv
uv sync

# 2. Ortam değişkenlerini ayarla
cp .env.example .env
# .env dosyasını düzenle (özellikle ANTHROPIC_API_KEY)

# 3. Sunucuyu başlat (DB otomatik oluşturulur)
uv run uvicorn app.main:app --reload
```

Swagger UI: **http://localhost:8000/docs**

## API Endpoint'leri

### Kelimeler `/api/words`
| Metod | Yol | Açıklama |
|-------|-----|----------|
| GET | `/api/words` | Kelimeleri listele (`?category=` filtresi) |
| POST | `/api/words` | Tekil kelime ekle |
| POST | `/api/words/bulk` | Toplu metin parse + ekle |
| DELETE | `/api/words/{id}` | Kelime sil |

### Quiz `/api/quiz`
| Metod | Yol | Açıklama |
|-------|-----|----------|
| POST | `/api/quiz/round` | Leitner ağırlıklı quiz turu başlat |
| POST | `/api/quiz/answer` | Cevap kaydet (box güncellenir) |

### İstatistik `/api/stats`
| Metod | Yol | Açıklama |
|-------|-----|----------|
| GET | `/api/stats` | Performans özeti |

### Yazma `/api/writing`
| Metod | Yol | Açıklama |
|-------|-----|----------|
| GET | `/api/writing/prompts` | Rastgele prompt (`?task_type=email\|discussion`) |
| GET | `/api/writing/prompts/all` | Tüm prompt'lar |
| POST | `/api/writing/submit` | Yazı gönder + AI geri bildirimi al |
| GET | `/api/writing/history` | Geçmiş yazılar |

### Seviye Testi `/api/placement`
| Metod | Yol | Açıklama |
|-------|-----|----------|
| GET | `/api/placement/levels` | Mevcut CEFR seviyeleri |
| GET | `/api/placement/words/{level}` | Seviye kelimeleri |
| GET | `/api/placement/progress` | Kullanıcı ilerlemesi |
| POST | `/api/placement/answer` | Kelime cevabı kaydet |
| POST | `/api/placement/import/{level}` | Bilinmeyenleri karta aktar |
| DELETE | `/api/placement/progress/{level}` | Seviye ilerlemesini sıfırla |

## Toplu Kelime Ekleme Formatı

```
POST /api/words/bulk
{
  "text": "abandon - terk etmek\nacquire - edinmek\nbenefit: fayda sağlamak",
  "category": "Akademik"
}
```

Desteklenen ayırıcılar: ` - `, ` — `, `:`, `,` (ilk virgül)

## Geliştirme

```bash
# Testleri çalıştır
uv run pytest tests/ -v

# Demo verileri ekle
uv run python scripts/seed_data.py

# Kod formatlama
uv run ruff check . --fix
uv run ruff format .
```

## Ortam Değişkenleri

| Değişken | Varsayılan | Açıklama |
|----------|-----------|----------|
| `DATABASE_URL` | `sqlite+aiosqlite:///./toefl_vocab.db` | DB bağlantısı |
| `ANTHROPIC_API_KEY` | _(boş)_ | AI yazma geri bildirimi için gerekli |
| `ANTHROPIC_MODEL` | `claude-sonnet-4-20250514` | Claude model versiyonu |
| `SECRET_KEY` | `dev-secret-change-me` | Production'da değiştir |
| `APP_ENV` | `development` | `production` veya `development` |
| `DEBUG` | `true` | SQL sorgularını logla |

## Production

```bash
# PostgreSQL için .env
DATABASE_URL=postgresql+asyncpg://user:pass@db:5432/toefl_vocab

# Migration (production'a geçişte)
uv run alembic revision --autogenerate -m "initial"
uv run alembic upgrade head

# Sunucuyu başlat
uv run uvicorn app.main:app --host 0.0.0.0 --port 8000 --workers 4
```
