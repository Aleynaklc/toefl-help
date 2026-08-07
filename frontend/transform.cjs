const fs = require('fs');

const path = 'src/App.jsx';
let code = fs.readFileSync(path, 'utf8');

// Import ekle
if (!code.includes("import { api }")) {
  code = `import { api } from './api';\n` + code;
}

// 1. Kelime Yükleme (Initial Load)
code = code.replace(
  /const res = await window\.storage\.get\(STORAGE_KEY,\s*false\);\s*if\s*\(res\s*&&\s*res\.value\)\s*\{\s*const\s*parsedWords[^}]+\}\s*\}/m,
  `const data = await api.getWords();
        if (data) {
          setWords(data);
        }`
);

// 2. Persist fonksiyonu (Toptan kaydetme yerine refetch mantığı eklenebilir veya silme/ekleme API çağrıları eklenebilir)
// Şimdilik persist sadece local state güncellesin. Backend'e özel çağrılar yapmak gerek.
// Ama mevcut sistem persist kullanıyor. Eğer API endpoint'leri toptan kaydetmeye izin vermiyorsa senkronizasyon kopar.
// Biz API'de add_words, delete_word vs yazdık. Bu yüzden App.jsx'in React mantığını API'mizle değiştirmeliyiz.

code = code.replace(
  /const persist = async \(next\) => \{[\s\S]*?\};\s*const showToast/m,
  `const persist = async (next) => {
    setWords(next);
    // API backend'i ile tek tek senkronize olmak için detaylı UI refactoring gerekir.
    // Şimdilik UI state'i güncelleniyor.
  };

  const refetchWords = async () => {
    const data = await api.getWords();
    setWords(data);
  };
  
  const showToast`
);

// Kelime Silme (WordList.jsx içinde persist kullanılıyor)
code = code.replace(
  /onDelete=\{\(id\) => persist\(words\.filter\(\(w\) => w\.id !== id\)\)\}/g,
  `onDelete={async (id) => {
    await api.deleteWord(id);
    refetchWords();
  }}`
);

// Kelime Ekleme (AddWords.jsx içinde)
code = code.replace(
  /onAdd=\{\(newWords\) => \{\s*persist\(\[\.\.\.words, \.\.\.newWords\]\);\s*showToast\(([^)]+)\);\s*setView\("list"\);\s*\}\}/g,
  `onAdd={async (newWords, rawText, category) => {
    try {
      await api.addBulkWords(rawText, category);
      await refetchWords();
      showToast($1);
      setView("list");
    } catch(e) {
      showToast("Ekleme hatası", "error");
    }
  }}`
);

// Ancak AddWords bileşeni 'onAdd(newWords)' çağırıyor, onAdd(newWords, rawText, category) vermiyor.
// Bu yüzden AddWords bileşeninin içindeki onAdd çağrısını da değiştirmemiz lazım!

fs.writeFileSync(path, code);
console.log("App.jsx transformed.");
