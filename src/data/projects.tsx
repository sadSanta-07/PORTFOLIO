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
    title: "SantaClaw",
    year: "2026",
    subtitle: "AI coding agent that asks before it acts.",
    description:
      "A terminal-native agent that explores codebases, plans multi-step changes, and stages reviewable git diffs so you always stay in control.",
    bullets: [
      "Combines repository analysis, planning, tool calls, and multi-step coding workflows.",
      "Stages generated changes as reviewable diffs instead of silently applying every modification.",
      "Offers terminal-native workflows with Bun, AI SDK, and Docker-based isolation.",
    ],
    tags: ["TypeScript", "Bun", "Docker", "AI SDK"],
    tech: [
      { name: "TypeScript", icon: SiTypescript },
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
    title: "Agent Zero",
    year: "2026",
    subtitle: "From “I should do this” to getting it done.",
    description:
      "An autonomous multi-agent Google Workspace assistant. Specialized agents triage inbox signals, assess urgency, retain contextual memory, and prepare actions across Gmail, Google Calendar, and Google Docs. Its voice-note and inbox workflows turn unstructured inputs into structured tasks.",
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
    tech: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Firebase", icon: SiFirebase },
      { name: "Gemini AI", icon: SiGooglegemini },
      { name: "Bun", icon: SiBun },
      { name: "Docker", icon: SiDocker },
      { name: "AI SDK", icon: Sparkles },
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
  {
    title: "NoJudgement",
    year: "2026",
    subtitle: "AI-powered live conversational fluency practice.",
    description:
      "Real-time speech practice pairing peers with instant Whisper AI feedback to catch filler words, analyze pacing, and build speaking confidence. Sessions include progress history, streaks, analytics, and a leaderboard.",
    bullets: [
      "Matches users for live conversations using Socket.io and WebRTC.",
      "Uses speech-to-text and language-model feedback to surface fluency issues and improvement areas.",
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
];
