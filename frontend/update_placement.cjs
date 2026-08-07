const fs = require('fs');

const appPath = 'src/App.jsx';
let code = fs.readFileSync(appPath, 'utf8');

const dictionaryCode = `
const PLACEMENT_DICT = {
  "abandon": "terk etmek, vazgeçmek",
  "ability": "yetenek, kabiliyet",
  "able": "yapabilen, muktedir",
  "about": "hakkında, yaklaşık",
  "above": "yukarısında, üzerinde",
  "abroad": "yurt dışında",
  "absence": "yokluk, bulunmama",
  "absolute": "mutlak, kesin",
  "absorb": "emmek, içine çekmek",
  "academic": "akademik",
  "accept": "kabul etmek",
  "access": "erişim, ulaşmak",
  "accident": "kaza",
  "accompany": "eşlik etmek",
  "accomplish": "başarmak, tamamlamak",
  "according to": "göre",
  "account": "hesap, açıklama",
  "accurate": "doğru, kesin",
  "accuse": "suçlamak",
  "achieve": "başarmak, elde etmek",
  "acid": "asit",
  "acknowledge": "kabul etmek, itiraf etmek",
  "acquire": "edinmek, kazanmak",
  "across": "karşısında, bir uçtan bir uca",
  "act": "davranmak, eylem",
  "action": "eylem, hareket",
  "active": "aktif, etkin",
  "activity": "faaliyet, etkinlik",
  "actor": "erkek oyuncu",
  "actress": "kadın oyuncu",
  "actual": "gerçek, fiili",
  "adapt": "uyum sağlamak",
  "add": "eklemek",
  "addition": "ek, ilave",
  "address": "adres, hitap etmek",
  "adequate": "yeterli, kafi",
  "adjust": "ayarlamak, uydurmak",
  "administration": "yönetim, idare",
  "admire": "hayran olmak",
  "admit": "kabul etmek, itiraf etmek",
  "adopt": "evlat edinmek, benimsemek",
  "adult": "yetişkin",
  "advance": "ilerlemek, gelişmek",
  "advantage": "avantaj, üstünlük",
  "adventure": "macera",
  "advertise": "reklam yapmak",
  "advice": "tavsiye, öğüt",
  "advise": "tavsiye vermek",
  "affair": "mesele, iş",
  "affect": "etkilemek",
  "afford": "maddi gücü yetmek",
  "afraid": "korkmuş",
  "after": "sonra",
  "afternoon": "öğleden sonra",
  "again": "tekrar, yine",
  "against": "karşı",
  "age": "yaş, çağ",
  "agency": "ajans, acente",
  "agenda": "gündem",
  "agent": "temsilci, ajan",
  "aggressive": "saldırgan, agresif",
  "ago": "önce",
  "agree": "anlaşmak, katılmak",
  "agreement": "anlaşma, sözleşme",
  "agriculture": "tarım, ziraat",
  "ahead": "önde, ileriye",
  "aid": "yardım etmek",
  "aim": "hedeflemek, amaç",
  "air": "hava",
  "aircraft": "uçak, hava taşıtı",
  "airline": "havayolu şirketi",
  "airport": "havalimanı",
  "alarm": "alarm, uyarı",
  "album": "albüm",
  "alcohol": "alkol",
  "alert": "uyanık, tetikte",
  "alien": "uzaylı, yabancı",
  "alike": "benzer, aynı şekilde",
  "alive": "canlı, hayatta",
  "all": "hepsi, tüm",
  "allow": "izin vermek",
  "almost": "neredeyse, hemen hemen",
  "alone": "yalnız, tek başına",
  "along": "boyunca",
  "already": "zaten, çoktan",
  "also": "ayrıca, de/da",
  "alter": "değiştirmek",
  "alternative": "alternatif, seçenek",
  "although": "rağmen, -e karşın",
  "always": "her zaman, daima",
  "amazing": "şaşırtıcı, harika",
  "ambition": "hırs, tutku",
  "ambulance": "ambulans",
  "among": "arasında",
  "amount": "miktar, tutar",
  "analyze": "analiz etmek",
  "ancient": "antik, eski",
  "and": "ve",
  "anger": "öfke, kızgınlık",
  "angle": "açı, bakış açısı",
  "angry": "kızgın, öfkeli",
  "animal": "hayvan",
  "anniversary": "yıldönümü",
  "announce": "duyurmak, ilan etmek",
  "annoy": "rahatsız etmek, kızdırmak",
  "annual": "yıllık",
  "another": "diğer, başka bir",
  "answer": "cevap vermek",
  "anxiety": "kaygı, endişe",
  "any": "hiç, herhangi bir",
  "anybody": "hiç kimse",
  "anymore": "artık",
  "anyone": "herhangi biri",
  "anything": "herhangi bir şey",
  "anyway": "her neyse",
  "anywhere": "herhangi bir yer",
  "apart": "ayrı, uzakta",
  "apartment": "daire, apartman",
  "apologize": "özür dilemek",
  "app": "uygulama",
  "apparent": "belirgin, aşikar",
  "appeal": "cezbetmek, başvurmak",
  "appear": "görünmek, ortaya çıkmak",
  "appearance": "görünüş, dış görünüş",
  "apple": "elma",
  "applicant": "başvuran aday",
  "application": "uygulama, başvuru",
  "apply": "başvurmak, uygulamak",
  "appoint": "atamak, görevlendirmek",
  "appointment": "randevu",
  "appreciate": "taktir etmek, değerini bilmek",
  "approach": "yaklaşmak, yaklaşım",
  "appropriate": "uygun, yerinde",
  "approval": "onay, rıza",
  "approve": "onaylamak",
  "approximate": "yaklaşık",
  "April": "Nisan",
  "architect": "mimar",
  "architecture": "mimari",
  "area": "alan, bölge",
  "argue": "tartışmak, savunmak",
  "argument": "tartışma, argüman",
  "arise": "ortaya çıkmak, doğmak",
  "arm": "kol, silahlanmak",
  "army": "ordu",
  "around": "etrafında, yaklaşık",
  "arrange": "düzenlemek, ayarlamak",
  "arrangement": "düzenleme, anlaşma",
  "arrest": "tutuklamak",
  "arrival": "varış, geliş",
  "arrive": "varmak, ulaşmak",
  "art": "sanat",
  "article": "makale, madde",
  "artist": "sanatçı",
  "as": "olarak, gibi",
  "ash": "kül",
  "ashamed": "utanmış",
  "ask": "sormak, istemek",
  "asleep": "uykuda",
  "aspect": "yön, açı, görünüş",
  "assert": "ileri sürmek, iddia etmek",
  "assess": "değerlendirmek",
  "assessment": "değerlendirme",
  "asset": "varlık, koz",
  "assign": "görevlendirmek, atamak",
  "assignment": "ödev, görev",
  "assist": "yardım etmek",
  "assistant": "asistan, yardımcı",
  "associate": "ilişkilendirmek, ortak",
  "association": "dernek, birlik",
  "assume": "varsaymak, üstlenmek",
  "assumption": "varsayım",
  "assure": "güvence vermek",
  "atmosphere": "atmosfer, hava",
  "attach": "bağlamak, eklemek",
  "attachment": "ek, eklenti",
  "attack": "saldırmak, saldırı",
  "attempt": "girişimde bulunmak, çaba",
  "attend": "katılmak, devam etmek",
  "attention": "dikkat, ilgi",
  "attitude": "tavır, tutum",
  "attorney": "avukat",
  "attract": "çekmek, cezbetmek",
  "attraction": "cazibe, ilgi odağı",
  "attractive": "çekici, cazip",
  "audience": "dinleyici, seyirci",
  "August": "Ağustos",
  "aunt": "hala, teyze",
  "author": "yazar",
  "authority": "yetki, otorite",
  "automatic": "otomatik",
  "available": "mevcut, kullanılabilir",
  "average": "ortalama",
  "avoid": "kaçınmak, önlemek",
  "award": "ödül",
  "aware": "farkında, bilincinde",
  "away": "uzakta, deplasmanda",
  "awesome": "harika, müthiş",
  "awful": "berbat, korkunç",
  "baby": "bebek",
  "back": "arka, sırt, geri",
  "background": "arka plan, geçmiş",
  "bacteria": "bakteri",
  "bad": "kötü",
  "badly": "kötü bir şekilde",
  "bag": "çanta, torba",
  "bake": "fırında pişirmek",
  "balance": "denge, bakiye",
  "ball": "top",
  "ban": "yasaklamak",
  "banana": "muz",
  "band": "grup, bant",
  "bank": "banka, nehir kıyısı",
  "bar": "bar, engel",
  "barrier": "engel, bariyer",
  "base": "taban, üs, temel",
  "baseball": "beysbol",
  "basic": "temel, basit",
  "basically": "temelde, aslında",
  "basis": "temel, esas",
  "basketball": "basketbol",
  "bath": "banyo",
  "bathroom": "banyo",
  "battery": "pil, batarya",
  "battle": "savaş, muharebe",
  "be": "olmak",
  "beach": "plaj, kumsal",
  "bear": "ayı, katlanmak",
  "beat": "yenmek, vurmak",
  "beautiful": "güzel",
  "beauty": "güzellik",
  "because": "çünkü",
  "become": "olmak, haline gelmek",
  "bed": "yatak",
  "bedroom": "yatak odası",
  "bee": "arı",
  "beef": "sığır eti",
  "beer": "bira",
  "before": "önce",
  "begin": "başlamak",
  "beginning": "başlangıç",
  "behave": "davranmak",
  "behavior": "davranış",
  "behind": "arkasında",
  "being": "varlık, olma",
  "belief": "inanç",
  "believe": "inanmak",
  "bell": "zil, çan",
  "belong": "ait olmak",
  "below": "aşağıda, altında",
  "belt": "kemer, kuşak",
  "bend": "bükmek, eğilmek",
  "beneath": "altında",
  "benefit": "fayda, yarar",
  "beside": "yanında",
  "besides": "ayrıca, bundan başka",
  "best": "en iyi",
  "bet": "bahis oynamak",
  "better": "daha iyi",
  "between": "arasında",
  "beyond": "ötesinde",
  "bias": "önyargı, taraflılık",
  "bicycle": "bisiklet",
  "big": "büyük",
  "bike": "bisiklet",
  "bill": "fatura, senet",
  "billion": "milyar",
  "bind": "bağlamak, ciltlemek",
  "biology": "biyoloji",
  "bird": "kuş",
  "birth": "doğum",
  "birthday": "doğum günü",
  "biscuit": "bisküvi",
  "bit": "biraz, parça",
  "bite": "ısırmak",
  "bitter": "acı",
  "black": "siyah",
  "blade": "bıçak ağzı",
  "blame": "suçlamak",
  "blank": "boş",
  "blanket": "battaniye",
  "bleed": "kanamak",
  "blend": "karıştırmak, harman",
  "bless": "kutsamak",
  "blind": "kör",
  "block": "blok, engellemek",
  "blog": "blog",
  "blond": "sarışın",
  "blood": "kan",
  "blow": "üflemek, esmek",
  "blue": "mavi",
  "board": "tahta, kurul, binmek",
  "boast": "övünmek",
  "boat": "tekne, bot",
  "body": "vücut, beden",
  "boil": "kaynamak",
  "bold": "cesur, koyu yazılmış",
  "bomb": "bomba",
  "bond": "bağ, ilişki",
  "bone": "kemik",
  "book": "kitap, rezervasyon yapmak",
  "boost": "artırmak, yükseltmek",
  "boot": "bot, çizme",
  "border": "sınır",
  "bored": "canı sıkılmış",
  "boring": "sıkıcı",
  "born": "doğmuş",
  "borrow": "ödünç almak",
  "boss": "patron",
  "both": "her ikisi de",
  "bother": "rahatsız etmek",
  "bottle": "şişe",
  "bottom": "alt, taban",
  "bound": "bağlı, zorunlu",
  "bowl": "kase",
  "box": "kutu",
  "boy": "erkek çocuk",
  "boyfriend": "erkek arkadaş",
  "brain": "beyin",
  "branch": "dal, şube",
  "brand": "marka",
  "brave": "cesur",
  "bread": "ekmek",
  "break": "kırmak, mola",
  "breakfast": "kahvaltı",
  "breast": "göğüs",
  "breath": "nefes",
  "breathe": "nefes almak",
  "breed": "üremek, ırk",
  "brick": "tuğla",
  "bridge": "köprü",
  "brief": "kısa, özet",
  "bright": "parlak, zeki",
  "brilliant": "muhteşem, zeki",
  "bring": "getirmek",
  "broad": "geniş, kapsamlı",
  "broadcast": "yayınlamak",
  "broken": "kırık, bozuk",
  "brother": "erkek kardeş",
  "brown": "kahverengi",
  "brush": "fırçalamak",
  "bubble": "kabarcık",
  "budget": "bütçe",
  "build": "inşa etmek",
  "building": "bina",
  "bullet": "mermi",
  "bunch": "demet, grup",
  "burn": "yakmak, yanmak",
  "burst": "patlamak",
  "bury": "gömmek",
  "bus": "otobüs",
  "bush": "çalı",
  "business": "iş, ticaret",
  "businessman": "iş insanı",
  "busy": "meşgul, yoğun",
  "but": "fakat, ama",
  "butter": "tereyağı",
  "button": "düğme",
  "buy": "satın almak",
  "by": "tarafından, yanında",
  "bye": "hoşça kal"
};

function getPlacementOptions(targetWord, allSequence) {
  const correctDef = PLACEMENT_DICT[targetWord.toLowerCase()] || "Anlamı: " + targetWord;
  const targetObj = { id: targetWord, word: targetWord, definition: correctDef, isCorrect: true };
  
  const otherWords = allSequence.filter(w => w.word.toLowerCase() !== targetWord.toLowerCase());
  const shuffledOthers = [...otherWords].sort(() => Math.random() - 0.5).slice(0, 3);
  
  const wrongOptions = shuffledOthers.map((item, i) => {
    const wDef = PLACEMENT_DICT[item.word.toLowerCase()] || (item.word + " (tanım)");
    return { id: item.word + "_" + i, word: item.word, definition: wDef, isCorrect: false };
  });

  const allOpts = [targetObj, ...wrongOptions].sort(() => Math.random() - 0.5);
  return allOpts;
}
`;

