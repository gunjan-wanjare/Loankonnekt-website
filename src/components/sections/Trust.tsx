"use client";

import { trust } from "@/content";

function PartnerItem({
  name,
  initial,
}: {
  name: string;
  initial: string;
}) {
  return (
    <div className="flex shrink-0 items-center gap-2.5 px-6 sm:px-8">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#DBEAFE] text-xs font-bold text-[#2563EB]">
        {initial}
      </span>
      <span className="whitespace-nowrap text-sm font-medium tracking-tight text-[#94A3B8] sm:text-[15px]">
        {name}
      </span>
    </div>
  );
}

export function Trust() {
  const items = [...trust.partners, ...trust.partners];

  return (
    <section
      id={trust.id}
      className="overflow-hidden border-t border-[#1E3A8A]/35 bg-white py-7 sm:py-8"
    >
      <p className="px-4 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-[#94A3B8] sm:text-xs">
        {trust.headline}
      </p>

      <div className="relative mt-5">
        {/* Edge fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-20" />

        <div className="flex w-max animate-trust-marquee hover:[animation-play-state:paused]">
          {items.map((partner, i) => (
            <PartnerItem
              key={`${partner.name}-${i}`}
              name={partner.name}
              initial={partner.initial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
