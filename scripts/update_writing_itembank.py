import json

file_path = "/Users/aleynakilic/Downloads/toefl-help-main/frontend/src/data/toefl2026_item_bank.json"

with open(file_path, "r", encoding="utf-8") as f:
    data = json.load(f)

# Update metadata if needed
data["metadata"]["sections"]["writing"]["items"] = 12
data["metadata"]["sections"]["writing"]["base_minutes"] = 23

# Comprehensive Build Sentence Items (12 items covering all 2026 grammar and syntax patterns)
build_sentence_items = [
    {
        "id": "wr-build-001",
        "difficulty": "B2",
        "subtype": "cause_effect",
        "subtype_label_tr": "Sebep - Sonuç İlişkisi (Gerund ile Araç/Neden)",
        "context": "Academic writing often requires concise cause-effect structure.",
        "tokens": ["urban", "wetlands", "can", "reduce", "flooding", "by", "absorbing", "excess", "rainwater", "therefore"],
        "answer_tokens": ["urban", "wetlands", "can", "reduce", "flooding", "by", "absorbing", "excess", "rainwater"],
        "decoys": ["therefore"],
        "skill_group": "build_sentence_structure",
        "answer_sentence": "Urban wetlands can reduce flooding by absorbing excess rainwater.",
        "model_answer_tr": "Özne + modal + fiil + nesne + edat öbeği (by absorbing...) yapısı. “therefore” sonuç bağlacı olduğu için tek cümle içinde bağımsız kalamaz ve decoydur.",
        "explanation_tr": "Doğru dizilim: Urban wetlands (özne) + can reduce (yüklem) + flooding (nesne) + by absorbing excess rainwater (araç bildiren edat öbeği)."
    },
    {
        "id": "wr-build-002",
        "difficulty": "B2",
        "subtype": "contrast_coordination",
        "subtype_label_tr": "Zıtlık Koordinasyonu ('But' Bağlacı)",
        "context": "This sentence contrasts two complementary sources of evidence.",
        "tokens": ["student", "ratings", "are", "useful", "but", "they", "should", "be", "combined", "with", "other", "evidence", "because"],
        "answer_tokens": ["student", "ratings", "are", "useful", "but", "they", "should", "be", "combined", "with", "other", "evidence"],
        "decoys": ["because"],
        "skill_group": "build_sentence_structure",
        "answer_sentence": "Student ratings are useful but they should be combined with other evidence.",
        "model_answer_tr": "“but” iki bağımsız cümleyi zıtlık anlamıyla bağlar. “because” eklenirse cümle eksik ve mantıksal olarak hatalı kalır.",
        "explanation_tr": "İki eşdeğer cümle 'but' ile bağlanmıştır; 'because' fazladan bir gerekçe eklemeye çalıştığı için yapı bozulur."
    },
    {
        "id": "wr-build-003",
        "difficulty": "B1",
        "subtype": "question_form",
        "subtype_label_tr": "Soru Cümlesi Yapısı (Yardımcı Fiil İnversiyonu)",
        "context": "This item tests whether you can form a standard academic inquiry question.",
        "tokens": ["why", "do", "some", "students", "prefer", "recorded", "lectures", "for", "reviewing", "difficult", "concepts", "because"],
        "answer_tokens": ["why", "do", "some", "students", "prefer", "recorded", "lectures", "for", "reviewing", "difficult", "concepts"],
        "decoys": ["because"],
        "skill_group": "build_sentence_structure",
        "answer_sentence": "Why do some students prefer recorded lectures for reviewing difficult concepts?",
        "model_answer_tr": "Soru cümlesinde soru kelimesi (Why) + yardımcı fiil (do) + özne (some students) + ana fiil (prefer) sırası izlenir; “because” decoydur.",
        "explanation_tr": "Question word + auxiliary + subject + main verb + object + prepositional phrase kuralı uygulanır."
    },
    {
        "id": "wr-build-004",
        "difficulty": "B2",
        "subtype": "contrast_clause",
        "subtype_label_tr": "Zıtlık Yan Cümlesi ('Although' ile Concession)",
        "context": "This item tests contrast subordination with “although”.",
        "tokens": ["although", "online", "resources", "are", "convenient", "students", "still", "need", "direct", "feedback", "from", "instructors", "therefore"],
        "answer_tokens": ["although", "online", "resources", "are", "convenient", "students", "still", "need", "direct", "feedback", "from", "instructors"],
        "decoys": ["therefore"],
        "skill_group": "build_sentence_structure",
        "answer_sentence": "Although online resources are convenient, students still need direct feedback from instructors.",
        "model_answer_tr": "“Although” yan cümle oluşturur; ana cümle “students still need...” şeklinde devam eder. “therefore” aynı anda kullanılamaz.",
        "explanation_tr": "Zıtlık bağlacı olan 'although' yan cümlede yer aldığında ana cümleye 'therefore' veya 'but' eklenmez."
    },
    {
        "id": "wr-build-005",
        "difficulty": "B2",
        "subtype": "adverbial_modifier",
        "subtype_label_tr": "Zarfsal Tamlayıcı & Sebep-Sonuç Düzeni",
        "context": "This item tests verb phrase complementation and adverbial placement.",
        "tokens": ["clear", "deadlines", "help", "students", "manage", "large", "assignments", "more", "effectively", "despite"],
        "answer_tokens": ["clear", "deadlines", "help", "students", "manage", "large", "assignments", "more", "effectively"],
        "decoys": ["despite"],
        "skill_group": "build_sentence_structure",
        "answer_sentence": "Clear deadlines help students manage large assignments more effectively.",
        "model_answer_tr": "“help + object + bare infinitive (manage) + adverbial phrase (more effectively)” iskeleti kurulur; “despite” çeldiricidir.",
        "explanation_tr": "Subject (Clear deadlines) + Verb (help) + Object (students) + Object complement (manage large assignments) + Adverb (more effectively)."
    },
    {
        "id": "wr-build-006",
        "difficulty": "B1",
        "subtype": "noun_clause",
        "subtype_label_tr": "İsim Cümleciği (Noun Clause with 'That')",
        "context": "This item tests a noun clause serving as direct object of a reporting verb.",
        "tokens": ["the", "professor", "explained", "that", "peer", "review", "can", "improve", "the", "quality", "of", "research", "however"],
        "answer_tokens": ["the", "professor", "explained", "that", "peer", "review", "can", "improve", "the", "quality", "of", "research"],
        "decoys": ["however"],
        "skill_group": "build_sentence_structure",
        "answer_sentence": "The professor explained that peer review can improve the quality of research.",
        "model_answer_tr": "“explained that + clause (tam cümle)” aktarma yapısıdır; “however” bu cümle yapısına uymayan çeldiricidir.",
        "explanation_tr": "Reported speech yapısı: Subject + Verb + that-clause (peer review can improve the quality of research)."
    },
    {
        "id": "wr-build-007",
        "difficulty": "B2",
        "subtype": "conditional_clause",
        "subtype_label_tr": "Şart Cümlesi (Conditionals - If Clause Type 1)",
        "context": "This item tests a conditional sentence expressing academic prerequisite.",
        "tokens": ["if", "universities", "provide", "adequate", "funding", "researchers", "can", "complete", "long-term", "environmental", "studies", "unless"],
        "answer_tokens": ["if", "universities", "provide", "adequate", "funding", "researchers", "can", "complete", "long-term", "environmental", "studies"],
        "decoys": ["unless"],
        "skill_group": "build_sentence_structure",
        "answer_sentence": "If universities provide adequate funding, researchers can complete long-term environmental studies.",
        "model_answer_tr": "“If + present simple, modal + bare infinitive” şart yapısı; “unless” olumsuz şart bildirdiği ve iki bağlaç bir arada olmayacağı için decoydur.",
        "explanation_tr": "Koşul yan cümleciği (If universities provide adequate funding) + Ana cümle (researchers can complete long-term environmental studies)."
    },
    {
        "id": "wr-build-008",
        "difficulty": "B2",
        "subtype": "passive_voice",
        "subtype_label_tr": "Edilgen Çatı (Academic Passive Voice)",
        "context": "This item tests academic passive voice with adverbial modification.",
        "tokens": ["the", "historical", "manuscripts", "were", "carefully", "preserved", "in", "the", "campus", "archive", "actively"],
        "answer_tokens": ["the", "historical", "manuscripts", "were", "carefully", "preserved", "in", "the", "campus", "archive"],
        "decoys": ["actively"],
        "skill_group": "build_sentence_structure",
        "answer_sentence": "The historical manuscripts were carefully preserved in the campus archive.",
        "model_answer_tr": "Özne + were + zarf (carefully) + V3 (preserved) + yer tamlayıcısı. “actively” zıt anlamlı gereksiz zarftır.",
        "explanation_tr": "Passive yapıda zarf 'be' ile 'past participle' arasına gelir: were carefully preserved."
    },
    {
        "id": "wr-build-009",
        "difficulty": "B2",
        "subtype": "relative_clause",
        "subtype_label_tr": "İlgi Cümleciği (Defining Relative Clause)",
        "context": "This item tests subject-modifying relative clause structure.",
        "tokens": ["students", "who", "attend", "weekly", "review", "sessions", "usually", "achieve", "higher", "exam", "scores", "they"],
        "answer_tokens": ["students", "who", "attend", "weekly", "review", "sessions", "usually", "achieve", "higher", "exam", "scores"],
        "decoys": ["they"],
        "skill_group": "build_sentence_structure",
        "answer_sentence": "Students who attend weekly review sessions usually achieve higher exam scores.",
        "model_answer_tr": "“who attend weekly review sessions” özneyi niteler; ana fiil “achieve”dir. “they” zamiri özne tekrarı yapacağı için fazlalıktır (decoy).",
        "explanation_tr": "Relative clause özneyi tanımladığında ayrıca zamir (they) eklenmez: Students who... achieve... doğrudur."
    },
    {
        "id": "wr-build-010",
        "difficulty": "B2",
        "subtype": "correlative_conjunction",
        "subtype_label_tr": "İkili Bağlaç Yapısı ('Not Only... But Also')",
        "context": "This item tests parallel correlative conjunction structure in academic writing.",
        "tokens": ["regular", "exercise", "not", "only", "improves", "physical", "health", "but", "also", "reduces", "academic", "stress", "either"],
        "answer_tokens": ["regular", "exercise", "not", "only", "improves", "physical", "health", "but", "also", "reduces", "academic", "stress"],
        "decoys": ["either"],
        "skill_group": "build_sentence_structure",
        "answer_sentence": "Regular exercise not only improves physical health but also reduces academic stress.",
        "model_answer_tr": "“not only [verb phrase] but also [verb phrase]” paralel yapısı kurulur; “either” gereksiz ve uyumsuz bir bağlaçtır.",
        "explanation_tr": "Correlative pair: not only + improves physical health + but also + reduces academic stress."
    },
    {
        "id": "wr-build-011",
        "difficulty": "B1",
        "subtype": "comparative_structure",
        "subtype_label_tr": "Karşılaştırma Cümlesi ('More... Than')",
        "context": "This item tests academic comparative sentence syntax.",
        "tokens": ["interactive", "seminars", "require", "more", "active", "student", "participation", "than", "traditional", "lectures", "rather"],
        "answer_tokens": ["interactive", "seminars", "require", "more", "active", "student", "participation", "than", "traditional", "lectures"],
        "decoys": ["rather"],
        "skill_group": "build_sentence_structure",
        "answer_sentence": "Interactive seminars require more active student participation than traditional lectures.",
        "model_answer_tr": "“more + noun phrase + than + comparative object” karşılaştırma kalıbı; “rather” çeldiricidir.",
        "explanation_tr": "Comparative syntax: Subject (Interactive seminars) + Verb (require) + more active student participation + than + traditional lectures."
    },
    {
        "id": "wr-build-012",
        "difficulty": "B2",
        "subtype": "infinitive_purpose",
        "subtype_label_tr": "Amaç Bildiren Mastar Yapısı (Infinitive of Purpose)",
        "context": "This item tests expressing institutional purpose with an infinitive clause.",
        "tokens": ["the", "laboratory", "staff", "installed", "modern", "ventilation", "systems", "to", "ensure", "student", "safety", "for"],
        "answer_tokens": ["the", "laboratory", "staff", "installed", "modern", "ventilation", "systems", "to", "ensure", "student", "safety"],
        "decoys": ["for"],
        "skill_group": "build_sentence_structure",
        "answer_sentence": "The laboratory staff installed modern ventilation systems to ensure student safety.",
        "model_answer_tr": "Amaç belirtmek için “to + V1 (to ensure)” kullanılır; fiille birlikte “for” edatı kullanılmaz (for ensure yanlıştır).",
        "explanation_tr": "Infinitive of purpose: installed modern ventilation systems + to ensure student safety."
    }
]

