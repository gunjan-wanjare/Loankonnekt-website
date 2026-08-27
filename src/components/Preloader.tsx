"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { YakaBrandMark } from "@/components/YakaBrandMark";

const BRAND_MS = 1400;
const YAKA_MS = 1600;
const EXIT_MS = 600;

type PreloaderProps = {
  onComplete?: () => void;
};

type Stage = "brand" | "yaka" | "exiting";

function LoadingBar({ delay = 0.5 }: { delay?: number }) {
  return (
    <div className="h-0.5 w-20 overflow-hidden rounded-full bg-white/10">
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay }}
        className="h-full w-1/2 rounded-full bg-gradient-to-r from-transparent via-[#60A5FA] to-transparent"
      />
    </div>
  );
}

/** Two-part intro: LoanKonnekt wordmark, then the YAKA brand mark + tagline. */
export function Preloader({ onComplete }: PreloaderProps) {
  const [stage, setStage] = useState<Stage>("brand");
  const finishedRef = useRef(false);

  const finish = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    document.body.classList.remove("preloader-active");
    onComplete?.();
  }, [onComplete]);

  useEffect(() => {
    document.body.classList.add("preloader-active");
    const toYaka = setTimeout(() => setStage("yaka"), BRAND_MS);
    const toExit = setTimeout(() => setStage("exiting"), BRAND_MS + YAKA_MS);
    const fallbackTimer = setTimeout(
      finish,
      BRAND_MS + YAKA_MS + EXIT_MS + 200,
    );
    return () => {
      clearTimeout(toYaka);
      clearTimeout(toExit);
      clearTimeout(fallbackTimer);
      document.body.classList.remove("preloader-active");
    };
  }, [finish]);

  const visible = stage !== "exiting";

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
              width: "min(400px, 70vw)",
              height: "min(400px, 70vw)",
              background:
                "radial-gradient(circle, rgba(37,99,235,0.28) 0%, rgba(59,130,246,0.1) 45%, transparent 70%)",
            }}
          />

          <motion.div
            initial={{ scale: 3.5, opacity: 0, filter: "blur(18px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex min-h-[17.5rem] w-[min(90vw,22rem)] flex-col items-center justify-center gap-5"
          >
            <AnimatePresence mode="wait">
              {stage === "brand" ? (
                <motion.div
                  key="loankonnekt-mark"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <Logo tone="dark" size="xl" />
                </motion.div>
              ) : (
                <motion.div
                  key="yaka-mark"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <YakaBrandMark
                    tone="dark"
                    logoClassName="h-16 w-16 sm:h-20 sm:w-20"
                    taglineClassName="max-w-none text-xs sm:text-sm"
                    className="max-w-none gap-3 sm:gap-3.5"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <LoadingBar delay={0.5} />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
