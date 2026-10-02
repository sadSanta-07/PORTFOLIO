import type { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    title: "OfflineUPIMesh",
    year: "2026",
    subtitle: "Distributed offline payment engine",
    description:
      "A high-performance C++ payment system built for peer-to-peer transactions over unreliable networks, with deferred settlement, duplicate-packet protection, and secure transaction handling.",
    bullets: [
      "Architected a mesh-routed payment microservice with deferred ledger settlement across untrusted intermediary nodes.",
      "Built a highly concurrent ingestion pipeline using mutex-protected state and O(1) hash lookups to suppress duplicate packet storms and prevent double-spending.",
      "Implemented AES-GCM payload encryption wrapped with RSA-2048 and enforced ACID-compliant debit/credit transactions through SQLite.",
    ],
    tags: [
      "C++20",
      "Crow",
      "ASIO",
      "SQLite",
      "OpenSSL",
      "CMake",
    ],
    github:
      "https://github.com/sadSanta-07/OfflineUPIMesh-main",
  },

  {
    title: "SantaClaw",
    year: "2026",
    subtitle: "Autonomous agentic coding framework",
    description:
      "An autonomous LLM-driven software engineering system that turns intent into repository analysis, planning, execution, diff generation, and human-approved changes.",
    bullets: [
      "Engineered an autonomous coding agent with tool-augmented reasoning, structured function calling, and intent-based repository analysis.",
      "Designed an isolated testing and staging workflow where automated file modifications require explicit human approval before execution.",
      "Containerized the execution stack and shipped it to Docker Hub for zero-install deployment through a single CLI command.",
    ],
    tags: [
      "TypeScript",
      "AI SDK",
      "Docker",
      "LLMs",
    ],
    github:
      "https://github.com/sadSanta-07/Agent-Zero",
  },

  {
    title: "NoJudgement",
    year: "2026",
    subtitle: "Real-time AI speaking practice platform",
    description:
      "A real-time communication platform combining peer matchmaking, WebRTC, speech recognition, and LLM-powered feedback into a single AI-assisted speaking experience.",
    bullets: [
      "Built live peer matchmaking with WebRTC and Socket.io, including fixes for race conditions in singleton socket flows.",
      "Developed chunk-based Whisper speech-to-text pipelines with LLaMA-driven feedback for conversational AI interactions.",
      "Designed PostgreSQL schemas with Prisma ORM for reporting pipelines, streak tracking, and high-throughput data processing.",
    ],
    tags: [
      "Next.js",
      "React",
      "WebRTC",
      "Socket.io",
      "PostgreSQL",
      "Prisma",
      "Python",
      "Whisper",
      "LLaMA",
    ],
    github:
      "https://github.com/sadSanta-07/NoJudgement",
    live: "https://no-judgement.vercel.app/"
  },

  {
    title: "Agent-Zero",
    year: "2026",
    subtitle: "Autonomous multi-agent productivity system",
    description:
      "A multi-agent productivity system that turns natural-language intent into executable workflows across Gmail, Calendar, and other Google Workspace services.",
    bullets: [
      "Built specialized agents for triage, planning, memory, proxy actions, and emergency workflows.",
      "Designed a persistent Memory Matrix for resolving people, context, and recurring information across tasks.",
      "Integrated Gmail, Calendar, Docs, voice capture, and proactive inbox scanning into a unified execution pipeline.",
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
    github:
      "https://github.com/sadSanta-07/Agent-Zero",
    live: "https://agentzero-18082.web.app/",
  },
];