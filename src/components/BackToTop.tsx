"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { springSnappy } from "@/lib/motion";

const SHOW_AFTER_PX = 400;

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 24, scale: 0.7 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.94 }}
          transition={springSnappy}
          className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand bg-brand text-white shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:right-6 sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))] sm:h-12 sm:w-12"
        >
          <motion.span
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowUp size={18} strokeWidth={2} aria-hidden />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
