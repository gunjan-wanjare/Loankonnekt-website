"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { YakaBrandMark } from "@/components/YakaBrandMark";

const VISIBLE_MS = 2800;
const EXIT_MS = 600;

type PreloaderProps = {
  onComplete?: () => void;
};

/** Crediple-style intro loader — same YAKA mark + tagline as Hero. */
export function Preloader({ onComplete }: PreloaderProps) {
  const [visible, setVisible] = useState(true);
  const finishedRef = useRef(false);

  const finish = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    document.body.classList.remove("preloader-active");
    onComplete?.();
  }, [onComplete]);

  useEffect(() => {
    document.body.classList.add("preloader-active");
    const hideTimer = setTimeout(() => setVisible(false), VISIBLE_MS);
    const fallbackTimer = setTimeout(finish, VISIBLE_MS + EXIT_MS + 200);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(fallbackTimer);
      document.body.classList.remove("preloader-active");
    };
  }, [finish]);

  return (
    <AnimatePresence mode="wait" onExitComplete={finish}>
      {visible ? (
        <motion.div
          key="intro-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: EXIT_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050A18]"
          aria-hidden
        >
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 0.65, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="pointer-events-none absolute rounded-full blur-3xl"
            style={{
              width: 400,
              height: 400,
              background:
                "radial-gradient(circle, rgba(37,99,235,0.28) 0%, rgba(59,130,246,0.1) 45%, transparent 70%)",
            }}
          />

          <motion.div
            initial={{ scale: 2.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center gap-5"
          >
            <YakaBrandMark
              tone="dark"
              logoClassName="h-[120px] w-[120px] sm:h-[150px] sm:w-[150px]"
              taglineClassName="max-w-none text-[11px] sm:text-xs md:text-sm"
              className="max-w-none gap-3 sm:gap-3.5"
            />

            <div className="h-0.5 w-20 overflow-hidden rounded-full bg-white/10">
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-transparent via-[#60A5FA] to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
