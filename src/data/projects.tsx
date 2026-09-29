import type { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    title: "OfflineUPIMesh",
    description:
      "Offline payment infrastructure designed for reliable peer-to-peer transactions without requiring continuous internet connectivity.",
    image: "/projects/offline-upi.png",
    tags: ["C++20", "Crow", "ASIO", "SQLite", "OpenSSL"],
    github: "https://github.com/sadSanta-07/OfflineUPIMesh-main",
    status: "Completed",
  },

  {
    title: "Agent-Zero",
    description:
      "An autonomous AI execution system built around agents, memory, tools, and human-in-the-loop validation.",
    image: "/projects/agent-zero.png",
    tags: ["Next.js", "TypeScript", "Gemini", "Firebase", "AI SDK"],
    github: "https://github.com/sadSanta-07/Agent-Zero",
    live: "https://your-orbit-site.vercel.app",
    status: "Completed",
  },

  {
    title: "Orbit",
    description:
      "A focused developer project exploring modern web interfaces, interaction patterns, and product-oriented engineering.",
    image: "/projects/orbit.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    github: "https://github.com/sadSanta-07/Orbit",
    status: "Completed",
  },

  {
    title: "CursorCatalog",
    description:
      "A developer-focused project built as an engineering take-home, focused on clean interfaces and practical product functionality.",
    image: "/projects/cursor-catalog.png",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    github: "https://github.com/sadSanta-07/CursorCatalog",
    status: "Completed",
  },
];