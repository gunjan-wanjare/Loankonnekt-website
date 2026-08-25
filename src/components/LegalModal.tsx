"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { cookies } from "@/content/cookies";
import { privacy } from "@/content/privacy";
import { terms } from "@/content/terms";
import type { LegalPageId } from "@/hooks/useLegalModal";
import { cn } from "@/lib/utils";

type LegalDoc = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: readonly {
    heading: string;
    bullets?: readonly string[];
    body?: string;
    email?: string;
  }[];
};

const LEGAL_PAGES: Record<LegalPageId, LegalDoc> = {
  privacy,
  terms,
  cookies,
};

type LegalModalProps = {
  activePage: LegalPageId | null;
  onClose: () => void;
};

function LegalDocument({ doc }: { doc: LegalDoc }) {
  return (
    <article className="px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-9">
      <p className="inline-flex rounded-full bg-[#2563EB]/8 px-3 py-1 text-[12px] font-semibold tracking-[0.04em] text-[#2563EB]">
        Last updated · {doc.lastUpdated}
      </p>

      <p className="mt-5 text-[15px] leading-relaxed text-slate-600 sm:text-base dark:text-[#94A3B8]">
        {doc.intro}
      </p>

      <div className="mt-8 space-y-7 sm:mt-9 sm:space-y-8">
        {doc.sections.map((section) => (
          <section
            key={section.heading}
            className="border-t border-navy/8 pt-6 first:border-t-0 first:pt-0 sm:pt-7 first:sm:pt-0 dark:border-white/10"
          >
            <h3 className="text-lg font-semibold tracking-tight text-navy sm:text-xl dark:text-white">
              {section.heading}
            </h3>

            {section.bullets ? (
              <ul className="mt-3.5 list-disc space-y-2.5 pl-5 text-[15px] leading-relaxed text-slate-600 marker:text-[#2563EB] sm:text-base dark:text-[#94A3B8]">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}

            {section.body ? (
              <p className="mt-3.5 text-[15px] leading-relaxed text-slate-600 sm:text-base dark:text-[#94A3B8]">
                {section.body}
                {section.email ? (
                  <>
                    {" "}
                    <a
                      href={`mailto:${section.email}`}
                      className="font-semibold text-[#2563EB] underline-offset-2 hover:underline"
                    >
                      {section.email}
                    </a>
                    .
                  </>
                ) : null}
              </p>
            ) : null}
          </section>
        ))}
      </div>
    </article>
  );
}

export function LegalModal({ activePage, onClose }: LegalModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const doc = activePage ? LEGAL_PAGES[activePage] : null;

  useEffect(() => {
    if (!activePage) return;
    closeBtnRef.current?.focus();
    contentRef.current?.scrollTo(0, 0);
  }, [activePage]);

  return (
    <AnimatePresence>
      {doc ? (
        <motion.div
          key="legal-backdrop"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#050A18]/55 p-4 backdrop-blur-[4px] sm:p-6"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={doc.title}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "relative flex max-h-[min(88vh,900px)] w-full max-w-[920px] flex-col overflow-hidden rounded-[20px] bg-white dark:bg-[#111A2E]",
              "shadow-[0_24px_70px_rgba(5,10,24,0.28),0_2px_8px_rgba(5,10,24,0.08)] dark:shadow-black/30",
              "max-sm:max-h-[92vh] max-sm:rounded-2xl",
            )}
            onClick={(event) => event.stopPropagation()}
          >
            {/* Brand header — blue theme (Loan Konnekt) */}
            <header className="flex shrink-0 items-center justify-between gap-4 bg-gradient-to-br from-[#1E3A8A] via-[#1D4ED8] to-[#2563EB] px-5 py-4 text-white sm:px-8 sm:py-5">
              <div className="min-w-0">
                <p className="text-[11px] font-bold tracking-[0.14em] text-white/80 uppercase">
                  Legal
                </p>
                <h2 className="mt-1 text-[1.25rem] leading-tight font-extrabold tracking-tight sm:text-[1.6rem]">
                  {doc.title}
                </h2>
              </div>
              <button
                ref={closeBtnRef}
                type="button"
                aria-label="Close"
                onClick={onClose}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/18 text-white transition duration-200 hover:rotate-90 hover:bg-white/30"
              >
                <X size={18} strokeWidth={2.2} />
              </button>
            </header>

            <div
              ref={contentRef}
              className={cn(
                "min-h-0 flex-1 overflow-y-auto bg-gradient-to-b from-[#F7F9FC] via-white to-white dark:from-[#111A2E] dark:via-[#111A2E] dark:to-[#111A2E]",
                "[&::-webkit-scrollbar]:w-2.5",
                "[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#2563EB]/35",
                "[&::-webkit-scrollbar-thumb]:border-[3px] [&::-webkit-scrollbar-thumb]:border-transparent",
                "[&::-webkit-scrollbar-thumb]:bg-clip-padding",
                "hover:[&::-webkit-scrollbar-thumb]:bg-[#2563EB]/55",
              )}
            >
              <LegalDocument doc={doc} />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
