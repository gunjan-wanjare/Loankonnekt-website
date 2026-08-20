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
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal
          variants={fadeUpBlur}
          className="rounded-[1.5rem] px-6 py-12 text-center sm:rounded-[2rem] sm:px-10 sm:py-14 lg:py-16"
          style={{
            background:
              "linear-gradient(90deg, #0047FF 0%, #2563EB 28%, #1D4ED8 52%, #163A8A 78%, #0B1F4A 100%)",
          }}
        >
          <h2 className="text-[1.5rem] font-bold tracking-tight text-white sm:text-[1.75rem] md:text-[2rem]">
            {headline}
          </h2>
          {subcopy ? <p className="mt-3 text-sm text-white/85">{subcopy}</p> : null}
        </Reveal>

        <div className="mt-7 flex justify-center">
          <Button href={cta.href} variant="primary" size="lg" className="rounded-[12px]">
            {cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
