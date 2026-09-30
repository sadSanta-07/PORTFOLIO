"use client";

import { useState } from "react";
import { Instrument_Serif } from "next/font/google";

import { techStack } from "@/data/tech-stack";

const instrumentSerif = Instrument_Serif({
    weight: "400",
    subsets: ["latin"],
});

const categories = [
    "All",
    "Languages",
    "AI/ML",
    "Backend",
    "Mobile",
    "Tools",
] as const;

type Category = (typeof categories)[number];

export function TechStack() {
    const [activeCategory, setActiveCategory] =
        useState<Category>("All");

    const technologies =
        activeCategory === "All"
            ? Object.values(techStack).flat()
            : techStack[activeCategory];

    return (
        <section className="mx-auto w-full max-w-200 border-x border-dashed border-border">
            {/* top divider */}
            <div className="relative h-px">
                <div className="absolute left-1/2 top-0 w-screen -translate-x-1/2 border-t border-dashed border-border" />
            </div>

            {/* heading */}
            <div className="flex min-h-20 translate-y-2.5 items-center justify-between gap-4 px-2 sm:px-4">
                <div className="flex shrink-0 items-baseline gap-3">
                    <h2
                        className={`${instrumentSerif.className} text-4xl leading-none text-primary`}
                    >
                        Tech Stack
                    </h2>

                    <span className="hidden text-[12px] text-muted sm:inline">
                        ( hover to play )
                    </span>
                </div>

                {/* desktop categories */}
                <div className="hidden min-w-0 overflow-x-auto md:block">
                    <div className="flex w-max items-center gap-1">
                        {categories.map((category) => {
                            const active = activeCategory === category;

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => setActiveCategory(category)}
                                    className={`shrink-0 rounded-md px-3 py-1.5 text-[14px] transition-all duration-150 ${active
                                            ? "border border-border bg-surface font-medium text-primary shadow-sm"
                                            : "text-muted hover:text-primary"
                                        }`}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* mobile dropdown */}
                <div className="relative md:hidden">
                    <select
                        value={activeCategory}
                        onChange={(e) =>
                            setActiveCategory(e.target.value as Category)
                        }
                        className="h-9 appearance-none rounded-md border border-border bg-surface px-3 pr-8 text-[14px] font-medium text-primary outline-none"
                    >
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>

                    <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-muted">
                        ▾
                    </span>
                </div>
            </div>

            {/* divider */}
            <div className="relative h-px">
                <div className="absolute left-1/2 top-0 w-screen -translate-x-1/2 border-t border-dashed border-border" />
            </div>

            {/* technologies */}
            <div className="px-2 pb-20 pt-5 sm:px-4">
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => {
                        const Icon = tech.icon;

                        return (
                            <div
                                key={tech.name}
                                className="group flex h-9 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[14px] text-muted transition-all duration-100 hover:bg-primary hover:text-background"
                            >
                                <Icon className="size-3.5 shrink-0" />
                                <span>{tech.name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* bottom divider */}
            <div className="relative h-px">
                <div className="absolute left-1/2 top-0 w-screen -translate-x-1/2 border-t border-dashed border-border" />
            </div>
        </section>
    );
}