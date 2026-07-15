"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Gauge,
  Settings2,
  Shield,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { YakaBrandMark } from "@/components/YakaBrandMark";
import { useIntroPhase } from "@/components/FloatingLogo";
import { hero } from "@/content";
import { easeOutExpo, heroContainer, heroItem } from "@/lib/motion";
import { cn } from "@/lib/utils";

function ScoreCard() {
  const card = hero.cards[0];
  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-4 sm:p-5">
      <div className="flex items-start justify-between gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-bright/15 text-brand-bright sm:h-9 sm:w-9 sm:rounded-xl">
          <Gauge size={16} className="sm:hidden" />
          <Gauge size={18} className="hidden sm:block" />
        </span>
        <span className="rounded-md bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-400 sm:px-2 sm:text-[11px]">
          {card.badge}
        </span>
      </div>
      <p className="mt-3 text-2xl font-bold tracking-tight text-white sm:mt-5 sm:text-3xl">
        {card.value}
      </p>
      <p className="mt-0.5 text-[11px] text-white/50 sm:mt-1 sm:text-xs">
        {card.title}
      </p>
      <div className="mt-3 sm:mt-4">
        <div className="h-1.5 overflow-hidden rounded-full bg-white/10 sm:h-2">
          <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-brand-bright to-emerald-400" />
        </div>
      </div>
      <p className="mt-auto flex items-center gap-1 pt-3 text-[11px] font-medium text-emerald-400 sm:pt-4 sm:text-xs">
        <ArrowUpRight size={12} />
        {card.delta}
      </p>
    </div>
  );
}

