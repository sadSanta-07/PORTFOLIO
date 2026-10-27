"use client";

import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealCardProps {
  maxTilt?: number;
  revealContent?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function RevealCard({
  maxTilt = 12,
  revealContent,
  children,
  className,
}: RevealCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const rotateX = ((y - cy) / cy) * -maxTilt;
    const rotateY = ((x - cx) / cx) * maxTilt;

    setTransform(
      `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02,1.02,1.02)`
    );

    const glareX = ((x / rect.width) * 100).toFixed(1);
    const glareY = ((y / rect.height) * 100).toFixed(1);
    setGlare({ x: Number(glareX), y: Number(glareY), opacity: 0.18 });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)");
    setGlare((g) => ({ ...g, opacity: 0 }));
    setHovered(false);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-surface cursor-pointer select-none",
        className
      )}
      style={{
        transform,
        transition: hovered
          ? "transform 0.08s linear"
          : "transform 0.4s cubic-bezier(0.23,1,0.32,1)",
        willChange: "transform",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {/* Glare */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit]"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, transparent 60%)`,
          transition: hovered ? "none" : "opacity 0.4s ease",
        }}
      />

      {/* Reveal overlay */}
      {revealContent && (
        <div
          className={cn(
            "pointer-events-none absolute inset-0 z-20 flex flex-col justify-end p-4 transition-opacity duration-300",
            hovered ? "opacity-100" : "opacity-0"
          )}
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
          }}
        >
          <div className="text-white">{revealContent}</div>
        </div>
      )}

      {/* Card content */}
      {children}
    </div>
  );
}
