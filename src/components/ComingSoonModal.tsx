"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, X } from "lucide-react";
import { cn } from "@/lib/utils";

type ComingSoonModalProps = {
  isOpen: boolean;
  pageName: string;
  onClose: () => void;
};

export function ComingSoonModal({
  isOpen,
  pageName,
  onClose,
}: ComingSoonModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    document.body.classList.add("modal-open");
    closeBtnRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          key="coming-soon-backdrop"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#050A18]/55 p-5 backdrop-blur-[4px]"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="coming-soon-title"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "relative w-full max-w-[420px] rounded-[20px] bg-white p-8 text-center shadow-[0_24px_64px_rgba(5,10,24,0.22)]",
              "sm:p-11",
            )}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeBtnRef}
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-navy"
            >
              <X size={18} strokeWidth={2} />
            </button>

            <div
              aria-hidden
              className="mx-auto mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#2563EB]/10 text-[#2563EB]"
            >
              <Clock size={32} strokeWidth={2} />
            </div>

            <p className="mb-2 text-[13px] font-semibold tracking-[0.06em] text-[#2563EB] uppercase">
              Page Coming Soon
            </p>
            <h2
              id="coming-soon-title"
              className="mb-3 text-[1.5rem] leading-tight font-extrabold tracking-tight text-navy sm:text-[1.875rem]"
            >
              {pageName}
            </h2>
            <p className="mb-7 text-[15px] leading-relaxed text-slate-500">
              We&apos;re working hard to bring you this page. Stay tuned —
              something powerful is on the way!
            </p>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex min-w-[140px] items-center justify-center rounded-full bg-[#2563EB] px-7 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
            >
              Got it
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
