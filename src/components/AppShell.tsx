"use client";

import { Preloader } from "@/components/Preloader";
import { ComingSoonModal } from "@/components/ComingSoonModal";
import { useComingSoonLinks } from "@/hooks/useComingSoonLinks";

/** Site chrome that applies on every page (preloader + coming soon). */
export function AppShell({ children }: { children: React.ReactNode }) {
  const { isOpen, pageName, closeModal } = useComingSoonLinks();

  return (
    <>
      <Preloader />
      {children}
      <ComingSoonModal isOpen={isOpen} pageName={pageName} onClose={closeModal} />
    </>
  );
}
