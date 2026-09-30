import {
    SiAxios,
    SiCplusplus,
    SiDocker,
    SiExpo,
    SiExpress,
    SiFigma,
    SiGit,
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
    SiTailwindcss,
    SiTypescript,
    SiVercel,
} from "react-icons/si";
import { Code2, Database, Globe, Sparkles } from "lucide-react";

export const techStack = {
    Languages: [
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Python", icon: SiPython },
        { name: "C++", icon: SiCplusplus },
        { name: "PHP", icon: SiPhp },
        { name: "SQL", icon: Database },
    ],

    "AI/ML": [
        { name: "PyTorch", icon: SiPytorch },
        { name: "Gemini", icon: Sparkles },
        { name: "Groq / Whisper", icon: Sparkles },
        { name: "LLaMA", icon: Sparkles },
        { name: "CNNs", icon: Code2 },
        { name: "fast.ai", icon: Code2 },
    ],

    Backend: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express", icon: SiExpress },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Prisma ORM", icon: Database },
        { name: "Socket.io", icon: SiSocketdotio },
        { name: "WebRTC", icon: Globe },
        { name: "Redis", icon: SiRedis },
    ],

    Mobile: [
        { name: "React Native", icon: SiReact },
        { name: "Expo", icon: SiExpo },
        { name: "Animated API", icon: Code2 },
    ],

    Tools: [
        { name: "Git & GitHub", icon: SiGithub },
        { name: "Figma", icon: SiFigma },
        { name: "Vercel", icon: SiVercel },
        { name: "Cloudinary", icon: Globe },
        { name: "Supabase", icon: SiSupabase },
        { name: "Docker", icon: SiDocker },
        { name: "REST APIs", icon: Globe },
    ],
};