
import placementDict from './placement_dict.json';

if (typeof window !== 'undefined' && !window.storage) {
  window.storage = {
    get: async (key) => {
      try {
        const val = localStorage.getItem(key);
        return val ? { value: val } : null;
      } catch (e) { return null; }
    },
    set: async (key, val) => {
      try { localStorage.setItem(key, val); return true; } catch (e) { return false; }
    },
    remove: async (key) => {
      try { localStorage.removeItem(key); return true; } catch (e) { return false; }
    }
  };
}

const PLACEMENT_DICT_UNUSED = {
  "_placeholder": "placeholder",
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
  "they": "onlar",
  "good": "iyi",
  "bad": "kötü",
  "big": "büyük",
  "small": "küçük",
  "large": "büyük, geniş",
  "little": "küçük, az",
  "high": "yüksek",
  "low": "alçak, düşük",
  "long": "uzun",
  "short": "kısa",
  "old": "yaşlı, eski",
  "new": "yeni",
  "young": "genç",
  "different": "farklı",
  "same": "aynı",
  "few": "az sayıda",
  "many": "çok sayıda",
  "other": "diğer",
  "right": "doğru, sağ",
  "wrong": "yanlış",
  "important": "önemli",
  "significant": "önemli, belirgin",
  "necessary": "gerekli",
  "possible": "mümkün",
  "impossible": "imkânsız",
  "likely": "muhtemel",
  "unlikely": "olası olmayan",
  "certain": "kesin, belirli",
  "sure": "emin",
  "clear": "açık, net",
  "obvious": "açık, belli",
  "apparent": "görünen, açık",
  "evident": "belirgin, açık",
  "particular": "belirli, özel",
  "specific": "belirli, spesifik",
  "general": "genel",
  "common": "yaygın, ortak",
  "rare": "nadir",
  "unique": "eşsiz, benzersiz",
  "typical": "tipik",
  "normal": "normal",
  "unusual": "alışılmadık",
  "strange": "tuhaf, garip",
  "weird": "tuhaf, acayip",
  "familiar": "tanıdık",
  "unfamiliar": "tanıdık olmayan",
  "similar": "benzer",
  "identical": "aynı, özdeş",
  "consistent": "tutarlı",
  "inconsistent": "tutarsız",
  "stable": "kararlı, dengeli",
  "unstable": "kararsız",
  "reliable": "güvenilir",
  "unreliable": "güvenilmez",
  "accurate": "doğru, kesin",
  "inaccurate": "yanlış, hatalı",
  "precise": "kesin, hassas",
  "vague": "belirsiz, muğlak",
  "ambiguous": "belirsiz, iki anlamlı",
  "complex": "karmaşık",
  "simple": "basit",
  "complicated": "karmaşık, girift",
  "straightforward": "basit, anlaşılır",
  "difficult": "zor",
  "easy": "kolay",
  "hard": "zor, sert",
  "tough": "zor, sert",
  "challenging": "zorlayıcı, güç",
  "demanding": "zorlu, talepkar",
  "convenient": "uygun, elverişli",
  "inconvenient": "uygunsuz, elverişsiz",
  "suitable": "uygun",
  "appropriate": "uygun, yerinde",
  "inappropriate": "uygunsuz",
  "adequate": "yeterli",
  "inadequate": "yetersiz",
  "sufficient": "yeterli",
  "insufficient": "yetersiz",
  "excessive": "aşırı, fazla",
  "extreme": "aşırı, uç",
  "moderate": "ölçülü, orta düzeyde",
  "minimal": "minimum, en az",
  "optimal": "en uygun, optimal",
  "efficient": "verimli, etkili",
  "inefficient": "verimsiz",
  "effective": "etkili",
  "ineffective": "etkisiz",
  "productive": "üretken",
  "valuable": "değerli",
  "worthless": "değersiz",
  "useful": "faydalı, kullanışlı",
  "useless": "işe yaramaz",
  "beneficial": "yararlı, faydalı",
  "harmful": "zararlı",
  "dangerous": "tehlikeli",
  "safe": "güvenli",
  "risky": "riskli",
  "secure": "güvenli, sağlam",
  "vulnerable": "zarar görebilir, kırılgan",
  "fragile": "kırılgan, hassas",
  "durable": "dayanıklı",
  "sturdy": "sağlam, dayanıklı",
  "flexible": "esnek",
  "rigid": "sert, katı",
  "solid": "sağlam, katı",
  "dense": "yoğun",
  "sparse": "seyrek",
  "thick": "kalın",
  "thin": "ince",
  "heavy": "ağır",
  "light": "hafif, açık (renk)",
  "strong": "güçlü",
  "weak": "zayıf",
  "powerful": "güçlü, etkili",
  "vigorous": "güçlü, dinamik",
  "active": "aktif",
  "passive": "pasif",
  "dynamic": "dinamik",
  "static": "durağan",
  "constant": "sabit, sürekli",
  "fixed": "sabit",
  "temporary": "geçici",
  "permanent": "kalıcı, sürekli",
  "brief": "kısa süreli",
  "lengthy": "uzun (süre)",
  "frequent": "sık",
  "infrequent": "seyrek",
  "occasional": "ara sıra olan",
  "regular": "düzenli",
  "irregular": "düzensiz",
  "gradual": "kademeli, aşamalı",
  "sudden": "ani",
  "immediate": "anında, hemen",
  "prompt": "hızlı, çabuk",
  "delayed": "geciken, ertelenmiş",
  "early": "erken",
  "late": "geç",
  "recent": "son zamanlardaki",
  "current": "şimdiki, güncel",
  "previous": "önceki",
  "subsequent": "sonraki",
  "initial": "ilk, başlangıç",
  "final": "son, nihai",
  "ultimate": "nihai, en son",
  "eventual": "nihai, sonunda gerçekleşen",
  "ongoing": "süregelen, devam eden",
  "pending": "askıda, bekleyen",
  "outstanding": "üstün, ödenmemiş",
  "remarkable": "dikkat çekici, olağanüstü",
  "extraordinary": "olağanüstü",
  "ordinary": "sıradan",
  "mediocre": "vasat, orta düzey",
  "exceptional": "istisnai, olağanüstü",
  "superior": "üstün",
  "inferior": "aşağı, düşük kalite",
  "equivalent": "eşdeğer",
  "comparable": "karşılaştırılabilir",
  "proportional": "orantılı",
  "relevant": "ilgili, alakalı",
  "irrelevant": "ilgisiz, alakasız",
  "crucial": "çok önemli, kritik",
  "critical": "kritik, eleştirel",
  "vital": "hayati, temel",
  "essential": "gerekli, temel",
  "fundamental": "temel, esas",
  "basic": "temel, basit",
  "advanced": "ileri, gelişmiş",
  "sophisticated": "gelişmiş, karmaşık",
  "elaborate": "ayrıntılı, detaylı",
  "detailed": "detaylı, ayrıntılı",
  "comprehensive": "kapsamlı",
  "thorough": "kapsamlı, dikkatli",
  "extensive": "kapsamlı, geniş",
  "limited": "sınırlı",
  "restricted": "kısıtlı",
  "exclusive": "özel, münhasır",
  "inclusive": "kapsayıcı",
  "diverse": "çeşitli, farklı",
  "uniform": "tekdüze, aynı",
  "homogeneous": "homojen, tekdüze",
  "heterogeneous": "heterojen, çeşitli",
  "abstract": "soyut",
  "concrete": "somut",
  "theoretical": "teorik",
  "practical": "pratik, uygulamalı",
  "realistic": "gerçekçi",
  "unrealistic": "gerçekçi olmayan",
  "optimistic": "iyimser",
  "pessimistic": "kötümser",
  "confident": "kendine güvenen",
  "anxious": "kaygılı",
  "nervous": "gergin, sinirli",
  "calm": "sakin",
  "relaxed": "rahat, gevşemiş",
  "tense": "gergin",
  "comfortable": "rahat, konforlu",
  "uncomfortable": "rahatsız",
  "satisfied": "tatmin olmuş",
  "dissatisfied": "tatminsiz",
  "content": "hoşnut, tatmin olmuş",
  "frustrated": "hayal kırıklığına uğramış",
  "disappointed": "hayal kırıklığına uğramış",
  "delighted": "çok mutlu, sevinçli",
  "thrilled": "çok heyecanlı",
  "excited": "hevesli, heyecanlı",
  "bored": "sıkılmış",
  "curious": "meraklı",
  "enthusiastic": "hevesli, coşkulu",
  "passionate": "tutkulu",
  "indifferent": "kayıtsız, ilgisiz",
  "reluctant": "isteksiz, gönülsüz",
  "eager": "istekli, hevesli",
  "willing": "istekli, gönüllü",
  "determined": "kararlı, azimli",
  "persistent": "azimli, direngen",
  "stubborn": "inatçı",
  "generous": "cömert",
  "selfish": "bencil",
  "humble": "alçakgönüllü",
  "arrogant": "kibirli",
  "honest": "dürüst",
  "dishonest": "dürüst olmayan",
  "loyal": "sadık",
  "faithful": "sadık, vefalı",
  "trustworthy": "güvenilir",
  "suspicious": "şüpheci, kuşkulu",
  "cautious": "dikkatli, tedbirli",
  "careless": "dikkatsiz",
  "careful": "dikkatli",
  "attentive": "dikkatli, ilgili",
  "negligent": "ihmalkar",
  "diligent": "çalışkan, gayretli",
  "lazy": "tembel",
  "ambitious": "hırslı, azimli",
  "modest": "alçakgönüllü, mütevazı",
  "polite": "kibar",
  "rude": "kaba",
  "aggressive": "agresif, saldırgan",
  "sociable": "sosyal, girişken",
  "shy": "çekingen",
  "outgoing": "dışa dönük, sosyal",
  "introverted": "içe dönük",
  "extroverted": "dışa dönük",
  "quickly": "hızlı bir şekilde",
  "slowly": "yavaşça",
  "carefully": "dikkatlice",
  "carelessly": "dikkatsizce",
  "easily": "kolayca",
  "hardly": "zorlukla, hemen hemen hiç",
  "extremely": "aşırı derecede",
  "completely": "tamamen",
  "partially": "kısmen",
  "entirely": "tamamen",
  "totally": "tamamen",
  "absolutely": "kesinlikle, tamamen",
  "definitely": "kesinlikle",
  "probably": "muhtemelen",
  "possibly": "muhtemelen, belki",
  "certainly": "kesinlikle",
  "surely": "kesinlikle, elbette",
  "undoubtedly": "şüphesiz",
  "apparently": "görünüşe göre",
  "obviously": "açıkça, belli ki",
  "clearly": "açıkça",
  "evidently": "besbelli, açıkça",
  "seemingly": "görünüşte",
  "presumably": "tahminen, muhtemelen",
  "frequently": "sık sık",
  "often": "genellikle, sık sık",
  "rarely": "nadiren",
  "seldom": "nadiren",
  "occasionally": "ara sıra",
  "sometimes": "bazen",
  "always": "her zaman",
  "never": "asla",
  "usually": "genellikle",
  "generally": "genel olarak",
  "typically": "tipik olarak",
  "normally": "normalde",
  "constantly": "sürekli",
  "continuously": "sürekli olarak",
  "repeatedly": "tekrar tekrar",
  "eventually": "sonunda",
  "finally": "sonunda, nihayet",
  "immediately": "hemen, anında",
  "instantly": "anında",
  "gradually": "kademeli olarak",
  "suddenly": "aniden",
  "abruptly": "ansızın, aniden",
  "directly": "doğrudan",
  "indirectly": "dolaylı olarak",
  "particularly": "özellikle",
  "especially": "özellikle",
  "specifically": "özellikle, belirli olarak",
  "mainly": "başlıca, esas olarak",
  "primarily": "başlıca, öncelikle",
  "largely": "büyük ölçüde",
  "mostly": "çoğunlukla",
  "partly": "kısmen",
  "approximately": "yaklaşık olarak",
  "roughly": "kabaca, yaklaşık",
  "exactly": "tam olarak, kesinlikle",
  "precisely": "tam olarak, kesin biçimde",
  "virtually": "hemen hemen, sanal olarak",
  "practically": "pratik olarak, hemen hemen",
  "essentially": "esasında, temelde",
  "basically": "temelde, esasen",
  "ultimately": "sonuçta, nihayetinde",
  "consequently": "sonuç olarak",
  "therefore": "bu nedenle",
  "thus": "böylece, bu nedenle",
  "hence": "bu nedenle, dolayısıyla",
  "accordingly": "buna göre, dolayısıyla",
  "otherwise": "aksi takdirde",
  "nevertheless": "bununla birlikte, yine de",
  "nonetheless": "yine de, buna karşın",
  "however": "ancak, yine de",
  "moreover": "ayrıca, üstelik",
  "furthermore": "ayrıca, bunun yanı sıra",
  "additionally": "ek olarak",
  "similarly": "benzer şekilde",
  "likewise": "aynı şekilde",
  "conversely": "tersine, aksine",
  "instead": "onun yerine",
  "alternatively": "alternatif olarak",
  "meanwhile": "bu arada",
  "simultaneously": "eş zamanlı olarak",
  "increasingly": "artan bir şekilde",
  "significantly": "önemli ölçüde",
  "considerably": "önemli derecede",
  "substantially": "önemli ölçüde",
  "slightly": "hafifçe, biraz",
  "barely": "ancak, güçbela",
  "merely": "sadece, yalnızca",
  "simply": "basitçe, sadece",
  "literally": "gerçek anlamda, tam anlamıyla",
  "figuratively": "mecazi olarak",
  "genuinely": "gerçekten, samimiyetle",
  "honestly": "dürüst olarak, açıkçası",
  "sincerely": "içtenlikle, samimiyetle",
  "truly": "gerçekten",
  "actually": "aslında",
  "supposedly": "sözde, iddiaya göre",
  "allegedly": "iddiaya göre, sözde",
  "reportedly": "bildirildiğine göre",
  "personally": "şahsen, kişisel olarak",
  "individually": "tek tek, bireysel olarak",
  "collectively": "toplu olarak, birlikte",
  "jointly": "birlikte, ortaklaşa",
  "independently": "bağımsız olarak",
  "separately": "ayrı ayrı",
  "willingly": "isteyerek, gönüllü olarak",
  "reluctantly": "isteksizce",
  "deliberately": "kasıtlı olarak",
  "intentionally": "kasıtlı olarak",
  "accidentally": "kazara, yanlışlıkla",
  "unintentionally": "istemeden, kasıtsızca",
  "consistently": "tutarlı bir şekilde",
  "inevitably": "kaçınılmaz olarak",
  "undeniably": "inkâr edilemez şekilde",
  "arguably": "tartışmaya açık olarak",
  "theoretically": "teorik olarak",
  "technically": "teknik olarak",
  "officially": "resmi olarak",
  "formally": "resmi bir şekilde",
  "informally": "gayri resmi olarak",
  "publicly": "alenen, kamuoyu önünde",
  "privately": "özel olarak, gizlice",
  "locally": "yerel olarak",
  "globally": "küresel olarak",
  "internationally": "uluslararası düzeyde",
  "domestically": "yurt içinde",
  "temporarily": "geçici olarak",
  "permanently": "kalıcı olarak",
  "regularly": "düzenli olarak",
  "irregularly": "düzensiz olarak",
  "id": "\"egitim\",",
  "label": "\"Eğitim\",",
  "raw": "`",
  "education": "eğitim",
  "curriculum": "müfredat",
  "lecture": "ders, konferans",
  "assignment": "ödev",
  "research": "araştırma",
  "thesis": "tez",
  "degree": "derece, diploma",
  "scholarship": "burs",
  "tuition": "öğrenim ücreti",
  "faculty": "fakülte, öğretim üyeleri",
  "enrollment": "kayıt",
  "semester": "dönem, sömestr",
  "academy": "akademi",
  "literacy": "okuryazarlık",
  "knowledge": "bilgi",
  "skill": "beceri",
  "discipline": "disiplin, alan",
  "institution": "kurum",
  "instructor": "eğitmen",
  "professor": "profesör",
  "classroom": "sınıf",
  "textbook": "ders kitabı",
  "exam": "sınav",
  "grade": "not",
  "diploma": "diploma",
  "certificate": "sertifika",
  "seminar": "seminer",
  "workshop": "çalıştay, atölye",
  "syllabus": "ders programı",
  "questionnaire": "anket, soru formu",
  "methodology": "yöntembilim, metodoloji",
  "economy": "ekonomi",
  "market": "pazar, piyasa",
  "industry": "sanayi, endüstri",
  "corporation": "şirket, kurum",
  "enterprise": "girişim, teşebbüs",
  "revenue": "gelir",
  "profit": "kar",
  "loss": "zarar",
  "investment": "yatırım",
  "budget": "bütçe",
  "expense": "gider, harcama",
  "asset": "varlık",
  "liability": "yükümlülük, borç",
  "debt": "borç",
  "capital": "sermaye",
  "inflation": "enflasyon",
  "recession": "durgunluk, resesyon",
  "demand": "talep",
  "supply": "arz",
  "consumer": "tüketici",
  "customer": "müşteri",
  "transaction": "işlem",
  "contract": "sözleşme",
  "negotiation": "müzakere",
  "merger": "şirket birleşmesi",
  "acquisition": "satın alma",
  "strategy": "strateji",
  "competition": "rekabet",
  "monopoly": "tekel",
  "subsidy": "sübvansiyon, destek",
  "tariff": "gümrük tarifesi",
  "trade": "ticaret",
  "export": "ihracat",
  "import": "ithalat",
  "shareholder": "hissedar",
  "stakeholder": "paydaş",
  "hypothesis": "hipotez, varsayım",
  "theory": "teori",
  "experiment": "deney",
  "observation": "gözlem",
  "evidence": "kanıt",
  "data": "veri",
  "analysis": "analiz",
  "conclusion": "sonuç",
  "variable": "değişken",
  "sample": "örnek, numune",
  "species": "tür (canlı)",
  "organism": "organizma",
  "ecosystem": "ekosistem",
  "habitat": "yaşam alanı",
  "evolution": "evrim",
  "gene": "gen",
  "molecule": "molekül",
  "atom": "atom",
  "particle": "parçacık",
  "energy": "enerji",
  "gravity": "yer çekimi",
  "radiation": "radyasyon",
  "climate": "iklim",
  "atmosphere": "atmosfer",
  "temperature": "sıcaklık",
  "pressure": "basınç",
  "mineral": "mineral",
  "fossil": "fosil",
  "extinction": "yok olma, tükeniş",
  "mutation": "mutasyon",
  "cell": "hücre",
  "bacteria": "bakteri",
  "virus": "virüs",
  "nutrient": "besin öğesi",
  "photosynthesis": "fotosentez",
  "government": "hükümet",
  "policy": "politika",
  "legislation": "yasama, mevzuat",
  "regulation": "düzenleme, yönetmelik",
  "citizen": "vatandaş",
  "democracy": "demokrasi",
  "election": "seçim",
  "constitution": "anayasa",
  "authority": "yetki, otorite",
  "bureaucracy": "bürokrasi",
  "diplomacy": "diplomasi",
  "treaty": "anlaşma, antlaşma",
  "sanction": "yaptırım",
  "justice": "adalet",
  "court": "mahkeme",
  "verdict": "hüküm, karar",
  "jury": "jüri",
  "lawsuit": "dava",
  "crime": "suç",
  "punishment": "ceza",
  "prison": "hapishane",
  "rights": "haklar",
  "freedom": "özgürlük",
  "equality": "eşitlik",
  "inequality": "eşitsizlik",
  "poverty": "yoksulluk",
  "welfare": "refah, sosyal yardım",
  "census": "nüfus sayımı",
  "population": "nüfus",
  "migration": "göç",
  "health": "sağlık",
  "disease": "hastalık",
  "illness": "hastalık, rahatsızlık",
  "symptom": "belirti",
  "diagnosis": "teşhis",
  "treatment": "tedavi",
  "medication": "ilaç, tedavi",
  "therapy": "terapi",
  "surgery": "ameliyat",
  "patient": "hasta",
  "physician": "doktor, hekim",
  "nutrition": "beslenme",
  "diet": "diyet, beslenme düzeni",
  "exercise": "egzersiz",
  "fatigue": "yorgunluk",
  "immunity": "bağışıklık",
  "infection": "enfeksiyon",
  "vaccine": "aşı",
  "epidemic": "salgın",
  "hygiene": "hijyen",
  "wellness": "iyi olma hali, esenlik",
  "disability": "engellilik",
  "recovery": "iyileşme",
  "routine": "rutin",
  "household": "ev halkı, hane",
  "chore": "ev işi",
  "appointment": "randevu",
  "errand": "ayak işi",
  "grocery": "market alışverişi",
  "technology": "teknoloji",
  "device": "cihaz",
  "software": "yazılım",
  "hardware": "donanım",
  "algorithm": "algoritma",
  "database": "veritabanı",
  "network": "ağ",
  "server": "sunucu",
  "application": "uygulama",
  "interface": "arayüz",
  "innovation": "yenilik, inovasyon",
  "automation": "otomasyon",
  "robotics": "robotik",
  "artificial intelligence": "yapay zeka",
  "encryption": "şifreleme",
  "bandwidth": "bant genişliği",
  "storage": "depolama",
  "platform": "platform",
  "malfunction": "arıza",
  "glitch": "küçük hata, arıza",
  "prototype": "prototip",
  "simulation": "simülasyon",
  "component": "bileşen, parça",
  "circuit": "devre",
  "sensor": "sensör, algılayıcı",
  "firmware": "yerleşik yazılım",
  "chip": "çip",
  "protocol": "protokol",
  "environment": "çevre",
  "pollution": "kirlilik",
  "emission": "emisyon, salım",
  "sustainability": "sürdürülebilirlik",
  "conservation": "koruma (doğa)",
  "deforestation": "ormansızlaşma",
  "biodiversity": "biyoçeşitlilik",
  "renewable energy": "yenilenebilir enerji",
  "resource": "kaynak",
  "waste": "atık",
  "recycling": "geri dönüşüm",
  "drought": "kuraklık",
  "flood": "sel",
  "wildlife": "yaban hayatı",
  "greenhouse effect": "sera etkisi",
  "contamination": "kirlenme",
  "overpopulation": "aşırı nüfus artışı",
  "carbon footprint": "karbon ayak izi",
  "glacier": "buzul",
  "coral reef": "mercan resifi",
  "oil spill": "petrol sızıntısı",
  "ozone layer": "ozon tabakası",
  "landfill": "çöp sahası",
  "erosion": "erozyon",
  "sediment": "tortu, çökelti",
  "culture": "kültür",
  "tradition": "gelenek",
  "heritage": "miras (kültürel)",
  "custom": "adet, örf",
  "ritual": "ritüel, ayin",
  "ceremony": "tören",
  "literature": "edebiyat",
  "novel": "roman",
  "poetry": "şiir",
  "narrative": "anlatı, öykü",
  "character": "karakter",
  "plot": "olay örgüsü",
  "theme": "tema",
  "genre": "tür (edebi/sanatsal)",
  "symbolism": "sembolizm",
  "metaphor": "metafor, mecaz",
  "architecture": "mimari",
  "sculpture": "heykel",
  "painting": "resim, tablo",
  "exhibition": "sergi",
  "museum": "müze",
  "festival": "festival",
  "folklore": "folklor, halk kültürü",
  "artifact": "eser, obje (tarihi)",
  "masterpiece": "başyapıt",
  "emotion": "duygu",
  "anxiety": "kaygı, anksiyete",
  "depression": "depresyon",
  "motivation": "motivasyon",
  "perception": "algı",
  "behavior": "davranış",
  "personality": "kişilik",
  "attitude": "tutum, davranış biçimi",
  "memory": "hafıza, bellek",
  "awareness": "farkındalık",
  "consciousness": "bilinç",
  "subconscious": "bilinçaltı",
  "trauma": "travma",
  "resilience": "dayanıklılık, direnç",
  "empathy": "empati",
  "self-esteem": "özgüven, öz saygı",
  "frustration": "hayal kırıklığı, engellenme",
  "grief": "keder, yas",
  "curiosity": "merak",
  "confidence": "özgüven",
  "insecurity": "güvensizlik",
  "temperament": "mizaç, huy",
  "instinct": "içgüdü",
  "cognition": "biliş, kavrama",
  "bias": "yanlılık, önyargı",
  "function parsewordlines(text": "category) {",
  "const sep = line.includes(\"": "\") ? \" - \" : line.includes(\":\") ? \":\" : line.includes(\"-\") ? \"-\" : null;",
  "const w = line.slice(0": "idx).trim();",
  "parsed.push(makeword(w": "d, \"\", category));",
  "function addwords({ onadd": "existingWords }) {",
  "const [mode": "setMode] = useState(\"single\"); // single | bulk | verbs | nouns",
  "const [word": "setWord] = useState(\"\");",
  "const [definition": "setDefinition] = useState(\"\");",
  "const [example": "setExample] = useState(\"\");",
  "const [bulktext": "setBulkText] = useState(\"\");",
  "const [category": "setCategory] = useState(\"Genel\");",
  "const [customcategory": "setCustomCategory] = useState(\"\");",
  "const [error": "setError] = useState(\"\");",
  "const resolvedcategory = category === \"__custom__\" ? customcategory.trim() || \"genel\"": "category;",
  "onadd([makeword(word": "definition, example, resolvedCategory)]);",
  "const parsed = parsewordlines(bulktext": "resolvedCategory);",
  "seterror(\"satırları 'kelime": "anlam' formatında yapıştır.\");",
  "const parsed = parsewordlines(common_verbs_raw": "\"Fiil\").filter((w) => !existingKeys.has(w.word.toLowerCase()));",
  "const parsed = parsewordlines(common_toefl_verbs_raw": "\"Fiil\").filter((w) => !existingKeys.has(w.word.toLowerCase()));",
  "const parsed = parsewordlines(common_adjectives_raw": "\"Sıfat\").filter((w) => !existingKeys.has(w.word.toLowerCase()));",
  "const parsed = parsewordlines(common_adverbs_raw": "\"Zarf\").filter((w) => !existingKeys.has(w.word.toLowerCase()));",
  "const parsed = parsewordlines(cat.raw": "cat.label).filter((w) => !existingKeys.has(w.word.toLowerCase()));",
  "<div style={{ display": "\"flex\", gap - 6, marginBottom - 20, flexWrap - \"wrap\" }}>",
  "{ id": "\"single\", label - \"Tek kelime\" },",
  "flex": "\"1 1 auto\",",
  "padding": "\"9px 8px\",",
  "borderradius": "6,",
  "border": "`1px solid ${mode === m.id ? COLORS.ink  - COLORS.paperLine}`,",
  "background": "mode === m.id ? COLORS.ink  - \"transparent\",",
  "color": "mode === m.id ? COLORS.paper  - COLORS.ink,",
  "fontsize": "12.5,",
  "fontweight": "600,",
  "cursor": "\"pointer\",",
  "whitespace": "\"nowrap\",",
  "<div style={{ textalign": "\"center\", padding - \"20px 10px\" }}>",
  "<div style={{ fontfamily": "\"'Source Serif 4', serif\", fontSize - 18, marginBottom - 8 }}>",
  "<p style={{ color": "COLORS.inkSoft, fontSize - 13.5, marginBottom - 18, lineHeight - 1.5 }}>",
  "günlük ve akademik i̇ngilizcede en sık kullanılan fiiller": "Türkçe anlamlarıyla birlikte",
  "{error && <div style={{ ...errorstyle, marginbottom": "12 }}>{error}</div>}",
  "<button onclick={seedcommonverbs} style={{ ...primarybtn, width": "\"100%\" }}>",
  ")": "mode === \"toeflverbs\" ? (",
  "coxhead'in academic word list (awl) kaynağındaki en sık geçen fiillerden": "mevcut 500",
  "<button onclick={seedtoeflverbs} style={{ ...primarybtn, width": "\"100%\" }}>",
  "betimleme ve karşılaştırmalarda en sık kullanılan sıfatlar": "Türkçe anlamlarıyla birlikte",
  "<button onclick={seedcommonadjectives} style={{ ...primarybtn, width": "\"100%\" }}>",
  "özellikle toefl metinlerinde sık geçen bağlaç zarfları ve derece zarfları": "Türkçe",
  "<button onclick={seedcommonadverbs} style={{ ...primarybtn, width": "\"100%\" }}>",
  "display": "\"flex\",",
  "justifycontent": "\"space-between\",",
  "alignitems": "\"center\",",
  "fontfamily": "\"inherit\",",
  "textalign": "\"left\",",
  "<span style={{ display": "\"flex\", alignItems - \"center\", gap - 8 }}>",
  "placeholder=\"örn. her yerde bulunan": "yaygın\"",
  "<field label=\"her satıra bir kelime — format: kelime": "anlam\">",
  "placeholder={\"ubiquitous": "her yerde bulunan\\nmeticulous - titiz, dikkatli\\nresilient - dirençli\"}",
  "style={{ ...inputstyle, resize": "\"vertical\", fontFamily - \"monospace\", fontSize - 13 }}",
  "function categoryselector({ category": "setCategory, customCategory, setCustomCategory, existingCategories }) {",
  "const alloptions = array.from(new set([\"genel\"": "\"Fiil\", \"Sıfat\", \"Zarf\", ...presetLabels, ...existingCategories]));",
  "style={{ ...inputstyle, flex": "1 }}",
  "style={{ ...inputstyle, margintop": "8 }}",
  "function field({ label": "children }) {",
  "<label style={{ display": "\"block\" }}>",
  "<div style={{ fontsize": "12.5, fontWeight - 600, color - COLORS.inkSoft, marginBottom - 5 }}>{label}</div>",
  "width": "\"100%\",",
  "const errorstyle = { color": "COLORS.coral, fontSize - 12.5, fontWeight - 500 };",
  "const size = math.min(10": "words.length);",
  "return pickweighted(words": "size);",
  "function buildoptions(target": "allWords) {",
  "const shuffled = [...others].sort(() => math.random()": "0.5).slice(0, 3);",
  "const opts = [target, ...shuffled].sort(() => math.random()": "0.5);",
  "const prompt = `for each of the following english words, write one natural sentence (12-22 words) suitable for an academic toefl reading passage. use the exact word form given, unchanged (do not alter tense, number, or form). the sentence should make the word's meaning reasonably clear from context, without being an obvious definition. respond with only a json array, no markdown code fences, no explanation, in this exact format": "[{\"word\":\"...\",\"sentence\":\"...\"}]",
  "words": "${wordList.join(\", \")}",
  "approach": "yaklaşmak, bir konuya el almak",
  "assess": "değerlendirmek",
  "benefit": "fayda sağlamak, yararlanmak",
  "consist": "oluşmak, ibaret olmak",
  "constitute": "oluşturmak, teşkil etmek",
  "derive": "türetmek, elde etmek",
  "function": "işlev görmek, çalışmak",
  "issue": "yayınlamak, çıkarmak",
  "legislate": "yasa çıkarmak",
  "occur": "meydana gelmek, olmak",
  "proceed": "ilerlemek, sürdürmek",
  "process": "işlemden geçirmek",
  "respond": "yanıt vermek, tepki vermek",
  "vary": "değişmek, çeşitlilik göstermek",
  "acquire": "edinmek, kazanmak",
  "administrate": "yönetmek, idare etmek",
  "assist": "yardım etmek",
  "commission": "görevlendirmek, sipariş vermek",
  "compute": "hesaplamak (bilgisayarla)",
  "conclude": "sonuçlandırmak, sonuca varmak",
  "conduct": "yürütmek, gerçekleştirmek",
  "consume": "tüketmek",
  "credit": "itibar etmek, hesaba geçirmek",
  "design": "tasarlamak",
  "equate": "eşit saymak, denk tutmak",
  "feature": "yer vermek, öne çıkarmak",
  "impact": "etkilemek, çarpmak",
  "injure": "yaralamak",
  "institute": "başlatmak, kurmak",
  "obtain": "elde etmek, edinmek",
  "participate": "katılmak",
  "perceive": "algılamak, idrak etmek",
  "range": "değişmek, uzanmak (bir aralıkta)",
  "regulate": "düzenlemek, denetlemek",
  "reside": "ikamet etmek, oturmak",
  "restrict": "kısıtlamak, sınırlamak",
  "survey": "anket yapmak, incelemek",
  "comment": "yorum yapmak",
  "compensate": "tazmin etmek, karşılamak",
  "consent": "onay vermek, razı olmak",
  "constrain": "kısıtlamak, sınırlamak",
  "convene": "toplanmak, toplantı düzenlemek",
  "coordinate": "koordine etmek, eş güdümlemek",
  "correspond": "karşılık gelmek, yazışmak",
  "deduce": "çıkarım yapmak, sonuç çıkarmak",
  "document": "belgelemek, kayda geçirmek",
  "imply": "ima etmek, demek istemek",
  "interact": "etkileşimde bulunmak",
  "justify": "haklı çıkarmak, gerekçelendirmek",
  "locate": "yerini bulmak, konumlandırmak",
  "maximise": "en üst düzeye çıkarmak",
  "negate": "geçersiz kılmak, yok etmek",
  "react": "tepki vermek, reaksiyon göstermek",
  "register": "kaydolmak, kayıt yaptırmak",
  "sequence": "sıralamak, düzene koymak",
  "specify": "belirtmek, açıkça ifade etmek",
  "attribute": "atfetmek, bağlamak",
  "commit": "taahhüt etmek, işlemek (suç)",
  "communicate": "iletişim kurmak",
  "confer": "danışmak, müzakere etmek",
  "contrast": "karşılaştırmak, tezat oluşturmak",
  "cycle": "döngüyle hareket etmek",
  "debate": "tartışmak, münazara yapmak",
  "emerge": "ortaya çıkmak, belirmek",
  "grant": "bağışlamak, vermek (izin/hak)",
  "implement": "uygulamak, yürürlüğe koymak",
  "implicate": "suça karıştırmak, ima etmek",
  "impose": "dayatmak, empoze etmek",
  "integrate": "bütünleştirmek, entegre etmek",
  "occupy": "işgal etmek, meşgul etmek",
  "project": "öngörmek, yansıtmak",
  "promote": "terfi ettirmek, tanıtmak",
  "retain": "elde tutmak, korumak",
  "sum": "toplamak, özetlemek",
  "alter": "değişiklik yapmak",
  "amend": "değişiklik yapmak, düzeltmek (yasa)",
  "consult": "danışmak, başvurmak",
  "decline": "azalmak, reddetmek",
  "enable": "mümkün kılmak, olanak sağlamak",
  "enforce": "uygulamak, zorla yürütmek",
  "evolve": "evrimleşmek, gelişmek",
  "expand": "genişletmek, büyümek",
  "expose": "ifşa etmek, maruz bırakmak",
  "facilitate": "kolaylaştırmak",
  "orient": "yönlendirmek, oryante etmek",
  "aggregate": "toplamak, birleştirmek",
  "allocate": "tahsis etmek, ayırmak",
  "assign": "atamak, görevlendirmek",
  "cite": "alıntı yapmak, örnek göstermek",
  "discriminate": "ayrımcılık yapmak, ayırt etmek",
  "diversify": "çeşitlendirmek",
  "enhance": "geliştirmek, artırmak",
  "incorporate": "dahil etmek, birleştirmek",
  "index": "dizinlemek, endekslemek",
  "inhibit": "engellemek, baskılamak",
  "migrate": "göç etmek",
  "precede": "önce gelmek, öncesinde olmak",
  "presume": "varsaymak, zannetmek",
  "trace": "izini sürmek, saptamak",
  "underlie": "temelini oluşturmak, altında yatmak",
  "utilise": "kullanmak, yararlanmak",
  "advocate": "savunmak, desteklemek",
  "comprise": "içermek, oluşmak (parçalardan)",
  "differentiate": "ayırt etmek, farklılaştırmak",
  "dispose": "elden çıkarmak, atmak",
  "eliminate": "elemek, ortadan kaldırmak",
  "equip": "donatmak, teçhiz etmek",
  "extract": "çıkarmak, elde etmek (özüt)",
  "guarantee": "garanti etmek",
  "infer": "çıkarım yapmak, sonuç çıkarmak",
  "insert": "eklemek, araya sokmak",
  "intervene": "araya girmek, müdahale etmek",
  "isolate": "yalıtmak, tecrit etmek",
  "quote": "alıntı yapmak",
  "reverse": "tersine çevirmek, geri almak",
  "submit": "sunmak, teslim etmek (başvuru)",
  "transmit": "iletmek, aktarmak (sinyal/hastalık)",
  "abandon": "terk etmek, vazgeçmek",
  "accompany": "eşlik etmek, refakat etmek",
  "append": "eklemek, ilave etmek",
  "appreciate": "takdir etmek, değer vermek",
  "be": "olmak",
  "have": "sahip olmak",
  "do": "yapmak",
  "say": "söylemek",
  "get": "almak, elde etmek",
  "make": "yapmak, üretmek",
  "go": "gitmek",
  "know": "bilmek",
  "take": "almak",
  "see": "görmek",
  "come": "gelmek",
  "think": "düşünmek",
  "look": "bakmak",
  "want": "istemek",
  "give": "vermek",
  "use": "kullanmak",
  "find": "bulmak",
  "tell": "söylemek, anlatmak",
  "ask": "sormak",
  "work": "çalışmak",
  "seem": "görünmek",
  "feel": "hissetmek",
  "try": "denemek",
  "leave": "ayrılmak, terk etmek",
  "call": "aramak, çağırmak",
  "need": "ihtiyaç duymak",
  "become": "olmak, haline gelmek",
  "put": "koymak",
  "mean": "anlamına gelmek",
  "keep": "tutmak, korumak",
  "let": "izin vermek, bırakmak",
  "begin": "başlamak",
  "show": "göstermek",
  "hear": "işitmek",
  "play": "oynamak",
  "run": "koşmak",
  "move": "hareket etmek, taşınmak",
  "like": "sevmek, beğenmek",
  "live": "yaşamak",
  "believe": "inanmak",
  "hold": "tutmak",
  "bring": "getirmek",
  "happen": "olmak, gerçekleşmek",
  "write": "yazmak",
  "sit": "oturmak",
  "stand": "ayakta durmak",
  "lose": "kaybetmek",
  "pay": "ödemek",
  "meet": "buluşmak, tanışmak",
  "include": "içermek, dahil etmek",
  "continue": "sürdürmek, devam etmek",
  "set": "ayarlamak, koymak",
  "learn": "öğrenmek",
  "change": "değiştirmek",
  "lead": "yönetmek, öncülük etmek",
  "understand": "anlamak",
  "watch": "izlemek",
  "follow": "takip etmek",
  "stop": "durdurmak, durmak",
  "create": "yaratmak, oluşturmak",
  "speak": "konuşmak",
  "read": "okumak",
  "allow": "izin vermek",
  "add": "eklemek",
  "grow": "büyümek",
  "open": "açmak",
  "walk": "yürümek",
  "win": "kazanmak",
  "offer": "teklif etmek, sunmak",
  "remember": "hatırlamak",
  "love": "sevmek",
  "consider": "düşünmek, göz önünde bulundurmak",
  "appear": "görünmek, ortaya çıkmak",
  "buy": "satın almak",
  "wait": "beklemek",
  "serve": "hizmet etmek",
  "die": "ölmek",
  "send": "göndermek",
  "expect": "beklemek, ummak",
  "build": "inşa etmek, kurmak",
  "stay": "kalmak",
  "fall": "düşmek",
  "cut": "kesmek",
  "reach": "ulaşmak, erişmek",
  "kill": "öldürmek",
  "remain": "kalmak, devam etmek",
  "suggest": "önermek",
  "raise": "yükseltmek, kaldırmak",
  "pass": "geçmek",
  "sell": "satmak",
  "require": "gerektirmek",
  "report": "bildirmek, rapor etmek",
  "decide": "karar vermek",
  "pull": "çekmek",
  "return": "geri dönmek, iade etmek",
  "explain": "açıklamak",
  "hope": "ummak",
  "develop": "geliştirmek",
  "carry": "taşımak",
  "break": "kırmak",
  "receive": "almak, kabul etmek",
  "agree": "kabul etmek, hemfikir olmak",
  "support": "desteklemek",
  "hit": "vurmak",
  "produce": "üretmek",
  "eat": "yemek",
  "cover": "kaplamak, örtmek",
  "catch": "yakalamak",
  "draw": "çizmek",
  "choose": "seçmek",
  "wonder": "merak etmek",
  "arrive": "varmak, ulaşmak",
  "involve": "içermek, dahil etmek",
  "fight": "savaşmak, kavga etmek",
  "teach": "öğretmek",
  "force": "zorlamak",
  "bear": "taşımak, katlanmak",
  "deal": "ilgilenmek, uğraşmak",
  "sing": "şarkı söylemek",
  "drop": "düşürmek, bırakmak",
  "drive": "araba sürmek",
  "wear": "giymek",
  "cause": "sebep olmak",
  "save": "kurtarmak, biriktirmek",
  "control": "kontrol etmek",
  "face": "yüz yüze gelmek, karşılaşmak",
  "plan": "planlamak",
  "join": "katılmak",
  "increase": "artırmak, artmak",
  "push": "itmek",
  "burn": "yanmak, yakmak",
  "protect": "korumak",
  "determine": "belirlemek, kararlaştırmak",
  "seek": "aramak, çalışmak",
  "base": "temellendirmek",
  "discuss": "tartışmak, ele almak",
  "indicate": "belirtmek, işaret etmek",
  "describe": "tanımlamak, betimlemek",
  "finish": "bitirmek",
  "warn": "uyarmak",
  "treat": "davranmak, tedavi etmek",
  "shape": "şekillendirmek",
  "train": "eğitmek, antrenman yapmak",
  "share": "paylaşmak",
  "represent": "temsil etmek",
  "relate": "ilişkilendirmek, bağlantı kurmak",
  "reduce": "azaltmak",
  "jump": "atlamak, zıplamak",
  "affect": "etkilemek",
  "prepare": "hazırlamak",
  "depend": "bağlı olmak, güvenmek",
  "exist": "var olmak",
  "wish": "dilemek",
  "throw": "fırlatmak, atmak",
  "avoid": "kaçınmak, önlemek",
  "rise": "yükselmek",
  "hang": "asmak, sarkmak",
  "sound": "ses çıkarmak, kulağa gelmek",
  "accept": "kabul etmek",
  "contain": "içermek",
  "figure out": "çözmek, anlamak",
  "imagine": "hayal etmek",
  "deliver": "teslim etmek",
  "laugh": "gülmek",
  "improve": "geliştirmek, iyileştirmek",
  "matter": "önemli olmak",
  "lay": "yatırmak, koymak",
  "define": "tanımlamak",
  "suffer": "acı çekmek, katlanmak",
  "focus": "odaklanmak",
  "compare": "karşılaştırmak",
  "claim": "iddia etmek, talep etmek",
  "observe": "gözlemlemek",
  "list": "listelemek",
  "count": "saymak",
  "recognize": "tanımak, fark etmek",
  "survive": "hayatta kalmak",
  "remove": "kaldırmak, çıkarmak",
  "attend": "katılmak, gitmek",
  "adopt": "benimsemek, evlat edinmek",
  "connect": "bağlamak",
  "arrange": "düzenlemek, ayarlamak",
  "prove": "kanıtlamak",
  "release": "serbest bırakmak, yayınlamak",
  "tend": "eğilim göstermek",
  "attack": "saldırmak",
  "pick": "seçmek, toplamak",
  "fly": "uçmak",
  "gain": "kazanmak, elde etmek",
  "perform": "gerçekleştirmek, sergilemek",
  "identify": "tanımlamak, belirlemek",
  "address": "ele almak, hitap etmek",
  "skip": "atlamak, kaçırmak",
  "cook": "yemek pişirmek",
  "wash": "yıkamak",
  "clean": "temizlemek",
  "sleep": "uyumak",
  "dream": "hayal kurmak, rüya görmek",
  "shout": "bağırmak",
  "whisper": "fısıldamak",
  "smile": "gülümsemek",
  "cry": "ağlamak",
  "dance": "dans etmek",
  "paint": "boyamak, resim yapmak",
  "climb": "tırmanmak",
  "swim": "yüzmek",
  "travel": "seyahat etmek",
  "visit": "ziyaret etmek",
  "enjoy": "hoşlanmak, zevk almak",
  "hate": "nefret etmek",
  "forget": "unutmak",
  "remind": "hatırlatmak",
  "promise": "söz vermek",
  "refuse": "reddetmek",
  "admit": "kabul etmek, itiraf etmek",
  "deny": "inkâr etmek",
  "blame": "suçlamak",
  "forgive": "bağışlamak, affetmek",
  "thank": "teşekkür etmek",
  "apologize": "özür dilemek",
  "celebrate": "kutlamak",
  "invite": "davet etmek",
  "greet": "selamlamak",
  "introduce": "tanıştırmak, tanıtmak",
  "announce": "duyurmak, ilan etmek",
  "mention": "bahsetmek",
  "express": "ifade etmek",
  "argue": "tartışmak, iddia etmek",
  "complain": "şikayet etmek",
  "persuade": "ikna etmek",
  "convince": "ikna etmek",
  "encourage": "teşvik etmek, cesaretlendirmek",
  "discourage": "caydırmak",
  "threaten": "tehdit etmek",
  "rely": "güvenmek, bel bağlamak",
  "trust": "güvenmek",
  "doubt": "şüphe etmek",
  "guess": "tahmin etmek",
  "assume": "varsaymak",
  "predict": "tahmin etmek, önceden bildirmek",
  "estimate": "tahmin etmek, hesaplamak",
  "calculate": "hesaplamak",
  "measure": "ölçmek",
  "weigh": "tartmak, ağırlığında olmak",
  "compete": "rekabet etmek, yarışmak",
  "cooperate": "işbirliği yapmak",
  "collaborate": "birlikte çalışmak",
  "negotiate": "müzakere etmek, pazarlık etmek",
  "manage": "yönetmek, başarmak",
  "organize": "düzenlemek, organize etmek",
  "schedule": "programlamak, planlamak",
  "delay": "geciktirmek",
  "postpone": "ertelemek",
  "cancel": "iptal etmek",
  "confirm": "onaylamak",
  "approve": "onaylamak",
  "reject": "reddetmek",
  "select": "seçmek",
  "sort": "sınıflandırmak, ayırmak",
  "classify": "sınıflandırmak",
  "combine": "birleştirmek",
  "separate": "ayırmak",
  "divide": "bölmek, ayırmak",
  "link": "bağlamak, ilişkilendirmek",
  "attach": "eklemek, iliştirmek",
  "detach": "ayırmak, çıkarmak",
  "fix": "onarmak, sabitlemek",
  "repair": "tamir etmek",
  "damage": "zarar vermek, hasar vermek",
  "destroy": "yok etmek, tahrip etmek",
  "construct": "inşa etmek, kurmak",
  "demolish": "yıkmak",
  "establish": "kurmak, tesis etmek",
  "found": "kurmak (bir kuruluş)",
  "launch": "başlatmak, piyasaya sürmek",
  "initiate": "başlatmak",
  "terminate": "sonlandırmak",
  "complete": "tamamlamak",
  "accomplish": "başarmak, gerçekleştirmek",
  "achieve": "başarmak, elde etmek",
  "succeed": "başarılı olmak",
  "fail": "başarısız olmak",
  "attempt": "denemek, girişimde bulunmak",
  "struggle": "mücadele etmek, zorlanmak",
  "cope": "baş etmek, üstesinden gelmek",
  "handle": "ele almak, üstesinden gelmek",
  "resolve": "çözmek, karar vermek",
  "solve": "çözmek",
  "tackle": "üstesinden gelmek, ele almak",
  "investigate": "araştırmak, soruşturmak",
  "examine": "incelemek, muayene etmek",
  "inspect": "denetlemek, incelemek",
  "analyze": "analiz etmek, çözümlemek",
  "evaluate": "değerlendirmek",
  "review": "gözden geçirmek, incelemek",
  "revise": "gözden geçirip düzeltmek",
  "edit": "düzenlemek (metin)",
  "publish": "yayımlamak",
  "print": "basmak",
  "distribute": "dağıtmak",
  "transport": "taşımak, nakletmek",
  "transfer": "transfer etmek, aktarmak",
  "shift": "kaydırmak, değiştirmek",
  "adjust": "ayarlamak, uyarlamak",
  "adapt": "uyum sağlamak, uyarlamak",
  "modify": "değiştirmek, üzerinde değişiklik yapmak",
  "transform": "dönüştürmek",
  "convert": "dönüştürmek, çevirmek",
  "translate": "çevirmek (dil)",
  "interpret": "yorumlamak, tercüme etmek",
  "clarify": "açıklığa kavuşturmak",
  "illustrate": "göstermek, açıklamak (örnekle)",
  "demonstrate": "göstermek, kanıtlamak",
  "emphasize": "vurgulamak, önem vermek",
  "highlight": "vurgulamak, öne çıkarmak",
  "stress": "vurgulamak, stres yapmak",
  "concentrate": "odaklanmak, yoğunlaşmak",
  "distract": "dikkati dağıtmak",
  "ignore": "görmezden gelmek, ihmal etmek",
  "neglect": "ihmal etmek",
  "overlook": "gözden kaçırmak, görmezden gelmek",
  "notice": "fark etmek",
  "detect": "tespit etmek, algılamak",
  "discover": "keşfetmek",
  "reveal": "ortaya çıkarmak, açığa vurmak",
  "hide": "gizlemek, saklanmak",
  "conceal": "gizlemek",
  "disguise": "gizlemek, kılık değiştirmek",
  "pretend": "numara yapmak, taklit etmek",
  "imitate": "taklit etmek",
  "copy": "kopyalamak, taklit etmek",
  "replace": "değiştirmek, yerine koymak",
  "substitute": "yerine koymak, ikame etmek",
  "exchange": "değiş tokuş yapmak",
  "purchase": "satın almak",
  "rent": "kiralamak",
  "lease": "kiralamak (uzun süreli)",
  "borrow": "ödünç almak",
  "lend": "ödünç vermek",
  "owe": "borçlu olmak",
  "donate": "bağışlamak",
  "contribute": "katkıda bulunmak",
  "invest": "yatırım yapmak",
  "earn": "kazanmak (para)",
  "spend": "harcamak, geçirmek",
  "afford": "gücü yetmek, karşılayabilmek",
  "cost": "maliyeti olmak",
  "charge": "ücretlendirmek, şarj etmek",
  "refund": "geri ödemek",
  "tax": "vergilendirmek",
  "forecast": "tahmin etmek, öngörmek",
  "intend": "niyet etmek, amaçlamak",
  "aim": "hedeflemek, amaçlamak",
  "target": "hedeflemek",
  "pursue": "takip etmek, sürdürmek",
  "chase": "kovalamak",
  "escape": "kaçmak",
  "flee": "kaçmak, firar etmek",
  "search": "aramak",
  "explore": "keşfetmek, araştırmak",
  "find out": "öğrenmek, ortaya çıkarmak",
  "realize": "fark etmek, anlamak",
  "acknowledge": "kabul etmek, teyit etmek",
  "confess": "itiraf etmek",
  "disclose": "açıklamak, ifşa etmek",
  "leak": "sızdırmak",
  "broadcast": "yayınlamak (radyo/tv)",
  "declare": "ilan etmek, beyan etmek",
  "state": "belirtmek, ifade etmek",
  "assert": "iddia etmek, öne sürmek",
  "insist": "üstelemek, ısrar etmek",
  "request": "rica etmek, talep etmek",
  "beg": "yalvarmak, rica etmek",
  "plead": "yalvarmak, savunmak (hukuk)",
  "urge": "teşvik etmek, sıkıştırmak",
  "recommend": "önermek, tavsiye etmek",
  "advise": "tavsiye etmek, öğüt vermek",
  "caution": "uyarmak, dikkatli olmasını söylemek",
  "inform": "bilgilendirmek",
  "notify": "bildirmek, haber vermek",
  "update": "güncellemek",
  "instruct": "talimat vermek, öğretmek",
  "guide": "yönlendirmek, kılavuzluk etmek",
  "direct": "yönetmek, yönlendirmek",
  "supervise": "denetlemek, gözetmek",
  "monitor": "izlemek, denetlemek",
  "oversee": "denetlemek, gözetim yapmak",
  "audit": "denetlemek (mali)",
  "rate": "değerlendirmek, puanlamak",
  "rank": "sıralamak",
  "score": "puan almak, puan vermek",
  "test": "test etmek, sınamak",
  "quiz": "sınav yapmak, sorgulamak",
  "practice": "pratik yapmak, uygulamak",
  "coach": "koçluk yapmak, antrenörlük yapmak",
  "mentor": "rehberlik etmek",
  "tutor": "özel ders vermek",
  "educate": "eğitmek",
  "graduate": "mezun olmak",
  "enroll": "kayıt olmak",
  "apply": "başvurmak, uygulamak",
  "qualify": "hak kazanmak, yeterlilik kazanmak",
  "certify": "onaylamak, sertifikalandırmak",
  "license": "lisans vermek, ruhsatlandırmak",
  "permit": "izin vermek",
  "authorize": "yetki vermek",
  "ban": "yasaklamak",
  "prohibit": "yasaklamak",
  "limit": "sınırlamak",
  "exceed": "aşmak, geçmek",
  "surpass": "geçmek, aşmak",
  "outperform": "daha iyi performans göstermek",
  "dominate": "hakim olmak, üstün olmak",
  "influence": "etkilemek",
  "mold": "şekillendirmek, kalıba dökmek",
  "form": "oluşturmak, biçimlendirmek",
  "generate": "üretmek, oluşturmak",
  "manufacture": "üretmek, imal etmek",
  "assemble": "monte etmek, bir araya getirmek",
  "invent": "icat etmek",
  "innovate": "yenilik yapmak",
  "upgrade": "yükseltmek, geliştirmek",
  "maintain": "sürdürmek, bakımını yapmak",
  "sustain": "sürdürmek, desteklemek",
  "preserve": "korumak, muhafaza etmek",
  "conserve": "korumak, tasarruflu kullanmak",
  "defend": "savunmak",
  "invade": "istila etmek",
  "retreat": "geri çekilmek",
  "surrender": "teslim olmak",
  "resist": "direnmek, karşı koymak",
  "withstand": "dayanmak, karşı koymak",
  "endure": "dayanmak, katlanmak",
  "tolerate": "tahammül etmek, hoşgörmek",
  "cope with": "baş etmek, üstesinden gelmek",
  "worry": "kaygılanmak, merak etmek",
  "relax": "rahatlamak, gevşemek",
  "calm down": "sakinleşmek",
  "freeze": "donmak, dondurmak",
  "melt": "erimek, eritmek",
  "boil": "kaynamak, kaynatmak",
  "bake": "fırında pişirmek",
  "chop": "doğramak, kesmek",
  "pour": "dökmek",
  "stir": "karıştırmak",
  "mix": "karıştırmak, harmanlamak",
  "spill": "dökmek, saçmak",
  "wrap": "sarmak, paketlemek",
  "tie": "bağlamak",
  "lock": "kilitlemek",
  "unlock": "kilidini açmak",
  "breathe": "nefes almak",
  "sneeze": "hapşırmak",
  "cough": "öksürmek",
  "faint": "bayılmak",
  "recover": "iyileşmek, toparlanmak",
  "heal": "iyileşmek, şifa vermek",
  "cure": "tedavi etmek, iyileştirmek",
  "infect": "bulaştırmak, enfekte etmek",
  "vaccinate": "aşılamak"
};

