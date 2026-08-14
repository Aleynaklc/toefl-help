import { useEffect, useMemo, useRef, useState } from "react";
import {
  AlertCircle,
  Award,
  BookOpen,
  Brain,
  Check,
  Clock,
  Headphones,
  MessageSquare,
  Mic,
  PenLine,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import itemBank from "../data/toefl2026_item_bank.json";
import SpeakingTrainer from "./SpeakingTrainer.jsx";

const COLORS = {
  paper: "#FAFAF7",
  paperLine: "#E4E0D6",
  card: "#FFFFFF",
  ink: "#23262B",
  inkSoft: "#75776F",
  gold: "#B8892B",
  goldSoft: "#F1E6CC",
  coral: "#B5453B",
  coralSoft: "#F3DFDB",
  moss: "#3F6E4D",
  mossSoft: "#DEEAE0",
  blue: "#2E6B78",
  blueSoft: "#DCE7EA",
  purple: "#5D4A8C",
  purpleSoft: "#E6E0F0",
};

const TARGET_PROFILE = {
  targetBand: itemBank.metadata.target_band,
  examWindowLabel: itemBank.metadata.exam_window.label_tr,
  examWindowStart: itemBank.metadata.exam_window.start,
  examWindowEnd: itemBank.metadata.exam_window.end,
};

const OFFICIAL_SNAPSHOT = {
  effectiveDate: "21 Ocak 2026",
  scoring: "1–6 bant puanı, CEFR ile hizalı",
  totalDuration: "Yaklaşık 2 saat",
  sections: [
    {
      id: "reading",
      title: "Reading",
      icon: BookOpen,
      color: COLORS.blue,
      bg: COLORS.blueSoft,
      time: "30 dk baz süre",
      questions: "50 soru",
      tasks: [
        "Complete the Words: 3–4 metin seti / ~18–20 soru (bağlamdan eksik harfleri tamamlama + ana fikir)",
        "Read in Daily Life: 2–4 kısa metin / ~12–15 soru (e-posta, duyuru, afiş ve ilanları anlama)",
        "Read an Academic Passage: 2 akademik pasaj / ~15–18 soru (ana fikir, çıkarım, detay ve kelime)",
      ],
      highScoreFocus: [
        "Yazım hatası Complete the Words'te doğrudan puan kaybettirir.",
        "Günlük metinlerde amaç, ton, alıcı ve pratik detayları hızlı yakala.",
        "Akademik pasajda iddia, kanıt, karşıtlık ve sonuç ilişkilerini işaretle.",
      ],
    },
    {
      id: "listening",
      title: "Listening",
      icon: Headphones,
      color: COLORS.purple,
      bg: COLORS.purpleSoft,
      time: "29 dk baz süre",
      questions: "47 soru",
      tasks: [
        "Listen and Choose a Response: 10–12 kısa durum sorusu (sosyal/akademik tepki seçme)",
        "Listen to a Conversation: 2 kampüs diyaloğu / ~8–10 soru (öğrenci-danışman/profesör)",
        "Listen to an Announcement: 2–3 kampüs duyurusu / ~8–10 soru (etkinlik ve kural anonsları)",
        "Listen to an Academic Talk: 3 mini amfi dersi / ~15–17 soru (farklı disiplinlerden dersler)",
      ],
      highScoreFocus: [
        "Kısa cevaplarda uygun tepkiyi seç: anlam kadar sosyal bağlam da ölçülür.",
        "Konuşmalarda problem, öneri, karar ve sonraki adımı not et.",
        "Derslerde ana fikir, örnek, karşılaştırma ve konuşmacı tutumu ayrılır.",
      ],
    },
    {
      id: "writing",
      title: "Writing",
      icon: PenLine,
      color: COLORS.moss,
      bg: COLORS.mossSoft,
      time: "23 dk baz süre",
      questions: "12 görev/soru",
      tasks: [
        "Build a Sentence: 10 soru (karışık kelimeleri sıralama, çeldirici kelimeyi eleme)",
        "Write an Email: 1 görev (~7 dk, 80–120 kelime, 3 alt maddeyi eksiksiz kapsama)",
        "Write for an Academic Discussion: 1 görev (~10 dk, 100+ kelime, akran fikrine bağlanıp tez savunma)",
      ],
      highScoreFocus: [
        "Build a Sentence'ta gramer iskeleti doğru kurulmadan token seçme.",
        "Email'de üç maddeyi kapsa; ton, net istek ve çözüm şart.",
        "Discussion'da bir öğrenciye doğrudan bağlan, sonra özgün gerekçe ve örnek ver.",
      ],
    },
    {
      id: "speaking",
      title: "Speaking",
      icon: Mic,
      color: COLORS.coral,
      bg: COLORS.coralSoft,
      time: "8 dk baz süre",
      questions: "11 soru/cümle",
      tasks: [
        "Listen and Repeat: 7 cümle (duyulan akademik/kampüs cümlesini kelime sırasıyla birebir tekrar etme)",
        "Take an Interview: 4 soru (her biri için 45 sn yapılandırılmış spontane konuşma)",
      ],
      highScoreFocus: [
        "Listen and Repeat'te kelime sırası, fonksiyon kelimeleri ve vurgu korunur.",
        "Interview'da ilk 5 saniyede ana cevabı söyle; sonra neden ve örnek ekle.",
        "Doldurucu sesleri azalt; kısa sessizlik, yanlış akıcılıktan daha iyidir.",
      ],
    },
  ],
};

const PREP_PLAN = [
  {
    phase: "Ağustos sonu",
    title: "B1/B2 temel açıkları kapatma",
    actions: [
      "Seviye Testi ile bilmediğin B1/B2 kelimeleri karta aktar.",
      "Her gün 20 kelime quiz + 1 Reading Complete Words seti çöz.",
      "Build Sentence itemlarında özne-yüklem-nesne iskeletini işaretle.",
    ],
  },
  {
    phase: "Eylül",
    title: "2026 görev tiplerini oturtma",
    actions: [
      "Reading item bank: Complete Words + Daily Life + Academic Passage dönüşümlü çöz.",
      "Listening item bank: response, conversation, announcement, academic talk not şablonu kullan.",
      "Speaking Listen & Repeat cümlelerini her gün sesli tekrar et.",
    ],
  },
  {
    phase: "Ekim",
    title: "4.5 band için üretim kontrolü",
    actions: [
      "Email ve Academic Discussion cevaplarını zamanlı yaz.",
      "Speaking Interview cevaplarını 45 saniye içinde claim → reason → example yapısıyla kur.",
      "En zayıf bölüm haftalık çalışma süresinin en az %40'ını alsın.",
    ],
  },
  {
    phase: "Kasım",
    title: "Zamanlı set ve hata onarımı",
    actions: [
      "Haftada 2 kez karma Reading/Listening seti çöz.",
      "Her yazma cevabından sonra aynı promptu bir kez yeniden yaz.",
      "Hardest kelimeleri ve sık gramer hatalarını ayrı tekrar listesine al.",
    ],
  },
  {
    phase: "Aralık ilk haftaları",
    title: "Sınav modu",
    actions: [
      "Yeni konu öğrenmeyi azalt; yanlış defterini ve item bank tekrarlarını yap.",
      "Speaking ve Writing'de süre aşımı yapmadan net cevap üret.",
      "Son 48 saatte hafif tekrar; uyku ve tempo korunur.",
    ],
  },
];

const SCORE_BANDS = [
  { band: "6", cefr: "C2", label: "Ustalık", evidence: "Açık, doğal, güçlü kontrol", color: COLORS.moss },
  { band: "5–5.5", cefr: "C1", label: "İleri", evidence: "Genel olarak etkili, küçük hatalar", color: COLORS.blue },
  { band: "4–4.5", cefr: "B2", label: "Üst-Orta", evidence: "Bağımsız iletişim, sınırlı nüans", color: COLORS.gold },
  { band: "3–3.5", cefr: "B1", label: "Orta", evidence: "Ana mesaj anlaşılır, hata belirgin", color: "#A06E2B" },
  { band: "2–2.5", cefr: "A2", label: "Temel", evidence: "Basit iletişim, sık kopma", color: COLORS.coral },
  { band: "1–1.5", cefr: "A1", label: "Başlangıç", evidence: "Çok sınırlı üretim", color: "#888" },
];

const READING_DRILLS = itemBank.reading.complete_words;
const READING_DAILY_LIFE = itemBank.reading.read_in_daily_life;
const READING_ACADEMIC = itemBank.reading.read_academic_passage;
const READING_SKILL_GROUPS = itemBank.reading.skill_groups;
const READING_GROUP_BY_ID = Object.fromEntries(READING_SKILL_GROUPS.map((group) => [group.id, group]));

const LISTENING_DRILLS = [
  ...itemBank.listening.choose_response.map((item) => ({ ...item, taskLabel: "Choose Response" })),
  ...itemBank.listening.conversation.map((item) => ({ ...item, taskLabel: "Conversation" })),
  ...itemBank.listening.announcement.map((item) => ({ ...item, taskLabel: "Announcement" })),
  ...itemBank.listening.academic_talk.map((item) => ({ ...item, taskLabel: "Academic Talk" })),
];

const SPEAKING_REPEAT = itemBank.speaking.listen_repeat;
const INTERVIEW_QUESTIONS = itemBank.speaking.interview;
const WRITING_BUILD_ITEMS = itemBank.writing.build_sentence;
const WRITING_EMAIL_ITEMS = itemBank.writing.email;
const WRITING_DISCUSSION_ITEMS = itemBank.writing.academic_discussion;
const WRITING_SKILL_GROUPS = itemBank.writing.skill_groups;
const WRITING_GROUP_BY_ID = Object.fromEntries(WRITING_SKILL_GROUPS.map((group) => [group.id, group]));

const WRITING_TEMPLATES = {
  email: [
    "Dear [Name],",
    "I am writing to explain [problem/request] and ask whether [specific action] would be possible.",
    "The main issue is that [clear situation], which has affected [study/schedule/work] because [impact].",
    "Would it be possible to [solution] by [time/date]? I would also be happy to [reasonable compromise].",
    "Thank you for your time and consideration.",
    "Sincerely,",
    "[Your Name]",
  ],
  discussion: [
    "While [student] makes a valid point about [idea], I believe [your position].",
    "One reason is that [reason], which can lead to [result].",
    "For example, [specific example from school/work/society].",
    "This matters because [broader academic or practical implication].",
    "Therefore, [clear final position].",
  ],
};

const sectionButtonStyle = (active, color, bg) => ({
  border: `1px solid ${active ? color : COLORS.paperLine}`,
  background: active ? bg : COLORS.card,
  color: active ? color : COLORS.ink,
  borderRadius: 10,
  padding: "10px 12px",
  fontSize: 12.5,
  fontWeight: 800,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 6,
});

const cardStyle = {
  background: COLORS.card,
  border: `1px solid ${COLORS.paperLine}`,
  borderRadius: 14,
  padding: 18,
};

const primaryBtn = {
  background: COLORS.ink,
  color: COLORS.paper,
  border: "none",
  borderRadius: 10,
  padding: "13px 15px",
  fontSize: 13.5,
  fontWeight: 800,
  cursor: "pointer",
};

function normalize(text) {
  return text.trim().toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, " ");
}

