"use client";

import { useTheme } from "next-themes";
import React, { useCallback, useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateStyles = useCallback((css: string) => {
    if (typeof window === "undefined") return;
    const styleId = "theme-transition-styles";
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;

    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }
    styleElement.textContent = css;
  }, []);

  const toggleTheme = useCallback(() => {
    const isDark = resolvedTheme === "dark";

    const animationCss = `
      ::view-transition-group(root) {
        animation-duration: 0.7s;
        animation-timing-function: cubic-bezier(0.87, 0, 0.13, 1);
      }
      
      ::view-transition-new(root) {
        animation-name: reveal-light-top-right-blur;
        filter: blur(2px);
      }

      ::view-transition-old(root),
      .dark::view-transition-old(root) {
        animation: none;
        z-index: -1;
      }
      .dark::view-transition-new(root) {
        animation-name: reveal-dark-top-right-blur;
        filter: blur(2px);
      }

      @keyframes reveal-dark-top-right-blur {
        from {
          clip-path: circle(0% at 100% 0%);
          filter: blur(8px);
        }
        50% { filter: blur(4px); }
        to {
          clip-path: circle(150.0% at 100% 0%);
          filter: blur(0px);
        }
      }

      @keyframes reveal-light-top-right-blur {
        from {
           clip-path: circle(0% at 100% 0%);
           filter: blur(8px);
        }
        50% { filter: blur(4px); }
        to {
          clip-path: circle(150.0% at 100% 0%);
          filter: blur(0px);
        }
      }
    `;

    updateStyles(animationCss);

    const switchTheme = () => {
      setTheme(isDark ? "light" : "dark");
    };

    if (!document.startViewTransition) {
      switchTheme();
      return;
    }

    document.startViewTransition(switchTheme);
  }, [resolvedTheme, setTheme, updateStyles]);

  if (!mounted) {
    return <div className="size-6 ml-2" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      className="text-muted hover:text-foreground transition-colors cursor-pointer flex items-center justify-center size-6"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}