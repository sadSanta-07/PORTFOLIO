
import type { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    title: "MYNA",
    year: "2026",
    subtitle: "Share a terminal, not your screen.",
    description:
      "Ever wanted to debug something with a teammate without a whole screen-sharing setup? MYNA lets you share a live terminal through a link, with explicit access controls and optional sandboxed sessions.",
    bullets: [
      "Streams terminal input and output peer-to-peer over WebRTC, with a signaling service for session setup.",
      "Includes host approval, view-only access, freeze controls, audit logs, and safeguards for risky commands.",
      "Supports Docker sandboxing and Linux bubblewrap isolation for sessions that need an extra layer of protection.",
    ],
    tags: [
      "TypeScript",
      "Node.js",
      "WebRTC",
      "Cloudflare Workers",
      "Docker",
      "CLI",
    ],
    github: "https://github.com/sadSanta-07/myna",
    live: "https://myna-alpha.vercel.app/",
    logo: "/projects/myna.svg",
  },
  {
    title: "SantaClaw",
    year: "2026",
    subtitle: "An AI coding agent that asks before it acts.",
    description:
      "SantaClaw helps you understand a codebase, plan a change, and work through implementation from the terminal. The important bit: proposed edits are staged for review, so you stay in control of what actually changes.",
    bullets: [
      "Combines repository analysis, planning, tool calls, and multi-step coding workflows.",
      "Stages generated changes as reviewable diffs instead of silently applying every modification.",
      "Offers terminal-native workflows and optional Telegram access, with Docker-based deployment.",
    ],
    tags: [
      "TypeScript",
      "Bun",
      "AI SDK",
      "OpenRouter",
      "Firecrawl",
      "Docker",
    ],
    live: "https://santaclaw.vercel.app/",
    github: "https://github.com/sadSanta-07/SANTACLAW",
    logo: "/projects/santaclaw.svg",
  },
  {
    title: "OfflineUPIMesh",
    year: "2026",
    subtitle: "Payments that can travel without internet.",
    description:
      "What happens when a payment needs to move through devices that aren't online? This project explores an offline payment flow where encrypted transactions can pass between devices and settle when connectivity returns.",
    bullets: [
      "Uses AES-256-GCM for transaction payloads and RSA-2048 with OAEP to wrap encryption keys.",
      "Uses thread-safe deduplication to reject repeated packets before they can cause duplicate processing.",
      "Wraps sender debit, receiver credit, and ledger insertion in an SQLite transaction so failures roll back cleanly.",
    ],
    tags: [
      "C++20",
      "Crow",
      "ASIO",
      "OpenSSL",
      "SQLite",
      "CMake",
    ],
    github: "https://github.com/sadSanta-07/OfflineUPIMesh-main",
    logo: "/projects/offline-upi-mesh.svg",
  },
  {
    title: "Agent Zero",
    year: "2026",
    subtitle: "From “I should do this” to getting it done.",
    description:
      "Most productivity tools remind you about work. Agent Zero is built to help move it forward: describe what you need in plain language, and its agents can organize context and prepare actions across Google Workspace.",
    bullets: [
      "Uses specialized agents for triage, urgency, memory, and action execution.",
      "Connects Gmail, Google Calendar, and Google Docs with persistent contextual memory.",
      "Turns voice notes and inbox signals into structured tasks and workflows.",
    ],
    tags: [
      "React",
      "TypeScript",
      "Gemini",
      "Firebase",
      "Firestore",
      "Node.js",
      "Google APIs",
    ],
    github: "https://github.com/sadSanta-07/Agent-Zero",
    live: "https://agentzero-18082.web.app/",
    logo: "/projects/agent-zero.svg",
  },
  {
    title: "NoJudgement",
    year: "2026",
    subtitle: "Get better at speaking by actually speaking.",
    description:
      "Practising a language can be awkward when you're worried about making mistakes. NoJudgement brings people together for real-time speaking practice, then uses AI feedback to help them spot what to improve.",
    bullets: [
      "Matches users for live conversations using Socket.io and WebRTC.",
      "Uses speech-to-text and language-model feedback to surface fluency issues, filler words, and improvement areas.",
      "Tracks progress through session history, streaks, performance analytics, and a leaderboard.",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "WebRTC",
      "Socket.io",
      "PostgreSQL",
      "Prisma",
      "Whisper",
      "Llama",
    ],
    github: "https://github.com/sadSanta-07/NoJudgement",
    live: "https://no-judgement.vercel.app/",
    logo: "/projects/nojudgement.svg",
  },
];
