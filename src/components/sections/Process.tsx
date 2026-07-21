"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { process as processContent, getIcon } from "@/content";
import { fadeUpBlur } from "@/lib/motion";
import { cn } from "@/lib/utils";

const steps = processContent.steps;

function StepBadge({
  index,
  progress,
  step,
}: {
  index: number;
  progress: MotionValue<number>;
  step: (typeof steps)[number];
}) {
  const Icon = getIcon(step.icon);
  const isLight = step.tone === "light";
  const peak = (index + 0.5) / steps.length;

  const scale = useTransform(progress, (value) => {
    const near = Math.abs(value - peak) < 0.18;
    return near ? 1.08 : 1;
  });
  const boxShadow = useTransform(progress, (value) => {
    const near = Math.abs(value - peak) < 0.18;
    return near
      ? "0 14px 32px -10px rgba(37,99,235,0.55)"
      : "0 10px 24px -10px rgba(37,99,235,0.35)";
  });

  return (
    <motion.div
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-[14px] sm:h-14 sm:w-14",
        isLight
          ? "border border-[#E2E8F0] bg-white text-[#2563EB]"
          : "border-2 border-[#2563EB] bg-[#2563EB] text-white",
      )}
      style={{ scale, boxShadow }}
    >
      <Icon size={22} strokeWidth={2} />
    </motion.div>
  );
}

function StepCopy({
  index,
  progress,
  title,
  description,
  className,
}: {
  index: number;
  progress: MotionValue<number>;
  title: string;
  description: string;
  className?: string;
}) {
  const start = index / steps.length;
  const mid = (index + 0.4) / steps.length;
  const opacity = useTransform(progress, [start, mid], [0.28, 1]);
  const y = useTransform(progress, [start, mid], [36, 0]);
  const scale = useTransform(progress, [start, mid], [0.96, 1]);

  return (
    <motion.div style={{ opacity, y, scale }} className={className}>
      <h3 className="text-base font-semibold tracking-tight text-[#0F172A] sm:text-lg">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[#64748B]">{description}</p>
    </motion.div>
  );
}

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "center 0.35"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.35,
  });

  const lineWidth = useTransform(progress, [0, 1], ["0%", "100%"]);
  const lineHeight = useTransform(progress, [0, 1], ["0%", "100%"]);
  const dotLeft = useTransform(progress, [0, 1], ["0%", "100%"]);
  const dotTop = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id={processContent.id}
      ref={sectionRef}
      className="bg-[#F7F9FC] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal variants={fadeUpBlur} className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF2FF] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1D4ED8] sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" aria-hidden />
            {processContent.badge}
          </span>
          <h2 className="mt-5 text-[1.75rem] font-bold tracking-tight text-[#0F172A] sm:text-3xl md:text-4xl lg:text-[2.75rem]">
            {processContent.headline}{" "}
            <span className="text-[#2563EB]">{processContent.headlineAccent}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#64748B] sm:text-base">
            {processContent.subcopy}
          </p>
        </Reveal>

        {/* Desktop / tablet horizontal timeline — same structure as Lawvix */}
        <div className="relative mt-10 hidden md:mt-12 md:block">
          <div className="pointer-events-none absolute left-0 right-0 top-6 sm:top-7">
            <div className="relative mx-[6%] h-px bg-[#BFDBFE] lg:mx-[8%]">
              <motion.div
                className="absolute inset-y-0 left-0 origin-left bg-[#2563EB]"
                style={{ width: lineWidth }}
              />
              <motion.div
                className="absolute top-1/2 z-20 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB] shadow-[0_0_0_5px_rgba(37,99,235,0.15)]"
                style={{ left: dotLeft }}
              />
            </div>
          </div>

          <div className="relative grid grid-cols-5 gap-3 lg:gap-5">
            {steps.map((step, index) => (
              <div key={step.num} className="flex flex-col text-left">
                <div className="flex justify-center">
                  <StepBadge index={index} progress={progress} step={step} />
                </div>
                <StepCopy
                  index={index}
                  progress={progress}
                  title={step.label}
                  description={step.description}
                  className="mt-5 text-center"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline — same structure as Lawvix */}
        <div className="relative mt-8 md:hidden">
          <div className="absolute bottom-3 left-6 top-3 w-px bg-[#BFDBFE]">
            <motion.div
              className="absolute inset-x-0 top-0 origin-top bg-[#2563EB]"
              style={{ height: lineHeight }}
            />
            <motion.div
              className="absolute left-1/2 z-20 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB] shadow-[0_0_0_4px_rgba(37,99,235,0.15)]"
              style={{ top: dotTop }}
            />
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.num} className="relative flex gap-5">
                <div className="relative z-10 shrink-0">
                  <StepBadge index={index} progress={progress} step={step} />
                </div>
                <StepCopy
                  index={index}
                  progress={progress}
                  title={step.label}
                  description={step.description}
                  className="min-w-0 pt-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
