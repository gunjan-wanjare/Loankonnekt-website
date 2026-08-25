"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className={cn(
        "relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#434657] transition-colors hover:text-[#0047FF] dark:bg-white/5 dark:text-[#CBD5E1] dark:hover:text-white",
        className,
      )}
    >
      <Moon
        size={18}
        strokeWidth={2.2}
        className={cn(
          "absolute transition-all duration-300",
          isDark ? "-rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
        )}
      />
      <Sun
        size={18}
        strokeWidth={2.2}
        className={cn(
          "absolute transition-all duration-300",
          isDark ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0",
        )}
      />
    </button>
  );
}
