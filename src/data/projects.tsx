import type { ComponentType } from "react";
import {
  SiTypescript,
  SiWebrtc,
  SiDocker,
  SiNodedotjs,
  SiBun,
  SiNextdotjs,
  SiSocketdotio,
  SiReact,
  SiFirebase,
  SiGooglegemini,
} from "react-icons/si";
import { Sparkles } from "lucide-react";

export type TechItem = {
  name: string;
  icon: ComponentType<{ className?: string }>;
};

export type Project = {
  title: string;
  year?: string;
  subtitle: string;
  description: string;
  bullets?: string[];
  tags: string[];
  tech: TechItem[];
  github?: string;
  live?: string;
  image: string;
  gradientClass: string;
  badge?: {
    type: "ribbon" | "sticker" | "tag-orange" | "tag-cyan";
    text: string;
  };
};

export const projects: Project[] = [
  {
    title: "MYNA",
    year: "2026",
    subtitle: "Peer-to-peer terminal sharing via WebRTC.",
    description:
      "Share an active terminal session directly through a link. Built with host approval controls, freeze mode, and isolated Docker sandboxing.",
    tags: ["TypeScript", "WebRTC", "Docker", "Node.js"],
    tech: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "WebRTC", icon: SiWebrtc },
      { name: "Docker", icon: SiDocker },
      { name: "Node.js", icon: SiNodedotjs },
    ],
    github: "https://github.com/sadSanta-07/myna",
    live: "https://myna-alpha.vercel.app/",
    image: "/projects/myna.png",
    gradientClass:
      "bg-gradient-to-br from-white via-lime-400 to-slate-950 dark:from-neutral-900 dark:via-lime-500/50 dark:to-neutral-950",
    badge: {
      type: "ribbon",
      text: "WebRTC P2P",
    },
  },
  {
    title: "Agent Zero",
    year: "2026",
<<<<<<< HEAD
    subtitle: "AI coding agent that asks before it acts.",
    description:
      "A terminal-native agent that explores codebases, plans multi-step changes, and stages reviewable git diffs so you always stay in control.",
    tags: ["TypeScript", "Bun", "Docker", "AI SDK"],
    tech: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "Bun", icon: SiBun },
      { name: "Docker", icon: SiDocker },
      { name: "AI SDK", icon: Sparkles },
    ],
    github: "https://github.com/sadSanta-07/SANTACLAW",
    live: "https://santaclaw.vercel.app/",
    image: "/projects/santaclaw.png",
    gradientClass:
      "bg-gradient-to-br from-white via-blue-500 to-slate-950 dark:from-neutral-900 dark:via-blue-600/50 dark:to-neutral-950",
    badge: {
      type: "sticker",
      text: "Diff-First Agent",
    },
  },
  {
    title: "NoJudgement",
    year: "2026",
    subtitle: "AI-powered live conversational fluency practice.",
    description:
      "Real-time speech practice pairing peers with instant Whisper AI feedback to catch filler words, analyze pacing, and build speaking confidence.",
    tags: ["Next.js", "TypeScript", "WebRTC", "Socket.io"],
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "WebRTC", icon: SiWebrtc },
      { name: "Socket.io", icon: SiSocketdotio },
    ],
    github: "https://github.com/sadSanta-07/NoJudgement",
    live: "https://no-judgement.vercel.app/",
    image: "/projects/nojudgement.png",
    gradientClass:
      "bg-gradient-to-br from-white via-orange-500 to-slate-950 dark:from-neutral-900 dark:via-orange-600/50 dark:to-neutral-950",
    badge: {
      type: "tag-orange",
      text: "SPEECH AI · REAL-TIME",
    },
  },
  {
    title: "Agent Zero",
    year: "2026",
    subtitle: "Autonomous agent for Google Workspace.",
    description:
      "Multi-agent system that converts voice notes and inbox chatter into structured actions across Gmail, Google Calendar, and Google Docs.",
    tags: ["React", "TypeScript", "Firebase", "Gemini"],
    tech: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Firebase", icon: SiFirebase },
      { name: "Gemini AI", icon: SiGooglegemini },
    ],
    github: "https://github.com/sadSanta-07/Agent-Zero",
    live: "https://agentzero-18082.web.app/",
    image: "/projects/agent-zero.png",
    gradientClass:
      "bg-gradient-to-br from-white via-cyan-500 to-slate-950 dark:from-neutral-900 dark:via-cyan-600/50 dark:to-neutral-950",
    badge: {
      type: "tag-cyan",
      text: "MULTI-AGENT · WORKSPACE",
    },
  },
=======
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
>>>>>>> 27daf93b1bf25ce1736273ec94d132ed1980e289
];
