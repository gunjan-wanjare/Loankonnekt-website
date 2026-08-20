"use client";

import { Reveal } from "@/components/ui/Reveal";
import { fadeUpBlur } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Stat = { value: string; label: string };

export function StatsBand({
  eyebrow,
  stats,
  className,
}: {
  eyebrow?: string;
  stats: Stat[];
  className?: string;
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
      <Reveal
        variants={fadeUpBlur}
        className={cn(
          "relative overflow-hidden rounded-[28px] px-3 py-8 sm:rounded-[32px] sm:px-4 sm:py-10 lg:px-6 lg:py-12",
          className,
        )}
        style={{
          backgroundColor: "#051325",
          backgroundImage:
            "linear-gradient(90deg, #0A2748 0%, #071A33 16%, #051325 32%, #051325 68%, #071A33 84%, #0A2748 100%)",
        }}
      >
        {eyebrow ? (
          <p className="relative text-center text-sm font-normal text-white sm:text-base">
            {eyebrow}
          </p>
        ) : null}

        <div
          className={cn(
            "relative grid grid-cols-2 md:grid-cols-4",
            eyebrow ? "mt-6 sm:mt-8" : "mt-0",
          )}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="relative flex flex-col items-center justify-center px-3 py-5 text-center sm:px-5 sm:py-2"
            >
              {i % 2 === 1 ? (
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-0 top-1/2 h-[58%] w-px -translate-y-1/2 bg-white/20 md:hidden"
                />
              ) : null}
              {i >= 2 ? (
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 top-0 h-px w-[58%] -translate-x-1/2 bg-white/20 md:hidden"
                />
              ) : null}
              {i > 0 ? (
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-0 top-1/2 hidden h-[58%] w-px -translate-y-1/2 bg-white/20 md:block"
                />
              ) : null}
              <p className="text-[1.65rem] font-bold leading-none tracking-tight text-white sm:text-[2rem] lg:text-[2.35rem]">
                {stat.value}
              </p>
              <p className="mt-2 text-[12px] font-normal text-white sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