function wordCount(text) {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
}

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function scoreBandFromSections(sections) {
  const average = sections.reduce((sum, item) => sum + Number(item || 0), 0) / sections.length;
  if (average >= 90) return "6";
  if (average >= 75) return "5–5.5";
  if (average >= 60) return "4–4.5";
  if (average >= 45) return "3–3.5";
  if (average >= 25) return "2–2.5";
  return "1–1.5";
}

function formatTime(sec) {
  const safeSec = Math.max(0, sec || 0);
  const minutes = Math.floor(safeSec / 60);
  const seconds = safeSec % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function daysUntil(dateString) {
  const today = new Date();
  const target = new Date(`${dateString}T00:00:00`);
  const diff = target.getTime() - today.getTime();
  return Math.max(0, Math.ceil(diff / 86_400_000));
}

const SECTION_TASK_BREAKDOWN = [
  {
    id: "reading",
    label: "Reading (Okuma)",
    color: COLORS.blue,
    bg: COLORS.blueSoft,
    officialItems: 50,
    officialMinutes: 30,
    summary: "Toplam 50 soru / 30 dakika. Akademik ve günlük metinlerde kelime tamamlama ve anlama.",
    tasks: [
      { label: "Complete the Words", officialCount: "3–4 metin seti (~18–20 soru)", bankCount: READING_DRILLS.length, unit: "set", detail: "Metin içindeki eksik harfli kelimeleri bağlamdan tamamlama + ana fikir sorusu" },
      { label: "Read in Daily Life", officialCount: "2–4 kısa metin (~12–15 soru)", bankCount: READING_DAILY_LIFE.length, unit: "metin", detail: "E-posta, duyuru, afiş ve ilan gibi günlük yaşam metinlerinde pratik detayları anlama" },
      { label: "Read an Academic Passage", officialCount: "2 akademik pasaj (~15–18 soru)", bankCount: READING_ACADEMIC.length, unit: "pasaj", detail: "Akademik makale ve ders metinlerinde ana fikir, çıkarım, detay ve bağlamsal kelime" },
    ],
  },
  {
    id: "listening",
    label: "Listening (Dinleme)",
    color: COLORS.purple,
    bg: COLORS.purpleSoft,
    officialItems: 47,
    officialMinutes: 29,
    summary: "Toplam 47 soru / 29 dakika. Günlük kısa tepkilerden akademik amfi derslerine.",
    tasks: [
      { label: "Listen and Choose a Response", officialCount: "10–12 kısa durum sorusu", bankCount: itemBank.listening.choose_response.length, unit: "item", detail: "Duyulan kısa soru veya ifadeye en uygun sosyal/akademik tepkiyi seçme" },
      { label: "Listen to a Conversation", officialCount: "2 kampüs diyaloğu (~8–10 soru)", bankCount: itemBank.listening.conversation.length, unit: "konuşma", detail: "Kampüste öğrenci-danışman/profesör arasındaki problem ve çözümleri anlama" },
      { label: "Listen to an Announcement", officialCount: "2–3 kampüs duyurusu (~8–10 soru)", bankCount: itemBank.listening.announcement.length, unit: "duyuru", detail: "Etkinlik, kural ve idari değişiklik anonslarındaki temel mesaj ve detaylar" },
      { label: "Listen to an Academic Talk", officialCount: "3 mini amfi dersi (~15–17 soru)", bankCount: itemBank.listening.academic_talk.length, unit: "konuşma", detail: "Farklı disiplinlerdeki akademik anlatımlarda ana tez, kanıtlar ve konuşmacı tutumu" },
    ],
  },
  {
    id: "writing",
    label: "Writing (Yazma)",
    color: COLORS.moss,
    bg: COLORS.mossSoft,
    officialItems: 12,
    officialMinutes: 23,
    summary: "Toplam 12 görev / 23 dakika. Cümle iskeleti kurma, e-posta ve akademik tartışma.",
    tasks: [
      { label: "Build a Sentence", officialCount: "10 soru (kelime sıralama)", bankCount: WRITING_BUILD_ITEMS.length, unit: "item", detail: "Karışık kelimeleri hatasız gramer sırasına dizme ve 1 çeldirici kelimeyi eleme" },
      { label: "Write an Email", officialCount: "1 görev (~7 dk, 80–120 kelime)", bankCount: WRITING_EMAIL_ITEMS.length, unit: "senaryo", detail: "3 hedef maddeyi eksiksiz içeren, uygun tonda resmi veya yarı-resmi e-posta yazma" },
      { label: "Write for an Academic Discussion", officialCount: "1 görev (~10 dk, 100+ kelime)", bankCount: WRITING_DISCUSSION_ITEMS.length, unit: "senaryo", detail: "Profesör sorusuna ve 2 öğrenciye bağlanarak akademik tartışmaya özgün katkı sunma" },
    ],
  },
  {
    id: "speaking",
    label: "Speaking (Konuşma)",
    color: COLORS.coral,
    bg: COLORS.coralSoft,
    officialItems: 11,
    officialMinutes: 8,
    summary: "Toplam 11 item / 8 dakika. Duyulan cümleyi tekrar etme ve mülakat sorularını yanıtlama.",
    tasks: [
      { label: "Listen and Repeat", officialCount: "7 cümle (birebir tekrar)", bankCount: SPEAKING_REPEAT.length, unit: "cümle", detail: "Duyulan akademik/kampüs cümlesini kelime sırası ve telaffuzu koruyarak anında tekrar etme" },
      { label: "Take an Interview", officialCount: "4 soru (her biri 45 sn)", bankCount: INTERVIEW_QUESTIONS.length, unit: "soru", detail: "Sanal mülakatçının 4 sorusuna 45 saniyede claim → reason → example yapısıyla yanıt verme" },
    ],
  },
].map((section) => ({
  ...section,
  bankCount: section.tasks.reduce((total, task) => total + task.bankCount, 0),
}));

const ITEM_BANK_STATS = SECTION_TASK_BREAKDOWN.map((section) => ({
  label: section.label.split(" ")[0],
  count: section.bankCount,
  color: section.color,
  bg: section.bg,
}));

function MiniStat({ icon: Icon, label, value, color = COLORS.gold }) {
  return (
    <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: "12px 14px", border: "1px solid rgba(255,255,255,0.12)" }}>
      <Icon size={14} color={color} style={{ marginBottom: 6 }} />
      <div style={{ color: "#fff", fontSize: 15, fontWeight: 800 }}>{value}</div>
      <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 11, marginTop: 2 }}>{label}</div>
    </div>
  );
}

