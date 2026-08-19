"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { fadeUpBlur, scaleIn } from "@/lib/motion";

type PageHeroCta = { label: string; href: string };

type PageHeroProps = {
  headline: React.ReactNode;
  subcopy: string;
  primaryCta: PageHeroCta;
  secondaryCta?: PageHeroCta;
  illustration?: { src: string; alt: string };
  badges?: string[];
  children?: React.ReactNode;
};

export function PageHero({
  headline,
  subcopy,
  primaryCta,
  secondaryCta,
  illustration,
  badges,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#FCFCFF] pt-24 pb-10 sm:pt-28 sm:pb-12 lg:pb-14">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-[20%] bg-[radial-gradient(ellipse_60%_50%_at_0%_45%,rgba(59,130,246,0.14),transparent_72%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-[20%] bg-[radial-gradient(ellipse_60%_50%_at_100%_45%,rgba(59,130,246,0.14),transparent_72%)]"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-5 md:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
        <Reveal variants={fadeUpBlur}>
          <h1 className="heading-gradient max-w-xl text-[1.9rem] font-extrabold leading-[1.15] tracking-tight sm:text-[2.2rem] md:text-[2.5rem] lg:text-[2.65rem]">
            {headline}
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#4B5563]">
            {subcopy}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button href={primaryCta.href} variant="primary" size="lg" className="rounded-[12px]">
              {primaryCta.label}
            </Button>
            {secondaryCta ? (
              <Button href={secondaryCta.href} variant="outlineBrand" size="lg" className="rounded-[12px]">
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </Reveal>

        {illustration ? (
          <Reveal variants={scaleIn} className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative aspect-[542/484] w-full">
              <Image
                src={illustration.src}
                alt={illustration.alt}
                fill
                unoptimized
                sizes="(min-width: 1024px) 40vw, 80vw"
                className="object-contain"
                priority
              />
            </div>

            {badges && badges.length ? (
              <div className="absolute left-0 top-4 flex flex-col gap-2 rounded-2xl bg-white/95 p-3 shadow-[0_18px_40px_-20px_rgba(15,23,42,0.35)] sm:left-2">
                {badges.map((label) => (
                  <span
                    key={label}
                    className="flex items-center gap-2 whitespace-nowrap text-xs font-medium text-[#111827]"
                  >
                    <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#DCFCE7] text-[#16A34A]">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    {label}
                  </span>
                ))}
              </div>
            ) : null}
          </Reveal>
        ) : null}
      </div>

      {children ? <div className="relative z-10 mt-10 sm:mt-12">{children}</div> : null}
    </section>
  );
}
