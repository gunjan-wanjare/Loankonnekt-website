"use client";

import Image from "next/image";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { fadeUpBlur, scaleIn } from "@/lib/motion";
import { cn } from "@/lib/utils";

type PageHeroCta = { label: string; href: string };

type PageHeroProps = {
  headline: React.ReactNode;
  subcopy: string;
  primaryCta: PageHeroCta;
  secondaryCta?: PageHeroCta;
  illustration?: { src: string; alt: string };
  badges?: string[];
  gradientHeadline?: boolean;
  secondaryHasArrow?: boolean;
  primaryHasArrow?: boolean;
  tall?: boolean;
  largeIllustration?: boolean;
  children?: React.ReactNode;
};

export function PageHero({
  headline,
  subcopy,
  primaryCta,
  secondaryCta,
  illustration,
  badges,
  gradientHeadline = true,
  secondaryHasArrow = false,
  primaryHasArrow = false,
  tall = false,
  largeIllustration = false,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-10 sm:pt-28 sm:pb-12 lg:pb-16 dark:bg-[#0A0F1E]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(ellipse_70%_80%_at_50%_100%,rgba(0,71,255,0.08),transparent_70%)]"
      />

      <div
        className={cn(
          "relative z-10 mx-auto grid max-w-[1340px] items-center px-4 sm:px-5 md:px-6",
          tall
            ? "gap-8 py-4 sm:gap-10 sm:py-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,22rem)] lg:gap-6 lg:py-10 xl:grid-cols-[minmax(0,1.2fr)_minmax(20rem,24rem)]"
            : largeIllustration
              ? "gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.95fr)] lg:gap-8"
              : "gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-6",
        )}
      >
        <Reveal variants={fadeUpBlur}>
          <h1
            className={cn(
              "[text-wrap:balance]",
              tall
                ? "max-w-[48rem] text-[2.35rem] font-bold leading-none tracking-normal sm:text-[3rem] md:text-[3.5rem] lg:text-[64px]"
                : "max-w-2xl text-[1.9rem] font-bold leading-[1.12] tracking-tight sm:text-[2.35rem] md:text-[2.75rem] lg:max-w-3xl lg:text-[3.1rem]",
              gradientHeadline && "heading-gradient",
            )}
            style={{ fontWeight: 700, letterSpacing: "0%" }}
          >
            {headline}
          </h1>
          <p
            className={cn(
              "mt-5 font-normal tracking-normal text-[#434657] dark:text-[#94A3B8]",
              tall
                ? "max-w-[40rem] text-[18px] leading-[28px] sm:text-[20px] sm:leading-[30px]"
                : "max-w-xl text-base leading-relaxed sm:max-w-2xl sm:text-lg",
            )}
          >
            {subcopy}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button
              href={primaryCta.href}
              variant="primary"
              size="lg"
              className="max-lg:w-full text-[#FFFFFF]"
              icon={primaryHasArrow ? <ArrowRight size={16} strokeWidth={2.4} /> : undefined}
              iconPosition="right"
            >
              {primaryCta.label}
            </Button>
            {secondaryCta ? (
              <Button
                href={secondaryCta.href}
                variant="outlineBrand"
                size="lg"
                className="max-lg:w-full"
                icon={secondaryHasArrow ? <ArrowDown size={16} strokeWidth={2.4} /> : undefined}
                iconPosition="right"
              >
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </Reveal>

        {illustration ? (
          <Reveal
            variants={scaleIn}
            className={cn(
              "relative mx-auto w-full",
              tall
                ? "max-w-[16.5rem] sm:max-w-[19rem] md:max-w-[22rem] lg:ml-auto lg:max-w-none"
                : largeIllustration
                  ? "max-w-[20rem] sm:max-w-md lg:max-w-[28rem]"
                  : "max-w-[16.5rem] sm:max-w-sm lg:max-w-[22rem]",
            )}
          >
            <div
              className={cn(
                "relative aspect-[542/484]",
                tall
                  ? "mx-auto w-[70%] sm:w-[74%] md:w-[80%] lg:mr-0 lg:ml-auto lg:w-[88%]"
                  : largeIllustration
                    ? "w-[92%] lg:ml-auto lg:w-full"
                    : "w-[78%] lg:ml-auto lg:w-[88%]",
              )}
            >
              <Image
                src={illustration.src}
                alt={illustration.alt}
                fill
                unoptimized
                sizes={
                  tall
                    ? "(min-width: 1024px) 28vw, 80vw"
                    : largeIllustration
                      ? "(min-width: 1024px) 36vw, 85vw"
                      : "(min-width: 1024px) 28vw, 80vw"
                }
                className="object-contain object-right object-bottom"
                priority
              />
            </div>

            {badges && badges.length ? (
              <div
                className={
                  tall
                    ? "mt-5 flex flex-wrap items-center justify-center gap-2 sm:mt-6 sm:gap-2.5 lg:absolute lg:-top-4 lg:left-[-0.25rem] lg:mt-0 lg:flex-col lg:flex-nowrap lg:items-start lg:justify-start lg:gap-3"
                    : "absolute left-2 top-4 flex flex-col gap-2.5 sm:left-0 sm:top-[18%] sm:gap-3 lg:top-[22%]"
                }
              >
                {badges.map((label) => (
                  <span
                    key={label}
                    className="inline-flex w-fit items-center gap-2 rounded-full border border-[#0047FF] bg-white px-3 py-1.5 text-[12px] font-medium text-[#0047FF] shadow-[0_8px_20px_-12px_rgba(0,71,255,0.35)] sm:px-3.5 sm:py-2 sm:text-[13px] dark:bg-[#111A2E]"
                  >
                    <Check size={14} strokeWidth={2.75} className="shrink-0 text-[#0047FF]" />
                    {label}
                  </span>
                ))}
              </div>
            ) : null}
          </Reveal>
        ) : null}
      </div>

      {children ? (
        <div className={cn("relative z-10", tall ? "mt-8 sm:mt-10 lg:mt-12" : "mt-10 sm:mt-12 lg:mt-14")}>
          {children}
        </div>
      ) : null}
    </section>
  );
}
