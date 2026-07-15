"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { finalCta } from "@/content";
import { fadeUpBlur } from "@/lib/motion";

export function FinalCTA() {
  return (
    <section
      id={finalCta.id}
      className="relative overflow-hidden bg-navy py-14 text-white sm:py-16 lg:py-20"
    >
      <div className="cta-pinstripe pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.22),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-5 md:px-8">
        <Reveal variants={fadeUpBlur}>
          <h2 className="text-[1.85rem] font-semibold tracking-tight sm:text-4xl md:text-5xl">
            <span className="block text-white">{finalCta.headline}</span>
            <span className="mt-1.5 block text-brand-bright">
              {finalCta.headlineAccent}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/65 sm:text-base">
            {finalCta.subcopy}
          </p>
          <div className="mt-7 flex justify-center">
            <Button href={finalCta.cta.href} variant="secondary" size="lg">
              {finalCta.cta.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
