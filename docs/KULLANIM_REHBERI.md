# TOEFL Help Kullanım Rehberi

Bu rehber uygulamayı “hangi ekrana girmeliyim?” sorusuna göre açıklar.

## 1. İlk Gün Ne Yapmalıyım?

En verimli başlangıç sırası:

1. `Ana Sayfa` ekranından çalışma akışını oku.
2. `Seviye` ekranında CEFR kelime seviyeni ölç.
3. Bilmediğin veya kısmen bildiğin kelimeleri karta aktar.
4. `Quiz` ekranında ilk tekrarını yap.
5. `TOEFL 2026` ekranından Reading veya Speaking drilllerinden birini çöz.

Rastgele yüzlerce kelime eklemek yerine önce seviye testi yapmak daha verimlidir.

## 2. Günlük 45 Dakikalık Plan

| Süre | Ekran | Hedef |
|------|------|-------|
| 10 dk | `Quiz` | Bugün tekrar edilmesi gereken kelimeleri bitir |
| 10 dk | `Tamamla` | Complete the Words yazım refleksi kazan |
| 10 dk | `Cümle Kur` | Build a Sentence için gramer iskeleti çalış |
| 10 dk | `Yazma` veya `TOEFL 2026 > Writing Bank` | Email/Discussion model cevaplarını incele ve kendi cevabını yaz |
| 5 dk | `İstatistik` | En zayıf kelimeleri ve yarınki önceliği belirle |

Süren azsa sırayı kısaltma: `Quiz → Tamamla → Cümle Kur` üçlüsünü koru.

## 3. Ekranlar Ne İşe Yarar?

### Ana Sayfa

Günlük başlangıç ekranıdır. Kelime sayını, bugün tekrar edilmesi gereken kartları ve önerilen çalışma sırasını gösterir.

### Seviye

A1–C2 seviyelerinde kelime bilginizi ölçer. `unknown` veya `partial` işaretlediğin kelimeleri kartlara aktarabilirsin.

### Kelimeler

Kart kutundur. Kelime ve Türkçe anlam ekleyebilir, kategoriye göre filtreleyebilir, gereksiz kartları silebilirsin.

### Quiz

Leitner/SM-2 mantığıyla tekrar yaptırır:

- Yanlış yaptığın kelime daha sık gelir.
- Doğru yaptığın kelime üst kutulara çıkar.
- Ustalaştığın kelimeler daha seyrek sorulur.

### Tamamla

TOEFL 2026 Reading içindeki `Complete the Words` becerisini çalıştırır. Yazım hatası yanlış sayılır; bu kasıtlıdır.

### Cümle Kur

TOEFL 2026 Writing içindeki `Build a Sentence` becerisini çalıştırır. Amaç kelimeyi bilmek değil, doğru cümle iskeletini kurmaktır.

### Yazma

İki görev içerir:

- `Write an Email`
- `Write for an Academic Discussion`

`ANTHROPIC_API_KEY` ayarlıysa cevaplarını AI ile değerlendirebilir.

### TOEFL 2026

Güncel sınav formatını, Reading/Listening/Speaking drilllerini, Writing Bank cevaplarını, çalışma planını ve skor planlayıcıyı içerir.

Önerilen sıra:

1. `Format`: resmi bölüm toplamlarını ve uygulama havuzu adetlerini kontrol et.
2. `Reading`: Complete Words, Daily Life ve Academic Passage gruplarından çalış.
3. `Writing Bank`: Build Sentence doğru cevaplarını, Email ve Discussion model cevaplarını incele.
4. `Speaking`: Listen and Repeat cümlelerini sesli tekrar et, Interview sorusunu 45 saniyede cevapla.
5. `Plan`: Aralık 2026 / 4.5+ hedef planını takip et.

### Writing Bank

Üç resmi Writing görevini kapsar:

| Görev | Uygulama içinde ne var? | Çalışma yöntemi |
|------|--------------------------|-----------------|
| Build a Sentence | 6 token sıralama itemı, doğru cümle, decoy kelime, Türkçe açıklama | Önce özne-yüklem iskeletini bul, sonra gereksiz tokenı ele |
| Write an Email | 5 senaryo, görev maddeleri, model cevap, kalite açıklaması | Model cevabı oku, sonra aynı senaryoya kendi 90–130 kelimelik cevabını yaz |
| Academic Discussion | 5 tartışma promptu, iki öğrenci görüşü, model cevap, kalite açıklaması | Bir öğrenciye bağlan, pozisyonunu söyle, gerekçe ve örnek ekle |

ETS alt görev başına sabit resmi sayı yayımlamadığı için uygulamadaki adetler çalışma bankası sayısıdır; resmi toplam Writing için 12 item / 23 dakikadır.

### İstatistik

Çalışmanın işe yarayıp yaramadığını kontrol ettiğin ekrandır. Özellikle şu iki şeye bak:

- `accuracy`: düşükse kelime anlamlarını tekrar et.
- `hardest`: en çok yanlış yaptığın kelimeleri ayrı çalış.

## 4. Yüksek Puan İçin Pratik Kurallar

- Her kelimeyi sadece Türkçe anlamıyla değil, bir İngilizce cümle içinde öğren.
- `Complete the Words` için yazımı mutlaka klavyeyle çalış.
- `Build a Sentence` çözmeden önce özne-yüklem-nesne iskeletini bul.
- `Academic Discussion` yazarken en az bir öğrenciye doğrudan bağlan.
- `Write an Email` cevabında tüm madde işaretlerini sırayla kapsa.
- `Speaking Interview` cevaplarında ilk cümlede net pozisyon söyle.
- İstatistikleri haftada en az iki kez kontrol et.

## 5. Sorun Giderme

### Yazma değerlendirmesi çalışmıyor

`.env` dosyasında `ANTHROPIC_API_KEY` yoksa AI değerlendirme çalışmaz. Uygulamanın diğer bölümleri API key olmadan çalışır.

### Frontend açılıyor ama kelimeler gelmiyor

Backend çalışıyor olmalı:

```bash
uv run uvicorn app.main:app --reload
```

Frontend ayrı terminalde çalışmalı:

```bash
cd frontend
npm run dev
```

### Seviye kelimeleri boş görünüyorsa

`data/placement/level_words.json` dosyasının projede bulunduğunu kontrol et.

### Uygulama yavaş derleniyorsa

`frontend/src/App.jsx` içinde büyük sözlük/veri blokları var. Kullanıcı deneyimi çalışır durumdadır; ileri refactor aşamasında bu veriler ayrı modüllere bölünebilir.