function PipelineCard() {
  const card = hero.cards[1];
  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-4 sm:p-5">
      <div className="flex items-start justify-between gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-bright/15 text-brand-bright sm:h-9 sm:w-9 sm:rounded-xl">
          <TrendingUp size={16} className="sm:hidden" />
          <TrendingUp size={18} className="hidden sm:block" />
        </span>
        <span className="rounded-md bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-400 sm:px-2 sm:text-[11px]">
          {card.badge}
        </span>
      </div>
      <p className="mt-3 text-2xl font-bold tracking-tight text-white sm:mt-5 sm:text-3xl">
        {card.value}
      </p>
      <p className="mt-0.5 text-[11px] text-white/50 sm:mt-1 sm:text-xs">
        {card.title}
      </p>
      <svg
        viewBox="0 0 160 48"
        className="mt-auto w-full pt-3 text-brand-bright sm:pt-5"
        aria-hidden
      >
        <defs>
          <linearGradient id="pipelineFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,34 C20,30 28,18 48,22 C68,26 76,10 98,14 C118,18 132,6 160,12 L160,48 L0,48 Z"
          fill="url(#pipelineFill)"
        />
        <path
          d="M0,34 C20,30 28,18 48,22 C68,26 76,10 98,14 C118,18 132,6 160,12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function DecisionsCard() {
  const card = hero.cards[2];
  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-4 sm:p-5">
      <div className="flex items-start justify-between gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-bright/15 text-brand-bright sm:h-9 sm:w-9 sm:rounded-xl">
          <Settings2 size={16} className="sm:hidden" />
          <Settings2 size={18} className="hidden sm:block" />
        </span>
        {card.live ? (
          <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-400 sm:gap-1.5 sm:px-2 sm:text-[11px]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Live
          </span>
        ) : null}
      </div>
      <p className="mt-3 text-2xl font-bold tracking-tight text-white sm:mt-5 sm:text-3xl">
        {card.value}
      </p>
      <p className="mt-0.5 text-[11px] text-white/50 sm:mt-1 sm:text-xs">
        {card.title}
      </p>
      <div className="mt-auto space-y-2.5 pt-3 sm:space-y-3 sm:pt-5">
        <div>
          <div className="mb-1 flex justify-between text-[10px] text-white/55 sm:mb-1.5 sm:text-[11px]">
            <span>Speed</span>
            <span className="font-medium text-white/80">{card.speed}</span>
          </div>
          <div className="h-1 overflow-hidden rounded-full bg-white/10 sm:h-1.5">
            <div className="h-full w-[88%] rounded-full bg-brand-bright" />
          </div>
        </div>
        <div>
          <div className="mb-1 flex justify-between text-[10px] text-white/55 sm:mb-1.5 sm:text-[11px]">
            <span>Accuracy</span>
            <span className="font-medium text-white/80">{card.accuracy}</span>
          </div>
          <div className="h-1 overflow-hidden rounded-full bg-white/10 sm:h-1.5">
            <div className="h-full w-[99%] rounded-full bg-brand-bright" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ApprovalCard() {
  const card = hero.cards[3];
  const toneClass = {
    low: "border-emerald-400 text-emerald-400",
    med: "border-orange-400 text-orange-400",
    high: "border-rose-400 text-rose-400",
  } as const;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-4 sm:p-5">
      <div className="flex items-start justify-between">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-bright/15 text-brand-bright sm:h-9 sm:w-9 sm:rounded-xl">
          <Shield size={16} className="sm:hidden" />
          <Shield size={18} className="hidden sm:block" />
        </span>
      </div>
      <p className="mt-3 text-2xl font-bold tracking-tight text-white sm:mt-5 sm:text-3xl">
        {card.value}
      </p>
      <p className="mt-0.5 text-[11px] text-white/50 sm:mt-1 sm:text-xs">
        {card.title}
      </p>
      <div className="mt-auto grid grid-cols-3 gap-1.5 pt-3 sm:gap-2 sm:pt-5">
        {card.risks.map((risk) => (
          <div key={risk.label} className="flex flex-col items-center text-center">
            <span
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full border-2 text-[10px] font-bold sm:h-12 sm:w-12 sm:text-[11px]",
                toneClass[risk.tone],
              )}
            >
              {risk.value}
            </span>
            <span className="mt-1 text-[9px] leading-tight text-white/45 sm:mt-1.5 sm:text-[10px]">
              {risk.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const cardComponents = [ScoreCard, PipelineCard, DecisionsCard, ApprovalCard];

export function Hero() {
  const { phase } = useIntroPhase();
  const [scrolled, setScrolled] = useState(false);
  const showStaticYaka = phase === "ready" && !scrolled;

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section
      id={hero.id}
      className="relative overflow-hidden bg-[#050A18] pt-[6.5rem] text-white sm:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_50%_at_50%_-5%,rgba(37,99,235,0.4),transparent_60%)] sm:bg-[radial-gradient(ellipse_70%_50%_at_50%_20%,rgba(37,99,235,0.22),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_35%_at_85%_5%,rgba(59,130,246,0.16),transparent_50%)]" />

      {/* Anchor for flying logo — static mark only after land, before scroll */}
      <div
        id="yaka-logo-anchor"
        className="pointer-events-none absolute top-[4.5rem] right-3 z-20 sm:right-5 md:top-[5.25rem] md:right-8 lg:right-12"
      >
        <motion.div
          initial={false}
          animate={{
            opacity: showStaticYaka ? 1 : 0,
            y: showStaticYaka ? 0 : -6,
          }}
          transition={{ duration: 0.25, ease: easeOutExpo }}
          className={cn(!showStaticYaka && "pointer-events-none")}
          aria-hidden={!showStaticYaka}
        >
          <YakaBrandMark tone="dark" />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <motion.div
          className="mx-auto max-w-5xl text-center"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={heroItem}
            className="inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/35 bg-[#0B1A38]/90 px-3 py-1.5 text-[10px] font-semibold text-[#93C5FD] sm:px-4 sm:text-xs sm:font-medium"
          >
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]"
              aria-hidden
            />
            <span className="max-w-[16.5rem] truncate sm:max-w-none">
              {hero.badge}
            </span>
          </motion.span>

          <motion.h1
            variants={heroItem}
            className="mt-5 text-[2.35rem] font-extrabold leading-[1.05] tracking-tight sm:mt-6 sm:text-5xl sm:font-bold md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]"
          >
            <span className="block text-white">{hero.headline}</span>
            <span className="mt-1 block bg-gradient-to-b from-[#5B9BFF] via-[#7EB6FF] to-[#B8DCFF] bg-clip-text text-transparent sm:mt-1.5">
              {hero.headlineAccent}
            </span>
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="mx-auto mt-4 max-w-md text-[14px] leading-relaxed text-white/55 sm:mt-6 sm:max-w-2xl sm:text-base md:text-lg"
          >
            {hero.subcopy}
          </motion.p>

          <motion.div
            variants={heroItem}
            className="mt-6 flex w-full flex-col gap-2.5 sm:mt-8 sm:flex-row sm:items-center sm:justify-center sm:gap-4"
          >
            <Button
              href={hero.secondaryCta.href}
              variant="secondary"
              size="lg"
              icon={<ArrowRight size={16} />}
              iconPosition="right"
              className="min-h-12 w-full border-white/30 sm:w-auto"
            >
              {hero.secondaryCta.label}
            </Button>
          </motion.div>
        </motion.div>

        {/* Clean 2×2 on mobile · 4-col on desktop — no carousel */}
        <motion.div
          className="mx-auto mt-8 grid max-w-6xl grid-cols-2 gap-2.5 sm:mt-10 sm:gap-3 lg:grid-cols-4 lg:gap-4"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3, ease: easeOutExpo }}
        >
          {cardComponents.map((Card, i) => (
            <motion.div
              key={hero.cards[i].key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4 + i * 0.06,
                ease: easeOutExpo,
              }}
            >
              <Card />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Stats — tidy 2-col mobile grid */}
      <div className="relative z-10 mt-8 border-t border-white/10 bg-[#040812]/90 sm:mt-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-5 px-4 py-6 sm:grid-cols-3 sm:gap-5 sm:px-5 md:grid-cols-5 md:px-8 md:py-7">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-lg font-bold tracking-tight text-white sm:text-xl md:text-2xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] text-white/45 sm:text-xs md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
