"use client";

import { useCallback, useEffect, useState } from "react";

export type LegalPageId = "privacy" | "terms" | "cookies";

const LEGAL_MODAL_IDS = new Set<string>(["privacy", "terms", "cookies"]);

export function useLegalModal() {
  const [activePage, setActivePage] = useState<LegalPageId | null>(null);

  const openLegal = useCallback((modalId: string) => {
    if (LEGAL_MODAL_IDS.has(modalId)) {
      setActivePage(modalId as LegalPageId);
    }
  }, []);

  const closeLegal = useCallback(() => {
    setActivePage(null);
  }, []);

  useEffect(() => {
    if (!activePage) return undefined;

    document.body.classList.add("modal-open");

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLegal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activePage, closeLegal]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const href = anchor.getAttribute("href");
      if (!href?.startsWith("#legal-")) return;

      event.preventDefault();
      event.stopPropagation();
      openLegal(href.replace("#legal-", ""));
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [openLegal]);

  return { activePage, openLegal, closeLegal };
}
