import {
  BookOpen,
  CheckCircle,
  Clock,
  GraduationCap,
  Layers,
  Mic,
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
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: 24, alignItems: "start" }}>
      {/* Sol Sütun: Ana Çalışma Akışı ve Sınav Drilleri */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ ...cardStyle, background: "linear-gradient(135deg, #1a1f2e 0%, #2d3561 55%, #1a2a3a 100%)", color: "#fff", position: "relative", overflow: "hidden", padding: "26px 24px" }}>
          <div style={{ position: "absolute", top: -30, right: -30, width: 160, height: 160, borderRadius: "50%", background: "rgba(184,137,43,0.18)" }} />
          <div style={{ position: "relative" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(184,137,43,0.18)", border: "1px solid rgba(184,137,43,0.42)", borderRadius: 999, padding: "6px 12px", marginBottom: 14 }}>
              <Zap size={13} color="#F5D489" />
              <span style={{ color: "#F5D489", fontSize: 11.5, fontWeight: 900, letterSpacing: "0.05em" }}>TOEFL iBT 2026 ÇALIŞMA MERKEZİ</span>
            </div>
            <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 32, lineHeight: 1.2, fontWeight: 800, marginBottom: 10 }}>
              Bugün ne çalışacağını buradan yönet.
            </div>
            <div style={{ color: "rgba(255,255,255,0.72)", fontSize: 14, lineHeight: 1.6, maxWidth: 580 }}>
              Önce seviyeni belirle, eksik kelimeleri karta çevir; ardından Reading, Writing, Speaking ve Listening görevleriyle 2026 sınav formatında düzenli tekrar yap.
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 22 }}>
              <button onClick={() => setView("mock")} style={{ ...primaryButton, background: "#F5D489", color: COLORS.ink, padding: "13px 20px", fontSize: 14 }}>
                <Clock size={16} /> Mini Deneme Sınavı (38 dk)
              </button>
              <button onClick={() => setView(hasWords ? "quiz" : "placement")} style={{ ...primaryButton, padding: "13px 18px", fontSize: 13.5 }}>
                {hasWords ? "Bugünkü Quizleri Çöz" : "Seviye Testiyle Başla"}
              </button>
              <button onClick={() => setView("toefl")} style={{ ...primaryButton, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)", padding: "13px 16px", fontSize: 13.5 }}>
                Format Rehberi →
              </button>
            </div>
          </div>
        </div>

        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
            <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 20, fontWeight: 800, color: COLORS.ink }}>
              Sınav Formatına Özel Driller
            </div>
            <span style={{ fontSize: 12.5, color: COLORS.inkSoft, fontWeight: 600 }}>2026 Yeni Görevler</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
            <ActionCard
              icon={Type}
              title="Reading Yazım Drilli"
              text="Complete the Words formatında eksik harfleri bağlamdan tamamla."
              button="Tamamla"
              color={COLORS.blue}
              bg={COLORS.blueSoft}
              onClick={() => setView("complete")}
            />
            <ActionCard
              icon={Shuffle}
              title="Writing Cümle Drilli"
              text="Build a Sentence mantığıyla kelimeleri doğru sıraya diz ve çeldiriciyi ele."
              button="Cümle Kur"
              color={COLORS.moss}
              bg={COLORS.mossSoft}
              onClick={() => setView("build")}
            />
            <ActionCard
              icon={PenLine}
              title="Email & Discussion Yazma"
              text="Zamanlayıcı ve kelime hedefiyle yaz, yapay zeka ile anında geri bildirim al."
              button="Yazma Modu"
              color={COLORS.coral}
              bg={COLORS.coralSoft}
              onClick={() => setView("writing")}
            />
            <ActionCard
              icon={Mic}
              title="Speaking Sesli Studio"
              text="Mikrofonla konuş, canlı transkript al ve cümlenin aslıyla kelime kelime doğruluğunu gör."
              button="Konuşmaya Başla"
              color="#5D4A8C"
              bg="#E6E0F0"
              onClick={() => setView("speaking")}
            />
            <ActionCard
              icon={Layers}
              title="Leitner Akıllı Tekrar"
              text="Zayıf kelimeleri daha sık, ustalaştığın kelimeleri daha seyrek görerek pekiştir."
              button="Quiz Başlat"
              color={COLORS.gold}
              bg={COLORS.goldSoft}
              onClick={() => setView("quiz")}
            />
          </div>
        </div>

        {!hasWords && (
          <div style={{ ...cardStyle, background: COLORS.goldSoft, borderColor: "#E4C979" }}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <GraduationCap size={22} color={COLORS.gold} style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ fontSize: 14.5, fontWeight: 900, marginBottom: 4, color: COLORS.ink }}>
                  Yeni başlıyorsan en mantıklı ilk adım: Seviye Testi
                </div>
                <div style={{ fontSize: 13, color: COLORS.inkSoft, lineHeight: 1.5 }}>
                  Rastgele kelime ezberlemek yerine önce A1–C2 seviyelerinde hangi kelimelerde eksiğin olduğunu tespit et. Bilmediğin kelimeler tek tıkla kart kutuna aktarılır.
                </div>
                <button
                  onClick={() => setView("placement")}
                  style={{
                    marginTop: 10,
                    background: COLORS.ink,
                    color: COLORS.paper,
                    border: "none",
                    borderRadius: 6,
                    padding: "8px 14px",
                    fontSize: 12.5,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Seviye Testini Aç →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Sağ Sütun: İstatistikler, Önerilen Sıra ve Günlük İpuçları */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {/* İstatistik Kartları */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
          <StatCard icon={BookOpen} label="Kelime Kartı" value={words.length} color={COLORS.blue} bg={COLORS.blueSoft} />
          <StatCard icon={Target} label="Bugün Tekrar" value={due} color={COLORS.gold} bg={COLORS.goldSoft} />
          <StatCard icon={CheckCircle} label="Ustalaştı" value={mastered} color={COLORS.moss} bg={COLORS.mossSoft} />
        </div>

        {/* Önerilen Sıra */}
        <div style={cardStyle}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <TrendingUp size={18} color={COLORS.gold} />
            <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 20, fontWeight: 850 }}>
              Önerilen Çalışma Sırası
            </div>
          </div>
          <Step
            number="1"
            title="Seviyeni Ölç"
            text="A1–C2 kelime açıklarını gör; bilmediklerini tek tıkla kartlara aktar."
            action="Seviye"
            onClick={() => setView("placement")}
          />
          <Step
            number="2"
            title="Kelime Tabanını Kur"
            text="Eksik akademik kelimeleri ekle ve bağlam içindeki anlamlarını netleştir."
            action="Kelimeler"
            onClick={() => setView("list")}
          />
          <Step
            number="3"
            title="Sınav Görevleriyle Çalış"
            text="Complete the Words, Build a Sentence, Writing ve Speaking drilleri yap."
            action="TOEFL 2026"
            onClick={() => setView("toefl")}
          />
          <Step
            number="4"
            title="Performansı İzle"
            text="Leitner kutuları ve yanlış kelimelerden sonraki günün planını çıkar."
            action="İstatistik"
            onClick={() => setView("stats")}
          />
        </div>

        {/* 2026 Strateji Kartı */}
        <div style={{ ...cardStyle, background: "#F5F3EF", borderColor: COLORS.paperLine }}>
          <div style={{ fontSize: 13, fontWeight: 900, color: COLORS.ink, marginBottom: 6, display: "flex", alignItems: "center", gap: 6 }}>
            <Zap size={14} color={COLORS.gold} /> TOEFL 2026 Puanlama Tüyosu
          </div>
          <div style={{ fontSize: 12.5, color: COLORS.inkSoft, lineHeight: 1.5 }}>
            2026 formatında Reading bölümündeki <strong>Complete the Words</strong> ve Writing bölümündeki <strong>Build a Sentence</strong> görevleri hız ve doğruluk odaklıdır. Günde en az 10 dakika bu drillere zaman ayırın.
          </div>
        </div>
      </div>
    </div>
  );
}
