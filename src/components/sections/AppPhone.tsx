"use client";

import { Bell, Briefcase, GraduationCap, UserRound } from "lucide-react";
import { process as processContent } from "@/content";
import { cn } from "@/lib/utils";

const categoryIcons = {
  personal: UserRound,
  business: Briefcase,
  education: GraduationCap,
} as const;

export function AppPhone({ className }: { className?: string }) {
  const { app } = processContent;
  const initial = app.name.slice(0, 1);

  return (
    <div className={cn("relative mx-auto w-[270px] sm:w-[290px] lg:w-[300px]", className)}>
      <div className="rounded-[2.65rem] bg-[#111827] p-[10px] shadow-[0_40px_80px_-24px_rgba(0,0,0,0.65)] ring-1 ring-white/10">
        <div className="relative overflow-hidden rounded-[2.1rem] bg-white">
          <div className="absolute left-1/2 top-2 z-20 h-[22px] w-[92px] -translate-x-1/2 rounded-full bg-[#111827]" />

          <div className="flex items-center justify-between px-6 pb-1 pt-8 text-[11px] font-semibold text-[#111827]">
            <span>9:41</span>
            <span className="flex items-center gap-1 text-[10px] tracking-tight">
              •••
              <span className="inline-block h-2.5 w-4 rounded-[2px] border border-[#111827]" />
            </span>
          </div>

          <div className="px-5 pb-8 pt-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#DBEAFE] text-sm font-bold text-brand">
                  {initial}
                </span>
                <div>
                  <p className="text-[15px] font-bold leading-tight text-[#111827]">
                    {app.greeting}{" "}
                    <span aria-hidden>👋</span>
                  </p>
                  <p className="mt-0.5 text-[11px] text-[#6B7280]">
                    {app.subcopy}
                  </p>
                </div>
              </div>
              <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#F3F4F6] text-[#111827]">
                <Bell size={16} strokeWidth={2} />
              </span>
            </div>

            <div className="mt-5 rounded-[1.35rem] bg-brand px-5 pb-5 pt-6 text-center text-white">
              <p className="text-[1.05rem] font-bold leading-snug">
                {app.eligibilityTitle}
              </p>
              <p className="mt-2 text-[11px] leading-relaxed text-white/85">
                {app.eligibilitySub}
              </p>
              <a
                href={app.eligibilityHref}
                className="mt-5 inline-flex min-h-10 w-full items-center justify-center rounded-full bg-white text-[13px] font-bold text-brand"
              >
                {app.eligibilityCta}
              </a>
            </div>

            <div className="mt-6">
              <p className="text-[15px] font-bold text-[#111827]">
                {app.categoriesLabel}
              </p>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {app.categories.map((category) => {
                  const Icon = categoryIcons[category.key];
                  return (
                    <a
                      key={category.key}
                      href={category.href}
                      className="flex flex-col items-center gap-2"
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F1FF] text-brand">
                        <Icon size={22} strokeWidth={2} />
                      </span>
                      <span className="text-[11px] font-medium text-[#4B5563]">
                        {category.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
