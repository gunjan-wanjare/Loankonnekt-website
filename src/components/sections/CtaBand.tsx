"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { fadeUpBlur } from "@/lib/motion";

type CtaBandProps = {
  headline: string;
  subcopy?: string;
  cta: { label: string; href: string };
};

export function CtaBand({ headline, subcopy, cta }: CtaBandProps) {
  return (
    <section
      className="py-14 sm:py-16 lg:py-[4.5rem]"
      style={{
        background:
          "linear-gradient(96deg, #267DFF 0%, #0047FF 30%, #0047FF 55%, #001FAE 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-5 md:px-8">
        <Reveal variants={fadeUpBlur}>
          <h2 className="text-[1.5rem] font-bold tracking-tight text-[#FFFFFF] sm:text-[1.75rem] md:text-[2rem]">
            {headline}
          </h2>
          {subcopy ? (
            <p className="mx-auto mt-3 max-w-2xl text-sm font-normal leading-relaxed text-white/85 sm:text-base">
              {subcopy}
            </p>
          ) : null}
          <div className="mt-8 flex justify-center">
            <Link
              href={cta.href}
              className="inline-flex h-12 items-center justify-center px-8 text-[15px] leading-none tracking-normal text-[#0047FF] transition-colors hover:bg-[#F8FAFF]"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 16,
                fontFamily: "var(--font-be-vietnam), sans-serif",
                fontWeight: 500,
              }}
            >
              {cta.label}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
