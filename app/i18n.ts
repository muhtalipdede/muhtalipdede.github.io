export type Locale = "en" | "tr";

export const STACK = [
  "C#",
  "TypeScript",
  "Python",
  "Go",
  ".NET",
  "Node.js",
  "Kubernetes",
  "Docker",
  "AWS",
  "GCP",
  "Azure",
  "Kafka",
  "PostgreSQL",
  "MongoDB",
] as const;

export const ARTICLES = [
  {
    title: "Google Gemini API Structured Output",
    href: "https://medium.com/@muhtalipdede/google-gemini-api-structured-output-i%CC%87le-bir-llm-nas%C4%B1l-daha-dinamik-ve-g%C3%BCvenilir-bir-%C5%9Fekilde-c7bdc76618f1",
  },
  {
    title: "Asenkron LLM Agent Mimarisi",
    href: "https://medium.com/@muhtalipdede/asenkron-llm-agent-mimarisi-%C3%B6l%C3%A7eklenebilir-ve-esnek-yapay-zeka-asistanlar%C4%B1-37b0053351ad",
  },
  {
    title: "CQRS vs API Composition",
    href: "https://medium.com/@muhtalipdede/cqrs-ve-api-composition-mikroservislerde-hangisini-ne-zaman-kullanmal%C4%B1-0968a857e560",
  },
  {
    title: "RAG ile Güçlendirilmiş LLM",
    href: "https://medium.com/@muhtalipdede/rag-retrieval-augmented-generation-ile-g%C3%BC%C3%A7lendirilmi%C5%9F-llm-d519089fc080",
  },
] as const;

type Content = {
  skip: string;
  personalSite: string;
  taglineSoftware: string;
  taglineMath: string;
  taglineOss: string;
  nav: { work: string; openSource: string; apps: string; writing: string; contact: string };
  hello: string;
  sidebarLead: string;
  sidebarTrail: string;
  noteKicker: string;
  noteTitle: string;
  noteBody: string[];
  noteSignoff: string;
  now: string;
  currently: string;
  currentlyItems: { name: string; detail: string; href?: string }[];
  career: string;
  work: string;
  workIntro: string;
  experience: {
    role: string;
    org: string;
    period: string;
    points: string[];
  }[];
  stack: string;
  projects: string;
  openSource: string;
  openSourceIntro: string;
  openSourceItems: {
    name: string;
    href: string;
    site: string;
    blurb: string;
  }[];
  mobile: string;
  apps: string;
  appsIntro: string;
  allApps: string;
  appsItems: { name: string; blurb: string; href: string }[];
  blog: string;
  writing: string;
  writingIntro: string;
  moreMedium: string;
  background: string;
  educationRecognition: string;
  education: string;
  educationBody: string;
  recognition: string;
  recognitionBody: string;
  community: string;
  communityBody: string;
  getInTouch: string;
  contact: string;
  contactBody: string;
  quote: string;
  portraitAlt: string;
};

