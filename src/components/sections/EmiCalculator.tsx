"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { emiCalculator as content } from "@/content";
import { fadeUpBlur } from "@/lib/motion";

const rupee = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function formatRupee(value: number) {
  return rupee.format(Math.round(value));
}

function calcEmi(principal: number, monthlyRate: number, months: number) {
  if (months <= 0) return 0;
  if (monthlyRate <= 0) return principal / months;

  const factor = (1 + monthlyRate) ** months;
  return (principal * monthlyRate * factor) / (factor - 1);
}

function SliderField({
  id,
  label,
  valueText,
  min,
  max,
  step,
  value,
  minLabel,
  maxLabel,
  onChange,
}: {
  id: string;
  label: string;
  valueText: string;
  min: number;
  max: number;
  step: number;
  value: number;
  minLabel: string;
  maxLabel: string;
  onChange: (value: number) => void;
}) {
  const fill = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <label htmlFor={id} className="min-w-0 text-sm font-bold text-[#111827] dark:text-white sm:text-base">
          {label}
        </label>
        <span className="shrink-0 text-sm font-bold text-[#0047FF] sm:text-base">{valueText}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="emi-slider mt-4"
        style={{ ["--fill" as string]: `${fill}%` }}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-valuetext={valueText}
      />
      <div className="mt-2 flex justify-between text-[12px] text-[#9CA3AF] dark:text-[#94A3B8]">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}

export function EmiCalculator() {
  const [amount, setAmount] = useState<number>(content.amount.defaultValue);
  const [tenure, setTenure] = useState<number>(content.tenure.defaultValue);

  const result = useMemo(() => {
    const emi = calcEmi(amount, content.monthlyRate, tenure);
    const totalRepayment = emi * tenure;
    const totalInterest = Math.max(0, totalRepayment - amount);
    const processingFee = amount * content.processingFeeRate;

    return { emi, totalRepayment, totalInterest, processingFee };
  }, [amount, tenure]);

  return (
    <section
      id={content.id}
      className="bg-[#F4F8FF] py-12 sm:py-14 md:py-16 dark:bg-white/5"
    >
      <div className="mx-auto max-w-[1340px] px-4 sm:px-5 md:px-6">
        <Reveal variants={fadeUpBlur}>
          <div className="emi-card rounded-[20px] bg-white p-6 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.28)] dark:bg-[#111A2E] dark:shadow-black/30 sm:rounded-[24px] sm:p-8 md:p-10">
            <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] lg:gap-0 dark:lg:overflow-hidden dark:lg:rounded-2xl dark:lg:border dark:lg:border-[#334155]">
              <div className="emi-panel-left min-w-0 dark:rounded-2xl dark:p-6 lg:pr-10 xl:pr-12">
                <h2 className="heading-gradient text-[clamp(1.1rem,2.8vw,1.9rem)] font-bold tracking-tight max-lg:whitespace-normal lg:whitespace-nowrap">
                  {content.headline}
                </h2>
                <p className="mt-3 max-w-[34rem] text-sm leading-relaxed text-[#6B7280] dark:text-[#94A3B8] sm:text-[15px] sm:leading-6">
                  {content.subcopy}
                </p>

                <div className="mt-8 space-y-8 sm:mt-10">
                  <SliderField
                    id="emi-amount"
                    label={content.amount.label}
                    valueText={formatRupee(amount)}
                    min={content.amount.min}
                    max={content.amount.max}
                    step={content.amount.step}
                    value={amount}
                    minLabel={formatRupee(content.amount.min)}
                    maxLabel={formatRupee(content.amount.max)}
                    onChange={setAmount}
                  />
                  <SliderField
                    id="emi-tenure"
                    label={content.tenure.label}
                    valueText={`${tenure} ${content.tenure.unit}`}
                    min={content.tenure.min}
                    max={content.tenure.max}
                    step={content.tenure.step}
                    value={tenure}
                    minLabel={`${content.tenure.min} ${content.tenure.unit}`}
                    maxLabel={`${content.tenure.max} ${content.tenure.unit}`}
                    onChange={setTenure}
                  />
                </div>
              </div>

              <div aria-hidden className="hidden bg-[#E5E7EB] dark:bg-[#334155] lg:block" />

              <div className="emi-panel-right border-t border-[#E5E7EB] pt-8 dark:rounded-2xl dark:border-t-0 dark:p-6 lg:border-t-0 lg:pt-0 lg:pl-10 xl:pl-12">
                <div className="text-center">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B7280] dark:text-[#94A3B8] sm:text-xs">
                    {content.resultLabel}
                  </p>
                  <p className="mt-2 text-[2rem] font-bold tracking-tight text-[#0047FF] sm:text-[2.35rem]">
                    {formatRupee(result.emi)}
                    <span className="text-[1.15rem] font-bold"> / mo</span>
                  </p>
                </div>

                <div className="mt-6 space-y-3 border-t border-[#E5E7EB] pt-5 text-sm dark:border-white/10">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[#6B7280] dark:text-[#94A3B8]">{content.interestLabel}</span>
                    <span className="font-bold text-[#111827] dark:text-white">{content.monthlyRateLabel}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[#6B7280] dark:text-[#94A3B8]">{content.totalInterestLabel}</span>
                    <span className="font-bold text-[#111827] dark:text-white">{formatRupee(result.totalInterest)}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[#6B7280] dark:text-[#94A3B8]">{content.processingFeeLabel}</span>
                    <span className="font-bold text-[#111827] dark:text-white">{formatRupee(result.processingFee)}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-4 border-t border-dashed border-[#D1D5DB] pt-4 dark:border-white/10">
                  <span className="font-bold text-[#111827] dark:text-white">{content.totalRepaymentLabel}</span>
                  <span className="text-lg font-bold text-[#0047FF]">{formatRupee(result.totalRepayment)}</span>
                </div>

                <div className="mt-8">
                  <Button
                    href={content.cta.href}
                    variant="primary"
                    size="lg"
                    className="min-h-12 rounded-[12px] px-6 text-center text-[16px] font-medium leading-7 tracking-normal shadow-none"
                  >
                    {content.cta.label}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
