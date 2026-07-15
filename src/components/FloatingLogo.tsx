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
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { site } from "@/content";

const NAV_H = 72;
const SCROLL_START = 40;
const SCROLL_END = 220;
const LOGO_HERO = 72;
const LOGO_NAV = 22;
const ANCHOR_ID = "yaka-logo-anchor";
const NAV_ANCHOR_ID = "yaka-nav-anchor";

type Rect = { x: number; y: number; width: number; height: number };
type Phase = "loading" | "flying" | "ready";

type FloatingLogoProps = {
  phase: Phase;
  onIntroComplete: () => void;
};

function readRect(id: string): Rect | null {
  const el = document.getElementById(id);
  if (!el) return null;
  const r = el.getBoundingClientRect();
  return { x: r.left, y: r.top, width: r.width, height: r.height };
}

function fallbackHero(vw: number): Rect {
  const pad = vw < 900 ? 16 : 40;
  return {
    x: vw - pad - LOGO_HERO,
    y: NAV_H + 16,
    width: LOGO_HERO,
    height: LOGO_HERO,
  };
}

function viewportCenter(vw: number, vh: number): Rect {
  return {
    x: vw / 2 - LOGO_HERO / 2,
    y: vh / 2 - LOGO_HERO / 2,
    width: LOGO_HERO,
    height: LOGO_HERO,
  };
}

export function FloatingLogo({ phase, onIntroComplete }: FloatingLogoProps) {
  const [vw, setVw] = useState(0);
  const [vh, setVh] = useState(0);
  const [heroRect, setHeroRect] = useState<Rect | null>(null);
  const [navRect, setNavRect] = useState<Rect | null>(null);
  const [landed, setLanded] = useState(() => phase === "ready");
  const completeRef = useRef(phase === "ready");

  const rawProgress = useMotionValue(0);
  const scrollProgress = useSpring(rawProgress, {
    stiffness: 130,
    damping: 24,
    mass: 0.8,
  });

  const measure = useCallback(() => {
    if (typeof window === "undefined") return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    setVw(w);
    setVh(h);
    setHeroRect(readRect(ANCHOR_ID) ?? fallbackHero(w));
    setNavRect(readRect(NAV_ANCHOR_ID));
  }, []);

  useLayoutEffect(() => {
    measure();
    window.addEventListener("resize", measure, { passive: true });
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  useEffect(() => {
    if (phase !== "flying" && phase !== "ready") return;
    measure();
    const t = setTimeout(measure, 120);
    return () => clearTimeout(t);
  }, [phase, measure]);

  const navX =
    navRect?.x ??
    Math.max(0, vw - (vw < 900 ? 24 : 40) - 120 - LOGO_NAV);
  const navY = navRect?.y ?? (NAV_H - LOGO_NAV) / 2;

  const scrollX = useTransform(scrollProgress, [0, 1], [heroRect?.x ?? 0, navX]);
  const scrollY = useTransform(scrollProgress, [0, 1], [heroRect?.y ?? 0, navY]);
  const scrollSize = useTransform(scrollProgress, [0, 1], [LOGO_HERO, LOGO_NAV]);
  // Keep logo visible while flying; fade near end as header icon takes over
  const scrollOpacity = useTransform(scrollProgress, [0, 0.72, 1], [1, 1, 0]);

  useEffect(() => {
    if (!landed || phase !== "ready") return;
    const onScroll = () => {
      const p = Math.min(
        1,
        Math.max(0, (window.scrollY - SCROLL_START) / (SCROLL_END - SCROLL_START)),
      );
      rawProgress.set(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [landed, phase, rawProgress]);

  const handleLand = useCallback(() => {
    if (completeRef.current) return;
    completeRef.current = true;
    setLanded(true);
    onIntroComplete();
  }, [onIntroComplete]);

  // Skip flying on small screens
  useEffect(() => {
    if (vw > 0 && vw < 768 && phase === "flying") {
      handleLand();
    }
  }, [vw, phase, handleLand]);

  if (vw < 768 || !heroRect || vh === 0) return null;

  const logoSrc = site.yaka.softSrc;

  // Intro: fly from screen center → hero anchor
  if (phase === "flying" && !landed) {
    const center = viewportCenter(vw, vh);
    return (
      <motion.div
        className="pointer-events-none fixed z-[55]"
        initial={{
          left: center.x,
          top: center.y,
          width: LOGO_HERO * 1.35,
          height: LOGO_HERO * 1.35,
          opacity: 0.85,
        }}
        animate={{
          left: heroRect.x,
          top: heroRect.y,
          width: Math.max(heroRect.width, LOGO_HERO * 0.75),
          height: Math.max(Math.min(heroRect.height, heroRect.width), LOGO_HERO * 0.75),
          opacity: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 90,
          damping: 18,
          mass: 1,
        }}
        onAnimationComplete={handleLand}
      >
        <Image
          src={logoSrc}
          alt="A YAKA Brand"
          fill
          priority
          quality={100}
          className="object-contain"
        />
      </motion.div>
    );
  }

  // Scroll: fly from hero → header
  if (phase === "ready" && landed) {
    return (
      <motion.div
        className="pointer-events-none fixed z-[55]"
        style={{
          left: scrollX,
          top: scrollY,
          width: scrollSize,
          height: scrollSize,
          opacity: scrollOpacity,
        }}
      >
        <Image
          src={logoSrc}
          alt=""
          fill
          quality={100}
          className="object-contain"
          aria-hidden
        />
      </motion.div>
    );
  }

  return null;
}

/* —— Intro phase context for Hero —— */
const IntroContext = createContext<{ phase: Phase }>({ phase: "ready" });
export const useIntroPhase = () => useContext(IntroContext);
export { IntroContext };
