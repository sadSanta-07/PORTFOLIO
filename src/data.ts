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
    title: "SANTACLAW ",
    // tag: "live",
    description:
      "A Bun-based autonomous coding agent leveraging codebase-aware context retrieval, agentic planning, and LLM-driven code generation with human-in-the-loop review.",
    stacks: ["Bun", "Clack", "Chalk", "AI SDK", "TypeScript" , "Telegraf"],
    github: "https://github.com/sadSanta-07/SANTACLAW",
    // live: "https://noxly-coral.vercel.app",
  },

  {
    title: "NOJUDGEMENT",
    tag: "",
    description:
      "Real-time English speaking practice platform with WebRTC peer matching, chunk-based speech-to-text via Whisper, and LLaMA-powered post-call AI feedback.",
    stacks: ["NEXT.JS", "WEBRTC", "SOCKET.IO", "GROQ/WHISPER", "LLAMA"],
    github: "https://github.com/sadSanta-07/NoJudgement",
  },

  {
    title: "ORBIT",
    tag: "",
    description:
      "Real-time collaborative platform with live discussion rooms, WebSocket messaging, modular REST API, and Cloudinary media pipelines.",
    stacks: ["NODE.JS", "SOCKET.IO", "MONGODB", "REACT", "SUPABASE"],
    github: "https://github.com/sadSanta-07/Orbit",
  },

  {
    title: "MNIST CLASSIFIER",
    tag: "",
    description:
      "Handwritten digit classifier built from scratch with PyTorch while studying neural networks, backpropagation, and CNN fundamentals.",
    stacks: ["PYTORCH", "PYTHON", "CNN"],
    github: "https://github.com/sadSanta-07/mnist-digit-classifier",
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
