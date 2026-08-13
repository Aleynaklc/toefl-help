# TOEFL Help Frontend

React + Vite arayüzü. Kullanıcı akışı `Ana Sayfa` üzerinden başlar ve tüm çalışma modlarına buradan yönlenir.

## Çalıştırma

```bash
npm ci
npm run dev
```

Backend ayrı terminalde `http://localhost:8000` üzerinde çalışmalıdır.

## Doğrulama

```bash
npm run build
npm run lint
```

`npm run lint` şu anda eski dosyalardan kalan uyarılar verebilir; yeni eklenen `HomeDashboard` ve `ToeflPrep2026` bileşenleri build'i bozmaz.

## Ana Bileşenler

- `src/App.jsx`: ana uygulama, navigasyon ve eski modüller
- `src/components/HomeDashboard.jsx`: kullanıcı dostu başlangıç ekranı
- `src/components/ToeflPrep2026.jsx`: 2026 format rehberi, drilller, planlayıcı
- `src/api.js`: FastAPI çağrıları
- `src/data/toefl2026_item_bank.json`: 2026 görev tiplerine göre item bank
- `src/data/toefl_grammar_content.json`: gramer rehberi verisi

## UX İlkeleri

- Kullanıcı boş ekranda bırakılmaz; her boş durumda bir sonraki aksiyon gösterilir.
- Seviye testi, kelime eklemeden önce önerilir.
- Sınav formatı bilgisi tek başına belge gibi değil, drill ve çalışma planıyla birlikte verilir.
- Skor planlayıcı resmi skor dönüştürücü değildir; çalışma önceliği belirlemek içindir.
