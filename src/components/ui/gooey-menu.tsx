"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface GooeyMenuProps {
  options: readonly string[] | string[];
  value?: string;
  defaultValue?: string;
  onSelect?: (option: string, index: number) => void;
  className?: string;
  align?: "left" | "right";
  counts?: Record<string, number>;
}

export function GooeyMenu({
  options,
  value,
  defaultValue,
  onSelect,
  className,
  align = "right",
  counts,
}: GooeyMenuProps) {
  const isControlled = value !== undefined;
  const [internalSelected, setInternalSelected] = useState(
    defaultValue ?? options[0]
  );
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selected = isControlled ? value : internalSelected;

  // Close on outside click or escape
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const handleSelect = (option: string, index: number) => {
    if (!isControlled) setInternalSelected(option);
    onSelect?.(option, index);
    setOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative inline-block text-left select-none", className)}
    >
      {/* Trigger Button with tactile gooey spring feel */}
      <motion.button
        type="button"
        whileTap={{ scale: 0.96 }}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={cn(
          "group relative flex h-9 items-center gap-2 rounded-xl border border-border bg-surface px-3 sm:px-3.5 font-sans text-[13px] font-medium text-primary shadow-xs transition-all duration-200 hover:border-primary/40 hover:bg-surface/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
          open && "border-primary/50 bg-primary/5 text-primary shadow-sm"
        )}
      >
        {/* Selected category name */}
        <span className="tracking-tight">{selected}</span>

        {/* Category count pill if provided */}
        {counts && counts[selected] !== undefined && (
          <span className="rounded-full bg-black/5 dark:bg-white/10 px-1.5 py-0.2 text-[10.5px] font-mono text-muted">
            {counts[selected]}
          </span>
        )}

        {/* Animated Chevron */}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 450, damping: 25 }}
          className="text-[10px] text-muted transition-colors group-hover:text-primary"
        >
          ▼
        </motion.span>
      </motion.button>

      {/* Springy Gooey Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: -6, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.94, y: -4, filter: "blur(2px)" }}
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 28,
              mass: 0.7,
            }}
            className={cn(
              "absolute top-full z-50 mt-1.5 min-w-40 sm:min-w-43.75 rounded-xl border border-border bg-surface/95 p-1.5 shadow-xl backdrop-blur-md outline-none",
              align === "right" ? "right-0 origin-top-right" : "left-0 origin-top-left"
            )}
            role="listbox"
          >
            <div className="flex flex-col gap-0.5">
              {options.map((option, i) => {
                const isSelected = option === selected;
                const count = counts?.[option];

                return (
                  <motion.button
                    key={option}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    initial={{ opacity: 0, x: align === "right" ? 6 : -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.02,
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                    whileHover={{ x: align === "right" ? -2 : 2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleSelect(option, i)}
                    className={cn(
                      "group/item relative flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 font-sans text-[13px] transition-all duration-150 cursor-pointer",
                      isSelected
                        ? "bg-primary/10 font-semibold text-primary"
                        : "text-muted hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          "size-1.5 rounded-full transition-transform duration-150",
                          isSelected
                            ? "bg-primary scale-125"
                            : "bg-transparent group-hover/item:bg-muted/40"
                        )}
                      />
                      <span className="tracking-tight">{option}</span>
                    </div>

                    {/* Count badge */}
                    {count !== undefined && (
                      <span
                        className={cn(
                          "text-[10.5px] font-mono tabular-nums px-1.5 py-0.2 rounded-full",
                          isSelected
                            ? "bg-primary/15 text-primary"
                            : "text-muted/70 group-hover/item:text-muted"
                        )}
                      >
                        {count}
                      </span>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
