"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { stats } from "@/content";
import { fadeUp, fadeUpBlur, staggerContainer } from "@/lib/motion";

export function Stats() {
  return (
    <section id={stats.id} className="bg-[#F4F6F9] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal variants={fadeUpBlur} className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF2FF] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1D4ED8] sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" aria-hidden />
            {stats.eyebrow}
          </span>
          <h2 className="mt-5 text-[1.75rem] font-semibold tracking-tight text-navy sm:text-3xl md:text-4xl lg:text-5xl">
            {stats.headline}{" "}
            <span className="bg-gradient-to-b from-[#2563EB] via-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">
              {stats.headlineAccent}
            </span>
          </h2>
          <p className="mt-4 text-sm text-muted sm:text-base">{stats.subcopy}</p>
        </Reveal>

        <Stagger
          className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5"
          variants={staggerContainer}
        >
          {stats.items.map((item) => (
            <StaggerItem
              key={item.label}
              variants={fadeUp}
              className="relative overflow-hidden rounded-[1.25rem] bg-white px-6 py-6 text-left shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)] sm:px-7 sm:py-7"
            >
              {/* Bottom-right decorative quarter circle */}
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-[#E8EEF6]/80"
              />

              <p className="relative text-[1.75rem] font-bold tracking-tight text-[#1A4FA0] sm:text-3xl lg:text-[2rem]">
                {item.value}
              </p>
              <p className="relative mt-2 text-sm text-[#707070] sm:text-[15px]">
                {item.label}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
