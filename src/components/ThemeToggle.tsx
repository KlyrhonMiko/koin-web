"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className={className || "group relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-surface/50 border border-border/50 backdrop-blur-sm transition-all cursor-pointer"}>
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!document.startViewTransition) {
      setTheme(isDark ? "light" : "dark");
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    let x = Math.round(rect.left + rect.width / 2);
    let y = Math.round(rect.top + rect.height / 2);

    // Fallback: If coordinates evaluate to near (0,0), fallback to top-right corner where toggler lives
    if (x <= 5 && y <= 5) {
      x = Math.round(window.innerWidth - 40);
      y = 40;
    }

    const endRadius = Math.ceil(
      Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      )
    );

    document.documentElement.style.setProperty("--theme-x", `${x}px`);
    document.documentElement.style.setProperty("--theme-y", `${y}px`);
    document.documentElement.style.setProperty("--theme-r", `${endRadius}px`);
    document.documentElement.classList.add("theme-transition");

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(isDark ? "light" : "dark");
      });
    });

    transition.finished.then(() => {
      document.documentElement.classList.remove("theme-transition");
      document.documentElement.style.removeProperty("--theme-x");
      document.documentElement.style.removeProperty("--theme-y");
      document.documentElement.style.removeProperty("--theme-r");
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className={className || "group relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-surface/80 border border-border/60 text-foreground backdrop-blur-md transition-all duration-300 hover:bg-surface-elevated hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 hover:-translate-y-0.5 focus:outline-none active:scale-95 cursor-pointer"}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <Sun size={18} className="text-foreground group-hover:text-primary transition-colors duration-300" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <Moon size={18} className="text-foreground group-hover:text-primary transition-colors duration-300" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
