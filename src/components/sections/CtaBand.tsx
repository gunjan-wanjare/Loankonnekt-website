"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { fadeUpBlur } from "@/lib/motion";

type CtaBandProps = {
  headline: string;
  subcopy?: string;
  cta: { label: string; href: string };
};

export function CtaBand({ headline, subcopy, cta }: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(90deg,#0047FF_0%,#1D4ED8_55%,#0B1F4A_100%)] py-12 sm:py-14">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-14 bottom-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1),transparent_65%)]"
      />

      <Reveal variants={fadeUpBlur} className="relative mx-auto max-w-7xl px-4 text-center sm:px-5 md:px-8">
        <h2 className="text-[1.5rem] font-bold tracking-tight text-white sm:text-[1.75rem] md:text-[2rem]">
          {headline}
        </h2>
        {subcopy ? <p className="mt-3 text-sm text-white/85">{subcopy}</p> : null}
        <Button href={cta.href} variant="light" size="lg" className="mt-7 rounded-[12px]">
          {cta.label}
        </Button>
      </Reveal>
    </section>
  );
}
