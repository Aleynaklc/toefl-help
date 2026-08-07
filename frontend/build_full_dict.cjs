const fs = require('fs');
const path = require('path');

const wordListsDir = path.resolve(__dirname, '../data/word_lists');
const files = fs.readdirSync(wordListsDir).filter(f => f.endsWith('.txt'));

const fullDict = {
  // Manuel A1 Aylar/Günler/Özel isimler
  "january": "Ocak",
  "february": "Şubat",
  "march": "Mart",
  "april": "Nisan",
  "may": "Mayıs",
  "june": "Haziran",
  "july": "Temmuz",
  "august": "Ağustos",
  "september": "Eylül",
  "october": "Ekim",
  "november": "Kasım",
  "december": "Aralık",
  "monday": "Pazartesi",
  "tuesday": "Salı",
  "wednesday": "Çarşamba",
  "thursday": "Perşembe",
  "friday": "Cuma",
  "saturday": "Cumartesi",
  "sunday": "Pazar",
  "t-shirt": "tişört",
  "tv": "televizyon",
  "cd": "müzik diski (CD)",
  "dvd": "video diski (DVD)",
  "ok": "tamam",
  "a, an": "bir (belirsiz tanımlık)",
  "i": "ben",
  "you": "sen, siz",
  "he": "o (erkek)",
  "she": "o (kadın)",
  "it": "o (cansız/hayvan)",
  "we": "biz",
  "they": "onlar"
};

const separators = [/\\s+[-—]\\s+/, /\\s*:\\s*/];

files.forEach(file => {
  const filePath = path.join(wordListsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  lines.forEach(line => {
    line = line.trim();
    if (!line || line.startsWith('#') || line.startsWith('//')) return;

    let parts = null;
    if (line.includes(' - ')) {
      parts = line.split(' - ');
    } else if (line.includes(' — ')) {
      parts = line.split(' — ');
    } else if (line.includes(': ')) {
      parts = line.split(': ');
    } else if (line.includes(',')) {
      const idx = line.indexOf(',');
      parts = [line.slice(0, idx), line.slice(idx + 1)];
    }

    if (parts && parts.length >= 2) {
      const word = parts[0].trim().toLowerCase();
      const def = parts.slice(1).join(' - ').trim();
      if (word && def && !fullDict[word]) {
        fullDict[word] = def;
      }
    }
  });
});

console.log(`Toplanan toplam Türkçe kelime tanımı sayısı: ${Object.keys(fullDict).length}`);

// App.jsx dosyasını güncelle
const appPath = path.resolve(__dirname, 'src/App.jsx');
let appCode = fs.readFileSync(appPath, 'utf8');

const dictJSON = JSON.stringify(fullDict, null, 2);

const dictInjectCode = `
const PLACEMENT_DICT = ${dictJSON};

function getPlacementOptions(targetWord, allSequence) {
  const wKey = targetWord.toLowerCase();
  let correctDef = PLACEMENT_DICT[wKey];
  
  if (!correctDef) {
    // Parantezli kelimeleri temizle örn. "bank (money)" -> "bank"
    const cleanKey = wKey.replace(/\\s*\\([^)]*\\)/g, '').trim();
    correctDef = PLACEMENT_DICT[cleanKey] || targetWord;
  }
  
  const targetObj = { id: targetWord, word: targetWord, definition: correctDef, isCorrect: true };
  
  const otherWords = allSequence.filter(w => w.word.toLowerCase() !== wKey);
  const shuffledOthers = [...otherWords].sort(() => Math.random() - 0.5);
  
  const wrongOptions = [];
  const usedDefs = new Set([correctDef]);

  for (const item of shuffledOthers) {
    const itemKey = item.word.toLowerCase();
    let wDef = PLACEMENT_DICT[itemKey];
    if (!wDef) {
      const cleanKey = itemKey.replace(/\\s*\\([^)]*\\)/g, '').trim();
      wDef = PLACEMENT_DICT[cleanKey] || item.word;
    }

    if (!usedDefs.has(wDef)) {
      usedDefs.add(wDef);
      wrongOptions.push({ id: item.word, word: item.word, definition: wDef, isCorrect: false });
      if (wrongOptions.length === 3) break;
    }
  }

  // Eğer 3 çeldirici dolmadıysa fallback rastgele tanımlar ekle
  const fallbackDefs = ["önemli, esaslı", "geliştirmek, ilerletmek", "kabul etmek", "karşılaşmak", "etkilemek", "oluşturmak", "sonuç, netice"];
  let fIdx = 0;
  while (wrongOptions.length < 3) {
    const fDef = fallbackDefs[fIdx % fallbackDefs.length];
    if (!usedDefs.has(fDef)) {
      usedDefs.add(fDef);
      wrongOptions.push({ id: 'fallback_' + wrongOptions.length, word: 'fallback', definition: fDef, isCorrect: false });
    }
    fIdx++;
  }

  const allOpts = [targetObj, ...wrongOptions].sort(() => Math.random() - 0.5);
  return allOpts;
}
`;

// Eski PLACEMENT_DICT ve getPlacementOptions fonksiyonunu yenisiyle değiştir
appCode = appCode.replace(/const PLACEMENT_DICT = \{[\s\S]*?function getPlacementOptions[\s\S]*?\n\}/m, dictInjectCode);

fs.writeFileSync(appPath, appCode);
console.log("App.jsx dev Türkçe sözlükle başarıyla güncellendi!");