# Comprehensive Email Items (8 scenarios covering all TOEFL 2026 prompt archetypes)
email_items = [
    {
        "id": "wr-email-001",
        "difficulty": "B2",
        "title": "Akademik Danışman Randevusu Talebi (Bölüm Değişikliği)",
        "subtype": "advising_request",
        "subtype_label_tr": "Akademik Danışmanlık & Bölüm Değişikliği",
        "scenario": "You need to change your major, but the online system requires your academic advisor's formal sign-off. Write an email to your academic advisor requesting an appointment.",
        "bullets": [
            "Explain clearly why you want to meet",
            "Mention the formal deadline for major change submissions",
            "Propose two specific appointment time options"
        ],
        "skill_group": "email_request_information_solution",
        "model_answer": "Dear Professor Kim,\n\nI am writing because I would like to schedule a short advising appointment with you to discuss changing my major. The university registrar requires an advisor signature before my application can be processed, and I want to ensure that all prerequisites are accounted for.\n\nThe deadline for submitting major change forms is next Friday, November 14. Would you be available for a 15-minute meeting this Wednesday at 2:00 p.m. or Thursday at 10:30 a.m.? If neither time suits your schedule, I would be happy to meet at any alternative time you prefer.\n\nThank you very much for your time and guidance.\n\nSincerely,\nAlex Morgan",
        "why_it_works_tr": [
            "Giriş paragrafında yazma amacı ve bağlam doğrudan belirtilmiş.",
            "3 görev maddesinin tümü (neden, son teslim tarihi, spesifik randevu saatleri) eksiksiz karşılanmış.",
            "Resmi ve saygılı akademik ton (Dear Professor..., Sincerely) korunmuş.",
            "Esneklik sunarak çözüm odaklı bir kapanış yapılmış."
        ]
    },
    {
        "id": "wr-email-002",
        "difficulty": "B1",
        "title": "Ödev Teslim Süresi Uzatma Talebi (Sağlık Mazereti)",
        "subtype": "deadline_extension",
        "subtype_label_tr": "Ödev Süresi Uzatma Talebi",
        "scenario": "You cannot submit your research paper on time because you were sick with influenza for several days. Write an email to your professor requesting a short extension.",
        "bullets": [
            "Briefly explain the medical reason without oversharing",
            "Propose a realistic, specific new submission date",
            "Reassure the professor about your current draft progress"
        ],
        "skill_group": "email_request_information_solution",
        "model_answer": "Dear Professor Lee,\n\nI am writing to respectfully ask whether it might be possible to receive a brief extension on the literature review assignment due this Friday. Unfortunately, I have been ill with influenza for the past four days and could not work effectively on my final draft.\n\nWould it be acceptable for me to submit the complete paper by Monday evening at 6:00 p.m. instead? I have already gathered all required sources and drafted the main sections, so I will use the weekend to revise and polish the argument.\n\nThank you for your understanding and consideration.\n\nBest regards,\nJordan Taylor",
        "why_it_works_tr": [
            "Mazeret kısa ve profesyonel tutulmuş; gereksiz ayrıntıya girilmemiş.",
            "Net ve gerçekçi yeni bir teslim tarihi ve saati önerilmiş.",
            "Mevcut ilerleme belirtilerek öğrencinin sorumluluk sahibi olduğu gösterilmiş.",
            "Kibar ve ölçülü bir rica dili (respectfully ask, would it be acceptable) kullanılmış."
        ]
    },
    {
        "id": "wr-email-003",
        "difficulty": "B2",
        "title": "Kampüs Etkinliği Gönüllülük ve Yetkinlik Bildirimi",
        "subtype": "volunteering_information",
        "subtype_label_tr": "Gönüllülük & Yetkinlik Bildirimi",
        "scenario": "You volunteered to assist at the university's International Student Orientation. The event coordinator sent a request for your availability and relevant skills. Write an email to the coordinator.",
        "bullets": [
            "Confirm your commitment to volunteer at the orientation",
            "State your exact available time slots across the weekend",
            "Highlight one specific skill or past campus experience that will help the team"
        ],
        "skill_group": "email_request_information_solution",
        "model_answer": "Dear Ms. Carter,\n\nThank you for reaching out regarding the International Student Orientation. I am excited to confirm that I will be volunteering to support the new incoming students this semester.\n\nRegarding my availability, I am free on Friday afternoon from 1:00 p.m. to 6:00 p.m. and all day Saturday between 9:00 a.m. and 4:00 p.m. Last year, I worked as a campus tour guide and registration assistant, so I am very comfortable greeting large groups, giving campus directions, and managing check-in tables.\n\nPlease let me know if there is an orientation briefing session I should attend beforehand.\n\nWarm regards,\nAlex Rivera",
        "why_it_works_tr": [
            "3 prompt maddesi tam olarak yanıtlanmış.",
            "Zaman aralıkları net ve somut verilmiş.",
            "Geçmiş deneyim ve yetkinlik (tur rehberliği, check-in yönetimi) göreve doğrudan bağlanmış.",
            "İşbirlikçi ve istekli ton kullanılmış."
        ]
    },
    {
        "id": "wr-email-004",
        "difficulty": "B2",
        "title": "Grup Projesi Toplantı Saati Çakışması ve Çözüm Önerisi",
        "subtype": "group_coordination",
        "subtype_label_tr": "Grup Çalışması & Çözüm Önerisi",
        "scenario": "Your project team has scheduled a group meeting during a time when you must attend a mandatory chemistry laboratory makeup session. Write an email to your group members.",
        "bullets": [
            "Explain the unavoidable schedule conflict clearly",
            "Propose a practical alternative meeting time and collaborative online workflow",
            "Set a deadline for team members to respond"
        ],
        "skill_group": "email_request_information_solution",
        "model_answer": "Hi team,\n\nI am writing to let you know that I have an unexpected schedule conflict with our group meeting planned for Thursday at 3:00 p.m., as I have to attend a mandatory lab makeup session at that exact time.\n\nTo ensure our progress stays on track, could we reschedule our meeting to Thursday evening at 7:30 p.m. on Zoom, or Friday at 11:00 a.m. in the library? In the meantime, I have uploaded my section notes to our shared folder so you can review my data early.\n\nPlease reply by Wednesday at 5:00 p.m. to confirm which option works best.\n\nThanks,\nSam",
        "why_it_works_tr": [
            "Arkadaş grubuna uygun, yapıcı ve dostane yarı-resmi ton.",
            "Suçlayıcı veya kayıtsız olmayan, sorumluluk alan yaklaşım.",
            "İki alternatif seçenek ve ortak doküman çözümü sunulmuş.",
            "Yanıt için net saat ve gün sınırı (deadline) konulmuş."
        ]
    },
    {
        "id": "wr-email-005",
        "difficulty": "B1",
        "title": "Yurt Çalışma Odası Yazıcı Arızası Bildirimi",
        "subtype": "service_complaint",
        "subtype_label_tr": "Tesis / Hizmet Şikayeti ve Çözüm Talebi",
        "scenario": "The shared printer in your residence hall study lounge has been out of order for three days during midterm exam week. Write an email to the Residence Life Office.",
        "bullets": [
            "Describe the malfunction and how long it has persisted",
            "Explain why this issue is particularly critical for residents right now",
            "Request immediate repair or an alternative printing arrangement"
        ],
        "skill_group": "email_request_information_solution",
        "model_answer": "Dear Residence Life Office,\n\nI am writing to report that the shared network printer in the West Hall second-floor study lounge has been malfunctioning since Monday morning. It consistently displays a hardware error and fails to connect to student laptops.\n\nThis situation is critical because midterm examinations are currently underway, and many professors require physical copies of lab worksheets and response papers. Could a technician be sent to inspect the printer today? Alternatively, could temporary print credits be granted for the nearby library facility until this unit is fixed?\n\nThank you for your prompt assistance with this matter.\n\nSincerely,\nChris Evans",
        "why_it_works_tr": [
            "Sorun ve süresi net, teknik ve nesnel bir dille açıklanmış.",
            "Vize haftası bağlamı verilerek durumun aciliyeti haklılaştırılmış.",
            "İdareye iki uygulanabilir alternatif çözüm sunulmuş.",
            "Şikayet tonu agresifleşmeden profesyonel ve sonuç odaklı tutulmuş."
        ]
    },
    {
        "id": "wr-email-006",
        "difficulty": "B2",
        "title": "Zorunlu Ders Kayıt Kontenjanı Sorunu (Öğrenci İşleri)",
        "subtype": "registration_inquiry",
        "subtype_label_tr": "Ders Kaydı ve Kontenjan Talebi",
        "scenario": "You attempted to register for a required senior seminar (ECON 401), but the course reached maximum capacity within minutes. You need this course to graduate on schedule. Write an email to the Economics Department Registrar.",
        "bullets": [
            "Identify the course code and explain the capacity constraint",
            "Explain why completing this course this term is essential for your graduation timeline",
            "Inquire about a capacity override permit or opening a second section"
        ],
        "skill_group": "email_request_information_solution",
        "model_answer": "Dear Department Registrar,\n\nI am writing regarding registration for ECON 401 (Advanced Macroeconomic Analysis). When registration opened this morning, all available seats were filled immediately, preventing me from enrolling.\n\nThis course is a mandatory requirement for my degree, and since this is my final semester, not taking it will delay my planned graduation in May. My academic advisor, Dr. Patterson, advised me to reach out directly to inquire about a course capacity override or whether an additional section might be added.\n\nCould you please advise me on how to request permission to enroll? I would be deeply grateful for your assistance.\n\nSincerely,\nTaylor Reed\nStudent ID: #984210",
        "why_it_works_tr": [
            "Ders kodu, isim ve öğrenci kimlik bilgisi açıkça belirtilmiş.",
            "Mezuniyet zorunluluğu somut bir gerekçe olarak sunulmuş.",
            "Danışman yönlendirmesi referans gösterilerek meşruiyet sağlanmış.",
            "İdari işlemler için uygun resmi üslup kullanılmış."
        ]
    },
    {
        "id": "wr-email-007",
        "difficulty": "B2",
        "title": "Kaçırılan Randevu Özrü ve Yeni Görüşme Talebi",
        "subtype": "apology_reschedule",
        "subtype_label_tr": "Özür ve Yeniden Planlama Talebi",
        "scenario": "You missed a scheduled research consultation with your professor due to an unexpected public transit delay. Write an email to apologize and reschedule.",
        "bullets": [
            "Offer a sincere and immediate apology for missing the appointment",
            "Briefly explain the unavoidable delay without lengthy excuses",
            "Propose new options for meeting or offer to send your questions electronically"
        ],
        "skill_group": "email_request_information_solution",
        "model_answer": "Dear Professor Higgins,\n\nPlease accept my sincere apologies for missing our scheduled appointment this morning at 11:00 a.m. I was on my way to campus when the central transit line experienced a major signal failure, leaving passengers stranded between stations with no communication access.\n\nI understand that your office hours are in high demand, and I truly regret wasting your valuable time. Would it be possible to reschedule for tomorrow afternoon during your open consultation hours, or would you prefer that I send my draft questions by email first?\n\nThank you for your patience and gracious understanding.\n\nRespectfully,\nMorgan Bailey",
        "why_it_works_tr": [
            "İlk cümlede doğrudan ve samimi bir özür yer alıyor.",
            "Durum kısa ve net açıklanmış, mazeretin arkasına saklanılmamış.",
            "Profesörün zamanına saygı duyulduğu ifade edilmiş.",
            "Yüz yüze ve e-posta üzerinden iki telafi seçeneği önerilmiş."
        ]
    },
    {
        "id": "wr-email-008",
        "difficulty": "B2",
        "title": "Laboratuvar Araştırma Asistanlığı Başvurusu",
        "subtype": "assistantship_inquiry",
        "subtype_label_tr": "Araştırma Asistanlığı Başvurusu",
        "scenario": "A biology professor announced an opening for an undergraduate research assistant in their microbiology lab. Write an email expressing your interest and qualifications.",
        "bullets": [
            "State your interest in the specific laboratory research project",
            "Summarize your relevant coursework and lab techniques learned",
            "Inquire about interview opportunities or submitting your CV and transcript"
        ],
        "skill_group": "email_request_information_solution",
        "model_answer": "Dear Dr. Gutierrez,\n\nI am writing to express my strong interest in the undergraduate research assistant position in your microbiology laboratory, which was announced in this week's science department bulletin.\n\nI am a third-year biology major with a strong academic background in cellular biology and organic chemistry. In my laboratory coursework last semester, I gained hands-on experience with sterile culturing, PCR amplification, and spectrophotometry, achieving an 'A' grade in practical lab exams. I am eager to apply these technical skills to your team's current study on water purification.\n\nI have attached my resume and academic transcript for your review. Would you be available for a brief conversation this week to discuss how I might contribute to your lab?\n\nThank you for considering my application.\n\nSincerely,\nDaniel Kim",
        "why_it_works_tr": [
            "İlan kaynağı ve pozisyon adı profesyonelce belirtilmiş.",
            "Spesifik teknik beceriler (PCR, steril kültür, spektrofotometri) somut kanıtlarla listelenmiş.",
            "Özgeçmiş ve transkript ekleri referans verilmiş.",
            "Akademik ve saygılı bir mülakat talebi ile sonlandırılmış."
        ]
    }
]

