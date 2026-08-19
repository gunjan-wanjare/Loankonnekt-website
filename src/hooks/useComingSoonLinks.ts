"use client";

import { useCallback, useEffect, useState } from "react";

function formatPageName(href: string, linkText: string) {
  if (linkText) return linkText;

  const slug = href.replace(/^#\/?/, "").replace(/^\//, "");
  if (!slug) return "This Page";

  return slug
    .split(/[-_/]/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/** Routes that already have real pages — never trigger Coming Soon */
const REAL_ROUTES = new Set(["/", "/loans", "/how-it-works", "/about", "/contact"]);

function normalizePath(href: string) {
  try {
    const url = new URL(href, window.location.origin);
    return url.pathname.replace(/\/$/, "") || "/";
  } catch {
    return href.split("?")[0].split("#")[0] || "/";
  }
}

function shouldShowComingSoon(anchor: HTMLAnchorElement) {
  if (anchor.dataset.comingSoon === "false") return false;

  const href = anchor.getAttribute("href");
  if (!href) return false;

  if (href.startsWith("mailto:") || href.startsWith("tel:")) return false;
  if (href === "/" || href === "#" || href === "#top") return false;
  if (href.startsWith("#legal-")) return false;
  if (/^https?:\/\//i.test(href)) return false;

  // Explicit mark
  if (anchor.dataset.comingSoon === "true") return true;

  if (href.startsWith("#")) {
    const id = href.slice(1);
    if (!id) return false;
    // Real in-page section → allow scroll
    if (document.getElementById(id)) return false;
  }

  const path = normalizePath(href);
  if (REAL_ROUTES.has(path)) return false;

  return href.startsWith("#") || href.startsWith("/");
}

export function useComingSoonLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const [pageName, setPageName] = useState("");

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (!shouldShowComingSoon(anchor)) return;

      event.preventDefault();
      event.stopPropagation();

      const name = formatPageName(
        anchor.getAttribute("href") ?? "",
        anchor.getAttribute("aria-label")?.trim() ||
          anchor.textContent?.trim() ||
          "",
      );
      setPageName(name);
      setIsOpen(true);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return { isOpen, pageName, closeModal };
}
