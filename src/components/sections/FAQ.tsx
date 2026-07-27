"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { faq } from "@/content";
import { fadeUp, fadeUpBlur, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState(-1);

  return (
    <section id={faq.id} className="bg-white py-10">
      <div className="mx-auto max-w-3xl px-4 sm:px-5 md:px-8">
        <Reveal variants={fadeUpBlur} className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF2FF] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1D4ED8] sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" aria-hidden />
            {faq.badge}
          </span>
          <h2 className="mt-5 text-[1.75rem] font-bold tracking-tight text-[#0F172A] sm:text-3xl md:text-4xl lg:text-[2.75rem]">
            {faq.headline}{" "}
            <span className="bg-gradient-to-b from-[#2563EB] via-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">
              {faq.headlineAccent}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[#64748B] sm:text-base">
            {faq.subcopy}
          </p>
        </Reveal>

        <Stagger
          className="mt-8 space-y-3 sm:mt-10 sm:space-y-3"
          variants={staggerContainer}
        >
          {faq.items.map((item, index) => {
            const isOpen = open === index;
            return (
              <StaggerItem key={item.q} variants={fadeUp}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] transition-colors",
                    isOpen && "border-[#BFDBFE] bg-[#F0F7FF]",
                  )}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-[15px] font-semibold tracking-tight text-[#0F172A] sm:text-base">
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center text-[#2563EB]"
                    >
                      <ChevronDown size={20} strokeWidth={2.25} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-[#64748B] sm:px-6 sm:pr-14 sm:text-[15px]">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
