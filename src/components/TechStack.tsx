"use client";

import { useState, useCallback, useRef, useMemo } from "react";
import { Instrument_Serif } from "next/font/google";
import { techStack } from "@/data/tech-stack";
import { GooeyMenu } from "@/components/ui/gooey-menu";

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

// Piano note frequencies (C major scale + harmonic resonance)
const PIANO_NOTES = [
  261.63, // C4
  293.66, // D4
  329.63, // E4
  349.23, // F4
  392.0,  // G4
  440.0,  // A4
  493.88, // B4
  523.25, // C5
  587.33, // D5
  659.25, // E5
  698.46, // F5
  783.99, // G5
];

function usePianoSound() {
  const audioCtxRef = useRef<AudioContext | null>(null);

  const getCtx = useCallback(() => {
    if (!audioCtxRef.current || audioCtxRef.current.state === "closed") {
      audioCtxRef.current = new (window.AudioContext ||
        // @ts-expect-error - vendor prefix fallback
        window.webkitAudioContext)();
    }
    return audioCtxRef.current;
  }, []);

  const playNote = useCallback(
    (index: number) => {
      try {
        const ctx = getCtx();
        const freq = PIANO_NOTES[index % PIANO_NOTES.length];

        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        const osc2 = ctx.createOscillator();
        const gainNode2 = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gainNode.gain.setValueAtTime(0.18, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);

        osc2.type = "triangle";
        osc2.frequency.setValueAtTime(freq * 2, ctx.currentTime);
        gainNode2.gain.setValueAtTime(0.04, ctx.currentTime);
        gainNode2.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.3);

        osc.connect(gainNode);
        osc2.connect(gainNode2);
        gainNode.connect(ctx.destination);
        gainNode2.connect(ctx.destination);

        osc.start(ctx.currentTime);
        osc2.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.6);
        osc2.stop(ctx.currentTime + 0.3);
      } catch {
        // Audio unavailable before user gesture
      }
    },
    [getCtx],
  );

  return playNote;
}

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const playNote = usePianoSound();

  const technologies =
    activeCategory === "All"
      ? Object.values(techStack).flat()
      : techStack[activeCategory];

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: Object.values(techStack).flat().length,
    };
    for (const [cat, items] of Object.entries(techStack)) {
      counts[cat] = items.length;
    }
    return counts;
  }, []);

  return (
    <section className="mx-auto w-full max-w-200 border-x border-dashed border-border">
      {/* top divider */}
      <div className="relative h-px">
        <div className="absolute left-1/2 top-0 w-screen -translate-x-1/2 border-t border-dashed border-border" />
      </div>

      {/* heading with responsive GooeyMenu & proper clearance from upper border */}
      <div className="flex items-center justify-between gap-4 px-3 sm:px-5 pt-8 pb-5 sm:pt-10 sm:pb-6">
        <div className="flex shrink-0 items-baseline gap-2.5 sm:gap-3">
          <h2
            className={`${instrumentSerif.className} text-3xl sm:text-4xl leading-none text-primary`}
          >
            Tech Stack
          </h2>

          <span className="hidden text-[12px] text-muted sm:inline">
            ( hover to play )
          </span>
        </div>

        {/* Gooey Menu for categories on BOTH big and small screens */}
        <div className="relative z-30">
          <GooeyMenu
            options={categories}
            value={activeCategory}
            counts={categoryCounts}
            onSelect={(cat) => setActiveCategory(cat as Category)}
            align="right"
          />
        </div>
      </div>

      {/* divider */}
      <div className="relative h-px">
        <div className="absolute left-1/2 top-0 w-screen -translate-x-1/2 border-t border-dashed border-border" />
      </div>

      {/* technologies: authentic icon colors + normal portfolio text font, optimized for dark & light mode */}
      <div className="px-3 pb-16 pt-5 sm:px-4 sm:pb-20">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, i) => {
            const Icon = tech.icon;
            const brand = tech.color || "#38bdf8";

            return (
              <div
                key={tech.name}
                style={{ "--brand": brand } as React.CSSProperties}
                className="group flex h-9.5 cursor-pointer items-center gap-2 rounded-xl border border-dashed border-border bg-surface px-3 font-sans text-[14px] text-primary shadow-xs transition-all duration-150 hover:bg-[color-mix(in_srgb,var(--brand)_10%,var(--surface))] hover:border-solid hover:border-[color-mix(in_srgb,var(--brand)_50%,transparent)] hover:scale-105 active:scale-95 dark:border-border dark:bg-surface"
                onMouseEnter={() => playNote(i)}
              >
                {/* Authentic brand colored icon */}
                <span
                  style={{ color: brand }}
                  className="flex shrink-0 items-center justify-center transition-transform duration-200 group-hover:scale-110"
                >
                  <Icon className="size-4" />
                </span>

                {/* Normal portfolio font & text color */}
                <span className="font-medium text-primary">
                  {tech.name}
                </span>
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
