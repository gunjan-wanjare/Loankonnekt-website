"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue, useReducedMotion } from "framer-motion";
import { easeOutExpo } from "@/lib/motion";

type GaugeData = {
  score: number;
  min: number;
  max: number;
  status: string;
  updated: string;
};

// Geometry below is measured directly off the Figma export
// (public/home/Gauge-Canvas.png, 377x377) rather than eyeballed, so the
// redraw matches it at any score/min/max instead of just the one baked demo value.
const SIZE = 240;
const CENTER = SIZE / 2;
const RADIUS = 92; // ring centerline, measured ratio 0.766 * CENTER
const STROKE = 11; // measured ratio 0.093 * CENTER
const GAP_DEG = 126; // bottom opening, measured (Figma sweeps 234° of 360°)
const START_ANGLE = 90 + GAP_DEG / 2;
const SWEEP_DEG = 360 - GAP_DEG;

const GRADIENT_FROM = "#0050FF";
const GRADIENT_TO = "#00D1FF";

const NEEDLE_COLOR = "#00D1FF";
// Ring's inner edge — the needle's TIP is pinned here (measured directly off
// the Figma export: the needle sits entirely inside this radius, with only
// its point touching it — it does not span across/cover the ring's stroke).
const NEEDLE_TIP_RADIUS = RADIUS - STROKE / 2;
const NEEDLE_BASE_WIDTH = 11;
const NEEDLE_LENGTH = 12; // tip (pinned at inner edge) -> base, receding inward toward center

/**
 * Triangle vertices for a needle pinned at `angleDeg` on the ring's inner
 * edge — tip touches that boundary, base recedes inward toward the gauge
 * center, so the shape never overlaps/covers the ring's own stroke.
 * Computed directly (no separate asset, no nested rotate/translate) so it
 * can never drift out of sync with the arc it's marking.
 */
function needlePoints(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  const dirX = Math.cos(rad);
  const dirY = Math.sin(rad);
  const perpX = -dirY;
  const perpY = dirX;

  const tipX = CENTER + NEEDLE_TIP_RADIUS * dirX;
  const tipY = CENTER + NEEDLE_TIP_RADIUS * dirY;
  const baseR = NEEDLE_TIP_RADIUS - NEEDLE_LENGTH;
  const baseX = CENTER + baseR * dirX;
  const baseY = CENTER + baseR * dirY;
  const halfW = NEEDLE_BASE_WIDTH / 2;

  return [
    `${tipX},${tipY}`,
    `${baseX + perpX * halfW},${baseY + perpY * halfW}`,
    `${baseX - perpX * halfW},${baseY - perpY * halfW}`,
  ].join(" ");
}

const statusColors: Record<string, { bg: string; text: string }> = {
  POOR: { bg: "bg-[#EF4444]", text: "text-white" },
  FAIR: { bg: "bg-[#F59E0B]", text: "text-white" },
  GOOD: { bg: "bg-[#10B981]", text: "text-white" },
  EXCELLENT: { bg: "bg-[#3B82F6]", text: "text-white" },
};

function polarToCartesian(angleDeg: number, radius: number = RADIUS) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CENTER + radius * Math.cos(rad), y: CENTER + radius * Math.sin(rad) };
}

function describeArc(startDeg: number, endDeg: number) {
  const start = polarToCartesian(startDeg);
  const end = polarToCartesian(endDeg);
  const largeArc = Math.abs(endDeg - startDeg) > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${RADIUS} ${RADIUS} 0 ${largeArc} 1 ${end.x} ${end.y}`;
}

/**
 * Data-driven score gauge — arc fill, needle position, and the animated
 * count-up all derive from `gauge`, so a different score/min/max/status
 * redraws correctly instead of relying on a fixed illustration.
 */
export function CreditScoreGauge({ gauge }: { gauge: GaugeData }) {
  const { score, min, max, status, updated } = gauge;
  const percent = Math.min(1, Math.max(0, (score - min) / (max - min)));
  const trackPath = describeArc(START_ANGLE, START_ANGLE + SWEEP_DEG);
  const colors = statusColors[status] ?? statusColors.GOOD;

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const prefersReducedMotion = useReducedMotion();
  const progress = useMotionValue(0);
  const [display, setDisplay] = useState(min);
  // Plain React state, updated every animation frame via onUpdate below —
  // deliberately not a MotionValue bound through the `points` prop, since
  // that binding isn't part of Framer Motion's guaranteed SVG attribute set
  // (unlike `style`/`pathLength`) and rendered as a garbled shape instead of
  // real coordinates.
  const [needleShape, setNeedleShape] = useState(() => needlePoints(START_ANGLE));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(progress, percent, {
      duration: prefersReducedMotion ? 0 : 1.9,
      ease: easeOutExpo,
      delay: prefersReducedMotion ? 0 : 0.35,
      onUpdate: (v) => {
        setDisplay(Math.round(min + v * (max - min)));
        setNeedleShape(needlePoints(START_ANGLE + v * SWEEP_DEG));
      },
    });
    return () => controls.stop();
  }, [inView, progress, percent, min, max, prefersReducedMotion]);

  const minLabel = polarToCartesian(START_ANGLE, RADIUS + 26);
  const maxLabel = polarToCartesian(START_ANGLE + SWEEP_DEG, RADIUS + 26);

  return (
    <div ref={ref} className="relative flex h-[16.5rem] w-[16.5rem] items-center justify-center sm:h-[18rem] sm:w-[18rem]">
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="h-full w-full overflow-visible"
        role="img"
        aria-label={`Credit score ${score} out of ${max} — ${status}`}
      >
        <defs>
          <linearGradient id="gaugeFillGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={GRADIENT_FROM} />
            <stop offset="100%" stopColor={GRADIENT_TO} />
          </linearGradient>
        </defs>

        <path d={trackPath} fill="none" stroke="#000000" strokeWidth={STROKE} strokeLinecap="round" />

        <motion.path
          d={trackPath}
          fill="none"
          stroke="url(#gaugeFillGradient)"
          strokeWidth={STROKE}
          strokeLinecap="round"
          style={{ pathLength: progress }}
        />

        <polygon points={needleShape} fill={NEEDLE_COLOR} />

        <text
          x={minLabel.x}
          y={minLabel.y}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-[#94A3B8] text-[13px] font-medium"
        >
          {min}
        </text>
        <text
          x={maxLabel.x}
          y={maxLabel.y}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-[#94A3B8] text-[13px] font-medium"
        >
          {max}
        </text>
      </svg>

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2">
        <span className="text-[3.25rem] font-extrabold leading-none tracking-tight text-[#F8FAFC] sm:text-[3.75rem]">
          {display}
        </span>
        <span
          className={`inline-flex items-center rounded-full px-3.5 py-1 text-[11px] font-bold tracking-wide ${colors.bg} ${colors.text}`}
        >
          {status}
        </span>
        <span className="text-[11px] font-normal text-[#94A3B8]">{updated}</span>
      </div>
    </div>
  );
}
