import React from "react";

interface BrutalButtonProps {
  href?: string;
  filled?: boolean;
  download?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function BrutalButton({
  href = "#",
  filled,
  download,
  children,
  className = "",
}: BrutalButtonProps) {
  return (
    <a
      href={href}
      download={download || undefined}
      className={`
        inline-block
        border-2
        border-[var(--charcoal)]

        font-mono
        text-sm
        transition-all
        duration-100
        cursor-pointer
        select-none
        ${filled
          ? "bg-[var(--charcoal)] text-[var(--bg)]"
          : "bg-transparent text-[var(--charcoal)]"
        }
        ${className}
      `}
      onMouseEnter={(e) => {
        const el = e.currentTarget;

        el.style.transform = "translate(-2px, -2px)";
        el.style.boxShadow = "5px 5px 0px var(--accent)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;

        el.style.transform = "translate(0px, 0px)";
        el.style.boxShadow = "none";
      }}
    >
      {children}
    </a>
  );
}

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`
        inline-block
        border
        border-[var(--charcoal)]/30
        px-2
        py-1
        font-mono
        text-[10px]
        uppercase
        tracking-widest
        ${className}
      `}
    >
      {children}
    </span>
  );
}