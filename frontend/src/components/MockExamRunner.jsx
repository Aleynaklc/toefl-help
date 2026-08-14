import { useEffect, useMemo, useRef, useState } from "react";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  ExternalLink,
  GraduationCap,
  Headphones,
  HelpCircle,
  Info,
  Layers,
  MessageSquare,
  Mic,
  MicOff,
  PenLine,
  Play,
  RotateCcw,
  Send,
  Shuffle,
  Sparkles,
  Target,
  TrendingUp,
  Type,
  Volume2,
  X,
  Zap,
} from "lucide-react";
import mockExamData from "../data/toefl2026_mock_exams.json";

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

const cardStyle = {
  background: COLORS.card,
  border: `1px solid ${COLORS.paperLine}`,
  borderRadius: 14,
  padding: "22px 24px",
};

const primaryBtn = {
  background: COLORS.ink,
  color: COLORS.paper,
  border: "none",
  borderRadius: 8,
  padding: "11px 20px",
  fontSize: 13.5,
  fontWeight: 750,
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  transition: "all 0.15s ease",
};

// Calculate 2026 Band Score from 0-120 total
function calculateBandScore(totalScore) {
  if (totalScore >= 114) return { band: 6.0, cefr: "C2 (Proficient)", desc: "Mükemmel akademik yetkinlik, ana dil akıcılığı seviyesinde." };
  if (totalScore >= 104) return { band: 5.5, cefr: "C1/C2 (Advanced High)", desc: "Çok yüksek akademik yeterlilik, üst düzey üniversiteler için ideal." };
  if (totalScore >= 95) return { band: 5.0, cefr: "C1 (Advanced)", desc: "Güçlü akademik dil becerisi, uluslararası standartları karşılıyor." };
  if (totalScore >= 84) return { band: 4.5, cefr: "B2/C1 (Upper Intermediate)", desc: "Yetkin iletişim ve iyi akademik kavrama." };
  if (totalScore >= 72) return { band: 4.0, cefr: "B2 (Independent)", desc: "Bağımsız kullanıcı seviyesi, lisans kabulleri için genel eşik." };
  if (totalScore >= 57) return { band: 3.5, cefr: "B1/B2 (Threshold)", desc: "Orta seviye, kelime ve bağlaç çeşitliliği artırılmalı." };
  if (totalScore >= 42) return { band: 3.0, cefr: "B1 (Intermediate)", desc: "Temel akademik ihtiyaçları karşılar, sınav görevleriyle pekiştirilmeli." };
  return { band: 2.5, cefr: "A2/B1 (Basic)", desc: "Temel seviye, kelime tabanını ve gramer yapılarını güçlendirin." };
}

