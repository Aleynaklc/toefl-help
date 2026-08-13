// src/api.js
// FastAPI backend'ine giden tüm çağrıları burada topluyoruz.

export const api = {
  // --- Kelime İşlemleri ---
  getWords: async (category = "Tümü") => {
    const res = await fetch(`/api/words${category !== "Tümü" ? `?category=${encodeURIComponent(category)}` : ""}`);
    if (!res.ok) throw new Error("Kelimeler alınamadı");
    return res.json();
  },

  addWord: async (wordData) => {
    const res = await fetch("/api/words", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(wordData),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.detail || "Kelime eklenemedi");
    }
    return res.json();
  },

  addBulkWords: async (text, category = "Genel") => {
    const res = await fetch("/api/words/bulk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, category }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.detail || "Kelimeler eklenemedi");
    }
    return res.json();
  },

  deleteWord: async (wordId) => {
    const res = await fetch(`/api/words/${wordId}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Kelime silinemedi");
    return true;
  },

  // --- İstatistikler ---
  getStats: async (category = "Tümü") => {
    const res = await fetch(`/api/stats${category !== "Tümü" ? `?category=${encodeURIComponent(category)}` : ""}`);
    if (!res.ok) throw new Error("İstatistikler alınamadı");
    return res.json();
  },

  // --- Quiz (Leitner Box) ---
  getQuizRound: async (category = "Tümü", mode = "context") => {
    const res = await fetch("/api/quiz/round", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category, mode }),
    });
    if (!res.ok) throw new Error("Quiz yüklenemedi. Yeterli kelime olmayabilir.");
    return res.json();
  },

  submitQuizAnswer: async (wordId, correct) => {
    const res = await fetch("/api/quiz/answer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ word_id: wordId, correct }),
    });
    if (!res.ok) throw new Error("Cevap kaydedilemedi");
    return res.json();
  },

  // --- Writing (AI) ---
  getWritingPrompts: async (taskType = "email") => {
    const res = await fetch(`/api/writing/prompts?task_type=${taskType}`);
    if (!res.ok) throw new Error("Prompt alınamadı");
    return res.json();
  },

  submitWriting: async (taskType, promptId, responseText) => {
    const res = await fetch("/api/writing/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task_type: taskType, prompt_id: promptId, response: responseText }),
    });
    if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail || "Yazı değerlendirilemedi (API Key eksik olabilir)");
    }
    return res.json();
  },

  getWritingHistory: async () => {
    const res = await fetch("/api/writing/history");
    if (!res.ok) throw new Error("Geçmiş alınamadı");
    return res.json();
  },

  // --- Placement Test (CEFR) ---
  getPlacementLevels: async () => {
    const res = await fetch("/api/placement/levels");
    if (!res.ok) throw new Error("Seviyeler alınamadı");
    return res.json();
  },

  getPlacementWords: async (level) => {
    const res = await fetch(`/api/placement/words/${level}`);
    if (!res.ok) throw new Error("Seviye kelimeleri alınamadı");
    return res.json();
  },

  getPlacementProgress: async () => {
    const res = await fetch("/api/placement/progress");
    if (!res.ok) throw new Error("Seviye ilerlemesi alınamadı");
    return res.json();
  },

  submitPlacementAnswer: async (level, word, status) => {
    const res = await fetch("/api/placement/answer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ level, word, status }),
    });
    if (!res.ok) throw new Error("Seviye cevabı kaydedilemedi");
    return res.json();
  },

  importUnknownWords: async (level, category) => {
    const payload = category ? { category } : {};
    const res = await fetch(`/api/placement/import/${level}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: Object.keys(payload).length > 0 ? JSON.stringify(payload) : undefined,
    });
    if (!res.ok) throw new Error("Kelimeler içe aktarılamadı");
    return res.json();
  },

  resetPlacementProgress: async (level) => {
    const res = await fetch(`/api/placement/progress/${level}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Seviye sıfırlanamadı");
    return true;
  }
};
