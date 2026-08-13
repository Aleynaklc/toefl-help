import {
  BookOpen,
  CheckCircle,
  GraduationCap,
  Layers,
  PenLine,
  Shuffle,
  Target,
  TrendingUp,
  Type,
  Zap,
} from "lucide-react";

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
};

const cardStyle = {
  background: COLORS.card,
  border: `1px solid ${COLORS.paperLine}`,
  borderRadius: 14,
  padding: 18,
};

const primaryButton = {
  background: COLORS.ink,
  color: COLORS.paper,
  border: "none",
  borderRadius: 10,
  padding: "12px 14px",
  fontSize: 13,
  fontWeight: 800,
  cursor: "pointer",
};

function countMastered(words) {
  return words.filter((word) => Number(word.box || 1) >= 5).length;
}

function countDue(words) {
  const now = Date.now();
  return words.filter((word) => !word.next_review_at || Date.parse(word.next_review_at) <= now).length;
}

function StatCard({ icon: Icon, label, value, color, bg }) {
  return (
    <div style={{ background: bg, borderRadius: 12, padding: "14px 12px", border: `1px solid ${color}22` }}>
      <Icon size={17} color={color} style={{ marginBottom: 8 }} />
      <div style={{ fontSize: 24, fontWeight: 900, color }}>{value}</div>
      <div style={{ fontSize: 11.5, color: COLORS.inkSoft, fontWeight: 700 }}>{label}</div>
    </div>
  );
}

function ActionCard({ icon: Icon, title, text, button, color, bg, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        ...cardStyle,
        textAlign: "left",
        cursor: "pointer",
        display: "flex",
        gap: 13,
        alignItems: "flex-start",
        transition: "transform 0.15s ease, border 0.15s ease",
      }}
    >
      <div style={{ width: 36, height: 36, borderRadius: 10, background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Icon size={18} color={color} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 900, color: COLORS.ink, marginBottom: 4 }}>{title}</div>
        <div style={{ fontSize: 12.5, color: COLORS.inkSoft, lineHeight: 1.45, marginBottom: 10 }}>{text}</div>
        <div style={{ fontSize: 12.5, fontWeight: 900, color }}>{button} →</div>
      </div>
    </button>
  );
}

function Step({ number, title, text, action, onClick }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "30px 1fr auto", gap: 10, alignItems: "center", padding: "12px 0", borderBottom: `1px solid ${COLORS.paperLine}` }}>
      <div style={{ width: 30, height: 30, borderRadius: "50%", background: COLORS.goldSoft, color: COLORS.gold, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 13 }}>
        {number}
      </div>
      <div>
        <div style={{ fontSize: 13.5, fontWeight: 900 }}>{title}</div>
        <div style={{ fontSize: 12.2, color: COLORS.inkSoft, lineHeight: 1.4 }}>{text}</div>
      </div>
      <button onClick={onClick} style={{ border: "none", background: COLORS.paper, color: COLORS.ink, borderRadius: 8, padding: "8px 10px", fontSize: 12, fontWeight: 800, cursor: "pointer" }}>
        {action}
      </button>
    </div>
  );
}

