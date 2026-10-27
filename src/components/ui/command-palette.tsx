
"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  ArrowUpRight,
  CornerDownLeft,
} from "lucide-react";
import { Inter } from "next/font/google";

import {
  navigationItems,
  projectItems,
  type CommandItem,
} from "@/data/command-palette";

const inter = Inter({
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
  const selectedItemRef = useRef<HTMLButtonElement>(null);

  const filteredNavigation = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) return navigationItems;

    return navigationItems.filter((item) =>
      `${item.title} ${item.description}`
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [query]);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) return projectItems;

    return projectItems.filter((item) =>
      `${item.title} ${item.description}`
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [query]);

  const allResults = useMemo(
    () => [...filteredNavigation, ...filteredProjects],
    [filteredNavigation, filteredProjects],
  );

  const handleItemClick = useCallback(
    (item: CommandItem) => {
      onClose();

      if (item.href.startsWith("#")) {
        window.setTimeout(() => {
          document
            .querySelector(item.href)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 50);

        return;
      }

      window.location.assign(item.href);
    },
    [onClose],
  );

  useEffect(() => {
    if (!isOpen) return;

    const timeout = window.setTimeout(() => {
      setQuery("");
      setSelectedIndex(0);
      inputRef.current?.focus();
    }, 50);

    return () => window.clearTimeout(timeout);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();

        setSelectedIndex((current) =>
          Math.min(current + 1, Math.max(allResults.length - 1, 0)),
        );
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setSelectedIndex((current) => Math.max(current - 1, 0));
      }

      if (event.key === "Enter") {
        event.preventDefault();

        const item = allResults[selectedIndex];

        if (item) {
          handleItemClick(item);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
}, [isOpen, selectedIndex, allResults, onClose, handleItemClick]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    selectedItemRef.current?.scrollIntoView({
      block: "nearest",
      behavior: "smooth",
    });
  }, [selectedIndex]);


  const renderItem = (item: CommandItem, index: number) => {
    const Icon = item.icon;
    const selected = selectedIndex === index;

    return (
      <button
        key={item.id}
        ref={selected ? selectedItemRef : null}
        type="button"
        onMouseEnter={() => setSelectedIndex(index)}
        onFocus={() => setSelectedIndex(index)}
        onClick={() => handleItemClick(item)}
        aria-current={selected ? "true" : undefined}
        className={`group flex w-full min-w-0 items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors duration-150 sm:gap-3 sm:px-3 ${selected
          ? "bg-surface"
          : "hover:bg-surface/70"
          }`}
      >
        <span className="flex size-8 shrink-0 items-center justify-center text-muted">
          <Icon className="size-4" />
        </span>

        <span className="min-w-0 flex-1">
          <span className="block truncate text-[13px] font-medium text-primary sm:text-sm">
            {item.title}
          </span>

          <span className="mt-0.5 block truncate text-[11px] text-muted sm:text-xs">
            {item.description}
          </span>
        </span>

        <ArrowUpRight
          className={`size-3.5 shrink-0 text-muted transition-all ${selected
            ? "translate-x-0 opacity-100"
            : "-translate-x-1 opacity-0"
            }`}
        />
      </button>
    );
  };

  return (
    <>
      <style jsx global>{`
        .command-palette-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
        }

        .command-palette-scroll::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }
      `}</style>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`${inter.className} fixed inset-0 z-60 flex items-center justify-center overflow-hidden p-3 sm:p-6`}
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
                y: -10,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -6,
                scale: 0.98,
              }}
              transition={{
                type: "spring",
                stiffness: 420,
                damping: 32,
              }}
              className="relative flex max-h-[80dvh] w-full max-w-140 flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
            >
              {/* Search */}
              <div className="flex h-14 shrink-0 items-center gap-2.5 border-b border-dashed border-border px-3.5 sm:gap-3 sm:px-4">
                <Search className="size-4 shrink-0 text-muted sm:size-4.5" />

                <input
                  ref={inputRef}
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setSelectedIndex(0);
                  }}
                  placeholder="Search pages and projects..."
                  aria-label="Search commands"
                  className="h-full min-w-0 flex-1 bg-transparent text-sm text-primary outline-none placeholder:text-muted"
                />

                <button
                  type="button"
                  onClick={onClose}
                  className="shrink-0 rounded-md border border-border px-1.5 py-1 text-[10px] text-muted transition-colors hover:bg-surface hover:text-primary sm:px-2 sm:text-[11px]"
                >
                  ESC
                </button>
              </div>

              {/* Scrollable results, invisible scrollbar */}
              <div
                className="command-palette-scroll min-h-0 flex-1 overflow-y-auto overscroll-contain p-2 sm:p-2.5"
                onWheel={(event) => event.stopPropagation()}
              >
                {/* Pages */}
                {filteredNavigation.length > 0 && (
                  <section>
                    <div className="px-2.5 pb-1.5 pt-2 text-[10px] font-medium text-muted sm:text-[11px]">
                      Pages
                    </div>

                    <div className="space-y-0.5">
                      {filteredNavigation.map((item) =>
                        renderItem(item, allResults.indexOf(item)),
                      )}
                    </div>
                  </section>
                )}

                {/* Projects */}
                {filteredProjects.length > 0 && (
                  <section className="mt-3">
                    <div className="px-2.5 pb-1.5 pt-1 text-[10px] font-medium text-muted sm:text-[11px]">
                      Projects
                    </div>

                    <div className="space-y-0.5">
                      {filteredProjects.map((item) =>
                        renderItem(item, allResults.indexOf(item)),
                      )}
                    </div>
                  </section>
                )}

                {/* Empty state */}
                {allResults.length === 0 && (
                  <div className="flex min-h-24 items-center justify-center px-4 text-center text-sm text-muted">
                    No results found for &ldquo;{query}&rdquo;.
                  </div>
                )}
              </div>

              {/* Keyboard hints */}
              <div className="flex shrink-0 items-center justify-between gap-2 border-t border-dashed border-border px-3 py-2.5 text-[10px] text-muted sm:px-4 sm:text-[11px]">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="flex items-center gap-1.5">
                    <kbd className="rounded border border-border px-1.5 py-0.5">
                      ↑↓
                    </kbd>
                    <span className="hidden xs:inline">navigate</span>
                  </span>

                  <span className="flex items-center gap-1.5">
                    <kbd className="flex items-center gap-1 rounded border border-border px-1.5 py-0.5">
                      <CornerDownLeft className="size-3" />
                    </kbd>
                    <span className="hidden xs:inline">select</span>
                  </span>
                </div>

                <span className="flex items-center gap-1.5">
                  <kbd className="rounded border border-border px-1.5 py-0.5">
                    ESC
                  </kbd>
                  close
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
