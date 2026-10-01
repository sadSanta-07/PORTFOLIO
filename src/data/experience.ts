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
      "Engineered backend APIs and automated testing workflows, designing modular architecture to improve system monitoring and overall operational efficiency.",
      "Collaborated cross-functionally using agile methodologies to effectively communicate technical challenges and implement optimized solutions in a fast-paced environment.",
    ],
  },
];