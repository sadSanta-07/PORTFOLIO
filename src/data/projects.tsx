import type { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    title: "OfflineUPIMesh",
    description:
      "Offline payment infrastructure designed for reliable peer-to-peer transactions without requiring continuous internet connectivity.",
    tags: ["C++20", "Crow", "ASIO", "SQLite", "OpenSSL"],
    github: "https://github.com/sadSanta-07/OfflineUPIMesh-main",
  },

  {
    title: "Agent-Zero",
    year: "2026",
    subtitle: "Autonomous multi-agent productivity system",
    description:
      "Most productivity software stops at reminders. Agent-Zero turns natural-language intent into executable workflows using specialized agents, persistent memory, and Google Workspace integrations.",
    bullets: [
      "Multi-agent execution across triage, calibration, memory, proxy actions, and emergency workflows.",
      "Persistent Memory Matrix for resolving people, context, and recurring information.",
      "Gmail, Calendar, and Docs execution with voice capture and proactive inbox scanning.",
    ],
    tags: [
      "React",
      "TypeScript",
      "Gemini",
      "Firebase",
      "Firestore",
      "Node.js",
      "Express",
    ],
    github: "https://github.com/sadSanta-07/Agent-Zero",
    live: "https://agentzero-18082.web.app/",
  },

  {
    title: "Orbit",
    description:
      "A focused developer project exploring modern web interfaces, interaction patterns, and product-oriented engineering.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    github: "https://github.com/sadSanta-07/Orbit",
  },
];