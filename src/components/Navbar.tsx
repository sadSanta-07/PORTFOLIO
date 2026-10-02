"use client";

import Link from "next/link";

import { Menu, Search, Command, X } from "lucide-react";

import { usePathname } from "next/navigation";

import {
  Instrument_Serif,
  Inter,
} from "next/font/google";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

import { CommandPalette } from "@/components/ui/command-palette";

import { ThemeToggle } from "@/components/ui/theme-toggle";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

const NAV_ITEMS = [
  {
    name: "Home",
    path: "/#home",
    target: "home",
  },
  {
    name: "Projects",
    path: "/#projects",
    target: "projects",
  },
  {
    name: "Experience",
    path: "/#experience",
    target: "experience",
  },
  {
    name: "Contact",
    path: "/#contact",
    target: "contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [hoveredPath, setHoveredPath] =
    useState<string | null>(null);

  const [isCommandOpen, setIsCommandOpen] =
    useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("home");

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = [
      document.getElementById("projects"),
      document.getElementById("experience"),
    ].filter(Boolean) as HTMLElement[];

    if (window.location.hash === "#experience") {
      setActiveSection("experience");
    } else if (window.location.hash === "#projects") {
      setActiveSection("projects");
    } else {
      setActiveSection("home");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top),
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id,
          );
        }
      },
      {
        root: null,
        rootMargin: "-100px 0px -55% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) =>
      observer.observe(section),
    );

    return () => observer.disconnect();
  }, [pathname]);

  /* Command palette shortcut*/
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.metaKey || e.ctrlKey) &&
        e.key.toLowerCase() === "k"
      ) {
        e.preventDefault();
        setIsCommandOpen(true);
      }

      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
  }, []);

  const isActive = (target: string) => {
    if (target === "home") {
      return pathname === "/" &&
        activeSection === "home";
    }

    return (
      pathname === "/" &&
      activeSection === target
    );
  };

  return (
    <>
      <header
        className="
          fixed
          top-0
          left-0
          right-0
          z-50
          flex
          w-full
          justify-center
          border-b
          border-dashed
          border-border
          bg-background/80
          backdrop-blur-md
          transition-colors
        "
      >
        <div
          className="
            relative
            flex
            h-12
            w-full
            max-w-200
            items-center
            justify-between
            border-x
            border-dashed
            border-border
            px-3
            pt-1
          "
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={() => {
              setIsMobileMenuOpen(false);
            }}
            className={`
              ${instrumentSerif.className}
              cursor-pointer
              text-3xl
              text-primary
              transition-opacity
              hover:opacity-80
            `}
          >
            Sahil
          </Link>

          {/* Desktop Navigation */}
          <nav
            className={`
              ${inter.className}
              hidden
              items-center
              gap-5
              text-sm
              md:flex
            `}
            onMouseLeave={() =>
              setHoveredPath(null)
            }
          >
            {NAV_ITEMS.map((item) => {
              const active = isActive(
                item.target,
              );

              return (
                <Link
                  key={item.target}
                  href={item.path}
                  onMouseEnter={() =>
                    setHoveredPath(item.target)
                  }
                  className={`
                        relative
                        px-1
                        py-1
                        transition-colors
                        ${active ? "font-semibold text-primary" : "text-muted hover:text-primary"}`}>
                  <span>{item.name}</span>

                  {(hoveredPath ===
                    item.target ||
                    (hoveredPath === null &&
                      active)) && (
                      <motion.span
                        layoutId="nav-dot"
                        className="
                        absolute
                        -bottom-0.5
                        left-1/2
                        size-1
                        -translate-x-1/2
                        rounded-full
                        bg-primary
                      "
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                </Link>
              );
            })}

            {/* Search */}
            <button
              type="button"
              onClick={() =>
                setIsCommandOpen(true)
              }
              aria-label="Open command palette"
              className="
                ml-1
                flex
                cursor-pointer
                items-center
                gap-4
                rounded-[10px]
                border
                border-border
                bg-surface
                px-2.5
                py-1.5
                text-muted
                shadow-sm
                transition-all
                hover:bg-neutral-200/50
                hover:text-primary
                dark:hover:bg-neutral-800/50
              "
            >
              <Search size={15} />

              <div
                className="
                  flex
                  items-center
                  gap-0.5
                  font-sans
                  text-[12px]
                  font-medium
                  tracking-wide
                  opacity-60
                "
              >
                <Command size={12} />
                K
              </div>
            </button>

            {/* Theme */}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-2 md:hidden">
            <AnimatePresence>
              {!isMobileMenuOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    width: 0,
                  }}
                  animate={{
                    opacity: 1,
                    width: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    width: 0,
                  }}
                  className="
                    flex
                    items-center
                    gap-2
                    overflow-hidden
                  "
                >
                  {/* Mobile Search */}
                  <button
                    type="button"
                    onClick={() =>
                      setIsCommandOpen(true)
                    }
                    aria-label="Open command palette"
                    className="
                      text-muted
                      transition-colors
                      hover:text-primary
                    "
                  >
                    <Search size={16} />
                  </button>

                  {/* Mobile Theme */}
                  <ThemeToggle />

                  <div className="mx-1 h-4 w-px bg-border" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mobile Menu Button */}
            <motion.div
              layout
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
              className={`
                flex
                h-8
                items-center
                overflow-hidden
                rounded-full
                border
                border-border
                bg-surface
                transition-colors
                ${isMobileMenuOpen
                  ? "px-1 shadow-sm"
                  : ""
                }`}>
              <AnimatePresence mode="wait">
                {!isMobileMenuOpen ? (
                  <motion.button
                    key="closed"
                    type="button"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() =>
                      setIsMobileMenuOpen(true)
                    }
                    aria-label="Open navigation menu"
                    className="
                      flex
                      h-full
                      w-8
                      items-center
                      justify-center
                      text-muted
                      transition-colors
                      hover:text-primary
                    "
                  >
                    <Menu size={16} />
                  </motion.button>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`
                      ${inter.className}
                      flex
                      h-full
                      items-center
                      gap-1
                    `}
                  >
                    {NAV_ITEMS.map((item) => {
                      const active =
                        isActive(item.target);

                      return (
                        <Link
                          key={item.target}
                          href={item.path}
                          onClick={() => {
                            setIsMobileMenuOpen(
                              false,
                            );

                            setActiveSection(
                              item.target,
                            );
                          }}
                          className={`
                            whitespace-nowrap
                            rounded-full
                            px-2
                            py-1
                            text-[11px]
                            font-medium
                            transition-colors
                            ${active
                              ? "bg-neutral-200/60 text-primary dark:bg-neutral-800/60"
                              : "text-muted hover:text-primary"
                            }
                          `}
                        >
                          {item.name}
                        </Link>
                      );
                    })}

                    <div className="mx-1 h-3 w-px bg-border" />

                    <button
                      type="button"
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                      aria-label="Close navigation menu"
                      className="
                        flex
                        items-center
                        justify-center
                        px-1
                        text-muted
                        transition-colors
                        hover:text-primary
                      "
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

      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() =>
          setIsCommandOpen(false)
        }
      />
    </>
  );
}