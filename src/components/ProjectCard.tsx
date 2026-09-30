"use client";

import Link from "next/link";
import { PiArrowUpRight, PiGithubLogo } from "react-icons/pi";

import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";

export type Project = {
  title: string;
  year?: string;
  subtitle?: string;
  description: string;
  bullets?: string[];
  tags: string[];
  github?: string;
  live?: string;
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="grid gap-10 py-10 md:grid-cols-[280px_minmax(0,1fr)] md:gap-12 md:py-12">
      {/* LEFT */}
      <div className="min-w-0">
        <div className="flex items-start justify-between gap-4 md:block">
          <h3 className="text-[24px] font-semibold leading-tight tracking-tight text-primary">
            {project.title}
          </h3>

          {project.year && (
            <span className="shrink-0 text-[14px] text-primary md:mt-2 md:block">
              {project.year}
            </span>
          )}
        </div>

        {project.subtitle && (
          <p className="mt-2 max-w-[260px] text-[16px] leading-6 text-muted">
            {project.subtitle}
          </p>
        )}

        {/* buttons */}
        {(project.github || project.live) && (
          <div className="mt-8 flex items-center gap-2.5">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-4 text-[14px] font-medium text-background transition-opacity hover:opacity-80"
              >
                <PiGithubLogo className="size-[17px]" />
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
                    "noopener,noreferrer",
                  )
                }
              />
            )}
          </div>
        )}
      </div>

      {/* RIGHT */}
      <div className="min-w-0">
        <p className="text-[18px] leading-8 text-muted">
          <span className="font-medium text-primary">
            The problem.
          </span>{" "}
          {project.description}
        </p>

        {project.bullets && project.bullets.length > 0 && (
          <div className="mt-8 space-y-4">
            {project.bullets.map((bullet) => (
              <div
                key={bullet}
                className="flex gap-4 text-[15px] leading-6 text-muted"
              >
                <span className="shrink-0 text-emerald-500">—</span>
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-[12px] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}