"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { useMotionValue, useSpring, type MotionValue } from "framer-motion";

// Scroll distance (px) over which the hero mark shrinks into the nav slot.
const TRANSITION_PX = 160;

const ScrollHandoffContext = createContext<MotionValue<number> | null>(null);

/**
 * Tracks how far the hero YAKA mark has scrolled toward the header's nav
 * slot, as a 0→1 progress value. 0 = still resting in the hero corner,
 * 1 = fully landed in the nav bar. Measured from the real DOM elements
 * (#yaka-logo-anchor, header height) rather than hardcoded pixel maths,
 * so it stays correct across breakpoints and content changes.
 */
export function ScrollHandoffProvider({ children }: { children: React.ReactNode }) {
  const raw = useMotionValue(0);
  const progress = useSpring(raw, { stiffness: 170, damping: 26, mass: 0.8 });
  const startScrollY = useRef<number | null>(null);

  const measureStart = useCallback(() => {
    const hero = document.getElementById("yaka-logo-anchor");
    const header = document.querySelector("header");
    if (!hero || !header) {
      startScrollY.current = null;
      return;
    }
    const icon = hero.querySelector("[data-yaka-icon]");
    const heroTop = (icon ?? hero).getBoundingClientRect().top;
    const headerH = header.getBoundingClientRect().height;
    // Document-space scrollY at which the hero mark's top would sit right
    // at the header's bottom edge — the natural point to start the handoff.
    startScrollY.current = window.scrollY + heroTop - headerH;
  }, []);

  useLayoutEffect(() => {
    measureStart();
    const retry = setTimeout(measureStart, 100); // hero may mount a tick late
    window.addEventListener("resize", measureStart, { passive: true });
    return () => {
      clearTimeout(retry);
      window.removeEventListener("resize", measureStart);
    };
  }, [measureStart]);

  useEffect(() => {
    const onScroll = () => {
      if (startScrollY.current == null) {
        measureStart();
        if (startScrollY.current == null) return;
      }
      const p = Math.min(
        1,
        Math.max(0, (window.scrollY - startScrollY.current) / TRANSITION_PX),
      );
      raw.set(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [raw, measureStart]);

  return (
    <ScrollHandoffContext.Provider value={progress}>{children}</ScrollHandoffContext.Provider>
  );
}

export function useScrollHandoffProgress() {
  const ctx = useContext(ScrollHandoffContext);
  if (!ctx) {
    throw new Error("useScrollHandoffProgress must be used within ScrollHandoffProvider");
  }
  return ctx;
}
