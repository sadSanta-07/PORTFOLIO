"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const RING_MASK =
  "linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0)";

const GLOW =
  "radial-gradient(260px circle at var(--x) var(--y), light-dark(oklch(0.72 0.09 155 / 0.16), oklch(0.72 0.12 155 / 0.12)), transparent 70%), radial-gradient(320px circle at 85% 100%, light-dark(oklch(0.78 0.09 220 / 0.10), oklch(0.65 0.12 250 / 0.10)), transparent 75%)";

const EDGE =
  "radial-gradient(180px circle at var(--x) var(--y), light-dark(oklch(0.65 0.12 155 / 0.65), oklch(0.72 0.14 155 / 0.55)), transparent 70%), radial-gradient(240px circle at 90% 100%, light-dark(oklch(0.72 0.12 235 / 0.32), oklch(0.68 0.15 255 / 0.35)), transparent 75%)";

const SHADOW_ORIGIN = 30;
const SHADOW_MAX = 6;
const SHADOW_FALLOFF = 420;

const SHADOW_COLOR =
  "light-dark(oklch(0 0 0 / 0.22), oklch(0 0 0 / 0.9))";

export type Feature = {
  title: string;
  text: string;
  icon: React.ReactNode;
  href: string;
  external?: boolean;
};

export function SpotlightGrid({
  features,
  className,
}: {
  features: Feature[];
  className?: string;
}) {
  const gridRef = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLElement | null)[]>([]);
  const reduceMotion = useReducedMotion();

  const track = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;

    gridRef.current?.setAttribute("data-lit", "");

    for (const card of cards.current) {
      if (!card) continue;

      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;

      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);

      const dx = SHADOW_ORIGIN - x;
      const dy = SHADOW_ORIGIN - y;
      const dist = Math.hypot(dx, dy) || 1;
      const reach = Math.max(0, 1 - dist / SHADOW_FALLOFF);

      card.style.setProperty(
        "--sx",
        `${((dx / dist) * SHADOW_MAX * reach).toFixed(2)}px`,
      );
      card.style.setProperty(
        "--sy",
        `${((dy / dist) * SHADOW_MAX * reach).toFixed(2)}px`,
      );
    }
  };

  return (
    <div
      ref={gridRef}
      className={cn(
        "group/grid grid w-full grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3",
        className,
      )}
      onPointerMove={track}
      onPointerLeave={() => {
        gridRef.current?.removeAttribute("data-lit");

        for (const card of cards.current) {
          card?.style.setProperty("--sx", "0px");
          card?.style.setProperty("--sy", "0px");
        }
      }}
    >
      {features.map((feature, i) => {
        return (
          <motion.article
            key={feature.title}
            ref={(el) => {
              cards.current[i] = el;
            }}
            initial={
              reduceMotion ? false : { opacity: 0, y: 12 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: reduceMotion ? 0 : 0.4,
              delay: reduceMotion ? 0 : i * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-h-40 overflow-hidden rounded-2xl bg-bg shadow-[inset_0_0_0_1px_var(--border)] sm:min-h-44"
          >
            {/* Cursor glow across the card surface. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-data-lit/grid:opacity-100"
              style={{ background: GLOW }}
            />

            {/* The spotlight catches only the card's edge. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[inherit] p-px opacity-0 transition-opacity duration-300 group-data-lit/grid:opacity-100"
              style={{ background: EDGE, mask: RING_MASK }}
            />

            <a
              href={feature.href}
              target={feature.external ? "_blank" : undefined}
              rel={feature.external ? "noopener noreferrer" : undefined}
              aria-label={`${feature.title}: ${feature.text}`}
              className="relative block h-full min-h-40 rounded-2xl p-4 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary sm:min-h-44 sm:p-5"
            >
              <div
                className="relative flex h-full flex-col"
                style={
                  { "--shadow": SHADOW_COLOR } as React.CSSProperties
                }
              >
                <span
                  className={cn(
                    "block w-fit text-muted transition-[filter] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-data-lit/grid:transition-none motion-reduce:filter-none",
                    "filter-[drop-shadow(var(--sx,0px)_var(--sy,0px)_2px_var(--shadow))]",
                  )}
                >
                  {feature.icon}
                </span>

                <span className="mt-auto block pt-7">
                  <span className="block text-sm font-medium text-primary sm:text-base">
                    {feature.title}
                  </span>

                  <span className="mt-1 block wrap-break-word text-xs leading-relaxed text-muted sm:text-sm">
                    {feature.text}
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className="absolute right-0 top-0 text-muted/60 transition-transform duration-300 group-hover/card:translate-x-0.5"
                />
              </div>
            </a>
          </motion.article>
        );
      })}
    </div>
  );
}