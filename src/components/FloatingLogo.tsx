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
import { motion } from "framer-motion";
import { site } from "@/content";

const NAV_H = 72;
const LOGO_HERO = 72;
const ANCHOR_ID = "yaka-logo-anchor";

type Rect = { x: number; y: number; width: number; height: number };
type Phase = "loading" | "flying" | "ready";

type FloatingLogoProps = {
  phase: Phase;
  onIntroComplete: () => void;
};

function readAnchor(): Rect | null {
  const el = document.getElementById(ANCHOR_ID);
  if (!el) return null;
  const r = el.getBoundingClientRect();
  // Prefer the icon box only (first child visual) for a clean land
  const icon = el.querySelector("[data-yaka-icon]");
  if (icon) {
    const ir = icon.getBoundingClientRect();
    return { x: ir.left, y: ir.top, width: ir.width, height: ir.height };
  }
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
  const size = LOGO_HERO * 1.35;
  return {
    x: vw / 2 - size / 2,
    y: vh / 2 - size / 2,
    width: size,
    height: size,
  };
}

/**
 * Crediple-style intro only: fly YAKA from center → hero, then hand off.
 * Scroll handoff is done by Hero fade-out + Header fade-in (no second floating copy).
 */
export function FloatingLogo({ phase, onIntroComplete }: FloatingLogoProps) {
  const [vw, setVw] = useState(0);
  const [vh, setVh] = useState(0);
  const [heroRect, setHeroRect] = useState<Rect | null>(null);
  const [landed, setLanded] = useState(() => phase === "ready");
  const completeRef = useRef(phase === "ready");

  const measure = useCallback(() => {
    if (typeof window === "undefined") return;
    setVw(window.innerWidth);
    setVh(window.innerHeight);
    setHeroRect(readAnchor() ?? fallbackHero(window.innerWidth));
  }, []);

  useLayoutEffect(() => {
    measure();
    window.addEventListener("resize", measure, { passive: true });
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  useEffect(() => {
    if (phase !== "flying") return;
    measure();
    const t = setTimeout(measure, 80);
    return () => clearTimeout(t);
  }, [phase, measure]);

  const handleLand = useCallback(() => {
    if (completeRef.current) return;
    completeRef.current = true;
    setLanded(true);
    onIntroComplete();
  }, [onIntroComplete]);

  // Skip intro flight on mobile — Hero static mark takes over
  useEffect(() => {
    if (vw > 0 && vw < 768 && phase === "flying") {
      handleLand();
    }
  }, [vw, phase, handleLand]);

  if (vw < 768 || !heroRect || vh === 0) return null;

  // Only render while flying — never during ready (avoids double header icon)
  if (phase === "flying" && !landed) {
    const center = viewportCenter(vw, vh);
    const landW = Math.max(heroRect.width, 40);
    const landH = Math.max(heroRect.height, 40);

    return (
      <motion.div
        className="pointer-events-none fixed z-[55]"
        initial={{
          left: center.x,
          top: center.y,
          width: center.width,
          height: center.height,
          opacity: 0.9,
        }}
        animate={{
          left: heroRect.x,
          top: heroRect.y,
          width: landW,
          height: landH,
          opacity: 1,
        }}
        transition={{
          // Top resolves much faster than left: the mark rises clear of the
          // hero copy/stats first, then glides across near header height —
          // an arc instead of a straight diagonal cutting through the text.
          top: { type: "spring", stiffness: 170, damping: 22, mass: 0.7 },
          left: { type: "spring", stiffness: 80, damping: 18, mass: 1 },
          width: { type: "spring", stiffness: 90, damping: 18, mass: 1 },
          height: { type: "spring", stiffness: 90, damping: 18, mass: 1 },
          opacity: { duration: 0.3 },
        }}
        onAnimationComplete={handleLand}
      >
        <Image
          src={site.yaka.lightSrc}
          alt=""
          aria-hidden
          fill
          priority
          quality={100}
          unoptimized
          sizes="240px"
          className="object-contain dark:hidden"
        />
        <Image
          src={site.yaka.headerDarkSrc}
          alt=""
          aria-hidden
          fill
          priority
          quality={100}
          unoptimized
          sizes="240px"
          className="hidden object-contain dark:block"
        />
      </motion.div>
    );
  }

  return null;
}

const IntroContext = createContext<{ phase: Phase }>({ phase: "ready" });
export const useIntroPhase = () => useContext(IntroContext);
export { IntroContext };
