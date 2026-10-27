"use client";

import React, { useRef, useEffect, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NeonEdgeButtonProps {
  children?: ReactNode;
  speed?: number;
  glow?: boolean;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  as?: "button" | "a";
}

export function NeonEdgeButton({
  children = "GitHub",
  speed = 1,
  glow = true,
  className,
  onClick,
  href,
  target,
  rel,
  as: Tag = "button",
}: NeonEdgeButtonProps) {
  const containerRef = useRef<HTMLElement>(null);
  const lightRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number>(0);
  const tRef = useRef(0);

  useEffect(() => {
    const el = containerRef.current;
    const light = lightRef.current;
    if (!el || !light) return;

    const BASE = 2200; // ms for one full revolution at speed=1
    const period = BASE / speed;

    let last = 0;

    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      tRef.current = (tRef.current + dt / period) % 1;

      const t = tRef.current;
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      const perimeter = 2 * (w + h);

      // Map t → distance along perimeter, starting top-left clockwise
      const dist = t * perimeter;

      let x: number, y: number;
      if (dist < w) {
        x = dist;
        y = 0;
      } else if (dist < w + h) {
        x = w;
        y = dist - w;
      } else if (dist < 2 * w + h) {
        x = w - (dist - w - h);
        y = h;
      } else {
        x = 0;
        y = h - (dist - 2 * w - h);
      }

      light.style.transform = `translate(${x}px, ${y}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame((now) => {
      last = now;
      rafRef.current = requestAnimationFrame(tick);
    });

    return () => cancelAnimationFrame(rafRef.current);
  }, [speed]);

  const sharedProps = {
    className: cn(
      "group relative inline-flex h-10 items-center gap-2 overflow-hidden rounded-xl px-4 text-[14px] font-medium text-primary transition-all duration-200",
      "border border-border bg-surface",
      glow && "shadow-[0_0_0_1px_transparent] hover:shadow-[0_0_12px_2px_rgba(99,179,237,0.18)]",
      className,
    ),
    onClick,
  };

  const inner = (
    <>
      {/* Static glow bg */}
      {glow && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(99,179,237,0.08) 0%, transparent 70%)",
          }}
        />
      )}

      {/* Border mask layer */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] p-px"
        style={{
          mask: "linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0)",
        }}
      >
        {/* Travelling light */}
        <span
          ref={lightRef}
          aria-hidden
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            width: 60,
            height: 60,
            top: 0,
            left: 0,
            background:
              "radial-gradient(circle, rgba(147,210,255,0.95) 0%, rgba(99,179,237,0.6) 30%, transparent 70%)",
            filter: "blur(1px)",
            willChange: "transform",
          }}
        />
      </span>

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (Tag === "a" && href) {
    return (
      <a
        ref={containerRef as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        {...(sharedProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      ref={containerRef as React.Ref<HTMLButtonElement>}
      type="button"
      {...(sharedProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {inner}
    </button>
  );
}