function formatSeconds(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s < 10 ? "0" : ""}${s}`;
}

export default function MockExamRunner({ onBackToDashboard }) {
  const [selectedExamId, setSelectedExamId] = useState(null);
  const [activeSection, setActiveSection] = useState("reading"); // "reading" | "listening" | "writing" | "speaking"
  const [sectionTimeLeft, setSectionTimeLeft] = useState(720);
  const [isTestActive, setIsTestActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);

  // User answers state
  const [readingAnswers, setReadingAnswers] = useState({
    blanks: {}, // { "b1": "orb" }
    choices: {}, // { "m1-r-q1": 2 }
  });

  const [listeningAnswers, setListeningAnswers] = useState({
    choices: {}, // { "m1-l-q1": 1 }
  });

  const [writingAnswers, setWritingAnswers] = useState({
    build: {}, // { "m1-w-b1": ["although", "the", ...] }
    email: "",
    discussion: "",
  });

  const [speakingAnswers, setSpeakingAnswers] = useState({
    repeatTranscript: "",
    repeatScore: 0,
    interviewTranscript: "",
    interviewScore: 0,
  });

  // Speaking Recording state
  const [isRecording, setIsRecording] = useState(false);
  const [liveTranscript, setLiveTranscript] = useState("");
  const recognitionRef = useRef(null);

  // History state
  const [examHistory, setExamHistory] = useState([]);

  const timerRef = useRef(null);

  const activeExam = useMemo(() => {
    return mockExamData.exams.find((e) => e.id === selectedExamId) || null;
  }, [selectedExamId]);

  // Load history from storage
  useEffect(() => {
    (async () => {
      try {
        if (window.storage) {
          const res = await window.storage.get("toefl-mock-history", false);
          if (res && res.value) setExamHistory(JSON.parse(res.value));
        }
      } catch (e) {}
    })();
  }, []);

  // Text to speech helper
  function speak(text) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }

  // Section time manager
  useEffect(() => {
    if (!isTestActive || isFinished) return;
    timerRef.current = setInterval(() => {
      setSectionTimeLeft((prev) => {
        if (prev <= 1) {
          handleNextSection();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [isTestActive, isFinished, activeSection]);

  // Start speech recognition for speaking drill in mock
  function startSpeakingRecord(taskType) {
    setLiveTranscript("");
    if (typeof window !== "undefined" && ("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      const SpeechClass = window.SpeechRecognition || window.webkitSpeechRecognition;
      const rec = new SpeechClass();
      rec.continuous = true;
      rec.interimResults = true;
      rec.lang = "en-US";

      rec.onresult = (event) => {
        let text = "";
        for (let i = 0; i < event.results.length; ++i) {
          text += event.results[i][0].transcript + " ";
        }
        setLiveTranscript(text.trim());
      };

      try {
        rec.start();
        recognitionRef.current = rec;
        setIsRecording(true);
      } catch (e) {}
    }
  }

  function stopSpeakingRecord(taskType) {
    setIsRecording(false);
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {}
    }
    if (taskType === "repeat") {
      setSpeakingAnswers((prev) => ({
        ...prev,
        repeatTranscript: liveTranscript || "I understand the lecture completely.",
        repeatScore: liveTranscript.length > 10 ? 12 : 6,
      }));
    } else {
      setSpeakingAnswers((prev) => ({
        ...prev,
        interviewTranscript: liveTranscript || "In my perspective, studying alone is far more effective...",
        interviewScore: liveTranscript.split(/\s+/).length >= 40 ? 14 : 8,
      }));
    }
  }

  // Section flow navigation
  function startExam(examId) {
    setSelectedExamId(examId);
    setActiveSection("reading");
    setSectionTimeLeft(720); // 12 mins
    setIsTestActive(true);
    setIsFinished(false);
    setReviewMode(false);
    setReadingAnswers({ blanks: {}, choices: {} });
    setListeningAnswers({ choices: {} });
    setWritingAnswers({ build: {}, email: "", discussion: "" });
    setSpeakingAnswers({ repeatTranscript: "", repeatScore: 0, interviewTranscript: "", interviewScore: 0 });
  }

  function handleNextSection() {
    if (activeSection === "reading") {
      setActiveSection("listening");
      setSectionTimeLeft(600); // 10 mins
    } else if (activeSection === "listening") {
      setActiveSection("writing");
      setSectionTimeLeft(720); // 12 mins
    } else if (activeSection === "writing") {
      setActiveSection("speaking");
      setSectionTimeLeft(300); // 5 mins
    } else if (activeSection === "speaking") {
      finishExam();
    }
  }

  // Calculate detailed scorecard results
  const scoreResults = useMemo(() => {
    if (!activeExam) return null;

    // 1. Reading Score (0-30)
    let readingCorrect = 0;
    let readingTotal = 0;
    // Complete words blanks (5 items)
    const cwTask = activeExam.reading.tasks.find((t) => t.type === "complete_words");
    if (cwTask && cwTask.blanks) {
      cwTask.blanks.forEach((b) => {
        readingTotal++;
        const userTyped = (readingAnswers.blanks[b.id] || "").trim().toLowerCase();
        // user enters the suffix
        if (userTyped === b.suffix.toLowerCase() || userTyped === b.answer.toLowerCase()) {
          readingCorrect++;
        }
      });
    }
    // Multiple choice reading questions
    activeExam.reading.tasks.forEach((t) => {
      if (t.questions) {
        t.questions.forEach((q) => {
          readingTotal++;
          if (readingAnswers.choices[q.id] === q.correct) {
            readingCorrect++;
          }
        });
      }
    });
    const scaledReading = readingTotal > 0 ? Math.round((readingCorrect / readingTotal) * 30) : 0;

    // 2. Listening Score (0-30)
    let listeningCorrect = 0;
    let listeningTotal = 0;
    activeExam.listening.tasks.forEach((t) => {
      if (t.type === "choose_response") {
        listeningTotal++;
        if (listeningAnswers.choices["choose_resp"] === t.correct) listeningCorrect++;
      }
      if (t.questions) {
        t.questions.forEach((q) => {
          listeningTotal++;
          if (listeningAnswers.choices[q.id] === q.correct) listeningCorrect++;
        });
      }
    });
    const scaledListening = listeningTotal > 0 ? Math.round((listeningCorrect / listeningTotal) * 30) : 0;

    // 3. Writing Score (0-30)
    let writingScore = 0;
    // Build sentence (3 items x 4 pts = 12 pts)
    const bsTask = activeExam.writing.tasks.find((t) => t.type === "build_sentence");
    if (bsTask && bsTask.items) {
      bsTask.items.forEach((item) => {
        const userOrder = writingAnswers.build[item.id] || [];
        const built = userOrder.join(" ").toLowerCase();
        const target = item.correct_sentence.toLowerCase().replace(".", "").trim();
        if (built.includes(target) || built === target) {
          writingScore += 4;
        }
      });
    }
    // Email task (9 pts max)
    const emailWords = (writingAnswers.email || "").trim().split(/\s+/).filter(Boolean).length;
    if (emailWords >= 80) writingScore += 5;
    else if (emailWords >= 40) writingScore += 3;
    if (/\b(dear|sincerely|regards|writing to|please|could you)\b/i.test(writingAnswers.email)) writingScore += 4;

    // Academic discussion task (9 pts max)
    const discWords = (writingAnswers.discussion || "").trim().split(/\s+/).filter(Boolean).length;
    if (discWords >= 100) writingScore += 5;
    else if (discWords >= 50) writingScore += 3;
    if (/\b(perspective|opinion|furthermore|for instance|consequently|in contrast|agree|disagree)\b/i.test(writingAnswers.discussion)) writingScore += 4;

    const scaledWriting = Math.min(30, writingScore);

    // 4. Speaking Score (0-30)
    let speakingScore = 0;
    const repWords = (speakingAnswers.repeatTranscript || "").split(/\s+/).filter(Boolean).length;
    if (repWords >= 6) speakingScore += 14;
    else if (repWords >= 3) speakingScore += 8;

    const intWords = (speakingAnswers.interviewTranscript || "").split(/\s+/).filter(Boolean).length;
    if (intWords >= 40) speakingScore += 16;
    else if (intWords >= 20) speakingScore += 9;

    const scaledSpeaking = Math.min(30, speakingScore || 20); // Default reasonable score if speech api skipped

    // Total and Band
    const totalScore = scaledReading + scaledListening + scaledWriting + scaledSpeaking;
    const bandInfo = calculateBandScore(totalScore);

    return {
      reading: { raw: `${readingCorrect}/${readingTotal}`, scaled: scaledReading },
      listening: { raw: `${listeningCorrect}/${listeningTotal}`, scaled: scaledListening },
      writing: { raw: `${scaledWriting}/30`, scaled: scaledWriting },
      speaking: { raw: `${scaledSpeaking}/30`, scaled: scaledSpeaking },
      totalScore,
      bandInfo,
    };
  }, [activeExam, readingAnswers, listeningAnswers, writingAnswers, speakingAnswers]);

  async function finishExam() {
    setIsTestActive(false);
    setIsFinished(true);

    if (scoreResults) {
      const entry = {
        id: Date.now(),
        examId: activeExam.id,
        examTitle: activeExam.title,
        totalScore: scoreResults.totalScore,
        band: scoreResults.bandInfo.band,
        cefr: scoreResults.bandInfo.cefr,
        readingScore: scoreResults.reading.scaled,
        listeningScore: scoreResults.listening.scaled,
        writingScore: scoreResults.writing.scaled,
        speakingScore: scoreResults.speaking.scaled,
        timestamp: Date.now(),
      };
      const nextHistory = [entry, ...examHistory].slice(0, 20);
      setExamHistory(nextHistory);
      try {
        if (window.storage) {
          await window.storage.set("toefl-mock-history", JSON.stringify(nextHistory), false);
        }
      } catch (e) {}
    }
  }

  // If no exam selected, show Exam Selection Hub
  if (!isTestActive && !isFinished) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {/* Banner */}
        <div style={{ ...cardStyle, background: "linear-gradient(135deg, #1a1f2e 0%, #2d3561 50%, #1a2a3a 100%)", color: "#fff", position: "relative", overflow: "hidden", padding: "26px 28px" }}>
          <div style={{ position: "absolute", top: -30, right: -30, width: 160, height: 160, borderRadius: "50%", background: "rgba(184,137,43,0.18)" }} />
          <div style={{ position: "relative" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(184,137,43,0.22)", border: "1px solid rgba(184,137,43,0.45)", borderRadius: 999, padding: "5px 12px", marginBottom: 12 }}>
              <Clock size={14} color="#F5D489" />
              <span style={{ color: "#F5D489", fontSize: 11.5, fontWeight: 900, letterSpacing: "0.06em" }}>TOEFL iBT 2026 MOCK EXAM ENGINE</span>
            </div>
            <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 28, lineHeight: 1.2, fontWeight: 800, marginBottom: 8 }}>
              2026 Yeni Format Tam Teşekküllü Deneme Sınavları
            </div>
            <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 13.5, lineHeight: 1.6, maxWidth: 680 }}>
              Reading, Listening, Writing ve Speaking bölümlerinden oluşan, geri sayımlı sınav simülasyonu. Sıfır yapay zeka gecikmesiyle sınav bitiminde anında <strong>1.0–6.0 Band Skoru</strong>, <strong>0–120 Puan Karnesi</strong> ve <strong>Türkçe Çözüm İncelemesi</strong> alın.
            </div>
          </div>
        </div>

        {/* 3 Full Mock Exam Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
          {mockExamData.exams.map((exam, idx) => {
            const lastAttempt = examHistory.find((h) => h.examId === exam.id);
            return (
              <div key={exam.id} style={{ ...cardStyle, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 16, border: `1px solid ${COLORS.paperLine}` }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                    <span style={{ fontSize: 11, fontWeight: 800, background: COLORS.goldSoft, color: COLORS.gold, padding: "4px 10px", borderRadius: 20 }}>
                      TEST {idx + 1} · {exam.target_minutes} DAKİKA
                    </span>
                    {lastAttempt && (
                      <span style={{ fontSize: 11.5, fontWeight: 800, color: COLORS.moss }}>
                        Son Skor: {lastAttempt.totalScore}/120 (Band {lastAttempt.band})
                      </span>
                    )}
                  </div>
                  <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 20, fontWeight: 800, color: COLORS.ink, marginBottom: 6 }}>
                    {exam.title}
                  </div>
                  <div style={{ fontSize: 13, color: COLORS.inkSoft, lineHeight: 1.5, marginBottom: 14 }}>
                    {exam.subtitle}
                  </div>

                  {/* Section breakdown tags */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 12, color: COLORS.inkSoft, background: COLORS.paper, padding: "10px 12px", borderRadius: 8, border: `1px solid ${COLORS.paperLine}` }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <BookOpen size={13} color={COLORS.blue} /> <strong>Reading:</strong> Complete Words + Daily Notice + Academic
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Headphones size={13} color={COLORS.gold} /> <strong>Listening:</strong> Short Response + Conversation + Lecture
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <PenLine size={13} color={COLORS.coral} /> <strong>Writing:</strong> 3x Build Sentence + Email + Discussion
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Mic size={13} color={COLORS.purple} /> <strong>Speaking:</strong> Listen & Repeat + 45s Interview
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => startExam(exam.id)}
                  style={{ ...primaryBtn, width: "100%", padding: "12px", background: COLORS.ink }}
                >
                  <Play size={15} /> Sınavı Başlat ({exam.target_minutes} dk)
                </button>
              </div>
            );
          })}
        </div>

        {/* History Table */}
        {examHistory.length > 0 && (
          <div style={cardStyle}>
            <div style={{ fontSize: 14, fontWeight: 800, color: COLORS.ink, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
              <Award size={18} color={COLORS.gold} /> Geçmiş Deneme Sınavı Karneleri
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {examHistory.map((h) => (
                <div
                  key={h.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 14px",
                    borderRadius: 8,
                    border: `1px solid ${COLORS.paperLine}`,
                    background: COLORS.paper,
                    fontSize: 13,
                    flexWrap: "wrap",
                    gap: 10,
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 800, color: COLORS.ink }}>{h.examTitle}</div>
                    <div style={{ fontSize: 11.5, color: COLORS.inkSoft, marginTop: 2 }}>
                      R: {h.readingScore}/30 · L: {h.listeningScore}/30 · W: {h.writingScore}/30 · S: {h.speakingScore}/30
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 16, fontWeight: 900, color: COLORS.gold }}>{h.totalScore} / 120</div>
                      <div style={{ fontSize: 11, fontWeight: 800, color: COLORS.moss }}>Band {h.band} · {h.cefr.split(" ")[0]}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // If Finished, show Scorecard & Review
  if (isFinished && scoreResults) {
    const { bandInfo, reading, listening, writing, speaking, totalScore } = scoreResults;
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {/* Scorecard Hero */}
        <div style={{ ...cardStyle, background: "linear-gradient(135deg, #1a1f2e 0%, #202b48 50%, #1a2a3a 100%)", color: "#fff", padding: "30px", textAlign: "center" }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(184,137,43,0.25)", color: "#F5D489", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
            <Award size={32} />
          </div>
          <div style={{ fontSize: 13, fontWeight: 800, color: "#F5D489", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>
            TOEFL iBT 2026 PERFORMANS KARNESİ
          </div>
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 44, fontWeight: 900, color: "#fff", lineHeight: 1.1 }}>
            Band {bandInfo.band} <span style={{ fontSize: 24, fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>/ 6.0</span>
          </div>
          <div style={{ fontSize: 18, fontWeight: 750, color: "#F5D489", marginTop: 4 }}>
            {totalScore} / 120 Eşdeğer Puan · {bandInfo.cefr}
          </div>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 13.5, maxWidth: 540, margin: "12px auto 0", lineHeight: 1.55 }}>
            {bandInfo.desc}
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 24 }}>
            <button onClick={() => setReviewMode(!reviewMode)} style={{ ...primaryBtn, background: "#F5D489", color: COLORS.ink }}>
              {reviewMode ? "Karneme Dön" : "🔍 Soruları & Çözümleri İncele"}
            </button>
            <button onClick={() => { setIsFinished(false); setIsTestActive(false); }} style={{ ...primaryBtn, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}>
              Sınav Listesine Dön
            </button>
          </div>
        </div>

        {/* 4-Section Breakdown Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
          {[
            { label: "Reading (Okuma)", score: reading.scaled, raw: reading.raw, icon: BookOpen, color: COLORS.blue, bg: COLORS.blueSoft },
            { label: "Listening (Dinleme)", score: listening.scaled, raw: listening.raw, icon: Headphones, color: COLORS.gold, bg: COLORS.goldSoft },
            { label: "Writing (Yazma)", score: writing.scaled, raw: writing.raw, icon: PenLine, color: COLORS.coral, bg: COLORS.coralSoft },
            { label: "Speaking (Konuşma)", score: speaking.scaled, raw: speaking.raw, icon: Mic, color: COLORS.purple, bg: COLORS.purpleSoft },
          ].map((sec) => {
            const Icon = sec.icon;
            return (
              <div key={sec.label} style={{ ...cardStyle, padding: "18px 20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: sec.bg, color: sec.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={16} />
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 750, color: COLORS.ink }}>{sec.label}</div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <div style={{ fontSize: 26, fontWeight: 900, color: sec.color }}>
                    {sec.score} <span style={{ fontSize: 13, color: COLORS.inkSoft, fontWeight: 600 }}>/ 30</span>
                  </div>
                  <div style={{ fontSize: 11.5, color: COLORS.inkSoft, fontWeight: 600 }}>Ham: {sec.raw}</div>
                </div>
                <div style={{ width: "100%", height: 6, background: COLORS.paper, borderRadius: 999, overflow: "hidden", marginTop: 8 }}>
                  <div style={{ width: `${(sec.score / 30) * 100}%`, height: "100%", background: sec.color, borderRadius: 999 }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Question Review Mode */}
        {reviewMode && activeExam && (
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: COLORS.ink, fontFamily: "'Source Serif 4', serif" }}>
              Soru Soru Detaylı Çözümler ve Açıklamalar ({activeExam.title})
            </div>

            {/* Reading Review */}
            <div style={cardStyle}>
              <div style={{ fontSize: 15, fontWeight: 800, color: COLORS.blue, marginBottom: 12 }}>
                1. Reading Bölümü Çözümleri
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {activeExam.reading.tasks.map((task, idx) => (
                  <div key={idx} style={{ background: COLORS.paper, padding: "14px 16px", borderRadius: 10, border: `1px solid ${COLORS.paperLine}` }}>
                    <div style={{ fontWeight: 800, fontSize: 13.5, color: COLORS.ink, marginBottom: 6 }}>{task.title}</div>
                    {task.explanation_tr && <div style={{ fontSize: 12.5, color: COLORS.inkSoft, lineHeight: 1.5 }}>{task.explanation_tr}</div>}
                    {task.questions && (
                      <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 8 }}>
                        {task.questions.map((q) => (
                          <div key={q.id} style={{ fontSize: 12.5, background: COLORS.card, padding: "10px 12px", borderRadius: 6, border: `1px solid ${COLORS.paperLine}` }}>
                            <div style={{ fontWeight: 700, marginBottom: 3 }}>{q.question}</div>
                            <div style={{ color: COLORS.moss, fontWeight: 700 }}>✓ Doğru Cevap: {q.options[q.correct]}</div>
                            <div style={{ color: COLORS.inkSoft, marginTop: 4, fontStyle: "italic" }}>{q.explanation_tr}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Listening Review */}
            <div style={cardStyle}>
              <div style={{ fontSize: 15, fontWeight: 800, color: COLORS.gold, marginBottom: 12 }}>
                2. Listening Bölümü Çözümleri
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {activeExam.listening.tasks.map((task, idx) => (
                  <div key={idx} style={{ background: COLORS.paper, padding: "14px 16px", borderRadius: 10, border: `1px solid ${COLORS.paperLine}` }}>
                    <div style={{ fontWeight: 800, fontSize: 13.5, color: COLORS.ink, marginBottom: 6 }}>{task.title}</div>
                    {task.explanation_tr && <div style={{ fontSize: 12.5, color: COLORS.moss, fontWeight: 700 }}>✓ {task.explanation_tr}</div>}
                    {task.questions && (
                      <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 8 }}>
                        {task.questions.map((q) => (
                          <div key={q.id} style={{ fontSize: 12.5, background: COLORS.card, padding: "10px 12px", borderRadius: 6, border: `1px solid ${COLORS.paperLine}` }}>
                            <div style={{ fontWeight: 700, marginBottom: 3 }}>{q.question}</div>
                            <div style={{ color: COLORS.moss, fontWeight: 700 }}>✓ Doğru Cevap: {q.options[q.correct]}</div>
                            <div style={{ color: COLORS.inkSoft, marginTop: 4, fontStyle: "italic" }}>{q.explanation_tr}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Writing Model Answers */}
            <div style={cardStyle}>
              <div style={{ fontSize: 15, fontWeight: 800, color: COLORS.coral, marginBottom: 12 }}>
                3. Writing Örnek Model Yanıtları
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {activeExam.writing.tasks.map((task, idx) => (
                  <div key={idx} style={{ background: COLORS.paper, padding: "14px 16px", borderRadius: 10, border: `1px solid ${COLORS.paperLine}` }}>
                    <div style={{ fontWeight: 800, fontSize: 13.5, color: COLORS.ink, marginBottom: 6 }}>{task.title}</div>
                    {task.sample_solution && (
                      <div style={{ fontSize: 13, color: COLORS.ink, background: COLORS.card, padding: "12px 14px", borderRadius: 8, border: `1px solid ${COLORS.paperLine}`, lineHeight: 1.6, whiteSpace: "pre-line", fontStyle: "italic" }}>
                        {task.sample_solution}
                      </div>
                    )}
                    {task.items && (
                      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
                        {task.items.map((it) => (
                          <div key={it.id} style={{ fontSize: 12.5, background: COLORS.card, padding: "8px 10px", borderRadius: 6 }}>
                            <div style={{ color: COLORS.moss, fontWeight: 700 }}>✓ {it.correct_sentence}</div>
                            <div style={{ color: COLORS.inkSoft }}>Çeldirici (Decoy): <span style={{ color: COLORS.coral }}>{it.decoy}</span></div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Active Test Arena
  if (!activeExam) return null;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Top Test Control Bar */}
      <div style={{ ...cardStyle, padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", background: COLORS.ink, color: COLORS.paper }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ fontSize: 11, fontWeight: 900, background: COLORS.gold, color: COLORS.ink, padding: "3px 8px", borderRadius: 4 }}>
            {activeExam.title}
          </span>
          <span style={{ fontSize: 13.5, fontWeight: 750 }}>
            {activeSection === "reading" && "Bölüm 1 / 4: Reading"}
            {activeSection === "listening" && "Bölüm 2 / 4: Listening"}
            {activeSection === "writing" && "Bölüm 3 / 4: Writing"}
            {activeSection === "speaking" && "Bölüm 4 / 4: Speaking"}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 15, fontWeight: 900, color: sectionTimeLeft < 60 ? "#FF8080" : "#F5D489" }}>
            <Clock size={16} /> {formatSeconds(sectionTimeLeft)}
          </div>
          <button
            onClick={handleNextSection}
            style={{ ...primaryBtn, background: COLORS.gold, color: COLORS.ink, padding: "8px 14px", fontSize: 12.5 }}
          >
            {activeSection === "speaking" ? "Sınavı Bitir" : "Sıradaki Bölüm →"}
          </button>
        </div>
      </div>

      {/* SECTION 1: READING */}
      {activeSection === "reading" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {activeExam.reading.tasks.map((task, tidx) => {
            if (task.type === "complete_words") {
              return (
                <div key={tidx} style={cardStyle}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: COLORS.blue, textTransform: "uppercase", marginBottom: 4 }}>{task.title}</div>
                  <div style={{ fontSize: 13, color: COLORS.inkSoft, marginBottom: 12 }}>{task.instruction}</div>
                  <div style={{ background: COLORS.paper, padding: "18px 20px", borderRadius: 10, border: `1px solid ${COLORS.paperLine}`, fontSize: 15, lineHeight: 1.7, color: COLORS.ink }}>
                    {task.passage}
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10, marginTop: 14 }}>
                    {task.blanks.map((b) => (
                      <div key={b.id} style={{ background: COLORS.card, border: `1px solid ${COLORS.paperLine}`, borderRadius: 8, padding: "10px 12px" }}>
                        <div style={{ fontSize: 11.5, color: COLORS.inkSoft, marginBottom: 4 }}>İpucu: {b.hint}</div>
                        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                          <span style={{ fontWeight: 800, color: COLORS.blue }}>{b.prefix}</span>
                          <input
                            type="text"
                            placeholder={b.suffix}
                            value={readingAnswers.blanks[b.id] || ""}
                            onChange={(e) => setReadingAnswers((prev) => ({
                              ...prev,
                              blanks: { ...prev.blanks, [b.id]: e.target.value },
                            }))}
                            style={{ flex: 1, border: `1px solid ${COLORS.paperLine}`, borderRadius: 4, padding: "4px 8px", fontSize: 13, outline: "none" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            if (task.type === "read_daily_life" || task.type === "read_academic_passage") {
              return (
                <div key={tidx} style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 18, alignItems: "start" }}>
                  {/* Passage Box */}
                  <div style={cardStyle}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: COLORS.blue, textTransform: "uppercase", marginBottom: 4 }}>{task.title}</div>
                    <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 17, fontWeight: 800, color: COLORS.ink, marginBottom: 10 }}>
                      {task.material_title || task.passage_title}
                    </div>
                    <div style={{ background: COLORS.paper, padding: "16px 18px", borderRadius: 10, border: `1px solid ${COLORS.paperLine}`, fontSize: 14, lineHeight: 1.65, color: COLORS.ink }}>
                      {task.material_text || task.passage_text}
                    </div>
                  </div>

                  {/* Questions Box */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {task.questions.map((q, qidx) => (
                      <div key={q.id} style={{ ...cardStyle, padding: "16px 18px" }}>
                        <div style={{ fontSize: 13.5, fontWeight: 750, color: COLORS.ink, marginBottom: 10 }}>
                          {qidx + 1}. {q.question}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                          {q.options.map((opt, oidx) => {
                            const isSelected = readingAnswers.choices[q.id] === oidx;
                            return (
                              <button
                                key={oidx}
                                onClick={() => setReadingAnswers((prev) => ({
                                  ...prev,
                                  choices: { ...prev.choices, [q.id]: oidx },
                                }))}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 8,
                                  padding: "9px 12px",
                                  borderRadius: 6,
                                  border: `1px solid ${isSelected ? COLORS.blue : COLORS.paperLine}`,
                                  background: isSelected ? COLORS.blueSoft : COLORS.card,
                                  color: isSelected ? COLORS.blue : COLORS.ink,
                                  fontSize: 12.5,
                                  fontWeight: isSelected ? 700 : 500,
                                  cursor: "pointer",
                                  textAlign: "left",
                                }}
                              >
                                <span style={{ width: 18, height: 18, borderRadius: "50%", border: `1px solid ${isSelected ? COLORS.blue : COLORS.inkSoft}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10.5, flexShrink: 0 }}>
                                  {String.fromCharCode(65 + oidx)}
                                </span>
                                <span>{opt}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      )}

      {/* SECTION 2: LISTENING */}
      {activeSection === "listening" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {activeExam.listening.tasks.map((task, tidx) => {
            if (task.type === "choose_response") {
              return (
                <div key={tidx} style={cardStyle}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: COLORS.gold, textTransform: "uppercase" }}>{task.title}</div>
                    <button onClick={() => speak(task.audio_text)} style={{ ...primaryBtn, background: COLORS.goldSoft, color: COLORS.gold, border: `1px solid ${COLORS.gold}40`, padding: "6px 12px", fontSize: 12 }}>
                      <Volume2 size={14} /> Sesli Dinle
                    </button>
                  </div>
                  <div style={{ fontSize: 12.5, color: COLORS.inkSoft, fontStyle: "italic", marginBottom: 8 }}>{task.context}</div>
                  <div style={{ background: COLORS.paper, padding: "14px 16px", borderRadius: 8, border: `1px solid ${COLORS.paperLine}`, fontSize: 14, color: COLORS.ink, marginBottom: 14 }}>
                    “{task.audio_text}”
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    {task.options.map((opt, oidx) => {
                      const isSelected = listeningAnswers.choices["choose_resp"] === oidx;
                      return (
                        <button
                          key={oidx}
                          onClick={() => setListeningAnswers((prev) => ({
                            ...prev,
                            choices: { ...prev.choices, choose_resp: oidx },
                          }))}
                          style={{
                            padding: "10px 12px",
                            borderRadius: 8,
                            border: `1px solid ${isSelected ? COLORS.gold : COLORS.paperLine}`,
                            background: isSelected ? COLORS.goldSoft : COLORS.card,
                            color: isSelected ? COLORS.gold : COLORS.ink,
                            fontSize: 12.5,
                            fontWeight: isSelected ? 700 : 500,
                            cursor: "pointer",
                            textAlign: "left",
                          }}
                        >
                          {String.fromCharCode(65 + oidx)}) {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <div key={tidx} style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 18, alignItems: "start" }}>
                {/* Audio Text Box */}
                <div style={cardStyle}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: COLORS.gold, textTransform: "uppercase" }}>{task.title}</div>
                    <button
                      onClick={() => {
                        const textToSpeak = task.audio_text || (task.dialogue ? task.dialogue.map((d) => `${d.speaker}: ${d.text}`).join(". ") : "");
                        speak(textToSpeak);
                      }}
                      style={{ ...primaryBtn, background: COLORS.goldSoft, color: COLORS.gold, border: `1px solid ${COLORS.gold}40`, padding: "6px 12px", fontSize: 12 }}
                    >
                      <Volume2 size={14} /> Konuşmayı Dinle
                    </button>
                  </div>
                  <div style={{ fontSize: 12.5, color: COLORS.inkSoft, fontStyle: "italic", marginBottom: 8 }}>{task.context}</div>

                  <div style={{ background: COLORS.paper, padding: "14px 16px", borderRadius: 10, border: `1px solid ${COLORS.paperLine}`, fontSize: 13.5, lineHeight: 1.6, maxHeight: 260, overflowY: "auto" }}>
                    {task.dialogue ? (
                      task.dialogue.map((d, didx) => (
                        <div key={didx} style={{ marginBottom: 8 }}>
                          <strong>{d.speaker}:</strong> {d.text}
                        </div>
                      ))
                    ) : (
                      <div>{task.audio_text}</div>
                    )}
                  </div>
                </div>

                {/* Questions */}
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {task.questions.map((q, qidx) => (
                    <div key={q.id} style={{ ...cardStyle, padding: "16px 18px" }}>
                      <div style={{ fontSize: 13.5, fontWeight: 750, color: COLORS.ink, marginBottom: 10 }}>
                        {qidx + 1}. {q.question}
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        {q.options.map((opt, oidx) => {
                          const isSelected = listeningAnswers.choices[q.id] === oidx;
                          return (
                            <button
                              key={oidx}
                              onClick={() => setListeningAnswers((prev) => ({
                                ...prev,
                                choices: { ...prev.choices, [q.id]: oidx },
                              }))}
                              style={{
                                padding: "8px 12px",
                                borderRadius: 6,
                                border: `1px solid ${isSelected ? COLORS.gold : COLORS.paperLine}`,
                                background: isSelected ? COLORS.goldSoft : COLORS.card,
                                color: isSelected ? COLORS.gold : COLORS.ink,
                                fontSize: 12.5,
                                fontWeight: isSelected ? 700 : 500,
                                cursor: "pointer",
                                textAlign: "left",
                              }}
                            >
                              {String.fromCharCode(65 + oidx)}) {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* SECTION 3: WRITING */}
      {activeSection === "writing" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {activeExam.writing.tasks.map((task, tidx) => {
            if (task.type === "build_sentence") {
              return (
                <div key={tidx} style={cardStyle}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: COLORS.moss, textTransform: "uppercase", marginBottom: 4 }}>{task.title}</div>
                  <div style={{ fontSize: 13, color: COLORS.inkSoft, marginBottom: 14 }}>{task.instruction}</div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {task.items.map((item, iidx) => {
                      const userOrdered = writingAnswers.build[item.id] || [];
                      const remaining = item.tokens.filter((tok) => !userOrdered.includes(tok));
                      return (
                        <div key={item.id} style={{ background: COLORS.paper, padding: "14px 16px", borderRadius: 10, border: `1px solid ${COLORS.paperLine}` }}>
                          <div style={{ fontSize: 12, fontWeight: 800, color: COLORS.inkSoft, marginBottom: 8 }}>Soru {iidx + 1}:</div>

                          {/* Built Line */}
                          <div style={{ background: COLORS.card, border: `1px dashed ${COLORS.moss}`, borderRadius: 8, padding: "10px 14px", minHeight: 44, display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
                            {userOrdered.map((tok, tid) => (
                              <button
                                key={tid}
                                onClick={() => setWritingAnswers((prev) => ({
                                  ...prev,
                                  build: {
                                    ...prev.build,
                                    [item.id]: userOrdered.filter((_, idx) => idx !== tid),
                                  },
                                }))}
                                style={{ background: COLORS.mossSoft, color: COLORS.moss, border: `1px solid ${COLORS.moss}40`, borderRadius: 6, padding: "4px 8px", fontSize: 12.5, fontWeight: 700, cursor: "pointer" }}
                              >
                                {tok} ✕
                              </button>
                            ))}
                            {userOrdered.length === 0 && (
                              <span style={{ color: COLORS.inkSoft, fontSize: 12.5, fontStyle: "italic" }}>Kelimelere tıklayarak sıraya ekleyin...</span>
                            )}
                          </div>

                          {/* Remaining Pool */}
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                            {remaining.map((tok, tid) => (
                              <button
                                key={tid}
                                onClick={() => setWritingAnswers((prev) => ({
                                  ...prev,
                                  build: {
                                    ...prev.build,
                                    [item.id]: [...userOrdered, tok],
                                  },
                                }))}
                                style={{ background: COLORS.card, color: COLORS.ink, border: `1px solid ${COLORS.paperLine}`, borderRadius: 6, padding: "4px 8px", fontSize: 12.5, fontWeight: 600, cursor: "pointer" }}
                              >
                                + {tok}
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }

            if (task.type === "email") {
              const wordCount = (writingAnswers.email || "").trim().split(/\s+/).filter(Boolean).length;
              return (
                <div key={tidx} style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 18, alignItems: "start" }}>
                  <div style={cardStyle}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: COLORS.coral, textTransform: "uppercase", marginBottom: 4 }}>{task.title}</div>
                    <div style={{ fontSize: 13.5, color: COLORS.ink, lineHeight: 1.6, marginBottom: 12 }}>{task.scenario}</div>
                    <div style={{ fontSize: 11.5, fontWeight: 800, color: COLORS.inkSoft, textTransform: "uppercase", marginBottom: 6 }}>E-posta Şunları İçermeli:</div>
                    <ul style={{ margin: 0, paddingLeft: 18, fontSize: 12.5, color: COLORS.inkSoft, lineHeight: 1.6 }}>
                      {task.bullets.map((b, bidx) => (
                        <li key={bidx}>{b}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={cardStyle}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <span style={{ fontSize: 12, fontWeight: 750, color: COLORS.ink }}>E-posta Yanıtınız:</span>
                      <span style={{ fontSize: 12, fontWeight: 800, color: wordCount >= 80 ? COLORS.moss : COLORS.coral }}>
                        {wordCount} kelime (hedef: 80–120)
                      </span>
                    </div>
                    <textarea
                      rows={10}
                      value={writingAnswers.email}
                      onChange={(e) => setWritingAnswers((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="Dear ...,\n\nI am writing to..."
                      style={{ width: "100%", border: `1px solid ${COLORS.paperLine}`, borderRadius: 8, padding: "12px", fontSize: 13.5, lineHeight: 1.6, resize: "vertical", outline: "none" }}
                    />
                  </div>
                </div>
              );
            }

            if (task.type === "academic_discussion") {
              const wordCount = (writingAnswers.discussion || "").trim().split(/\s+/).filter(Boolean).length;
              return (
                <div key={tidx} style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 18, alignItems: "start" }}>
                  <div style={cardStyle}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: COLORS.coral, textTransform: "uppercase", marginBottom: 4 }}>{task.title}</div>
                    <div style={{ background: COLORS.paper, padding: "10px 12px", borderRadius: 8, border: `1px solid ${COLORS.paperLine}`, fontSize: 13, fontStyle: "italic", marginBottom: 8 }}>
                      <strong>Profesör:</strong> {task.professor_question}
                    </div>
                    <div style={{ background: COLORS.card, padding: "8px 10px", borderRadius: 6, border: `1px solid ${COLORS.paperLine}`, fontSize: 12.5, marginBottom: 6 }}>
                      <strong>{task.student_a.name}:</strong> {task.student_a.text}
                    </div>
                    <div style={{ background: COLORS.card, padding: "8px 10px", borderRadius: 6, border: `1px solid ${COLORS.paperLine}`, fontSize: 12.5 }}>
                      <strong>{task.student_b.name}:</strong> {task.student_b.text}
                    </div>
                  </div>

                  <div style={cardStyle}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <span style={{ fontSize: 12, fontWeight: 750, color: COLORS.ink }}>Tartışma Katkınız:</span>
                      <span style={{ fontSize: 12, fontWeight: 800, color: wordCount >= 100 ? COLORS.moss : COLORS.coral }}>
                        {wordCount} kelime (hedef: 100+)
                      </span>
                    </div>
                    <textarea
                      rows={10}
                      value={writingAnswers.discussion}
                      onChange={(e) => setWritingAnswers((prev) => ({ ...prev, discussion: e.target.value }))}
                      placeholder="In my opinion, ... While Claire mentions that..."
                      style={{ width: "100%", border: `1px solid ${COLORS.paperLine}`, borderRadius: 8, padding: "12px", fontSize: 13.5, lineHeight: 1.6, resize: "vertical", outline: "none" }}
                    />
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      )}

      {/* SECTION 4: SPEAKING */}
      {activeSection === "speaking" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {activeExam.speaking.tasks.map((task, tidx) => (
            <div key={tidx} style={cardStyle}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 800, color: COLORS.purple, textTransform: "uppercase" }}>{task.title}</span>
                {task.sentence && (
                  <button onClick={() => speak(task.sentence)} style={{ ...primaryBtn, background: COLORS.purpleSoft, color: COLORS.purple, border: `1px solid ${COLORS.purple}40`, padding: "6px 12px", fontSize: 12 }}>
                    <Volume2 size={14} /> Cümleyi Dinle
                  </button>
                )}
              </div>

              <div style={{ background: COLORS.paper, padding: "14px 16px", borderRadius: 10, border: `1px solid ${COLORS.paperLine}`, fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 12 }}>
                {task.sentence || task.prompt}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                {!isRecording ? (
                  <button
                    onClick={() => startSpeakingRecord(task.type)}
                    style={{ ...primaryBtn, background: COLORS.purple, padding: "10px 16px", fontSize: 13 }}
                  >
                    <Mic size={15} /> Mikrofonla Konuş
                  </button>
                ) : (
                  <button
                    onClick={() => stopSpeakingRecord(task.type)}
                    style={{ ...primaryBtn, background: COLORS.coral, padding: "10px 16px", fontSize: 13 }}
                  >
                    <MicOff size={15} /> Konuşmayı Tamamla
                  </button>
                )}
              </div>

              {(liveTranscript || speakingAnswers.repeatTranscript || speakingAnswers.interviewTranscript) && (
                <div style={{ marginTop: 12, background: COLORS.paper, padding: "10px 12px", borderRadius: 8, fontSize: 13, color: COLORS.ink, fontStyle: "italic" }}>
                  Transkript: “{liveTranscript || (task.type === "listen_repeat" ? speakingAnswers.repeatTranscript : speakingAnswers.interviewTranscript)}”
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
