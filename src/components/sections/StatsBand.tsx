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
        className="relative overflow-hidden rounded-[1.5rem] bg-[linear-gradient(90deg,#040812_0%,#071428_48%,#0B1F4A_100%)] px-6 py-8 sm:px-10 sm:py-9"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.28),transparent_65%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.2),transparent_65%)]"
        />

        {eyebrow ? (
          <p className="relative text-center text-sm font-semibold tracking-tight text-white/90">
            {eyebrow}
          </p>
        ) : null}

        <div
          className={cn(
            "relative flex flex-wrap items-center justify-center gap-y-6",
            eyebrow ? "mt-5" : "mt-0",
          )}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "flex min-w-[7rem] flex-col items-center px-5 sm:px-8",
                i > 0 && "border-l border-white/15",
              )}
            >
              <p className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] text-white/70 sm:text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
