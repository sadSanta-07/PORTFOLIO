type AchievementItem = {
  title: string;
  detail: string;
  badge?: string;
};

type AchievementSection = {
  category: string;
  items: AchievementItem[];
};

export const projectData = [
  {
    title: "Agent-Zero",
    tag: "live",
    description:
      "Agent Zero is an autonomous execution system designed to solve one of the biggest flaws in modern productivity software.",
    stacks: ["Typescript", "Firebase", "Node.js", "Express", "Gemini"],
    github: "https://github.com/sadSanta-07/Agent-Zero",
  },
  {
    title: "SANTACLAW ",
    // tag: "live",
    description:
      "A Bun-based autonomous coding agent leveraging codebase-aware context retrieval, agentic planning, and LLM-driven code generation with human-in-the-loop review.",
    stacks: ["Bun", "Clack", "Chalk", "AI SDK", "TypeScript", "Telegraf"],
    github: "https://github.com/sadSanta-07/SANTACLAW",
    // live: "https://noxly-coral.vercel.app",
  },
  {
    title: "Decoder-Only Transformer",
    tag: "",
    description:
      "A decoder-only Transformer from scratch using PyTorch, implementing self-attention, transformer blocks, and autoregressive text generation without high-level NLP libraries.",
    stacks: ["PYTORCH", "PYTHON"],
    github: "https://github.com/sadSanta-07/decoder-transformer-from-scratch",
  },

  {
    title: "UPI Offline Mesh",
    tag: "",
    description:
      "a backend system that processes offline UPI payments for two people are in a basement with zero internet",
    stacks: ["Crow", "CPP" , "OpenSSL"],
    github: "https://github.com/sadSanta-07/OfflineUPIMesh-main",
  },
];

export const skills = {
  Languages: ["TypeScript", "JavaScript", "Python", "C++", "PHP", "SQL"],

  "AI/ML": [
    "PyTorch",
    "Gemini Pro",
    "Groq / Whisper",
    "LLaMA",
    "CNNs",
    "fast.ai",
  ],

  Backend: [
    "Node.js",
    "Express",
    "Next.js",
    "PostgreSQL",
    "MongoDB",
    "Prisma ORM",
    "Socket.io",
    "WebRTC",
    "Redis (learning)",
  ],

  Mobile: [
    "React Native",
    "Expo",
    "Animated API",
    "Custom Navigation",
  ],

  Infrastructure: [
    "Git & GitHub",
    "Vercel",
    "Cloudinary",
    "Supabase",
    "Docker",
    "REST APIs",
  ],
};

export const achievementSections: AchievementSection[] = [
  {
    category: "Hackathons",

    items: [
      {
        title: "Konverge Hackathon",
        detail: "Top 20 finish out of all participating teams.",
        badge: "TOP 20",
      },
    ],
  },

  {
    category: "Internships",

    items: [
      {
        title: "IFFCO — Software Developer Intern",
        detail: "Summer 2026 · Enterprise-scale tech development at one of India's largest cooperatives.",
        badge: "CURRENT",
      },

      {
        title: "Technocrypt Pvt. Ltd. — Graphics Design Intern",
        detail: "Sep–Dec 2025 · Delivered marketing creatives, pitch decks, and UI mockups.",
        badge: "COMPLETED",
      },
    ],
  },

  {
    category: "Education",

    items: [
      {
        title: "KIIT University — B.Tech CS (AI & ML)",
        detail: "3rd year · Specialising in Artificial Intelligence & Machine Learning.",
      },
    ],
  },
];
