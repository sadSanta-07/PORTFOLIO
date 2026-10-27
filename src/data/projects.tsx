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
];