export default function HomeDashboard({ words, setView }) {
  const mastered = countMastered(words);
  const due = countDue(words);
  const hasWords = words.length > 0;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <div style={{ ...cardStyle, background: "linear-gradient(135deg, #1a1f2e 0%, #2d3561 55%, #1a2a3a 100%)", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -28, right: -28, width: 130, height: 130, borderRadius: "50%", background: "rgba(184,137,43,0.18)" }} />
        <div style={{ position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(184,137,43,0.18)", border: "1px solid rgba(184,137,43,0.42)", borderRadius: 999, padding: "6px 10px", marginBottom: 13 }}>
            <Zap size={13} color="#F5D489" />
            <span style={{ color: "#F5D489", fontSize: 11, fontWeight: 900, letterSpacing: "0.05em" }}>TOEFL iBT 2026 çalışma akışı</span>
          </div>
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 30, lineHeight: 1.15, fontWeight: 850, marginBottom: 8 }}>
            Bugün ne çalışacağını buradan yönet.
          </div>
          <div style={{ color: "rgba(255,255,255,0.68)", fontSize: 13.5, lineHeight: 1.6, maxWidth: 520 }}>
            Önce seviyeni belirle, eksik kelimeleri karta çevir, sonra Reading/Writing/Speaking/Listening görevleriyle sınav formatında tekrar yap.
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 10, marginTop: 18 }}>
            <button onClick={() => setView(hasWords ? "quiz" : "placement")} style={primaryButton}>
              {hasWords ? "Bugünkü quizleri çöz" : "Seviye testiyle başla"}
            </button>
            <button onClick={() => setView("toefl")} style={{ ...primaryButton, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)" }}>
              2026 format rehberi
            </button>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(135px, 1fr))", gap: 10 }}>
        <StatCard icon={BookOpen} label="Kelime kartı" value={words.length} color={COLORS.blue} bg={COLORS.blueSoft} />
        <StatCard icon={Target} label="Bugün tekrar" value={due} color={COLORS.gold} bg={COLORS.goldSoft} />
        <StatCard icon={CheckCircle} label="Ustalaştı" value={mastered} color={COLORS.moss} bg={COLORS.mossSoft} />
      </div>

      <div style={cardStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <TrendingUp size={17} color={COLORS.gold} />
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 21, fontWeight: 850 }}>Önerilen sıra</div>
        </div>
        <Step number="1" title="Seviyeni ölç" text="A1–C2 kelime açıklarını gör; bilmediklerini karta aktar." action="Seviye" onClick={() => setView("placement")} />
        <Step number="2" title="Kelime tabanını kur" text="Eksik akademik kelimeleri ekle ve anlamlarını netleştir." action="Ekle" onClick={() => setView("add")} />
        <Step number="3" title="Sınav görevleriyle çalış" text="Complete the Words, Build a Sentence, Writing ve Speaking drilleri yap." action="TOEFL 2026" onClick={() => setView("toefl")} />
        <Step number="4" title="Performansı izle" text="Leitner kutuları ve yanlış kelimelerden bir sonraki günün planını çıkar." action="Stats" onClick={() => setView("stats")} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 10 }}>
        <ActionCard icon={Type} title="Reading yazım drilli" text="Complete the Words formatında eksik kelime tamamla." button="Tamamla" color={COLORS.blue} bg={COLORS.blueSoft} onClick={() => setView("complete")} />
        <ActionCard icon={Shuffle} title="Writing cümle drilli" text="Build a Sentence mantığıyla doğru cümle iskeleti kur." button="Cümle Kur" color={COLORS.moss} bg={COLORS.mossSoft} onClick={() => setView("build")} />
        <ActionCard icon={PenLine} title="Email / Discussion" text="Zamanlayıcıyla yaz, AI geri bildirim al." button="Yazma" color={COLORS.coral} bg={COLORS.coralSoft} onClick={() => setView("writing")} />
        <ActionCard icon={Layers} title="Leitner tekrar" text="Zayıf kelimeleri daha sık, güçlüleri daha seyrek gör." button="Quiz" color={COLORS.gold} bg={COLORS.goldSoft} onClick={() => setView("quiz")} />
      </div>

      {!hasWords && (
        <div style={{ ...cardStyle, background: COLORS.goldSoft, borderColor: "#E4C979" }}>
          <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <GraduationCap size={19} color={COLORS.gold} style={{ flexShrink: 0, marginTop: 1 }} />
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 900, marginBottom: 4 }}>Yeni başlıyorsan en mantıklı ilk adım seviye testi.</div>
              <div style={{ fontSize: 12.8, color: COLORS.inkSoft, lineHeight: 1.5 }}>
                Rastgele kelime eklemek yerine önce hangi seviyede açık olduğunu gör. Bu, yüksek puan için daha verimli bir çalışma planı çıkarır.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
