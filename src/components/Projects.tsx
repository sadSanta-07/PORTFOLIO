"use client";

import Image from "next/image";
import Link from "next/link";
import { Instrument_Serif } from "next/font/google";
import { FiGlobe, FiGithub, FiArrowUpRight } from "react-icons/fi";
import { projects } from "@/data/projects";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
});

export function Projects() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-200 border-x border-dashed border-border"
    >
      {/* Section Header */}
      <div className="flex h-12 sm:h-14 items-center justify-between px-3 sm:px-4">
        <h2
          className={`${instrumentSerif.className} text-3xl sm:text-4xl leading-none text-primary`}
        >
          Projects
        </h2>

        <Link
          href="https://github.com/sadSanta-07?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1 px-2 py-1 cursor-pointer transition-colors"
        >
          <span className="text-sm text-muted group-hover:text-primary transition-colors duration-200">
            View all
          </span>
          <FiArrowUpRight className="text-base text-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
        </Link>
      </div>

      {/* Horizontal Divider */}
      <div className="relative h-px">
        <div className="absolute left-1/2 top-0 w-screen -translate-x-1/2 border-t border-dashed border-border" />
      </div>

      {/* 2x2 Projects Grid: 1 col on mobile, 2 cols on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 -mx-px">
        {featuredProjects.map((project, index) => {
          const isLeftColumn = index % 2 === 0;
          const isTopRow = index < 2;

          return (
            <article
              key={project.title}
              className={`w-full flex p-3.5 sm:p-4.5 lg:p-5 flex-col justify-between transition-all duration-300 ${
                isTopRow
                  ? "border-b border-dashed border-border"
                  : "border-b md:border-b-0 border-dashed border-border"
              } ${
                isLeftColumn
                  ? "md:border-r md:border-dashed md:border-border"
                  : ""
              }`}
            >
              {/* Preview Banner */}
              <a
                href={project.live || project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
                aria-label={`Visit ${project.title}`}
              >
                <div
                  className={`w-full h-52 sm:h-56 md:h-52 lg:h-58 rounded-xl cursor-pointer overflow-hidden relative group transition-colors duration-700 ${project.gradientClass}`}
                >
                  {/* Card Corner Badges */}
                  {project.badge?.type === "ribbon" && (
                    <div className="absolute -right-18 sm:-right-20 top-7 sm:top-8 rotate-45 overflow-hidden h-9 sm:h-10 z-10 pointer-events-none">
                      <div className="w-full bg-amber-900/40">
                        <p className="font-sans text-black font-semibold tracking-tight text-[11px] sm:text-xs mt-2.5 sm:mt-3 mb-2 bg-amber-300 py-0.5 sm:py-1 px-16 sm:px-20 border border-dashed border-neutral-600/30 flex items-center gap-1.5 overflow-hidden relative shadow-sm">
                          <span className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-[350px] transition-transform duration-1000 ease-out -skew-x-20 z-2 pointer-events-none" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500 animate-pulse" />
                          {project.badge.text}
                        </p>
                      </div>
                    </div>
                  )}

                  {project.badge?.type === "sticker" && (
                    <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-10 select-none pointer-events-none flex items-center gap-1.5">
                      <div className="transition-transform duration-300 ease-out group-hover:scale-105 group-hover:-rotate-6">
                        <svg
                          width="44"
                          height="44"
                          viewBox="0 0 100 100"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-9 sm:size-11 drop-shadow-md"
                        >
                          <polygon
                            points="50,5 61,35 95,38 68,60 76,95 50,75 24,95 32,60 5,38 39,35"
                            fill="#4D3DFD"
                            stroke="#ffffff"
                            strokeWidth="3.5"
                          />
                          <circle cx="43" cy="50" r="3.5" fill="#ffffff" />
                          <circle cx="57" cy="50" r="3.5" fill="#ffffff" />
                          <path
                            d="M44 60 Q50 66 56 60"
                            stroke="#ffffff"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            fill="none"
                          />
                        </svg>
                      </div>
                    </div>
                  )}

                  {project.badge?.type === "tag-orange" && (
                    <div className="absolute top-0 left-0 bg-orange-500 text-white font-mono text-[9px] sm:text-[10px] px-2.5 py-1 rounded-br-md font-semibold tracking-wide select-none flex items-center gap-1.5 shadow-sm z-10 pointer-events-none">
                      <span>SPEECH AI</span>
                      <span className="text-white/60">·</span>
                      <span className="text-white/95">REAL-TIME</span>
                    </div>
                  )}

                  {project.badge?.type === "tag-cyan" && (
                    <div className="absolute top-0 left-0 bg-sky-500 text-white font-mono text-[9px] sm:text-[10px] px-2.5 py-1 rounded-br-md font-semibold tracking-wide select-none flex items-center gap-1.5 shadow-sm z-10 pointer-events-none">
                      <span>MULTI-AGENT</span>
                      <span className="text-white/60">·</span>
                      <span className="text-white/95">WORKSPACE</span>
                    </div>
                  )}

                  {/* Responsive Floating Mockup */}
                  <div className="border-[3.5px] sm:border-5 border-white/30 dark:border-white/20 absolute rounded-lg sm:rounded-xl -right-8 sm:-right-10 md:-right-8 lg:-right-10 -bottom-4 sm:-bottom-5 w-[85%] sm:w-[88%] aspect-[16/10] overflow-hidden shadow-2xl transition-all duration-300 ease-out group-hover:-right-6 sm:group-hover:-right-8 group-hover:-bottom-2 sm:group-hover:-bottom-3 group-hover:scale-[1.02] bg-neutral-900">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      width={480}
                      height={300}
                      className="w-full h-full object-cover object-top rounded-md sm:rounded-lg"
                      priority={index < 2}
                    />
                  </div>
                </div>
              </a>

              {/* Card Meta Content */}
              <div className="mt-3.5 flex flex-col flex-1 justify-between">
                <div>
                  {/* Title & Live Status */}
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base sm:text-[17px] font-bold text-primary tracking-tight">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-border/60 bg-surface/60 shrink-0">
                      <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] font-medium text-muted">
                        Live
                      </span>
                    </div>
                  </div>

                  {/* Subtitle */}
                  <p className="text-xs text-muted mt-0.5">
                    {project.subtitle}
                  </p>

                  {/* Catchy Short Intro */}
                  <p className="text-xs sm:text-[13px] text-muted/90 mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Row: Tech Stack ICONS + Action Links */}
                <div className="flex items-center justify-between gap-2 sm:gap-3 mt-4 pt-2.5 border-t border-dashed border-border/50">
                  {/* Tech stack icons */}
                  <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
                    {project.tech.map((t) => (
                      <div
                        key={t.name}
                        className="group/tech relative flex items-center justify-center text-muted hover:text-primary transition-colors cursor-pointer"
                        title={t.name}
                      >
                        <t.icon className="size-4 md:size-[15px] transition-transform duration-200 group-hover/tech:scale-125" />
                      </div>
                    ))}
                  </div>

                  {/* Live & GitHub Action Icons */}
                  <div className="flex items-center gap-1 shrink-0">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} live demo`}
                        className="size-8 rounded-md flex cursor-pointer justify-center items-center hover:bg-black/5 dark:hover:bg-white/5 transition-all text-muted hover:text-primary"
                      >
                        <FiGlobe className="size-4" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} GitHub repository`}
                        className="size-8 rounded-md flex cursor-pointer justify-center items-center hover:bg-black/5 dark:hover:bg-white/5 transition-all text-muted hover:text-primary"
                      >
                        <FiGithub className="size-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Bottom Stripe Divider */}
      <div className="relative h-px">
        <div className="stripe-divider absolute left-1/2 h-6 w-screen -translate-x-1/2 border-y border-dashed border-border" />
      </div>
    </section>
  );
}
