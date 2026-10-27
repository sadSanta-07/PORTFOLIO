import {
    SiCplusplus,
    SiDocker,
    SiExpo,
    SiExpress,
    SiFigma,
    SiGithub,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPhp,
    SiPostgresql,
    SiPytorch,
    SiPython,
    SiReact,
    SiRedis,
    SiSocketdotio,
    SiSupabase,
    SiTypescript,
    SiVercel,
} from "react-icons/si";
import { Code2, Database, Globe, Sparkles } from "lucide-react";

export type TechItem = {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
};

export const techStack: Record<string, TechItem[]> = {
    Languages: [
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: SiJavascript, color: "#EAB308" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
        { name: "SQL", icon: Database, color: "#336791" },
    ],

    "AI/ML": [
        { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
        { name: "Gemini", icon: Sparkles, color: "#4E75F6" },
        { name: "Groq / Whisper", icon: Sparkles, color: "#F55036" },
        { name: "LLaMA", icon: Sparkles, color: "#0468FF" },
        { name: "CNNs", icon: Code2, color: "#10B981" },
        { name: "fast.ai", icon: Code2, color: "#0073B7" },
    ],

    Backend: [
        { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
        { name: "Express", icon: SiExpress, color: "#68A063" },
        { name: "Next.js", icon: SiNextdotjs, color: "#0070F3" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Prisma ORM", icon: Database, color: "#5A67D8" },
        { name: "Socket.io", icon: SiSocketdotio, color: "#25C2A0" },
        { name: "WebRTC", icon: Globe, color: "#ED2A24" },
        { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ],

    Mobile: [
        { name: "React Native", icon: SiReact, color: "#06B6D4" },
        { name: "Expo", icon: SiExpo, color: "#4630EB" },
        { name: "Animated API", icon: Code2, color: "#9333EA" },
    ],

    Tools: [
        { name: "Git & GitHub", icon: SiGithub, color: "#F05032" },
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        { name: "Vercel", icon: SiVercel, color: "#0070F3" },
        { name: "Cloudinary", icon: Globe, color: "#3448C5" },
        { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "REST APIs", icon: Globe, color: "#0284C7" },
    ],
};
