import { useEffect, useMemo, useRef, useState } from "react";
import {
  AlertCircle,
  Award,
  Check,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Headphones,
  Info,
  Layers,
  MessageSquare,
  Mic,
  MicOff,
  Play,
  RotateCcw,
  Sparkles,
  Volume2,
  VolumeX,
  X,
  Zap,
} from "lucide-react";
import speakingBank from "../data/toefl_speaking_bank.json";

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
  padding: "20px 22px",
};

const primaryButton = {
  background: COLORS.ink,
  color: COLORS.paper,
  border: "none",
  borderRadius: 8,
  padding: "11px 18px",
  fontSize: 13.5,
  fontWeight: 750,
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  transition: "opacity 0.15s ease",
};

// Normalize text for comparison (remove punctuation, lowercase)
function normalizeWord(w) {
  return (w || "").toLowerCase().replace(/[^a-z0-9']/g, "").trim();
}

// Compare original sentence and user transcript on word level
function computeWordDiff(original, transcript) {
  const origTokens = (original || "").split(/\s+/).filter(Boolean);
  const transTokens = (transcript || "").split(/\s+/).filter(Boolean);
  const normalizedTrans = transTokens.map(normalizeWord);

  let matchedCount = 0;
  const wordResults = origTokens.map((origWord) => {
    const cleanOrig = normalizeWord(origWord);
    const foundIndex = normalizedTrans.indexOf(cleanOrig);
    if (foundIndex !== -1) {
      matchedCount++;
      // Consume matched word so duplicate words are handled correctly
      normalizedTrans[foundIndex] = null;
      return { word: origWord, matched: true };
    }
    return { word: origWord, matched: false };
  });

  const accuracy = origTokens.length > 0 ? Math.round((matchedCount / origTokens.length) * 100) : 0;
  return {
    wordResults,
    matchedCount,
    totalCount: origTokens.length,
    accuracy,
    transcriptWords: transTokens,
  };
}

export default function SpeakingTrainer() {
  const [tab, setTab] = useState("repeat"); // "repeat" | "interview"
  const [itemIndex, setItemIndex] = useState(0);

  // Recording & Recognition states
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [interimTranscript, setInterimTranscript] = useState("");
  const [audioUrl, setAudioUrl] = useState(null);
  const [hasReviewed, setHasReviewed] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  // Timers
  const [timeLeft, setTimeLeft] = useState(10);
  const [prepTimeLeft, setPrepTimeLeft] = useState(0);
  const [isPrepActive, setIsPrepActive] = useState(false);

  // History & stats
  const [history, setHistory] = useState([]);

  const recognitionRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerRef = useRef(null);
  const prepTimerRef = useRef(null);

  const repeatItems = speakingBank.listen_repeat || [];
  const interviewItems = speakingBank.interview || [];

  const currentRepeat = repeatItems[itemIndex % repeatItems.length];
  const currentInterview = interviewItems[itemIndex % interviewItems.length];

  // Speech Recognition support check
  const hasRecognition = typeof window !== "undefined" && ("webkitSpeechRecognition" in window || "SpeechRecognition" in window);

  // Text-to-Speech playback
  function speakSentence(text) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }

  // Load history from storage
  useEffect(() => {
    (async () => {
      try {
        if (window.storage) {
          const res = await window.storage.get("toefl-speaking-history", false);
          if (res && res.value) setHistory(JSON.parse(res.value));
        }
      } catch (e) {
        // silent
      }
    })();
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
      clearInterval(prepTimerRef.current);
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {}
      }
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
        try {
          mediaRecorderRef.current.stop();
        } catch (e) {}
      }
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Handle countdown during recording
  useEffect(() => {
    if (!isRecording) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          stopRecording();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [isRecording]);

  // Handle preparation timer for interview
  useEffect(() => {
    if (!isPrepActive) return;
    prepTimerRef.current = setInterval(() => {
      setPrepTimeLeft((prev) => {
        if (prev <= 1) {
          setIsPrepActive(false);
          startRecording();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(prepTimerRef.current);
  }, [isPrepActive]);

  // Start speech recognition & audio stream
  async function startRecording() {
    setErrorMsg(null);
    setTranscript("");
    setInterimTranscript("");
    setAudioUrl(null);
    setHasReviewed(false);
    audioChunksRef.current = [];

    const totalSeconds = tab === "repeat" ? currentRepeat.target_seconds || 10 : currentInterview.speak_seconds || 45;
    setTimeLeft(totalSeconds);

    // 1. Setup Audio MediaRecorder
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
    } catch (err) {
      console.warn("MediaRecorder permission or device error:", err);
      setErrorMsg("Mikrofon erişimi sağlanamadı. Lütfen tarayıcınızdan mikrofon izni verin.");
    }

    // 2. Setup Speech Recognition
    if (hasRecognition) {
      const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognitionClass();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "en-US";

      let finalSoFar = "";

      recognition.onresult = (event) => {
        let interim = "";
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const res = event.results[i];
          if (res.isFinal) {
            finalSoFar += " " + res[0].transcript;
          } else {
            interim += " " + res[0].transcript;
          }
        }
        setTranscript(finalSoFar.trim());
        setInterimTranscript(interim.trim());
      };

      recognition.onerror = (e) => {
        console.warn("Speech recognition error:", e);
      };

      try {
        recognition.start();
        recognitionRef.current = recognition;
      } catch (e) {
        console.warn("Recognition start error:", e);
      }
    }

    setIsRecording(true);
  }

  // Stop recording
  function stopRecording() {
    setIsRecording(false);
    clearInterval(timerRef.current);

    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {}
    }

    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      try {
        mediaRecorderRef.current.stop();
      } catch (e) {}
    }

    setHasReviewed(true);
  }

  // Start interview with prep time
  function startInterviewWithPrep() {
    setIsPrepActive(true);
    setPrepTimeLeft(currentInterview.prep_seconds || 15);
    setHasReviewed(false);
    setTranscript("");
    setAudioUrl(null);
  }

  // Next item navigation
  function handleNext() {
    setItemIndex((prev) => prev + 1);
    setIsRecording(false);
    setIsPrepActive(false);
    setTranscript("");
    setInterimTranscript("");
    setAudioUrl(null);
    setHasReviewed(false);
    setErrorMsg(null);
  }

  function handlePrev() {
    setItemIndex((prev) => Math.max(0, prev - 1));
    setIsRecording(false);
    setIsPrepActive(false);
    setTranscript("");
    setInterimTranscript("");
    setAudioUrl(null);
    setHasReviewed(false);
    setErrorMsg(null);
  }

  // Save review rating
  async function saveRating(quality) {
    const entry = {
      id: Date.now(),
      type: tab,
      itemId: tab === "repeat" ? currentRepeat.id : currentInterview.id,
      sentence: tab === "repeat" ? currentRepeat.sentence : currentInterview.prompt,
      transcript: transcript || interimTranscript || "(Ses algılanamadı)",
      quality,
      timestamp: Date.now(),
    };
    const nextHistory = [entry, ...history].slice(0, 40);
    setHistory(nextHistory);
    try {
      if (window.storage) {
        await window.storage.set("toefl-speaking-history", JSON.stringify(nextHistory), false);
      }
    } catch (e) {}
    handleNext();
  }

  // Diff calculation for repeat mode
  const diffResult = useMemo(() => {
    if (tab !== "repeat" || !currentRepeat) return null;
    const fullTrans = (transcript + " " + interimTranscript).trim();
    return computeWordDiff(currentRepeat.sentence, fullTrans);
  }, [tab, currentRepeat, transcript, interimTranscript]);

  // Keyword check for interview mode
  const interviewKeywordMatches = useMemo(() => {
    if (tab !== "interview" || !currentInterview) return [];
    const fullText = (transcript + " " + interimTranscript).toLowerCase();
    const keywords = currentInterview.key_vocabulary || [];
    return keywords.map((kw) => ({
      keyword: kw,
      matched: fullText.includes(kw.toLowerCase()),
    }));
  }, [tab, currentInterview, transcript, interimTranscript]);

  const fullTransText = (transcript + " " + interimTranscript).trim();
  const transWordCount = fullTransText ? fullTransText.split(/\s+/).filter(Boolean).length : 0;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Header Banner */}
      <div style={{ ...cardStyle, background: "linear-gradient(135deg, #1a1f2e 0%, #3a2d54 55%, #1a2a3a 100%)", color: "#fff", position: "relative", overflow: "hidden", padding: "24px 26px" }}>
        <div style={{ position: "absolute", top: -30, right: -30, width: 150, height: 150, borderRadius: "50%", background: "rgba(235,130,110,0.18)" }} />
        <div style={{ position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(235,130,110,0.18)", border: "1px solid rgba(235,130,110,0.4)", borderRadius: 999, padding: "5px 12px", marginBottom: 12 }}>
            <Mic size={14} color="#F8B4A6" />
            <span style={{ color: "#F8B4A6", fontSize: 11.5, fontWeight: 900, letterSpacing: "0.05em" }}>TOEFL iBT 2026 SPEAKING STUDIO</span>
          </div>
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 28, lineHeight: 1.2, fontWeight: 800, marginBottom: 8 }}>
            Konuş, Transkriptini Gör ve Kendin Kontrol Et
          </div>
          <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 13.5, lineHeight: 1.6, maxWidth: 640 }}>
            Tarayıcınızın mikrofonuyla konuşmanız canlı olarak metne dökülür. Süre bitince cümlenin aslı ve model yanıt gösterilir; kelime kelime doğruluğunuzu hiçbir AI bekleme süresi olmadan anında kontrol edebilirsiniz.
          </div>
        </div>
      </div>

      {/* Mode Selector Tabs */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <button
          onClick={() => {
            setTab("repeat");
            setItemIndex(0);
            setIsRecording(false);
            setHasReviewed(false);
            setTranscript("");
          }}
          style={{
            ...cardStyle,
            display: "flex",
            alignItems: "center",
            gap: 12,
            cursor: "pointer",
            textAlign: "left",
            border: tab === "repeat" ? `2px solid ${COLORS.coral}` : `1px solid ${COLORS.paperLine}`,
            background: tab === "repeat" ? COLORS.coralSoft : COLORS.card,
            padding: "16px 18px",
          }}
        >
          <div style={{ width: 40, height: 40, borderRadius: 10, background: tab === "repeat" ? COLORS.coral : COLORS.paper, color: tab === "repeat" ? "#fff" : COLORS.coral, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Headphones size={20} />
          </div>
          <div>
            <div style={{ fontSize: 14.5, fontWeight: 800, color: COLORS.ink }}>1. Listen & Repeat (Cümle Tekrarı)</div>
            <div style={{ fontSize: 12, color: COLORS.inkSoft, marginTop: 2 }}>Akademik cümleleri dinle, sesli tekrar et ve telaffuz isabetini gör. (25+ Soru)</div>
          </div>
        </button>

        <button
          onClick={() => {
            setTab("interview");
            setItemIndex(0);
            setIsRecording(false);
            setHasReviewed(false);
            setTranscript("");
          }}
          style={{
            ...cardStyle,
            display: "flex",
            alignItems: "center",
            gap: 12,
            cursor: "pointer",
            textAlign: "left",
            border: tab === "interview" ? `2px solid ${COLORS.purple}` : `1px solid ${COLORS.paperLine}`,
            background: tab === "interview" ? COLORS.purpleSoft : COLORS.card,
            padding: "16px 18px",
          }}
        >
          <div style={{ width: 40, height: 40, borderRadius: 10, background: tab === "interview" ? COLORS.purple : COLORS.paper, color: tab === "interview" ? "#fff" : COLORS.purple, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <MessageSquare size={20} />
          </div>
          <div>
            <div style={{ fontSize: 14.5, fontWeight: 800, color: COLORS.ink }}>2. Independent Interview (Görüş Bildirme)</div>
            <div style={{ fontSize: 12, color: COLORS.inkSoft, marginTop: 2 }}>15 sn hazırlık + 45 sn konuşma; model yanıt ve anahtar kelime eşleşmesi.</div>
          </div>
        </button>
      </div>

      {errorMsg && (
        <div style={{ background: COLORS.coralSoft, border: `1px solid ${COLORS.coral}40`, borderRadius: 10, padding: "12px 16px", display: "flex", alignItems: "center", gap: 10, color: COLORS.coral, fontSize: 13, fontWeight: 600 }}>
          <AlertCircle size={18} /> {errorMsg}
        </div>
      )}

      {/* Main Interactive Studio Arena */}
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 24, alignItems: "start" }}>
        {/* Left Column: Active Question & Live Recording / Review Card */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {tab === "repeat" ? (
            /* LISTEN & REPEAT CARD */
            <div style={cardStyle}>
              {/* Question Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, paddingBottom: 12, borderBottom: `1px solid ${COLORS.paperLine}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, background: COLORS.coralSoft, color: COLORS.coral, padding: "3px 9px", borderRadius: 20 }}>
                    {currentRepeat.level}
                  </span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: COLORS.inkSoft }}>
                    {currentRepeat.category} · Soru {itemIndex + 1} / {repeatItems.length}
                  </span>
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  <button onClick={handlePrev} disabled={itemIndex === 0} style={{ background: COLORS.paper, border: `1px solid ${COLORS.paperLine}`, borderRadius: 6, padding: "5px 8px", cursor: "pointer", opacity: itemIndex === 0 ? 0.4 : 1 }}>
                    <ChevronLeft size={15} />
                  </button>
                  <button onClick={handleNext} style={{ background: COLORS.paper, border: `1px solid ${COLORS.paperLine}`, borderRadius: 6, padding: "5px 8px", cursor: "pointer" }}>
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>

              {/* Target Sentence Display / Listen Prompt */}
              <div style={{ background: COLORS.paper, border: `1px solid ${COLORS.paperLine}`, borderRadius: 12, padding: "20px 22px", marginBottom: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: COLORS.inkSoft, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
                      Tekrar Edilecek Cümle
                    </div>
                    <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 20, fontWeight: 750, color: COLORS.ink, lineHeight: 1.5 }}>
                      {currentRepeat.sentence}
                    </div>
                    {currentRepeat.translation_tr && (
                      <div style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 8, fontStyle: "italic" }}>
                        {currentRepeat.translation_tr}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => speakSentence(currentRepeat.sentence)}
                    title="Amerikan Aksanıyla Dinle"
                    style={{
                      background: COLORS.goldSoft,
                      border: `1px solid ${COLORS.gold}40`,
                      borderRadius: 10,
                      padding: "10px 14px",
                      color: COLORS.gold,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 12.5,
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    <Volume2 size={16} /> Dinle
                  </button>
                </div>
              </div>

              {/* Recording Controls & Timer */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        background: isRecording ? COLORS.coral : COLORS.inkSoft,
                        boxShadow: isRecording ? `0 0 0 4px ${COLORS.coral}30` : "none",
                        animation: isRecording ? "pulse 1s infinite" : "none",
                      }}
                    />
                    <span style={{ fontSize: 13, fontWeight: 800, color: isRecording ? COLORS.coral : COLORS.ink }}>
                      {isRecording ? "Mikrofon Açık — Şimdi Cümleyi Söyleyin..." : hasReviewed ? "Kayıt Tamamlandı" : "Kayda Hazır"}
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 800, color: isRecording && timeLeft <= 3 ? COLORS.coral : COLORS.ink }}>
                    <Clock size={16} /> {timeLeft}s
                  </div>
                </div>

                {/* Big Mic Button */}
                {!isRecording ? (
                  <button
                    onClick={startRecording}
                    style={{
                      ...primaryButton,
                      background: COLORS.coral,
                      padding: "14px 24px",
                      fontSize: 14.5,
                      width: "100%",
                      borderRadius: 10,
                    }}
                  >
                    <Mic size={18} /> {hasReviewed ? "Tekrar Ses Kaydet ve Sına" : "Mikrofonu Aç ve Konuşmaya Başla"}
                  </button>
                ) : (
                  <button
                    onClick={stopRecording}
                    style={{
                      ...primaryButton,
                      background: COLORS.ink,
                      padding: "14px 24px",
                      fontSize: 14.5,
                      width: "100%",
                      borderRadius: 10,
                    }}
                  >
                    <MicOff size={18} /> Konuşmayı Bitir ve Karşılaştır ({timeLeft}s)
                  </button>
                )}
              </div>

              {/* Real-time Live Transcript Stream */}
              {(isRecording || transcript || interimTranscript) && (
                <div style={{ marginTop: 18, background: COLORS.paper, border: `1px solid ${COLORS.paperLine}`, borderRadius: 10, padding: "14px 16px" }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: COLORS.inkSoft, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 6 }}>
                    Canlı Ses Transkripti (Speech-to-Text):
                  </div>
                  <div style={{ fontSize: 14.5, color: COLORS.ink, lineHeight: 1.5, minHeight: 24 }}>
                    <span>{transcript}</span>
                    <span style={{ color: COLORS.coral, fontStyle: "italic", marginLeft: 4 }}>{interimTranscript}</span>
                    {!transcript && !interimTranscript && isRecording && (
                      <span style={{ color: COLORS.inkSoft, fontStyle: "italic" }}>Dinleniyor... Lütfen mikrofona konuşun.</span>
                    )}
                  </div>
                </div>
              )}

              {/* Review & Word Diff Breakdown (Zero-AI Self Check) */}
              {hasReviewed && diffResult && (
                <div style={{ marginTop: 20, paddingTop: 18, borderTop: `1px solid ${COLORS.paperLine}`, display: "flex", flexDirection: "column", gap: 16 }}>
                  {/* Accuracy Badge */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: diffResult.accuracy >= 80 ? COLORS.mossSoft : diffResult.accuracy >= 50 ? COLORS.goldSoft : COLORS.coralSoft, borderRadius: 10, padding: "12px 16px" }}>
                    <div>
                      <div style={{ fontSize: 11.5, fontWeight: 800, color: diffResult.accuracy >= 80 ? COLORS.moss : diffResult.accuracy >= 50 ? COLORS.gold : COLORS.coral, textTransform: "uppercase" }}>
                        Telaffuz & Kelime İsabeti
                      </div>
                      <div style={{ fontSize: 22, fontWeight: 900, color: diffResult.accuracy >= 80 ? COLORS.moss : diffResult.accuracy >= 50 ? COLORS.gold : COLORS.coral }}>
                        %{diffResult.accuracy} Doğruluk
                      </div>
                    </div>
                    <div style={{ fontSize: 12.5, fontWeight: 750, color: COLORS.ink }}>
                      {diffResult.matchedCount} / {diffResult.totalCount} kelime eşleşti
                    </div>
                  </div>

                  {/* Visual Word Matcher */}
                  <div>
                    <div style={{ fontSize: 11.5, fontWeight: 800, color: COLORS.inkSoft, textTransform: "uppercase", marginBottom: 8 }}>
                      Kelime Kelime Eşleşme Kontrolü:
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, background: COLORS.card, border: `1px solid ${COLORS.paperLine}`, borderRadius: 10, padding: "14px" }}>
                      {diffResult.wordResults.map((item, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontSize: 14.5,
                            fontWeight: 700,
                            padding: "4px 8px",
                            borderRadius: 6,
                            background: item.matched ? COLORS.mossSoft : COLORS.coralSoft,
                            color: item.matched ? COLORS.moss : COLORS.coral,
                            border: `1px solid ${item.matched ? COLORS.moss : COLORS.coral}40`,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                          }}
                        >
                          {item.matched ? <Check size={13} /> : <X size={13} />}
                          {item.word}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Audio Playback Player */}
                  {audioUrl && (
                    <div style={{ background: COLORS.paper, border: `1px solid ${COLORS.paperLine}`, borderRadius: 10, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
                      <div style={{ fontSize: 12.5, fontWeight: 800, color: COLORS.ink, display: "flex", alignItems: "center", gap: 6 }}>
                        <Play size={15} color={COLORS.coral} /> Kendi Ses Kaydını Dinle:
                      </div>
                      <audio controls src={audioUrl} style={{ height: 32, maxWidth: 280 }} />
                    </div>
                  )}

                  {/* Self Rating Buttons */}
                  <div>
                    <div style={{ fontSize: 11.5, fontWeight: 800, color: COLORS.inkSoft, textTransform: "uppercase", marginBottom: 8 }}>
                      Bu Tur İçin Kendine Not Ver:
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                      <button
                        onClick={() => saveRating("perfect")}
                        style={{ ...primaryButton, background: COLORS.moss, padding: "10px", fontSize: 12.5 }}
                      >
                        ✓ Tam Doğru
                      </button>
                      <button
                        onClick={() => saveRating("good")}
                        style={{ ...primaryButton, background: COLORS.gold, padding: "10px", fontSize: 12.5 }}
                      >
                        ⚡ Küçük Hata
                      </button>
                      <button
                        onClick={startRecording}
                        style={{ ...primaryButton, background: COLORS.coral, padding: "10px", fontSize: 12.5 }}
                      >
                        <RotateCcw size={14} /> Tekrar Dene
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* INDEPENDENT INTERVIEW CARD */
            <div style={cardStyle}>
              {/* Question Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, paddingBottom: 12, borderBottom: `1px solid ${COLORS.paperLine}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, background: COLORS.purpleSoft, color: COLORS.purple, padding: "3px 9px", borderRadius: 20 }}>
                    Independent Speaking
                  </span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: COLORS.inkSoft }}>
                    {currentInterview.category} · Soru {itemIndex + 1} / {interviewItems.length}
                  </span>
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  <button onClick={handlePrev} disabled={itemIndex === 0} style={{ background: COLORS.paper, border: `1px solid ${COLORS.paperLine}`, borderRadius: 6, padding: "5px 8px", cursor: "pointer", opacity: itemIndex === 0 ? 0.4 : 1 }}>
                    <ChevronLeft size={15} />
                  </button>
                  <button onClick={handleNext} style={{ background: COLORS.paper, border: `1px solid ${COLORS.paperLine}`, borderRadius: 6, padding: "5px 8px", cursor: "pointer" }}>
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>

              {/* Prompt Box */}
              <div style={{ background: COLORS.paper, border: `1px solid ${COLORS.paperLine}`, borderRadius: 12, padding: "20px 22px", marginBottom: 18 }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: COLORS.inkSoft, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
                  Speaking Soru Promptu (45 Saniye Konuşma)
                </div>
                <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 19, fontWeight: 750, color: COLORS.ink, lineHeight: 1.5 }}>
                  {currentInterview.prompt}
                </div>
                {currentInterview.prompt_tr && (
                  <div style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 8, fontStyle: "italic" }}>
                    {currentInterview.prompt_tr}
                  </div>
                )}
              </div>

              {/* Prep & Record Controls */}
              {isPrepActive ? (
                <div style={{ background: COLORS.goldSoft, border: `1px solid ${COLORS.gold}50`, borderRadius: 10, padding: "18px 20px", textAlign: "center" }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: COLORS.gold, textTransform: "uppercase" }}>
                    Hazırlık Süresi (Preparation Time)
                  </div>
                  <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 36, fontWeight: 900, color: COLORS.ink, margin: "6px 0" }}>
                    {prepTimeLeft}s
                  </div>
                  <div style={{ fontSize: 12.5, color: COLORS.inkSoft, marginBottom: 12 }}>
                    Fikrinizi organize edin, ana argümanınızı ve 1 somut örneğinizi belirleyin.
                  </div>
                  <button
                    onClick={() => {
                      setIsPrepActive(false);
                      startRecording();
                    }}
                    style={{ ...primaryButton, background: COLORS.ink, padding: "8px 16px", fontSize: 12.5 }}
                  >
                    Hazırlığı Atla ve Hemen Konuş →
                  </button>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div
                        style={{
                          width: 12,
                          height: 12,
                          borderRadius: "50%",
                          background: isRecording ? COLORS.purple : COLORS.inkSoft,
                          boxShadow: isRecording ? `0 0 0 4px ${COLORS.purple}30` : "none",
                          animation: isRecording ? "pulse 1s infinite" : "none",
                        }}
                      />
                      <span style={{ fontSize: 13, fontWeight: 800, color: isRecording ? COLORS.purple : COLORS.ink }}>
                        {isRecording ? "Mikrofon Açık — 45 Saniyelik Yanıtınızı Verin..." : hasReviewed ? "Yanıt Kaydedildi" : "Sınav Başlatmaya Hazır"}
                      </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 800, color: isRecording && timeLeft <= 5 ? COLORS.coral : COLORS.ink }}>
                      <Clock size={16} /> {timeLeft}s
                    </div>
                  </div>

                  {!isRecording ? (
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                      <button
                        onClick={startInterviewWithPrep}
                        style={{ ...primaryButton, background: COLORS.purple, padding: "14px", fontSize: 14 }}
                      >
                        <Zap size={16} /> 15s Hazırlık + Konuş
                      </button>
                      <button
                        onClick={startRecording}
                        style={{ ...primaryButton, background: COLORS.ink, padding: "14px", fontSize: 14 }}
                      >
                        <Mic size={16} /> Doğrudan Başla
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={stopRecording}
                      style={{ ...primaryButton, background: COLORS.ink, padding: "14px", fontSize: 14, width: "100%" }}
                    >
                      <MicOff size={18} /> Konuşmayı Tamamla ve Modeli Gör ({timeLeft}s)
                    </button>
                  )}
                </div>
              )}

              {/* Live Transcript */}
              {(isRecording || transcript || interimTranscript) && (
                <div style={{ marginTop: 18, background: COLORS.paper, border: `1px solid ${COLORS.paperLine}`, borderRadius: 10, padding: "14px 16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: COLORS.inkSoft, textTransform: "uppercase" }}>
                      Canlı Konuşma Transkripti (Speech-to-Text)
                    </span>
                    <span style={{ fontSize: 11.5, fontWeight: 800, color: transWordCount >= 60 ? COLORS.moss : COLORS.gold }}>
                      {transWordCount} kelime {transWordCount >= 60 ? "(İyi hacim)" : "(Hedef: 60-90)"}
                    </span>
                  </div>
                  <div style={{ fontSize: 14.5, color: COLORS.ink, lineHeight: 1.6, minHeight: 36 }}>
                    <span>{transcript}</span>
                    <span style={{ color: COLORS.purple, fontStyle: "italic", marginLeft: 4 }}>{interimTranscript}</span>
                    {!transcript && !interimTranscript && isRecording && (
                      <span style={{ color: COLORS.inkSoft, fontStyle: "italic" }}>Dinleniyor... Lütfen konuşmaya başlayın.</span>
                    )}
                  </div>
                </div>
              )}

              {/* Review & Model Response Comparison */}
              {hasReviewed && (
                <div style={{ marginTop: 20, paddingTop: 18, borderTop: `1px solid ${COLORS.paperLine}`, display: "flex", flexDirection: "column", gap: 16 }}>
                  {/* Model Answer Card */}
                  <div style={{ background: COLORS.card, border: `2px solid ${COLORS.purple}40`, borderRadius: 12, padding: "18px 20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <div style={{ fontSize: 12, fontWeight: 900, color: COLORS.purple, textTransform: "uppercase", display: "flex", alignItems: "center", gap: 6 }}>
                        <Award size={15} /> Örnek Yüksek Puanlı Model Yanıt (Band 5.0+)
                      </div>
                      <button
                        onClick={() => speakSentence(currentInterview.sample_response)}
                        style={{ background: COLORS.purpleSoft, color: COLORS.purple, border: "none", borderRadius: 6, padding: "4px 8px", fontSize: 11.5, fontWeight: 800, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}
                      >
                        <Volume2 size={13} /> Modeli Dinle
                      </button>
                    </div>
                    <div style={{ fontSize: 14, color: COLORS.ink, lineHeight: 1.65, fontStyle: "italic" }}>
                      “{currentInterview.sample_response}”
                    </div>
                    {currentInterview.sample_response_tr && (
                      <div style={{ fontSize: 12.5, color: COLORS.inkSoft, marginTop: 8 }}>
                        {currentInterview.sample_response_tr}
                      </div>
                    )}
                  </div>

                  {/* Target Keywords Matched in Speech */}
                  {interviewKeywordMatches.length > 0 && (
                    <div style={{ background: COLORS.paper, border: `1px solid ${COLORS.paperLine}`, borderRadius: 10, padding: "12px 16px" }}>
                      <div style={{ fontSize: 11.5, fontWeight: 800, color: COLORS.inkSoft, textTransform: "uppercase", marginBottom: 8 }}>
                        Kullandığınız Akademik Anahtar Kelimeler:
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {interviewKeywordMatches.map((kw, idx) => (
                          <span
                            key={idx}
                            style={{
                              fontSize: 12,
                              fontWeight: 700,
                              padding: "3px 8px",
                              borderRadius: 6,
                              background: kw.matched ? COLORS.mossSoft : COLORS.card,
                              color: kw.matched ? COLORS.moss : COLORS.inkSoft,
                              border: `1px solid ${kw.matched ? COLORS.moss : COLORS.paperLine}`,
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 4,
                            }}
                          >
                            {kw.matched ? <Check size={12} /> : null}
                            {kw.keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Audio Playback */}
                  {audioUrl && (
                    <div style={{ background: COLORS.paper, border: `1px solid ${COLORS.paperLine}`, borderRadius: 10, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
                      <div style={{ fontSize: 12.5, fontWeight: 800, color: COLORS.ink, display: "flex", alignItems: "center", gap: 6 }}>
                        <Play size={15} color={COLORS.purple} /> Kendi Ses Kaydını Dinle:
                      </div>
                      <audio controls src={audioUrl} style={{ height: 32, maxWidth: 280 }} />
                    </div>
                  )}

                  {/* Self Rating */}
                  <div>
                    <div style={{ fontSize: 11.5, fontWeight: 800, color: COLORS.inkSoft, textTransform: "uppercase", marginBottom: 8 }}>
                      Kendi Akıcılığını ve Model Yanıtla Benzerliğini Değerlendir:
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                      <button onClick={() => saveRating("perfect")} style={{ ...primaryButton, background: COLORS.moss, padding: "10px", fontSize: 12.5 }}>
                        ✓ Akıcı & Eksiksiz
                      </button>
                      <button onClick={() => saveRating("good")} style={{ ...primaryButton, background: COLORS.gold, padding: "10px", fontSize: 12.5 }}>
                        ⚡ Orta / Geliştirilmeli
                      </button>
                      <button onClick={startInterviewWithPrep} style={{ ...primaryButton, background: COLORS.purple, padding: "10px", fontSize: 12.5 }}>
                        <RotateCcw size={14} /> Tekrar Konuş
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Column: Tips, Format Checklist & Recent History */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {/* Sınav Taktik Kartı */}
          <div style={{ ...cardStyle, background: "#F5F3EF" }}>
            <div style={{ fontSize: 13, fontWeight: 900, color: COLORS.ink, marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>
              <Zap size={15} color={COLORS.coral} /> 2026 Speaking Puanlama Kriterleri
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 12.5, color: COLORS.inkSoft, lineHeight: 1.5 }}>
              <div>
                <strong>1. Delivery (Telaffuz & Ritim):</strong> Net telaffuz, doğal duraklamalar ve ritim. Robotik olmadan akıcı konuşun.
              </div>
              <div>
                <strong>2. Language Use (Gramer & Kelime):</strong> Doğru özne-yüklem uyumu, bağlaçlar (*furthermore, consequently, for instance*).
              </div>
              <div>
                <strong>3. Topic Development:</strong> Net pozisyon + 1 somut gerekçe + 1 kişisel veya akademik detaylı örnek.
              </div>
            </div>
          </div>

          {/* Soru Listesi Hızlı Seçici */}
          <div style={cardStyle}>
            <div style={{ fontSize: 12, fontWeight: 800, color: COLORS.inkSoft, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>
              {tab === "repeat" ? "Listen & Repeat Cümle Havuzu" : "Independent Konu Havuzu"}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5, maxHeight: 280, overflowY: "auto", paddingRight: 4 }}>
              {(tab === "repeat" ? repeatItems : interviewItems).map((item, idx) => {
                const isSelected = itemIndex === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setItemIndex(idx);
                      setIsRecording(false);
                      setHasReviewed(false);
                      setTranscript("");
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 10px",
                      borderRadius: 6,
                      border: `1px solid ${isSelected ? COLORS.ink : COLORS.paperLine}`,
                      background: isSelected ? COLORS.ink : COLORS.card,
                      color: isSelected ? COLORS.paper : COLORS.ink,
                      fontSize: 12,
                      fontWeight: isSelected ? 750 : 550,
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {idx + 1}. {tab === "repeat" ? item.sentence : item.prompt}
                    </span>
                    <span style={{ fontSize: 10.5, opacity: 0.7, flexShrink: 0, marginLeft: 6 }}>
                      {tab === "repeat" ? item.level : `${item.speak_seconds}s`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Çalışma Geçmişi */}
          {history.length > 0 && (
            <div style={cardStyle}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <span style={{ fontSize: 12, fontWeight: 800, color: COLORS.inkSoft, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Son Speaking Pratikleri
                </span>
                <span style={{ fontSize: 11, color: COLORS.moss, fontWeight: 700 }}>{history.length} kayıt</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {history.slice(0, 5).map((h) => (
                  <div
                    key={h.id}
                    style={{
                      padding: "8px 10px",
                      borderRadius: 6,
                      border: `1px solid ${COLORS.paperLine}`,
                      background: COLORS.paper,
                      fontSize: 12,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1, marginRight: 8 }}>
                      <div style={{ fontWeight: 700, color: COLORS.ink }}>{h.type === "repeat" ? "Listen & Repeat" : "Interview"}</div>
                      <div style={{ color: COLORS.inkSoft, fontSize: 11, fontStyle: "italic", overflow: "hidden", textOverflow: "ellipsis" }}>
                        “{h.transcript}”
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: 10.5,
                        fontWeight: 800,
                        padding: "2px 6px",
                        borderRadius: 8,
                        background: h.quality === "perfect" ? COLORS.mossSoft : h.quality === "good" ? COLORS.goldSoft : COLORS.coralSoft,
                        color: h.quality === "perfect" ? COLORS.moss : h.quality === "good" ? COLORS.gold : COLORS.coral,
                      }}
                    >
                      {h.quality === "perfect" ? "Tam Doğru" : h.quality === "good" ? "Küçük Hata" : "Tekrar"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
