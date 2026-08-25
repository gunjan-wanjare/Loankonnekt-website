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
  const [tier, setTier] = useState<string>(content.creditTier.defaultValue);

  return (
    <section id={content.id} className="bg-white py-12 sm:py-16 md:py-20 dark:bg-[#0A0F1E]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-5 md:px-6">
        <Reveal variants={fadeUpBlur} className="mx-auto max-w-4xl text-center">
          <h2
            className="heading-gradient text-[1.85rem] font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-[2.6rem]"
            style={{ fontWeight: 700 }}
          >
            {content.headline}
          </h2>
        </Reveal>

        <div className="mt-10 grid items-center gap-10 sm:mt-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 xl:gap-20">
          <Reveal variants={slideInLeft}>
            <div className="rounded-[1.5rem] border border-[#EEF0F5] bg-[#F8FAFC] p-6 dark:border-white/10 dark:bg-white/5 sm:rounded-[1.75rem] sm:p-8 md:p-10">
              <label
                htmlFor="estimator-salary"
                className="block text-[15px] font-bold tracking-tight text-[#051325] dark:text-white sm:text-base"
              >
                {content.salary.label}
              </label>
              <input
                id="estimator-salary"
                type="text"
                inputMode="numeric"
                placeholder={content.salary.placeholder}
                value={salary}
                onChange={(event) => setSalary(event.target.value)}
                className="mt-3 h-[52px] w-full rounded-[12px] border border-transparent bg-[#EEF1F6] px-4 text-[15px] text-[#051325] outline-none placeholder:text-[#9CA3AF] focus:border-[#0047FF]/35 focus:bg-white focus:ring-2 focus:ring-[#0047FF]/10 dark:bg-white/5 dark:text-white dark:placeholder:text-[#94A3B8] dark:focus:bg-[#111A2E] sm:h-14"
              />

              <p className="mt-7 text-[15px] font-bold tracking-tight text-[#051325] dark:text-white sm:mt-8 sm:text-base">
                {content.creditTier.label}
              </p>
              <div className="mt-3 grid grid-cols-1 gap-2.5 min-[420px]:grid-cols-3 sm:gap-3">
                {content.creditTier.options.map((option) => {
                  const selected = tier === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setTier(option)}
                      aria-pressed={selected}
                      className={cn(
                        "flex h-11 items-center justify-center rounded-[12px] border bg-white text-[13px] font-medium tracking-tight transition-colors dark:bg-[#111A2E] sm:h-12 sm:text-sm",
                        selected
                          ? "border-[#0047FF] text-[#0047FF]"
                          : "border-[#E5E7EB] text-[#434657] hover:border-[#0047FF]/40 dark:border-white/10 dark:text-white",
                      )}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              <Button
                href={`${content.cta.href}?salary=${encodeURIComponent(salary)}&tier=${encodeURIComponent(tier)}`}
                variant="primary"
                size="lg"
                className="mt-8 min-h-[52px] w-full rounded-[16px] shadow-none sm:mt-9 sm:min-h-14"
              >
                {content.cta.label}
              </Button>
            </div>
          </Reveal>

          <Reveal variants={slideInRight} className="flex flex-col justify-center lg:max-w-[28rem]">
            <h3 className="text-[1.5rem] font-bold tracking-tight text-[#051325] dark:text-white sm:text-[1.65rem]">
              {content.requirements.headline}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-[#434657] dark:text-[#94A3B8] sm:text-lg sm:leading-[1.7]">
              {content.requirements.subcopy}
            </p>
            <ul className="mt-6 space-y-4">
              {content.requirements.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    size={18}
                    strokeWidth={2.4}
                    className="mt-0.5 shrink-0 text-[#22C55E]"
                  />
                  <p className="text-base leading-snug text-[#434657] dark:text-[#94A3B8] sm:text-lg">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
