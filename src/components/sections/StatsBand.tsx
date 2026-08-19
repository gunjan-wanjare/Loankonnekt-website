"use client";

import { Reveal } from "@/components/ui/Reveal";
import { fadeUpBlur } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Stat = { value: string; label: string };

export function StatsBand({ eyebrow, stats }: { eyebrow?: string; stats: Stat[] }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
      <Reveal
        variants={fadeUpBlur}
        className="relative overflow-hidden rounded-[1.5rem] bg-[#051325] px-5 py-8 sm:rounded-[1.75rem] sm:px-8 sm:py-10 lg:rounded-[2rem] lg:px-10 lg:py-12"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(11,31,74,0.45)_0%,transparent_55%)]"
        />

        {eyebrow ? (
          <p className="relative text-center text-sm font-normal text-white sm:text-base">
            {eyebrow}
          </p>
        ) : null}

        <div
          className={cn(
            "relative grid grid-cols-2 lg:grid-cols-4",
            eyebrow ? "mt-6 sm:mt-8" : "mt-0",
          )}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "flex flex-col items-center px-3 py-4 text-center sm:px-6",
                i > 0 && "lg:border-l lg:border-white/20",
                i % 2 === 1 && "border-l border-white/20 lg:border-l",
              )}
            >
              <p className="text-[1.65rem] font-bold leading-none tracking-tight text-white sm:text-[2rem] lg:text-[2.35rem]">
                {stat.value}
              </p>
              <p className="mt-2 text-[12px] font-normal text-white/75 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