if (!code.includes("const PLACEMENT_DICT")) {
  code = dictionaryCode + "\n" + code;
}

// 3 Butonlu render kısmını 4 şıklı çoktan seçmeli render kısmı ile değiştirelim (Hiçbir Hook kullanmadan!)
const oldButtonsPattern = `<div style={{ display: "flex", gap: 8 }}>
        <button
          onClick={() => persistAnswer("unknown")}
          style={{ ...primaryBtn, flex: 1, background: COLORS.coral, fontSize: 13 }}
        >
          Bilmiyorum
        </button>
        <button
          onClick={() => persistAnswer("partial")}
          style={{ ...primaryBtn, flex: 1, background: COLORS.gold, fontSize: 13 }}
        >
          Kısmen
        </button>
        <button
          onClick={() => persistAnswer("know")}
          style={{ ...primaryBtn, flex: 1, background: COLORS.moss, fontSize: 13 }}
        >
          Biliyorum
        </button>
      </div>`;

// state'leri PlacementTest bileşeninin en üstüne ekleyelim
const placementHeaderPattern = `function PlacementTest({ existingWords, onImportWords }) {
  const [progress, setProgress] = useState({});`;

const replacementPlacementHeader = `function PlacementTest({ existingWords, onImportWords }) {
  const [progress, setProgress] = useState({});
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [answeredState, setAnsweredState] = useState(false);`;

