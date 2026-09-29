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
        <div className="relative flex items-center justify-between w-full max-w-200 h-12 px-3 pt-1 border-x border-dashed border-border">
          
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
                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 size-1 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            
            <button 
              onClick={() => setIsCommandOpen(true)}
              className="ml-1 flex items-center gap-4 px-2.5 py-1.5 text-muted bg-surface border border-border rounded-[10px] shadow-sm hover:text-primary hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-all cursor-pointer"
            >
              <Search size={15} />
              <div className="flex items-center gap-0.5 text-[12px] font-medium opacity-60 font-sans tracking-wide">
                <Command size={12} />K
              </div>
            </button>
            
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-2">
            
            <AnimatePresence>
              {!isMobileMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, width: 0 }} 
                  animate={{ opacity: 1, width: "auto" }} 
                  exit={{ opacity: 0, width: 0 }} 
                  className="flex items-center gap-2 overflow-hidden"
                >
                  <button onClick={() => setIsCommandOpen(true)} className="text-muted hover:text-primary transition-colors">
                    <Search size={16} />
                  </button>
                  <ThemeToggle />
                  <div className="w-px h-4 bg-border mx-1"></div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              layout
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className={`flex items-center bg-surface border border-border rounded-full h-8 overflow-hidden transition-colors ${isMobileMenuOpen ? 'px-1 shadow-sm' : ''}`}
            >
              <AnimatePresence mode="wait">
                {!isMobileMenuOpen ? (
                  <motion.button
                    key="closed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="flex items-center justify-center w-8 h-full text-muted hover:text-primary transition-colors"
                  >
                    <Menu size={16} />
                  </motion.button>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`${inter.className} flex items-center h-full gap-1`}
                  >
                    {NAV_ITEMS.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`px-2 py-1 text-[11px] font-medium transition-colors whitespace-nowrap rounded-full ${
                          isActive(item.path)
                            ? "bg-neutral-200/60 dark:bg-neutral-800/60 text-primary"
                            : "text-muted hover:text-primary"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="w-px h-3 bg-border mx-1" />
                    <button 
                      onClick={() => setIsMobileMenuOpen(false)} 
                      className="px-1 text-muted hover:text-primary transition-colors flex items-center justify-center"
                    >
                      <X size={14} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </header>

      <CommandPalette isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />
    </>
  );
}