"use client";

import Link from "next/link";
import { Menu, Search, Command, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Instrument_Serif, Inter } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { CommandPalette } from "@/components/ui/command-palette";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full bg-background/80 backdrop-blur-md border-b border-dashed border-border transition-colors">
        <div className="relative flex items-center justify-between w-full max-w-[800px] h-12 px-3 pt-1 border-x border-dashed border-border">

          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`${instrumentSerif.className} text-3xl text-primary cursor-pointer hover:opacity-80 transition-opacity`}
          >
            Sahil
          </Link>

          {/* Desktop Navigation */}
          <nav
            className={`${inter.className} hidden md:flex items-center gap-5 text-sm`}
            onMouseLeave={() => setHoveredPath(null)}
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onMouseEnter={() => setHoveredPath(item.path)}
                className={`relative py-1 px-1 transition-colors ${isActive(item.path) ? 'text-primary font-semibold' : 'text-muted hover:text-primary'}`}
              >
                <span>{item.name}</span>
                {(hoveredPath === item.path || (hoveredPath === null && isActive(item.path))) && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-1 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            <button
              onClick={() => setIsCommandOpen(true)}
              className="ml-1 flex items-center gap-2 px-2.5 py-1 text-muted bg-surface border border-border rounded-md hover:text-primary transition-colors cursor-pointer"
            >
              <Search size={14} />
              <span className="flex items-center gap-0.5 text-[11px] font-medium opacity-70">
                <Command size={11} />K
              </span>
            </button>

            <div className="ml-2">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setIsCommandOpen(true)}
              className="text-muted hover:text-primary transition-colors"
              aria-label="Open Search"
            >
              <Search size={18} />
            </button>

            <ThemeToggle />

            {/* Vertical Separator */}
            <div className="w-px h-4 bg-border"></div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-muted hover:text-primary transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Dropdown Popover */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`${inter.className} absolute top-full right-3 mt-2 w-48 rounded-2xl border border-border bg-surface p-2 shadow-xl flex flex-col gap-1 md:hidden`}
              >
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm transition-colors ${isActive(item.path)
                        ? "bg-neutral-200/50 dark:bg-neutral-800/50 text-primary font-medium"
                        : "text-muted hover:bg-neutral-100 dark:hover:bg-neutral-800/30 hover:text-primary"
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </header>

      <CommandPalette isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />
    </>
  );
}