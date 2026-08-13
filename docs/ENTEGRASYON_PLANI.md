# TOEFL Help Entegrasyon Planı

Bu dosya projeyi “tek başına TOEFL 2026 hazırlık uygulaması” seviyesine taşımak için izlenecek sırayı tutar.

## Sabit Hedef

- Sınav aralığı: **Aralık 2026 ilk haftaları**
- Minimum hedef: **4.5+ band**
- Bu aşamada kullanıcıdan sınav tarihi, hedef band veya günlük süre alınmaz.
- Plan ekranı doğrudan bu hedefe göre çalışır.

## Aşama 1 — Study Engine Temeli

Durum: **Kısmen entegre edildi**

Bu aşamada bilinçli olarak sadece sabit hedef paneli eklendi:

- `TOEFL 2026 > Format`: hedef özeti
- `TOEFL 2026 > Plan`: Aralık 2026 / 4.5+ için ay bazlı plan
- Dinamik kullanıcı ayarları, günlük süre seçimi ve otomatik kişisel takvim şimdilik ertelendi.

## Aşama 2 — 2026 Item Bank Altyapısı

Durum: **İlk sürüm entegre edildi, Reading ve Writing grupları genişletildi**

Item bank dosyası:

- `frontend/src/data/toefl2026_item_bank.json`

Kapsanan görevler:

| Bölüm | Görevler |
|------|----------|
| Reading | Complete the Words, Read in Daily Life, Read an Academic Passage |
| Listening | Choose Response, Conversation, Announcement, Academic Talk |
| Writing | Build Sentence, Email, Academic Discussion |
| Speaking | Listen and Repeat, Interview |

Kullanılan ekranlar:

- `TOEFL 2026 > Reading`: item bankadan Reading drillleri
- `TOEFL 2026 > Listening`: item bankadan Listening drillleri
- `TOEFL 2026 > Speaking`: item bankadan Speaking promptları
- `TOEFL 2026 > Writing Bank`: cevaplı Writing prompt bankası

### Reading Grup Genişletmesi

Durum: **Entegre edildi**

Reading modülü üç resmi görev tipine göre gruplandı:

| Grup | Resmi görev | Alt beceriler |
|------|-------------|---------------|
| Complete Words: Bağlam + yazım | Complete the Words | context vocabulary, spelling accuracy, word form |
| Daily Life: Amaç, detay, ima | Read in Daily Life | purpose, key detail, implied meaning, next action |
| Academic Passage: Ana fikir, destek, kelime | Read an Academic Passage | main idea, supporting detail, important vocabulary, inference |

Yeni Reading item sayıları:

- `complete_words`: 5 set
- `read_in_daily_life`: 4 metin
- `read_academic_passage`: 4 pasaj

Reading ekranı artık aktif grup açıklamasını, soru tipini ve varsa Türkçe cevap açıklamasını gösterir.

### Writing Grup Genişletmesi

Durum: **Entegre edildi**

Writing modülü üç resmi görev tipine göre gruplandı:

| Grup | Resmi görev | Alt beceriler |
|------|-------------|---------------|
| Build a Sentence: Cümle iskeleti | Build a Sentence | word order, grammar, sentence/question structure |
| Write an Email: İstek, bilgi, çözüm | Write an Email | clear purpose, polite tone, complete bullet coverage |
| Academic Discussion: Pozisyon, yanıt, destek | Write for an Academic Discussion | clear position, peer engagement, reason/example, academic tone |

Mevcut Writing item sayıları:

- `build_sentence`: 6 cevaplı cümle kurma itemı
- `email`: 5 model cevaplı email senaryosu
- `academic_discussion`: 5 model cevaplı tartışma senaryosu

Writing ekranı artık aktif görev odağını, görev maddelerini, doğru cümleyi, model cevapları ve Türkçe kalite açıklamalarını gösterir.

### Bilgiler Tablosu

Durum: **Entegre edildi**

`TOEFL 2026 > Format` ekranında bölüm bazlı resmi toplamlar ve uygulama bankasındaki alt grup adetleri gösterilir.

| Bölüm | Resmi toplam | Uygulama alt grupları |
|------|--------------|-----------------------|
| Reading | 50 item / 30 dk | 5 Complete Words, 4 Daily Life, 4 Academic Passage |
| Listening | 47 item / 29 dk | 1 Choose Response, 2 Conversation, 1 Announcement, 1 Academic Talk |
| Writing | 12 item / 23 dk | 6 Build Sentence, 5 Email, 5 Academic Discussion |
| Speaking | 11 item / 8 dk | 7 Listen and Repeat, 5 Interview |

Not: ETS Reading, Listening ve Writing için alt görev başına sabit item sayısı yayımlamadığından tablo resmi toplamları ve uygulama havuzu adetlerini ayrı gösterir.

## Sonraki Entegrasyon Adayları

1. **Progress Tracking**
   - Her item cevabı kaydedilecek.
   - Hata tipi tutulacak: spelling, detail, inference, grammar, fluency.

2. **Daily Plan Generator**
   - Aralık 2026 hedefini baz alıp günlük görev listesi üretecek.
   - Eksik bölüm otomatik daha fazla ağırlık alacak.

3. **Writing Rubric Upgrade**
   - 4.5 hedef band için threshold kontrolü.
   - Yeniden yazma görevi ve önce/sonra karşılaştırması.

4. **Speaking Feedback**
   - Kayıt veya transcript üzerinden süre, yapı ve kelime çeşitliliği kontrolü.

5. **Mock Exam**
   - 2026 item sayılarıyla bölüm bazlı deneme.
   - 1–6 band tahmini ve zayıf bölüm raporu.
