"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Preloader } from "@/components/Preloader";
import { ComingSoonModal } from "@/components/ComingSoonModal";
import {
  FloatingLogo,
  IntroContext,
} from "@/components/FloatingLogo";
import { useComingSoonLinks } from "@/hooks/useComingSoonLinks";
import {
  getInitialIntroPhase,
  markHomeIntroCompleted,
  type HomeIntroPhase,
} from "@/lib/homeIntro";

function ScrollToTopOnLoad() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    if (window.location.hash) {
      const { pathname, search } = window.location;
      history.replaceState(null, "", `${pathname}${search}`);
    }
    window.scrollTo(0, 0);
  }, []);

  return null;
}

/** Site chrome: preloader → flying YAKA → ready (+ coming soon). */
export function AppShell({ children }: { children: React.ReactNode }) {
  const { isOpen, pageName, closeModal } = useComingSoonLinks();
  const [phase, setPhase] = useState<HomeIntroPhase>(() => getInitialIntroPhase());
  const loaderDoneRef = useRef(false);

  const handleLoaderComplete = useCallback(() => {
    if (loaderDoneRef.current) return;
    loaderDoneRef.current = true;
    setPhase("flying");
  }, []);

  const handleIntroComplete = useCallback(() => {
    markHomeIntroCompleted();
    setPhase("ready");
  }, []);

  return (
    <IntroContext.Provider value={{ phase }}>
      <ScrollToTopOnLoad />

      {phase === "loading" ? (
        <Preloader onComplete={handleLoaderComplete} />
      ) : null}

      {(phase === "flying" || phase === "ready") && (
        <FloatingLogo phase={phase} onIntroComplete={handleIntroComplete} />
      )}

      {children}
      <ComingSoonModal isOpen={isOpen} pageName={pageName} onClose={closeModal} />
    </IntroContext.Provider>
  );
}
