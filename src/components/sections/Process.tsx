"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { process as processContent } from "@/content";
import { slideInLeft, slideInRight } from "@/lib/motion";

export function Process() {
  const steps = processContent.steps;

  return (
    <section id={processContent.id} className="bg-white py-8 sm:py-10 md:py-12 dark:bg-[#0A0F1E]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-5 md:px-6">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-[#010B18] sm:rounded-[2.25rem] lg:rounded-[2.5rem]">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,71,255,0.38),transparent_64%)] sm:h-[34rem] sm:w-[34rem]"
          />

          <div className="relative grid items-end gap-8 px-5 pt-12 sm:px-8 sm:pt-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-6 lg:px-14 lg:pt-16 xl:px-16">
            <Reveal variants={slideInLeft} className="pb-12 sm:pb-14 lg:pb-20">
              <h2 className="max-w-md text-[1.75rem] font-bold leading-[1.15] tracking-tight text-white sm:text-[2rem] md:text-[2.3rem] lg:text-[2.55rem]">
                <span className="block">{processContent.headlineLine1}</span>
                <span className="block">{processContent.headlineLine2}</span>
              </h2>

              <ol className="relative mt-8 max-w-lg space-y-5 sm:mt-10 sm:space-y-6">
                {steps.map((step, index) => (
                  <li key={step.num} className="relative">
                    {index < steps.length - 1 ? (
                      <span
                        aria-hidden
                        className="absolute left-[2.5rem] top-1/2 z-0 h-[calc(100%+1.5rem)] -translate-x-1/2 border-l-2 border-dashed border-white/90 sm:left-[2.875rem] sm:h-[calc(100%+1.75rem)]"
                      />
                    ) : null}
                    <div className="relative z-10 flex items-center gap-3 rounded-full bg-white p-2 pr-7 sm:gap-4 sm:p-2.5 sm:pr-9 dark:bg-[#111827]">
                      <span className="inline-flex h-12 min-w-[6.25rem] shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-[#0047FF] px-3 text-xs font-bold text-white sm:h-14 sm:min-w-[6.75rem] sm:text-sm">
                        Step {step.num}
                      </span>
                      <span className="min-w-0 text-base font-semibold text-[#111827] sm:text-lg dark:text-white">
                        {step.label}
                      </span>
                    </div>
                    <span className="sr-only">
                      Step {index + 1} of {steps.length}
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal
              variants={slideInRight}
              className="flex justify-center self-end lg:justify-end"
            >
              <div className="relative w-[260px] sm:w-[300px] sm:-translate-x-16 lg:w-[340px] lg:-translate-x-[5.5rem]">
                <Image
                  src={processContent.phoneSrc}
                  alt="LoanKonnekt app — check loan eligibility"
                  width={330}
                  height={495}
                  unoptimized
                  className="h-auto w-full object-contain drop-shadow-[0_32px_60px_rgba(0,0,0,0.45)]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