function TargetSummary() {
  const daysLeft = daysUntil(TARGET_PROFILE.examWindowStart);
  const weeksLeft = Math.max(1, Math.ceil(daysLeft / 7));
  const weeklyTarget = Math.max(5, Math.ceil(weeksLeft > 12 ? 5 : 7));

  return (
    <div style={{ ...cardStyle, borderLeft: `4px solid ${COLORS.gold}`, background: "linear-gradient(135deg, #fffaf0 0%, #ffffff 100%)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
        <Target size={18} color={COLORS.gold} />
        <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 22, fontWeight: 850 }}>Sabit Hedef Planı</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(135px, 1fr))", gap: 10, marginBottom: 14 }}>
        <div style={{ background: COLORS.goldSoft, borderRadius: 10, padding: "12px 14px" }}>
          <div style={{ fontSize: 11, color: COLORS.inkSoft, fontWeight: 900 }}>Sınav aralığı</div>
          <div style={{ fontSize: 15, color: COLORS.gold, fontWeight: 900 }}>{TARGET_PROFILE.examWindowLabel}</div>
        </div>
        <div style={{ background: COLORS.mossSoft, borderRadius: 10, padding: "12px 14px" }}>
          <div style={{ fontSize: 11, color: COLORS.inkSoft, fontWeight: 900 }}>Minimum hedef</div>
          <div style={{ fontSize: 15, color: COLORS.moss, fontWeight: 900 }}>{TARGET_PROFILE.targetBand}+ band</div>
        </div>
        <div style={{ background: COLORS.blueSoft, borderRadius: 10, padding: "12px 14px" }}>
          <div style={{ fontSize: 11, color: COLORS.inkSoft, fontWeight: 900 }}>Kalan süre</div>
          <div style={{ fontSize: 15, color: COLORS.blue, fontWeight: 900 }}>{weeksLeft} hafta</div>
        </div>
      </div>
      <div style={{ fontSize: 13, color: COLORS.ink, lineHeight: 1.55 }}>
        Bu adımda hedef kullanıcıdan alınmıyor: plan sabit olarak <strong>Aralık 2026 ilk haftaları</strong> ve <strong>minimum 4.5 band</strong> için çalışır. Haftalık minimum çıktı: <strong>{weeklyTarget} görev seti</strong> tamamlamak.
      </div>
    </div>
  );
}