code = code.replace(placementHeaderPattern, replacementPlacementHeader);

// Pure JS render (Hook yok!)
const quizCardReplacement = `
      {(() => {
        const currentOptions = getPlacementOptions(currentItem.word, sequence);

        const handleSelectOption = (opt) => {
          if (answeredState) return;
          setSelectedOpt(opt);
          setAnsweredState(true);

          setTimeout(() => {
            if (opt.isCorrect) {
              persistAnswer("know");
            } else {
              persistAnswer("unknown");
            }
            setSelectedOpt(null);
            setAnsweredState(false);
          }, 1000);
        };

        const handleSkip = () => {
          if (answeredState) return;
          persistAnswer("unknown");
        };

        return (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
              {currentOptions.map((opt, i) => {
                let btnBg = COLORS.card;
                let btnBorder = COLORS.paperLine;
                let btnColor = COLORS.ink;

                if (answeredState) {
                  if (opt.isCorrect) {
                    btnBg = COLORS.moss;
                    btnBorder = COLORS.moss;
                    btnColor = "#fff";
                  } else if (selectedOpt && selectedOpt.id === opt.id) {
                    btnBg = COLORS.coral;
                    btnBorder = COLORS.coral;
                    btnColor = "#fff";
                  }
                }

                return (
                  <button
                    key={opt.id || i}
                    onClick={() => handleSelectOption(opt)}
                    disabled={answeredState}
                    style={{
                      padding: "16px 14px",
                      borderRadius: 8,
                      border: \`1px solid \${btnBorder}\`,
                      background: btnBg,
                      color: btnColor,
                      fontSize: 13.5,
                      fontWeight: 600,
                      cursor: answeredState ? "default" : "pointer",
                      textAlign: "center",
                      transition: "all 0.15s ease",
                    }}
                  >
                    {opt.definition}
                  </button>
                );
              })}
            </div>

            <div style={{ textAlign: "center" }}>
              <button
                onClick={handleSkip}
                disabled={answeredState}
                style={{ background: "none", border: "none", color: COLORS.inkSoft, fontSize: 13, fontWeight: 600, cursor: "pointer", textDecoration: "underline" }}
              >
                Emin değilim / Bilmiyorum (Pas Geç)
              </button>
            </div>
          </>
        );
      })()}
`;

code = code.replace(oldButtonsPattern, quizCardReplacement);

fs.writeFileSync(appPath, code);
console.log("PlacementTest successfully updated without hook order issues!");
