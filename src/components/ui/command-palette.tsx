/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  Home,
  UserRound,
  FolderGit2,
  BriefcaseBusiness,
  Mail,
  ArrowUpRight,
  CornerDownLeft,
  Command,
} from "lucide-react";
import { Inter, Instrument_Serif } from "next/font/google";
import {
  navigationItems,
  projectItems,
  CommandItem
} from "@/data/command-palette";

const inter = Inter({
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
});

type CommandPaletteProps = {
  isOpen: boolean;
  onClose: () => void;
};


export function CommandPalette({
  isOpen,
  onClose,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredNavigation = useMemo(() => {
    if (!query.trim()) return navigationItems;

    return navigationItems.filter((item) =>
      `${item.title} ${item.description}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [query]);

  const filteredProjects = useMemo(() => {
    if (!query.trim()) return projectItems;

    return projectItems.filter((item) =>
      `${item.title} ${item.description}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [query]);

  const allResults = [...filteredNavigation, ...filteredProjects];

  useEffect(() => {
    if (!isOpen) return;

    const timeout = setTimeout(() => {
      setQuery("");
      setSelectedIndex(0);
      inputRef.current?.focus();
    }, 50);

    return () => clearTimeout(timeout);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setSelectedIndex((current) =>
          Math.min(current + 1, allResults.length - 1)
        );
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setSelectedIndex((current) =>
          Math.max(current - 1, 0)
        );
      }

      if (event.key === "Enter") {
        event.preventDefault();

        const item = allResults[selectedIndex];

        if (item) {
          window.location.href = item.href;
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, allResults, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const handleItemClick = (item: CommandItem) => {
    onClose();

    if (item.href.startsWith("#")) {
      setTimeout(() => {
        document
          .querySelector(item.href)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 50);

      return;
    }

    window.location.assign(item.href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`${inter.className} fixed inset-0 z-60 flex items-start justify-center overflow-hidden px-4 pt-18 sm:pt-24`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Close command palette"
            className="absolute inset-0 cursor-default bg-black/35 backdrop-blur-[3px] dark:bg-black/55"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Palette */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{
              opacity: 0,
              y: -12,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -8,
              scale: 0.98,
            }}
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 32,
            }}
            className="relative w-full max-w-180 overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
          >
            {/* Search */}
            <div className="flex h-17.5 items-center gap-3 border-b border-dashed border-border px-5">
              <Search className="size-5 shrink-0 text-muted" />

              <input
                ref={inputRef}
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Search pages, projects, or actions..."
                className="h-full min-w-0 flex-1 bg-transparent text-[15px] text-primary outline-none placeholder:text-muted"
              />

              <button
                type="button"
                onClick={onClose}
                className="flex items-center gap-1 rounded-md border border-border px-2 py-1 text-[11px] text-muted transition-colors hover:bg-surface hover:text-primary"
              >
                ESC
              </button>
            </div>

            {/* Results */}
            <div
              className="h-120 overflow-y-auto overscroll-contain p-3"
              onWheel={(e) => e.stopPropagation()}
            >
              {/* Navigation */}
              {filteredNavigation.length > 0 && (
                <section>
                  <div className="px-3 pb-2 pt-2 text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                    Navigation
                  </div>

                  <div className="space-y-1">
                    {filteredNavigation.map((item) => {
                      const Icon = item.icon;
                      const index = allResults.indexOf(item);
                      const selected =
                        selectedIndex === index;

                      return (
                        <button
                          key={item.id}
                          type="button"
                          onMouseEnter={() =>
                            setSelectedIndex(index)
                          }
                          onClick={() =>
                            handleItemClick(item)
                          }
                          className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors ${selected
                            ? "bg-surface"
                            : "hover:bg-surface/70"
                            }`}
                        >
                          <span className="flex size-9 shrink-0 items-center justify-center text-muted">
                            <Icon className="size-4.5" />
                          </span>

                          <span className="min-w-0 flex-1">
                            <span className="block text-[14px] font-medium text-primary">
                              {item.title}
                            </span>

                            <span className="mt-0.5 block truncate text-[12px] text-muted">
                              {item.description}
                            </span>
                          </span>

                          <ArrowUpRight
                            className={`size-4 shrink-0 text-muted transition-all ${selected
                              ? "translate-x-0 opacity-100"
                              : "-translate-x-1 opacity-0"
                              }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </section>
              )}

              {/* Projects */}
              {filteredProjects.length > 0 && (
                <section className="mt-5">
                  <div className="px-3 pb-2 pt-2 text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                    Projects
                  </div>

                  <div className="space-y-1">
                    {filteredProjects.map((item) => {
                      const Icon = item.icon;
                      const index = allResults.indexOf(item);
                      const selected =
                        selectedIndex === index;

                      return (
                        <button
                          key={item.id}
                          type="button"
                          onMouseEnter={() =>
                            setSelectedIndex(index)
                          }
                          onClick={() =>
                            handleItemClick(item)
                          }
                          className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors ${selected
                            ? "bg-surface"
                            : "hover:bg-surface/70"
                            }`}
                        >
                          <span className="flex size-9 shrink-0 items-center justify-center text-muted">
                            <Icon className="size-4.5" />
                          </span>

                          <span className="min-w-0 flex-1">
                            <span className="block text-[14px] font-medium text-primary">
                              {item.title}
                            </span>

                            <span className="mt-0.5 block truncate text-[12px] text-muted">
                              {item.description}
                            </span>
                          </span>

                          <ArrowUpRight
                            className={`size-4 shrink-0 text-muted transition-all ${selected
                              ? "translate-x-0 opacity-100"
                              : "-translate-x-1 opacity-0"
                              }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </section>
              )}

              {allResults.length === 0 && (
                <div className="flex h-32 items-center justify-center text-sm text-muted">
                  No results found.
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-dashed border-border px-5 py-3 text-[11px] text-muted">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="rounded border border-border px-1.5 py-0.5">
                    ↑↓
                  </span>
                  navigate
                </span>

                <span className="flex items-center gap-1.5">
                  <span className="flex items-center gap-1 rounded border border-border px-1.5 py-0.5">
                    <CornerDownLeft className="size-3" />
                  </span>
                  select
                </span>
              </div>

              <span className="flex items-center gap-1.5">
                <span className="rounded border border-border px-1.5 py-0.5">
                  ESC
                </span>
                close
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}