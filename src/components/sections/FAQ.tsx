"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { faq } from "@/content";
import { fadeUp, fadeUpBlur, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id={faq.id} className="bg-[#F5F7FB] py-12 sm:py-14 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-5 md:px-8">
        <Reveal variants={fadeUpBlur} className="text-center">
          <h2 className="heading-gradient text-[1.6rem] font-bold tracking-tight sm:text-[1.75rem] md:text-[2rem] lg:text-[2.2rem]">
            {faq.headline}
          </h2>
        </Reveal>

        <Stagger
          className="mt-8 space-y-3 sm:mt-10 sm:space-y-4"
          variants={staggerContainer}
        >
          {faq.items.map((item, index) => {
            const isOpen = open === index;
            return (
              <StaggerItem key={item.q} variants={fadeUp}>
                <div className="overflow-hidden rounded-[1.15rem] border border-[#E5E7EB] bg-white shadow-[0_8px_24px_-16px_rgba(15,23,42,0.2)]">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-[15px] font-bold tracking-tight text-[#111827] sm:text-base">
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center text-[#6B7280]",
                      )}
                    >
                      <ChevronDown size={18} strokeWidth={2.25} />
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
                        <p className="px-5 pb-5 text-sm leading-relaxed text-[#4B5563] sm:px-6 sm:pr-14 sm:text-[15px]">
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