export const content: Record<Locale, Content> = {
  en: {
    skip: "Skip to main content",
    personalSite: "Personal site",
    taglineSoftware: "Software engineer",
    taglineMath: "mathematical engineering",
    taglineOss: "open source enthusiast",
    nav: {
      work: "Work",
      openSource: "Open Source",
      apps: "Apps",
      writing: "Writing",
      contact: "Contact",
    },
    hello: "Hello.",
    sidebarLead: "Senior Software Engineer at",
    sidebarTrail: ". Mathematical Engineer. 9+ years on backends and platforms.",
    noteKicker: "Archive",
    noteTitle: "A note to 2095",
    noteBody: [
      "Istanbul, 2026 — a letter for your hundredth birthday.",
      "By day I build travel platforms. By night I make open-source tools and small apps that find their way onto strangers’ phones. For nearly ten years I have written code almost every day, without much of a holiday. If anything from these years should still matter when you open this, let it be the following.",
      "Stay close to mathematics and science; they will light your way forever. Treat the work as a craft: make things, and leave humanity a small, honest benefit. Pass on what you learn. Chase kindness. Never stop helping anyone who needs it. Leave the door open for the next person who wants to build.",
      "When the problem changes, be formless. Be water, my friend — and keep going.",
    ],
    noteSignoff: "— Muhtalip, 2026",
    now: "Now",
    currently: "Currently",
    currentlyItems: [
      {
        name: "WingieOne",
        detail: "B2B travel platform at Wingie Enuygun Group",
        href: "https://wingieone.com/",
      },
      {
        name: "Coppergate",
        detail: "Autonomous multi-agent Survivor arena",
        href: "https://coppergate.ai",
      },
      {
        name: "kprompt",
        detail: "Open-source AI Kubernetes CLI",
        href: "https://kprompt.ai",
      },
      {
        name: "MSc thesis",
        detail: "Low-light image enhancement with diffusion models",
      },
    ],
    career: "Career",
    work: "Work",
    workIntro: "Travel, vehicle finance, IoT, and SaaS — scalable backends and platforms.",
    experience: [
      {
        role: "Senior Software Engineer",
        org: "Wingie Enuygun Group",
        period: "Present",
        points: [
          "Building WingieOne — B2B platform for travel partners and agency workflows",
          "Backend services for booking, inventory, and partner integrations on high-traffic travel systems",
        ],
      },
      {
        role: "Senior Backend Engineer",
        org: "BiletDükkanı / Roofstacks",
        period: "Travel",
        points: [
          "Built SEGGY, an AI travel assistant (ChatGPT, LangChain, Gemini)",
          "Monolith → microservices (.NET 8, Node.js), Kafka, Azure & GCP on Kubernetes",
        ],
      },
      {
        role: "Founding Engineer",
        org: "Datapad (500 Istanbul)",
        period: "SaaS",
        points: [
          "Mobile analytics product from scratch — React Native, MongoDB, Firebase",
          "Infra with Pulumi and ArgoCD",
        ],
      },
      {
        role: "Software Engineer → Senior",
        org: "Doğuş Teknoloji",
        period: "FinTech",
        points: [
          "VosVos / Zebra credit systems; legacy migrations with C# and Entity Framework",
          "Containerized microservices with Redis, RabbitMQ, and ELK observability",
        ],
      },
    ],
    stack: "Stack",
    projects: "Projects",
    openSource: "Open Source",
    openSourceIntro: "Tools for autonomous agents and safer cluster ops.",
    openSourceItems: [
      {
        name: "Coppergate",
        href: "https://github.com/coppergateai/coppergate",
        site: "https://coppergate.ai",
        blurb:
          "Agents compete in a Survivor arena. Fitness — tests, CI, critic, policy, budget — decides who ships. You set the goal, the policy, and the kill-switch.",
      },
      {
        name: "kprompt",
        href: "https://github.com/kprompt/kprompt",
        site: "https://kprompt.ai",
        blurb:
          "Natural language compiles into a reviewable plan. Nothing mutates the cluster until you approve — plan before apply, day-2 ops under one approval loop.",
      },
    ],
    mobile: "Mobile",
    apps: "Apps",
    appsIntro: "Independent iOS & Android products.",
    allApps: "All apps & privacy →",
    appsItems: [
      {
        name: "Don't Blink",
        blurb: "Tap / don't tap reaction game",
        href: "https://apps.apple.com/app/dont-blink-tap-dont-tap/id6805209467",
      },
      {
        name: "Swipe Merge Colors",
        blurb: "Color merge puzzle — no numbers",
        href: "https://apps.apple.com/app/swipe-merge-colors/id6806599894",
      },
      {
        name: "Cargo Jam",
        blurb: "Logistics truck puzzle",
        href: "https://play.google.com/store/apps/details?id=com.muhtalipdede.cargojam",
      },
      {
        name: "Walk",
        blurb: "Pedometer, streaks, and journeys",
        href: "https://play.google.com/store/apps/details?id=com.muhtalipdede.walk",
      },
    ],
    blog: "Blog",
    writing: "Writing",
    writingIntro: "Notes on agents, architecture, and LLMs.",
    moreMedium: "More on Medium →",
    background: "Background",
    educationRecognition: "Education & recognition",
    education: "Education",
    educationBody:
      "Yıldız Technical University — BSc Mathematical Engineering (Honors) · MSc in progress: low-light image enhancement with diffusion models",
    recognition: "Recognition",
    recognitionBody:
      "ISIF 2020 Gold Medal · Patent: Contactless Temperature Monitoring · TÜBİTAK 2209-A · Doğuş Innovation Awards (2018, 2019)",
    community: "Community",
    communityBody:
      "Co-founder of The Coderverse — live coding, open source, and talks for Turkish developers",
    getInTouch: "Get in touch",
    contact: "Contact",
    contactBody: "Open to conversations about platforms, agents, and shipping software.",
    quote: "Empty your mind, be formless, shapeless, like water… Be water, my friend.",
    portraitAlt: "Portrait of Muhtalip Dede",
  },
  tr: {
    skip: "Ana içeriğe geç",
    personalSite: "Kişisel site",
    taglineSoftware: "Yazılım mühendisi",
    taglineMath: "matematik mühendisliği",
    taglineOss: "açık kaynak meraklısı",
    nav: {
      work: "İş",
      openSource: "Açık Kaynak",
      apps: "Uygulamalar",
      writing: "Yazılar",
      contact: "İletişim",
    },
    hello: "Merhaba.",
    sidebarLead: "’ta Senior Software Engineer",
    sidebarTrail: ". Matematik Mühendisi. Backend ve platform sistemlerinde 9+ yıl.",
    noteKicker: "Arşiv",
    noteTitle: "2095’e not",
    noteBody: [
      "İstanbul, 2026 — yüzüncü doğum günün için bir mektup.",
      "Gündüz seyahat platformları kuruyor; gece açık kaynak araçlar ve yabancıların telefonuna ulaşan küçük uygulamalar yapıyorum. Yaklaşık on yıldır tatil demeden, neredeyse her gün kod yazıyorum. Bunu açtığında bu yıllardan geriye bir şey kalması gerekiyorsa, şunlar kalsın.",
      "Matematiğe ve bilime yakın kal; sana sonsuza kadar ışık tutacaktır. Yaptığın işi bir zanaat gibi gör: üret, ve insanlığa ufak, dürüst bir fayda bırak. Öğrendiğini aktar. İyiliğin peşinden koş. İhtiyacı olan herkese yardım etmekten asla vazgeçme. İnşa etmek isteyen bir sonraki kişi için kapıyı açık bırak.",
      "Problem değişince formsuz ol. Su ol, dostum — ve devam et.",
    ],
    noteSignoff: "— Muhtalip, 2026",
    now: "Şimdi",
    currently: "Üzerinde çalıştıklarım",
    currentlyItems: [
      {
        name: "WingieOne",
        detail: "Wingie Enuygun Group’ta B2B seyahat platformu",
        href: "https://wingieone.com/",
      },
      {
        name: "Coppergate",
        detail: "Otonom çoklu ajan Survivor arenası",
        href: "https://coppergate.ai",
      },
      {
        name: "kprompt",
        detail: "Açık kaynak AI Kubernetes CLI",
        href: "https://kprompt.ai",
      },
      {
        name: "Yüksek lisans tezi",
        detail: "Difüzyon modelleriyle düşük ışıkta görüntü iyileştirme",
      },
    ],
    career: "Kariyer",
    work: "İş deneyimi",
    workIntro: "Seyahat, taşıt finansmanı, IoT ve SaaS — ölçeklenebilir backend ve platformlar.",
    experience: [
      {
        role: "Senior Software Engineer",
        org: "Wingie Enuygun Group",
        period: "Şu an",
        points: [
          "WingieOne — seyahat partnerleri ve acente iş akışları için B2B platform",
          "Yüksek trafikli seyahat sistemlerinde booking, envanter ve partner entegrasyonları",
        ],
      },
      {
        role: "Senior Backend Engineer",
        org: "BiletDükkanı / Roofstacks",
        period: "Seyahat",
        points: [
          "SEGGY — ChatGPT, LangChain ve Gemini ile AI seyahat asistanı",
          "Monolit → mikroservisler (.NET 8, Node.js), Kafka, Azure & GCP / Kubernetes",
        ],
      },
      {
        role: "Founding Engineer",
        org: "Datapad (500 Istanbul)",
        period: "SaaS",
        points: [
          "Sıfırdan mobil analitik ürünü — React Native, MongoDB, Firebase",
          "Pulumi ve ArgoCD ile altyapı",
        ],
      },
      {
        role: "Software Engineer → Senior",
        org: "Doğuş Teknoloji",
        period: "FinTech",
        points: [
          "VosVos / Zebra kredi sistemleri; C# ve Entity Framework ile legacy migrasyon",
          "Redis, RabbitMQ ve ELK ile konteynerize mikroservisler",
        ],
      },
    ],
    stack: "Stack",
    projects: "Projeler",
    openSource: "Açık kaynak",
    openSourceIntro: "Otonom ajanlar ve daha güvenli cluster operasyonları için araçlar.",
    openSourceItems: [
      {
        name: "Coppergate",
        href: "https://github.com/coppergateai/coppergate",
        site: "https://coppergate.ai",
        blurb:
          "Ajanlar Survivor arenasında yarışır. Fitness — test, CI, critic, politika, bütçe — kimin ship edeceğine karar verir. Hedefi, politikayı ve kill-switch’i siz belirlersiniz.",
      },
      {
        name: "kprompt",
        href: "https://github.com/kprompt/kprompt",
        site: "https://kprompt.ai",
        blurb:
          "Doğal dil, incelenebilir bir plana dönüşür. Onaylamadan cluster değişmez — önce plan, sonra apply; day-2 operasyonları tek onay döngüsünde.",
      },
    ],
    mobile: "Mobil",
    apps: "Uygulamalar",
    appsIntro: "Bağımsız iOS ve Android ürünleri.",
    allApps: "Tüm uygulamalar ve gizlilik →",
    appsItems: [
      {
        name: "Don't Blink",
        blurb: "Dokun / dokunma reaksiyon oyunu",
        href: "https://apps.apple.com/app/dont-blink-tap-dont-tap/id6805209467",
      },
      {
        name: "Swipe Merge Colors",
        blurb: "Renk birleştirme bulmacası — sayı yok",
        href: "https://apps.apple.com/app/swipe-merge-colors/id6806599894",
      },
      {
        name: "Cargo Jam",
        blurb: "Lojistik kamyon bulmacası",
        href: "https://play.google.com/store/apps/details?id=com.muhtalipdede.cargojam",
      },
      {
        name: "Walk",
        blurb: "Adımsayar, seriler ve yolculuklar",
        href: "https://play.google.com/store/apps/details?id=com.muhtalipdede.walk",
      },
    ],
    blog: "Blog",
    writing: "Yazılar",
    writingIntro: "Ajanlar, mimari ve LLM’ler üzerine notlar.",
    moreMedium: "Medium’da devamı →",
    background: "Arka plan",
    educationRecognition: "Eğitim ve ödüller",
    education: "Eğitim",
    educationBody:
      "Yıldız Teknik Üniversitesi — Matematik Mühendisliği lisans (onur) · Yüksek lisans devam ediyor: difüzyon modelleriyle düşük ışıkta görüntü iyileştirme",
    recognition: "Ödüller",
    recognitionBody:
      "ISIF 2020 Altın Madalya · Patent: Temassız Sıcaklık İzleme · TÜBİTAK 2209-A · Doğuş İnovasyon Ödülleri (2018, 2019)",
    community: "Topluluk",
    communityBody:
      "The Coderverse kurucu ortaklarından — canlı kodlama, açık kaynak ve Türk geliştiriciler için konuşmalar",
    getInTouch: "İletişim",
    contact: "İletişim",
    contactBody: "Platformlar, ajanlar ve yazılım çıkarmak hakkında konuşmaya açığım.",
    quote: "Zihnini boşalt, formsuz ve şekilsiz ol, su gibi… Su ol, dostum.",
    portraitAlt: "Muhtalip Dede portresi",
  },
};
