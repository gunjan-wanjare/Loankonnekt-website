"use client";

import { Check, X } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { compare } from "@/content";
import { fadeUp, fadeUpBlur, staggerContainer } from "@/lib/motion";

export function Compare() {
  return (
    <section id={compare.id} className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal variants={fadeUpBlur} className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF2FF] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1D4ED8] sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" aria-hidden />
            {compare.eyebrow}
          </span>
          <h2 className="mt-5 text-[1.75rem] font-semibold tracking-tight text-navy sm:text-3xl md:text-4xl lg:text-[2.5rem]">
            <span className="block">{compare.headline}</span>
            <span className="mt-1 block bg-gradient-to-b from-[#2563EB] via-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">
              {compare.headlineAccent}
            </span>
          </h2>
          <p className="mt-4 text-sm text-muted sm:text-base">{compare.subcopy}</p>
        </Reveal>

        <Stagger
          className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-2 lg:gap-6"
          variants={staggerContainer}
        >
          <StaggerItem
            variants={fadeUp}
            className="rounded-2xl border border-navy/10 bg-surface p-5 sm:p-6"
          >
            <h3 className="text-xl font-semibold tracking-tight text-navy/55">
              {compare.traditional.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-muted">
              {compare.traditional.subtitle}
            </p>
            <ul className="mt-5 space-y-3">
              {compare.traditional.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy/8 text-navy/40">
                    <X size={14} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm leading-relaxed text-muted sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem
            variants={fadeUp}
            className="rounded-2xl border border-brand/30 bg-navy p-5 text-white shadow-[0_24px_60px_-28px_rgba(30,80,162,0.55)] sm:p-6"
          >
            <h3 className="text-xl font-semibold tracking-tight text-white">
              {compare.loankonnekt.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-sky-300">
              {compare.loankonnekt.subtitle}
            </p>
            <ul className="mt-5 space-y-3">
              {compare.loankonnekt.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm leading-relaxed text-white/80 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
