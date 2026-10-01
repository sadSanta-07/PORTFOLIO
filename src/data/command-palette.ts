import {
  Home,
  UserRound,
  FolderGit2,
  BriefcaseBusiness,
  Mail,
} from "lucide-react";

import type { ElementType } from "react";

export type CommandItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: ElementType;
};

export const navigationItems: CommandItem[] = [
  {
    id: "home",
    title: "Go to Home",
    description: "Overview, highlights, and recent work",
    href: "/",
    icon: Home,
  },
  {
    id: "about",
    title: "Go to About",
    description: "A little more about me and what I build",
    href: "/#about",
    icon: UserRound,
  },
  {
    id: "projects",
    title: "Go to Projects",
    description: "Browse projects and experiments",
    href: "/#projects",
    icon: FolderGit2,
  },
  {
    id: "experience",
    title: "Go to Experience",
    description: "Work, internships, and things I've done",
    href: "/#experience",
    icon: BriefcaseBusiness,
  },
  {
    id: "contact",
    title: "Go to Contact",
    description: "Social links, email, and resume",
    href: "/#contact",
    icon: Mail,
  },
];

export const projectItems: CommandItem[] = [
  {
    id: "offline-upi",
    title: "OfflineUPIMesh",
    description: "Offline payment infrastructure",
    href: "/#projects",
    icon: FolderGit2,
  },
  {
    id: "nojudgement",
    title: "NoJudgement",
    description: "Real-time communication platform",
    href: "/#projects",
    icon: FolderGit2,
  },
  {
    id: "santaclaw",
    title: "SantaClaw",
    description: "Autonomous AI execution system",
    href: "/#projects",
    icon: FolderGit2,
  },
];