"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { emiCalculator as content } from "@/content";
import { fadeUpBlur, slideInLeft, slideInRight } from "@/lib/motion";

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
      <div className="flex items-end justify-between gap-4">
        <label htmlFor={id} className="text-sm font-bold text-[#1F2937] sm:text-base">
          {label}
        </label>
        <span className="text-sm font-bold text-brand sm:text-base">{valueText}</span>
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
      <div className="mt-2 flex justify-between text-[12px] text-[#9CA3AF]">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}

export function EmiCalculator() {
  const [amount, setAmount] = useState(content.amount.defaultValue);
  const [tenure, setTenure] = useState(content.tenure.defaultValue);

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
      className="bg-[linear-gradient(180deg,#F4F8FF_0%,#EEF3FF_100%)] py-12 sm:py-14 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal variants={fadeUpBlur} className="mx-auto max-w-3xl text-center">
          <h2 className="text-[1.85rem] font-bold tracking-tight text-[#0B3A82] sm:text-3xl md:text-4xl lg:text-[2.6rem]">
            {content.headline}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#6B7280] sm:text-base">
            {content.subcopy}
          </p>
        </Reveal>

        <div className="mt-8 grid items-center gap-8 sm:mt-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
          <Reveal variants={slideInLeft} className="space-y-10">
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
          </Reveal>

          <Reveal variants={slideInRight}>
            <div className="rounded-[1.5rem] bg-white p-6 shadow-[0_18px_50px_-24px_rgba(15,23,42,0.28)] sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9CA3AF]">
                {content.resultLabel}
              </p>
              <p className="mt-2 text-[2rem] font-extrabold tracking-tight text-brand sm:text-[2.35rem]">
                {formatRupee(result.emi)}{" "}
                <span className="text-[1.15rem] font-bold">/ mo</span>
              </p>

              <div className="mt-5 border-t border-[#E5E7EB] pt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[#6B7280]">{content.interestLabel}</span>
                  <span className="font-semibold text-[#111827]">
                    {content.monthlyRateLabel}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[#6B7280]">{content.totalInterestLabel}</span>
                  <span className="font-semibold text-[#111827]">
                    {formatRupee(result.totalInterest)}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[#6B7280]">{content.processingFeeLabel}</span>
                  <span className="font-semibold text-[#111827]">
                    {formatRupee(result.processingFee)}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-4 border-t border-dashed border-[#D1D5DB] pt-4">
                <span className="font-bold text-[#111827]">
                  {content.totalRepaymentLabel}
                </span>
                <span className="text-lg font-extrabold text-brand">
                  {formatRupee(result.totalRepayment)}
                </span>
              </div>

              <Button
                href={content.cta.href}
                variant="primary"
                size="lg"
                className="mt-6 min-h-12 w-full rounded-[12px] shadow-none"
              >
                {content.cta.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
