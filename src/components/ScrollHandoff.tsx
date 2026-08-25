"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { site } from "@/content";

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

type Rect = { x: number; y: number; width: number; height: number };

function readRect(id: string, iconOnly = false): Rect | null {
  const el = document.getElementById(id);
  if (!el) return null;
  const target = iconOnly ? el.querySelector("[data-yaka-icon]") ?? el : el;
  const r = target.getBoundingClientRect();
  return { x: r.left, y: r.top, width: r.width, height: r.height };
}

/**
 * The floating clone that visually travels from the hero corner into the
 * header's nav slot as the user scrolls. Mount only once the intro has
 * landed (phase "ready") and only on the home page.
 */
export function ScrollHandoffLogo() {
  const progress = useScrollHandoffProgress();
  const [heroRect, setHeroRect] = useState<Rect | null>(null);
  const [navRect, setNavRect] = useState<Rect | null>(null);

  const measure = useCallback(() => {
    setHeroRect(readRect("yaka-logo-anchor", true));
    setNavRect(readRect("yaka-nav-anchor"));
  }, []);

  useLayoutEffect(() => {
    measure();
    const retry = setTimeout(measure, 100);
    window.addEventListener("resize", measure, { passive: true });
    return () => {
      clearTimeout(retry);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const ready = !!heroRect && !!navRect;
  const hx = heroRect?.x ?? 0;
  const hy = heroRect?.y ?? 0;
  const hw = heroRect?.width ?? 0;
  const hh = heroRect?.height ?? 0;
  const nx = navRect?.x ?? 0;
  const ny = navRect?.y ?? 0;
  const nw = navRect?.width ?? 0;
  const nh = navRect?.height ?? 0;

  const x = useTransform(progress, [0, 1], [hx, nx]);
  const y = useTransform(progress, [0, 1], [hy, ny]);
  const width = useTransform(progress, [0, 1], [hw, nw]);
  const height = useTransform(progress, [0, 1], [hh, nh]);
  // Cross-fades in as it leaves the hero spot, cross-fades out once landed
  // (the real nav icon takes over from there).
  const opacity = useTransform(progress, [0, 0.08, 0.92, 1], [0, 1, 1, 0]);

  // Hero/nav anchors are Tailwind `hidden` on mobile, which collapses their
  // rect to zero — reuse that as the mobile cutoff instead of a viewport check.
  if (!ready || hw === 0 || nw === 0) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[56] hidden md:block"
      style={{ left: x, top: y, width, height, opacity }}
    >
      <Image
        src={site.yaka.headerSrc}
        alt=""
        fill
        sizes="144px"
        quality={100}
        unoptimized
        className="object-contain dark:hidden"
      />
      <Image
        src={site.yaka.headerDarkSrc}
        alt=""
        fill
        sizes="144px"
        quality={100}
        unoptimized
        className="hidden object-contain dark:block"
      />
    </motion.div>
  );
}