function cleanWordKey(str) {
  return str.toLowerCase().replace(/\s*\([^)]*\)/g, '').replace(/noun\.,/g, '').trim();
}

function getPlacementOptions(targetWord, allSequence) {
  const wKey = cleanWordKey(targetWord);
  // Always use the JSON dictionary - never fall back to showing the word itself as definition
  let correctDef = placementDict[wKey] || placementDict[targetWord.toLowerCase()];
  if (!correctDef || correctDef === targetWord || correctDef === targetWord.toLowerCase()) {
    correctDef = "(" + wKey + " - tanım bulunamadı)";
  }

  const targetObj = { id: targetWord, word: targetWord, definition: correctDef, isCorrect: true };

  // Filter out words whose cleaned keys match target, to avoid same-looking options
  const otherWords = allSequence.filter(w => cleanWordKey(w.word) !== wKey);
  const shuffledOthers = [...otherWords].sort(() => Math.random() - 0.5);

  const wrongOptions = [];
  const usedDefs = new Set([correctDef]);

  for (const item of shuffledOthers) {
    const itemKey = cleanWordKey(item.word);
    let wDef = placementDict[itemKey] || placementDict[item.word.toLowerCase()];
    if (!wDef || wDef === item.word || wDef === item.word.toLowerCase()) {
      continue; // Skip if we'd show the word itself as definition
    }
    if (!usedDefs.has(wDef)) {
      usedDefs.add(wDef);
      wrongOptions.push({ id: item.word + '_' + wrongOptions.length, word: item.word, definition: wDef, isCorrect: false });
      if (wrongOptions.length === 3) break;
    }
  }

  // Meaningful fallbacks if not enough distractors found
  const fallbackDefs = [
    "önemli, esaslı", "geliştirmek, ilerletmek", "kabul etmek, onaylamak",
    "karşılaşmak, yüzleşmek", "etkilemek, değiştirmek", "oluşturmak, kurmak",
    "sonuç, netice", "bağlantı, ilişki", "özellik, nitelik", "sağlamak, temin etmek",
    "karar vermek", "analiz etmek", "değerlendirmek", "uygulama, pratiğe dökmek"
  ];
  let fIdx = 0;
  while (wrongOptions.length < 3 && fIdx < fallbackDefs.length * 2) {
    const fDef = fallbackDefs[fIdx % fallbackDefs.length];
    if (!usedDefs.has(fDef)) {
      usedDefs.add(fDef);
      wrongOptions.push({ id: 'fallback_' + wrongOptions.length, word: 'fallback', definition: fDef, isCorrect: false });
    }
    fIdx++;
  }

  return [targetObj, ...wrongOptions].sort(() => Math.random() - 0.5);
}


import { api } from './api';
import { useState, useEffect, useMemo, useRef } from "react";
import { BookOpen, Plus, BarChart2, Check, X, RotateCcw, Search, Trash2, Layers, ArrowRight, Sparkles, PenLine, Mail, MessageSquare, Clock, Send, GraduationCap, Pause, Info, Type, Shuffle, ChevronRight, ChevronDown, AlertCircle, Award, Target, Zap, Brain, TrendingUp, BookMarked, CheckCircle, ChevronLeft } from "lucide-react";
import grammarData from "./data/toefl_grammar_content.json";
import HomeDashboard from "./components/HomeDashboard.jsx";
import ToeflPrep2026 from "./components/ToeflPrep2026.jsx";

const STORAGE_KEY = "toefl-vocab-words";

const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36);

function makeWord(word, definition, example, category) {
  return {
    id: uid(),
    word: word.trim(),
    definition: definition.trim(),
    example: (example || "").trim(),
    category: category || "Genel",
    box: 1,
    correctCount: 0,
    wrongCount: 0,
    lastReviewed: null,
  };
}

function categoryColor(category) {
  const palette = [
    { bg: "#EFE3D6", fg: "#8A5A2B" },
    { bg: "#DCE7EA", fg: "#2E6B78" },
    { bg: "#E6E0F0", fg: "#5D4A8C" },
    { bg: "#E4EAD8", fg: "#4C6B31" },
    { bg: "#F0DEE0", fg: "#93445A" },
    { bg: "#DEE6F0", fg: "#3A5A8C" },
    { bg: "#F0E8D0", fg: "#8C7423" },
    { bg: "#E0EDE8", fg: "#2E7A5F" },
  ];
  let hash = 0;
  for (let i = 0; i < category.length; i++) hash = (hash * 31 + category.charCodeAt(i)) % palette.length;
  return palette[Math.abs(hash) % palette.length];
}

function weightForBox(box) {
  // box 1 -> weight 5 (en sık), box 5 -> weight 1 (en seyrek)
  return 6 - box;
}

function pickWeighted(pool, n) {
  const chosen = [];
  const candidates = [...pool];
  while (candidates.length && chosen.length < n) {
    const weights = candidates.map((w) => weightForBox(w.box));
    const total = weights.reduce((a, b) => a + b, 0);
    let r = Math.random() * total;
    let idx = 0;
    for (; idx < weights.length; idx++) {
      r -= weights[idx];
      if (r <= 0) break;
    }
    idx = Math.min(idx, candidates.length - 1);
    chosen.push(candidates[idx]);
    candidates.splice(idx, 1);
  }
  return chosen;
}

