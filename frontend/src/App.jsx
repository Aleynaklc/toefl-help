

const PLACEMENT_DICT = {
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

function getPlacementOptions(targetWord, allSequence) {
  const wKey = targetWord.toLowerCase();
  let correctDef = PLACEMENT_DICT[wKey];
  
  if (!correctDef) {
    // Parantezli kelimeleri temizle örn. "bank (money)" -> "bank"
    const cleanKey = wKey.replace(/\s*\([^)]*\)/g, '').trim();
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
      const cleanKey = itemKey.replace(/\s*\([^)]*\)/g, '').trim();
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


import { api } from './api';
import { useState, useEffect, useMemo, useRef } from "react";
import { BookOpen, Plus, BarChart2, Check, X, RotateCcw, Search, Trash2, Layers, ArrowRight, Sparkles, PenLine, Mail, MessageSquare, Clock, Send, GraduationCap, Pause } from "lucide-react";

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
  const [view, setView] = useState("list"); // list | add | quiz | stats
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await window.storage.get(STORAGE_KEY, false);
        if (res && res.value) {
          const parsedWords = JSON.parse(res.value).map((w) => ({ ...w, category: w.category || "Genel" }));
          setWords(parsedWords);
        }
      } catch (e) {
        // key does not exist yet — that's fine
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  const persist = async (next) => {
    setWords(next);
    // API backend'i ile tek tek senkronize olmak için detaylı UI refactoring gerekir.
    // Şimdilik UI state'i güncelleniyor.
  };

  const refetchWords = async () => {
    const data = await api.getWords();
    setWords(data);
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
        {view === "list" && (
          <WordList words={words} onDelete={async (id) => {
    await api.deleteWord(id);
    refetchWords();
  }} setView={setView} />
        )}
        {view === "add" && (
          <AddWords
            existingWords={words}
            onAdd={async (newWords, rawText, category) => {
    try {
      await api.addBulkWords(rawText, category);
      await refetchWords();
      showToast(newWords.length > 1 ? `${newWords.length} kelime eklendi` : "Kelime eklendi");
      setView("list");
    } catch(e) {
      showToast("Ekleme hatası", "error");
    }
  }}
          />
        )}
        {view === "quiz" && <Quiz words={words} onUpdate={persist} />}
        {view === "stats" && <Stats words={words} />}
        {view === "writing" && <Writing />}
        {view === "placement" && (
          <PlacementTest
            existingWords={words}
            onImportWords={(newWords) => {
              persist([...words, ...newWords]);
              showToast(`${newWords.length} kelime kart kutusuna eklendi`);
            }}
          />
        )}
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
    { id: "list", label: "Kelimeler", icon: BookOpen },
    { id: "quiz", label: "Quiz", icon: Layers },
    { id: "writing", label: "Yazma", icon: PenLine },
    { id: "placement", label: "Seviye Testi", icon: GraduationCap },
    { id: "stats", label: "İstatistik", icon: BarChart2 },
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
              Kelime Fişi
            </div>
            <div style={{ fontSize: 12.5, color: COLORS.inkSoft, marginTop: 2 }}>
              TOEFL kelime kartların · {wordCount} kelime
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
          Çalışmaya başlamak için ilk kelimelerini ekle. Tek tek de girebilirsin,
          liste halinde yapıştırıp toplu da ekleyebilirsin.
        </p>
        <button
          onClick={() => setView("add")}
          style={{
            background: COLORS.ink,
            color: COLORS.paper,
            border: "none",
            borderRadius: 6,
            padding: "10px 18px",
            fontSize: 13.5,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Kelime ekle
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

function parseWordLines(text, category) {
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  const parsed = [];
  const seen = new Set();
  for (const line of lines) {
    const sep = line.includes(" - ") ? " - " : line.includes(":") ? ":" : line.includes("-") ? "-" : null;
    if (!sep) continue;
    const idx = line.indexOf(sep);
    const w = line.slice(0, idx).trim();
    const d = line.slice(idx + sep.length).trim();
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
    onAdd([makeWord(word, definition, example, resolvedCategory)]);
  };

  const submitBulk = () => {
    const parsed = parseWordLines(bulkText, resolvedCategory);
    if (parsed.length === 0) {
      setError("Satırları 'kelime - anlam' formatında yapıştır.");
      return;
    }
    onAdd(parsed);
  };

  const seedCommonVerbs = () => {
    const existingKeys = new Set(existingWords.map((w) => w.word.toLowerCase()));
    const parsed = parseWordLines(COMMON_VERBS_RAW, "Fiil").filter((w) => !existingKeys.has(w.word.toLowerCase()));
    if (parsed.length === 0) {
      setError("Bu 500 fiil listesindeki tüm kelimeler zaten kart kutunda.");
      return;
    }
    onAdd(parsed);
  };

  const seedToeflVerbs = () => {
    const existingKeys = new Set(existingWords.map((w) => w.word.toLowerCase()));
    const parsed = parseWordLines(COMMON_TOEFL_VERBS_RAW, "Fiil").filter((w) => !existingKeys.has(w.word.toLowerCase()));
    if (parsed.length === 0) {
      setError("Bu akademik fiil listesindeki tüm kelimeler zaten kart kutunda.");
      return;
    }
    onAdd(parsed);
  };

  const seedCommonAdjectives = () => {
    const existingKeys = new Set(existingWords.map((w) => w.word.toLowerCase()));
    const parsed = parseWordLines(COMMON_ADJECTIVES_RAW, "Sıfat").filter((w) => !existingKeys.has(w.word.toLowerCase()));
    if (parsed.length === 0) {
      setError("Bu sıfat listesindeki tüm kelimeler zaten kart kutunda.");
      return;
    }
    onAdd(parsed);
  };

  const seedCommonAdverbs = () => {
    const existingKeys = new Set(existingWords.map((w) => w.word.toLowerCase()));
    const parsed = parseWordLines(COMMON_ADVERBS_RAW, "Zarf").filter((w) => !existingKeys.has(w.word.toLowerCase()));
    if (parsed.length === 0) {
      setError("Bu zarf listesindeki tüm kelimeler zaten kart kutunda.");
      return;
    }
    onAdd(parsed);
  };

  const seedNounCategory = (cat) => {
    const existingKeys = new Set(existingWords.map((w) => w.word.toLowerCase()));
    const parsed = parseWordLines(cat.raw, cat.label).filter((w) => !existingKeys.has(w.word.toLowerCase()));
    if (parsed.length === 0) {
      setError(`"${cat.label}" kategorisindeki kelimeler zaten kart kutunda.`);
      return;
    }
    onAdd(parsed);
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
    id: "email-housing",
    title: "Yurt gürültüsü şikayeti",
    scenario:
      "You live in a university dormitory. For the past two weeks, construction noise near your building has made it very difficult to study or sleep. Write an email to the Housing Office.",
    bullets: [
      "Explain the problem clearly",
      "Explain how it has been affecting you",
      "Propose a specific solution you would like",
    ],
  },
  {
    id: "email-extension",
    title: "Ödev süresi uzatma talebi",
    scenario:
      "You are unable to submit a major course assignment by the deadline due to a family emergency. Write an email to your professor.",
    bullets: [
      "Explain briefly why you need more time",
      "Propose a specific new deadline",
      "Reassure the professor about the quality of your work",
    ],
  },
  {
    id: "email-registration",
    title: "Kayıt sorunu",
    scenario:
      "You tried to register for a required course online, but the system shows it is full, even though you were told there would be space reserved for your major. Write an email to the registrar's office.",
    bullets: [
      "Describe the problem clearly",
      "Mention what you were told, and by whom",
      "Request specific action from the office",
    ],
  },
  {
    id: "email-group",
    title: "Grup projesi zamanlama çakışması",
    scenario:
      "You are part of a group project team. One of your regular meeting times no longer works for you because of a new schedule conflict. Write an email to your teammates.",
    bullets: [
      "Explain the conflict",
      "Propose at least one alternative time",
      "Show willingness to accommodate the group's preference",
    ],
  },
  {
    id: "email-library",
    title: "Kütüphane cezası itirazı",
    scenario:
      "You returned a library book on time, but the library system shows it as overdue and has charged you a fine. Write an email to the library services office.",
    bullets: [
      "Explain the situation clearly",
      "Mention any evidence you have (for example, a return confirmation)",
      "Politely request that the fine be removed",
    ],
  },
  {
    id: "email-career",
    title: "Kariyer merkezinden randevu talebi",
    scenario:
      "You want to schedule a meeting with your university's career center to discuss internship opportunities in your field. Write an email requesting an appointment.",
    bullets: [
      "Explain what kind of help you are looking for",
      "Mention your general availability",
      "Ask what you should prepare before the meeting",
    ],
  },
];

const DISCUSSION_PROMPTS = [
  {
    id: "disc-socialmedia",
    title: "Sosyal medya düzenlemesi",
    question:
      "In our next class, we will discuss whether government regulation of social media companies does more good than harm. Please share your view with supporting reasons before our discussion.",
    studentA: {
      name: "Elena",
      text: "I believe stronger regulation is necessary. Without it, companies prioritize profit over user wellbeing, especially regarding misinformation and the mental health effects on teenagers.",
    },
    studentB: {
      name: "Marcus",
      text: "I disagree. Government regulation often moves too slowly to keep up with technology, and it risks limiting free expression. Self-regulation by companies, combined with media literacy education, would be more effective.",
    },
  },
  {
    id: "disc-service",
    title: "Zorunlu topluluk hizmeti",
    question: "Should universities require all students to complete community service hours before graduating? Share your opinion.",
    studentA: {
      name: "Priya",
      text: "Yes, mandatory service connects students to their communities and builds practical skills that classroom learning cannot provide.",
    },
    studentB: {
      name: "Tomas",
      text: "I think it should remain optional. Forcing service can make students resentful rather than genuinely engaged, and it takes time away from academic work many students already struggle to manage.",
    },
  },
  {
    id: "disc-language",
    title: "Dil öğrenme yöntemi",
    question:
      "Is it more effective to learn a foreign language by living in a country where it is spoken, or by studying it systematically in a classroom? What is your view?",
    studentA: {
      name: "Ana",
      text: "Immersion is far more effective. Being surrounded by the language forces practical use and builds intuition that textbooks cannot replicate.",
    },
    studentB: {
      name: "Kwame",
      text: "I would argue a classroom foundation is essential first. Without understanding grammar and structure, immersion can lead to fluent but inaccurate speech that is hard to correct later.",
    },
  },
  {
    id: "disc-remote",
    title: "Uzaktan çalışma",
    question: "Should companies allow employees to work from home permanently, or is some in-person presence necessary? Share your view.",
    studentA: {
      name: "Sofia",
      text: "Permanent remote work should be the standard option. It improves work-life balance and productivity for many employees, and companies save on office costs.",
    },
    studentB: {
      name: "Daniel",
      text: "I think regular in-person time matters for collaboration and mentorship, especially for newer employees who benefit from informal learning that is hard to replicate online.",
    },
  },
  {
    id: "disc-genetic",
    title: "Genetik mühendislik",
    question:
      "Should genetic engineering be used to prevent inherited diseases in future generations, even though it also raises ethical questions? What do you think?",
    studentA: {
      name: "Fatima",
      text: "I support using it to prevent serious inherited diseases. Preventing suffering should outweigh hypothetical ethical concerns when the goal is purely medical.",
    },
    studentB: {
      name: "Lucas",
      text: "I am cautious. Once we start editing genes for disease prevention, it becomes difficult to draw a clear line before it is used for non-medical enhancement instead.",
    },
  },
  {
    id: "disc-competition",
    title: "Rekabet mi işbirliği mi",
    question: "Which is more important for a society's progress: competition or cooperation? Please explain your reasoning.",
    studentA: {
      name: "Yuki",
      text: "Competition drives innovation. Without it, there is little incentive to improve products, ideas, or services.",
    },
    studentB: {
      name: "Omar",
      text: "Cooperation matters more in the long run. Many of humanity's biggest achievements, from scientific research to public health, required people working together rather than competing.",
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
  const bucketStartIndex = sequence.findIndex((it) => it.bucket === currentItem.bucket);
  const bucketCount = sequence.filter((it) => it.bucket === currentItem.bucket).length;
  const bucketPosition = currentIndex - bucketStartIndex + 1;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <button
          onClick={pauseAndExit}
          style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", color: COLORS.inkSoft, fontSize: 12.5, fontWeight: 600, cursor: "pointer" }}
        >
          <Pause size={13} /> Ara ver
        </button>
        <span style={{ fontSize: 12.5, color: COLORS.inkSoft, fontWeight: 600 }}>
          {currentIndex + 1} / {sequence.length}
        </span>
      </div>

      <div style={{ background: COLORS.paper, borderRadius: 4, height: 5, overflow: "hidden", marginBottom: 20 }}>
        <div
          style={{
            width: `${((currentIndex + 1) / sequence.length) * 100}%`,
            height: "100%",
            background: COLORS.gold,
            borderRadius: 4,
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
          padding: "40px 24px",
          textAlign: "center",
          marginBottom: 22,
        }}
      >
        <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 32, fontWeight: 700 }}>{currentItem.word}</div>
      </div>

      
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
                      border: `1px solid ${btnBorder}`,
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

    </div>
  );
}
