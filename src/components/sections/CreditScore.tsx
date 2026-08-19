"use client";

import { ArrowRight, Lock, Shield, UserRound } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { creditScore } from "@/content";
import { slideInLeft, slideInRight } from "@/lib/motion";

const badgeIcons = {
  secure: Shield,
  eligibility: UserRound,
} as const;

function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy - r * Math.sin(rad),
  };
}

function CreditGauge() {
  const { score, min, max, status, updated } = creditScore.gauge;
  const cx = 160;
  const cy = 148;
  const r = 118;
  const startAngle = 208;
  const endAngle = -28;
  const t = (score - min) / (max - min);
  const scoreAngle = startAngle + t * (endAngle - startAngle);

  const trackStart = polar(cx, cy, r, startAngle);
  const trackEnd = polar(cx, cy, r, endAngle);
  const scorePos = polar(cx, cy, r, scoreAngle);
  const pointerOuter = polar(cx, cy, r + 14, scoreAngle);
  const pointerLeft = polar(cx, cy, r - 3, scoreAngle + 7);
  const pointerRight = polar(cx, cy, r - 3, scoreAngle - 7);
  const minLabel = polar(cx, cy, r + 22, startAngle);
  const maxLabel = polar(cx, cy, r + 22, endAngle);

  return (
    <div className="relative mx-auto w-full max-w-[22rem]">
      <svg viewBox="0 0 320 230" className="h-auto w-full" aria-hidden>
        <defs>
          <linearGradient id="credit-gauge-fill" x1="0%" y1="40%" x2="100%" y2="40%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="55%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#0047FF" />
          </linearGradient>
        </defs>

        <path
          d={`M ${trackStart.x} ${trackStart.y} A ${r} ${r} 0 1 1 ${trackEnd.x} ${trackEnd.y}`}
          fill="none"
          stroke="#0B1220"
          strokeWidth="18"
          strokeLinecap="round"
        />
        <path
          d={`M ${trackStart.x} ${trackStart.y} A ${r} ${r} 0 0 1 ${scorePos.x} ${scorePos.y}`}
          fill="none"
          stroke="url(#credit-gauge-fill)"
          strokeWidth="18"
          strokeLinecap="round"
        />
        <polygon
          points={`${pointerOuter.x},${pointerOuter.y} ${pointerLeft.x},${pointerLeft.y} ${pointerRight.x},${pointerRight.y}`}
          fill="#93C5FD"
        />
        <text x={minLabel.x} y={minLabel.y + 4} textAnchor="middle" fill="#94A3B8" fontSize="12">
          {min}
        </text>
        <text x={maxLabel.x} y={maxLabel.y + 4} textAnchor="middle" fill="#94A3B8" fontSize="12">
          {max}
        </text>
      </svg>

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center pt-8">
        <p className="text-[4.25rem] font-extrabold leading-none tracking-tight text-white sm:text-[4.75rem]">
          {score}
        </p>
        <span className="mt-3 rounded-full bg-[#22C55E] px-3.5 py-1 text-[11px] font-bold tracking-[0.14em] text-white">
          {status}
        </span>
        <p className="mt-2 text-xs text-[#94A3B8]">{updated}</p>
      </div>
    </div>
  );
}

export function CreditScore() {
  return (
    <section id={creditScore.id} className="bg-white py-8 sm:py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-[#051325] sm:rounded-[2.25rem] lg:rounded-[2.5rem]">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-6 top-1/2 h-[22rem] w-[22rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,71,255,0.18),transparent_68%)]"
          />

          <div className="relative grid items-center gap-10 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 lg:px-14 lg:py-16 xl:px-16">
            <Reveal variants={slideInLeft}>
              <h2 className="max-w-2xl text-[1.85rem] font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-[2.65rem] lg:text-[2.85rem]">
                {creditScore.headline}
              </h2>
              <p className="mt-4 max-w-xl text-sm font-normal leading-relaxed text-[#94A3B8] sm:text-base">
                {creditScore.subcopy}
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {creditScore.badges.map((badge) => {
                  const Icon = badgeIcons[badge.key];
                  return (
                    <span
                      key={badge.key}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-[12px] font-medium text-[#E2E8F0]"
                    >
                      <Icon size={14} strokeWidth={2.2} />
                      {badge.label}
                    </span>
                  );
                })}
              </div>

              <Button
                href={creditScore.cta.href}
                variant="primary"
                size="lg"
                icon={<ArrowRight size={16} />}
                iconPosition="right"
                className="mt-7 min-h-12 rounded-[16px] px-6 text-sm font-semibold shadow-none"
              >
                {creditScore.cta.label}
              </Button>

              <p className="mt-4 flex items-center gap-1.5 text-[12px] font-normal text-[#94A3B8]">
                <Lock size={12} strokeWidth={2.25} />
                <span>
                  {creditScore.trust.prefix}{" "}
                  <span className="font-semibold text-[#CBD5E1]">
                    {creditScore.trust.brand}
                  </span>{" "}
                  • {creditScore.trust.suffix}
                </span>
              </p>
            </Reveal>

            <Reveal variants={slideInRight} className="relative flex justify-center lg:justify-end">
              <CreditGauge />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