export default function App() {
  const [words, setWords] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState("home");
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  useEffect(() => {
    (async () => {
      let initialWords = [];
      try {
        const cached = await window.storage.get(STORAGE_KEY);
        if (cached && cached.value) {
          const parsedWords = JSON.parse(cached.value);
          if (Array.isArray(parsedWords) && parsedWords.length > 0) {
            initialWords = parsedWords.map((w) => ({ ...w, category: w.category || "Genel" }));
            setWords(initialWords);
          }
        }
      } catch (e) {
        console.warn("Storage get warning:", e);
      }

      try {
        const apiWords = await api.getWords();
        if (Array.isArray(apiWords)) {
          if (apiWords.length > 0) {
            setWords(apiWords);
            await window.storage.set(STORAGE_KEY, JSON.stringify(apiWords));
          } else if (initialWords.length > 0) {
            // Sync local storage words to backend if backend DB is empty
            const bulkText = initialWords.map((w) => `${w.word} - ${w.definition}`).join("\n");
            api.addBulkWords(bulkText, "Genel").catch(() => {});
          }
        }
      } catch (err) {
        console.warn("Backend sync notice:", err);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  const persist = async (next) => {
    setWords(next);
    try {
      await window.storage.set(STORAGE_KEY, JSON.stringify(next));
    } catch (e) {
      console.warn("Persist storage error:", e);
    }
  };

  const refetchWords = async () => {
    try {
      const data = await api.getWords();
      if (Array.isArray(data)) {
        setWords(data);
        await window.storage.set(STORAGE_KEY, JSON.stringify(data));
        return data;
      }
    } catch (e) {
      console.warn("refetchWords failed:", e);
    }
    return words;
  };
  
  const showToast = (msg, kind = "ok") => {
    setToast({ msg, kind });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2200);
  };

  if (!loaded) {
    return (
      <div style={styles.page}>
        <FontLoader />
        <div style={{ ...styles.center, height: "100%" }}>
          <div style={styles.loadingDot} />
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <FontLoader />
      <Header view={view} setView={setView} wordCount={words.length} />
      <main style={styles.main}>
        {view === "home" && <HomeDashboard words={words} setView={setView} />}
        {view === "list" && (
          <WordList
            words={words}
            onDelete={async (id) => {
              const updated = words.filter((w) => w.id !== id);
              setWords(updated);
              await window.storage.set(STORAGE_KEY, JSON.stringify(updated));
              try {
                await api.deleteWord(id);
              } catch (e) {
                console.warn("Delete API warning:", e);
              }
              showToast("Kelime silindi");
            }}
            setView={setView}
          />
        )}
        {view === "add" && (
          <AddWords
            existingWords={words}
            onAdd={async (newWords, rawText, category) => {
              if (!newWords || newWords.length === 0) {
                showToast("Eklenecek kelime bulunamadı", "error");
                return;
              }

              const existingKeys = new Set(words.map((w) => w.word.toLowerCase()));
              const filteredNew = newWords.filter((w) => !existingKeys.has(w.word.toLowerCase()));
              
              if (filteredNew.length === 0) {
                showToast("Bu kelimeler zaten kart kutunda mevcut");
                setView("list");
                return;
              }

              const merged = [...words, ...filteredNew];
              setWords(merged);
              await window.storage.set(STORAGE_KEY, JSON.stringify(merged));

              const finalCategory = category || filteredNew[0]?.category || "Genel";
              const finalRawText = rawText || filteredNew.map((w) => `${w.word} - ${w.definition}`).join("\n");

              try {
                const res = await api.addBulkWords(finalRawText, finalCategory);
                if (res && res.added !== undefined) {
                  await refetchWords();
                }
              } catch (apiErr) {
                console.warn("Backend add warning (preserved locally):", apiErr);
              }

              showToast(filteredNew.length > 1 ? `${filteredNew.length} kelime eklendi` : "Kelime eklendi");
              setView("list");
            }}
          />
        )}
        {view === "quiz" && <Quiz words={words} onUpdate={persist} />}
        {view === "stats" && <Stats words={words} />}
        {view === "writing" && <Writing />}
        {view === "placement" && (
          <PlacementTest
            existingWords={words}
            onImportWords={async (newWords) => {
              const existingKeys = new Set(words.map((w) => w.word.toLowerCase()));
              const filteredNew = newWords.filter((w) => !existingKeys.has(w.word.toLowerCase()));
              if (filteredNew.length === 0) {
                showToast("Bu kelimeler zaten kart kutunda mevcut");
                return;
              }
              const merged = [...words, ...filteredNew];
              setWords(merged);
              await window.storage.set(STORAGE_KEY, JSON.stringify(merged));

              const rawText = filteredNew.map((w) => `${w.word} - ${w.definition}`).join("\n");
              try {
                await api.addBulkWords(rawText, filteredNew[0]?.category || "Seviye Testi");
              } catch (e) {
                console.warn("Placement sync warning:", e);
              }
              showToast(`${filteredNew.length} kelime kart kutusuna eklendi`);
            }}
          />
        )}
        {view === "toefl" && <ToeflPrep2026 setView={setView} />}
        {view === "grammar" && <GrammarView />}
        {view === "complete" && <CompleteWords words={words} />}
        {view === "build" && <BuildSentence words={words} />}
      </main>
      {toast && (
        <div style={{ ...styles.toast, ...(toast.kind === "error" ? styles.toastError : {}) }}>{toast.msg}</div>
      )}
    </div>
  );
}

function FontLoader() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,500&family=Inter:wght@400;500;600;700&display=swap');
      * { box-sizing: border-box; }
    `}</style>
  );
}

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
};

const styles = {
  page: {
    minHeight: "100%",
    background: COLORS.paper,
    fontFamily: "'Inter', sans-serif",
    color: COLORS.ink,
    display: "flex",
    flexDirection: "column",
  },
  main: { flex: 1, padding: "24px 20px 60px", maxWidth: 640, margin: "0 auto", width: "100%" },
  center: { display: "flex", alignItems: "center", justifyContent: "center" },
  loadingDot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: COLORS.gold,
    animation: "pulse 1s infinite",
  },
  toast: {
    position: "fixed",
    bottom: 20,
    left: "50%",
    transform: "translateX(-50%)",
    background: COLORS.ink,
    color: COLORS.paper,
    padding: "10px 18px",
    borderRadius: 6,
    fontSize: 13,
    fontWeight: 500,
    boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
  },
  toastError: { background: COLORS.coral },
};

function Header({ view, setView, wordCount }) {
  const tabs = [
    { id: "home", label: "Ana Sayfa", icon: Target },
    { id: "toefl", label: "TOEFL 2026", icon: Info },
    { id: "list", label: "Kelimeler", icon: BookOpen },
    { id: "quiz", label: "Quiz", icon: Layers },
    { id: "complete", label: "Tamamla", icon: Type },
    { id: "build", label: "Cümle Kur", icon: Shuffle },
    { id: "writing", label: "Yazma", icon: PenLine },
    { id: "placement", label: "Seviye", icon: GraduationCap },
    { id: "stats", label: "İstatistik", icon: BarChart2 },
    { id: "grammar", label: "Gramer", icon: BookMarked },
];
  return (
    <header
      style={{
        borderBottom: `1px solid ${COLORS.paperLine}`,
        background: COLORS.paper,
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "22px 20px 0" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <div>
            <div
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: "-0.01em",
              }}
            >
              TOEFL Help
            </div>
            <div style={{ fontSize: 12.5, color: COLORS.inkSoft, marginTop: 2 }}>
              2026 formatına göre çalışma merkezi · {wordCount} kelime
            </div>
          </div>
          <button
            onClick={() => setView("add")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: COLORS.ink,
              color: COLORS.paper,
              border: "none",
              borderRadius: 6,
              padding: "9px 14px",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            <Plus size={15} /> Ekle
          </button>
        </div>
        <nav style={{ display: "flex", gap: 4, marginTop: 18, overflowX: "auto" }}>
          {tabs.map((t) => {
            const active = view === t.id;
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setView(t.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "transparent",
                  border: "none",
                  borderBottom: active ? `2px solid ${COLORS.gold}` : "2px solid transparent",
                  padding: "8px 4px 10px",
                  marginRight: 18,
                  flexShrink: 0,
                  whiteSpace: "nowrap",
                  fontSize: 13.5,
                  fontWeight: 600,
                  color: active ? COLORS.ink : COLORS.inkSoft,
                  cursor: "pointer",
                }}
              >
                <Icon size={15} /> {t.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

function BoxBadge({ box }) {
  const labels = { 1: "Yeni", 2: "Zayıf", 3: "Orta", 4: "İyi", 5: "Ustalaştı" };
  const bg = box >= 4 ? COLORS.mossSoft : box <= 2 ? COLORS.coralSoft : COLORS.goldSoft;
  const fg = box >= 4 ? COLORS.moss : box <= 2 ? COLORS.coral : COLORS.gold;
  return (
    <span
      style={{
        fontSize: 11,
        fontWeight: 700,
        padding: "3px 8px",
        borderRadius: 20,
        background: bg,
        color: fg,
        whiteSpace: "nowrap",
      }}
    >
      {labels[box]}
    </span>
  );
}

function CategoryBadge({ category }) {
  const { bg, fg } = categoryColor(category);
  return (
    <span
      style={{
        fontSize: 11,
        fontWeight: 700,
        padding: "3px 8px",
        borderRadius: 20,
        background: bg,
        color: fg,
        whiteSpace: "nowrap",
      }}
    >
      {category}
    </span>
  );
}

function WordList({ words, onDelete, setView }) {
  const [q, setQ] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const categories = useMemo(() => ["Tümü", ...Array.from(new Set(words.map((w) => w.category)))], [words]);
  const filtered = useMemo(
    () =>
      words.filter(
        (w) =>
          (activeCategory === "Tümü" || w.category === activeCategory) &&
          (w.word.toLowerCase().includes(q.toLowerCase()) || w.definition.toLowerCase().includes(q.toLowerCase()))
      ),
    [words, q, activeCategory]
  );

  if (words.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 20, marginBottom: 8 }}>
          Kart kutun boş
        </div>
        <p style={{ color: COLORS.inkSoft, fontSize: 14, marginBottom: 20, lineHeight: 1.5 }}>
          Rastgele kelime eklemek yerine önce seviyeni ölçebilir, sonra bilmediğin kelimeleri kartlara aktarabilirsin.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, maxWidth: 420, margin: "0 auto 12px" }}>
          <button
            onClick={() => setView("placement")}
            style={{
              background: COLORS.ink,
              color: COLORS.paper,
              border: "none",
              borderRadius: 8,
              padding: "12px 14px",
              fontSize: 13.5,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Seviye testiyle başla
          </button>
          <button
            onClick={() => setView("add")}
            style={{
              background: COLORS.card,
              color: COLORS.ink,
              border: `1px solid ${COLORS.paperLine}`,
              borderRadius: 8,
              padding: "12px 14px",
              fontSize: 13.5,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Manuel kelime ekle
          </button>
        </div>
        <button
          onClick={() => setView("home")}
          style={{
            background: "transparent",
            border: "none",
            color: COLORS.gold,
            fontSize: 13,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Çalışma akışını göster
        </button>
      </div>
    );
  }

  return (
    <div>
      {categories.length > 2 && (
        <div style={{ display: "flex", gap: 6, marginBottom: 12, overflowX: "auto", paddingBottom: 4 }}>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              style={{
                flexShrink: 0,
                padding: "6px 12px",
                borderRadius: 20,
                border: `1px solid ${activeCategory === c ? COLORS.ink : COLORS.paperLine}`,
                background: activeCategory === c ? COLORS.ink : "transparent",
                color: activeCategory === c ? COLORS.paper : COLORS.inkSoft,
                fontSize: 12.5,
                fontWeight: 600,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {c}
            </button>
          ))}
        </div>
      )}
      <div style={{ position: "relative", marginBottom: 18 }}>
        <Search size={15} style={{ position: "absolute", left: 12, top: 12, color: COLORS.inkSoft }} />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Kelime veya anlam ara..."
          style={{
            width: "100%",
            padding: "10px 12px 10px 34px",
            borderRadius: 6,
            border: `1px solid ${COLORS.paperLine}`,
            fontSize: 13.5,
            fontFamily: "inherit",
            background: COLORS.card,
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {filtered.map((w, i) => (
          <div
            key={w.id}
            style={{
              background: COLORS.card,
              border: `1px solid ${COLORS.paperLine}`,
              borderRadius: 8,
              padding: "14px 16px",
              display: "flex",
              justifyContent: "space-between",
              gap: 12,
              alignItems: "flex-start",
            }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "'Source Serif 4', serif", fontSize: 17, fontWeight: 600 }}>
                  {w.word}
                </span>
                <CategoryBadge category={w.category} />
                <BoxBadge box={w.box} />
              </div>
              <div style={{ fontSize: 13.5, color: COLORS.ink, marginTop: 4, lineHeight: 1.45 }}>
                {w.definition}
              </div>
              {w.example && (
                <div style={{ fontSize: 12.5, color: COLORS.inkSoft, marginTop: 4, fontStyle: "italic" }}>
                  “{w.example}”
                </div>
              )}
            </div>
            <button
              onClick={() => onDelete(w.id)}
              aria-label="Sil"
              style={{
                background: "transparent",
                border: "none",
                color: COLORS.inkSoft,
                cursor: "pointer",
                padding: 4,
                flexShrink: 0,
              }}
            >
              <Trash2 size={15} />
            </button>
          </div>
        ))}
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", color: COLORS.inkSoft, padding: 30, fontSize: 13.5 }}>
            Sonuç bulunamadı.
          </div>
        )}
      </div>
    </div>
  );
}

const COMMON_VERBS_RAW = `
be - olmak
have - sahip olmak
do - yapmak
say - söylemek
get - almak, elde etmek
make - yapmak, üretmek
go - gitmek
know - bilmek
take - almak
see - görmek
come - gelmek
think - düşünmek
look - bakmak
want - istemek
give - vermek
use - kullanmak
find - bulmak
tell - söylemek, anlatmak
ask - sormak
work - çalışmak
seem - görünmek
feel - hissetmek
try - denemek
leave - ayrılmak, terk etmek
call - aramak, çağırmak
need - ihtiyaç duymak
become - olmak, haline gelmek
put - koymak
mean - anlamına gelmek
keep - tutmak, korumak
let - izin vermek, bırakmak
begin - başlamak
show - göstermek
hear - işitmek
play - oynamak
run - koşmak
move - hareket etmek, taşınmak
like - sevmek, beğenmek
live - yaşamak
believe - inanmak
hold - tutmak
bring - getirmek
happen - olmak, gerçekleşmek
write - yazmak
sit - oturmak
stand - ayakta durmak
lose - kaybetmek
pay - ödemek
meet - buluşmak, tanışmak
include - içermek, dahil etmek
continue - sürdürmek, devam etmek
set - ayarlamak, koymak
learn - öğrenmek
change - değiştirmek
lead - yönetmek, öncülük etmek
understand - anlamak
watch - izlemek
follow - takip etmek
stop - durdurmak, durmak
create - yaratmak, oluşturmak
speak - konuşmak
read - okumak
allow - izin vermek
add - eklemek
grow - büyümek
open - açmak
walk - yürümek
win - kazanmak
offer - teklif etmek, sunmak
remember - hatırlamak
love - sevmek
consider - düşünmek, göz önünde bulundurmak
appear - görünmek, ortaya çıkmak
buy - satın almak
wait - beklemek
serve - hizmet etmek
die - ölmek
send - göndermek
expect - beklemek, ummak
build - inşa etmek, kurmak
stay - kalmak
fall - düşmek
cut - kesmek
reach - ulaşmak, erişmek
kill - öldürmek
remain - kalmak, devam etmek
suggest - önermek
raise - yükseltmek, kaldırmak
pass - geçmek
sell - satmak
require - gerektirmek
report - bildirmek, rapor etmek
decide - karar vermek
pull - çekmek
return - geri dönmek, iade etmek
explain - açıklamak
hope - ummak
develop - geliştirmek
carry - taşımak
break - kırmak
receive - almak, kabul etmek
agree - kabul etmek, hemfikir olmak
support - desteklemek
hit - vurmak
produce - üretmek
eat - yemek
cover - kaplamak, örtmek
catch - yakalamak
draw - çizmek
choose - seçmek
wonder - merak etmek
arrive - varmak, ulaşmak
involve - içermek, dahil etmek
fight - savaşmak, kavga etmek
teach - öğretmek
force - zorlamak
bear - taşımak, katlanmak
deal - ilgilenmek, uğraşmak
sing - şarkı söylemek
drop - düşürmek, bırakmak
drive - araba sürmek
wear - giymek
cause - sebep olmak
save - kurtarmak, biriktirmek
control - kontrol etmek
face - yüz yüze gelmek, karşılaşmak
plan - planlamak
join - katılmak
increase - artırmak, artmak
push - itmek
burn - yanmak, yakmak
protect - korumak
determine - belirlemek, kararlaştırmak
seek - aramak, çalışmak
base - temellendirmek
discuss - tartışmak, ele almak
indicate - belirtmek, işaret etmek
describe - tanımlamak, betimlemek
finish - bitirmek
warn - uyarmak
treat - davranmak, tedavi etmek
shape - şekillendirmek
train - eğitmek, antrenman yapmak
share - paylaşmak
represent - temsil etmek
relate - ilişkilendirmek, bağlantı kurmak
reduce - azaltmak
jump - atlamak, zıplamak
affect - etkilemek
prepare - hazırlamak
depend - bağlı olmak, güvenmek
exist - var olmak
wish - dilemek
throw - fırlatmak, atmak
avoid - kaçınmak, önlemek
rise - yükselmek
hang - asmak, sarkmak
sound - ses çıkarmak, kulağa gelmek
accept - kabul etmek
contain - içermek
figure out - çözmek, anlamak
imagine - hayal etmek
deliver - teslim etmek
laugh - gülmek
improve - geliştirmek, iyileştirmek
matter - önemli olmak
lay - yatırmak, koymak
define - tanımlamak
suffer - acı çekmek, katlanmak
focus - odaklanmak
compare - karşılaştırmak
claim - iddia etmek, talep etmek
observe - gözlemlemek
list - listelemek
count - saymak
recognize - tanımak, fark etmek
survive - hayatta kalmak
remove - kaldırmak, çıkarmak
attend - katılmak, gitmek
adopt - benimsemek, evlat edinmek
connect - bağlamak
arrange - düzenlemek, ayarlamak
prove - kanıtlamak
release - serbest bırakmak, yayınlamak
tend - eğilim göstermek
attack - saldırmak
pick - seçmek, toplamak
fly - uçmak
gain - kazanmak, elde etmek
perform - gerçekleştirmek, sergilemek
identify - tanımlamak, belirlemek
march - yürüyüş yapmak, ilerlemek
address - ele almak, hitap etmek
skip - atlamak, kaçırmak
cook - yemek pişirmek
wash - yıkamak
clean - temizlemek
sleep - uyumak
dream - hayal kurmak, rüya görmek
shout - bağırmak
whisper - fısıldamak
smile - gülümsemek
cry - ağlamak
dance - dans etmek
paint - boyamak, resim yapmak
climb - tırmanmak
swim - yüzmek
travel - seyahat etmek
visit - ziyaret etmek
enjoy - hoşlanmak, zevk almak
hate - nefret etmek
forget - unutmak
remind - hatırlatmak
promise - söz vermek
refuse - reddetmek
admit - kabul etmek, itiraf etmek
deny - inkâr etmek
blame - suçlamak
forgive - bağışlamak, affetmek
thank - teşekkür etmek
apologize - özür dilemek
celebrate - kutlamak
invite - davet etmek
greet - selamlamak
introduce - tanıştırmak, tanıtmak
announce - duyurmak, ilan etmek
mention - bahsetmek
express - ifade etmek
argue - tartışmak, iddia etmek
complain - şikayet etmek
persuade - ikna etmek
convince - ikna etmek
encourage - teşvik etmek, cesaretlendirmek
discourage - caydırmak
threaten - tehdit etmek
rely - güvenmek, bel bağlamak
trust - güvenmek
doubt - şüphe etmek
guess - tahmin etmek
assume - varsaymak
predict - tahmin etmek, önceden bildirmek
estimate - tahmin etmek, hesaplamak
calculate - hesaplamak
measure - ölçmek
weigh - tartmak, ağırlığında olmak
compete - rekabet etmek, yarışmak
cooperate - işbirliği yapmak
collaborate - birlikte çalışmak
negotiate - müzakere etmek, pazarlık etmek
manage - yönetmek, başarmak
organize - düzenlemek, organize etmek
schedule - programlamak, planlamak
delay - geciktirmek
postpone - ertelemek
cancel - iptal etmek
confirm - onaylamak
approve - onaylamak
reject - reddetmek
select - seçmek
sort - sınıflandırmak, ayırmak
classify - sınıflandırmak
combine - birleştirmek
separate - ayırmak
divide - bölmek, ayırmak
link - bağlamak, ilişkilendirmek
attach - eklemek, iliştirmek
detach - ayırmak, çıkarmak
fix - onarmak, sabitlemek
repair - tamir etmek
damage - zarar vermek, hasar vermek
destroy - yok etmek, tahrip etmek
construct - inşa etmek, kurmak
demolish - yıkmak
establish - kurmak, tesis etmek
found - kurmak (bir kuruluş)
launch - başlatmak, piyasaya sürmek
initiate - başlatmak
terminate - sonlandırmak
complete - tamamlamak
accomplish - başarmak, gerçekleştirmek
achieve - başarmak, elde etmek
succeed - başarılı olmak
fail - başarısız olmak
attempt - denemek, girişimde bulunmak
struggle - mücadele etmek, zorlanmak
cope - baş etmek, üstesinden gelmek
handle - ele almak, üstesinden gelmek
resolve - çözmek, karar vermek
solve - çözmek
tackle - üstesinden gelmek, ele almak
investigate - araştırmak, soruşturmak
examine - incelemek, muayene etmek
inspect - denetlemek, incelemek
analyze - analiz etmek, çözümlemek
evaluate - değerlendirmek
assess - değerlendirmek
review - gözden geçirmek, incelemek
revise - gözden geçirip düzeltmek
edit - düzenlemek (metin)
publish - yayımlamak
print - basmak
distribute - dağıtmak
transport - taşımak, nakletmek
transfer - transfer etmek, aktarmak
shift - kaydırmak, değiştirmek
adjust - ayarlamak, uyarlamak
adapt - uyum sağlamak, uyarlamak
modify - değiştirmek, üzerinde değişiklik yapmak
alter - değiştirmek
transform - dönüştürmek
convert - dönüştürmek, çevirmek
translate - çevirmek (dil)
interpret - yorumlamak, tercüme etmek
clarify - açıklığa kavuşturmak
illustrate - göstermek, açıklamak (örnekle)
demonstrate - göstermek, kanıtlamak
emphasize - vurgulamak, önem vermek
highlight - vurgulamak, öne çıkarmak
stress - vurgulamak, stres yapmak
concentrate - odaklanmak, yoğunlaşmak
distract - dikkati dağıtmak
ignore - görmezden gelmek, ihmal etmek
neglect - ihmal etmek
overlook - gözden kaçırmak, görmezden gelmek
notice - fark etmek
detect - tespit etmek, algılamak
discover - keşfetmek
reveal - ortaya çıkarmak, açığa vurmak
hide - gizlemek, saklanmak
conceal - gizlemek
disguise - gizlemek, kılık değiştirmek
pretend - numara yapmak, taklit etmek
imitate - taklit etmek
copy - kopyalamak, taklit etmek
replace - değiştirmek, yerine koymak
substitute - yerine koymak, ikame etmek
exchange - değiş tokuş yapmak
trade - ticaret yapmak, takas etmek
purchase - satın almak
rent - kiralamak
lease - kiralamak (uzun süreli)
borrow - ödünç almak
lend - ödünç vermek
owe - borçlu olmak
donate - bağışlamak
contribute - katkıda bulunmak
invest - yatırım yapmak
earn - kazanmak (para)
spend - harcamak, geçirmek
waste - israf etmek, boşa harcamak
afford - gücü yetmek, karşılayabilmek
cost - maliyeti olmak
charge - ücretlendirmek, şarj etmek
refund - geri ödemek
tax - vergilendirmek
budget - bütçelemek
forecast - tahmin etmek, öngörmek
intend - niyet etmek, amaçlamak
aim - hedeflemek, amaçlamak
target - hedeflemek
pursue - takip etmek, sürdürmek
chase - kovalamak
escape - kaçmak
flee - kaçmak, firar etmek
search - aramak
explore - keşfetmek, araştırmak
find out - öğrenmek, ortaya çıkarmak
realize - fark etmek, anlamak
acknowledge - kabul etmek, teyit etmek
confess - itiraf etmek
disclose - açıklamak, ifşa etmek
leak - sızdırmak
broadcast - yayınlamak (radyo/tv)
declare - ilan etmek, beyan etmek
state - belirtmek, ifade etmek
assert - iddia etmek, öne sürmek
insist - üstelemek, ısrar etmek
demand - talep etmek
request - rica etmek, talep etmek
beg - yalvarmak, rica etmek
plead - yalvarmak, savunmak (hukuk)
urge - teşvik etmek, sıkıştırmak
recommend - önermek, tavsiye etmek
advise - tavsiye etmek, öğüt vermek
caution - uyarmak, dikkatli olmasını söylemek
inform - bilgilendirmek
notify - bildirmek, haber vermek
update - güncellemek
brief - bilgi vermek, özetlemek
instruct - talimat vermek, öğretmek
guide - yönlendirmek, kılavuzluk etmek
direct - yönetmek, yönlendirmek
supervise - denetlemek, gözetmek
monitor - izlemek, denetlemek
oversee - denetlemek, gözetim yapmak
audit - denetlemek (mali)
rate - değerlendirmek, puanlamak
rank - sıralamak
grade - notlandırmak, derecelendirmek
score - puan almak, puan vermek
test - test etmek, sınamak
quiz - sınav yapmak, sorgulamak
practice - pratik yapmak, uygulamak
exercise - egzersiz yapmak
coach - koçluk yapmak, antrenörlük yapmak
mentor - rehberlik etmek
tutor - özel ders vermek
educate - eğitmek
graduate - mezun olmak
enroll - kayıt olmak
register - kaydolmak, kayıt etmek
apply - başvurmak, uygulamak
qualify - hak kazanmak, yeterlilik kazanmak
certify - onaylamak, sertifikalandırmak
license - lisans vermek, ruhsatlandırmak
permit - izin vermek
authorize - yetki vermek
ban - yasaklamak
prohibit - yasaklamak
restrict - kısıtlamak
limit - sınırlamak
exceed - aşmak, geçmek
surpass - geçmek, aşmak
outperform - daha iyi performans göstermek
dominate - hakim olmak, üstün olmak
influence - etkilemek
impact - etkilemek, etki yapmak
mold - şekillendirmek, kalıba dökmek
form - oluşturmak, biçimlendirmek
generate - üretmek, oluşturmak
manufacture - üretmek, imal etmek
assemble - monte etmek, bir araya getirmek
design - tasarlamak
invent - icat etmek
innovate - yenilik yapmak
upgrade - yükseltmek, geliştirmek
maintain - sürdürmek, bakımını yapmak
sustain - sürdürmek, desteklemek
preserve - korumak, muhafaza etmek
conserve - korumak, tasarruflu kullanmak
defend - savunmak
invade - istila etmek
retreat - geri çekilmek
surrender - teslim olmak
resist - direnmek, karşı koymak
withstand - dayanmak, karşı koymak
endure - dayanmak, katlanmak
tolerate - tahammül etmek, hoşgörmek
cope with - baş etmek, üstesinden gelmek
worry - kaygılanmak, merak etmek
relax - rahatlamak, gevşemek
calm down - sakinleşmek
freeze - donmak, dondurmak
melt - erimek, eritmek
boil - kaynamak, kaynatmak
bake - fırında pişirmek
chop - doğramak, kesmek
pour - dökmek
stir - karıştırmak
mix - karıştırmak, harmanlamak
spill - dökmek, saçmak
wrap - sarmak, paketlemek
tie - bağlamak
lock - kilitlemek
unlock - kilidini açmak
breathe - nefes almak
sneeze - hapşırmak
cough - öksürmek
faint - bayılmak
recover - iyileşmek, toparlanmak
heal - iyileşmek, şifa vermek
cure - tedavi etmek, iyileştirmek
infect - bulaştırmak, enfekte etmek
vaccinate - aşılamak
`.trim();

const COMMON_TOEFL_VERBS_RAW = `
approach - yaklaşmak, bir konuya el almak
assess - değerlendirmek
benefit - fayda sağlamak, yararlanmak
consist - oluşmak, ibaret olmak
constitute - oluşturmak, teşkil etmek
contract - sözleşme yapmak, küçülmek
derive - türetmek, elde etmek
export - ihraç etmek
function - işlev görmek, çalışmak
issue - yayınlamak, çıkarmak
legislate - yasa çıkarmak
occur - meydana gelmek, olmak
proceed - ilerlemek, sürdürmek
process - işlemden geçirmek
research - araştırmak
respond - yanıt vermek, tepki vermek
vary - değişmek, çeşitlilik göstermek
acquire - edinmek, kazanmak
administrate - yönetmek, idare etmek
assist - yardım etmek
commission - görevlendirmek, sipariş vermek
compute - hesaplamak (bilgisayarla)
conclude - sonuçlandırmak, sonuca varmak
conduct - yürütmek, gerçekleştirmek
consume - tüketmek
credit - itibar etmek, hesaba geçirmek
design - tasarlamak
equate - eşit saymak, denk tutmak
feature - yer vermek, öne çıkarmak
impact - etkilemek, çarpmak
injure - yaralamak
institute - başlatmak, kurmak
obtain - elde etmek, edinmek
participate - katılmak
perceive - algılamak, idrak etmek
range - değişmek, uzanmak (bir aralıkta)
regulate - düzenlemek, denetlemek
reside - ikamet etmek, oturmak
restrict - kısıtlamak, sınırlamak
secure - güvence altına almak, elde etmek
survey - anket yapmak, incelemek
comment - yorum yapmak
compensate - tazmin etmek, karşılamak
consent - onay vermek, razı olmak
constrain - kısıtlamak, sınırlamak
convene - toplanmak, toplantı düzenlemek
coordinate - koordine etmek, eş güdümlemek
correspond - karşılık gelmek, yazışmak
deduce - çıkarım yapmak, sonuç çıkarmak
document - belgelemek, kayda geçirmek
imply - ima etmek, demek istemek
interact - etkileşimde bulunmak
justify - haklı çıkarmak, gerekçelendirmek
locate - yerini bulmak, konumlandırmak
maximise - en üst düzeye çıkarmak
negate - geçersiz kılmak, yok etmek
react - tepki vermek, reaksiyon göstermek
register - kaydolmak, kayıt yaptırmak
sequence - sıralamak, düzene koymak
specify - belirtmek, açıkça ifade etmek
attribute - atfetmek, bağlamak
commit - taahhüt etmek, işlemek (suç)
communicate - iletişim kurmak
confer - danışmak, müzakere etmek
contrast - karşılaştırmak, tezat oluşturmak
cycle - döngüyle hareket etmek
debate - tartışmak, münazara yapmak
emerge - ortaya çıkmak, belirmek
grant - bağışlamak, vermek (izin/hak)
implement - uygulamak, yürürlüğe koymak
implicate - suça karıştırmak, ima etmek
impose - dayatmak, empoze etmek
integrate - bütünleştirmek, entegre etmek
label - etiketlemek
occupy - işgal etmek, meşgul etmek
project - öngörmek, yansıtmak
promote - terfi ettirmek, tanıtmak
retain - elde tutmak, korumak
sum - toplamak, özetlemek
alter - değişiklik yapmak
amend - değişiklik yapmak, düzeltmek (yasa)
consult - danışmak, başvurmak
decline - azalmak, reddetmek
enable - mümkün kılmak, olanak sağlamak
enforce - uygulamak, zorla yürütmek
evolve - evrimleşmek, gelişmek
expand - genişletmek, büyümek
expose - ifşa etmek, maruz bırakmak
facilitate - kolaylaştırmak
orient - yönlendirmek, oryante etmek
aggregate - toplamak, birleştirmek
allocate - tahsis etmek, ayırmak
assign - atamak, görevlendirmek
cite - alıntı yapmak, örnek göstermek
discriminate - ayrımcılık yapmak, ayırt etmek
display - sergilemek, göstermek
diversify - çeşitlendirmek
enhance - geliştirmek, artırmak
incorporate - dahil etmek, birleştirmek
index - dizinlemek, endekslemek
inhibit - engellemek, baskılamak
migrate - göç etmek
precede - önce gelmek, öncesinde olmak
presume - varsaymak, zannetmek
trace - izini sürmek, saptamak
underlie - temelini oluşturmak, altında yatmak
utilise - kullanmak, yararlanmak
advocate - savunmak, desteklemek
comprise - içermek, oluşmak (parçalardan)
differentiate - ayırt etmek, farklılaştırmak
dispose - elden çıkarmak, atmak
eliminate - elemek, ortadan kaldırmak
equip - donatmak, teçhiz etmek
extract - çıkarmak, elde etmek (özüt)
guarantee - garanti etmek
infer - çıkarım yapmak, sonuç çıkarmak
insert - eklemek, araya sokmak
intervene - araya girmek, müdahale etmek
isolate - yalıtmak, tecrit etmek
quote - alıntı yapmak
reverse - tersine çevirmek, geri almak
submit - sunmak, teslim etmek (başvuru)
transmit - iletmek, aktarmak (sinyal/hastalık)
abandon - terk etmek, vazgeçmek
accompany - eşlik etmek, refakat etmek
append - eklemek, ilave etmek
appreciate - takdir etmek, değer vermek
`.trim();

const COMMON_ADJECTIVES_RAW = `
good - iyi
bad - kötü
big - büyük
small - küçük
large - büyük, geniş
little - küçük, az
high - yüksek
low - alçak, düşük
long - uzun
short - kısa
old - yaşlı, eski
new - yeni
young - genç
different - farklı
same - aynı
few - az sayıda
many - çok sayıda
other - diğer
right - doğru, sağ
wrong - yanlış
important - önemli
significant - önemli, belirgin
necessary - gerekli
possible - mümkün
impossible - imkânsız
likely - muhtemel
unlikely - olası olmayan
certain - kesin, belirli
sure - emin
clear - açık, net
obvious - açık, belli
apparent - görünen, açık
evident - belirgin, açık
particular - belirli, özel
specific - belirli, spesifik
general - genel
common - yaygın, ortak
rare - nadir
unique - eşsiz, benzersiz
typical - tipik
normal - normal
unusual - alışılmadık
strange - tuhaf, garip
weird - tuhaf, acayip
familiar - tanıdık
unfamiliar - tanıdık olmayan
similar - benzer
identical - aynı, özdeş
consistent - tutarlı
inconsistent - tutarsız
stable - kararlı, dengeli
unstable - kararsız
reliable - güvenilir
unreliable - güvenilmez
accurate - doğru, kesin
inaccurate - yanlış, hatalı
precise - kesin, hassas
vague - belirsiz, muğlak
ambiguous - belirsiz, iki anlamlı
complex - karmaşık
simple - basit
complicated - karmaşık, girift
straightforward - basit, anlaşılır
difficult - zor
easy - kolay
hard - zor, sert
tough - zor, sert
challenging - zorlayıcı, güç
demanding - zorlu, talepkar
convenient - uygun, elverişli
inconvenient - uygunsuz, elverişsiz
suitable - uygun
appropriate - uygun, yerinde
inappropriate - uygunsuz
adequate - yeterli
inadequate - yetersiz
sufficient - yeterli
insufficient - yetersiz
excessive - aşırı, fazla
extreme - aşırı, uç
moderate - ölçülü, orta düzeyde
minimal - minimum, en az
optimal - en uygun, optimal
efficient - verimli, etkili
inefficient - verimsiz
effective - etkili
ineffective - etkisiz
productive - üretken
valuable - değerli
worthless - değersiz
useful - faydalı, kullanışlı
useless - işe yaramaz
beneficial - yararlı, faydalı
harmful - zararlı
dangerous - tehlikeli
safe - güvenli
risky - riskli
secure - güvenli, sağlam
vulnerable - zarar görebilir, kırılgan
fragile - kırılgan, hassas
durable - dayanıklı
sturdy - sağlam, dayanıklı
flexible - esnek
rigid - sert, katı
solid - sağlam, katı
dense - yoğun
sparse - seyrek
thick - kalın
thin - ince
heavy - ağır
light - hafif, açık (renk)
strong - güçlü
weak - zayıf
powerful - güçlü, etkili
vigorous - güçlü, dinamik
active - aktif
passive - pasif
dynamic - dinamik
static - durağan
constant - sabit, sürekli
fixed - sabit
temporary - geçici
permanent - kalıcı, sürekli
brief - kısa süreli
lengthy - uzun (süre)
frequent - sık
infrequent - seyrek
occasional - ara sıra olan
regular - düzenli
irregular - düzensiz
gradual - kademeli, aşamalı
sudden - ani
immediate - anında, hemen
prompt - hızlı, çabuk
delayed - geciken, ertelenmiş
early - erken
late - geç
recent - son zamanlardaki
current - şimdiki, güncel
previous - önceki
subsequent - sonraki
initial - ilk, başlangıç
final - son, nihai
ultimate - nihai, en son
eventual - nihai, sonunda gerçekleşen
ongoing - süregelen, devam eden
pending - askıda, bekleyen
outstanding - üstün, ödenmemiş
remarkable - dikkat çekici, olağanüstü
extraordinary - olağanüstü
ordinary - sıradan
mediocre - vasat, orta düzey
exceptional - istisnai, olağanüstü
superior - üstün
inferior - aşağı, düşük kalite
equivalent - eşdeğer
comparable - karşılaştırılabilir
proportional - orantılı
relevant - ilgili, alakalı
irrelevant - ilgisiz, alakasız
crucial - çok önemli, kritik
critical - kritik, eleştirel
vital - hayati, temel
essential - gerekli, temel
fundamental - temel, esas
basic - temel, basit
advanced - ileri, gelişmiş
sophisticated - gelişmiş, karmaşık
elaborate - ayrıntılı, detaylı
detailed - detaylı, ayrıntılı
comprehensive - kapsamlı
thorough - kapsamlı, dikkatli
extensive - kapsamlı, geniş
limited - sınırlı
restricted - kısıtlı
exclusive - özel, münhasır
inclusive - kapsayıcı
diverse - çeşitli, farklı
uniform - tekdüze, aynı
homogeneous - homojen, tekdüze
heterogeneous - heterojen, çeşitli
abstract - soyut
concrete - somut
theoretical - teorik
practical - pratik, uygulamalı
realistic - gerçekçi
unrealistic - gerçekçi olmayan
optimistic - iyimser
pessimistic - kötümser
confident - kendine güvenen
anxious - kaygılı
nervous - gergin, sinirli
calm - sakin
relaxed - rahat, gevşemiş
tense - gergin
comfortable - rahat, konforlu
uncomfortable - rahatsız
satisfied - tatmin olmuş
dissatisfied - tatminsiz
content - hoşnut, tatmin olmuş
frustrated - hayal kırıklığına uğramış
disappointed - hayal kırıklığına uğramış
delighted - çok mutlu, sevinçli
thrilled - çok heyecanlı
excited - hevesli, heyecanlı
bored - sıkılmış
curious - meraklı
enthusiastic - hevesli, coşkulu
passionate - tutkulu
indifferent - kayıtsız, ilgisiz
reluctant - isteksiz, gönülsüz
eager - istekli, hevesli
willing - istekli, gönüllü
determined - kararlı, azimli
persistent - azimli, direngen
stubborn - inatçı
generous - cömert
selfish - bencil
humble - alçakgönüllü
arrogant - kibirli
honest - dürüst
dishonest - dürüst olmayan
loyal - sadık
faithful - sadık, vefalı
trustworthy - güvenilir
suspicious - şüpheci, kuşkulu
cautious - dikkatli, tedbirli
careless - dikkatsiz
careful - dikkatli
attentive - dikkatli, ilgili
negligent - ihmalkar
diligent - çalışkan, gayretli
lazy - tembel
ambitious - hırslı, azimli
modest - alçakgönüllü, mütevazı
polite - kibar
rude - kaba
aggressive - agresif, saldırgan
sociable - sosyal, girişken
shy - çekingen
outgoing - dışa dönük, sosyal
introverted - içe dönük
extroverted - dışa dönük
`.trim();

const COMMON_ADVERBS_RAW = `
quickly - hızlı bir şekilde
slowly - yavaşça
carefully - dikkatlice
carelessly - dikkatsizce
easily - kolayca
hardly - zorlukla, hemen hemen hiç
extremely - aşırı derecede
completely - tamamen
partially - kısmen
entirely - tamamen
totally - tamamen
absolutely - kesinlikle, tamamen
definitely - kesinlikle
probably - muhtemelen
possibly - muhtemelen, belki
certainly - kesinlikle
surely - kesinlikle, elbette
undoubtedly - şüphesiz
apparently - görünüşe göre
obviously - açıkça, belli ki
clearly - açıkça
evidently - besbelli, açıkça
seemingly - görünüşte
presumably - tahminen, muhtemelen
frequently - sık sık
often - genellikle, sık sık
rarely - nadiren
seldom - nadiren
occasionally - ara sıra
sometimes - bazen
always - her zaman
never - asla
usually - genellikle
generally - genel olarak
typically - tipik olarak
normally - normalde
constantly - sürekli
continuously - sürekli olarak
repeatedly - tekrar tekrar
eventually - sonunda
finally - sonunda, nihayet
immediately - hemen, anında
instantly - anında
gradually - kademeli olarak
suddenly - aniden
abruptly - ansızın, aniden
directly - doğrudan
indirectly - dolaylı olarak
particularly - özellikle
especially - özellikle
specifically - özellikle, belirli olarak
mainly - başlıca, esas olarak
primarily - başlıca, öncelikle
largely - büyük ölçüde
mostly - çoğunlukla
partly - kısmen
approximately - yaklaşık olarak
roughly - kabaca, yaklaşık
exactly - tam olarak, kesinlikle
precisely - tam olarak, kesin biçimde
virtually - hemen hemen, sanal olarak
practically - pratik olarak, hemen hemen
essentially - esasında, temelde
basically - temelde, esasen
ultimately - sonuçta, nihayetinde
consequently - sonuç olarak
therefore - bu nedenle
thus - böylece, bu nedenle
hence - bu nedenle, dolayısıyla
accordingly - buna göre, dolayısıyla
otherwise - aksi takdirde
nevertheless - bununla birlikte, yine de
nonetheless - yine de, buna karşın
however - ancak, yine de
moreover - ayrıca, üstelik
furthermore - ayrıca, bunun yanı sıra
additionally - ek olarak
similarly - benzer şekilde
likewise - aynı şekilde
conversely - tersine, aksine
instead - onun yerine
alternatively - alternatif olarak
meanwhile - bu arada
simultaneously - eş zamanlı olarak
increasingly - artan bir şekilde
significantly - önemli ölçüde
considerably - önemli derecede
substantially - önemli ölçüde
slightly - hafifçe, biraz
barely - ancak, güçbela
merely - sadece, yalnızca
simply - basitçe, sadece
literally - gerçek anlamda, tam anlamıyla
figuratively - mecazi olarak
genuinely - gerçekten, samimiyetle
honestly - dürüst olarak, açıkçası
sincerely - içtenlikle, samimiyetle
truly - gerçekten
actually - aslında
supposedly - sözde, iddiaya göre
allegedly - iddiaya göre, sözde
reportedly - bildirildiğine göre
personally - şahsen, kişisel olarak
individually - tek tek, bireysel olarak
collectively - toplu olarak, birlikte
jointly - birlikte, ortaklaşa
independently - bağımsız olarak
separately - ayrı ayrı
willingly - isteyerek, gönüllü olarak
reluctantly - isteksizce
deliberately - kasıtlı olarak
intentionally - kasıtlı olarak
accidentally - kazara, yanlışlıkla
unintentionally - istemeden, kasıtsızca
consistently - tutarlı bir şekilde
inevitably - kaçınılmaz olarak
undeniably - inkâr edilemez şekilde
arguably - tartışmaya açık olarak
theoretically - teorik olarak
technically - teknik olarak
officially - resmi olarak
formally - resmi bir şekilde
informally - gayri resmi olarak
publicly - alenen, kamuoyu önünde
privately - özel olarak, gizlice
locally - yerel olarak
globally - küresel olarak
internationally - uluslararası düzeyde
domestically - yurt içinde
temporarily - geçici olarak
permanently - kalıcı olarak
regularly - düzenli olarak
irregularly - düzensiz olarak
`.trim();

const NOUN_CATEGORIES = [
  {
    id: "egitim",
    label: "Eğitim",
    raw: `
education - eğitim
curriculum - müfredat
lecture - ders, konferans
assignment - ödev
research - araştırma
thesis - tez
degree - derece, diploma
scholarship - burs
tuition - öğrenim ücreti
faculty - fakülte, öğretim üyeleri
enrollment - kayıt
semester - dönem, sömestr
academy - akademi
literacy - okuryazarlık
knowledge - bilgi
skill - beceri
discipline - disiplin, alan
institution - kurum
instructor - eğitmen
professor - profesör
classroom - sınıf
textbook - ders kitabı
exam - sınav
grade - not
diploma - diploma
certificate - sertifika
seminar - seminer
workshop - çalıştay, atölye
syllabus - ders programı
questionnaire - anket, soru formu
methodology - yöntembilim, metodoloji
`.trim(),
  },
  {
    id: "is-ekonomi",
    label: "İş ve Ekonomi",
    raw: `
economy - ekonomi
market - pazar, piyasa
industry - sanayi, endüstri
corporation - şirket, kurum
enterprise - girişim, teşebbüs
revenue - gelir
profit - kar
loss - zarar
investment - yatırım
budget - bütçe
expense - gider, harcama
asset - varlık
liability - yükümlülük, borç
debt - borç
capital - sermaye
inflation - enflasyon
recession - durgunluk, resesyon
demand - talep
supply - arz
consumer - tüketici
customer - müşteri
transaction - işlem
contract - sözleşme
negotiation - müzakere
merger - şirket birleşmesi
acquisition - satın alma
strategy - strateji
competition - rekabet
monopoly - tekel
subsidy - sübvansiyon, destek
tariff - gümrük tarifesi
trade - ticaret
export - ihracat
import - ithalat
shareholder - hissedar
stakeholder - paydaş
`.trim(),
  },
  {
    id: "bilim-doga",
    label: "Bilim ve Doğa",
    raw: `
hypothesis - hipotez, varsayım
theory - teori
experiment - deney
observation - gözlem
evidence - kanıt
data - veri
analysis - analiz
conclusion - sonuç
variable - değişken
sample - örnek, numune
species - tür (canlı)
organism - organizma
ecosystem - ekosistem
habitat - yaşam alanı
evolution - evrim
gene - gen
molecule - molekül
atom - atom
particle - parçacık
energy - enerji
gravity - yer çekimi
radiation - radyasyon
climate - iklim
atmosphere - atmosfer
temperature - sıcaklık
pressure - basınç
mineral - mineral
fossil - fosil
extinction - yok olma, tükeniş
mutation - mutasyon
cell - hücre
bacteria - bakteri
virus - virüs
nutrient - besin öğesi
photosynthesis - fotosentez
`.trim(),
  },
  {
    id: "toplum-yonetim",
    label: "Toplum ve Yönetim",
    raw: `
government - hükümet
policy - politika
legislation - yasama, mevzuat
regulation - düzenleme, yönetmelik
citizen - vatandaş
democracy - demokrasi
election - seçim
constitution - anayasa
authority - yetki, otorite
bureaucracy - bürokrasi
diplomacy - diplomasi
treaty - anlaşma, antlaşma
sanction - yaptırım
justice - adalet
court - mahkeme
verdict - hüküm, karar
jury - jüri
lawsuit - dava
crime - suç
punishment - ceza
prison - hapishane
rights - haklar
freedom - özgürlük
equality - eşitlik
inequality - eşitsizlik
poverty - yoksulluk
welfare - refah, sosyal yardım
census - nüfus sayımı
population - nüfus
migration - göç
`.trim(),
  },
  {
    id: "saglik-gunluk",
    label: "Sağlık ve Günlük Yaşam",
    raw: `
health - sağlık
disease - hastalık
illness - hastalık, rahatsızlık
symptom - belirti
diagnosis - teşhis
treatment - tedavi
medication - ilaç, tedavi
therapy - terapi
surgery - ameliyat
patient - hasta
physician - doktor, hekim
nutrition - beslenme
diet - diyet, beslenme düzeni
exercise - egzersiz
fatigue - yorgunluk
immunity - bağışıklık
infection - enfeksiyon
vaccine - aşı
epidemic - salgın
hygiene - hijyen
wellness - iyi olma hali, esenlik
disability - engellilik
recovery - iyileşme
routine - rutin
household - ev halkı, hane
chore - ev işi
appointment - randevu
errand - ayak işi
grocery - market alışverişi
`.trim(),
  },
  {
    id: "teknoloji",
    label: "Teknoloji",
    raw: `
technology - teknoloji
device - cihaz
software - yazılım
hardware - donanım
algorithm - algoritma
database - veritabanı
network - ağ
server - sunucu
application - uygulama
interface - arayüz
innovation - yenilik, inovasyon
automation - otomasyon
robotics - robotik
artificial intelligence - yapay zeka
encryption - şifreleme
bandwidth - bant genişliği
storage - depolama
platform - platform
malfunction - arıza
glitch - küçük hata, arıza
prototype - prototip
simulation - simülasyon
component - bileşen, parça
circuit - devre
sensor - sensör, algılayıcı
firmware - yerleşik yazılım
chip - çip
protocol - protokol
`.trim(),
  },
  {
    id: "cevre",
    label: "Çevre",
    raw: `
environment - çevre
pollution - kirlilik
emission - emisyon, salım
sustainability - sürdürülebilirlik
conservation - koruma (doğa)
deforestation - ormansızlaşma
biodiversity - biyoçeşitlilik
renewable energy - yenilenebilir enerji
resource - kaynak
waste - atık
recycling - geri dönüşüm
drought - kuraklık
flood - sel
wildlife - yaban hayatı
greenhouse effect - sera etkisi
contamination - kirlenme
overpopulation - aşırı nüfus artışı
carbon footprint - karbon ayak izi
glacier - buzul
coral reef - mercan resifi
oil spill - petrol sızıntısı
ozone layer - ozon tabakası
landfill - çöp sahası
erosion - erozyon
sediment - tortu, çökelti
`.trim(),
  },
  {
    id: "sanat-kultur",
    label: "Sanat ve Kültür",
    raw: `
culture - kültür
tradition - gelenek
heritage - miras (kültürel)
custom - adet, örf
ritual - ritüel, ayin
ceremony - tören
literature - edebiyat
novel - roman
poetry - şiir
narrative - anlatı, öykü
character - karakter
plot - olay örgüsü
theme - tema
genre - tür (edebi/sanatsal)
symbolism - sembolizm
metaphor - metafor, mecaz
architecture - mimari
sculpture - heykel
painting - resim, tablo
exhibition - sergi
museum - müze
festival - festival
folklore - folklor, halk kültürü
artifact - eser, obje (tarihi)
masterpiece - başyapıt
`.trim(),
  },
  {
    id: "duygular-psikoloji",
    label: "Duygular ve Psikoloji",
    raw: `
emotion - duygu
anxiety - kaygı, anksiyete
depression - depresyon
motivation - motivasyon
perception - algı
behavior - davranış
personality - kişilik
attitude - tutum, davranış biçimi
memory - hafıza, bellek
awareness - farkındalık
consciousness - bilinç
subconscious - bilinçaltı
trauma - travma
resilience - dayanıklılık, direnç
empathy - empati
self-esteem - özgüven, öz saygı
frustration - hayal kırıklığı, engellenme
grief - keder, yas
curiosity - merak
confidence - özgüven
insecurity - güvensizlik
temperament - mizaç, huy
instinct - içgüdü
cognition - biliş, kavrama
bias - yanlılık, önyargı
`.trim(),
  },
];

function parseWordLines(text, category = "Genel") {
  if (!text) return [];
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  const parsed = [];
  const seen = new Set();
  for (const line of lines) {
    if (line.startsWith("#") || line.startsWith("//")) continue;
    let w = "", d = "";
    if (line.includes(" - ")) {
      const idx = line.indexOf(" - ");
      w = line.slice(0, idx).trim();
      d = line.slice(idx + 3).trim();
    } else if (line.includes(" — ")) {
      const idx = line.indexOf(" — ");
      w = line.slice(0, idx).trim();
      d = line.slice(idx + 3).trim();
    } else if (line.includes(" – ")) {
      const idx = line.indexOf(" – ");
      w = line.slice(0, idx).trim();
      d = line.slice(idx + 3).trim();
    } else if (line.includes(":")) {
      const idx = line.indexOf(":");
      w = line.slice(0, idx).trim();
      d = line.slice(idx + 1).trim();
    } else if (line.includes("=")) {
      const idx = line.indexOf("=");
      w = line.slice(0, idx).trim();
      d = line.slice(idx + 1).trim();
    } else if (line.includes("\t")) {
      const idx = line.indexOf("\t");
      w = line.slice(0, idx).trim();
      d = line.slice(idx + 1).trim();
    } else if (line.includes("-")) {
      const idx = line.indexOf("-");
      w = line.slice(0, idx).trim();
      d = line.slice(idx + 1).trim();
    } else if (line.includes(",")) {
      const idx = line.indexOf(",");
      w = line.slice(0, idx).trim();
      d = line.slice(idx + 1).trim();
    } else if (line.includes(";")) {
      const idx = line.indexOf(";");
      w = line.slice(0, idx).trim();
      d = line.slice(idx + 1).trim();
    }

    const key = w.toLowerCase();
    if (w && d && !seen.has(key)) {
      seen.add(key);
      parsed.push(makeWord(w, d, "", category));
    }
  }
  return parsed;
}

function AddWords({ onAdd, existingWords }) {
  const [mode, setMode] = useState("single"); // single | bulk | verbs | nouns
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [example, setExample] = useState("");
  const [bulkText, setBulkText] = useState("");
  const [category, setCategory] = useState("Genel");
  const [customCategory, setCustomCategory] = useState("");
  const [error, setError] = useState("");

  const existingCategories = useMemo(
    () => Array.from(new Set(existingWords.map((w) => w.category).filter(Boolean))),
    [existingWords]
  );
  const resolvedCategory = category === "__custom__" ? customCategory.trim() || "Genel" : category;

  const submitSingle = () => {
    if (!word.trim() || !definition.trim()) {
      setError("Kelime ve anlam alanı zorunlu.");
      return;
    }
    const rawText = `${word.trim()} - ${definition.trim()}`;
    onAdd([makeWord(word, definition, example, resolvedCategory)], rawText, resolvedCategory);
  };

  const submitBulk = () => {
    const parsed = parseWordLines(bulkText, resolvedCategory);
    if (parsed.length === 0) {
      setError("Satırları 'kelime - anlam' veya 'kelime: anlam' formatında yapıştır.");
      return;
    }
    onAdd(parsed, bulkText, resolvedCategory);
  };

  const seedCommonVerbs = () => {
    const existingKeys = new Set(existingWords.map((w) => w.word.toLowerCase()));
    const parsed = parseWordLines(COMMON_VERBS_RAW, "Fiil").filter((w) => !existingKeys.has(w.word.toLowerCase()));
    if (parsed.length === 0) {
      setError("Bu 500 fiil listesindeki tüm kelimeler zaten kart kutunda.");
      return;
    }
    onAdd(parsed, COMMON_VERBS_RAW, "Fiil");
  };

  const seedToeflVerbs = () => {
    const existingKeys = new Set(existingWords.map((w) => w.word.toLowerCase()));
    const parsed = parseWordLines(COMMON_TOEFL_VERBS_RAW, "Fiil").filter((w) => !existingKeys.has(w.word.toLowerCase()));
    if (parsed.length === 0) {
      setError("Bu akademik fiil listesindeki tüm kelimeler zaten kart kutunda.");
      return;
    }
    onAdd(parsed, COMMON_TOEFL_VERBS_RAW, "Fiil");
  };

  const seedCommonAdjectives = () => {
    const existingKeys = new Set(existingWords.map((w) => w.word.toLowerCase()));
    const parsed = parseWordLines(COMMON_ADJECTIVES_RAW, "Sıfat").filter((w) => !existingKeys.has(w.word.toLowerCase()));
    if (parsed.length === 0) {
      setError("Bu sıfat listesindeki tüm kelimeler zaten kart kutunda.");
      return;
    }
    onAdd(parsed, COMMON_ADJECTIVES_RAW, "Sıfat");
  };

  const seedCommonAdverbs = () => {
    const existingKeys = new Set(existingWords.map((w) => w.word.toLowerCase()));
    const parsed = parseWordLines(COMMON_ADVERBS_RAW, "Zarf").filter((w) => !existingKeys.has(w.word.toLowerCase()));
    if (parsed.length === 0) {
      setError("Bu zarf listesindeki tüm kelimeler zaten kart kutunda.");
      return;
    }
    onAdd(parsed, COMMON_ADVERBS_RAW, "Zarf");
  };

  const seedNounCategory = (cat) => {
    const existingKeys = new Set(existingWords.map((w) => w.word.toLowerCase()));
    const parsed = parseWordLines(cat.raw, cat.label).filter((w) => !existingKeys.has(w.word.toLowerCase()));
    if (parsed.length === 0) {
      setError(`"${cat.label}" kategorisindeki kelimeler zaten kart kutunda.`);
      return;
    }
    onAdd(parsed, cat.raw, cat.label);
  };

  return (
    <div>
      <div style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap" }}>
        {[
          { id: "single", label: "Tek kelime" },
          { id: "bulk", label: "Toplu ekle" },
          { id: "verbs", label: "500 fiil" },
          { id: "toeflverbs", label: "TOEFL akademik fiiller" },
          { id: "adjectives", label: "Sıfatlar" },
          { id: "adverbs", label: "Zarflar" },
          { id: "nouns", label: "İsim kategorileri" },
        ].map((m) => (
          <button
            key={m.id}
            onClick={() => {
              setMode(m.id);
              setError("");
            }}
            style={{
              flex: "1 1 auto",
              padding: "9px 8px",
              borderRadius: 6,
              border: `1px solid ${mode === m.id ? COLORS.ink : COLORS.paperLine}`,
              background: mode === m.id ? COLORS.ink : "transparent",
              color: mode === m.id ? COLORS.paper : COLORS.ink,
              fontSize: 12.5,
              fontWeight: 600,
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            {m.label}
          </button>
        ))}
      </div>

      {mode === "verbs" ? (
        <div style={{ textAlign: "center", padding: "20px 10px" }}>
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 18, marginBottom: 8 }}>
            En yaygın 500 İngilizce fiil
          </div>
          <p style={{ color: COLORS.inkSoft, fontSize: 13.5, marginBottom: 18, lineHeight: 1.5 }}>
            Günlük ve akademik İngilizcede en sık kullanılan fiiller, Türkçe anlamlarıyla birlikte
            hazır ve <strong>"Fiil"</strong> kategorisiyle eklenir. Kutuda zaten olan kelimeler tekrar eklenmez.
          </p>
          {error && <div style={{ ...errorStyle, marginBottom: 12 }}>{error}</div>}
          <button onClick={seedCommonVerbs} style={{ ...primaryBtn, width: "100%" }}>
            500 fiili kart kutusuna ekle
          </button>
        </div>
      ) : mode === "toeflverbs" ? (
        <div style={{ textAlign: "center", padding: "20px 10px" }}>
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 18, marginBottom: 8 }}>
            TOEFL'da en çok sorulan akademik fiiller
          </div>
          <p style={{ color: COLORS.inkSoft, fontSize: 13.5, marginBottom: 18, lineHeight: 1.5 }}>
            Coxhead'in Academic Word List (AWL) kaynağındaki en sık geçen fiillerden, mevcut 500
            fiil listende <strong>olmayanlar</strong>. TOEFL Reading ve Listening bölümlerinde en
            sık karşına çıkan akademik fiiller bunlar. <strong>"Fiil"</strong> kategorisiyle eklenir.
          </p>
          {error && <div style={{ ...errorStyle, marginBottom: 12 }}>{error}</div>}
          <button onClick={seedToeflVerbs} style={{ ...primaryBtn, width: "100%" }}>
            Akademik fiilleri kart kutusuna ekle
          </button>
        </div>
      ) : mode === "adjectives" ? (
        <div style={{ textAlign: "center", padding: "20px 10px" }}>
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 18, marginBottom: 8 }}>
            En yaygın İngilizce sıfatlar
          </div>
          <p style={{ color: COLORS.inkSoft, fontSize: 13.5, marginBottom: 18, lineHeight: 1.5 }}>
            Betimleme ve karşılaştırmalarda en sık kullanılan sıfatlar, Türkçe anlamlarıyla birlikte
            hazır ve <strong>"Sıfat"</strong> kategorisiyle eklenir. Kutuda zaten olan kelimeler tekrar eklenmez.
          </p>
          {error && <div style={{ ...errorStyle, marginBottom: 12 }}>{error}</div>}
          <button onClick={seedCommonAdjectives} style={{ ...primaryBtn, width: "100%" }}>
            Sıfatları kart kutusuna ekle
          </button>
        </div>
      ) : mode === "adverbs" ? (
        <div style={{ textAlign: "center", padding: "20px 10px" }}>
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 18, marginBottom: 8 }}>
            En yaygın İngilizce zarflar
          </div>
          <p style={{ color: COLORS.inkSoft, fontSize: 13.5, marginBottom: 18, lineHeight: 1.5 }}>
            Özellikle TOEFL metinlerinde sık geçen bağlaç zarfları ve derece zarfları, Türkçe
            anlamlarıyla birlikte hazır ve <strong>"Zarf"</strong> kategorisiyle eklenir. Kutuda zaten olan
            kelimeler tekrar eklenmez.
          </p>
          {error && <div style={{ ...errorStyle, marginBottom: 12 }}>{error}</div>}
          <button onClick={seedCommonAdverbs} style={{ ...primaryBtn, width: "100%" }}>
            Zarfları kart kutusuna ekle
          </button>
        </div>
      ) : mode === "nouns" ? (
        <div>
          <p style={{ color: COLORS.inkSoft, fontSize: 13.5, marginBottom: 16, lineHeight: 1.5, textAlign: "center" }}>
            Konuya göre gruplanmış TOEFL isim listeleri. Her kategori kendi etiketiyle eklenir,
            böylece quiz sırasında karışmazlar.
          </p>
          {error && <div style={{ ...errorStyle, marginBottom: 12, textAlign: "center" }}>{error}</div>}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {NOUN_CATEGORIES.map((cat) => {
              const count = cat.raw.split("\n").filter(Boolean).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => seedNounCategory(cat)}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 14px",
                    borderRadius: 8,
                    border: `1px solid ${COLORS.paperLine}`,
                    background: COLORS.card,
                    fontSize: 14,
                    fontFamily: "inherit",
                    fontWeight: 600,
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <CategoryBadge category={cat.label} /> {cat.label}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4, color: COLORS.inkSoft, fontWeight: 500, fontSize: 12.5 }}>
                    ~{count} kelime <ArrowRight size={13} />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ) : mode === "single" ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Field label="Kelime">
            <input value={word} onChange={(e) => setWord(e.target.value)} placeholder="örn. ubiquitous" style={inputStyle} />
          </Field>
          <Field label="Anlam / açıklama">
            <input
              value={definition}
              onChange={(e) => setDefinition(e.target.value)}
              placeholder="örn. her yerde bulunan, yaygın"
              style={inputStyle}
            />
          </Field>
          <Field label="Örnek cümle (opsiyonel)">
            <input
              value={example}
              onChange={(e) => setExample(e.target.value)}
              placeholder="örn. Smartphones have become ubiquitous."
              style={inputStyle}
            />
          </Field>
          <CategorySelector
            category={category}
            setCategory={setCategory}
            customCategory={customCategory}
            setCustomCategory={setCustomCategory}
            existingCategories={existingCategories}
          />
          {error && <div style={errorStyle}>{error}</div>}
          <button onClick={submitSingle} style={primaryBtn}>
            Kelimeyi ekle
          </button>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Field label="Her satıra bir kelime — format: kelime - anlam">
            <textarea
              value={bulkText}
              onChange={(e) => setBulkText(e.target.value)}
              placeholder={"ubiquitous - her yerde bulunan\nmeticulous - titiz, dikkatli\nresilient - dirençli"}
              rows={8}
              style={{ ...inputStyle, resize: "vertical", fontFamily: "monospace", fontSize: 13 }}
            />
          </Field>
          <CategorySelector
            category={category}
            setCategory={setCategory}
            customCategory={customCategory}
            setCustomCategory={setCustomCategory}
            existingCategories={existingCategories}
          />
          {error && <div style={errorStyle}>{error}</div>}
          <button onClick={submitBulk} style={primaryBtn}>
            Kelimeleri ekle
          </button>
        </div>
      )}
    </div>
  );
}

function CategorySelector({ category, setCategory, customCategory, setCustomCategory, existingCategories }) {
  const presetLabels = NOUN_CATEGORIES.map((c) => c.label);
  const allOptions = Array.from(new Set(["Genel", "Fiil", "Sıfat", "Zarf", ...presetLabels, ...existingCategories]));
  return (
    <Field label="Kategori">
      <div style={{ display: "flex", gap: 8 }}>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ ...inputStyle, flex: 1 }}
        >
          {allOptions.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
          <option value="__custom__">Yeni kategori...</option>
        </select>
      </div>
      {category === "__custom__" && (
        <input
          value={customCategory}
          onChange={(e) => setCustomCategory(e.target.value)}
          placeholder="örn. Duygular"
          style={{ ...inputStyle, marginTop: 8 }}
        />
      )}
    </Field>
  );
}

function Field({ label, children }) {
  return (
    <label style={{ display: "block" }}>
      <div style={{ fontSize: 12.5, fontWeight: 600, color: COLORS.inkSoft, marginBottom: 5 }}>{label}</div>
      {children}
    </label>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 6,
  border: `1px solid ${COLORS.paperLine}`,
  fontSize: 14,
  fontFamily: "inherit",
  background: COLORS.card,
};
const primaryBtn = {
  background: COLORS.ink,
  color: COLORS.paper,
  border: "none",
  borderRadius: 6,
  padding: "11px 0",
  fontSize: 14,
  fontWeight: 600,
  cursor: "pointer",
};
const errorStyle = { color: COLORS.coral, fontSize: 12.5, fontWeight: 500 };

function buildRound(words) {
  const size = Math.min(10, words.length);
  return pickWeighted(words, size);
}

function buildOptions(target, allWords) {
  const others = allWords.filter((w) => w.id !== target.id && w.definition !== target.definition);
  const shuffled = [...others].sort(() => Math.random() - 0.5).slice(0, 3);
  const opts = [target, ...shuffled].sort(() => Math.random() - 0.5);
  return opts;
}

async function generateSentences(wordList) {
  const prompt = `For each of the following English words, write ONE natural sentence (12-22 words) suitable for an academic TOEFL reading passage. Use the exact word form given, unchanged (do not alter tense, number, or form). The sentence should make the word's meaning reasonably clear from context, without being an obvious definition. Respond with ONLY a JSON array, no markdown code fences, no explanation, in this exact format: [{"word":"...","sentence":"..."}]

Words: ${wordList.join(", ")}`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 1200,
      messages: [{ role: "user", content: prompt }],
    }),
  });
  const data = await response.json();
  const textBlock = (data.content || []).find((b) => b.type === "text");
  if (!textBlock) throw new Error("no text in response");
  const cleaned = textBlock.text.replace(/```json|```/g, "").trim();
  const parsed = JSON.parse(cleaned);
  if (!Array.isArray(parsed)) throw new Error("unexpected format");
  return parsed;
}

function blankSentence(sentence, word) {
  if (!sentence) return "";
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`\\b${escaped}\\b`, "i");
  if (re.test(sentence)) return sentence.replace(re, "_____");
  const idx = sentence.toLowerCase().indexOf(word.toLowerCase());
  if (idx !== -1) return sentence.slice(0, idx) + "_____" + sentence.slice(idx + word.length);
  return sentence;
}

function Quiz({ words, onUpdate }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [quizMode, setQuizMode] = useState("context"); // meaning | context
  const [round, setRound] = useState(null); // array of words for this round
  const [idx, setIdx] = useState(0);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(null);
  const [results, setResults] = useState([]); // {word, correct}
  const [flashRevealed, setFlashRevealed] = useState(false);
  const [sentenceLoading, setSentenceLoading] = useState(false);
  const [sentenceLoadError, setSentenceLoadError] = useState(null);

  const categoryGroups = useMemo(() => {
    const map = new Map();
    words.forEach((w) => {
      if (!map.has(w.category)) map.set(w.category, []);
      map.get(w.category).push(w);
    });
    return Array.from(map.entries()).map(([label, list]) => ({ label, list }));
  }, [words]);

  const pool = selectedCategory ? categoryGroups.find((g) => g.label === selectedCategory)?.list || [] : [];
  const canMultipleChoice = pool.length >= 4;
  const useContext = quizMode === "context";

  const start = async () => {
    const r = buildRound(pool);
    setSelected(null);
    setFlashRevealed(false);
    setResults([]);
    setIdx(0);
    setSentenceLoadError(null);

    if (quizMode === "context") {
      const missing = r.filter((w) => !w.example);
      if (missing.length > 0) {
        setSentenceLoading(true);
        try {
          const sentences = await generateSentences(missing.map((w) => w.word));
          const sentenceMap = new Map(sentences.map((s) => [String(s.word).toLowerCase(), s.sentence]));
          const enrichedRound = r.map((w) => {
            const gen = sentenceMap.get(w.word.toLowerCase());
            return gen && !w.example ? { ...w, example: gen } : w;
          });
          const updatedWords = words.map((w) => {
            const gen = sentenceMap.get(w.word.toLowerCase());
            return gen && !w.example ? { ...w, example: gen } : w;
          });
          onUpdate(updatedWords);
          setRound(enrichedRound);
          if (canMultipleChoice) setOptions(buildOptions(enrichedRound[0], pool));
        } catch (e) {
          setSentenceLoadError("Cümleler oluşturulamadı, bu tur anlam eşleştirme ile devam ediyor.");
          setQuizMode("meaning");
          setRound(r);
          if (canMultipleChoice) setOptions(buildOptions(r[0], pool));
        } finally {
          setSentenceLoading(false);
        }
        return;
      }
    }
    setRound(r);
    if (canMultipleChoice) setOptions(buildOptions(r[0], pool));
  };

  if (words.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "60px 20px", color: COLORS.inkSoft, fontSize: 14 }}>
        Quize başlamak için önce kelime eklemelisin.
      </div>
    );
  }

  if (!selectedCategory) {
    return (
      <div>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <Sparkles size={26} color={COLORS.gold} style={{ marginBottom: 10 }} />
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 20, marginBottom: 6 }}>
            Hangi kategoriden çalışalım?
          </div>
          <p style={{ color: COLORS.inkSoft, fontSize: 13.5, lineHeight: 1.5 }}>
            Quiz tek bir kategoriden soru sorar, kategoriler birbirine karışmaz.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {categoryGroups
            .sort((a, b) => b.list.length - a.list.length)
            .map((g) => (
              <button
                key={g.label}
                onClick={() => setSelectedCategory(g.label)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "13px 16px",
                  borderRadius: 8,
                  border: `1px solid ${COLORS.paperLine}`,
                  background: COLORS.card,
                  fontSize: 14,
                  fontFamily: "inherit",
                  fontWeight: 600,
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <CategoryBadge category={g.label} /> {g.label}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 4, color: COLORS.inkSoft, fontWeight: 500, fontSize: 12.5 }}>
                  {g.list.length} kelime <ArrowRight size={13} />
                </span>
              </button>
            ))}
        </div>
      </div>
    );
  }

  if (!round) {
    return (
      <div style={{ textAlign: "center", padding: "40px 20px" }}>
        <button
          onClick={() => setSelectedCategory(null)}
          style={{ background: "none", border: "none", color: COLORS.inkSoft, fontSize: 12.5, fontWeight: 600, cursor: "pointer", marginBottom: 18 }}
        >
          ← Kategori değiştir
        </button>
        <div style={{ marginBottom: 10 }}>
          <CategoryBadge category={selectedCategory} />
        </div>

        {sentenceLoading ? (
          <div style={{ padding: "20px 0" }}>
            <div style={{ ...styles.loadingDot, margin: "0 auto 14px" }} />
            <div style={{ fontSize: 13.5, color: COLORS.inkSoft }}>Cümleler hazırlanıyor...</div>
          </div>
        ) : (
          <>
            <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 20, marginBottom: 8 }}>
              Quize hazır mısın?
            </div>
            <p style={{ color: COLORS.inkSoft, fontSize: 13.5, marginBottom: 16, lineHeight: 1.5 }}>
              Bu turda {Math.min(10, pool.length)} kelime soracağım. Zorlandığın kelimeler daha sık
              karşına çıkacak.
            </p>
            {sentenceLoadError && (
              <div style={{ ...errorStyle, marginBottom: 14 }}>{sentenceLoadError}</div>
            )}
            <div style={{ display: "flex", gap: 6, marginBottom: 20, justifyContent: "center" }}>
              {[
                { id: "context", label: "Cümle bağlamı" },
                { id: "meaning", label: "Anlam eşleştirme" },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setQuizMode(m.id)}
                  style={{
                    padding: "8px 14px",
                    borderRadius: 20,
                    border: `1px solid ${quizMode === m.id ? COLORS.ink : COLORS.paperLine}`,
                    background: quizMode === m.id ? COLORS.ink : "transparent",
                    color: quizMode === m.id ? COLORS.paper : COLORS.inkSoft,
                    fontSize: 12.5,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {m.label}
                </button>
              ))}
            </div>
            <button onClick={start} style={primaryBtn}>
              Quizi başlat
            </button>
          </>
        )}
      </div>
    );
  }

  if (idx >= round.length) {
    const correct = results.filter((r) => r.correct).length;
    return (
      <div>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 22, marginBottom: 4 }}>
            Tur tamamlandı
          </div>
          <div style={{ color: COLORS.inkSoft, fontSize: 14 }}>
            {correct} / {round.length} doğru
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
          {results.map((r, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 14px",
                borderRadius: 6,
                background: r.correct ? COLORS.mossSoft : COLORS.coralSoft,
              }}
            >
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{r.word.word}</div>
                <div style={{ fontSize: 12.5, color: COLORS.inkSoft }}>{r.word.definition}</div>
              </div>
              {r.correct ? <Check size={16} color={COLORS.moss} /> : <X size={16} color={COLORS.coral} />}
            </div>
          ))}
        </div>
        <button onClick={start} style={{ ...primaryBtn, width: "100%", display: "flex", justifyContent: "center", gap: 8, alignItems: "center" }}>
          <RotateCcw size={15} /> Yeni tur başlat
        </button>
        <button
          onClick={() => {
            setSelectedCategory(null);
            setRound(null);
          }}
          style={{ background: "none", border: "none", color: COLORS.inkSoft, fontSize: 12.5, fontWeight: 600, cursor: "pointer", marginTop: 12, width: "100%" }}
        >
          Kategori değiştir
        </button>
      </div>
    );
  }

  const current = round[idx];
  const questionUsesContext = useContext && !!current.example;

  const advance = (wasCorrect) => {
    const updated = words.map((w) => {
      if (w.id !== current.id) return w;
      const nextBox = wasCorrect ? Math.min(5, w.box + 1) : Math.max(1, w.box - 1);
      return {
        ...w,
        box: nextBox,
        correctCount: w.correctCount + (wasCorrect ? 1 : 0),
        wrongCount: w.wrongCount + (wasCorrect ? 0 : 1),
        lastReviewed: Date.now(),
      };
    });
    onUpdate(updated);
    setResults((r) => [...r, { word: current, correct: wasCorrect }]);
    const nextIdx = idx + 1;
    setIdx(nextIdx);
    setSelected(null);
    setFlashRevealed(false);
    if (nextIdx < round.length && canMultipleChoice) {
      const updatedPool = updated.filter((w) => w.category === selectedCategory);
      setOptions(buildOptions(round[nextIdx], updatedPool));
    }
  };

  const handleSelect = (opt) => {
    if (selected) return;
    setSelected(opt);
    setTimeout(() => advance(opt.id === current.id), 650);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
        <div style={{ fontSize: 12.5, color: COLORS.inkSoft, fontWeight: 600 }}>
          {idx + 1} / {round.length}
        </div>
        <BoxBadge box={current.box} />
      </div>

      <div
        style={{
          background: COLORS.card,
          border: `1px solid ${COLORS.paperLine}`,
          borderRadius: 10,
          padding: questionUsesContext ? "28px 22px" : "36px 24px",
          textAlign: questionUsesContext ? "left" : "center",
          marginBottom: 20,
        }}
      >
        {questionUsesContext ? (
          <div style={{ fontSize: 16.5, lineHeight: 1.65, color: COLORS.ink }}>
            {blankSentence(current.example, current.word)}
          </div>
        ) : (
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 30, fontWeight: 700 }}>
            {current.word}
          </div>
        )}
        {flashRevealed && !canMultipleChoice && (
          <div
            style={{
              marginTop: 14,
              fontSize: questionUsesContext ? 20 : 15,
              fontWeight: questionUsesContext ? 700 : 400,
              fontFamily: questionUsesContext ? "'Source Serif 4', serif" : "inherit",
              textAlign: questionUsesContext ? "center" : "left",
            }}
          >
            {questionUsesContext ? current.word : current.definition}
          </div>
        )}
      </div>

      {canMultipleChoice ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {options.map((opt) => {
            const isSelected = selected && selected.id === opt.id;
            const isCorrectAnswer = selected && opt.id === current.id;
            let bg = COLORS.card;
            let border = COLORS.paperLine;
            if (selected) {
              if (isCorrectAnswer) {
                bg = COLORS.mossSoft;
                border = COLORS.moss;
              } else if (isSelected) {
                bg = COLORS.coralSoft;
                border = COLORS.coral;
              }
            }
            return (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt)}
                disabled={!!selected}
                style={{
                  textAlign: "left",
                  padding: "12px 14px",
                  borderRadius: 8,
                  border: `1px solid ${border}`,
                  background: bg,
                  fontSize: 14,
                  fontFamily: questionUsesContext ? "'Source Serif 4', serif" : "inherit",
                  fontWeight: questionUsesContext ? 600 : 400,
                  cursor: selected ? "default" : "pointer",
                }}
              >
                {questionUsesContext ? opt.word : opt.definition}
              </button>
            );
          })}
        </div>
      ) : (
        <div>
          {!flashRevealed ? (
            <button onClick={() => setFlashRevealed(true)} style={{ ...primaryBtn, width: "100%" }}>
              {questionUsesContext ? "Kelimeyi göster" : "Anlamı göster"}
            </button>
          ) : (
            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={() => advance(false)}
                style={{ ...primaryBtn, flex: 1, background: COLORS.coral, display: "flex", justifyContent: "center", gap: 6, alignItems: "center" }}
              >
                <X size={15} /> Bilemedim
              </button>
              <button
                onClick={() => advance(true)}
                style={{ ...primaryBtn, flex: 1, background: COLORS.moss, display: "flex", justifyContent: "center", gap: 6, alignItems: "center" }}
              >
                <Check size={15} /> Bildim
              </button>
            </div>
          )}
          <p style={{ fontSize: 12, color: COLORS.inkSoft, marginTop: 10, textAlign: "center" }}>
            Bu kategoride çoktan seçmeli quiz için en az 4 kelime olmalı.
          </p>
        </div>
      )}
    </div>
  );
}

function Stats({ words }) {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const categories = useMemo(() => ["Tümü", ...Array.from(new Set(words.map((w) => w.category)))], [words]);
  const filteredWords = useMemo(
    () => (activeCategory === "Tümü" ? words : words.filter((w) => w.category === activeCategory)),
    [words, activeCategory]
  );

  if (words.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "60px 20px", color: COLORS.inkSoft, fontSize: 14 }}>
        İstatistik görmek için önce kelime ekle ve quiz çöz.
      </div>
    );
  }
  const totalCorrect = filteredWords.reduce((a, w) => a + w.correctCount, 0);
  const totalWrong = filteredWords.reduce((a, w) => a + w.wrongCount, 0);
  const totalAttempts = totalCorrect + totalWrong;
  const accuracy = totalAttempts ? Math.round((totalCorrect / totalAttempts) * 100) : null;
  const mastered = filteredWords.filter((w) => w.box === 5).length;
  const boxCounts = [1, 2, 3, 4, 5].map((b) => filteredWords.filter((w) => w.box === b).length);
  const maxCount = Math.max(...boxCounts, 1);

  return (
    <div>
      {categories.length > 2 && (
        <div style={{ display: "flex", gap: 6, marginBottom: 18, overflowX: "auto", paddingBottom: 4 }}>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              style={{
                flexShrink: 0,
                padding: "6px 12px",
                borderRadius: 20,
                border: `1px solid ${activeCategory === c ? COLORS.ink : COLORS.paperLine}`,
                background: activeCategory === c ? COLORS.ink : "transparent",
                color: activeCategory === c ? COLORS.paper : COLORS.inkSoft,
                fontSize: 12.5,
                fontWeight: 600,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {c}
            </button>
          ))}
        </div>
      )}
      <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
        <StatCard label="Kelime" value={filteredWords.length} />
        <StatCard label="Ustalaşılan" value={mastered} accent={COLORS.moss} />
        <StatCard label="Doğruluk" value={accuracy === null ? "—" : `%${accuracy}`} accent={COLORS.gold} />
      </div>

      <div style={{ fontSize: 12.5, fontWeight: 700, color: COLORS.inkSoft, marginBottom: 10, letterSpacing: "0.02em" }}>
        KART KUTUSU DAĞILIMI
      </div>
      <div
        style={{
          background: COLORS.card,
          border: `1px solid ${COLORS.paperLine}`,
          borderRadius: 10,
          padding: "18px 16px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {[1, 2, 3, 4, 5].map((b, i) => {
          const labels = { 1: "1 · Yeni", 2: "2 · Zayıf", 3: "3 · Orta", 4: "4 · İyi", 5: "5 · Ustalaştı" };
          const count = boxCounts[i];
          const pct = (count / maxCount) * 100;
          const color = b >= 4 ? COLORS.moss : b <= 2 ? COLORS.coral : COLORS.gold;
          return (
            <div key={b} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ fontSize: 12, color: COLORS.inkSoft, width: 78, flexShrink: 0 }}>{labels[b]}</div>
              <div style={{ flex: 1, background: COLORS.paper, borderRadius: 4, height: 10, overflow: "hidden" }}>
                <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 4 }} />
              </div>
              <div style={{ fontSize: 12, fontWeight: 700, width: 22, textAlign: "right" }}>{count}</div>
            </div>
          );
        })}
      </div>

      <div style={{ fontSize: 12.5, fontWeight: 700, color: COLORS.inkSoft, margin: "26px 0 10px", letterSpacing: "0.02em" }}>
        EN ÇOK ZORLANDIĞIN KELİMELER
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {[...filteredWords]
          .filter((w) => w.wrongCount > 0)
          .sort((a, b) => b.wrongCount - a.wrongCount)
          .slice(0, 5)
          .map((w) => (
            <div
              key={w.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 14px",
                borderRadius: 6,
                border: `1px solid ${COLORS.paperLine}`,
                background: COLORS.card,
                fontSize: 13.5,
              }}
            >
              <span style={{ fontWeight: 600 }}>{w.word}</span>
              <span style={{ color: COLORS.coral, fontWeight: 600 }}>{w.wrongCount} yanlış</span>
            </div>
          ))}
        {filteredWords.filter((w) => w.wrongCount > 0).length === 0 && (
          <div style={{ color: COLORS.inkSoft, fontSize: 13, textAlign: "center", padding: 12 }}>
            Henüz yanlış işaretlenmiş kelime yok.
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ label, value, accent }) {
  return (
    <div
      style={{
        flex: 1,
        background: COLORS.card,
        border: `1px solid ${COLORS.paperLine}`,
        borderRadius: 10,
        padding: "14px 12px",
        textAlign: "center",
      }}
    >
      <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 24, fontWeight: 700, color: accent || COLORS.ink }}>
        {value}
      </div>
      <div style={{ fontSize: 11, color: COLORS.inkSoft, marginTop: 3, fontWeight: 600 }}>{label}</div>
    </div>
  );
}

const EMAIL_PROMPTS = [
  {
    id: "wr-email-001",
    title: "Akademik Danışman Randevusu Talebi (Bölüm Değişikliği)",
    scenario: "You need to change your major, but the online system requires your academic advisor's formal sign-off. Write an email to your academic advisor requesting an appointment.",
    bullets: [
      "Explain clearly why you want to meet",
      "Mention the formal deadline for major change submissions",
      "Propose two specific appointment time options",
    ],
  },
  {
    id: "wr-email-002",
    title: "Ödev Teslim Süresi Uzatma Talebi (Sağlık Mazereti)",
    scenario: "You cannot submit your research paper on time because you were sick with influenza for several days. Write an email to your professor requesting a short extension.",
    bullets: [
      "Briefly explain the medical reason without oversharing",
      "Propose a realistic, specific new submission date",
      "Reassure the professor about your current draft progress",
    ],
  },
  {
    id: "wr-email-003",
    title: "Kampüs Etkinliği Gönüllülük ve Yetkinlik Bildirimi",
    scenario: "You volunteered to assist at the university's International Student Orientation. The event coordinator sent a request for your availability and relevant skills. Write an email to the coordinator.",
    bullets: [
      "Confirm your commitment to volunteer at the orientation",
      "State your exact available time slots across the weekend",
      "Highlight one specific skill or past campus experience that will help the team",
    ],
  },
  {
    id: "wr-email-004",
    title: "Grup Projesi Toplantı Saati Çakışması ve Çözüm Önerisi",
    scenario: "Your project team has scheduled a group meeting during a time when you must attend a mandatory chemistry laboratory makeup session. Write an email to your group members.",
    bullets: [
      "Explain the unavoidable schedule conflict clearly",
      "Propose a practical alternative meeting time and collaborative online workflow",
      "Set a deadline for team members to respond",
    ],
  },
  {
    id: "wr-email-005",
    title: "Yurt Çalışma Odası Yazıcı Arızası Bildirimi",
    scenario: "The shared printer in your residence hall study lounge has been out of order for three days during midterm exam week. Write an email to the Residence Life Office.",
    bullets: [
      "Describe the malfunction and how long it has persisted",
      "Explain why this issue is particularly critical for residents right now",
      "Request immediate repair or an alternative printing arrangement",
    ],
  },
  {
    id: "wr-email-006",
    title: "Zorunlu Ders Kayıt Kontenjanı Sorunu (Öğrenci İşleri)",
    scenario: "You attempted to register for a required senior seminar (ECON 401), but the course reached maximum capacity within minutes. You need this course to graduate on schedule. Write an email to the Economics Department Registrar.",
    bullets: [
      "Identify the course code and explain the capacity constraint",
      "Explain why completing this course this term is essential for your graduation timeline",
      "Inquire about a capacity override permit or opening a second section",
    ],
  },
  {
    id: "wr-email-007",
    title: "Kaçırılan Randevu Özrü ve Yeni Görüşme Talebi",
    scenario: "You missed a scheduled research consultation with your professor due to an unexpected public transit delay. Write an email to apologize and reschedule.",
    bullets: [
      "Offer a sincere and immediate apology for missing the appointment",
      "Briefly explain the unavoidable delay without lengthy excuses",
      "Propose new options for meeting or offer to send your questions electronically",
    ],
  },
  {
    id: "wr-email-008",
    title: "Laboratuvar Araştırma Asistanlığı Başvurusu",
    scenario: "A biology professor announced an opening for an undergraduate research assistant in their microbiology lab. Write an email expressing your interest and qualifications.",
    bullets: [
      "State your interest in the specific laboratory research project",
      "Summarize your relevant coursework and lab techniques learned",
      "Inquire about interview opportunities or submitting your CV and transcript",
    ],
  },
];

const DISCUSSION_PROMPTS = [
  {
    id: "wr-discussion-001",
    title: "Ders Kayıtlarının Erişime Açılması (Agree & Extend)",
    question: "Should universities record all lectures and make them permanently available to enrolled students after class? Explain your view with specific reasons.",
    studentA: {
      name: "Mina",
      text: "Yes. Recordings allow students to review complex explanations at their own pace and support those who miss lectures due to illness, family emergencies, or commute issues.",
    },
    studentB: {
      name: "Jonah",
      text: "I disagree. If recordings are readily accessible online, in-person lecture attendance will decline, resulting in lifeless classrooms and fewer spontaneous discussions.",
    },
  },
  {
    id: "wr-discussion-002",
    title: "Zorunlu Üniversite Stajları (Disagree & Defend)",
    question: "Should universities require every undergraduate student to complete an internship before graduation? Explain your opinion with supporting evidence.",
    studentA: {
      name: "Rafael",
      text: "Yes. Internships provide practical workplace experience, develop essential soft skills, and give graduates a clear competitive edge in the modern job market.",
    },
    studentB: {
      name: "Nora",
      text: "I believe internships should remain optional because mandatory requirements unfairly burden students who rely on paid jobs or who cannot afford unpaid positions.",
    },
  },
  {
    id: "wr-discussion-003",
    title: "Kampüs Bütçesi: Sessiz Çalışma vs. Sosyal Alan (Resource Allocation)",
    question: "If a university receives a substantial surplus grant, should it prioritize expanding quiet individual study spaces or modern recreational lounges? State and defend your choice.",
    studentA: {
      name: "Leah",
      text: "The administration should expand quiet study rooms because deep concentration is the primary foundation for academic success, especially during exam periods.",
    },
    studentB: {
      name: "Omar",
      text: "Recreational and social lounges should be prioritized because student mental health and community bonding are just as essential for overall university retention.",
    },
  },
  {
    id: "wr-discussion-004",
    title: "Ödevlerde Yapay Zeka Araçlarının Kullanımı (Tech & Ethics)",
    question: "Should university students be permitted to use generative AI tools when preparing coursework, provided they formally declare how the technology was utilized? Explain your stance.",
    studentA: {
      name: "Hana",
      text: "Yes. Generative AI is an indispensable workplace technology. Universities should teach students how to prompt, verify, and cite AI tools responsibly rather than banning them.",
    },
    studentB: {
      name: "Mateo",
      text: "I disagree. Allowing AI tools makes it impossible for professors to evaluate students' authentic analytical and writing abilities, which compromises educational integrity.",
    },
  },
  {
    id: "wr-discussion-005",
    title: "Kalıcı Uzaktan Çalışma vs. Hibrit Ofis (Workplace Policy)",
    question: "Should corporate employers adopt permanent remote work policies, or should they mandate in-person office attendance for part of the work week? Share your reasoning.",
    studentA: {
      name: "Sofia",
      text: "Full remote work should be standard. It eliminates grueling commutes, provides superior work-life balance, and allows organizations to recruit top talent globally.",
    },
    studentB: {
      name: "Daniel",
      text: "Mandatory in-person time is indispensable. Face-to-face contact fosters spontaneous innovation, strengthens organizational culture, and provides crucial mentorship for juniors.",
    },
  },
  {
    id: "wr-discussion-006",
    title: "Tek Kullanımlık Plastiklerin Yasaklanması (Environmental Policy)",
    question: "Should municipal governments enact strict bans on all single-use plastics, or should they rely on voluntary consumer recycling initiatives? Discuss your position.",
    studentA: {
      name: "Carlos",
      text: "Strict bans are essential. Decades of voluntary recycling programs have failed to stem ocean plastic pollution, and only regulatory prohibition drives real change.",
    },
    studentB: {
      name: "Grace",
      text: "Outright bans disproportionately harm small businesses by suddenly inflating packaging costs, which gets passed on to low-income consumers during inflation.",
    },
  },
  {
    id: "wr-discussion-007",
    title: "Geleneksel Sınavlar vs. Sürekli Proje Değerlendirmesi (Assessment Policy)",
    question: "Should university courses base student grades primarily on comprehensive final examinations or on multi-stage cumulative group and individual projects? Explain your view.",
    studentA: {
      name: "Tanya",
      text: "Grades should be based on projects. Real careers require sustained research, iterative revision, and collaboration, not the memorization of facts under timed exam pressure.",
    },
    studentB: {
      name: "Liam",
      text: "Standardized final exams remain necessary because they guarantee individual accountability and prevent free-riding problems that often plague group project assessments.",
    },
  },
  {
    id: "wr-discussion-008",
    title: "Şehir Merkezlerinin Araç Trafiğine Kapatılması (Urban Policy)",
    question: "Should metropolitan city centers be permanently closed to private motorized vehicles to create dedicated pedestrian and cycling zones? Defend your position.",
    studentA: {
      name: "Zoe",
      text: "Yes. Pedestrianized urban centers drastically reduce greenhouse gas emissions, enhance pedestrian safety, and revitalize local storefronts through increased foot traffic.",
    },
    studentB: {
      name: "Felix",
      text: "Banning vehicles restricts mobility for the elderly and disabled, disrupts commercial freight deliveries, and pushes severe traffic congestion into surrounding residential suburbs.",
    },
  },
];

const EMAIL_CRITERIA = ["Purposeful Communication", "Social Conventions and Tone", "Language Use", "Organization"];
const DISCUSSION_CRITERIA = ["Position Clarity", "Peer Engagement", "Reasoning and Support", "Grammar and Language Use"];

const CRITERIA_LABELS_TR = {
  "Purposeful Communication": "Amaca Yönelik İletişim",
  "Social Conventions and Tone": "Ton ve Nezaket Kuralları",
  "Language Use": "Dil Kullanımı",
  Organization: "Organizasyon",
  "Position Clarity": "Görüş Açıklığı",
  "Peer Engagement": "Arkadaş Görüşlerine Katılım",
  "Reasoning and Support": "Akıl Yürütme ve Destekleme",
  "Grammar and Language Use": "Dilbilgisi ve Dil Kullanımı",
};

async function generateWritingFeedback(taskType, promptData, response) {
  const isEmail = taskType === "email";
  const criteria = isEmail ? EMAIL_CRITERIA : DISCUSSION_CRITERIA;
  const taskDescription = isEmail
    ? `Scenario: ${promptData.scenario}\nThe email must address: ${promptData.bullets.join("; ")}`
    : `Professor's question: ${promptData.question}\nStudent A (${promptData.studentA.name}): ${promptData.studentA.text}\nStudent B (${promptData.studentB.name}): ${promptData.studentB.text}`;

  const prompt = `You are an official ETS TOEFL iBT 2026 rater grading a "${isEmail ? "Write an Email" : "Write for an Academic Discussion"}" task response, using the real TOEFL iBT 2026 scoring rubric for this task.

TASK GIVEN TO THE STUDENT:
${taskDescription}

STUDENT'S RESPONSE:
"""
${response}
"""

Score the response from 0 to 5 (you may use .5 increments) on these four rubric dimensions: ${criteria.join(", ")}. Be strict and realistic, the way an actual TOEFL rater would be - do not inflate scores. A 5 means near-native, well-elaborated, virtually error-free. A 3 means adequate but with noticeable weaknesses. Below 2 means the response barely addresses the task or has serious language problems.

Respond with ONLY a JSON object, no markdown code fences, no extra text, in this exact shape:
{
  "overallScore": <number 0-5>,
  "criteria": [
    {"name": "${criteria[0]}", "score": <0-5>, "comment": "<1-2 sentences in Turkish>"},
    {"name": "${criteria[1]}", "score": <0-5>, "comment": "<1-2 sentences in Turkish>"},
    {"name": "${criteria[2]}", "score": <0-5>, "comment": "<1-2 sentences in Turkish>"},
    {"name": "${criteria[3]}", "score": <0-5>, "comment": "<1-2 sentences in Turkish>"}
  ],
  "strengths": ["<Turkish, short>", "<Turkish, short>"],
  "improvements": ["<Turkish, short, actionable>", "<Turkish, short, actionable>", "<Turkish, short, actionable>"],
  "correctedExample": "<one or two of the student's original sentences, rewritten and improved, in English only>"
}`;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 1200,
      messages: [{ role: "user", content: prompt }],
    }),
  });
  const data = await res.json();
  const textBlock = (data.content || []).find((b) => b.type === "text");
  if (!textBlock) throw new Error("no text in response");
  const cleaned = textBlock.text.replace(/```json|```/g, "").trim();
  const parsed = JSON.parse(cleaned);
  return parsed;
}

