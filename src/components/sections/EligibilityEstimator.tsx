"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { eligibilityEstimator as content } from "@/content/loans";
import { fadeUpBlur, slideInLeft, slideInRight } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function EligibilityEstimator() {
  const [salary, setSalary] = useState("");
  const [tier, setTier] = useState<string>(content.creditTier.options[1]);

  return (
    <section id={content.id} className="bg-[#F3F6FF] py-12 sm:py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal variants={fadeUpBlur} className="mx-auto max-w-3xl text-center">
          <h2 className="heading-gradient text-[1.6rem] font-bold tracking-tight sm:text-[1.75rem] md:text-[2rem] lg:text-[2.2rem]">
            {content.headline}
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-8 sm:mt-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
          <Reveal variants={slideInLeft}>
            <div className="rounded-[1.5rem] bg-white p-6 shadow-[0_18px_50px_-24px_rgba(15,23,42,0.28)] sm:p-7">
              <label
                htmlFor="estimator-salary"
                className="block text-sm font-bold text-[#1F2937]"
              >
                {content.salary.label}
              </label>
              <input
                id="estimator-salary"
                type="number"
                inputMode="numeric"
                min={0}
                placeholder={content.salary.placeholder}
                value={salary}
                onChange={(event) => setSalary(event.target.value)}
                className="mt-3 h-[52px] w-full rounded-[10px] border border-[#E5E7EB] bg-[#F9FAFB] px-4 text-sm text-[#111827] outline-none placeholder:text-[#9CA3AF] focus:border-brand/40 focus:bg-white focus:ring-2 focus:ring-brand/10"
              />

              <p className="mt-6 text-sm font-bold text-[#1F2937]">
                {content.creditTier.label}
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {content.creditTier.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTier(option)}
                    aria-pressed={tier === option}
                    className={cn(
                      "flex h-11 items-center justify-center rounded-[10px] border text-sm font-medium transition-colors",
                      tier === option
                        ? "border-brand bg-brand text-white"
                        : "border-[#E5E7EB] bg-white text-[#4B5563] hover:border-brand/40",
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <Button
                href={`${content.cta.href}?salary=${encodeURIComponent(salary)}&tier=${encodeURIComponent(tier)}`}
                variant="primary"
                size="lg"
                className="mt-7 w-full rounded-[12px]"
              >
                {content.cta.label}
              </Button>
            </div>
          </Reveal>

          <Reveal variants={slideInRight} className="flex flex-col justify-center">
            <h3 className="text-xl font-bold tracking-tight text-[#111827]">
              {content.requirements.headline}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
              {content.requirements.subcopy}
            </p>
            <ul className="mt-5 space-y-3">
              {content.requirements.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DCFCE7] text-[#16A34A]">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <p className="text-sm leading-relaxed text-[#374151]">{item}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
