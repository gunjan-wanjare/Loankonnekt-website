"use client";

import Image from "next/image";
import { ArrowRight, Lock, Shield, UserRound } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { creditScore } from "@/content";
import { slideInLeft, slideInRight } from "@/lib/motion";

const badgeIcons = {
  secure: Shield,
  eligibility: UserRound,
} as const;

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
              <Image
                src={creditScore.gaugeSrc}
                alt="Credit score 750 — Good"
                width={377}
                height={377}
                unoptimized
                className="h-auto w-full max-w-[22rem] object-contain sm:max-w-[24rem]"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