function formatTime(sec) {
  if (sec === null || sec === undefined) return "--:--";
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s < 10 ? "0" : ""}${s}`;
}

function Writing() {
  const [taskType, setTaskType] = useState("email");
  const [currentPrompt, setCurrentPrompt] = useState(null);
  const [response, setResponse] = useState("");
  const [timeLeft, setTimeLeft] = useState(null);
  const [timerRunning, setTimerRunning] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [history, setHistory] = useState([]);
  const timerRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await window.storage.get("toefl-writing-history", false);
        if (res && res.value) setHistory(JSON.parse(res.value));
      } catch (e) {
        // no history yet
      }
    })();
  }, []);

  useEffect(() => {
    if (!timerRunning) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => (t && t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [timerRunning]);

  const pickPrompt = (type) => {
    const bank = type === "email" ? EMAIL_PROMPTS : DISCUSSION_PROMPTS;
    const p = bank[Math.floor(Math.random() * bank.length)];
    setCurrentPrompt(p);
    setResponse("");
    setFeedback(null);
    setErrorMsg(null);
    setTimeLeft(type === "email" ? 7 * 60 : 10 * 60);
    setTimerRunning(false);
  };

  const switchTaskType = (type) => {
    setTaskType(type);
    setCurrentPrompt(null);
    setResponse("");
    setFeedback(null);
    setErrorMsg(null);
    setTimerRunning(false);
    setTimeLeft(null);
  };

  const wordCount = response.trim() ? response.trim().split(/\s+/).length : 0;
  const minWords = taskType === "email" ? 80 : 100;
  const maxWords = taskType === "email" ? 120 : 200;
  const fullTime = taskType === "email" ? 7 * 60 : 10 * 60;

  const submit = async () => {
    if (wordCount < 10) {
      setErrorMsg("Değerlendirme için biraz daha yazman gerekiyor.");
      return;
    }
    setLoading(true);
    setErrorMsg(null);
    setTimerRunning(false);
    try {
      const result = await generateWritingFeedback(taskType, currentPrompt, response);
      setFeedback(result);
      const entry = {
        id: uid(),
        taskType,
        promptTitle: currentPrompt.title,
        wordCount,
        overallScore: result.overallScore,
        timestamp: Date.now(),
      };
      const nextHistory = [entry, ...history].slice(0, 50);
      setHistory(nextHistory);
      try {
        await window.storage.set("toefl-writing-history", JSON.stringify(nextHistory), false);
      } catch (e) {
        // history save failed silently, not critical
      }
    } catch (e) {
      setErrorMsg("Değerlendirme sırasında bir hata oluştu, lütfen tekrar dene.");
    } finally {
      setLoading(false);
    }
  };

  const taskHistory = history.filter((h) => h.taskType === taskType);
  const avgScore = taskHistory.length
    ? (taskHistory.reduce((a, h) => a + h.overallScore, 0) / taskHistory.length).toFixed(1)
    : null;

  return (
    <div>
      <div style={{ display: "flex", gap: 6, marginBottom: 20 }}>
        {[
          { id: "email", label: "E-posta", icon: Mail },
          { id: "discussion", label: "Akademik Tartışma", icon: MessageSquare },
        ].map((t) => {
          const Icon = t.icon;
          const active = taskType === t.id;
          return (
            <button
              key={t.id}
              onClick={() => switchTaskType(t.id)}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                padding: "9px 8px",
                borderRadius: 6,
                border: `1px solid ${active ? COLORS.ink : COLORS.paperLine}`,
                background: active ? COLORS.ink : "transparent",
                color: active ? COLORS.paper : COLORS.ink,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              <Icon size={14} /> {t.label}
            </button>
          );
        })}
      </div>

      {!currentPrompt ? (
        <div style={{ textAlign: "center", padding: "40px 20px" }}>
          <PenLine size={26} color={COLORS.gold} style={{ marginBottom: 10 }} />
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 19, marginBottom: 8 }}>
            {taskType === "email" ? "TOEFL 2026 · Write an Email" : "TOEFL 2026 · Write for an Academic Discussion"}
          </div>
          <p style={{ color: COLORS.inkSoft, fontSize: 13.5, marginBottom: 8, lineHeight: 1.5 }}>
            {taskType === "email"
              ? "Gerçek sınav formatı: bir senaryo okuyup, 3 maddeyi kapsayan, uygun tonda bir e-posta yazacaksın. Süre: ~7 dakika, 80-120 kelime önerilir."
              : "Gerçek sınav formatı: bir profesörün sorusunu ve 2 öğrencinin görüşünü okuyup, en az bir öğrenciye atıfta bulunarak kendi görüşünü savunacaksın. Süre: ~10 dakika, en az 100 kelime önerilir."}
          </p>
          {avgScore && (
            <p style={{ color: COLORS.gold, fontSize: 13, fontWeight: 700, marginBottom: 18 }}>
              Bu görevde ortalama puanın: {avgScore} / 5 ({taskHistory.length} deneme)
            </p>
          )}
          <button onClick={() => pickPrompt(taskType)} style={primaryBtn}>
            Yeni konu getir
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => setCurrentPrompt(null)}
            style={{ background: "none", border: "none", color: COLORS.inkSoft, fontSize: 12.5, fontWeight: 600, cursor: "pointer", marginBottom: 14 }}
          >
            ← Başka konu seç
          </button>

          <div
            style={{
              background: COLORS.card,
              border: `1px solid ${COLORS.paperLine}`,
              borderRadius: 10,
              padding: "16px 18px",
              marginBottom: 16,
              fontSize: 13.5,
              lineHeight: 1.6,
            }}
          >
            {taskType === "email" ? (
              <>
                <div style={{ fontWeight: 700, marginBottom: 8, fontFamily: "'Source Serif 4', serif", fontSize: 15 }}>
                  {currentPrompt.title}
                </div>
                <div style={{ marginBottom: 10 }}>{currentPrompt.scenario}</div>
                <div style={{ fontWeight: 600, marginBottom: 4, color: COLORS.inkSoft, fontSize: 12 }}>
                  E-postan şunları içermeli:
                </div>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {currentPrompt.bullets.map((b, i) => (
                    <li key={i} style={{ marginBottom: 2 }}>
                      {b}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <div style={{ fontWeight: 700, marginBottom: 8, fontFamily: "'Source Serif 4', serif", fontSize: 15 }}>
                  {currentPrompt.title}
                </div>
                <div style={{ marginBottom: 10, fontStyle: "italic" }}>Profesör: {currentPrompt.question}</div>
                <div
                  style={{
                    background: COLORS.paper,
                    borderRadius: 6,
                    padding: "8px 10px",
                    marginBottom: 8,
                    border: `1px solid ${COLORS.paperLine}`,
                  }}
                >
                  <strong>{currentPrompt.studentA.name}:</strong> {currentPrompt.studentA.text}
                </div>
                <div
                  style={{
                    background: COLORS.paper,
                    borderRadius: 6,
                    padding: "8px 10px",
                    border: `1px solid ${COLORS.paperLine}`,
                  }}
                >
                  <strong>{currentPrompt.studentB.name}:</strong> {currentPrompt.studentB.text}
                </div>
              </>
            )}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontSize: 12.5,
                fontWeight: 700,
                color: timeLeft === 0 ? COLORS.coral : COLORS.inkSoft,
              }}
            >
              <Clock size={13} />
              {formatTime(timeLeft)}
              {!timerRunning && timeLeft > 0 && (
                <button
                  onClick={() => setTimerRunning(true)}
                  style={{ marginLeft: 4, background: "none", border: "none", color: COLORS.gold, fontWeight: 700, cursor: "pointer", fontSize: 12 }}
                >
                  Süreyi başlat
                </button>
              )}
              {timeLeft === 0 && <span>· Süre doldu</span>}
            </div>
            <div
              style={{
                fontSize: 12.5,
                fontWeight: 700,
                color: wordCount < minWords ? COLORS.coral : wordCount > maxWords ? COLORS.gold : COLORS.moss,
              }}
            >
              {wordCount} kelime {wordCount < minWords ? `(min ${minWords})` : ""}
            </div>
          </div>

          <textarea
            value={response}
            onChange={(e) => {
              setResponse(e.target.value);
              if (!timerRunning && timeLeft === fullTime) setTimerRunning(true);
            }}
            placeholder={taskType === "email" ? "Dear ...,\n\n..." : "In my opinion, ..."}
            rows={10}
            style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6, marginBottom: 12 }}
          />

          {errorMsg && <div style={{ ...errorStyle, marginBottom: 12 }}>{errorMsg}</div>}

          <button
            onClick={submit}
            disabled={loading}
            style={{ ...primaryBtn, width: "100%", display: "flex", justifyContent: "center", gap: 8, alignItems: "center", opacity: loading ? 0.6 : 1 }}
          >
            {loading ? (
              "Değerlendiriliyor..."
            ) : (
              <>
                <Send size={15} /> Değerlendir
              </>
            )}
          </button>

          {feedback && (
            <div style={{ marginTop: 24 }}>
              <div
                style={{
                  textAlign: "center",
                  background: COLORS.card,
                  border: `1px solid ${COLORS.paperLine}`,
                  borderRadius: 10,
                  padding: "18px",
                  marginBottom: 16,
                }}
              >
                <div style={{ fontSize: 12, color: COLORS.inkSoft, fontWeight: 700, marginBottom: 4 }}>GENEL PUAN (0-5 rubrik)</div>
                <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 36, fontWeight: 700, color: COLORS.gold }}>
                  {feedback.overallScore}
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
                {feedback.criteria.map((c, i) => (
                  <div
                    key={i}
                    style={{
                      background: COLORS.card,
                      border: `1px solid ${COLORS.paperLine}`,
                      borderRadius: 8,
                      padding: "12px 14px",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontSize: 13, fontWeight: 700 }}>{CRITERIA_LABELS_TR[c.name] || c.name}</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.gold }}>{c.score}/5</span>
                    </div>
                    <div style={{ background: COLORS.paper, borderRadius: 4, height: 6, overflow: "hidden", marginBottom: 6 }}>
                      <div style={{ width: `${(c.score / 5) * 100}%`, height: "100%", background: COLORS.gold, borderRadius: 4 }} />
                    </div>
                    <div style={{ fontSize: 12.5, color: COLORS.inkSoft, lineHeight: 1.5 }}>{c.comment}</div>
                  </div>
                ))}
              </div>

              {feedback.strengths?.length > 0 && (
                <div style={{ marginBottom: 14 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.moss, marginBottom: 6 }}>GÜÇLÜ YANLARIN</div>
                  {feedback.strengths.map((s, i) => (
                    <div key={i} style={{ fontSize: 13, marginBottom: 4, paddingLeft: 4 }}>
                      ✓ {s}
                    </div>
                  ))}
                </div>
              )}

              {feedback.improvements?.length > 0 && (
                <div style={{ marginBottom: 14 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.coral, marginBottom: 6 }}>GELİŞTİRİLECEK NOKTALAR</div>
                  {feedback.improvements.map((s, i) => (
                    <div key={i} style={{ fontSize: 13, marginBottom: 4, paddingLeft: 4 }}>
                      → {s}
                    </div>
                  ))}
                </div>
              )}

              {feedback.correctedExample && (
                <div
                  style={{
                    background: COLORS.goldSoft,
                    borderRadius: 8,
                    padding: "12px 14px",
                    fontSize: 13,
                    fontStyle: "italic",
                    lineHeight: 1.5,
                  }}
                >
                  <div style={{ fontWeight: 700, fontStyle: "normal", marginBottom: 4, fontSize: 12 }}>Örnek düzeltme:</div>
                  {feedback.correctedExample}
                </div>
              )}
            </div>
          )}

          {taskHistory.length > 0 && (
            <div style={{ marginTop: 28 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: COLORS.inkSoft, marginBottom: 10 }}>
                GEÇMİŞ DENEMELER {avgScore && `· Ortalama ${avgScore}/5`}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {taskHistory.slice(0, 5).map((h) => (
                  <div
                    key={h.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "8px 12px",
                      borderRadius: 6,
                      border: `1px solid ${COLORS.paperLine}`,
                      fontSize: 12.5,
                    }}
                  >
                    <span style={{ color: COLORS.inkSoft }}>{h.promptTitle}</span>
                    <span style={{ fontWeight: 700 }}>{h.overallScore}/5</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
const LEVEL_WORDS = {
  A1: {
    noun: ["April", "August", "CD", "DVD", "December", "February", "Friday", "January", "July", "June", "March", "May", "Monday", "November", "October", "Saturday", "September", "Sunday", "T-shirt", "TV", "Thursday", "Tuesday", "Wednesday", "action", "activity", "actor", "actress", "address", "adult", "advice", "afternoon", "age", "air", "airport", "animal", "answer", "apartment", "apple", "area", "arm", "art", "article", "artist", "aunt", "baby", "back", "bag", "ball", "banana", "band", "bank (money)", "bar", "baseball", "basketball", "bath", "bathroom", "beach", "bed", "bedroom", "beer", "beginning", "bicycle", "bike", "bill", "bird", "birthday", "blog", "boat", "body", "book", "boot", "bottle", "box", "boy", "boyfriend", "bread", "breakfast", "brother", "building", "bus", "business", "butter", "cafe", "cake", "camera", "capital", "car", "card", "career", "carrot", "cat", "cent", "center", "chair", "chart", "cheese", "chicken", "child", "chocolate", "city", "class", "classroom", "clock", "clothes", "club", "coat", "coffee", "college", "color", "company", "computer", "concert", "conversation", "cooking", "cost", "country", "course", "cousin", "cow", "cream", "culture", "cup", "customer", "dad", "dance", "dancer", "dancing", "date", "daughter", "day", "description", "design", "desk", "detail", "dialogue", "dictionary", "diet", "difference", "dinner", "dish", "doctor", "dog", "dollar", "door", "dress", "drink", "driver", "ear", "east", "egg", "elephant", "email", "end", "euro", "evening", "event", "exam", "example", "exercise", "eye", "face", "fact", "family", "farm", "farmer", "father", "feeling", "festival", "fire", "fish", "flight", "floor", "flower", "food", "foot", "football", "form", "friend", "front", "fruit", "fun", "future", "game", "garden", "geography", "girl", "girlfriend", "glass", "grandfather", "grandmother", "grandparent", "group", "guitar", "gym", "hair", "half", "hand", "hat", "head", "health", "history", "hobby", "home", "homework", "horse", "hospital", "hotel", "hour", "house", "husband", "ice", "ice cream", "idea", "information", "interest", "internet", "interview", "island", "jacket", "jeans", "job", "juice", "key", "kind (type)", "kitchen", "land", "language", "leg", "lesson", "letter", "library", "life", "line", "lion", "list", "love", "lunch", "machine", "magazine", "mall", "man", "map", "market", "match (contest/correspond)", "meal", "meaning", "meat", "meeting", "member", "menu", "message", "meter", "midnight", "mile", "milk", "minute", "mistake", "model", "mom", "moment", "money", "month", "morning", "mother", "mountain", "mouse", "mouth", "movie", "museum", "music", "name", "neighbor", "neighborhood", "news", "newspaper", "night", "north", "nose", "note", "number", "nurse", "object", "ocean", "office", "onion", "opinion", "orange", "order", "page", "painting", "pair", "pants", "paper", "paragraph", "parent", "park", "part", "partner", "party", "passport", "pen", "pencil", "people", "pepper", "period", "person", "phone", "photo", "photograph", "phrase", "piano", "picture", "piece", "pig", "place", "plan", "plane", "plant", "player", "point", "police", "policeman", "pool", "post", "potato", "pound", "practice", "price", "problem", "product", "program", "project", "quarter", "question", "radio", "rain", "reader", "reading", "reason", "report", "restaurant", "result", "rice", "river", "road", "room", "routine", "rule", "salad", "salt", "sandwich", "school", "science", "scientist", "second (unit of time)", "section", "sentence", "sheep", "shirt", "shoe", "shop", "shopping", "shower", "singer", "sister", "situation", "skill", "skirt", "snake", "snow", "son", "song", "sound", "soup", "south", "space", "spelling", "sport", "spring", "star", "statement", "station", "store", "story", "street", "student", "study", "style", "subject", "success", "sugar", "summer", "sun", "supermarket", "sweater", "swimming", "table", "taxi", "tea", "teacher", "team", "teenager", "telephone", "television", "tennis", "test", "text", "theater", "thing", "ticket", "time", "title", "toilet", "tomato", "tooth", "topic", "tourist", "town", "traffic", "train", "tree", "trip", "truck", "type", "umbrella", "uncle", "university", "vacation", "vegetable", "video", "visitor", "waiter", "wall", "water", "way", "weather", "website", "week", "weekend", "west", "wife", "window", "wine", "winter", "woman", "word", "worker", "world", "writer", "writing", "yard", "year"],
    verb: ["add", "agree", "arrive", "ask", "be", "become", "begin", "believe", "born", "break", "bring", "build", "buy", "call", "carry", "change", "check", "choose", "climb", "close", "come", "compare", "cook", "create", "cut", "decide", "describe", "die", "discuss", "do", "draw", "drive", "eat", "enjoy", "explain", "fall", "feel", "fill", "find", "finish", "fly", "follow", "forget", "get", "give", "go", "grow", "guess", "happen", "hate", "have", "hear", "help", "hope", "imagine", "improve", "include", "introduce", "join", "keep", "know", "laugh", "learn", "leave", "let", "lie", "like (find sb/sth pleasant)", "listen", "live", "look", "lose", "make", "mean", "meet", "miss", "move", "need", "paint", "pay", "play", "prefer", "prepare", "put", "read", "relax", "remember", "repeat", "return", "ride", "run", "say", "see", "sell", "send", "share", "show", "sing", "sit", "sleep", "speak", "spell", "spend", "stand", "start", "stay", "stop", "swim", "take", "talk", "teach", "tell", "thank", "think", "travel", "try", "turn", "understand", "use", "visit", "wait", "wake", "walk", "want", "wash", "watch", "wear", "win", "work", "write"],
    adjective: ["afraid", "amazing", "angry", "awesome", "bad", "beautiful", "best", "better", "big", "black", "blond", "blue", "bored", "boring", "brown", "busy", "cheap", "clean", "cold", "common", "complete", "cool", "correct", "dangerous", "dark", "dear", "delicious", "different", "difficult", "dirty", "early", "easy", "excited", "exciting", "expensive", "extra", "false", "famous", "fantastic", "fast", "fat", "favorite", "final", "fine", "free", "friendly", "full", "funny", "good", "gray", "great", "green", "happy", "hard", "healthy", "high", "hot", "hungry", "important", "interested", "interesting", "large", "late", "left", "little", "local", "long", "main", "married", "modern", "natural", "negative", "new", "next", "nice", "old", "online", "only", "open", "opposite", "other", "own", "past", "perfect", "personal", "pink", "poor", "popular", "positive", "possible", "present", "pretty", "purple", "quick", "quiet", "ready", "real", "red", "rich", "right", "sad", "same", "short", "sick", "similar", "slow", "small", "smart", "sorry", "special", "strong", "sure", "tall", "terrible", "thirsty", "tired", "true", "useful", "warm", "white", "wonderful", "wrong", "yellow", "young"],
    adverb: ["again", "ago", "also", "always", "away", "below", "down", "downstairs", "else", "even", "ever", "far", "here", "how", "however", "just", "later", "maybe", "never", "not", "now", "off", "often", "once", "out", "outside", "o’clock", "probably", "quickly", "quite", "really", "so", "sometimes", "soon", "still", "then", "there", "today", "together", "tomorrow", "tonight", "too", "twice", "up", "upstairs", "usually", "very", "well", "when", "where", "why", "yesterday"],
    other: ["I", "OK", "a, an", "about", "above", "across", "after", "all", "and", "another", "any", "anyone", "anything", "around", "as", "at", "because", "before", "behind", "between", "both", "but", "by", "bye", "can", "cannot", "could", "during", "each", "eight", "eighteen", "eighty", "eleven", "enough", "every", "everybody", "everyone", "everything", "few", "fifteen", "fifth", "fifty", "first", "five", "for", "forty", "four", "fourteen", "fourth", "from", "goodbye", "have to", "he", "hello", "her", "hey", "hi", "him", "his", "hundred", "if", "in", "into", "it", "its", "last (final)", "like (similar)", "lot", "many", "me", "million", "more", "most", "much", "must", "my", "near", "next to", "nine", "nineteen", "ninety", "no", "no one", "nobody", "nothing", "of", "oh", "on", "one", "or", "our", "over", "please", "seven", "seventeen", "seventy", "she", "should", "six", "sixteen", "sixty", "some", "somebody", "someone", "something", "ten", "than", "thanks", "that", "the", "their", "them", "they", "third", "thirteen", "thirty", "this", "thousand", "three", "through", "to", "twelve", "twenty", "two", "under", "until", "us", "we", "welcome", "what", "which", "who", "will", "with", "without", "would", "yeah", "yes", "you", "your", "yourself"],
  },
  A2: {
    noun: ["ability", "accident", "advantage", "adventure", "advertisement", "advertising", "airline", "alternative", "amount", "ankle", "app", "appearance", "architect", "architecture", "argument", "army", "arrangement", "assistant", "athlete", "attack", "attention", "audience", "author", "award", "background", "bean", "bear (animal)", "beef", "behavior", "belt", "benefit", "biology", "birth", "bit", "block", "blood", "board", "bone", "boss", "bottom", "bowl", "brain", "bridge", "businessman", "button", "camp", "camping", "campus", "can", "candy", "care", "carpet", "cartoon", "case", "cash", "cause", "celebrity", "cell", "century", "chance", "character", "charity", "check", "chef", "chemistry", "chip", "choice", "church", "cigarette", "circle", "clerk", "climate", "closet", "clothing", "cloud", "coach", "coast", "code", "colleague", "column", "comedy", "comment", "community", "competition", "condition", "conference", "context", "continent", "control", "cook", "cookie", "copy", "corner", "couple", "credit", "crime", "criminal", "crowd", "cycle", "danger", "dark", "data", "death", "decision", "degree", "dentist", "department", "desert", "designer", "dessert", "detective", "device", "diary", "direction", "director", "disaster", "discovery", "discussion", "disease", "distance", "document", "drama", "drawing", "dream", "drive", "driving", "drug", "earth", "education", "effect", "electricity", "elevator", "employee", "employer", "ending", "energy", "engine", "engineer", "environment", "equipment", "error", "essay", "evidence", "experience", "experiment", "expert", "explanation", "expression", "factor", "factory", "fan", "farming", "fashion", "fat", "fear", "feature", "fever", "fiction", "field", "figure", "film", "final", "finger", "finish", "first", "fishing", "flu", "fly", "flying", "forest", "fork", "frog", "furniture", "gallery", "gap", "garbage", "gas", "gate", "gift", "goal", "god", "gold", "golf", "good", "government", "grass", "grocery", "ground", "guest", "guide", "gun", "guy", "habit", "hall", "headache", "heart", "heat", "height", "hero", "hill", "hockey", "hole", "holiday", "hope", "illness", "image", "individual", "industry", "injury", "insect", "instruction", "instructor", "instrument", "introduction", "invention", "invitation", "item", "jam", "jazz", "jewelry", "joke", "journalist", "kid", "kilometer", "king", "knee", "knife", "knowledge", "lab", "lady", "lake", "lamp", "laptop", "laughter", "law", "lawyer", "leader", "learning", "lecture", "lemon", "level", "lifestyle", "link", "listener", "look", "luck", "mail", "manager", "manner", "material", "math", "mathematics", "matter", "mayor", "media", "medicine", "memory", "metal", "method", "middle", "mind", "mirror", "monkey", "moon", "motorcycle", "movement", "musician", "nature", "neck", "need", "network", "noise", "novel", "nut", "officer", "oil", "opportunity", "option", "organization", "oven", "owner", "pain", "painter", "palace", "parking", "passenger", "patient", "pattern", "pay", "peace", "penny", "permission", "personality", "pet", "physics", "pilot", "planet", "plastic", "plate", "platform", "pocket", "pollution", "pop", "population", "position", "possession", "possibility", "poster", "power", "president", "printer", "prison", "prize", "process", "professor", "profile", "progress", "purpose", "quality", "quantity", "queen", "race (competition)", "railroad", "rate", "reception", "recipe", "record", "recording", "refrigerator", "region", "relationship", "reporter", "request", "research", "researcher", "response", "rest (remaining part)", "rest (sleep/relax)", "review", "ride", "ring", "rock (music)", "rock (stone)", "role", "roof", "route", "run", "runner", "running", "sailing", "salary", "sale", "sauce", "scene", "schedule", "screen", "sea", "search", "season", "seat", "secretary", "sense", "series", "service", "shape", "sheet", "ship", "shoulder", "side", "sign", "silver", "singing", "sir", "site", "size", "skiing", "skin", "sky", "sleep", "smartphone", "smoke", "smoking", "sneaker", "soap", "soccer", "society", "sock", "soldier", "solution", "sort", "source", "speaker", "speech", "speed", "spider", "spoon", "stage", "stair", "stamp", "start", "state", "stay", "step", "stomach", "stone", "storm", "stove", "strategy", "stress", "structure", "subway", "suggestion", "suit", "surprise", "survey", "symbol", "system", "tablet", "talk", "target", "task", "taste", "teaching", "technology", "temperature", "term", "thief", "thinking", "third", "thought", "tip", "tool", "top", "tour", "tourism", "towel", "tower", "toy", "track", "tradition", "training", "transportation", "trash", "traveler", "trouble", "twin", "understanding", "uniform", "unit", "use", "user", "valley", "variety", "vehicle", "view", "village", "virus", "voice", "wait", "war", "wash", "washing", "wave", "web", "wedding", "weight", "welcome", "wheel", "wind", "winner", "wood"],
    verb: ["accept", "achieve", "act", "advertise", "affect", "allow", "analyze", "appear", "apply", "argue", "arrange", "attend", "avoid", "beat", "behave", "belong", "blow", "boil", "book", "borrow", "brush", "burn", "catch", "celebrate", "chat", "collect", "communicate", "compete", "complain", "connect", "consider", "contain", "continue", "count", "cover", "cross", "cry", "deal", "depend", "destroy", "develop", "disagree", "disappear", "discover", "download", "drop", "earn", "employ", "enter", "exist", "expect", "express", "fail", "farm", "feed", "fight", "fire", "fish", "fit", "fix", "focus", "greet", "hide", "hit", "hold", "hurt", "identify", "increase", "invent", "invite", "involve", "jump", "kill", "knock", "land", "last (taking time)", "lead", "lend", "lift", "light (from the sun/a lamp)", "lock", "manage", "mark", "marry", "mention", "notice", "number", "offer", "organize", "own", "pack", "pass", "perform", "photograph", "pick", "plant", "please", "predict", "present", "prevent", "print", "produce", "promise", "pronounce", "protect", "provide", "publish", "pull", "push", "question", "raise", "reach", "react", "realize", "receive", "recognize", "recommend", "recycle", "reduce", "refer", "refuse", "remove", "repair", "replace", "reply", "report", "respond", "ring", "rise", "sail", "save", "score", "seem", "serve", "shake", "shout", "shut", "ski", "smell", "smile", "solve", "star", "steal", "succeed", "suggest", "support", "suppose", "text", "throw", "tie", "touch", "train", "wish", "worry"],
    adjective: ["able", "active", "adult", "alive", "all right", "alone", "ancient", "asleep", "attractive", "available", "average", "awful", "back", "based", "blank", "bright", "brilliant", "broken", "careful", "certain", "classical", "clear", "close", "closed", "comfortable", "connected", "crazy", "creative", "crowded", "curly", "daily", "dead", "deep", "digital", "direct", "divorced", "double", "downstairs", "dry", "electric", "electrical", "electronic", "empty", "enormous", "everyday", "exact", "excellent", "extreme", "fair", "female", "flat", "following", "foreign", "formal", "fresh", "fun", "further", "future", "general", "heavy", "helpful", "home", "huge", "human", "ideal", "ill", "impossible", "included", "incredible", "independent", "informal", "intelligent", "international", "later", "lazy", "light (not heavy)", "likely", "lost", "loud", "low", "lucky", "major", "male", "medical", "missing", "musical", "narrow", "national", "necessary", "nervous", "noisy", "normal", "ordinary", "original", "particular", "percent noun.,", "physical", "pleased", "polite", "professional", "public", "recent", "regular", "round", "rude", "safe", "scared", "scary", "secret", "separate", "serious", "simple", "single", "social", "soft", "specific", "square", "strange", "stupid", "successful", "surprised", "surprising", "sweet", "teenage", "thick", "thin", "traditional", "typical", "underground", "unhappy", "united", "unusual", "upstairs", "usual", "weak", "wet", "whole", "wide", "wild", "wooden", "working", "worried", "worse", "worst"],
    adverb: ["actually", "all", "almost", "already", "any", "anymore", "anyway", "anywhere", "as", "badly", "best", "better", "between", "carefully", "certainly", "clearly", "completely", "correctly", "definitely", "differently", "downtown", "easily", "especially", "everywhere", "exactly", "extremely", "finally", "fortunately", "forward", "free", "half", "happily", "high", "immediately", "instead", "last (final)", "little", "loudly", "mostly", "nearly", "normally", "nowhere", "overseas", "past", "perhaps", "quietly", "rather", "recently", "sadly", "second (next after the first)", "slowly", "somewhere", "straight", "suddenly", "sure", "unfortunately", "yet"],
    other: ["according to", "after", "against", "ah", "along", "although", "among", "anybody", "before", "billion", "either", "except", "have", "hers", "herself", "himself", "his", "including", "inside", "itself", "least", "less", "may", "might", "mine (belongs to me)", "myself", "neither", "none", "onto", "ourselves", "outside", "per", "several", "since", "such", "themselves", "toward", "used to", "while", "whose", "wow", "yours", "zero"],
  },
  B1: {
    noun: ["IT", "access", "account", "achievement", "act", "ad", "addition", "administration", "agent", "agreement", "alarm", "album", "alcohol", "ambition", "analysis", "announcement", "application", "appointment", "arrival", "assignment", "atmosphere", "attitude", "attraction", "authority", "balance", "bank (river)", "base", "basis", "battery", "battle", "beauty", "bee", "belief", "bell", "better", "bomb", "border", "branch", "brand", "breath", "breathing", "bride", "bubble", "cable", "campaign", "candidate", "cap", "captain", "category", "ceiling", "celebration", "ceremony", "chain", "challenge", "champion", "channel", "chapter", "charge", "chest", "childhood", "clause", "client", "climb", "cloth", "clue", "coal", "coin", "collection", "communication", "comparison", "competitor", "complaint", "conclusion", "connection", "consequence", "consumer", "contact", "container", "content", "contrast", "corn", "costume", "cotton", "count", "countryside", "court", "cover", "cupboard", "currency", "curtain", "custom", "cut", "damage", "deal", "decade", "definition", "departure", "destination", "development", "diagram", "diamond", "difficulty", "dirt", "disadvantage", "discount", "district", "documentary", "doubt", "drop", "drum", "dust", "duty", "earthquake", "economy", "edge", "editor", "effort", "election", "element", "emergency", "emotion", "employment", "enemy", "engineering", "entertainment", "entrance", "entry", "episode", "exchange", "excitement", "exhibition", "exit", "explosion", "export", "extra", "favor", "fence", "fighting", "file", "fitness", "flag", "flood", "flour", "folk", "following", "force", "frame", "friendship", "fuel", "function", "fur", "garage", "generation", "gentleman", "ghost", "glove", "go", "grade", "graduate", "grain", "growth", "guard", "happiness", "hate", "headline", "heating", "helicopter", "highway", "horror", "host", "hurricane", "hurry", "identity", "immigrant", "impact", "import", "importance", "impression", "improvement", "influence", "ingredient", "intelligence", "intention", "iron", "issue", "journal", "journey", "judge", "keyboard", "killing", "knock", "label", "laboratory", "lack", "layer", "lead", "leaf", "leather", "leisure", "length", "like (find sb/sth pleasant)", "limit", "lip", "liquid", "literature", "local", "location", "loss", "luxury", "magic", "management", "marketing", "marriage", "mention", "mess", "mine (hole in the ground)", "mixture", "mood", "move", "mud", "murder", "muscle", "musical", "mystery", "nail", "narrative", "nation", "needle", "net", "next", "normal", "occasion", "operation", "organizer", "original", "pack", "package", "pan", "pass", "passion", "path", "payment", "percentage", "performance", "photographer", "photography", "pin", "pipe", "planning", "pleasure", "plot", "poem", "poet", "poetry", "poison", "policy", "politician", "politics", "port", "portrait", "pot", "poverty", "powder", "prayer", "prediction", "presentation", "press", "pressure", "priest", "prince", "princess", "principal", "printing", "prisoner", "producer", "production", "profession", "profit", "property", "protest", "pull", "punishment", "push", "qualification", "quotation", "race (of people)", "racing", "raise", "range", "reaction", "reality", "receipt", "recommendation", "reference", "relation", "religion", "rent", "repair", "repeat", "reservation", "resource", "respect", "responsibility", "ring", "risk", "robot", "rope", "row", "safety", "sail", "sailor", "sample", "sand", "script", "sculpture", "security", "seed", "servant", "set (group)", "setting", "sex", "shake", "share", "shelf", "shell", "shift", "sight", "signal", "similarity", "slave", "slice", "software", "soil", "spending", "spirit", "spot", "stadium", "staff", "standard", "statistic", "statue", "stick (piece of wood)", "stranger", "strength", "string", "studio", "stuff", "substance", "summary", "supply", "supporter", "surface", "swim", "symptom", "tail", "talent", "tape", "tax", "technique", "tent", "theme", "theory", "throat", "tire", "toe", "ton", "tongue", "touch", "trade", "trainer", "translation", "treatment", "trend", "trick", "truth", "tube", "underwear", "unemployment", "union", "value", "version", "victim", "viewer", "volunteer", "vote", "warning", "waste", "weapon", "while", "whole", "will", "win", "wing", "wool", "worry", "young", "youth"],
    verb: ["admire", "admit", "advise", "afford", "age", "aim", "announce", "annoy", "apologize", "appreciate", "arrest", "assist", "attach", "attract", "average", "award", "bake", "ban", "bend", "benefit", "bite", "block", "board", "bother", "breathe", "bury", "center", "cheat", "claim", "clear", "click", "coach", "combine", "comment", "commit", "concentrate", "conclude", "confirm", "confuse", "consist", "consume", "convince", "cool", "define", "deliver", "determine", "direct", "dislike", "divide", "donate", "educate", "empty", "encourage", "entertain", "escape", "examine", "expand", "experience", "experiment", "explode", "explore", "face", "fasten", "fear", "feature", "flow", "fold", "freeze", "frighten", "fry", "gather", "hand", "hang", "head", "highlight", "hire", "hunt", "ignore", "indicate", "injure", "intend", "invest", "investigate", "key", "kick", "kiss", "lay", "lie (tell a lie)", "locate", "market", "measure", "mix", "note", "occur", "participate", "persuade", "place", "point", "pour", "pray", "pretend", "program", "promote", "prove", "punish", "qualify", "quit", "quote", "reflect", "reject", "relate", "release", "remain", "remind", "represent", "request", "require", "result", "retire", "revise", "roll", "rule", "scan", "separate", "set (put)", "shine", "shoot", "sink", "slow", "sort", "spread", "spring", "stick (push into/attach)", "store", "suffer", "suit", "summarize", "survive", "switch", "tend", "tip", "tour", "translate", "transport", "treat", "type", "update", "view", "warm", "warn", "water", "wave", "weigh", "wonder"],
    adjective: ["academic", "advanced", "alcoholic", "alternative", "amazed", "annoyed", "annoying", "automatic", "aware", "basic", "brave", "calm", "careless", "central", "cheerful", "chemical", "clever", "colored", "commercial", "competitive", "complex", "confident", "confused", "continuous", "convenient", "covered", "cream", "criminal", "cruel", "cultural", "current", "definite", "determined", "disappointed", "disappointing", "dressed", "drunk", "due", "eastern", "economic", "educated", "educational", "effective", "embarrassed", "embarrassing", "engaged", "environmental", "equal", "essential", "expected", "experienced", "familiar", "fancy", "far", "fascinating", "fashionable", "federal", "financial", "fixed", "frightened", "frightening", "frozen", "generous", "gentle", "giant", "glad", "global", "grateful", "guilty", "historic", "historical", "honest", "horrible", "illegal", "imaginary", "immediate", "impressive", "indirect", "indoor", "injured", "innocent", "involved", "kind (caring)", "latest", "leading", "legal", "level", "live", "living", "located", "lonely", "mad", "medium", "mental", "mild", "native", "neat", "northern", "nuclear", "obvious", "odd", "official", "old-fashioned", "organized", "outdoor", "overseas", "painful", "pale", "peaceful", "pleasant", "poisonous", "political", "powerful", "practical", "prepared", "previous", "primary", "private", "proper", "proud", "qualified", "rare", "related", "relative", "relaxed", "relaxing", "reliable", "religious", "remote", "repeated", "responsible", "retired", "romantic", "rough", "royal", "scientific", "secondary", "sensible", "sexual", "sharp", "shiny", "shy", "silent", "silly", "smooth", "solid", "southern", "spicy", "spoken", "state", "still", "sudden", "suitable", "talented", "technical", "tight", "tiny", "total", "ugly", "unable", "uncomfortable", "unemployed", "unfair", "unlikely", "unnecessary", "unpleasant", "upset", "used", "valuable", "various", "violent", "western", "worldwide", "worth", "written"],
    adverb: ["absolutely", "ahead", "apart", "approximately", "automatically", "backward", "by", "cheap", "close", "currently", "daily", "deep", "directly", "double", "effectively", "equally", "eventually", "fairly", "forever", "frequently", "further", "generally", "hardly", "heavily", "highly", "incredibly", "indeed", "indoors", "mainly", "meanwhile", "naturally", "necessarily", "neither", "obviously", "originally", "outdoors", "particularly", "perfectly", "personally", "possibly", "previously", "properly", "rarely", "regularly", "seriously", "similarly", "simply", "since", "slightly", "specifically", "strongly", "successfully", "surely", "that", "therefore", "this", "totally", "typically", "worse", "worst", "wrong"],
    other: ["despite", "except", "need", "nor", "now", "once", "ought", "ours", "plenty", "plus", "theirs", "though", "throughout", "till", "unless", "unlike", "upon", "whatever", "whenever", "whether", "within"],
  },
  B2: {
    noun: ["AIDS", "ID", "accent", "accommodation", "accountant", "accuracy", "acid", "acre", "addiction", "advance", "affair", "agency", "agenda", "agriculture", "aid", "aircraft", "alien", "ambulance", "analyst", "ancestor", "anger", "angle", "animation", "anniversary", "anxiety", "apology", "appeal", "applicant", "approach", "approval", "arms", "arrow", "artwork", "aspect", "assessment", "asset", "assistance", "association", "assumption", "attachment", "attempt", "attorney", "awareness", "bacteria", "badge", "ballet", "balloon", "bargain", "barrier", "basement", "basket", "bat", "beat", "being", "bias", "bid", "blanket", "blow", "bombing", "bond", "breast", "brick", "broadcaster", "buck", "budget", "bug", "bullet", "bunch", "burn", "bush", "cabin", "canal", "cancer", "candle", "capacity", "carbon", "cast", "catch", "cave", "certainty", "certificate", "chairman", "championship", "characteristic", "cheek", "circuit", "circumstance", "citizen", "civilization", "cliff", "clinic", "clip", "close", "coincidence", "collector", "colony", "combination", "comfort", "command", "commander", "commission", "commitment", "committee", "completion", "complex", "component", "composer", "compound", "concentration", "concept", "concern", "confidence", "conflict", "confusion", "congress", "conservation", "consideration", "conspiracy", "construction", "consultant", "consumption", "contest", "contract", "contribution", "controversy", "convenience", "convention", "cop", "core", "corporation", "corridor", "council", "counter (long flat surface)", "county", "courage", "coverage", "cowboy", "craft", "crash", "creation", "creativity", "creature", "crew", "crisis", "criterion", "critic", "criticism", "crop", "cruise", "cry", "cue", "current", "curriculum", "curve", "dairy", "darkness", "database", "deadline", "dealer", "debate", "debt", "deck", "decoration", "defender", "defense", "delivery", "demand", "democracy", "demonstration", "deposit", "depression", "depth", "desire", "destruction", "determination", "dime", "disability", "disagreement", "disappointment", "discipline", "disk", "disorder", "distribution", "diversity", "divide", "division", "divorce", "donation", "dot", "dozen", "draft", "drought", "duration", "economics", "economist", "edition", "elbow", "electronics", "emission", "emphasis", "empire", "enthusiasm", "entrepreneur", "envelope", "equal", "equivalent", "era", "estate", "ethic", "evaluation", "evolution", "examination", "exception", "excuse", "executive", "existence", "expansion", "expectation", "expedition", "expense", "expertise", "exploration", "exposure", "extension", "extent", "extract", "extreme", "fabric", "facility", "faculty", "failure", "faith", "fame", "fantasy", "fare", "fault", "feather", "fee", "feed", "feedback", "feel", "finance", "finding", "firefighter", "firework", "firm", "fix", "flame", "flash", "flavor", "fold", "fool", "forecast", "format", "formation", "fortune", "forum", "fossil", "foundation", "founder", "fraction", "fragment", "framework", "fraud", "freedom", "frequency", "fund", "funding", "gallon", "gaming", "gang", "gender", "gene", "genius", "genre", "gesture", "globalization", "globe", "goodness", "goods", "governor", "graphics", "greenhouse", "guideline", "habitat", "harbor", "harm", "headquarters", "healthcare", "hearing", "heaven", "heel", "hell", "helmet", "herb", "high", "hip", "hire", "historian", "hold", "honesty", "honey", "honor", "hook", "household", "housing", "humor", "hunger", "hunt", "hunting", "hurt", "hypothesis", "icon", "ideal", "illusion", "illustration", "imagination", "immigration", "implication", "incentive", "inch", "incident", "income", "independence", "index", "indication", "infection", "inflation", "info", "infrastructure", "inhabitant", "initiative", "ink", "innovation", "input", "inquiry", "insight", "inspector", "installation", "instance", "institute", "institution", "insurance", "interaction", "interpretation", "interval", "invasion", "investigation", "investment", "investor", "jail", "jet", "journalism", "joy", "judgment", "jury", "justice", "kindergarten", "kit", "labor", "ladder", "landing", "landscape", "lane", "latest", "leadership", "league", "leave", "legend", "lens", "license", "lifetime", "lighting", "limitation", "litter", "load", "loan", "logo", "lord", "lottery", "low", "lung", "lyric", "major", "majority", "make", "makeup", "making", "manufacturing", "marathon", "margin", "marker", "mass", "master", "mate", "means", "measurement", "mechanic", "mechanism", "medal", "medication", "medium", "membership", "metaphor", "miner", "mineral", "minister", "minority", "mission", "mode", "monitor", "monster", "monument", "mortgage", "mosque", "mosquito", "motion", "motivation", "motor", "myth", "national", "navigation", "necessity", "negative", "negotiation", "nerve", "nickel", "nightmare", "norm", "notebook", "notion", "novelist", "nutrition", "obesity", "objective", "obligation", "observation", "observer", "obstacle", "occupation", "offender", "offense", "official", "opening", "opera", "operator", "opponent", "opposition", "orchestra", "organ", "origin", "outcome", "outfit", "outline", "output", "ownership", "oxygen", "pace", "packet", "palm", "panel", "panic", "parade", "participant", "participation", "partnership", "passage", "password", "patch", "patience", "peer", "penalty", "perception", "perspective", "pharmacy", "phase", "phenomenon", "philosophy", "physician", "pick", "pile", "pill", "pitch", "pity", "placement", "popularity", "portion", "positive", "praise", "preference", "preparation", "presence", "pride", "principle", "print", "priority", "privacy", "probability", "procedure", "produce", "professional", "programming", "promotion", "proof", "proportion", "proposal", "prospect", "protection", "protein", "protester", "psychologist", "psychology", "publication", "publicity", "publishing", "punk", "purchase", "pursuit", "puzzle", "questionnaire", "racism", "radiation", "rail", "rank", "rat", "rating", "reach", "receiver", "recession", "recognition", "recovery", "reduction", "referee", "refugee", "registration", "regulation", "relief", "remark", "rental", "reporting", "representative", "reputation", "requirement", "reserve", "resident", "resolution", "resort", "restriction", "retail", "retirement", "revenue", "revision", "revolution", "reward", "rhythm", "rise", "rival", "robbery", "rocket", "romance", "root", "rose", "round", "rubber", "résumé", "satellite", "satisfaction", "saving", "scale", "scandal", "scenario", "scholar", "scholarship", "screening", "sector", "seeker", "selection", "self", "seminar", "senate", "senator", "sequence", "session", "settler", "shade", "shadow", "shame", "shelter", "shock", "shooting", "shore", "shortage", "shot", "sibling", "sidewalk", "signature", "significance", "silence", "silk", "skull", "slogan", "slope", "soul", "specialist", "species", "spectator", "speculation", "spice", "spite", "spokesman", "spokesperson", "spokeswoman", "sponsorship", "spread", "stall", "stance", "stand", "status", "steam", "steel", "stock", "stream", "stroke", "suburb", "suffering", "sum", "surgeon", "surgery", "survival", "survivor", "switch", "sympathy", "tag", "tale", "tank", "tear", "teen", "temple", "tendency", "tension", "terminal", "terms", "territory", "terror", "terrorism", "terrorist", "testing", "textbook", "theft", "therapist", "therapy", "thesis", "threat", "thumb", "timing", "tissue", "tone", "tournament", "trading", "tragedy", "trait", "transition", "treasure", "trial", "tribe", "troop", "trust", "try", "tsunami", "tune", "tunnel", "uncertainty", "unity", "universe", "usage", "van", "variation", "venue", "victory", "viewpoint", "violence", "visa", "vision", "vitamin", "volume", "voting", "wage", "warming", "weakness", "wealth", "welfare", "wheat", "wildlife", "wire", "wisdom", "witness", "wolf", "workforce", "workplace", "workshop", "worm", "worse", "worst", "worth", "wound", "wrist", "wrong", "zone"],
    verb: ["abandon", "absorb", "accommodate", "accompany", "accomplish", "account", "accuse", "acknowledge", "acquire", "activate", "adapt", "address", "adjust", "adopt", "alarm", "alter", "amount", "anticipate", "approve", "arise", "assess", "assign", "associate", "assume", "assure", "back", "bar", "battle", "bear (deal with)", "beg", "bet", "bill", "blame", "boost", "border", "broadcast", "calculate", "cancel", "capture", "chain", "chair", "challenge", "chart", "chase", "cheer", "chop", "cite", "clarify", "classify", "collapse", "compose", "comprise", "conduct", "confess", "construct", "consult", "contribute", "convert", "convey", "cope", "crack", "credit", "criticize", "cure", "dare", "date", "declare", "decline", "decorate", "decrease", "defeat", "defend", "delay", "delete", "demonstrate", "deny", "depart", "derive", "desert", "deserve", "detail", "detect", "devote", "differ", "dig", "disappoint", "discount", "discourage", "dismiss", "display", "distinguish", "distract", "distribute", "disturb", "dive", "document", "dominate", "drag", "dump", "edit", "elect", "eliminate", "embrace", "emerge", "emphasize", "enable", "encounter", "engage", "enhance", "ensure", "equip", "erupt", "establish", "estimate", "evaluate", "evolve", "exceed", "exclude", "exhibit", "exit", "exploit", "expose", "extend", "favor", "figure", "file", "float", "forbid", "forgive", "found", "free", "fuel", "fulfill", "function", "gain", "generate", "govern", "grab", "grade", "grant", "guarantee", "handle", "heal", "hesitate", "host", "house", "illustrate", "implement", "imply", "impose", "impress", "incorporate", "infer", "inform", "inherit", "insert", "insist", "inspire", "install", "integrate", "interact", "interpret", "interrupt", "invade", "isolate", "issue", "justify", "launch", "lean", "level", "line", "lower", "maintain", "manufacture", "map", "melt", "mistake", "model", "modify", "motivate", "mount", "multiply", "narrow", "negotiate", "obey", "object", "observe", "obtain", "occupy", "offend", "operate", "oppose", "overcome", "owe", "package", "pause", "perceive", "permit", "picture", "plot", "pose", "position", "possess", "power", "precede", "preserve", "price", "proceed", "process", "progress", "prohibit", "project", "prompt", "propose", "pursue", "range", "rate", "rebuild", "recall", "reckon", "recover", "recruit", "regard", "register", "regret", "regulate", "reinforce", "relieve", "rely", "rescue", "resign", "resist", "resolve", "restore", "restrict", "retain", "reveal", "rid", "rob", "rub", "ruin", "rush", "sample", "satisfy", "scare", "schedule", "scratch", "scream", "screen", "seat", "secure", "seek", "select", "sense", "sentence", "settle", "shape", "shift", "ship", "slide", "slip", "specialize", "specify", "speculate", "speed", "spill", "split", "spoil", "sponsor", "spot", "stage", "stare", "starve", "step", "stimulate", "strengthen", "stretch", "strike", "structure", "struggle", "stuff", "submit", "surround", "survey", "suspect", "suspend", "swallow", "swear", "sweep", "tackle", "tap", "target", "tear", "term", "terrify", "threaten", "time", "title", "trace", "track", "transfer", "transform", "transmit", "trap", "trigger", "trip", "trouble", "undergo", "undertake", "unfold", "unite", "urge", "value", "vary", "wander", "whisper", "wind", "withdraw", "wrap"],
    adjective: ["absolute", "abstract", "acceptable", "accurate", "actual", "additional", "adequate", "affordable", "aged", "aggressive", "ambitious", "amusing", "annual", "anxious", "apparent", "appropriate", "armed", "artificial", "artistic", "ashamed", "associated", "astonishing", "athletic", "audio", "awkward", "balanced", "beneficial", "bent", "biological", "bitter", "blind", "bold", "bound", "brief", "broad", "capable", "casual", "challenging", "charming", "chief", "civil", "classic", "colorful", "comic", "comparative", "complicated", "comprehensive", "compulsory", "concerned", "concrete", "confusing", "conscious", "conservative", "considerable", "consistent", "constant", "contemporary", "controversial", "conventional", "convinced", "convincing", "corporate", "critical", "crucial", "curious", "curved", "cute", "deadly", "decent", "deliberate", "democratic", "dependent", "depressed", "depressing", "desperate", "detailed", "disabled", "dishonest", "distant", "distinct", "diverse", "domestic", "dominant", "downward", "dramatic", "dull", "dynamic", "eager", "editorial", "efficient", "elderly", "elegant", "elementary", "emotional", "enjoyable", "entertaining", "enthusiastic", "entire", "ethical", "ethnic", "even", "evident", "evil", "excessive", "exotic", "extensive", "external", "extraordinary", "fabulous", "failed", "fake", "fellow", "firm", "flexible", "folding", "fond", "former", "fortunate", "forward", "frequent", "full-time", "fundamental", "furious", "gay", "genetic", "genuine", "golden", "gorgeous", "grand", "graphic", "harmful", "hidden", "hilarious", "hollow", "holy", "homeless", "humorous", "identical", "immune", "impatient", "impressed", "incorrect", "industrial", "inevitable", "initial", "inner", "innovative", "instant", "intellectual", "intended", "intense", "internal", "isolated", "joint", "junior", "limited", "literary", "lively", "logical", "long-term", "loose", "loyal", "martial", "massive", "matching", "material", "maximum", "mechanical", "memorable", "military", "minimum", "minor", "miserable", "mixed", "modest", "monthly", "moral", "moving", "multiple", "mysterious", "naked", "nasty", "nearby", "neutral", "numerous", "nursing", "offensive", "ongoing", "opposed", "optimistic", "organic", "outer", "outstanding", "overall", "parallel", "part-time", "passionate", "patient", "permanent", "plain", "plus", "pointed", "potential", "precious", "precise", "predictable", "pregnant", "presidential", "prime", "principal", "prior", "probable", "progressive", "promising", "psychological", "pure", "racial", "racist", "random", "rapid", "raw", "realistic", "reasonable", "regional", "relevant", "relieved", "remarkable", "ridiculous", "risky", "routine", "rural", "satisfied", "senior", "sensitive", "severe", "sexy", "shallow", "shaped", "shocked", "shocking", "short-term", "significant", "sincere", "skilled", "slight", "so-called", "solar", "sophisticated", "spare", "spectacular", "spiritual", "stable", "steady", "steep", "sticky", "stiff", "strict", "stunning", "subject", "subsequent", "sufficient", "super", "surrounding", "sustainable", "sympathetic", "technological", "temporary", "thorough", "tough", "tragic", "tropical", "ultimate", "unacceptable", "unconscious", "unexpected", "unfortunate", "unique", "universal", "unknown", "upper", "urban", "urgent", "useless", "valid", "vast", "vertical", "very", "virtual", "visible", "visual", "vital", "voluntary", "wealthy", "weekly", "weird", "widespread", "willing", "wise"],
    adverb: ["abroad", "accidentally", "accurately", "additionally", "adequately", "afterward", "altogether", "annually", "apparently", "appropriately", "aside", "barely", "basically", "briefly", "broadly", "closely", "commonly", "consequently", "considerably", "consistently", "constantly", "critically", "deeply", "deliberately", "desperately", "dramatically", "efficiently", "elsewhere", "emotionally", "entirely", "essentially", "extensively", "firmly", "formerly", "freely", "fully", "fundamentally", "furthermore", "genuinely", "gradually", "greatly", "hence", "hopefully", "increasingly", "inevitably", "initially", "instantly", "largely", "lately", "likewise", "literally", "moreover", "nevertheless", "newly", "nowadays", "occasionally", "openly", "otherwise", "overnight", "partly", "permanently", "potentially", "precisely", "primarily", "purely", "rapidly", "reasonably", "relatively", "remarkably", "roughly", "severely", "shortly", "significantly", "somehow", "sometime", "somewhat", "steadily", "strictly", "subsequently", "sufficiently", "temporarily", "terribly", "thoroughly", "thus", "truly", "ultimately", "upward", "way", "widely"],
    other: ["alongside", "beside", "besides", "beyond", "but", "following", "shall", "trillion", "via", "whereas", "wherever", "whoever", "whom", "yet"],
  },
  C1: {
    noun: ["abortion", "absence", "abuse", "academy", "acceptance", "accomplishment", "accountability", "accumulation", "accusation", "accused", "acquisition", "activation", "activist", "adaptation", "adjustment", "administrator", "admission", "adolescent", "adoption", "advocate", "affection", "aftermath", "aggression", "aide", "alignment", "allegation", "alliance", "allocation", "allowance", "ally", "aluminum", "ambassador", "amendment", "analogy", "anchor", "angel", "apparatus", "apparel", "appetite", "appreciation", "archive", "arena", "array", "ash", "aspiration", "assassination", "assault", "assembly", "assertion", "assurance", "asylum", "atrocity", "attendance", "auction", "audit", "auto", "autonomy", "autumn", "availability", "backdrop", "backing", "backup", "bail", "ballot", "bankruptcy", "banner", "barrel", "bass", "battlefield", "bay", "beam", "beast", "behalf", "bench", "benchmark", "beneficiary", "beverage", "biography", "bishop", "blade", "blast", "blessing", "bonus", "booking", "boom", "boundary", "breach", "breakdown", "breakthrough", "broadband", "browser", "buddy", "buffer", "bulk", "burden", "bureaucracy", "burial", "cabinet", "calculation", "canvas", "capability", "capitalism", "cargo", "carriage", "casino", "casualty", "catalog", "cattle", "caution", "cemetery", "chamber", "chaos", "charm", "charter", "choir", "chunk", "circulation", "citizenship", "civilian", "clarity", "clash", "classification", "closure", "cluster", "coalition", "cocktail", "collaboration", "collision", "columnist", "combat", "commentary", "commentator", "commerce", "commissioner", "commodity", "companion", "compassion", "compensation", "competence", "complexity", "compliance", "complication", "composition", "compromise", "conception", "concession", "confession", "configuration", "confirmation", "confrontation", "congregation", "conscience", "consciousness", "consensus", "consent", "consistency", "constitution", "constraint", "consultation", "contempt", "contender", "contention", "contractor", "contradiction", "contributor", "conversion", "conviction", "coordination", "coordinator", "copper", "copyright", "correction", "correlation", "correspondence", "correspondent", "corruption", "councilor", "counseling", "counselor", "counterpart", "coup", "courtesy", "creator", "credibility", "critique", "crown", "crystal", "cult", "curiosity", "custody", "cutting", "dam", "dawn", "debris", "debut", "decision-making", "declaration", "dedication", "deed", "default", "defect", "deficiency", "deficit", "delegate", "delegation", "demon", "denial", "density", "dependence", "deployment", "deputy", "descent", "desktop", "detection", "detention", "devil", "diagnosis", "dictator", "dignity", "dilemma", "dimension", "diplomat", "diplomatic", "directory", "disclosure", "discourse", "discretion", "discrimination", "dismissal", "disposal", "dispute", "disruption", "distinction", "distress", "doctrine", "documentation", "domain", "dominance", "donor", "dose", "duo", "dynamic", "earnings", "ease", "educator", "effectiveness", "efficiency", "ego", "elite", "embarrassment", "embassy", "emergence", "encouragement", "endeavor", "endorsement", "enforcement", "engagement", "enterprise", "enthusiast", "entity", "epidemic", "equality", "equation", "essence", "establishment", "excellence", "excess", "exclusion", "execution", "exile", "expenditure", "exploitation", "extremist", "faction", "fairness", "fate", "feat", "felony", "fiber", "filmmaker", "filter", "fine", "firearm", "fit", "flaw", "fleet", "flesh", "flexibility", "fluid", "footage", "foreigner", "formula", "franchise", "freshman", "frustration", "fundraising", "funeral", "gambling", "gathering", "gaze", "gear", "genocide", "gig", "glance", "glimpse", "glory", "governance", "grace", "grave (for dead person)", "gravity", "grid", "grief", "grip", "guerrilla", "guidance", "guilt", "gut", "handful", "handling", "harassment", "hardware", "harmony", "harvest", "hatred", "hazard", "heritage", "hierarchy", "hint", "homeland", "horizon", "horn", "hostage", "hostility", "humanity", "hydrogen", "identification", "ideology", "idiot", "ignorance", "imagery", "implementation", "inability", "incarceration", "incidence", "inclusion", "indicator", "indictment", "inequality", "infant", "injection", "injustice", "inmate", "insertion", "insider", "inspection", "inspiration", "instinct", "insult", "intake", "integration", "integrity", "intellectual", "intensity", "intent", "interface", "interference", "intersection", "intervention", "inventory", "investigator", "involvement", "irony", "isolation", "jurisdiction", "justification", "kidney", "kingdom", "landlord", "landmark", "lap", "laser", "lawmaker", "lawn", "lawsuit", "layout", "legacy", "legislation", "legislature", "liberation", "liberty", "likelihood", "limb", "lineup", "listing", "liter", "literacy", "liver", "lobby", "log", "logic", "loop", "loyalty", "machinery", "magnitude", "mainland", "mainstream", "maintenance", "mandate", "manipulation", "manuscript", "march", "marketplace", "mask", "massacre", "meantime", "meditation", "melody", "memo", "memoir", "memorial", "mentor", "merchant", "mercy", "merger", "merit", "methodology", "midst", "migration", "militant", "militia", "mill", "mining", "ministry", "miracle", "misery", "missile", "mob", "mobility", "modification", "module", "momentum", "monk", "monopoly", "morality", "motive", "nest", "newsletter", "niche", "nomination", "nominee", "nonsense", "noon", "nursery", "objection", "obsession", "occurrence", "odds", "offering", "offspring", "optimism", "orientation", "outbreak", "outing", "outlet", "outlook", "outrage", "outsider", "pad", "parameter", "parliament", "passing", "pastor", "patent", "pathway", "patrol", "patron", "peak", "peasant", "pension", "personnel", "petition", "philosopher", "pioneer", "pipeline", "pirate", "pit", "plea", "pole", "poll", "pond", "portfolio", "practitioner", "precedent", "precision", "predator", "predecessor", "pregnancy", "prejudice", "premier", "premise", "premium", "prescription", "preservation", "presidency", "prevalence", "prevention", "prey", "privatization", "privilege", "probe", "proceeding", "proceeds", "processing", "processor", "productivity", "projection", "propaganda", "proposition", "prosecution", "prosecutor", "prosperity", "protocol", "province", "provision", "pulse", "punch", "query", "quest", "quota", "radar", "rage", "raid", "rally", "ranking", "rape", "ratio", "ray", "realization", "realm", "reasoning", "rebel", "rebellion", "recipient", "reconstruction", "recruitment", "referendum", "reflection", "reform", "refuge", "refusal", "regime", "regulator", "rehabilitation", "reign", "rejection", "relevance", "reliability", "remainder", "remains", "remedy", "reminder", "removal", "replacement", "representation", "reproduction", "republic", "residence", "residue", "resignation", "resistance", "restoration", "restraint", "retreat", "revelation", "revenge", "revival", "rhetoric", "rifle", "riot", "ritual", "rod", "rookie", "roster", "rotation", "ruling", "rumor", "sacrifice", "saint", "sake", "sanction", "say", "scope", "scrutiny", "segment", "sensation", "sensitivity", "sentiment", "separation", "settlement", "setup", "sexuality", "shareholder", "shipping", "shoot", "simulation", "sin", "sketch", "slavery", "slot", "solidarity", "sophomore", "sovereignty", "spam", "specification", "specimen", "spectacle", "spectrum", "spell", "sphere", "spine", "spotlight", "spouse", "spy", "squad", "stability", "stake", "stem", "stereotype", "stimulus", "storage", "strain", "strand", "strip (long narrow piece)", "submission", "subscriber", "subscription", "subsidy", "substitute", "substitution", "succession", "successor", "suicide", "suite", "summit", "superintendent", "supervision", "supervisor", "supplement", "surge", "surplus", "surveillance", "suspension", "suspicion", "sword", "syndrome", "synthesis", "tackle", "tactic", "taxpayer", "tenant", "tenure", "terrain", "testimony", "texture", "theology", "thread", "threshold", "tide", "timber", "tobacco", "tolerance", "toll", "torture", "trace", "trademark", "trail", "trailer", "transaction", "transcript", "transformation", "transit", "transmission", "transparency", "trauma", "treaty", "tribute", "trigger", "trio", "triumph", "trophy", "trustee", "tuition", "tumor", "turnout", "turnover", "undergraduate", "utility", "vacuum", "validity", "variable", "vein", "venture", "verdict", "verse", "vessel", "veteran", "vice", "violation", "virtue", "vulnerability", "ward", "warehouse", "warfare", "warrant", "warrior", "weed", "well", "well-being", "widow", "width", "willingness", "wit", "withdrawal", "workout", "worship", "yield"],
    verb: ["abolish", "accelerate", "accumulate", "adhere", "administer", "alert", "align", "allege", "allocate", "amend", "applaud", "appoint", "arm", "articulate", "aspire", "assemble", "assert", "attain", "attribute", "authorize", "await", "bat", "betray", "bind", "bleed", "blend", "bless", "boast", "bounce", "bow", "breed", "burst", "carve", "cater", "cease", "characterize", "circulate", "cling", "coincide", "collaborate", "commence", "compel", "compensate", "compile", "complement", "comply", "compute", "conceal", "concede", "conceive", "condemn", "confer", "confine", "confront", "congratulate", "conquer", "conserve", "consolidate", "constitute", "contemplate", "contend", "convict", "cooperate", "coordinate", "correlate", "correspond", "counter (argue against)", "craft", "crawl", "creep", "crush", "cultivate", "deem", "defy", "denounce", "depict", "deploy", "deprive", "descend", "designate", "detain", "deteriorate", "devastate", "devise", "diagnose", "dictate", "differentiate", "diminish", "dip", "discard", "discharge", "disclose", "displace", "dispose", "disrupt", "dissolve", "distort", "divert", "drain", "drift", "drown", "dub", "echo", "elevate", "embark", "embed", "embody", "empower", "enact", "encompass", "endorse", "endure", "enforce", "enrich", "enroll", "ensue", "entitle", "erect", "escalate", "evacuate", "evoke", "exaggerate", "execute", "exert", "expire", "extract", "facilitate", "fade", "flee", "flourish", "forge", "formulate", "foster", "grasp", "grin", "grind", "hail", "halt", "haunt", "heighten", "hook", "imprison", "incarcerate", "incur", "induce", "indulge", "infect", "inflict", "inhibit", "initiate", "inject", "inquire", "inspect", "instruct", "intensify", "interfere", "intervene", "invoke", "kidnap", "leak", "leap", "linger", "loom", "manifest", "manipulate", "maximize", "merge", "minimize", "mobilize", "neglect", "nod", "nominate", "notify", "oblige", "obsess", "opt", "originate", "overlook", "oversee", "overturn", "overwhelm", "persist", "plead", "pledge", "plug", "plunge", "pop", "portray", "postpone", "preach", "prescribe", "preside", "presume", "prevail", "proclaim", "prosecute", "provoke", "pump", "reassure", "recount", "regain", "render", "renew", "reproduce", "resemble", "reside", "resume", "retrieve", "reverse", "revive", "rip", "rock", "rotate", "screw", "seal", "seize", "shatter", "shed", "shrink", "shrug", "sigh", "simulate", "skip", "slam", "slap", "slash", "smash", "snap", "soak", "soar", "span", "spare", "spark", "spin", "squeeze", "stab", "stabilize", "steer", "stir", "strip (remove clothes/a layer)", "strive", "stumble", "stun", "suck", "sue", "supervise", "suppress", "surrender", "sustain", "swing", "tempt", "terminate", "testify", "thrive", "tighten", "tolerate", "top", "toss", "total", "twist", "undermine", "unify", "unveil", "upgrade", "uphold", "utilize", "vanish", "verify", "violate", "vow", "weaken", "weave", "whip", "widen", "wipe", "yell"],
    adjective: ["absent", "absurd", "accessible", "accountable", "acid", "acute", "adjacent", "administrative", "adverse", "aesthetic", "agricultural", "alien", "amateur", "anonymous", "appealing", "applicable", "arbitrary", "architectural", "authentic", "bare", "behavioral", "beloved", "bizarre", "brutal", "capitalist", "cautious", "chronic", "civic", "clinical", "coastal", "cognitive", "collective", "colonial", "communist", "comparable", "compelling", "competent", "congressional", "consecutive", "constitutional", "content", "contrary", "cooperative", "corresponding", "corrupt", "costly", "countless", "credible", "crude", "cynical", "damaging", "decisive", "dedicated", "defensive", "delicate", "dense", "desirable", "destructive", "disastrous", "distinctive", "disturbing", "divine", "driving", "dual", "dumb", "ecological", "elaborate", "electoral", "eligible", "empirical", "encouraging", "endless", "engaging", "eternal", "evolutionary", "exceptional", "exclusive", "experimental", "explicit", "explosive", "fatal", "favorable", "feminist", "fierce", "fiscal", "flawed", "forthcoming", "fragile", "frustrated", "frustrating", "functional", "generic", "glorious", "grave (serious)", "gross", "handy", "harsh", "high-profile", "hopeful", "hostile", "humanitarian", "humble", "ideological", "immense", "imminent", "inadequate", "inappropriate", "inclined", "indigenous", "infamous", "influential", "inherent", "institutional", "instrumental", "insufficient", "intact", "integral", "integrated", "intensive", "interactive", "interim", "interior", "intermediate", "intimate", "intriguing", "invisible", "ironic", "irrelevant", "judicial", "just", "keen", "large-scale", "latter", "legendary", "legislative", "legitimate", "lengthy", "lesbian", "lesser", "lethal", "liable", "liberal", "lifelong", "linear", "long-standing", "longtime", "magical", "magnetic", "magnificent", "mandatory", "marginal", "marine", "mathematical", "mature", "meaningful", "medieval", "mere", "minimal", "minute", "misleading", "mobile", "moderate", "municipal", "mutual", "nationwide", "naval", "neighboring", "net", "noble", "nonprofit", "notable", "notorious", "novel", "occasional", "operational", "optical", "oral", "organizational", "overwhelming", "parental", "partial", "passive", "peculiar", "persistent", "philosophical", "postwar", "preliminary", "prestigious", "problematic", "productive", "profitable", "profound", "prominent", "pronounced", "prospective", "protective", "provincial", "psychiatric", "radical", "rational", "rear", "regulatory", "reluctant", "renowned", "residential", "respective", "revolutionary", "robust", "sacred", "scattered", "secular", "selective", "serial", "sheer", "situated", "skeptical", "socialist", "sole", "solo", "sound", "specialized", "standing", "stark", "statistical", "straightforward", "strategic", "striking", "structural", "substantial", "subtle", "suburban", "successive", "superb", "superior", "supportive", "supreme", "surgical", "suspicious", "symbolic", "systematic", "tactical", "tender", "terminal", "terrific", "theatrical", "theoretical", "thought-provoking", "thoughtful", "thrilled", "timely", "toxic", "transparent", "tremendous", "tribal", "troubled", "unconstitutional", "underlying", "unprecedented", "upcoming", "vague", "varied", "verbal", "viable", "vibrant", "vicious", "vocal", "vulnerable", "worthwhile", "worthy"],
    adverb: ["accordingly", "alike", "allegedly", "continually", "exclusively", "explicitly", "forth", "frankly", "halfway", "ironically", "merely", "namely", "nonetheless", "notably", "overly", "partially", "predominantly", "presently", "presumably", "readily", "regardless", "reportedly", "respectively", "secondly", "seemingly", "seldom", "simultaneously", "solely", "substantially", "supposedly", "thankfully", "thereafter", "thereby", "undoubtedly", "utterly", "whatsoever", "whereby", "wholly"],
    other: ["amid", "beneath", "versus"],
  },
};

const BUCKET_ORDER = ["noun", "verb", "adjective", "adverb", "other"];
const BUCKET_LABELS_TR = { noun: "İsim", verb: "Fiil", adjective: "Sıfat", adverb: "Zarf", other: "Diğer" };
const LEVEL_LABELS = {
  A1: "A1 · Başlangıç",
  A2: "A2 · Temel",
  B1: "B1 · Orta",
  B2: "B2 · Orta-Üst",
  C1: "C1 · İleri",
};
const LEVEL_ORDER = ["A1", "A2", "B1", "B2", "C1"];
const PLACEMENT_STORAGE_KEY = "toefl-placement-progress";

function getLevelSequence(level) {
  const seq = [];
  BUCKET_ORDER.forEach((bucket) => {
    (LEVEL_WORDS[level][bucket] || []).forEach((word) => {
      seq.push({ word, bucket });
    });
  });
  return seq;
}

async function translateWordsBatch(wordList) {
  const prompt = `Translate each of the following English words into concise, natural Turkish (as used in a bilingual dictionary — one short translation, or a couple of comma-separated synonyms max). Respond with ONLY a JSON array, no markdown fences, no explanation, in this exact format: [{"word":"...","meaning":"..."}]

