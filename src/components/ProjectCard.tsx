"use client";

import Image from "next/image";
import Link from "next/link";

import { CheckCircle2 } from "lucide-react";
import { PiGithubLogo } from "react-icons/pi";

import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  status?: string;
  date?: string;
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group min-w-0">
      {/* image */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-[18px] border border-border bg-surface">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* info */}
      <div className="pt-4">
        {/* title*/}
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-[22px] font-semibold leading-tight tracking-tight text-primary">
            {project.title}
          </h3>

          {project.date && (
            <span className="shrink-0 text-[15px] text-primary">
              {project.date}
            </span>
          )}
        </div>

        {/* status */}
        <div className="mt-1.5 flex items-center gap-1.5 text-[15px] text-primary">
          <CheckCircle2 className="size-[17px] text-emerald-400" />
          <span>{project.status ?? "Completed"}</span>
        </div>

        {/* description */}
        <p className="mt-3 max-w-xl text-[17px] leading-[1.45] text-muted">
          {project.description}
        </p>

        {/* tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-surface px-3 py-1.5 text-[14px] leading-none text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* buttons */}
        {(project.github || project.live) && (
          <div className="mt-5 flex items-center gap-2">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-primary px-2.5 text-[12px] font-medium text-background transition-opacity hover:opacity-85"
              >
                <PiGithubLogo className="size-[15px]" />
                GitHub
              </Link>
            )}

            {project.live && (
              <LiquidMetalButton
                label="Live ↗"
                onClick={() =>
                  window.open(
                    project.live,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              />
            )}
          </div>
        )}
      </div>
    </article>
  );
}