function SectionFormat({ setView }) {
  const [open, setOpen] = useState("reading");
  const active = OFFICIAL_SNAPSHOT.sections.find((item) => item.id === open);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ ...cardStyle, background: "linear-gradient(135deg, #1a1f2e 0%, #2d3561 55%, #1a2a3a 100%)", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -30, right: -30, width: 130, height: 130, borderRadius: "50%", background: "rgba(184,137,43,0.18)" }} />
        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
            <span style={{ background: "rgba(184,137,43,0.22)", color: "#F5D489", border: "1px solid rgba(184,137,43,0.45)", borderRadius: 8, padding: "5px 9px", fontSize: 11, fontWeight: 800 }}>
              Güncel format · {OFFICIAL_SNAPSHOT.effectiveDate}
            </span>
            <span style={{ background: "rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.75)", borderRadius: 8, padding: "5px 9px", fontSize: 11, fontWeight: 700 }}>
              {OFFICIAL_SNAPSHOT.scoring}
            </span>
          </div>
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 29, lineHeight: 1.15, fontWeight: 800, marginBottom: 8 }}>
            TOEFL iBT 2026 yüksek puan çalışma merkezi
          </div>
          <div style={{ color: "rgba(255,255,255,0.68)", fontSize: 13.5, lineHeight: 1.6, marginBottom: 18 }}>
            Proje artık sadece kelime ezberi değil; 2026 formatındaki okuma, dinleme, yazma ve konuşma becerilerini aynı çalışma döngüsüne bağlar.
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 10 }}>
            <MiniStat icon={Clock} label="Süre" value={OFFICIAL_SNAPSHOT.totalDuration} />
            <MiniStat icon={Award} label="Puan" value="1–6 bant" />
            <MiniStat icon={TrendingUp} label="Hedef" value={`${TARGET_PROFILE.targetBand}+`} />
          </div>
        </div>
      </div>

      <TargetSummary />

      <div style={cardStyle}>
        <div style={{ fontSize: 11, fontWeight: 900, color: COLORS.inkSoft, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>
          Item Bank Kapsamı
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(125px, 1fr))", gap: 8 }}>
          {ITEM_BANK_STATS.map((item) => (
            <div key={item.label} style={{ background: item.bg, borderRadius: 10, padding: "11px 12px", border: `1px solid ${item.color}22` }}>
              <div style={{ fontSize: 20, fontWeight: 900, color: item.color }}>{item.count}</div>
              <div style={{ fontSize: 11.5, fontWeight: 800, color: COLORS.inkSoft }}>{item.label} item</div>
            </div>
          ))}
        </div>
      </div>

      <div style={cardStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <AlertCircle size={17} color={COLORS.gold} />
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 21, fontWeight: 800 }}>Bilgiler: Soru Grupları ve Adet Dağılımı</div>
        </div>
        <div style={{ fontSize: 12.8, color: COLORS.inkSoft, lineHeight: 1.55, marginBottom: 14 }}>
          21 Ocak 2026 sonrası güncel TOEFL iBT formatında yer alan 4 ana sınav grubunun altındaki tüm farklı soru tarzları, sınavda çıkan resmi soru adetleri ve uygulama havuzumuzdaki çalışma setleri aşağıda listelenmiştir.
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 12 }}>
          {SECTION_TASK_BREAKDOWN.map((section) => (
            <div key={section.id} style={{ background: section.bg, border: `1px solid ${section.color}24`, borderRadius: 12, padding: 14, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "baseline", marginBottom: 6 }}>
                  <div style={{ fontSize: 16, fontWeight: 900, color: section.color }}>{section.label}</div>
                  <div style={{ fontSize: 11.5, fontWeight: 900, background: "rgba(255,255,255,0.7)", padding: "3px 7px", borderRadius: 6, color: section.color }}>
                    {section.officialItems} soru · {section.officialMinutes} dk
                  </div>
                </div>
                <div style={{ fontSize: 12, color: COLORS.inkSoft, marginBottom: 10, lineHeight: 1.4 }}>
                  {section.summary}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {section.tasks.map((task) => (
                    <div key={task.label} style={{ background: "rgba(255,255,255,0.75)", border: `1px solid ${section.color}18`, borderRadius: 9, padding: "9px 10px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 6, marginBottom: 3 }}>
                        <div style={{ fontSize: 12.6, fontWeight: 850, color: COLORS.ink }}>{task.label}</div>
                        <span style={{ background: section.color, color: "#fff", fontSize: 10.5, fontWeight: 800, padding: "2px 6px", borderRadius: 5, whiteSpace: "nowrap" }}>
                          {task.bankCount} {task.unit}
                        </span>
                      </div>
                      <div style={{ fontSize: 11.5, fontWeight: 800, color: COLORS.inkSoft, marginBottom: 3 }}>
                        Sınavda: <strong style={{ color: COLORS.ink }}>{task.officialCount}</strong>
                      </div>
                      {task.detail && (
                        <div style={{ fontSize: 11.2, color: COLORS.inkSoft, lineHeight: 1.35 }}>
                          {task.detail}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ marginTop: 10, paddingTop: 8, borderTop: `1px dashed ${section.color}33`, display: "flex", justifyContent: "space-between", fontSize: 11.5, fontWeight: 850, color: section.color }}>
                <span>Toplam Sınav Sorusu: {section.officialItems}</span>
                <span>Havuz: {section.bankCount} Set</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 8 }}>
        {OFFICIAL_SNAPSHOT.sections.map((section) => {
          const Icon = section.icon;
          return (
            <button key={section.id} onClick={() => setOpen(section.id)} style={sectionButtonStyle(open === section.id, section.color, section.bg)}>
              <Icon size={14} /> {section.title}
            </button>
          );
        })}
      </div>

      <div style={{ ...cardStyle, borderTop: `4px solid ${active.color}` }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, marginBottom: 12 }}>
          <div>
            <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 23, fontWeight: 800 }}>{active.title}</div>
            <div style={{ color: COLORS.inkSoft, fontSize: 12.5, fontWeight: 700 }}>
              {active.time} · {active.questions}
            </div>
          </div>
          <active.icon size={26} color={active.color} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8, marginBottom: 14 }}>
          {active.tasks.map((task) => (
            <div key={task} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 13.2, lineHeight: 1.45 }}>
              <Check size={14} color={active.color} style={{ marginTop: 2, flexShrink: 0 }} />
              <span>{task}</span>
            </div>
          ))}
        </div>
        <div style={{ background: active.bg, borderRadius: 10, padding: "12px 14px" }}>
          <div style={{ fontSize: 11, fontWeight: 900, color: active.color, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>
            Yüksek puan odağı
          </div>
          {active.highScoreFocus.map((tip) => (
            <div key={tip} style={{ fontSize: 12.8, color: COLORS.ink, marginBottom: 5, lineHeight: 1.45 }}>
              • {tip}
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 10 }}>
        {[
          { label: "Complete Words aç", view: "complete", icon: BookOpen, color: COLORS.blue },
          { label: "Build Sentence aç", view: "build", icon: PenLine, color: COLORS.moss },
          { label: "Kelime Quiz aç", view: "quiz", icon: Brain, color: COLORS.gold },
          { label: "Writing aç", view: "writing", icon: MessageSquare, color: COLORS.coral },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <button key={item.label} onClick={() => setView(item.view)} style={{ ...cardStyle, cursor: "pointer", textAlign: "left", display: "flex", gap: 10, alignItems: "center", padding: 14 }}>
              <Icon size={18} color={item.color} />
              <span style={{ fontSize: 13, fontWeight: 800 }}>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ReadingTrainer() {
  const [taskType, setTaskType] = useState("complete");
  const [drillIndex, setDrillIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [choice, setChoice] = useState(null);
  const [checked, setChecked] = useState(false);

  const taskConfig = {
    complete: { label: "Complete Words", items: READING_DRILLS },
    daily: { label: "Daily Life", items: READING_DAILY_LIFE },
    academic: { label: "Academic Passage", items: READING_ACADEMIC },
  };
  const activeConfig = taskConfig[taskType];
  const drill = activeConfig.items[drillIndex % activeConfig.items.length];
  const isCompleteTask = taskType === "complete";
  const questionList = isCompleteTask ? [drill.question] : drill.questions;
  const activeGroup = READING_GROUP_BY_ID[drill.skill_group];

  const blankScore = isCompleteTask
    ? drill.blanks.reduce((sum, blank, index) => {
        return sum + (normalize(answers[index] || "") === normalize(blank.answer) ? 1 : 0);
      }, 0)
    : 0;
  const selectedAnswers = Array.isArray(choice) ? choice : [choice];
  const choiceScore = checked
    ? questionList.reduce((sum, question, index) => sum + (selectedAnswers[index] === question.answer ? 1 : 0), 0)
    : 0;
  const totalCorrect = blankScore + choiceScore;
  const totalQuestions = (isCompleteTask ? drill.blanks.length : 0) + questionList.length;

  function reset(nextIndex = drillIndex) {
    setDrillIndex(nextIndex);
    setAnswers({});
    setChoice(null);
    setChecked(false);
  }

  function switchTask(nextTask) {
    setTaskType(nextTask);
    setDrillIndex(0);
    setAnswers({});
    setChoice(null);
    setChecked(false);
  }

  function setQuestionChoice(questionIndex, optionIndex) {
    if (checked) return;
    if (isCompleteTask) {
      setChoice(optionIndex);
      return;
    }
    const nextChoices = Array.isArray(choice) ? [...choice] : [];
    nextChoices[questionIndex] = optionIndex;
    setChoice(nextChoices);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={cardStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <BookOpen size={18} color={COLORS.blue} />
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 22, fontWeight: 800 }}>Reading Item Bank</div>
        </div>
        <div style={{ fontSize: 13.2, color: COLORS.inkSoft, lineHeight: 1.55 }}>
          2026 Reading görevleri artık dosyadaki item bank üzerinden geliyor. Bu bankayı büyüttükçe drill havuzu da büyür.
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 8 }}>
        {READING_SKILL_GROUPS.map((group) => {
          const active = group.id === activeGroup?.id;
          return (
            <div
              key={group.id}
              style={{
                background: active ? COLORS.blueSoft : COLORS.card,
                border: `1px solid ${active ? COLORS.blue : COLORS.paperLine}`,
                borderRadius: 10,
                padding: "12px 13px",
              }}
            >
              <div style={{ fontSize: 12.5, fontWeight: 900, color: active ? COLORS.blue : COLORS.ink, marginBottom: 4 }}>
                {group.title_tr}
              </div>
              <div style={{ fontSize: 11.5, color: COLORS.inkSoft, lineHeight: 1.4 }}>
                {group.focus.join(" · ")}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 8 }}>
        {Object.entries(taskConfig).map(([id, config]) => (
          <button key={id} onClick={() => switchTask(id)} style={sectionButtonStyle(taskType === id, COLORS.blue, COLORS.blueSoft)}>
            {config.label} · {config.items.length}
          </button>
        ))}
      </div>

      {activeGroup && (
        <div style={{ ...cardStyle, background: COLORS.blueSoft, borderColor: "#B8CFD6" }}>
          <div style={{ fontSize: 11, color: COLORS.blue, fontWeight: 900, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>
            Aktif çalışma grubu · {drill.difficulty}
          </div>
          <div style={{ fontSize: 13, color: COLORS.ink, lineHeight: 1.55 }}>
            {activeGroup.target_for_4_5}
          </div>
        </div>
      )}

      {/* Soru Gezinme Çubuğu */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: COLORS.card, border: `1px solid ${COLORS.paperLine}`, borderRadius: 10, padding: "10px 14px", flexWrap: "wrap", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 800, color: COLORS.ink }}>
            {activeConfig.label} · Soru {drillIndex + 1} / {activeConfig.items.length}
          </span>
          <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 999, background: COLORS.blueSoft, color: COLORS.blue }}>
            {drill.difficulty}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <select
            value={drillIndex}
            onChange={(e) => reset(Number(e.target.value))}
            style={{
              padding: "5px 8px",
              borderRadius: 6,
              border: `1px solid ${COLORS.paperLine}`,
              background: COLORS.paper,
              fontSize: 12,
              fontWeight: 600,
              color: COLORS.ink,
              outline: "none",
              cursor: "pointer",
            }}
          >
            {activeConfig.items.map((item, idx) => (
              <option key={item.id} value={idx}>
                {idx + 1}. {item.id.replace(/^rw-complete-|^rd-daily-|^ra-acad-/, "").replace(/-\d+$/, "").replaceAll("-", " ")} ({item.difficulty})
              </option>
            ))}
          </select>
          <button
            onClick={() => reset((drillIndex - 1 + activeConfig.items.length) % activeConfig.items.length)}
            style={{ border: `1px solid ${COLORS.paperLine}`, background: COLORS.paper, padding: "6px 12px", borderRadius: 6, fontSize: 12, fontWeight: 700, cursor: "pointer" }}
            title="Önceki Soru"
          >
            ← Önceki
          </button>
          <button
            onClick={() => reset((drillIndex + 1) % activeConfig.items.length)}
            style={{ border: `1px solid ${COLORS.paperLine}`, background: COLORS.paper, padding: "6px 12px", borderRadius: 6, fontSize: 12, fontWeight: 700, cursor: "pointer" }}
            title="Sonraki Soru"
          >
            Sonraki →
          </button>
        </div>
      </div>

      <div style={{ ...cardStyle, lineHeight: 1.7, fontSize: 14 }}>
        {drill.text_type && (
          <div style={{ fontSize: 11, fontWeight: 900, color: COLORS.blue, marginBottom: 8, textTransform: "uppercase" }}>
            {drill.text_type.replaceAll("_", " ")}
          </div>
        )}
        {drill.passage}
      </div>

      {isCompleteTask && (
        <div style={cardStyle}>
          <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.06em", textTransform: "uppercase", color: COLORS.inkSoft, marginBottom: 10 }}>
            Complete the Words
          </div>
          {drill.blanks.map((blank, index) => {
            const isCorrect = normalize(answers[index] || "") === normalize(blank.answer);
            return (
              <div key={blank.answer} style={{ display: "grid", gridTemplateColumns: "105px 1fr", gap: 8, alignItems: "center", marginBottom: 8 }}>
                <div style={{ fontFamily: "monospace", fontSize: 15, fontWeight: 800, letterSpacing: 1.5 }}>{blank.clue}</div>
                <div>
                  <input
                    value={answers[index] || ""}
                    onChange={(event) => setAnswers({ ...answers, [index]: event.target.value })}
                    disabled={checked}
                    placeholder={blank.hint}
                    style={{
                      width: "100%",
                      border: `1.5px solid ${checked ? (isCorrect ? COLORS.moss : COLORS.coral) : COLORS.paperLine}`,
                      background: checked ? (isCorrect ? COLORS.mossSoft : COLORS.coralSoft) : COLORS.paper,
                      borderRadius: 8,
                      padding: "9px 10px",
                      fontSize: 13,
                      outline: "none",
                    }}
                  />
                  {checked && !isCorrect && <div style={{ color: COLORS.coral, fontSize: 12, marginTop: 3 }}>Doğru: {blank.answer}</div>}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {questionList.map((question, questionIndex) => (
        <div key={`${drill.id}-${question.prompt}`} style={cardStyle}>
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", marginBottom: 8 }}>
            <span style={{ fontSize: 10.5, color: COLORS.blue, background: COLORS.blueSoft, borderRadius: 999, padding: "3px 8px", fontWeight: 900 }}>
              {question.type?.replaceAll("_", " ") || "question"}
            </span>
            <span style={{ fontWeight: 800, fontSize: 14 }}>{question.prompt}</span>
          </div>
          {question.options.map((option, optionIndex) => {
            const selected = selectedAnswers[questionIndex] === optionIndex;
            return (
              <button
                key={option}
                onClick={() => setQuestionChoice(questionIndex, optionIndex)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  border: `1.5px solid ${checked && optionIndex === question.answer ? COLORS.moss : checked && selected ? COLORS.coral : selected ? COLORS.blue : COLORS.paperLine}`,
                  background: checked && optionIndex === question.answer ? COLORS.mossSoft : checked && selected ? COLORS.coralSoft : selected ? COLORS.blueSoft : COLORS.paper,
                  color: COLORS.ink,
                  borderRadius: 8,
                  padding: "10px 12px",
                  cursor: checked ? "default" : "pointer",
                  marginBottom: 7,
                  fontSize: 13,
                  fontWeight: 650,
                }}
              >
                {option}
              </button>
            );
          })}
          {checked && question.explanation_tr && (
            <div style={{ background: COLORS.paper, border: `1px solid ${COLORS.paperLine}`, borderRadius: 8, padding: "9px 10px", fontSize: 12.5, color: COLORS.inkSoft, lineHeight: 1.45 }}>
              <strong style={{ color: COLORS.ink }}>Açıklama:</strong> {question.explanation_tr}
            </div>
          )}
        </div>
      ))}

      {!checked ? (
        <button onClick={() => setChecked(true)} style={primaryBtn}>Kontrol Et</button>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          <div style={{ ...cardStyle, textAlign: "center", padding: 14 }}>
            <div style={{ fontSize: 28, fontWeight: 900, color: totalCorrect >= Math.ceil(totalQuestions * 0.8) ? COLORS.moss : COLORS.gold }}>
              {totalCorrect}/{totalQuestions}
            </div>
            <div style={{ fontSize: 12, color: COLORS.inkSoft }}>item bank puanı</div>
          </div>
          <button onClick={() => reset((drillIndex + 1) % activeConfig.items.length)} style={{ ...primaryBtn, height: "100%" }}>
            Sonraki Drill
          </button>
        </div>
      )}
    </div>
  );
}

function ListeningTrainer() {
  const [index, setIndex] = useState(0);
  const [showTranscript, setShowTranscript] = useState(false);
  const [notes, setNotes] = useState("");
  const [choice, setChoice] = useState(null);
  const [checked, setChecked] = useState(false);
  const drill = LISTENING_DRILLS[index % LISTENING_DRILLS.length];
  const correct = choice === drill.answer;

  function speakTranscript() {
    if (!window.speechSynthesis) {
      setShowTranscript(true);
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(drill.transcript);
    utterance.lang = "en-US";
    utterance.rate = 0.92;
    window.speechSynthesis.speak(utterance);
  }

  function next() {
    window.speechSynthesis?.cancel();
    setIndex((index + 1) % LISTENING_DRILLS.length);
    setShowTranscript(false);
    setNotes("");
    setChoice(null);
    setChecked(false);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={cardStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <Headphones size={18} color={COLORS.purple} />
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 22, fontWeight: 800 }}>Listening Item Bank</div>
        </div>
        <div style={{ fontSize: 13.2, color: COLORS.inkSoft, lineHeight: 1.55 }}>
          {LISTENING_DRILLS.length} listening item bankadan gelir. Dinle, kısa not al, sonra cevapla; transkripti önce kapalı tut.
        </div>
      </div>

      <div style={cardStyle}>
        <div style={{ fontSize: 12, color: COLORS.inkSoft, fontWeight: 800, marginBottom: 6 }}>
          {drill.taskLabel} · {drill.title}
        </div>
        <button onClick={speakTranscript} style={{ ...primaryBtn, width: "100%", marginBottom: 10 }}>
          <Headphones size={15} style={{ verticalAlign: "middle", marginRight: 6 }} />
          Sesli Oku
        </button>
        <button
          onClick={() => setShowTranscript(!showTranscript)}
          style={{ width: "100%", border: `1px solid ${COLORS.paperLine}`, background: COLORS.paper, borderRadius: 9, padding: "10px", fontSize: 12.5, fontWeight: 800, cursor: "pointer" }}
        >
          {showTranscript ? "Transkripti Gizle" : "Transkripti Göster"}
        </button>
        {showTranscript && <div style={{ marginTop: 12, fontSize: 13, lineHeight: 1.6, color: COLORS.ink }}>{drill.transcript}</div>}
      </div>

      <div style={cardStyle}>
        <div style={{ fontSize: 12, color: COLORS.inkSoft, fontWeight: 800, marginBottom: 8 }}>
          Not hedefi: {drill.noteTarget.join(" → ")}
        </div>
        <textarea
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          placeholder="Problem / ana fikir / çözüm notlarını yaz..."
          rows={4}
          style={{ width: "100%", resize: "vertical", border: `1px solid ${COLORS.paperLine}`, borderRadius: 9, padding: 11, fontSize: 13, lineHeight: 1.5, outline: "none", background: COLORS.paper }}
        />
      </div>

      <div style={cardStyle}>
        <div style={{ fontWeight: 800, marginBottom: 9, fontSize: 14 }}>{drill.prompt}</div>
        {drill.options.map((option, optionIndex) => (
          <button
            key={option}
            onClick={() => !checked && setChoice(optionIndex)}
            style={{
              width: "100%",
              textAlign: "left",
              border: `1.5px solid ${checked && optionIndex === drill.answer ? COLORS.moss : checked && choice === optionIndex ? COLORS.coral : choice === optionIndex ? COLORS.purple : COLORS.paperLine}`,
              background: checked && optionIndex === drill.answer ? COLORS.mossSoft : checked && choice === optionIndex ? COLORS.coralSoft : choice === optionIndex ? COLORS.purpleSoft : COLORS.paper,
              borderRadius: 8,
              padding: "10px 12px",
              cursor: checked ? "default" : "pointer",
              marginBottom: 7,
              fontSize: 13,
              fontWeight: 650,
            }}
          >
            {option}
          </button>
        ))}
      </div>

      {!checked ? (
        <button onClick={() => setChecked(true)} disabled={choice === null} style={{ ...primaryBtn, opacity: choice === null ? 0.5 : 1 }}>
          Kontrol Et
        </button>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ ...cardStyle, padding: 14, background: correct ? COLORS.mossSoft : COLORS.coralSoft }}>
            <div style={{ fontWeight: 900, color: correct ? COLORS.moss : COLORS.coral }}>
              {correct ? "Doğru." : "Yanlış."}
            </div>
            <div style={{ fontSize: 12.8, lineHeight: 1.5, color: COLORS.inkSoft, marginTop: 4 }}>
              Cevap için notunda en az problem ve öneriyi yakalamış olman gerekir.
            </div>
          </div>
          <button onClick={next} style={primaryBtn}>Sonraki Listening Drill</button>
        </div>
      )}
    </div>
  );
}



function WritingTemplates() {
  const [type, setType] = useState("build");
  const [filterSubtype, setFilterSubtype] = useState("all");

  const writingTasks = {
    build: {
      label: "Build Sentence",
      description: "10 soru. Karışık verilen kelimeleri doğru gramer ve bağlaç sırasına dizme, 1 adet çeldiriciyi (decoy) dışarıda bırakma.",
      items: WRITING_BUILD_ITEMS,
      color: COLORS.moss,
      bg: COLORS.mossSoft,
      skillGroupId: "build_sentence_structure",
      timeTarget: "Soru başı ~45-60 saniye",
    },
    email: {
      label: "Write an Email",
      description: "1 görev. Gerçek üniversite/kampüs bağlamında 3 alt hedef maddeyi eksiksiz kapsayan, uygun resmi/yarı-resmi tonda e-posta yazma (~7 dk, 80–120 kelime).",
      items: WRITING_EMAIL_ITEMS,
      color: COLORS.gold,
      bg: COLORS.goldSoft,
      skillGroupId: "email_request_information_solution",
      timeTarget: "7 dakika · 80–120 kelime",
    },
    discussion: {
      label: "Academic Discussion",
      description: "1 görev. Profesörün sorusuna ve iki öğrencinin görüşüne bağlanarak kendi özgün argümanını ve somut örneğini sunma (~10 dk, 100+ kelime).",
      items: WRITING_DISCUSSION_ITEMS,
      color: COLORS.blue,
      bg: COLORS.blueSoft,
      skillGroupId: "discussion_position_response_support",
      timeTarget: "10 dakika · 100–150 kelime",
    },
  };

  const active = writingTasks[type];
  const activeGroup = WRITING_GROUP_BY_ID[active.skillGroupId];
  const template = WRITING_TEMPLATES[type] || [];

  // Get distinct subtypes for the active task
  const subtypes = useMemo(() => {
    const map = new Map();
    active.items.forEach((item) => {
      const key = item.subtype || "other";
      const label = item.subtype_label_tr || item.subtype || "Genel";
      if (!map.has(key)) {
        map.set(key, label);
      }
    });
    return Array.from(map.entries());
  }, [active]);

  const filteredItems = useMemo(() => {
    if (filterSubtype === "all") return active.items;
    return active.items.filter((item) => item.subtype === filterSubtype);
  }, [active, filterSubtype]);

  const handleTypeChange = (newType) => {
    setType(newType);
    setFilterSubtype("all");
  };

  const renderWhyItWorks = (reasons, color) => {
    if (!Array.isArray(reasons) || reasons.length === 0) return null;
    return (
      <div style={{ marginTop: 10, background: "rgba(255,255,255,0.7)", borderRadius: 9, padding: "10px 12px", border: `1px solid ${color}22` }}>
        <div style={{ fontSize: 11, fontWeight: 900, color, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 6 }}>
          Neden 4.5+ / 5.0 Bant Puanı Alır?
        </div>
        <div style={{ display: "grid", gap: 5 }}>
          {reasons.map((reason) => (
            <div key={reason} style={{ display: "flex", gap: 7, fontSize: 12.3, lineHeight: 1.45, color: COLORS.ink }}>
              <Check size={13} color={color} style={{ marginTop: 2, flexShrink: 0 }} />
              <span>{reason}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderWritingItem = (item) => {
    if (type === "build") {
      return (
        <>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center", marginBottom: 8 }}>
            <span style={{ background: COLORS.mossSoft, color: COLORS.moss, fontSize: 11, fontWeight: 900, padding: "3px 8px", borderRadius: 6 }}>
              {item.subtype_label_tr || item.subtype}
            </span>
            <span style={{ fontSize: 11.5, color: COLORS.inkSoft }}>{item.context}</span>
          </div>

          <div style={{ background: COLORS.paper, border: `1px solid ${COLORS.paperLine}`, borderRadius: 10, padding: "10px 12px", marginBottom: 10 }}>
            <div style={{ fontSize: 11, fontWeight: 900, color: COLORS.inkSoft, textTransform: "uppercase", marginBottom: 6 }}>
              Karışık Verilen Tokenlar (1 Decoy İçerir)
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {item.tokens.map((token, tokenIndex) => {
                const isDecoy = item.decoys?.includes(token);
                return (
                  <span
                    key={`${item.id}-${token}-${tokenIndex}`}
                    style={{
                      background: isDecoy ? COLORS.coralSoft : "#fff",
                      border: `1px solid ${isDecoy ? COLORS.coral : COLORS.paperLine}`,
                      color: isDecoy ? COLORS.coral : COLORS.ink,
                      borderRadius: 999,
                      padding: "5px 10px",
                      fontSize: 12.5,
                      fontWeight: 800,
                    }}
                  >
                    {token}
                  </span>
                );
              })}
            </div>
          </div>

          <div style={{ background: COLORS.mossSoft, borderRadius: 10, padding: "11px 13px", fontSize: 13.5, lineHeight: 1.5, color: COLORS.ink, border: `1px solid ${COLORS.moss}33` }}>
            <div style={{ fontSize: 11, fontWeight: 900, color: COLORS.moss, textTransform: "uppercase", marginBottom: 3 }}>
              Doğru Cümle Dizilimi
            </div>
            <strong>{item.answer_sentence || `${item.answer_tokens.join(" ")}.`}</strong>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 8, marginTop: 8 }}>
            <div style={{ background: COLORS.coralSoft, borderRadius: 8, padding: "8px 10px", fontSize: 12.2, color: COLORS.coral, border: `1px solid ${COLORS.coral}33` }}>
              <strong>Elenen Çeldirici (Decoy):</strong> {item.decoys?.join(", ") || "Yok"}
            </div>
            <div style={{ background: COLORS.paper, borderRadius: 8, padding: "8px 10px", fontSize: 12.2, color: COLORS.inkSoft, border: `1px solid ${COLORS.paperLine}` }}>
              <strong>Gramer Deseni:</strong> {item.subtype_label_tr || item.subtype}
            </div>
          </div>

          <div style={{ marginTop: 9, fontSize: 12.5, lineHeight: 1.5, color: COLORS.ink, background: "rgba(255,255,255,0.7)", padding: "9px 11px", borderRadius: 8 }}>
            <span style={{ fontWeight: 800, color: COLORS.moss }}>Açıklama & Kural:</span> {item.model_answer_tr || item.explanation_tr}
          </div>
        </>
      );
    }

    if (type === "email") {
      const words = wordCount(item.model_answer || "");
      return (
        <>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center", marginBottom: 8 }}>
            <span style={{ background: COLORS.goldSoft, color: COLORS.gold, fontSize: 11, fontWeight: 900, padding: "3px 8px", borderRadius: 6 }}>
              {item.subtype_label_tr || item.subtype}
            </span>
            <span style={{ fontSize: 11.5, color: COLORS.inkSoft }}>TOEFL 2026 Write an Email Senaryosu</span>
          </div>

          <div style={{ fontSize: 13, color: COLORS.ink, lineHeight: 1.5, marginBottom: 10, background: COLORS.paper, padding: "10px 12px", borderRadius: 9, border: `1px solid ${COLORS.paperLine}` }}>
            <strong>Senaryo:</strong> {item.scenario}
          </div>

          <div style={{ background: "rgba(241, 230, 204, 0.4)", borderRadius: 9, padding: "10px 12px", marginBottom: 10, border: `1px solid ${COLORS.gold}33` }}>
            <div style={{ fontSize: 11, fontWeight: 900, color: COLORS.gold, textTransform: "uppercase", marginBottom: 6 }}>
              Sınavda İstenen 3 Görev Maddesi (Bullet Points)
            </div>
            {item.bullets.map((bullet, bIdx) => (
              <div key={bullet} style={{ display: "flex", gap: 7, fontSize: 12.5, lineHeight: 1.45, marginBottom: 4 }}>
                <span style={{ background: COLORS.gold, color: "#fff", width: 18, height: 18, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10.5, fontWeight: 900, flexShrink: 0 }}>
                  {bIdx + 1}
                </span>
                <span style={{ fontWeight: 700, color: COLORS.ink }}>{bullet}</span>
              </div>
            ))}
          </div>

          <div style={{ background: COLORS.goldSoft, borderRadius: 10, padding: "12px 14px", fontSize: 13, lineHeight: 1.6, whiteSpace: "pre-wrap", border: `1px solid ${COLORS.gold}44` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <span style={{ fontSize: 11, fontWeight: 900, color: COLORS.gold, textTransform: "uppercase" }}>
                Örnek Model E-Posta Cevabı
              </span>
              <span style={{ background: COLORS.card, padding: "2px 7px", borderRadius: 6, fontSize: 11, fontWeight: 800, color: COLORS.gold }}>
                {words} kelime (Hedef: 80–120)
              </span>
            </div>
            {item.model_answer || "Bu prompt için model cevap eklenecek."}
          </div>

          {renderWhyItWorks(item.why_it_works_tr, COLORS.gold)}
        </>
      );
    }

    // Academic discussion
    const discWords = wordCount(item.model_answer || "");
    return (
      <>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center", marginBottom: 8 }}>
          <span style={{ background: COLORS.blueSoft, color: COLORS.blue, fontSize: 11, fontWeight: 900, padding: "3px 8px", borderRadius: 6 }}>
            {item.subtype_label_tr || item.subtype}
          </span>
          <span style={{ fontSize: 11.5, color: COLORS.inkSoft }}>TOEFL 2026 Academic Discussion Senaryosu</span>
        </div>

        <div style={{ fontSize: 13.2, fontWeight: 750, color: COLORS.ink, lineHeight: 1.5, marginBottom: 10, background: COLORS.paper, padding: "11px 13px", borderRadius: 9, border: `1px solid ${COLORS.paperLine}` }}>
          <div style={{ fontSize: 11, fontWeight: 900, color: COLORS.blue, textTransform: "uppercase", marginBottom: 4 }}>Profesörün Tartışma Sorusu:</div>
          {item.question}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 10, marginBottom: 10 }}>
          {[
            { student: item.studentA, label: "Öğrenci A" },
            { student: item.studentB, label: "Öğrenci B" },
          ].map(({ student, label }) => (
            <div key={student.name} style={{ background: COLORS.card, borderRadius: 10, padding: "10px 12px", border: `1px solid ${COLORS.paperLine}`, display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 12.8, fontWeight: 900, color: COLORS.blue }}>{student.name}</span>
                <span style={{ fontSize: 10.5, fontWeight: 800, color: COLORS.inkSoft, background: COLORS.paper, padding: "2px 6px", borderRadius: 4 }}>{label}</span>
              </div>
              <div style={{ fontSize: 12.2, lineHeight: 1.45, color: COLORS.inkSoft }}>{student.text}</div>
            </div>
          ))}
        </div>

        <div style={{ background: COLORS.blueSoft, borderRadius: 10, padding: "12px 14px", fontSize: 13, lineHeight: 1.6, border: `1px solid ${COLORS.blue}44` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <span style={{ fontSize: 11, fontWeight: 900, color: COLORS.blue, textTransform: "uppercase" }}>
              Örnek Model Tartışma Cevabı (4.5–5.0 / 6.0 Band)
            </span>
            <span style={{ background: COLORS.card, padding: "2px 7px", borderRadius: 6, fontSize: 11, fontWeight: 800, color: COLORS.blue }}>
              {discWords} kelime (Hedef: 100+)
            </span>
          </div>
          {item.model_answer || "Bu prompt için model cevap eklenecek."}
        </div>

        {renderWhyItWorks(item.why_it_works_tr, COLORS.blue)}
      </>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={cardStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <PenLine size={18} color={COLORS.moss} />
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 22, fontWeight: 800 }}>Writing Soru Bankası, Soru Tarzları ve Model Cevaplar</div>
        </div>
        <div style={{ fontSize: 13.2, color: COLORS.inkSoft, lineHeight: 1.55 }}>
          2026 formatındaki üç farklı Writing görev tarzının tamamı: <strong>Build a Sentence</strong> (10 soru), <strong>Write an Email</strong> (1 görev) ve <strong>Write for an Academic Discussion</strong> (1 görev). Tüm soru alt tarzları, gerçekçi senaryolar, çeldiriciler ve yüksek puan alan model cevaplar ile hazırlanmıştır.
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 8 }}>
        <div style={{ background: COLORS.mossSoft, borderRadius: 10, padding: "11px 12px", border: `1px solid ${COLORS.moss}22` }}>
          <div style={{ fontSize: 20, fontWeight: 900, color: COLORS.moss }}>{WRITING_BUILD_ITEMS.length}</div>
          <div style={{ fontSize: 11.5, fontWeight: 800, color: COLORS.inkSoft }}>Build Sentence Seti</div>
          <div style={{ fontSize: 10.5, color: COLORS.moss, marginTop: 2, fontWeight: 700 }}>Sınavda: 10 Soru</div>
        </div>
        <div style={{ background: COLORS.goldSoft, borderRadius: 10, padding: "11px 12px", border: `1px solid ${COLORS.gold}22` }}>
          <div style={{ fontSize: 20, fontWeight: 900, color: COLORS.gold }}>{WRITING_EMAIL_ITEMS.length}</div>
          <div style={{ fontSize: 11.5, fontWeight: 800, color: COLORS.inkSoft }}>Email Senaryosu</div>
          <div style={{ fontSize: 10.5, color: COLORS.gold, marginTop: 2, fontWeight: 700 }}>Sınavda: 1 Görev (~7 dk)</div>
        </div>
        <div style={{ background: COLORS.blueSoft, borderRadius: 10, padding: "11px 12px", border: `1px solid ${COLORS.blue}22` }}>
          <div style={{ fontSize: 20, fontWeight: 900, color: COLORS.blue }}>{WRITING_DISCUSSION_ITEMS.length}</div>
          <div style={{ fontSize: 11.5, fontWeight: 800, color: COLORS.inkSoft }}>Tartışma Senaryosu</div>
          <div style={{ fontSize: 10.5, color: COLORS.blue, marginTop: 2, fontWeight: 700 }}>Sınavda: 1 Görev (~10 dk)</div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 8 }}>
        {WRITING_SKILL_GROUPS.map((group) => (
          <div key={group.id} style={{ background: COLORS.paper, border: `1px solid ${COLORS.paperLine}`, borderRadius: 10, padding: "11px 12px" }}>
            <div style={{ fontSize: 12.8, fontWeight: 900, color: COLORS.ink, marginBottom: 4 }}>{group.title_tr}</div>
            <div style={{ fontSize: 11.8, lineHeight: 1.45, color: COLORS.inkSoft }}>{group.target_for_4_5}</div>
          </div>
        ))}
      </div>

      {/* Main task selection tabs */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(135px, 1fr))", gap: 8 }}>
        {Object.entries(writingTasks).map(([key, task]) => (
          <button key={key} onClick={() => handleTypeChange(key)} style={sectionButtonStyle(type === key, task.color, task.bg)}>
            {task.label}
          </button>
        ))}
      </div>

      {/* Active task description header */}
      <div style={{ ...cardStyle, borderLeft: `4px solid ${active.color}`, background: active.bg }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <div style={{ fontSize: 11, fontWeight: 900, color: active.color, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Aktif Görev Odağı · {active.label}
          </div>
          <span style={{ fontSize: 11.5, fontWeight: 850, background: "rgba(255,255,255,0.7)", padding: "3px 8px", borderRadius: 6, color: active.color }}>
            {active.timeTarget}
          </span>
        </div>
        <div style={{ fontSize: 12.8, color: COLORS.ink, lineHeight: 1.5, marginBottom: 6 }}>{active.description}</div>
        <div style={{ fontSize: 12.2, color: COLORS.inkSoft, lineHeight: 1.45 }}>
          <strong>4.5+ Hedef Başarısı:</strong> {activeGroup?.target_for_4_5}
        </div>
      </div>

      {/* Subtype filter pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}>
        <span style={{ fontSize: 12, fontWeight: 850, color: COLORS.inkSoft, marginRight: 4 }}>Soru Tarzı Filtresi:</span>
        <button
          onClick={() => setFilterSubtype("all")}
          style={{
            border: `1px solid ${filterSubtype === "all" ? active.color : COLORS.paperLine}`,
            background: filterSubtype === "all" ? active.color : COLORS.card,
            color: filterSubtype === "all" ? "#fff" : COLORS.ink,
            borderRadius: 8,
            padding: "5px 10px",
            fontSize: 12,
            fontWeight: 800,
            cursor: "pointer",
          }}
        >
          Tüm Soru Tarzları ({active.items.length})
        </button>
        {subtypes.map(([subKey, subLabel]) => {
          const count = active.items.filter((i) => i.subtype === subKey).length;
          const isActive = filterSubtype === subKey;
          return (
            <button
              key={subKey}
              onClick={() => setFilterSubtype(subKey)}
              style={{
                border: `1px solid ${isActive ? active.color : COLORS.paperLine}`,
                background: isActive ? active.bg : COLORS.card,
                color: isActive ? active.color : COLORS.ink,
                borderRadius: 8,
                padding: "5px 10px",
                fontSize: 12,
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              {subLabel} ({count})
            </button>
          );
        })}
      </div>

      {/* Item list */}
      <div style={cardStyle}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div style={{ fontSize: 11, fontWeight: 900, color: COLORS.inkSoft, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            {active.label} Senaryoları ve Model Çözümler ({filteredItems.length})
          </div>
          {filterSubtype !== "all" && (
            <button
              onClick={() => setFilterSubtype("all")}
              style={{ border: "none", background: "transparent", color: active.color, fontSize: 11.5, fontWeight: 850, cursor: "pointer" }}
            >
              Filtreyi Temizle ✕
            </button>
          )}
        </div>

        {filteredItems.map((item, idx) => (
          <div key={item.id} style={{ background: COLORS.card, border: `1px solid ${COLORS.paperLine}`, borderRadius: 12, padding: "14px", marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "baseline", marginBottom: 9 }}>
              <div style={{ fontSize: 14.5, fontWeight: 900, color: COLORS.ink }}>
                {idx + 1}. {item.title || item.context}
              </div>
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ fontSize: 11, fontWeight: 900, background: active.bg, color: active.color, padding: "2px 7px", borderRadius: 5 }}>
                  {item.difficulty}
                </span>
              </div>
            </div>
            {renderWritingItem(item)}
          </div>
        ))}
      </div>

      {template.length > 0 && (
        <div style={cardStyle}>
          <div style={{ fontSize: 11, fontWeight: 900, color: COLORS.inkSoft, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>
            Güvenli Cevap İskeleti (Şablon)
          </div>
          {template.map((line, index) => (
            <div key={`${type}-${index}`} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
              <div style={{ width: 22, height: 22, borderRadius: "50%", background: COLORS.mossSoft, color: COLORS.moss, fontSize: 11, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {index + 1}
              </div>
              <div style={{ fontSize: 13.5, lineHeight: 1.5 }}>{line}</div>
            </div>
          ))}
        </div>
      )}

      <div style={{ ...cardStyle, background: COLORS.goldSoft }}>
        <div style={{ fontWeight: 900, color: COLORS.gold, marginBottom: 6, fontSize: 12 }}>Writing Puanlama Kalite Kontrolü</div>
        <div style={{ fontSize: 12.8, lineHeight: 1.55 }}>
          Yüksek bant (4.5+) için: Build Sentence'ta decoy eleme ve gramer sırası hatasız olmalı; Email'de 3 madde açıkça kapsanmalı; Academic Discussion'da bir öğrenciye doğrudan bağlanıp özgün argüman ve somut örnek sunulmalıdır.
        </div>
      </div>
    </div>
  );
}

function StudyPlan({ setView }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <TargetSummary />
      <div style={cardStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <Target size={18} color={COLORS.gold} />
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 22, fontWeight: 800 }}>4.5+ Sabit Çalışma Planı</div>
        </div>
        <div style={{ fontSize: 13.2, color: COLORS.inkSoft, lineHeight: 1.55 }}>
          Bu sürümde hedef ayarı sorulmuyor. Plan doğrudan Aralık 2026 ilk haftaları ve minimum 4.5 band için tasarlandı.
        </div>
      </div>
      {PREP_PLAN.map((phase) => (
        <div key={phase.phase} style={cardStyle}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10, marginBottom: 9 }}>
            <div style={{ fontSize: 12, fontWeight: 900, color: COLORS.gold }}>{phase.phase}</div>
            <div style={{ fontWeight: 900, fontSize: 14 }}>{phase.title}</div>
          </div>
          {phase.actions.map((action) => (
            <div key={action} style={{ display: "flex", gap: 8, fontSize: 13, lineHeight: 1.45, marginBottom: 6 }}>
              <Check size={14} color={COLORS.moss} style={{ marginTop: 2, flexShrink: 0 }} />
              <span>{action}</span>
            </div>
          ))}
        </div>
      ))}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        <button onClick={() => setView("placement")} style={primaryBtn}>Seviye Testi</button>
        <button onClick={() => setView("stats")} style={{ ...primaryBtn, background: COLORS.gold }}>İstatistik</button>
      </div>
    </div>
  );
}

function ScorePlanner() {
  const [scores, setScores] = useState({ reading: 70, listening: 70, writing: 70, speaking: 70 });
  const values = [scores.reading, scores.listening, scores.writing, scores.speaking];
  const band = scoreBandFromSections(values);
  const bandMeta = SCORE_BANDS.find((item) => item.band === band) || SCORE_BANDS[3];
  const weakest = Object.entries(scores).sort((a, b) => a[1] - b[1])[0];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={cardStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <Award size={18} color={COLORS.gold} />
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 22, fontWeight: 800 }}>Skor Planlayıcı</div>
        </div>
          <div style={{ fontSize: 13.2, color: COLORS.inkSoft, lineHeight: 1.55 }}>
          Bölüm performansını yüzdelik tahmin olarak gir. Bu resmi skor dönüştürücü değil; adaptif testte çalışma önceliği belirleme aracıdır.
        </div>
      </div>

      <div style={{ ...cardStyle, textAlign: "center", borderTop: `4px solid ${bandMeta.color}` }}>
        <div style={{ fontSize: 12, color: COLORS.inkSoft, fontWeight: 900 }}>Tahmini çalışma bandı</div>
        <div style={{ fontSize: 46, fontWeight: 950, color: bandMeta.color, fontFamily: "'Source Serif 4', serif" }}>{bandMeta.band}</div>
        <div style={{ fontSize: 13, color: COLORS.inkSoft }}>{bandMeta.cefr} · {bandMeta.label} · {bandMeta.evidence}</div>
      </div>

      <div style={cardStyle}>
        {OFFICIAL_SNAPSHOT.sections.map((section) => (
          <div key={section.id} style={{ marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12.5, fontWeight: 900, marginBottom: 6 }}>
              <span>{section.title}</span>
              <span>{scores[section.id]}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={scores[section.id]}
              onChange={(event) => setScores({ ...scores, [section.id]: Number(event.target.value) })}
              style={{ width: "100%", accentColor: section.color }}
            />
          </div>
        ))}
      </div>

      <div style={{ ...cardStyle, background: COLORS.coralSoft }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", color: COLORS.coral, fontWeight: 900, marginBottom: 5 }}>
          <AlertCircle size={15} /> Öncelik
        </div>
        <div style={{ fontSize: 13, lineHeight: 1.55 }}>
          En zayıf bölüm <strong>{OFFICIAL_SNAPSHOT.sections.find((section) => section.id === weakest[0])?.title}</strong>. Günlük çalışma süresinin en az %40'ını buraya ayır.
        </div>
      </div>
    </div>
  );
}

export default function ToeflPrep2026({ setView }) {
  const [tab, setTab] = useState("format");
  const tabs = useMemo(
    () => [
      { id: "format", label: "Format", icon: Zap },
      { id: "reading", label: "Reading", icon: BookOpen },
      { id: "listening", label: "Listening", icon: Headphones },
      { id: "speaking", label: "Speaking", icon: Mic },
      { id: "writing", label: "Writing Bank", icon: PenLine },
      { id: "plan", label: "Plan", icon: Target },
      { id: "score", label: "Skor", icon: Award },
    ],
    [],
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))", gap: 8 }}>
        {tabs.map((item) => {
          const Icon = item.icon;
          const active = tab === item.id;
          return (
            <button key={item.id} onClick={() => setTab(item.id)} style={sectionButtonStyle(active, COLORS.ink, COLORS.goldSoft)}>
              <Icon size={13} /> {item.label}
            </button>
          );
        })}
      </div>
      {tab === "format" && <SectionFormat setView={setView} />}
      {tab === "reading" && <ReadingTrainer />}
      {tab === "listening" && <ListeningTrainer />}
      {tab === "speaking" && <SpeakingTrainer />}
      {tab === "writing" && <WritingTemplates />}
      {tab === "plan" && <StudyPlan setView={setView} />}
      {tab === "score" && <ScorePlanner />}
    </div>
  );
}

export { ReadingTrainer };