Words: ${wordList.join(", ")}`;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 2000,
      messages: [{ role: "user", content: prompt }],
    }),
  });
  const data = await res.json();
  const textBlock = (data.content || []).find((b) => b.type === "text");
  if (!textBlock) throw new Error("no text in response");
  const cleaned = textBlock.text.replace(/```json|```/g, "").trim();
  const parsed = JSON.parse(cleaned);
  if (!Array.isArray(parsed)) throw new Error("unexpected format");
  return parsed;
}

function PlacementTest({ existingWords, onImportWords }) {
  const [progress, setProgress] = useState({});
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [answeredState, setAnsweredState] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [activeLevel, setActiveLevel] = useState(null);
  const [importing, setImporting] = useState(false);
  const [importDone, setImportDone] = useState(false);
  const answerCountRef = useRef(0);

  useEffect(() => {
    (async () => {
      try {
        const res = await window.storage.get(PLACEMENT_STORAGE_KEY, false);
        if (res && res.value) setProgress(JSON.parse(res.value));
      } catch (e) {
        // no progress yet
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  const saveProgress = async (next) => {
    setProgress(next);
    try {
      await window.storage.set(PLACEMENT_STORAGE_KEY, JSON.stringify(next), false);
    } catch (e) {
      // save failed silently, will retry on next checkpoint
    }
  };

  if (!loaded) {
    return (
      <div style={{ ...styles.center, padding: "60px 0" }}>
        <div style={styles.loadingDot} />
      </div>
    );
  }

  if (!activeLevel) {
    return (
      <div>
        <div style={{ textAlign: "center", marginBottom: 22 }}>
          <GraduationCap size={26} color={COLORS.gold} style={{ marginBottom: 10 }} />
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 20, marginBottom: 6 }}>
            Oxford 3000 & 5000 Seviye Testi
          </div>
          <p style={{ color: COLORS.inkSoft, fontSize: 13.5, lineHeight: 1.5 }}>
            Her seviyedeki <strong>tüm kelimeler</strong> tek tek sorulur, isim/fiil/sıfat/zarf
            sırasıyla gruplanmış olarak. İlerlemen otomatik kaydedilir, istediğin zaman ara verip
            devam edebilirsin.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {LEVEL_ORDER.map((lvl) => {
            const seq = getLevelSequence(lvl);
            const p = progress[lvl];
            const answeredCount = p ? Object.keys(p.answers || {}).length : 0;
            const isDone = p?.completedAt;
            return (
              <button
                key={lvl}
                onClick={() => setActiveLevel(lvl)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 16px",
                  borderRadius: 8,
                  border: `1px solid ${COLORS.paperLine}`,
                  background: COLORS.card,
                  fontSize: 14,
                  fontFamily: "inherit",
                  fontWeight: 600,
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span>{LEVEL_LABELS[lvl]}</span>
                <span style={{ display: "flex", alignItems: "center", gap: 6, color: COLORS.inkSoft, fontWeight: 500, fontSize: 12.5 }}>
                  {isDone ? (
                    <span style={{ color: COLORS.moss, fontWeight: 700 }}>Tamamlandı</span>
                  ) : answeredCount > 0 ? (
                    <span>
                      {answeredCount} / {seq.length}
                    </span>
                  ) : (
                    <span>{seq.length} kelime</span>
                  )}
                  <ArrowRight size={13} />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  const sequence = getLevelSequence(activeLevel);
  const levelProgress = progress[activeLevel] || { answers: {}, currentIndex: 0, completedAt: null };
  const currentIndex = levelProgress.currentIndex || 0;

  const persistAnswer = (status) => {
    const item = sequence[currentIndex];
    const key = `${item.bucket}:${item.word}`;
    const nextAnswers = { ...levelProgress.answers, [key]: status };
    const nextIndex = currentIndex + 1;
    const isComplete = nextIndex >= sequence.length;
    const nextLevelProgress = {
      answers: nextAnswers,
      currentIndex: nextIndex,
      completedAt: isComplete ? Date.now() : null,
    };
    const nextProgress = { ...progress, [activeLevel]: nextLevelProgress };
    answerCountRef.current += 1;
    if (isComplete || answerCountRef.current >= 20) {
      answerCountRef.current = 0;
      saveProgress(nextProgress);
    } else {
      setProgress(nextProgress);
    }
  };

  const pauseAndExit = () => {
    saveProgress(progress);
    setActiveLevel(null);
    setImportDone(false);
  };

  // Completed screen
  if (currentIndex >= sequence.length) {
    const answers = levelProgress.answers || {};
    const scoreFor = (status) => (status === "know" ? 1 : status === "partial" ? 0.5 : 0);
    let totalScore = 0;
    const bucketStats = {};
    BUCKET_ORDER.forEach((b) => (bucketStats[b] = { total: 0, score: 0 }));
    const unknownWords = [];
    sequence.forEach((item) => {
      const key = `${item.bucket}:${item.word}`;
      const status = answers[key] || "unknown";
      const s = scoreFor(status);
      totalScore += s;
      bucketStats[item.bucket].total += 1;
      bucketStats[item.bucket].score += s;
      if (status === "unknown" || status === "partial") unknownWords.push(item.word);
    });
    const overallPct = sequence.length ? Math.round((totalScore / sequence.length) * 100) : 0;

    let recommendation;
    if (overallPct >= 90) recommendation = `${activeLevel} seviyesine tamamen hakimsin. Bir üst seviyeyi denemeye hazırsın.`;
    else if (overallPct >= 70) recommendation = `${activeLevel} seviyesinde iyi durumdasın, ama bilmediğin kelimelere biraz zaman ayır.`;
    else if (overallPct >= 40) recommendation = `${activeLevel} seviyesi şu an odak noktan olmalı — kelime dağarcığın henüz yeterince sağlam değil.`;
    else recommendation = `${activeLevel} seviyesinde temellerini güçlendirmen gerekiyor. Bir alt seviyeden başlamak daha sağlıklı olabilir.`;

    const doImport = async () => {
      setImporting(true);
      try {
        const existingKeys = new Set(existingWords.map((w) => w.word.toLowerCase()));
        const toImport = Array.from(new Set(unknownWords)).filter((w) => !existingKeys.has(w.toLowerCase()));
        const chunks = [];
        for (let i = 0; i < toImport.length; i += 40) chunks.push(toImport.slice(i, i + 40));
        const allTranslated = [];
        for (const chunk of chunks) {
          const translated = await translateWordsBatch(chunk);
          allTranslated.push(...translated);
        }
        const category = `${activeLevel} Eksikleri`;
        const newWords = allTranslated
          .filter((t) => t.word && t.meaning)
          .map((t) => makeWord(t.word, t.meaning, "", category));
        onImportWords(newWords);
        setImportDone(true);
      } catch (e) {
        setImportDone(false);
      } finally {
        setImporting(false);
      }
    };

    return (
      <div>
        <button
          onClick={() => {
            setActiveLevel(null);
            setImportDone(false);
          }}
          style={{ background: "none", border: "none", color: COLORS.inkSoft, fontSize: 12.5, fontWeight: 600, cursor: "pointer", marginBottom: 16 }}
        >
          ← Seviye seç
        </button>

        <div
          style={{
            textAlign: "center",
            background: COLORS.card,
            border: `1px solid ${COLORS.paperLine}`,
            borderRadius: 10,
            padding: "20px",
            marginBottom: 16,
          }}
        >
          <div style={{ fontSize: 12, color: COLORS.inkSoft, fontWeight: 700, marginBottom: 4 }}>
            {LEVEL_LABELS[activeLevel]} · SONUÇ
          </div>
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 40, fontWeight: 700, color: COLORS.gold }}>
            %{overallPct}
          </div>
          <div style={{ fontSize: 12.5, color: COLORS.inkSoft, marginTop: 2 }}>bildiğin kelime oranı</div>
        </div>

        <p style={{ fontSize: 13.5, lineHeight: 1.6, marginBottom: 18, textAlign: "center" }}>{recommendation}</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 22 }}>
          {BUCKET_ORDER.filter((b) => bucketStats[b].total > 0).map((b) => {
            const pct = Math.round((bucketStats[b].score / bucketStats[b].total) * 100);
            return (
              <div key={b} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ fontSize: 12, color: COLORS.inkSoft, width: 60, flexShrink: 0 }}>{BUCKET_LABELS_TR[b]}</div>
                <div style={{ flex: 1, background: COLORS.paper, borderRadius: 4, height: 10, overflow: "hidden" }}>
                  <div style={{ width: `${pct}%`, height: "100%", background: COLORS.gold, borderRadius: 4 }} />
                </div>
                <div style={{ fontSize: 12, fontWeight: 700, width: 34, textAlign: "right" }}>%{pct}</div>
              </div>
            );
          })}
        </div>

        {unknownWords.length > 0 && !importDone && (
          <button
            onClick={doImport}
            disabled={importing}
            style={{ ...primaryBtn, width: "100%", opacity: importing ? 0.6 : 1 }}
          >
            {importing
              ? "Kelimeler çevriliyor ve ekleniyor..."
              : `Bilmediğim ${unknownWords.length} kelimeyi kart kutusuna ekle`}
          </button>
        )}
        {importDone && (
          <div style={{ textAlign: "center", color: COLORS.moss, fontSize: 13.5, fontWeight: 600 }}>
            Kelimeler "{activeLevel} Eksikleri" kategorisiyle kart kutusuna eklendi.
          </div>
        )}
      </div>
    );
  }

  // Active quiz screen
  const currentItem = sequence[currentIndex];

  return (
    <PlacementQuizQuestion
      key={`${activeLevel}-${currentIndex}`}
      currentItem={currentItem}
      sequence={sequence}
      activeLevel={activeLevel}
      currentIndex={currentIndex}
      totalCount={sequence.length}
      onAnswer={persistAnswer}
      onPause={pauseAndExit}
    />
  );
}

// Separate component for quiz question - hooks are ALWAYS called unconditionally at top level
function PlacementQuizQuestion({ currentItem, sequence, activeLevel, currentIndex, totalCount, onAnswer, onPause }) {
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [answeredState, setAnsweredState] = useState(false);

  // Regenerate options whenever the current word changes
  const currentOptions = useMemo(() => {
    return getPlacementOptions(currentItem.word, sequence);
  }, [currentItem.word, activeLevel]);

  const handleSelectOption = (opt) => {
    if (answeredState) return;
    setSelectedOpt(opt);
    setAnsweredState(true);

    setTimeout(() => {
      onAnswer(opt.isCorrect ? "know" : "unknown");
      // State reset happens automatically when parent gives us new key prop
    }, 900);
  };

  const handleSkip = () => {
    if (answeredState) return;
    onAnswer("unknown");
  };

  const bucketStartIndex = sequence.findIndex((it) => it.bucket === currentItem.bucket);
  const bucketCount = sequence.filter((it) => it.bucket === currentItem.bucket).length;
  const bucketPosition = currentIndex - bucketStartIndex + 1;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <button
          onClick={onPause}
          style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", color: COLORS.inkSoft, fontSize: 12.5, fontWeight: 600, cursor: "pointer" }}
        >
          <Pause size={13} /> Ara ver
        </button>
        <span style={{ fontSize: 12.5, color: COLORS.inkSoft, fontWeight: 600 }}>
          {currentIndex + 1} / {totalCount}
        </span>
      </div>

      <div style={{ background: COLORS.paper, borderRadius: 4, height: 5, overflow: "hidden", marginBottom: 20 }}>
        <div
          style={{
            width: `${((currentIndex + 1) / totalCount) * 100}%`,
            height: "100%",
            background: COLORS.gold,
            borderRadius: 4,
            transition: "width 0.3s ease",
          }}
        />
      </div>

      <div style={{ textAlign: "center", marginBottom: 8 }}>
        <CategoryBadge category={`${LEVEL_LABELS[activeLevel]} · ${BUCKET_LABELS_TR[currentItem.bucket]}`} />
        <div style={{ fontSize: 11.5, color: COLORS.inkSoft, marginTop: 4 }}>
          {BUCKET_LABELS_TR[currentItem.bucket]} grubunda {bucketPosition} / {bucketCount}
        </div>
      </div>

      <div
        style={{
          background: COLORS.card,
          border: `1px solid ${COLORS.paperLine}`,
          borderRadius: 10,
          padding: "30px 24px",
          textAlign: "center",
          marginBottom: 18,
        }}
      >
        <div style={{ fontSize: 13, color: COLORS.inkSoft, marginBottom: 6 }}>
          Bu kelimenin Türkçe karşılığı nedir?
        </div>
        <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 32, fontWeight: 700 }}>
          {currentItem.word.replace(/\s*\([^)]*\)/g, '')}
        </div>
      </div>

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
                border: `1px solid ${btnBorder}`,
                background: btnBg,
                color: btnColor,
                fontSize: 13.5,
                fontWeight: 600,
                cursor: answeredState ? "default" : "pointer",
                textAlign: "center",
                transition: "all 0.2s ease",
                minHeight: 60,
                lineHeight: 1.4,
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
          style={{ background: "none", border: "none", color: COLORS.inkSoft, fontSize: 13, fontWeight: 600, cursor: "pointer", textDecoration: "underline", opacity: answeredState ? 0.4 : 1 }}
        >
          Bilmiyorum / Pas Geç
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TOEFL 2026 BİLGİ SAYFASI
// ─────────────────────────────────────────────────────────────────────────────

function TOEFLGuideLegacy({ setView }) {
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    {
      id: "reading",
      icon: BookOpen,
      color: "#2E6B78",
      bg: "#DCE7EA",
      title: "Reading",
      time: "~35 dk",
      questions: "20 soru",
      score: "0–30 puan",
      tasks: [
        {
          name: "Complete the Words 🆕",
          highlight: true,
          steps: [
            "Ekranda 70–100 kelimelik kısa bir akademik paragraf görürsün",
            "Paragraftaki 10 kelimenin son kısmı gizlenmiş: ör. \"phe_______\" → sen \"phenomenon\" yazmalısın",
            "İlk cümle her zaman tam gösterilir — anlam bağlamını ver",
            "Her boşluk için doğru harfleri klavyeyle gir; tam yazım zorunlu, kısmi puan yok",
            "İpucu: bağlamdan kelimeyi çıkarmaya çalış, gramer sınırlarını kullan",
          ],
          warning: "Yazım hatası = yanlış cevap. Amerika İngilizcesi imlasına dikkat et (ör. 'analyze' değil 'analyse').",
        },
        {
          name: "Adaptif Okuma Pasajları",
          highlight: false,
          steps: [
            "2 akademik okuma pasajı (~700 kelime her biri); bilim, tarih, sosyoloji, sanat gibi alanlardan",
            "Her pasaj için 10 soru; toplamda 20 soru",
            "Format adaptif: 1. pasajdaki performansına göre 2. pasajın zorluğu otomatik ayarlanır",
            "Soru tipleri: Ana fikir, Kelime bağlamı ('this word most nearly means'), Çıkarım, Retorik amaç",
            "Pasaj ekranda kalır; sorular ilerledikçe ilgili paragraf vurgulanır",
          ],
          warning: null,
        },
      ],
      tips: [
        "Complete the Words için: kelime ailelerini öğren — phenomenon → phenomenal → phenomenally",
        "Pasajı baştan sona okuma; önce soruyu oku, sonra ilgili paragrafı bul",
        "Kelime bağlamı sorularında: önerilen kelimeyi cümleye koy, anlam bozuluyor mu test et",
        "Tablo/kategori doldurma sorularında tüm pasajı taramak gerekebilir",
      ],
      vocab: "Oxford 5000 B2–C1 + Academic Word List (AWL) — akademik isimler ve fiiller öncelikli",
    },
    {
      id: "listening",
      icon: MessageSquare,
      color: "#5D4A8C",
      bg: "#E6E0F0",
      title: "Listening",
      time: "~36 dk",
      questions: "28 soru",
      score: "0–30 puan",
      tasks: [
        {
          name: "3 Akademik Ders (Lecture)",
          highlight: false,
          steps: [
            "Her ders 4–5 dakika sürer; tek konuşmacı (profesör), akademik bir konuyu anlatır",
            "Not alabilirsin — ekranda not alanı veya fiziksel kağıt verilir",
            "Ders biterken 6 soru gelir; ses yalnızca bir kez çalınır",
            "Soru tipleri: Ana fikir, Önemli detay, Konuşmacının tutumu, Organizasyon, Bağlam çıkarımı",
            "Dikkat: bazı cevaplar doğrudan söylenmez, konuşmacının tonundan ya da vurgusundan anlaşılır",
          ],
          warning: "Derste geçen teknik terimler çok sık soruya girer — duyduğunda hemen not et.",
        },
        {
          name: "2 Kampüs Konuşması (Conversation)",
          highlight: false,
          steps: [
            "Her konuşma 2–3 dakika; 2 kişi konuşur (öğrenci + danışman, kütüphane görevlisi vb.)",
            "Konuşma biterken 5 soru gelir",
            "Soru tipleri: Konuşmanın amacı nedir?, Öğrencinin sorunu nedir?, Tarafların tutumu, İma edilen anlam",
            "İma soruları: cevap bazen hiç doğrudan söylenmez — tondan ve bağlamdan çıkarılır",
          ],
          warning: null,
        },
      ],
      tips: [
        "Not alırken tam cümle yazma — anahtar kelimeler ve kısa oklar yeterli",
        "Konuşmacının tereddüt ettiği anlar ('well, perhaps...', 'I'm not sure but...') soru olur",
        "Liste başı ve sonu kritik: ana fikir genellikle giriş ve sonuçta açıklanır",
        "Sinyal kelimeleri tanı ve not et: 'however', 'therefore', 'in contrast', 'as a result'",
      ],
      vocab: "Akademik ders terminolojisi + sinyal kelimeleri (contrast, cause-effect, sequence ifadeleri)",
    },
    {
      id: "writing",
      icon: PenLine,
      color: "#4C6B31",
      bg: "#E4EAD8",
      title: "Writing",
      time: "~29 dk",
      questions: "3 görev",
      score: "0–30 puan",
      tasks: [
        {
          name: "Build a Sentence 🆕",
          highlight: true,
          steps: [
            "Kısa bir bağlam verilir (2–3 cümle); ardından 8–12 kelime/ifade karışık sırada listelenir",
            "Aralarında 1–2 'decoy' (tuzak) kelime vardır — bunlar cümleye uymaz",
            "Tüm token'lara bakarak tek, dilbilgisel açıdan doğru cümle kur",
            "Decoy kelimeleri KULLANMA — cümle anlamsız olur ve sıfır puan alırsın",
            "Strateji: önce Özne–Yüklem–Nesne iskeletini bul, sonra diğer kelimeleri yerleştir",
          ],
          warning: "All-or-nothing puanlama: mükemmel = tam puan, tek hata = sıfır. Acele etme, önce kafanda kur.",
        },
        {
          name: "Integrated Writing (Entegre Yazma)",
          highlight: false,
          steps: [
            "ADIM 1 — Oku (3 dk): Kısa akademik pasaj okursun, notlar alabilirsin. Pasaj 3 ana noktayı savunur.",
            "ADIM 2 — Dinle (~2 dk): Aynı konuda bir ders çalınır. Ders çoğunlukla pasajın 3 noktasını eleştirir veya zayıflatır.",
            "ADIM 3 — Yaz (20 dk): Pasaj tekrar ekrana gelir. 150–225 kelime yazarsın.",
            "Ne yazarsın: Derste anlatılanlar pasajın hangi noktalarına nasıl itiraz ediyor? — kendi görüşünü KATMA.",
            "Önerilen yapı: Giriş (1 cümle) → Nokta 1 karşılaştırması → Nokta 2 → Nokta 3 → Kapanış",
          ],
          warning: "Kendi görüşünü ekleme — bu görev sadece özetleme ve sentezlemedir. 'I think...' ile başlamak puan kaybettirir.",
        },
        {
          name: "Academic Discussion (Akademik Tartışma)",
          highlight: false,
          steps: [
            "Ekranda bir profesörün sorusu ve 2 sınıf arkadaşının yazılı cevabı gösterilir",
            "10 dakikan var; minimum 100 kelime yazmalısın",
            "Ne yazarsın: Arkadaşların görüşüne katılıp katılmadığını belirt → kendi argümanını sun → somut bir örnek ver",
            "Akademik ton zorunlu: 'good/bad' yerine 'beneficial/detrimental', 'shows' yerine 'demonstrates' kullan",
            "Yüksek puan için: bir arkadaşa doğrudan atıf yap ('While [isim] argues X, I believe...')",
          ],
          warning: null,
        },
      ],
      tips: [
        "Integrated: ders sadece bir kez çalınır — not almaya odaklan, pasaj zaten sonra açılır",
        "Academic Discussion: sınıf arkadaşlarından birine doğrudan yanıt ver, yüksek puan getirir",
        "Build a Sentence: token'lara önce hızlıca gözat, decoy'ları tespit et, sonra cümleyi kur",
        "'important', 'good', 'bad' gibi genel kelimeler puanı düşürür — spesifik tercihler ölçülüyor",
      ],
      vocab: "Akademik bağlaçlar (furthermore, consequently, in contrast, notably) + nüanslı fiiller (argue, contend, refute, assert, demonstrate)",
    },
    {
      id: "speaking",
      icon: Send,
      color: "#93445A",
      bg: "#F0DEE0",
      title: "Speaking",
      time: "~16 dk",
      questions: "2 görev 🆕",
      score: "0–30 puan",
      tasks: [
        {
          name: "Listen and Repeat — Görev 1 🆕",
          highlight: true,
          steps: [
            "Ekranda bir görsel (harita, tabela, grafik) gösterilir — bağlam verir, ama asıl görev ses",
            "7 kısa cümle sırayla sesli okunur; her cümle biraz daha karmaşık hale gelir",
            "Her cümleyi dinledikten hemen sonra AYNEN tekrar edersin — 8 ile 12 saniye kayıt süresi verilir",
            "Hazırlık süresi yoktur; duyduğun anda konuşmaya başlarsın",
            "Kendi görüşünü söylemene gerek yok — sadece duyduğunu doğru, anlaşılır biçimde tekrar et",
          ],
          warning: "Eski 'Independent Speaking' veya 'Campus Situation' görevleri 2026'da tamamen KALDIRILDI. Artık yok.",
        },
        {
          name: "Take an Interview — Görev 2 🆕",
          highlight: true,
          steps: [
            "Sanal bir mülakat: bir soru ekranda belirir, hemen 45 saniye içinde cevap verirsin",
            "Toplamda 4 soru sorulur; konular kampüs yaşamı veya genel akademik deneyimler",
            "Örnek sorular: 'What study method works best for you and why?', 'Describe a challenge you've overcome in learning.'",
            "Hazırlık süresi yoktur — soruyu okuyunca hemen konuşmaya başla",
            "Cevapların akıcılığı, gramer doğruluğu, kelime seçimi ve tutarlılığı puanlanır",
          ],
          warning: "Eski 'Integrated Speaking' (okuma + dinleme + konuşma) görevi de 2026'da kalktı. Bu görev yerine geçmiyor — bunlar tamamen yeni görev türleri.",
        },
      ],
      tips: [
        "Listen and Repeat: sadece kelimeleri değil, ritim ve tonu da taklit et",
        "Interview için: 'CLAIM → REASON → ÖRNEK' yapısını 45 saniyeye sıkıştır",
        "'um', 'uh', 'like' gibi doldurucuları azalt — kısa duraklama çok daha profesyonel",
        "Her TOEFL kelimesini sesli telaffuz ederek çalış; sadece okumak yetmez",
        "Konuşma hızı: çok yavaş da çok hızlı da puan kaybettirir — doğal tempo hedefle",
      ],
      vocab: "Akademik konuşma kalıpları + kampüs yaşam terimleri + spontane ifade becerileri",
    },
  ];

  const bandData = [
    { band: "6", cefr: "C2", old: "95–120", meaning: "Ustalık", color: COLORS.moss },
    { band: "5–5.5", cefr: "C1", old: "72–94", meaning: "İleri", color: "#3A5A8C" },
    { band: "4–4.5", cefr: "B2", old: "52–71", meaning: "Üst-Orta", color: "#8C7423" },
    { band: "3–3.5", cefr: "B1", old: "35–51", meaning: "Orta", color: COLORS.gold },
    { band: "2–2.5", cefr: "A2", old: "18–34", meaning: "Temel", color: COLORS.coral },
    { band: "1–1.5", cefr: "A1", old: "0–17", meaning: "Başlangıç", color: "#999" },
  ];

  return (
    <div>
      {/* Hero */}
      <div style={{
        background: "linear-gradient(135deg, #1a1f2e 0%, #2d3561 50%, #1a2a3a 100%)",
        borderRadius: 16, padding: "32px 24px", marginBottom: 24,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -20, right: -20, width: 120, height: 120, borderRadius: "50%", background: "rgba(184,137,43,0.15)" }} />
        <div style={{ position: "absolute", bottom: -30, left: -10, width: 80, height: 80, borderRadius: "50%", background: "rgba(63,110,77,0.2)" }} />
        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <div style={{ background: "rgba(184,137,43,0.2)", borderRadius: 8, padding: "6px 10px", border: "1px solid rgba(184,137,43,0.4)" }}>
              <span style={{ color: COLORS.gold, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>GÜNCEL • 21 OCAK 2026</span>
            </div>
            <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "6px 10px" }}>
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, fontWeight: 600 }}>ETS Resmi Format</span>
            </div>
          </div>
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 28, fontWeight: 700, color: "#fff", marginBottom: 8, lineHeight: 1.2 }}>TOEFL iBT 2026</div>
          <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 13.5, lineHeight: 1.6, marginBottom: 20 }}>
            21 Ocak 2026'dan itibaren adaptif format, 3 yeni görev türü ve CEFR uyumlu 1–6 bant puanı ile tamamen yenilendi. Speaking bölümü kökten değişti.
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
            {[
              { label: "Süre", value: "~1.5 saat", icon: Clock },
              { label: "Puan", value: "1–6 Bant", icon: Award },
              { label: "Format", value: "Adaptif", icon: TrendingUp },
            ].map(({ label, value, icon: Icon }) => (
              <div key={label} style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: "12px 14px", border: "1px solid rgba(255,255,255,0.12)" }}>
                <Icon size={14} color={COLORS.gold} style={{ marginBottom: 6 }} />
                <div style={{ color: "#fff", fontSize: 15, fontWeight: 700 }}>{value}</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Yeni Görev Türleri Banner */}
      <div style={{ background: "linear-gradient(135deg, #fff8e8 0%, #fef3cd 100%)", border: `1px solid ${COLORS.goldSoft}`, borderLeft: `4px solid ${COLORS.gold}`, borderRadius: 12, padding: "16px 18px", marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <Zap size={16} color={COLORS.gold} />
          <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.gold }}>2026 Yenilikleri — 3 Yeni Görev Türü</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            { view: "complete", icon: Type, title: "Complete the Words", desc: "Reading: Kelime son kısmını tamamla", color: "#2E6B78", bg: "#DCE7EA" },
            { view: "build", icon: Shuffle, title: "Build a Sentence", desc: "Writing: Doğru cümleyi kur", color: "#4C6B31", bg: "#E4EAD8" },
            { view: null, icon: Send, title: "Listen & Repeat", desc: "Speaking: Duyduğun cümleyi tekrar et (7 cümle)", color: "#93445A", bg: "#F0DEE0" },
            { view: null, icon: MessageSquare, title: "Take an Interview", desc: "Speaking: 4 soruya 45 sn cevap ver", color: "#5D4A8C", bg: "#E6E0F0" },
          ].map(({ view, icon: Icon, title, desc, color, bg }) => (
            <div key={title} style={{ background: "#fff", borderRadius: 8, padding: "12px 14px", border: `1px solid ${COLORS.goldSoft}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 5 }}>
                <div style={{ background: bg, borderRadius: 5, padding: 4 }}><Icon size={12} color={color} /></div>
                <span style={{ fontSize: 12, fontWeight: 700, color: COLORS.ink }}>{title}</span>
              </div>
              <div style={{ fontSize: 11.5, color: COLORS.inkSoft, lineHeight: 1.4, marginBottom: view ? 8 : 0 }}>{desc}</div>
              {view && <button onClick={() => setView(view)} style={{ background: color, color: "#fff", border: "none", borderRadius: 5, padding: "4px 9px", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>Pratik Yap →</button>}
            </div>
          ))}
        </div>
      </div>

      {/* Sınav sırası */}
      <div style={{ background: COLORS.card, border: `1px solid ${COLORS.paperLine}`, borderRadius: 12, padding: "14px 16px", marginBottom: 20 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: COLORS.inkSoft, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>Sınav Sırası (2026)</div>
        <div style={{ display: "flex", alignItems: "center", gap: 0, overflowX: "auto" }}>
          {[
            { label: "Reading", color: "#2E6B78", bg: "#DCE7EA", time: "35 dk" },
            { label: "Listening", color: "#5D4A8C", bg: "#E6E0F0", time: "36 dk" },
            { label: "Writing", color: "#4C6B31", bg: "#E4EAD8", time: "29 dk" },
            { label: "Speaking", color: "#93445A", bg: "#F0DEE0", time: "16 dk" },
          ].map((s, i) => (
            <div key={s.label} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              <div style={{ background: s.bg, border: `1px solid ${s.color}30`, borderRadius: 8, padding: "8px 12px", textAlign: "center" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: s.color }}>{s.label}</div>
                <div style={{ fontSize: 10.5, color: s.color, opacity: 0.7 }}>{s.time}</div>
              </div>
              {i < 3 && <ChevronRight size={14} color={COLORS.inkSoft} style={{ margin: "0 4px", flexShrink: 0 }} />}
            </div>
          ))}
        </div>
      </div>

      {/* Bölüm Detayları */}
      <div style={{ marginBottom: 8, fontSize: 13, fontWeight: 700, color: COLORS.inkSoft, letterSpacing: "0.06em", textTransform: "uppercase" }}>Bölüm Detayları — Tıkla ve Aç</div>
      {sections.map((s) => {
        const Icon = s.icon;
        const isOpen = openSection === s.id;
        return (
          <div key={s.id} style={{ background: COLORS.card, borderRadius: 12, border: `1px solid ${COLORS.paperLine}`, marginBottom: 10, overflow: "hidden" }}>
            <button
              onClick={() => setOpenSection(isOpen ? null : s.id)}
              style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
            >
              <div style={{ background: s.bg, borderRadius: 8, padding: 8, flexShrink: 0 }}><Icon size={16} color={s.color} /></div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.ink }}>{s.title}</div>
                <div style={{ fontSize: 11.5, color: COLORS.inkSoft, marginTop: 2 }}>{s.time} · {s.questions} · {s.score}</div>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span style={{ background: s.bg, color: s.color, fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 20, whiteSpace: "nowrap" }}>{s.score}</span>
                {isOpen ? <ChevronDown size={15} color={COLORS.inkSoft} /> : <ChevronRight size={15} color={COLORS.inkSoft} />}
              </div>
            </button>
            {isOpen && (
              <div style={{ padding: "0 16px 16px", borderTop: `1px solid ${COLORS.paperLine}` }}>
                <div style={{ marginTop: 14, marginBottom: 14 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: COLORS.inkSoft, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>Görev Türleri & Nasıl Yapılır?</div>
                  {s.tasks.map((task) => (
                    <div key={task.name} style={{ background: task.highlight ? s.bg : COLORS.paper, borderRadius: 10, padding: "14px", marginBottom: 10, border: task.highlight ? `1px solid ${s.color}40` : `1px solid ${COLORS.paperLine}` }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: task.highlight ? s.color : COLORS.ink, marginBottom: 10 }}>{task.name}</div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                        {task.steps.map((step, si) => (
                          <div key={si} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                            <div style={{ width: 20, height: 20, borderRadius: "50%", flexShrink: 0, background: task.highlight ? s.color : COLORS.inkSoft, color: "#fff", fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>{si + 1}</div>
                            <div style={{ fontSize: 12.5, color: COLORS.ink, lineHeight: 1.55 }}>{step}</div>
                          </div>
                        ))}
                      </div>
                      {task.warning && (
                        <div style={{ marginTop: 10, padding: "8px 10px", borderRadius: 7, background: "rgba(181,69,59,0.06)", border: `1px solid ${COLORS.coralSoft}`, display: "flex", gap: 7, alignItems: "flex-start" }}>
                          <AlertCircle size={13} color={COLORS.coral} style={{ flexShrink: 0, marginTop: 1 }} />
                          <span style={{ fontSize: 12, color: COLORS.coral, fontWeight: 600, lineHeight: 1.5 }}>{task.warning}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: COLORS.inkSoft, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>
                    <Target size={11} style={{ verticalAlign: "middle", marginRight: 4 }} />Sınava Hazırlanma İpuçları
                  </div>
                  {s.tips.map((tip, i) => (
                    <div key={i} style={{ display: "flex", gap: 8, marginBottom: 7 }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: s.color, flexShrink: 0, marginTop: 7 }} />
                      <div style={{ fontSize: 12.5, color: COLORS.ink, lineHeight: 1.55 }}>{tip}</div>
                    </div>
                  ))}
                </div>
                <div style={{ background: s.bg, borderRadius: 8, padding: "9px 12px", display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <BookOpen size={12} color={s.color} style={{ marginTop: 2, flexShrink: 0 }} />
                  <span style={{ fontSize: 12, color: s.color, fontWeight: 600, lineHeight: 1.5 }}>{s.vocab}</span>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* CEFR Bant Tablosu */}
      <div style={{ marginTop: 24, marginBottom: 8, fontSize: 13, fontWeight: 700, color: COLORS.inkSoft, letterSpacing: "0.06em", textTransform: "uppercase" }}>
        <Award size={13} style={{ verticalAlign: "middle", marginRight: 6 }} />Puan Bant Sistemi (2026)
      </div>
      <div style={{ background: COLORS.card, border: `1px solid ${COLORS.paperLine}`, borderRadius: 12, overflow: "hidden", marginBottom: 20 }}>
        <div style={{ display: "grid", gridTemplateColumns: "auto auto auto 1fr", gap: 0 }}>
          {["Bant", "CEFR", "0–120", "Seviye"].map((h) => (
            <div key={h} style={{ padding: "10px 14px", background: COLORS.paper, fontSize: 11, fontWeight: 700, color: COLORS.inkSoft, letterSpacing: "0.04em", textTransform: "uppercase", borderBottom: `1px solid ${COLORS.paperLine}` }}>{h}</div>
          ))}
          {bandData.flatMap((row) => [
            <div key={`band-${row.band}`} style={{ padding: "11px 14px", borderBottom: `1px solid ${COLORS.paperLine}`, display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: 14, fontWeight: 800, color: row.color }}>{row.band}</span>
            </div>,
            <div key={`cefr-${row.band}`} style={{ padding: "11px 14px", borderBottom: `1px solid ${COLORS.paperLine}`, fontSize: 13, fontWeight: 700, color: COLORS.inkSoft, display: "flex", alignItems: "center" }}>{row.cefr}</div>,
            <div key={`old-${row.band}`} style={{ padding: "11px 14px", borderBottom: `1px solid ${COLORS.paperLine}`, fontSize: 12.5, color: COLORS.inkSoft, display: "flex", alignItems: "center" }}>{row.old}</div>,
            <div key={`meaning-${row.band}`} style={{ padding: "11px 14px", borderBottom: `1px solid ${COLORS.paperLine}`, display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: row.color, flexShrink: 0 }} />
              <span style={{ fontSize: 12.5, fontWeight: 600, color: COLORS.ink }}>{row.meaning}</span>
            </div>,
          ])}
        </div>
        <div style={{ padding: "10px 14px", fontSize: 11.5, color: COLORS.inkSoft, background: COLORS.paper, borderTop: `1px solid ${COLORS.paperLine}` }}>
          ℹ️ Geçiş dönemi (Ocak 2026–Ocak 2028): Skor raporlarında hem 1–6 Bant hem de 0–120 skala birlikte gösterilir.
        </div>
      </div>

      {/* Strateji */}
      <div style={{ background: "linear-gradient(135deg, #f0f7f2 0%, #e8f4ec 100%)", border: `1px solid ${COLORS.mossSoft}`, borderLeft: `4px solid ${COLORS.moss}`, borderRadius: 12, padding: "16px 18px", marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <Brain size={16} color={COLORS.moss} />
          <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.moss }}>Kelime Çalışma Stratejisi (2026 Odaklı)</span>
        </div>
        {[
          { num: "1", text: "Kelime ailelerini öğren: analyze → analysis → analytical → analytically (4 kelime, tek çaba)" },
          { num: "2", text: "Yazım zorunlu: Complete the Words tam eşleşme istiyor — günde 5 kelimeyi sesli yazarak pratik yap" },
          { num: "3", text: "Bağlam içinde öğren: her yeni kelimeyi bir örnek cümleyle birlikte kaydet, izole ezberleme yetmez" },
          { num: "4", text: "Öncelik sırası: Oxford 3000 → Oxford 5000 → Academic Word List (570 kelime ailesi)" },
          { num: "5", text: "SM-2 Quiz: her gün çalış — algoritma 'bugün tekrar edilmesi gerekenleri' önce getiriyor" },
        ].map(({ num, text }) => (
          <div key={num} style={{ display: "flex", gap: 10, marginBottom: 9, alignItems: "flex-start" }}>
            <div style={{ width: 20, height: 20, borderRadius: "50%", background: COLORS.moss, color: "#fff", fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{num}</div>
            <div style={{ fontSize: 12.5, color: COLORS.ink, lineHeight: 1.55 }}>{text}</div>
          </div>
        ))}
      </div>

      {/* Hızlı Erişim */}
      <div style={{ marginBottom: 8, fontSize: 13, fontWeight: 700, color: COLORS.inkSoft, letterSpacing: "0.06em", textTransform: "uppercase" }}>Pratik Yap</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {[
          { view: "complete", icon: Type, label: "Complete the Words", sub: "Yazım + bağlam (Reading)", color: COLORS.moss, bg: COLORS.mossSoft },
          { view: "build", icon: Shuffle, label: "Build a Sentence", sub: "Cümle kurma (Writing)", color: "#3A5A8C", bg: "#DCE7EA" },
          { view: "quiz", icon: Layers, label: "Kelime Quiz", sub: "SM-2 Spaced Repetition", color: COLORS.gold, bg: COLORS.goldSoft },
          { view: "placement", icon: GraduationCap, label: "Seviye Testi", sub: "CEFR A1→C1 tespiti", color: COLORS.coral, bg: COLORS.coralSoft },
        ].map(({ view, icon: Icon, label, sub, color, bg }) => (
          <button key={view} onClick={() => setView(view)} style={{ background: COLORS.card, border: `1px solid ${COLORS.paperLine}`, borderRadius: 10, padding: "14px", cursor: "pointer", textAlign: "left", display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ background: bg, borderRadius: 6, padding: 7, width: "fit-content" }}><Icon size={15} color={color} /></div>
            <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.ink }}>{label}</div>
            <div style={{ fontSize: 11.5, color: COLORS.inkSoft }}>{sub}</div>
          </button>
        ))}
      </div>
    </div>
  );
}


function maskWord(word) {
  if (word.length <= 3) return word[0] + "_".repeat(word.length - 1);
  const revealCount = Math.max(1, Math.floor(word.length / 3));
  return word.slice(0, revealCount) + "_".repeat(word.length - revealCount);
}

function CompleteWords({ words }) {
  const [phase, setPhase] = useState("intro"); // intro | quiz | result
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [inputVal, setInputVal] = useState("");
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const inputRef = useRef(null);

  function startQuiz() {
    if (words.length < 5) return;
    const pool = [...words].sort(() => Math.random() - 0.5).slice(0, 10);
    const qs = pool.map((w) => ({
      word: w.word,
      masked: maskWord(w.word),
      hint: w.definition,
    }));
    setQuestions(qs);
    setCurrent(0);
    setAnswers({});
    setScore(0);
    setInputVal("");
    setChecked(false);
    setIsCorrect(null);
    setPhase("quiz");
  }

  useEffect(() => {
    if (phase === "quiz" && inputRef.current) {
      inputRef.current.focus();
    }
  }, [current, phase]);

  function handleCheck() {
    if (!inputVal.trim()) return;
    const q = questions[current];
    const correct = inputVal.trim().toLowerCase() === q.word.toLowerCase();
    setIsCorrect(correct);
    setChecked(true);
    setAnswers((prev) => ({ ...prev, [current]: { val: inputVal, correct } }));
    if (correct) setScore((s) => s + 1);
  }

  function handleNext() {
    const next = current + 1;
    if (next >= questions.length) {
      setPhase("result");
    } else {
      setCurrent(next);
      setInputVal("");
      setChecked(false);
      setIsCorrect(null);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      if (!checked) handleCheck();
      else handleNext();
    }
  }

  if (phase === "intro") {
    return (
      <div>
        <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 24, fontWeight: 700, marginBottom: 6 }}>Complete the Words</div>
        <div style={{ fontSize: 13.5, color: COLORS.inkSoft, marginBottom: 24, lineHeight: 1.6 }}>
          2026 TOEFL Reading'in ilk görevi. Kelimenin ilk kısmı gösterilir, eksik harfleri doğru yazmalısın. <strong>Tam yazım zorunlu.</strong>
        </div>
        {/* Örnek */}
        <div style={{ background: COLORS.card, border: `1px solid ${COLORS.paperLine}`, borderRadius: 12, padding: "20px", marginBottom: 20 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: COLORS.inkSoft, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12 }}>Örnek Soru</div>
          <div style={{ fontSize: 13, color: COLORS.inkSoft, marginBottom: 6 }}>İpucu (Türkçe karşılık):</div>
          <div style={{ fontSize: 14, fontWeight: 600, color: COLORS.ink, marginBottom: 12 }}>Ocak ayı</div>
          <div style={{ fontSize: 13, color: COLORS.inkSoft, marginBottom: 6 }}>Kelime:</div>
          <div style={{ fontFamily: "monospace", fontSize: 22, fontWeight: 700, letterSpacing: 4, color: COLORS.ink, marginBottom: 12 }}>
            jan<span style={{ color: COLORS.coral }}>_______</span>
          </div>
          <div style={{ fontSize: 13, color: COLORS.moss, fontWeight: 600 }}>✓ Doğru cevap: january</div>
        </div>
        <div style={{ background: COLORS.paper, borderRadius: 10, padding: "14px 16px", marginBottom: 20, border: `1px solid ${COLORS.paperLine}` }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 6 }}>
            <AlertCircle size={14} color={COLORS.gold} style={{ flexShrink: 0, marginTop: 1 }} />
            <div style={{ fontSize: 13, color: COLORS.ink, lineHeight: 1.5 }}>
              <strong>Dikkat:</strong> Büyük/küçük harf fark etmez, ama yazım tam doğru olmalı. {words.length} kelimenden rastgele 10 soru seçilir.
            </div>
          </div>
        </div>
        {words.length < 5 ? (
          <div style={{ textAlign: "center", color: COLORS.inkSoft, fontSize: 13.5, padding: 20 }}>
            Bu mod için en az 5 kelime gerekli. Şu an {words.length} kelimen var.
          </div>
        ) : (
          <button onClick={startQuiz} style={{
            width: "100%", background: COLORS.ink, color: COLORS.paper, border: "none",
            borderRadius: 10, padding: "15px", fontSize: 14, fontWeight: 700, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          }}>
            <Type size={16} /> Başla ({Math.min(10, words.length)} Soru)
          </button>
        )}
      </div>
    );
  }

  if (phase === "result") {
    const pct = Math.round((score / questions.length) * 100);
    const band = pct >= 90 ? { label: "Mükemmel!", color: COLORS.moss } : pct >= 70 ? { label: "İyi!", color: COLORS.gold } : pct >= 50 ? { label: "Gelişiyor", color: "#8C7423" } : { label: "Daha Çok Çalış", color: COLORS.coral };
    return (
      <div>
        <div style={{ textAlign: "center", padding: "30px 0 24px" }}>
          <div style={{ fontSize: 56, fontWeight: 800, color: band.color, fontFamily: "'Source Serif 4', serif" }}>{score}/{questions.length}</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: band.color, marginBottom: 6 }}>{band.label}</div>
          <div style={{ fontSize: 13.5, color: COLORS.inkSoft }}>%{pct} başarı</div>
        </div>
        <div style={{ background: COLORS.paper, borderRadius: 4, height: 8, overflow: "hidden", marginBottom: 24 }}>
          <div style={{ width: `${pct}%`, height: "100%", background: band.color, borderRadius: 4, transition: "width 0.8s ease" }} />
        </div>
        {/* Cevap özeti */}
        <div style={{ marginBottom: 20 }}>
          {questions.map((q, i) => {
            const ans = answers[i];
            return (
              <div key={i} style={{
                display: "flex", gap: 10, alignItems: "center",
                padding: "10px 12px", borderRadius: 8,
                background: ans?.correct ? COLORS.mossSoft : COLORS.coralSoft,
                marginBottom: 6, border: `1px solid ${ans?.correct ? COLORS.moss : COLORS.coral}20`,
              }}>
                {ans?.correct ? <Check size={14} color={COLORS.moss} /> : <X size={14} color={COLORS.coral} />}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.ink }}>{q.word}</span>
                  {!ans?.correct && <span style={{ fontSize: 12, color: COLORS.inkSoft, marginLeft: 8 }}>senin cevabın: "{ans?.val || "boş"}"</span>}
                </div>
              </div>
            );
          })}
        </div>
        <button onClick={startQuiz} style={{
          width: "100%", background: COLORS.ink, color: COLORS.paper, border: "none",
          borderRadius: 10, padding: "14px", fontSize: 14, fontWeight: 700, cursor: "pointer",
        }}>
          <RotateCcw size={15} style={{ verticalAlign: "middle", marginRight: 6 }} />Tekrar Dene
        </button>
      </div>
    );
  }

  // Quiz phase
  const q = questions[current];
  const progress = ((current) / questions.length) * 100;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <div style={{ fontSize: 12.5, fontWeight: 700, color: COLORS.inkSoft }}>Complete the Words</div>
        <div style={{ fontSize: 12.5, fontWeight: 600, color: COLORS.inkSoft }}>{current + 1} / {questions.length}</div>
      </div>
      <div style={{ background: COLORS.paper, borderRadius: 4, height: 5, overflow: "hidden", marginBottom: 22 }}>
        <div style={{ width: `${progress}%`, height: "100%", background: COLORS.gold, borderRadius: 4, transition: "width 0.3s ease" }} />
      </div>

      <div style={{ background: COLORS.card, border: `1px solid ${COLORS.paperLine}`, borderRadius: 12, padding: "24px", marginBottom: 18, textAlign: "center" }}>
        <div style={{ fontSize: 12, color: COLORS.inkSoft, marginBottom: 8 }}>Türkçe karşılık (ipucu):</div>
        <div style={{ fontSize: 16, fontWeight: 600, color: COLORS.ink, marginBottom: 20, fontStyle: "italic" }}>{q.hint}</div>
        <div style={{ fontSize: 12, color: COLORS.inkSoft, marginBottom: 8 }}>İngilizce kelime:</div>
        <div style={{
          fontFamily: "monospace",
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: 6,
          color: checked ? (isCorrect ? COLORS.moss : COLORS.coral) : COLORS.ink,
          marginBottom: 4,
          transition: "color 0.2s",
        }}>
          {q.masked}
        </div>
        {checked && !isCorrect && (
          <div style={{ fontSize: 14, color: COLORS.moss, fontWeight: 700, marginTop: 8 }}>✓ Doğru: {q.word}</div>
        )}
      </div>

      <input
        ref={inputRef}
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={checked}
        placeholder="Tam kelimeyi yaz..."
        style={{
          width: "100%",
          padding: "14px 16px",
          borderRadius: 10,
          border: `1.5px solid ${checked ? (isCorrect ? COLORS.moss : COLORS.coral) : COLORS.paperLine}`,
          fontSize: 15,
          fontFamily: "'Inter', sans-serif",
          background: checked ? (isCorrect ? COLORS.mossSoft : COLORS.coralSoft) : COLORS.card,
          color: COLORS.ink,
          outline: "none",
          marginBottom: 12,
          transition: "all 0.2s",
          boxSizing: "border-box",
          textTransform: "lowercase",
        }}
      />

      {!checked ? (
        <button onClick={handleCheck} disabled={!inputVal.trim()} style={{
          width: "100%", background: inputVal.trim() ? COLORS.ink : COLORS.paperLine,
          color: inputVal.trim() ? COLORS.paper : COLORS.inkSoft,
          border: "none", borderRadius: 10, padding: "14px", fontSize: 14, fontWeight: 700,
          cursor: inputVal.trim() ? "pointer" : "default", transition: "all 0.2s",
        }}>
          Kontrol Et (Enter)
        </button>
      ) : (
        <button onClick={handleNext} style={{
          width: "100%", background: isCorrect ? COLORS.moss : COLORS.coral,
          color: "#fff", border: "none", borderRadius: 10, padding: "14px",
          fontSize: 14, fontWeight: 700, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        }}>
          {isCorrect ? <Check size={16} /> : <X size={16} />}
          {current + 1 < questions.length ? "Sonraki" : "Sonuçları Gör"}
        </button>
      )}

      <div style={{ textAlign: "center", marginTop: 12 }}>
        <span style={{ fontSize: 13, color: COLORS.inkSoft, fontWeight: 600 }}>
          Puan: {score} / {current + (checked ? 1 : 0)}
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// BUILD A SENTENCE MODU
// ─────────────────────────────────────────────────────────────────────────────

const SENTENCE_TEMPLATES = [
  { template: "The {word} is considered an important concept in academic research.", decoys: ["however", "therefore"] },
  { template: "Scholars have long debated the role of {word} in modern society.", decoys: ["moreover", "subsequently"] },
  { template: "A thorough understanding of {word} is essential for academic success.", decoys: ["alternatively", "specifically"] },
  { template: "Many researchers argue that {word} significantly affects human behavior.", decoys: ["consequently", "primarily"] },
  { template: "The study of {word} requires careful analysis and critical thinking.", decoys: ["essentially", "particularly"] },
  { template: "Recent studies suggest that {word} plays a key role in development.", decoys: ["furthermore", "nonetheless"] },
  { template: "Students who master {word} tend to perform better on academic tasks.", decoys: ["meanwhile", "conversely"] },
  { template: "The concept of {word} has evolved significantly over the past century.", decoys: ["nevertheless", "accordingly"] },
];

function generateBuildQuestion(wordObj) {
  const tpl = SENTENCE_TEMPLATES[Math.floor(Math.random() * SENTENCE_TEMPLATES.length)];
  const sentence = tpl.template.replace("{word}", wordObj.word);
  const sentenceTokens = sentence.replace(/\./g, " .").split(" ").filter(Boolean);
  const numDecoys = Math.floor(Math.random() * 2) + 1;
  const decoys = tpl.decoys.slice(0, numDecoys);
  const allTokens = [...sentenceTokens, ...decoys].sort(() => Math.random() - 0.5);
  return {
    sentence,
    sentenceTokens,
    tokens: allTokens,
    decoys,
    word: wordObj.word,
    hint: wordObj.definition,
  };
}

function BuildSentence({ words }) {
  const [phase, setPhase] = useState("intro"); // intro | quiz | result
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState([]); // tokens user has placed in order
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [results, setResults] = useState([]);

  function startQuiz() {
    if (words.length < 3) return;
    const pool = [...words].sort(() => Math.random() - 0.5).slice(0, 5);
    setQuestions(pool.map(generateBuildQuestion));
    setCurrent(0);
    setSelected([]);
    setChecked(false);
    setIsCorrect(null);
    setResults([]);
    setPhase("quiz");
  }

  function handleTokenClick(token, fromBank) {
    if (checked) return;
    if (fromBank) {
      // Add to selected (remove from bank)
      setSelected((prev) => [...prev, token]);
    } else {
      // Remove from selected
      setSelected((prev) => {
        const idx = prev.indexOf(token);
        if (idx === -1) return prev;
        return [...prev.slice(0, idx), ...prev.slice(idx + 1)];
      });
    }
  }

  function handleCheck() {
    const q = questions[current];
    const userSentence = selected.join(" ").replace(" .", ".").trim();
    const correct = q.sentence.toLowerCase().replace(/\s+/g, " ").trim();
    const user = userSentence.toLowerCase().replace(/\s+/g, " ").trim();
    const isOk = correct === user;
    setIsCorrect(isOk);
    setChecked(true);
    setResults((prev) => [...prev, { correct: isOk, q }]);
  }

  function handleNext() {
    const next = current + 1;
    if (next >= questions.length) {
      setPhase("result");
    } else {
      setCurrent(next);
      setSelected([]);
      setChecked(false);
      setIsCorrect(null);
    }
  }

  if (phase === "intro") {
    return (
      <div>
        <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 24, fontWeight: 700, marginBottom: 6 }}>Build a Sentence</div>
        <div style={{ fontSize: 13.5, color: COLORS.inkSoft, marginBottom: 24, lineHeight: 1.6 }}>
          2026 TOEFL Writing'in yeni görevi. Verilen kelimelerden <strong>tek doğru cümleyi</strong> kur. Dikkat: aralarında <strong>aldatıcı (decoy)</strong> kelimeler de var!
        </div>
        <div style={{ background: COLORS.card, border: `1px solid ${COLORS.paperLine}`, borderRadius: 12, padding: "20px", marginBottom: 20 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: COLORS.inkSoft, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12 }}>Nasıl Çalışır?</div>
          {[
            { icon: "1", text: "Kelime bankasından kelimelere tıklayarak cümle oluştur" },
            { icon: "2", text: "Yanlış sıraya koyduğun kelimeye tekrar tıkla → banka'ya geri döner" },
            { icon: "3", text: "Kırmızı renkli kelimeler decoy — bunları KULLANMA" },
            { icon: "4", text: "All-or-nothing: tam doğru olmalı, yarım puan yok" },
          ].map(({ icon, text }) => (
            <div key={icon} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
              <div style={{ width: 22, height: 22, borderRadius: "50%", background: COLORS.ink, color: "#fff", fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{icon}</div>
              <div style={{ fontSize: 13, color: COLORS.ink, lineHeight: 1.5, paddingTop: 2 }}>{text}</div>
            </div>
          ))}
        </div>
        {words.length < 3 ? (
          <div style={{ textAlign: "center", color: COLORS.inkSoft, fontSize: 13.5, padding: 20 }}>
            Bu mod için en az 3 kelime gerekli. Şu an {words.length} kelimen var.
          </div>
        ) : (
          <button onClick={startQuiz} style={{
            width: "100%", background: COLORS.ink, color: COLORS.paper, border: "none",
            borderRadius: 10, padding: "15px", fontSize: 14, fontWeight: 700, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          }}>
            <Shuffle size={16} /> Başla ({Math.min(5, words.length)} Soru)
          </button>
        )}
      </div>
    );
  }

  if (phase === "result") {
    const score = results.filter((r) => r.correct).length;
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div>
        <div style={{ textAlign: "center", padding: "30px 0 24px" }}>
          <div style={{ fontSize: 56, fontWeight: 800, color: pct >= 80 ? COLORS.moss : pct >= 60 ? COLORS.gold : COLORS.coral, fontFamily: "'Source Serif 4', serif" }}>{score}/{questions.length}</div>
          <div style={{ fontSize: 14, color: COLORS.inkSoft, marginTop: 6 }}>%{pct} doğru · All-or-nothing</div>
        </div>
        <div style={{ marginBottom: 20 }}>
          {results.map((r, i) => (
            <div key={i} style={{ background: r.correct ? COLORS.mossSoft : COLORS.coralSoft, borderRadius: 8, padding: "12px 14px", marginBottom: 8 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 4 }}>
                {r.correct ? <Check size={14} color={COLORS.moss} /> : <X size={14} color={COLORS.coral} />}
                <span style={{ fontSize: 12, fontWeight: 700, color: COLORS.inkSoft }}>Hedef kelime: {r.q.word}</span>
              </div>
              <div style={{ fontSize: 12.5, color: COLORS.ink, fontStyle: "italic" }}>{r.q.sentence}</div>
            </div>
          ))}
        </div>
        <button onClick={startQuiz} style={{
          width: "100%", background: COLORS.ink, color: COLORS.paper, border: "none",
          borderRadius: 10, padding: "14px", fontSize: 14, fontWeight: 700, cursor: "pointer",
        }}>
          <RotateCcw size={15} style={{ verticalAlign: "middle", marginRight: 6 }} />Tekrar Dene
        </button>
      </div>
    );
  }

  const q = questions[current];
  // Bank: tokens that have NOT been placed in selected
  const placedCounts = {};
  for (const t of selected) placedCounts[t] = (placedCounts[t] || 0) + 1;
  const bankCounts = {};
  for (const t of q.tokens) bankCounts[t] = (bankCounts[t] || 0) + 1;
  const bankAvailable = [];
  const tempPlaced = { ...placedCounts };
  for (const t of q.tokens) {
    if (tempPlaced[t] > 0) { tempPlaced[t]--; }
    else bankAvailable.push(t);
  }

  const userSentence = selected.join(" ").replace(" .", ".").trim();
  const correctSentence = q.sentence.toLowerCase().replace(/\s+/g, " ").trim();

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <div style={{ fontSize: 12.5, fontWeight: 700, color: COLORS.inkSoft }}>Build a Sentence</div>
        <div style={{ fontSize: 12.5, fontWeight: 600, color: COLORS.inkSoft }}>{current + 1} / {questions.length}</div>
      </div>
      <div style={{ background: COLORS.paper, borderRadius: 4, height: 5, overflow: "hidden", marginBottom: 22 }}>
        <div style={{ width: `${(current / questions.length) * 100}%`, height: "100%", background: "#3A5A8C", borderRadius: 4, transition: "width 0.3s ease" }} />
      </div>

      {/* Hedef kelime + ipucu */}
      <div style={{ background: COLORS.card, border: `1px solid ${COLORS.paperLine}`, borderRadius: 12, padding: "18px", marginBottom: 16, textAlign: "center" }}>
        <div style={{ fontSize: 12, color: COLORS.inkSoft, marginBottom: 4 }}>Bu kelimeyi içeren bir cümle kur:</div>
        <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 26, fontWeight: 700, color: COLORS.ink, marginBottom: 6 }}>{q.word}</div>
        <div style={{ fontSize: 13, color: COLORS.inkSoft, fontStyle: "italic" }}>{q.hint}</div>
      </div>

      {/* Seçilen cümle alanı */}
      <div style={{
        minHeight: 60,
        background: checked ? (isCorrect ? COLORS.mossSoft : COLORS.coralSoft) : COLORS.paper,
        border: `1.5px ${checked ? "solid" : "dashed"} ${checked ? (isCorrect ? COLORS.moss : COLORS.coral) : COLORS.paperLine}`,
        borderRadius: 10,
        padding: "12px 14px",
        marginBottom: 14,
        display: "flex",
        flexWrap: "wrap",
        gap: 6,
        alignContent: "flex-start",
        transition: "all 0.2s",
      }}>
        {selected.length === 0 && <span style={{ color: COLORS.inkSoft, fontSize: 13, fontStyle: "italic" }}>Kelimelere tıkla…</span>}
        {selected.map((token, i) => (
          <button key={i} onClick={() => !checked && handleTokenClick(token, false)} style={{
            padding: "5px 10px", borderRadius: 6, border: `1px solid ${checked ? "transparent" : COLORS.paperLine}`,
            background: checked ? "rgba(255,255,255,0.6)" : COLORS.card,
            fontSize: 13.5, fontWeight: 600, cursor: checked ? "default" : "pointer",
            color: COLORS.ink,
          }}>
            {token}
          </button>
        ))}
        {checked && !isCorrect && (
          <div style={{ width: "100%", marginTop: 8, fontSize: 12.5, color: COLORS.moss, fontWeight: 600 }}>
            ✓ Doğru: {q.sentence}
          </div>
        )}
      </div>

      {/* Kelime bankası */}
      {!checked && (
        <div style={{
          background: COLORS.card, border: `1px solid ${COLORS.paperLine}`, borderRadius: 10,
          padding: "12px 14px", marginBottom: 16, display: "flex", flexWrap: "wrap", gap: 6,
        }}>
          <div style={{ width: "100%", fontSize: 11, fontWeight: 700, color: COLORS.inkSoft, marginBottom: 6, letterSpacing: "0.04em", textTransform: "uppercase" }}>Kelime Bankası</div>
          {bankAvailable.map((token, i) => {
            const isDecoy = q.decoys.includes(token);
            return (
              <button key={i} onClick={() => handleTokenClick(token, true)} style={{
                padding: "6px 11px", borderRadius: 6,
                border: `1px solid ${isDecoy ? COLORS.coralSoft : COLORS.paperLine}`,
                background: isDecoy ? COLORS.coralSoft : COLORS.paper,
                fontSize: 13.5, fontWeight: 600, cursor: "pointer",
                color: isDecoy ? COLORS.coral : COLORS.ink,
              }}>
                {token}
              </button>
            );
          })}
        </div>
      )}

      {!checked ? (
        <button onClick={handleCheck} disabled={selected.length === 0} style={{
          width: "100%", background: selected.length > 0 ? COLORS.ink : COLORS.paperLine,
          color: selected.length > 0 ? COLORS.paper : COLORS.inkSoft,
          border: "none", borderRadius: 10, padding: "14px", fontSize: 14, fontWeight: 700,
          cursor: selected.length > 0 ? "pointer" : "default", transition: "all 0.2s",
        }}>
          Cümleyi Kontrol Et
        </button>
      ) : (
        <button onClick={handleNext} style={{
          width: "100%", background: isCorrect ? COLORS.moss : COLORS.coral,
          color: "#fff", border: "none", borderRadius: 10, padding: "14px",
          fontSize: 14, fontWeight: 700, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        }}>
          {isCorrect ? <Check size={16} /> : <X size={16} />}
          {current + 1 < questions.length ? "Sonraki Soru" : "Sonuçları Gör"}
        </button>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// GRAMMAR VIEW
// ─────────────────────────────────────────────────────────────────────────────

const LEVEL_META = {
  A1: { color: "#4C9A6A", bg: "#E0F0E8", label: "Baslangic" },
  A2: { color: "#3A7DA8", bg: "#DCE9F2", label: "Temel" },
  B1: { color: "#7A6B38", bg: "#F0EAD8", label: "Orta Alti" },
  B2: { color: "#8C5A28", bg: "#F0E4D4", label: "Orta Ustu" },
  C1: { color: "#6B3A8C", bg: "#EAE0F4", label: "Ileri" },
  C2: { color: "#8C2A3A", bg: "#F4DDE2", label: "Ustalik" },
};

function GrammarView() {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});

  const levels = grammarData.levels;

  if (selectedTopic) {
    const t = selectedTopic;
    const lvlMeta = LEVEL_META[selectedLevel] || LEVEL_META.A1;

    return (
      <div>
        <button
          onClick={() => { setSelectedTopic(null); setQuizAnswers({}); }}
          style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", color: COLORS.inkSoft, fontSize: 13, fontWeight: 600, marginBottom: 16, padding: 0 }}
        >
          <ChevronLeft size={16} />
          {selectedLevel} konularina geri don
        </button>

        <div style={{ background: lvlMeta.color + "22", border: "1px solid " + lvlMeta.color + "40", borderRadius: 14, padding: "18px 20px", marginBottom: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <span style={{ background: lvlMeta.color, color: "#fff", fontSize: 11, fontWeight: 800, padding: "3px 9px", borderRadius: 20, letterSpacing: "0.06em" }}>{selectedLevel}</span>
            <span style={{ fontSize: 11.5, color: COLORS.inkSoft, fontWeight: 600 }}>Gramer Konusu</span>
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: COLORS.ink, marginBottom: 4 }}>{t.title}</div>
          <div style={{ fontSize: 14, color: COLORS.inkSoft, fontWeight: 500 }}>{t.title_tr}</div>
        </div>

        <div style={{ background: COLORS.card, border: "1px solid " + COLORS.paperLine, borderRadius: 12, padding: "16px 18px", marginBottom: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: COLORS.inkSoft, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>Konu Anlatimi</div>
          <p style={{ fontSize: 13.5, color: COLORS.ink, lineHeight: 1.7, marginBottom: 12, margin: "0 0 12px 0" }}>{t.explanation}</p>
          <div style={{ background: lvlMeta.bg, borderRadius: 8, padding: "10px 14px", borderLeft: "3px solid " + lvlMeta.color }}>
            <p style={{ fontSize: 13, color: COLORS.ink, lineHeight: 1.65, margin: 0 }}>{t.explanation_tr}</p>
          </div>
        </div>

        {t.structure_patterns && t.structure_patterns.length > 0 && (
          <div style={{ background: COLORS.card, border: "1px solid " + COLORS.paperLine, borderRadius: 12, padding: "16px 18px", marginBottom: 14 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: COLORS.inkSoft, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>Yapi Kaliplari</div>
            {t.structure_patterns.map((p, i) => (
              <div key={i} style={{ background: "#1e1e2e", borderRadius: 8, padding: "10px 14px", marginBottom: 6, fontFamily: "monospace", fontSize: 13, color: "#a9d9f0" }}>
                {p}
              </div>
            ))}
          </div>
        )}

        {t.signal_words && t.signal_words.length > 0 && (
          <div style={{ background: COLORS.card, border: "1px solid " + COLORS.paperLine, borderRadius: 12, padding: "16px 18px", marginBottom: 14 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: COLORS.inkSoft, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>Sinyal Kelimeleri</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
              {t.signal_words.map((w, i) => (
                <span key={i} style={{ background: lvlMeta.bg, color: lvlMeta.color, fontSize: 12, fontWeight: 700, padding: "4px 10px", borderRadius: 20, border: "1px solid " + lvlMeta.color + "40" }}>{w}</span>
              ))}
            </div>
            {t.signal_words_note_tr && (
              <p style={{ fontSize: 12, color: COLORS.inkSoft, lineHeight: 1.55, margin: 0 }}>{t.signal_words_note_tr}</p>
            )}
          </div>
        )}

        {t.examples && t.examples.length > 0 && (
          <div style={{ background: COLORS.card, border: "1px solid " + COLORS.paperLine, borderRadius: 12, padding: "16px 18px", marginBottom: 14 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: COLORS.inkSoft, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>Ornekler</div>
            {t.examples.map((ex, i) => (
              <div key={i} style={{ borderLeft: "3px solid " + lvlMeta.color, paddingLeft: 14, marginBottom: 10 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: COLORS.ink, marginBottom: 3 }}>{ex.sentence}</div>
                <div style={{ fontSize: 12.5, color: COLORS.inkSoft }}>{ex.translation}</div>
              </div>
            ))}
          </div>
        )}

        {t.exceptions && t.exceptions.length > 0 && (
          <div style={{ background: "#fff8f0", border: "1px solid " + COLORS.goldSoft, borderRadius: 12, padding: "16px 18px", marginBottom: 14 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: COLORS.gold, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>Istisnalar</div>
            {t.exceptions.map((ex, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 8, padding: "10px 12px", marginBottom: 8, border: "1px solid " + COLORS.goldSoft }}>
                <div style={{ fontSize: 12.5, fontWeight: 700, color: COLORS.ink, marginBottom: 4 }}>{ex.rule}</div>
                <div style={{ fontFamily: "monospace", fontSize: 12.5, color: "#3A5A8C", background: "#f0f4f9", borderRadius: 5, padding: "4px 8px", marginBottom: 4 }}>{ex.example}</div>
                {ex.explanation_tr && <div style={{ fontSize: 12, color: COLORS.inkSoft }}>{ex.explanation_tr}</div>}
              </div>
            ))}
          </div>
        )}

        {t.common_mistakes && t.common_mistakes.length > 0 && (
          <div style={{ background: "#fff5f5", border: "1px solid " + COLORS.coralSoft, borderRadius: 12, padding: "16px 18px", marginBottom: 14 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: COLORS.coral, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>Sik Yapilan Hatalar</div>
            {t.common_mistakes.map((m, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 8, padding: "12px", marginBottom: 10, border: "1px solid " + COLORS.coralSoft }}>
                <div style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: COLORS.coral, marginBottom: 3 }}>Yanlis</div>
                    <div style={{ fontFamily: "monospace", fontSize: 13, color: COLORS.coral, background: "#fff0f0", borderRadius: 5, padding: "4px 8px" }}>{m.wrong}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: COLORS.moss, marginBottom: 3 }}>Dogru</div>
                    <div style={{ fontFamily: "monospace", fontSize: 13, color: COLORS.moss, background: "#f0f7f2", borderRadius: 5, padding: "4px 8px" }}>{m.correct}</div>
                  </div>
                </div>
                {m.explanation_tr && <div style={{ fontSize: 12, color: COLORS.inkSoft, lineHeight: 1.55 }}>{m.explanation_tr}</div>}
              </div>
            ))}
          </div>
        )}

        {t.toefl_tip && (
          <div style={{ background: "linear-gradient(135deg, #1a1f2e 0%, #2d3561 100%)", borderRadius: 12, padding: "16px 18px", marginBottom: 14 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: COLORS.gold, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>TOEFL Ipucu</div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", lineHeight: 1.65, margin: 0 }}>{t.toefl_tip}</p>
          </div>
        )}

        {t.toefl_style_questions && t.toefl_style_questions.length > 0 && (
          <div style={{ background: COLORS.card, border: "1px solid " + COLORS.paperLine, borderRadius: 12, padding: "16px 18px", marginBottom: 14 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: COLORS.inkSoft, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12 }}>Pratik Sorular</div>
            {t.toefl_style_questions.map((q, qi) => {
              const answered = quizAnswers[qi];
              return (
                <div key={qi} style={{ background: COLORS.paper, borderRadius: 10, padding: "14px", marginBottom: 12, border: "1px solid " + COLORS.paperLine }}>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: COLORS.ink, marginBottom: 12, lineHeight: 1.5 }}>
                    <span style={{ color: COLORS.inkSoft, fontWeight: 400 }}>Soru {qi + 1}: </span>{q.question}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    {q.options.map((opt, oi) => {
                      const isCorrect = opt === q.answer;
                      const isSelected = answered === opt;
                      let bg = COLORS.card, borderColor = COLORS.paperLine, color = COLORS.ink;
                      if (answered) {
                        if (isCorrect) { bg = "#f0f7f2"; borderColor = COLORS.moss; color = COLORS.moss; }
                        else if (isSelected) { bg = "#fff5f5"; borderColor = COLORS.coral; color = COLORS.coral; }
                      }
                      return (
                        <button
                          key={oi}
                          disabled={!!answered}
                          onClick={() => setQuizAnswers(prev => ({ ...prev, [qi]: opt }))}
                          style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 8, border: "1px solid " + borderColor, background: bg, cursor: answered ? "default" : "pointer", textAlign: "left", transition: "all 0.15s" }}
                        >
                          <span style={{ width: 22, height: 22, borderRadius: "50%", border: "2px solid " + borderColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color, flexShrink: 0 }}>
                            {answered ? (isCorrect ? "V" : (isSelected ? "X" : String.fromCharCode(65 + oi))) : String.fromCharCode(65 + oi)}
                          </span>
                          <span style={{ fontSize: 13, color, fontWeight: (isCorrect && answered) ? 700 : 400 }}>{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                  {answered && (
                    <div style={{ marginTop: 10, padding: "8px 10px", borderRadius: 7, background: answered === q.answer ? "#f0f7f2" : "#fff5f5", border: "1px solid " + (answered === q.answer ? COLORS.moss : COLORS.coral) + "50", fontSize: 12.5, color: COLORS.ink, lineHeight: 1.55 }}>
                      <strong style={{ color: answered === q.answer ? COLORS.moss : COLORS.coral }}>
                        {answered === q.answer ? "Dogru! " : ("Yanlis — Dogru: " + q.answer + ". ")}
                      </strong>
                      {q.explanation_tr}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  if (selectedLevel) {
    const levelData = levels.find(l => l.level === selectedLevel);
    const lvlMeta = LEVEL_META[selectedLevel];
    return (
      <div>
        <button
          onClick={() => setSelectedLevel(null)}
          style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", color: COLORS.inkSoft, fontSize: 13, fontWeight: 600, marginBottom: 16, padding: 0 }}
        >
          <ChevronLeft size={16} />
          Tum seviyelere geri don
        </button>
        <div style={{ background: "linear-gradient(135deg, " + lvlMeta.color + " 0%, " + lvlMeta.color + "cc 100%)", borderRadius: 14, padding: "18px 20px", marginBottom: 18 }}>
          <div style={{ fontSize: 28, fontWeight: 800, color: "#fff", marginBottom: 4 }}>{selectedLevel}</div>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{lvlMeta.label} · {levelData.topic_count} konu</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {levelData.topics.map((topic, i) => (
            <button
              key={topic.id}
              onClick={() => setSelectedTopic(topic)}
              style={{ background: COLORS.card, border: "1px solid " + COLORS.paperLine, borderRadius: 12, padding: "14px 16px", cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: 12 }}
            >
              <div style={{ width: 32, height: 32, borderRadius: 8, background: lvlMeta.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: lvlMeta.color }}>{i + 1}</span>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13.5, fontWeight: 700, color: COLORS.ink, marginBottom: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{topic.title}</div>
                <div style={{ fontSize: 12, color: COLORS.inkSoft, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{topic.title_tr}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                {topic.toefl_style_questions && <span style={{ fontSize: 11, background: lvlMeta.bg, color: lvlMeta.color, fontWeight: 600, padding: "3px 7px", borderRadius: 10 }}>{topic.toefl_style_questions.length} soru</span>}
                <ChevronRight size={14} color={COLORS.inkSoft} />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ background: "linear-gradient(135deg, #1a1f2e 0%, #2d3561 50%, #1a2a3a 100%)", borderRadius: 16, padding: "24px 20px", marginBottom: 20, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -15, right: -15, width: 100, height: 100, borderRadius: "50%", background: "rgba(108,92,231,0.2)" }} />
        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <div style={{ background: "rgba(184,137,43,0.2)", borderRadius: 8, padding: "5px 10px", border: "1px solid rgba(184,137,43,0.4)" }}>
              <span style={{ color: COLORS.gold, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>A1 den C2 ye · 44 Konu</span>
            </div>
          </div>
          <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 6 }}>Dil Bilgisi Rehberi</div>
          <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, lineHeight: 1.6 }}>
            TOEFL odakli Turkce anlatimlar, yapi kaliplari, sik yapilan hatalar ve pratik sorularla kapsamli gramer rehberi.
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 20 }}>
        {[
          { label: "Toplam Konu", value: "44", icon: BookMarked },
          { label: "Pratik Soru", value: "88", icon: CheckCircle },
          { label: "Seviye", value: "A1-C2", icon: TrendingUp },
        ].map(function(item) {
          var Icon = item.icon;
          return (
            <div key={item.label} style={{ background: COLORS.card, border: "1px solid " + COLORS.paperLine, borderRadius: 10, padding: "12px 14px", textAlign: "center" }}>
              <Icon size={16} color={COLORS.moss} style={{ marginBottom: 6 }} />
              <div style={{ fontSize: 18, fontWeight: 800, color: COLORS.ink }}>{item.value}</div>
              <div style={{ fontSize: 11, color: COLORS.inkSoft, marginTop: 2 }}>{item.label}</div>
            </div>
          );
        })}
      </div>

      <div style={{ marginBottom: 8, fontSize: 13, fontWeight: 700, color: COLORS.inkSoft, letterSpacing: "0.06em", textTransform: "uppercase" }}>Seviye Sec</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {levels.map(function(lvl) {
          var meta = LEVEL_META[lvl.level] || LEVEL_META.A1;
          return (
            <button
              key={lvl.level}
              onClick={() => setSelectedLevel(lvl.level)}
              style={{ background: COLORS.card, border: "1px solid " + COLORS.paperLine, borderRadius: 12, padding: "16px", cursor: "pointer", textAlign: "left", display: "flex", flexDirection: "column", gap: 8 }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ fontSize: 24, fontWeight: 900, color: meta.color }}>{lvl.level}</div>
                <span style={{ background: meta.bg, color: meta.color, fontSize: 10.5, fontWeight: 700, padding: "3px 8px", borderRadius: 20 }}>{lvl.topic_count} konu</span>
              </div>
              <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.inkSoft }}>{meta.label}</div>
              <div style={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                {(lvl.topics || []).slice(0, 3).map(function(t, i) {
                  return (
                    <span key={i} style={{ fontSize: 10.5, color: COLORS.inkSoft, background: COLORS.paper, padding: "2px 6px", borderRadius: 6, border: "1px solid " + COLORS.paperLine }}>
                      {t.title_tr.split("(")[0].trim()}
                    </span>
                  );
                })}
                {lvl.topic_count > 3 && (
                  <span style={{ fontSize: 10.5, color: meta.color, fontWeight: 700, padding: "2px 6px" }}>+{lvl.topic_count - 3} daha</span>
                )}
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                <ChevronRight size={14} color={meta.color} />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
