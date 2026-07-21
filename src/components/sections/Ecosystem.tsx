"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { ecosystem, getIcon } from "@/content";
import { fadeUpBlur } from "@/lib/motion";
import { cn } from "@/lib/utils";

const DEFAULT_ACTIVE = 0;
const RADIUS = 38;

export function Ecosystem() {
  const [active, setActive] = useState(DEFAULT_ACTIVE);
  const count = ecosystem.nodes.length;
  const CoreIcon = getIcon(ecosystem.coreIcon);

  return (
    <section
      id={ecosystem.id}
      className="relative overflow-hidden bg-[#F7F9FC] py-12 sm:py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.9)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal variants={fadeUpBlur} className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E8F1FF] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-bright sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-bright" aria-hidden />
            {ecosystem.badge}
          </span>

          <h2 className="mt-5 text-[1.75rem] font-semibold tracking-tight text-navy sm:text-3xl md:text-4xl lg:text-[2.75rem]">
            {ecosystem.headline}{" "}
            <span className="text-brand-bright">{ecosystem.headlineAccent}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted sm:text-base">
            {ecosystem.subcopy}
          </p>
        </Reveal>

        {/* Mobile — stacked interactive cards */}
        <div className="mt-8 grid gap-3 sm:hidden">
          {ecosystem.nodes.map((node, i) => {
            const Icon = getIcon(node.icon);
            const isActive = active === i;
            return (
              <button
                key={node.label}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "rounded-2xl border p-4 text-left transition-all",
                  isActive
                    ? "border-brand-bright bg-brand-bright text-white shadow-lg"
                    : "border-navy/8 bg-white text-navy",
                )}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                      isActive ? "bg-white/20 text-white" : "bg-[#E8F1FF] text-brand-bright",
                    )}
                  >
                    <Icon size={20} />
                  </span>
                  <span className="text-sm font-semibold">{node.label}</span>
                </div>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pt-3 text-sm leading-relaxed text-white/85"
                    >
                      {node.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>

        {/* Desktop / tablet hub-and-spoke */}
        <div className="relative mx-auto mt-10 hidden aspect-square w-full max-w-[560px] sm:block lg:mt-12 lg:max-w-[620px]">
          {/* Dashed spokes */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            aria-hidden
          >
            {ecosystem.nodes.map((_, i) => {
              const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
              // Stop just inside the icon so dashes don't run under labels
              const lineRadius = RADIUS - 5.5;
              const x = 50 + Math.cos(angle) * lineRadius;
              const y = 50 + Math.sin(angle) * lineRadius;
              const isActive = active === i;

              return (
                <motion.line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={x}
                  y2={y}
                  stroke={isActive ? "#3B82F6" : "#CBD5E1"}
                  strokeWidth="0.35"
                  strokeDasharray="1.2 1.1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                />
              );
            })}
          </svg>

          {/* Center hub */}
          <motion.div
            className="absolute left-1/2 top-1/2 z-20 flex h-[7.5rem] w-[7.5rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-brand-bright text-center text-white shadow-[0_0_0_12px_rgba(59,130,246,0.12),0_0_50px_rgba(59,130,246,0.45)] md:h-36 md:w-36 lg:h-40 lg:w-40"
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <CoreIcon size={28} className="mb-1.5 opacity-95 md:mb-2 md:h-8 md:w-8" strokeWidth={1.75} />
            <span className="px-3 text-[13px] font-bold leading-tight tracking-tight md:text-sm lg:text-[15px]">
              {ecosystem.coreLabel}
            </span>
          </motion.div>

          {/* Orbit nodes — icon sits on spoke end; label always faces outward */}
          {ecosystem.nodes.map((node, i) => {
            const Icon = getIcon(node.icon);
            const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
            const x = 50 + Math.cos(angle) * RADIUS;
            const y = 50 + Math.sin(angle) * RADIUS;
            const isActive = active === i;
            const sin = Math.sin(angle);
            // Top / bottom halves: keep label outside the ring so spokes never cross text
            const labelOutwardTop = sin < -0.2;
            const tooltipBelow = !labelOutwardTop;

            return (
              <motion.div
                key={node.label}
                className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.25 + i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <button
                  type="button"
                  aria-pressed={isActive}
                  aria-describedby={isActive ? `eco-tip-${i}` : undefined}
                  onClick={() => setActive(i)}
                  className="group relative flex outline-none"
                >
                  {/* Icon anchored at spoke tip */}
                  <span
                    className={cn(
                      "relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-2xl border shadow-sm transition-all duration-300 md:h-14 md:w-14",
                      isActive
                        ? "border-brand-bright bg-brand-bright text-white shadow-[0_12px_28px_-10px_rgba(59,130,246,0.65)]"
                        : "border-black/5 bg-white text-brand-bright hover:border-brand-bright/30",
                    )}
                  >
                    <Icon size={22} strokeWidth={1.85} />
                  </span>

                  {/* Label — always outside the hub (below on bottom, above on top) */}
                  <span
                    className={cn(
                      "pointer-events-none absolute left-1/2 z-20 w-[7.25rem] -translate-x-1/2 text-center text-[11px] font-semibold leading-snug md:w-32 md:text-xs",
                      // Soft plate so any spoke underlap stays hidden
                      "rounded-md bg-[#F7F9FC]/95 px-1 py-0.5",
                      isActive ? "text-navy" : "text-slate-500",
                      labelOutwardTop
                        ? "bottom-[calc(100%+0.55rem)]"
                        : "top-[calc(100%+0.55rem)]",
                    )}
                  >
                    {node.label}
                  </span>
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      id={`eco-tip-${i}`}
                      role="tooltip"
                      initial={{ opacity: 0, y: tooltipBelow ? 6 : -6, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: tooltipBelow ? 4 : -4, scale: 0.96 }}
                      transition={{ duration: 0.22 }}
                      className={cn(
                        "absolute left-1/2 z-40 w-[180px] -translate-x-1/2 rounded-xl bg-navy px-3.5 py-2.5 text-center text-[11px] leading-relaxed text-white shadow-xl md:w-[210px] md:text-xs",
                        tooltipBelow
                          ? "top-[calc(100%+2.65rem)]"
                          : "bottom-[calc(100%+2.65rem)]",
                      )}
                    >
                      {node.description}
                      <span
                        aria-hidden
                        className={cn(
                          "absolute left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-navy",
                          tooltipBelow ? "-top-1" : "-bottom-1",
                        )}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
