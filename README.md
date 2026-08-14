# TOEFL Help

TOEFL iBT'nin **21 Ocak 2026 sonrası güncel formatına** göre hazırlanmış çalışma uygulaması.

Uygulama kelime ezberinden ibaret değildir. Kullanıcıyı şu akışla yüksek puana hazırlar:

1. **Seviye tespiti**: A1–C2 kelime açıklarını bul.
2. **Kelime kartları**: Bilmediğin kelimeleri Leitner tekrar sistemine aktar.
3. **Sınav görevleri**: Reading, Listening, Writing ve Speaking drilleri yap.
4. **Takip**: Zayıf kelimeleri, kutu seviyelerini ve çalışma önceliklerini izle.

## Mevcut Hedef Profili

- Sınav aralığı: **Aralık 2026 ilk haftaları**
- Minimum hedef: **4.5+ band**
- Çalışma planı: `TOEFL 2026 > Plan`
- Item bank verisi: `frontend/src/data/toefl2026_item_bank.json`

Entegrasyon yol haritası: `docs/ENTEGRASYON_PLANI.md`

## Hızlı Başlangıç

```bash
# Backend
pip install uv
uv sync
cp .env.example .env
uv run uvicorn app.main:app --reload

# Frontend
cd frontend
npm ci
npm run dev
```

- Uygulama: `http://localhost:5173`
- API dokümantasyonu: `http://localhost:8000/docs`

## Kullanıcı Akışı

| İhtiyaç | Ekran | Ne yapar? |
|--------|------|-----------|
| Nereden başlayacağımı bilmiyorum | `Ana Sayfa` | Günlük çalışma sırasını ve hızlı aksiyonları gösterir |
| Seviyemi bilmiyorum | `Seviye` | CEFR kelime seviyeni ölçer, bilmediklerini karta aktarır |
| Kelime öğrenmek istiyorum | `Kelimeler`, `Quiz` | Kart ekler, Leitner/SM-2 tekrar yapar |
| Reading 2026 görevi çalışacağım | `Tamamla`, `TOEFL 2026 > Reading` | Complete the Words ve kısa okuma drillleri |
| Writing 2026 görevi çalışacağım | `Cümle Kur`, `Yazma`, `TOEFL 2026 > Writing Bank` | Build a Sentence doğru cevapları, Email ve Academic Discussion model cevapları |
| Speaking/Listening çalışacağım | `TOEFL 2026` | Listen/Repeat, Interview ve Listening drillleri |
| Gelişimimi görmek istiyorum | `İstatistik` | Toplam kelime, doğruluk, kutu dağılımı, zor kelimeler |

Detaylı kullanım rehberi: `docs/KULLANIM_REHBERI.md`

## 2026 TOEFL Kapsamı ve Uygulama Havuzu

Uygulamadaki TOEFL 2026 bölümü ETS'in güncel görev adlarını baz alır:

| Bölüm | Resmi toplam | Görevler | Uygulama havuzu |
|------|--------------|----------|----------------|
| Reading | 50 item / 30 dk | Complete the Words, Read in Daily Life, Read an Academic Passage | 30 kelime tamamlama seti, 4 günlük metin, 4 akademik pasaj |
| Listening | 47 item / 29 dk | Listen and Choose a Response, Conversation, Announcement, Academic Talk | 1 kısa tepki, 2 conversation, 1 announcement, 1 academic talk |
| Writing | 12 item / 23 dk | Build a Sentence, Write an Email, Write for an Academic Discussion | 6 cümle kurma, 5 email senaryosu, 5 discussion senaryosu |
| Speaking | 11 item / 8 dk | Listen and Repeat, Take an Interview | 7 tekrar cümlesi, 5 interview sorusu |
| Scoring | 1–6 bant | CEFR hizalı | Skor planlayıcı hedef tahmini |

Not: ETS Reading, Listening ve Writing için alt görev başına sabit item dağılımı yayımlamaz; resmi bilgi bölüm toplamıdır. Uygulama havuzu sayıları projedeki çalışma materyali sayısını gösterir.

Resmi referanslar:

- ETS test yapısı: `https://www.ets.org/toefl/test-takers/ibt/about/content.html`
- ETS Reading bölümü: `https://www.ets.org/toefl/test-takers/ibt/about/content/reading.html`
- ETS Writing bölümü: `https://www.ets.org/toefl/test-takers/ibt/about/content/writing.html`
- ETS skor açıklaması: `https://www.ets.org/toefl/test-takers/ibt/scores/understand-scores.html`

## Geliştirme Komutları

```bash
# Backend testleri
uv run --extra dev pytest tests/ -v

# Frontend doğrulama
cd frontend
npm run build
npm run lint
```

## Ortam Değişkenleri

| Değişken | Varsayılan | Açıklama |
|----------|------------|----------|
| `DATABASE_URL` | `sqlite+aiosqlite:///./toefl_vocab.db` | Veritabanı bağlantısı |
| `ANTHROPIC_API_KEY` | boş | AI yazma geri bildirimi için gerekir |
| `ANTHROPIC_MODEL` | `claude-sonnet-4-20250514` | AI değerlendirme modeli |
| `SECRET_KEY` | `dev-secret-change-me` | Production için değiştirilmeli |
| `APP_ENV` | `development` | `development` veya `production` |

## Proje Yapısı

```text
app/                 FastAPI backend
app/routers/         API endpointleri
app/services/        İş mantığı
app/db/              SQLAlchemy modelleri ve session
data/                TOEFL kelime, placement ve writing verileri
frontend/src/        React arayüz
frontend/src/components/
docs/                Kullanıcı ve proje belgeleri
tests/               Backend testleri
```