# Comprehensive Academic Discussion Items (8 scenarios covering all ETS prompt archetypes)
academic_discussion_items = [
    {
        "id": "wr-discussion-001",
        "difficulty": "B2",
        "title": "Ders Kayıtlarının Erişime Açılması (Agree & Extend)",
        "subtype": "agree_with_peer_extend",
        "subtype_label_tr": "Öğrenciye Katılma & Yeni Kanıt Ekleme",
        "question": "Should universities record all lectures and make them permanently available to enrolled students after class? Explain your view with specific reasons.",
        "studentA": {
            "name": "Mina",
            "text": "Yes. Recordings allow students to review complex explanations at their own pace and support those who miss lectures due to illness, family emergencies, or commute issues."
        },
        "studentB": {
            "name": "Jonah",
            "text": "I disagree. If recordings are readily accessible online, in-person lecture attendance will decline, resulting in lifeless classrooms and fewer spontaneous discussions."
        },
        "skill_group": "discussion_position_response_support",
        "model_answer": "I agree with Mina that recorded lectures should be accessible to all students, as they serve as an essential academic reinforcement tool. In rigorous subjects such as biochemistry or economics, understanding complex mechanisms often requires hearing explanations more than once. For instance, when I prepared for organic chemistry exams, replaying specific lecture segments helped me clarify reaction steps that I could not fully transcribe during class. While Jonah raises a valid point regarding attendance, universities can resolve this by assigning a portion of the course grade to interactive in-class activities and group discussions. This policy preserves vibrant classroom participation while still ensuring equitable access to learning resources for everyone.",
        "why_it_works_tr": [
            "İlk cümlede Mina'nın görüşüne doğrudan katılım ve net ana pozisyon var.",
            "Organik kimya dersinden somut bir kişisel/akademik örnekle argüman geliştirilmiş.",
            "Jonah'ın devamsızlık endişesine (sınıf içi katılım puanı ile) yapıcı bir çözüm getirilmiş.",
            "4.5+ band için gerekli geçiş kelimeleri (For instance, While Jonah raises..., This policy preserves...) kullanılmış."
        ]
    },
    {
        "id": "wr-discussion-002",
        "difficulty": "B2",
        "title": "Zorunlu Üniversite Stajları (Disagree & Defend)",
        "subtype": "disagree_with_peer",
        "subtype_label_tr": "Öğrenciye Karşı Çıkma & Diğerini Destekleme",
        "question": "Should universities require every undergraduate student to complete an internship before graduation? Explain your opinion with supporting evidence.",
        "studentA": {
            "name": "Rafael",
            "text": "Yes. Internships provide practical workplace experience, develop essential soft skills, and give graduates a clear competitive edge in the modern job market."
        },
        "studentB": {
            "name": "Nora",
            "text": "I believe internships should remain optional because mandatory requirements unfairly burden students who rely on paid jobs or who cannot afford unpaid positions."
        },
        "skill_group": "discussion_position_response_support",
        "model_answer": "While Rafael is correct that practical workplace experience is valuable, I agree more strongly with Nora that internships should not be an inflexible graduation requirement. Mandatory internships can create severe financial inequities, particularly for students who support themselves through full-time employment and cannot afford to take unpaid or low-stipend placements. For example, a classmate of mine who worked forty hours weekly at a pharmacy would have had to drop out if forced to take an unpaid daytime internship. Instead of imposing a rigid mandate, universities could offer flexible experiential pathways, such as campus research grants or industry-sponsored capstone projects. This approach delivers practical skills without penalizing economically vulnerable students.",
        "why_it_works_tr": [
            "İki öğrencinin argümanını da tartarak Nora'nın adalet temelli argümanını seçiyor.",
            "Çalışmak zorunda olan öğrenci örneğiyle argüman somutlaştırılmış.",
            "Sadece eleştirmekle kalmayıp alternatif uygulanabilir çözümler (bitirme projeleri, araştırma bursları) sunuyor.",
            "Akademik sözcük dağarcığı (financial inequities, flexible experiential pathways, economically vulnerable) güçlü."
        ]
    },
    {
        "id": "wr-discussion-003",
        "difficulty": "B2",
        "title": "Kampüs Bütçesi: Sessiz Çalışma vs. Sosyal Alan (Resource Allocation)",
        "subtype": "resource_allocation",
        "subtype_label_tr": "Bütçe ve Kaynak Önceliği Seçimi",
        "question": "If a university receives a substantial surplus grant, should it prioritize expanding quiet individual study spaces or modern recreational lounges? State and defend your choice.",
        "studentA": {
            "name": "Leah",
            "text": "The administration should expand quiet study rooms because deep concentration is the primary foundation for academic success, especially during exam periods."
        },
        "studentB": {
            "name": "Omar",
            "text": "Recreational and social lounges should be prioritized because student mental health and community bonding are just as essential for overall university retention."
        },
        "skill_group": "discussion_position_response_support",
        "model_answer": "I strongly agree with Leah that expanding quiet study spaces should be the university's top funding priority. While Omar rightly highlights the importance of mental wellness and peer connection, an institution's primary obligation is providing the optimal environment for academic achievement. Many undergraduates live in noisy shared apartments or crowded dormitories where uninterrupted studying is virtually impossible. For example, during final exam weeks at my university, the main library routinely runs out of quiet desks by noon, forcing students to study in distracting cafeteria corridors. Investing in soundproof study carrels with power outlets and ergonomic seating directly supports student learning and academic performance across every discipline.",
        "why_it_works_tr": [
            "İki zıt seçenek arasından açıkça Leah'ın tezini seçip gerekçelendiriyor.",
            "Yurtlardaki kalabalık ve sınav dönemindeki masa yetersizliği gibi gerçekçi bir örnek veriyor.",
            "Karşı tarafın (Omar) argümanını meşru kabul edip ana misyonla çürütüyor.",
            "Son cümlede yatırımın somut faydalarını net bir dille özetliyor."
        ]
    },
    {
        "id": "wr-discussion-004",
        "difficulty": "B2",
        "title": "Ödevlerde Yapay Zeka Araçlarının Kullanımı (Tech & Ethics)",
        "subtype": "tech_ethics",
        "subtype_label_tr": "Teknoloji, Yapay Zeka ve Akademik Etik",
        "question": "Should university students be permitted to use generative AI tools when preparing coursework, provided they formally declare how the technology was utilized? Explain your stance.",
        "studentA": {
            "name": "Hana",
            "text": "Yes. Generative AI is an indispensable workplace technology. Universities should teach students how to prompt, verify, and cite AI tools responsibly rather than banning them."
        },
        "studentB": {
            "name": "Mateo",
            "text": "I disagree. Allowing AI tools makes it impossible for professors to evaluate students' authentic analytical and writing abilities, which compromises educational integrity."
        },
        "skill_group": "discussion_position_response_support",
        "model_answer": "I share Hana's perspective that universities should permit the declared use of AI tools, as preparing students for contemporary professional realities is vital. Generative software can serve as an effective brainstorming partner when formulating research outlines or identifying counterarguments. For instance, a sociology student might use an AI model to summarize broad historical background literature, but then independently conduct qualitative interviews, analyze field data, and draft the final conclusions. To address Mateo's understandable concern regarding academic integrity, professors can require an appendix detailing the specific prompts used and accompany major written essays with brief oral presentations. This strategy fosters technological literacy while ensuring that authentic student reasoning remains rigorously evaluated.",
        "why_it_works_tr": [
            "Güncel ve tartışmalı bir konuyu dengeli akademik bir çerçeveye oturtuyor.",
            "Sosyoloji öğrencisi senaryosu ile yapay zekanın meşru kullanım sınırını (araştırma çerçevesi vs. özgün veri analizi) somutlaştırıyor.",
            "Mateo'nun kopya/özgünlük kaygısına pratik bir denetim mekanizması (prompt şeffaflık eki + sözlü sunum) öneriyor.",
            "Akıcı ve hatasız bağlaç kullanımı sergiliyor."
        ]
    },
    {
        "id": "wr-discussion-005",
        "difficulty": "B2",
        "title": "Kalıcı Uzaktan Çalışma vs. Hibrit Ofis (Workplace Policy)",
        "subtype": "workplace_policy",
        "subtype_label_tr": "Çalışma Hayatı ve Toplum Politikası",
        "question": "Should corporate employers adopt permanent remote work policies, or should they mandate in-person office attendance for part of the work week? Share your reasoning.",
        "studentA": {
            "name": "Sofia",
            "text": "Full remote work should be standard. It eliminates grueling commutes, provides superior work-life balance, and allows organizations to recruit top talent globally."
        },
        "studentB": {
            "name": "Daniel",
            "text": "Mandatory in-person time is indispensable. Face-to-face contact fosters spontaneous innovation, strengthens organizational culture, and provides crucial mentorship for juniors."
        },
        "skill_group": "discussion_position_response_support",
        "model_answer": "In this debate, I find Daniel's argument more persuasive, as a structured hybrid model with mandatory in-person days offers benefits that purely virtual environments cannot duplicate. Although Sofia rightly notes that remote arrangements reduce commuting stress, complete isolation frequently impedes collaborative creativity and professional development. For example, during my summer software internship, brief impromptu discussions beside a colleague's desk resolved architectural roadblocks in minutes that would have required multiple scheduled video conferences. Moreover, entry-level professionals absorb tacit industry norms far more effectively through direct observation than through isolated screen interactions. Therefore, requiring two or three collaborative office days per week achieves the optimal balance between employee autonomy and collective synergy.",
        "why_it_works_tr": [
            "Daniel'in görüşünü destekleyip hibrit çalışma modelini sentezliyor.",
            "Yazılım stajından anlık problem çözme ve gayriresmi iletişim örneği veriyor.",
            "Yeni mezunların ve stajyerlerin mesleki gelişim (tacit knowledge) ihtiyacını vurguluyor.",
            "Sonuç cümlesinde dengeli bir politika önerisi (haftada 2-3 gün ofis) getiriyor."
        ]
    },
    {
        "id": "wr-discussion-006",
        "difficulty": "B2",
        "title": "Tek Kullanımlık Plastiklerin Yasaklanması (Environmental Policy)",
        "subtype": "environmental_policy",
        "subtype_label_tr": "Çevre Düzenlemesi ve Ekonomik Maliyet",
        "question": "Should municipal governments enact strict bans on all single-use plastics, or should they rely on voluntary consumer recycling initiatives? Discuss your position.",
        "studentA": {
            "name": "Carlos",
            "text": "Strict bans are essential. Decades of voluntary recycling programs have failed to stem ocean plastic pollution, and only regulatory prohibition drives real change."
        },
        "studentB": {
            "name": "Grace",
            "text": "Outright bans disproportionately harm small businesses by suddenly inflating packaging costs, which gets passed on to low-income consumers during inflation."
        },
        "skill_group": "discussion_position_response_support",
        "model_answer": "I align with Carlos in supporting municipal bans on single-use plastics, as voluntary campaigns have proven insufficient to halt global ecological degradation. Millions of tons of non-biodegradable waste continue to contaminate waterways and food chains because recycling infrastructure cannot cope with current output volumes. For instance, when my home city prohibited disposable plastic bags in grocery stores, reusable bag adoption surged above ninety percent within six months, dramatically reducing municipal litter without hurting retail revenue. To alleviate Grace's concern regarding small business costs, local authorities could provide temporary subsidies or bulk purchasing programs for compostable alternatives during a one-year transition period. Strong legislation combined with transition support is the only effective solution.",
        "why_it_works_tr": [
            "Carlos'un yasal düzenleme tezini çevre kirliliği verileriyle savunuyor.",
            "Şehirdeki poşet yasağı örneğiyle 6 aylık somut davranış değişikliğini gösteriyor.",
            "Grace'in küçük işletme maliyeti itirazına sübvansiyonlu geçiş dönemi çözümü sunuyor.",
            "Güçlü bir akademik ton ve net kapanış cümlesi oluşturuyor."
        ]
    },
    {
        "id": "wr-discussion-007",
        "difficulty": "B2",
        "title": "Geleneksel Sınavlar vs. Sürekli Proje Değerlendirmesi (Assessment Policy)",
        "subtype": "assessment_policy",
        "subtype_label_tr": "Sınavlar vs. Proje Değerlendirmesi",
        "question": "Should university courses base student grades primarily on comprehensive final examinations or on multi-stage cumulative group and individual projects? Explain your view.",
        "studentA": {
            "name": "Tanya",
            "text": "Grades should be based on projects. Real careers require sustained research, iterative revision, and collaboration, not the memorization of facts under timed exam pressure."
        },
        "studentB": {
            "name": "Liam",
            "text": "Standardized final exams remain necessary because they guarantee individual accountability and prevent free-riding problems that often plague group project assessments."
        },
        "skill_group": "discussion_position_response_support",
        "model_answer": "I agree with Tanya that cumulative project-based evaluation is far more representative of authentic learning than high-stakes final exams. Memorizing large quantities of theoretical facts for a single two-hour test encourages superficial cramming rather than durable conceptual understanding. For example, in my environmental policy course, conducting a semester-long audit of campus energy consumption taught me data modeling and report writing skills that I still utilize today. To resolve Liam's valid point regarding individual accountability, professors can implement individual milestone defenses, anonymous peer evaluations, and short oral quizzes throughout the project lifecycle. This framework ensures that every team member contributes equitably while fostering practical, professional competencies.",
        "why_it_works_tr": [
            "Tanya'nın proje bazlı değerlendirme savına katılarak ezberci sınav modelini eleştiriyor.",
            "Çevre politikası dersindeki enerji denetimi projesiyle somut bir öğrenme çıktısı örneği veriyor.",
            "Liam'ın 'free-riding' (beleşçilik) endişesini gidermek için 3 kontrol adımı öneriyor.",
            "Zengin bağlaç ve kelime çeşitliliği içeriyor."
        ]
    },
    {
        "id": "wr-discussion-008",
        "difficulty": "B2",
        "title": "Şehir Merkezlerinin Araç Trafiğine Kapatılması (Urban Policy)",
        "subtype": "urban_policy",
        "subtype_label_tr": "Kentsel Yaşam ve Toplum Sağlığı",
        "question": "Should metropolitan city centers be permanently closed to private motorized vehicles to create dedicated pedestrian and cycling zones? Defend your position.",
        "studentA": {
            "name": "Zoe",
            "text": "Yes. Pedestrianized urban centers drastically reduce greenhouse gas emissions, enhance pedestrian safety, and revitalize local storefronts through increased foot traffic."
        },
        "studentB": {
            "name": "Felix",
            "text": "Banning vehicles restricts mobility for the elderly and disabled, disrupts commercial freight deliveries, and pushes severe traffic congestion into surrounding residential suburbs."
        },
        "skill_group": "discussion_position_response_support",
        "model_answer": "I support Zoe's stance that urban centers should be converted into pedestrianized corridors, as prioritizing human-scale spaces transforms city liveability. Vehicle-dominated downtowns suffer from dangerous smog, noise pollution, and pedestrian collisions. For instance, European cities like Ljubljana and Madrid that banned central car traffic experienced significant reductions in nitrogen dioxide levels alongside increased restaurant and retail patronage. Although Felix brings up important logistical concerns, cities can address them effectively by operating electric shuttle fleets for elderly residents and permitting delivery trucks during designated early morning hours. Consequently, pedestrianization yields profound public health and economic dividends when supported by smart urban transit planning.",
        "why_it_works_tr": [
            "Zoe'nin kentsel dönüşüm tezini çevre ve yaşam kalitesi gerekçeleriyle destekliyor.",
            "Madrid ve Ljubljana gibi başarılı somut uluslararası örnekler veriyor.",
            "Felix'in engelli erişimi ve ticari teslimat endişelerine elektrikli ring araçları ve sabah saatleri izinleri çözümü sunuyor.",
            "Net, ikna edici ve akademik bir sonuca bağlıyor."
        ]
    }
]

# Update the data dictionary
data["writing"]["build_sentence"] = build_sentence_items
data["writing"]["email"] = email_items
data["writing"]["academic_discussion"] = academic_discussion_items

# Write updated item bank
with open(file_path, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated toefl2026_item_bank.json successfully with:")
print(f"- {len(build_sentence_items)} Build Sentence items")
print(f"- {len(email_items)} Email scenarios with model answers")
print(f"- {len(academic_discussion_items)} Discussion scenarios with model answers")
