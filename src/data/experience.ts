export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  logo: string;
  description: string;
  highlights: string[];
};

export const experiences: ExperienceItem[] = [
  {
    company: "IFFCO",
    role: "Software Developer Intern",
    period: "May 2026 – July 2026",
    location: "Phulpur, Uttar Pradesh",
    logo: "/experience/iffco.png",
    description:
      "Contributing to enterprise-scale internal software systems, leveraging modern full-stack workflows and relational database architectures to support critical business operations.",
    highlights: [
      "Developed a full-stack Next.js and TypeScript procurement portal to digitize the end-to-end indent-to-SIV cycle,replacing legacy Oracle EBS R12 manual workflows and physical registers.",
      "Integrated Gemini 1.5 Flash AI to automate Quotation Comparison Sheet (QCS) generation, reducing manual vendor bid evaluation time from 30–45 minutes down to sub-3 seconds.",
      "Architected a type-safe PostgreSQL database schema using Prisma ORM and built 11+ REST API routes to enforce strict state transitions and role-based access control.",
    ],
  },
];