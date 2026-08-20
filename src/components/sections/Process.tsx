"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { process as processContent } from "@/content";
import { slideInLeft, slideInRight } from "@/lib/motion";

export function Process() {
  const steps = processContent.steps;

  return (
    <section id={processContent.id} className="bg-white py-8 sm:py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-[#010B18] sm:rounded-[2.25rem] lg:rounded-[2.5rem]">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,71,255,0.38),transparent_64%)] sm:h-[34rem] sm:w-[34rem]"
          />

          <div className="relative grid items-end gap-8 px-5 pt-10 sm:px-8 sm:pt-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-6 lg:px-14 lg:pt-14 xl:px-16">
            <Reveal variants={slideInLeft} className="pb-10 lg:pb-16">
              <h2 className="max-w-md text-[1.6rem] font-bold leading-[1.15] tracking-tight text-white sm:text-[1.8rem] md:text-[2.1rem] lg:text-[2.3rem]">
                <span className="block">{processContent.headlineLine1}</span>
                <span className="block">{processContent.headlineLine2}</span>
              </h2>

              <ol className="relative mt-8 max-w-lg space-y-3.5 sm:mt-10">
                {steps.map((step, index) => (
                  <li key={step.num} className="relative">
                    {index < steps.length - 1 ? (
                      <span
                        aria-hidden
                        className="absolute left-[3.25rem] top-1/2 z-0 h-[calc(100%+0.875rem)] -translate-x-1/2 border-l-2 border-dashed border-white/90 sm:left-[3.625rem]"
                      />
                    ) : null}
                    <div className="relative z-10 flex items-center gap-3 rounded-full bg-white p-1.5 pr-6 sm:gap-4 sm:p-2 sm:pr-8">
                      <span className="inline-flex h-11 min-w-[5.75rem] shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-[#0047FF] px-3 text-[11px] font-bold text-white sm:h-12 sm:min-w-[6.25rem] sm:text-xs">
                        Step {step.num}
                      </span>
                      <span className="text-sm font-semibold text-[#111827] sm:text-base">
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
              <div className="relative w-[240px] sm:w-[270px] lg:w-[300px]">
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
