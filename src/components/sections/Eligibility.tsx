"use client";

import { Check } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { eligibility, getIcon } from "@/content";
import { fadeUp, fadeUpBlur, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

const toneStyles = {
  blue: "bg-[#EFF6FF] text-[#0047FF]",
  green: "bg-[#EFF6FF] text-[#3D9E74]",
} as const;

export function Eligibility() {
  return (
    <section
      id={eligibility.id}
      className="bg-[#F3F6FF] py-12 sm:py-14 md:py-16 dark:bg-white/5"
    >
      <div className="mx-auto max-w-[1340px] px-4 sm:px-5 md:px-6">
        <Reveal variants={fadeUpBlur} className="mx-auto max-w-3xl text-center">
          <h2 className="heading-gradient text-[1.6rem] font-bold tracking-tight sm:text-[1.75rem] md:text-[2rem] lg:text-[2.2rem]">
            {eligibility.headline} {eligibility.headlineAccent} {eligibility.headlineAfter}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#6B7280] dark:text-[#94A3B8]">
            {eligibility.subcopy}
          </p>
        </Reveal>

        <Stagger
          className="mt-8 grid gap-5 sm:mt-10 lg:grid-cols-2 lg:gap-6"
          variants={staggerContainer}
        >
          {eligibility.cards.map((card) => {
            const Icon = getIcon(card.icon);
            return (
              <StaggerItem key={card.key} variants={fadeUp}>
                <article className="h-full rounded-[1.35rem] bg-white p-6 shadow-[0_12px_40px_-20px_rgba(15,23,42,0.2)] dark:bg-[#111A2E] dark:shadow-black/30 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "inline-flex h-12 w-12 items-center justify-center rounded-full",
                        toneStyles[card.tone],
                      )}
                    >
                      <Icon size={22} strokeWidth={2} />
                    </span>
                    <h3 className="text-lg font-bold tracking-tight text-[#111827] dark:text-white sm:text-xl">
                      {card.title}
                    </h3>
                  </div>

                  <ul className="mt-6 space-y-3.5">
                    {card.items.map((item) => (
                      <li key={item.label} className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DCFCE7] text-[#16A34A] dark:bg-white/5">
                          <Check size={13} strokeWidth={3} />
                        </span>
                        <p className="text-base font-medium leading-snug tracking-normal text-[#434657] dark:text-[#94A3B8] lg:leading-none">
                          {item.label}: {item.value}
                        </p>
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
