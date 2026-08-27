"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Preloader } from "@/components/Preloader";
import { ComingSoonModal } from "@/components/ComingSoonModal";
import { LegalModal } from "@/components/LegalModal";
import {
  FloatingLogo,
  IntroContext,
} from "@/components/FloatingLogo";
import { ScrollHandoffProvider } from "@/components/ScrollHandoff";
import { useComingSoonLinks } from "@/hooks/useComingSoonLinks";
import { useLegalModal } from "@/hooks/useLegalModal";
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
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";
  const { isOpen, pageName, closeModal } = useComingSoonLinks();
  const { activePage, closeLegal } = useLegalModal();
  const [phase, setPhase] = useState<HomeIntroPhase>(() =>
    getInitialIntroPhase(),
  );
  const loaderDoneRef = useRef(false);

  useEffect(() => {
    if (!isHome) {
      setPhase("ready");
      return;
    }
    setPhase(getInitialIntroPhase());
  }, [isHome, pathname]);

  const handleLoaderComplete = useCallback(() => {
    if (loaderDoneRef.current) return;
    loaderDoneRef.current = true;
    setPhase("flying");
  }, []);

  const handleIntroComplete = useCallback(() => {
    markHomeIntroCompleted();
    setPhase("ready");
  }, []);

  const showIntro = isHome && phase !== "ready";

  return (
    <IntroContext.Provider value={{ phase: isHome ? phase : "ready" }}>
      <ScrollHandoffProvider>
        <ScrollToTopOnLoad />

        {showIntro && phase === "loading" ? (
          <Preloader onComplete={handleLoaderComplete} />
        ) : null}

        {showIntro && phase === "flying" ? (
          <FloatingLogo phase={phase} onIntroComplete={handleIntroComplete} />
        ) : null}

        <Header />
        {children}
        <Footer />
        <BackToTop />
        <ComingSoonModal isOpen={isOpen} pageName={pageName} onClose={closeModal} />
        <LegalModal activePage={activePage} onClose={closeLegal} />
      </ScrollHandoffProvider>
    </IntroContext.Provider>
  );
}
