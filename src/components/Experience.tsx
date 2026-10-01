"use client";

import { useState } from "react";
import Image from "next/image";
import { Instrument_Serif } from "next/font/google";
import { ChevronDown } from "lucide-react";
import { experiences } from "@/data/experience";

const instrumentSerif = Instrument_Serif({
    weight: "400",
    subsets: ["latin"],
});
export function Experience() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleExperience = (index: number) => {
        setOpenIndex((current) =>
            current === index ? null : index,
        );
    };

    return (
        <section
            id="experience"
            className="mx-auto w-full max-w-200 border-x border-dashed border-border">
            {/* Heading */}
            <div className="px-2 py-5 sm:px-6">
                <h2
                    className={`${instrumentSerif.className} mt-5 text-4xl leading-none text-primary`}>
                    Experience
                </h2>
            </div>

            {/* Divider */}
            <div className="relative h-px">
                <div className="absolute left-1/2 top-0 w-screen -translate-x-1/2 border-t border-dashed border-border" />
            </div>

            {/* Experience list */}
            <div>
                {experiences.map((experience, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div
                            key={`${experience.company}-${experience.role}`}
                            className="border-b border-dashed border-border"
                        >
                            {/* Experience header */}
                            <button
                                type="button"
                                onClick={() => toggleExperience(index)}
                                aria-expanded={isOpen}
                                className="
                  flex
                  w-full
                  items-center
                  gap-4
                  px-4
                  py-7
                  text-left
                  transition-colors
                  hover:bg-black/[0.015]
                  dark:hover:bg-white/[0.025]
                  sm:px-6
                "
                            >
                                {/* Company logo */}
                                <div
                                    className="
                    relative
                    size-12
                    shrink-0
                    overflow-hidden
                    rounded-xl
                    border
                    border-border
                    bg-surface
                    p-1
                    shadow-sm
                  "
                                >
                                    <Image
                                        src={experience.logo}
                                        alt={`${experience.company} logo`}
                                        fill
                                        className="object-contain p-1"
                                        sizes="48px"
                                    />
                                </div>

                                {/* Company + role */}
                                <div className="min-w-0 flex-1">
                                    <div className="text-[18px] font-semibold leading-tight text-primary">
                                        {experience.company}
                                    </div>

                                    <div className="mt-1 text-[15px] leading-tight text-muted">
                                        {experience.role}
                                    </div>
                                </div>

                                {/* Date */}
                                <div className="hidden shrink-0 text-right text-[15px] text-muted sm:block">
                                    {experience.period}
                                </div>

                                {/* Mobile date */}
                                <div className="shrink-0 text-right text-[13px] text-muted sm:hidden">
                                    {experience.period.split(" – ")[0]}
                                </div>

                                <ChevronDown
                                    className={`
                    size-5
                    shrink-0
                    text-muted
                    transition-transform
                    duration-300
                    ${isOpen ? "rotate-180" : ""}
                  `}
                                    strokeWidth={1.5}
                                />
                            </button>

                            {/* Expanded details */}
                            <div
                                className={`
                  grid
                  transition-[grid-template-rows,opacity]
                  duration-300
                  ease-out
                  ${isOpen
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                    }
                `}
                            >
                                <div className="overflow-hidden">
                                    <div className="px-4 pb-7 pl-20 pr-6 sm:pl-24">
                                        {/* Full date on mobile */}
                                        <div className="mb-4 text-[13px] text-muted sm:hidden">
                                            {experience.period}
                                        </div>

                                        {/* Location */}
                                        <div className="mb-4 text-[13px] text-muted">
                                            {experience.location}
                                        </div>

                                        {/* Description */}
                                        <p className="max-w-150 text-[15px] leading-[1.8] text-muted">
                                            {experience.description}
                                        </p>

                                        {/* Highlights */}
                                        <ul className="mt-4 space-y-2">
                                            {experience.highlights.map((highlight) => (
                                                <li
                                                    key={highlight}
                                                    className="flex gap-2 text-[14px] leading-[1.7] text-muted"
                                                >
                                                    <span className="mt-[9px] size-1 shrink-0 rounded-full bg-muted" />

                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}