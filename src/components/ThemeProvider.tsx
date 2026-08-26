"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

export const THEME_STORAGE_KEY = "theme";

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Cross-brand domains (loankonnekt.com, lawvix.com, crediple.com, ...) can't share
 * localStorage/cookies — attach the current theme as a query param on outbound
 * links to another brand's site so it lands in dark/light mode already matched.
 * The receiving site's anti-flash script (see layout.tsx) reads it back off.
 */
export function withThemeParam(href: string, theme: Theme): string {
  try {
    const url = new URL(href);
    url.searchParams.set("theme", theme);
    return url.toString();
  } catch {
    return href;
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  // Sync React state from the attribute the no-flash inline script (in layout.tsx)
  // already set on <html> before hydration — never writes here, only reads.
  useEffect(() => {
    const stored = document.documentElement.getAttribute("data-theme");
    if (stored === "dark") setTheme("dark");
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        // storage unavailable (private browsing, etc.) — theme still works for this session
      }
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
