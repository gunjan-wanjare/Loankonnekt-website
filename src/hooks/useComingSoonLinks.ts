"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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

/** Routes that already have real pages */
const REAL_ROUTES = new Set(["/", "/loans", "/how-it-works", "/about", "/contact"]);

/** App / store destinations — Coming Soon modal, not a contact redirect */
const COMING_SOON_PATHS = new Set(["/download"]);

function normalizePath(href: string) {
  try {
    const url = new URL(href, window.location.origin);
    return url.pathname.replace(/\/$/, "") || "/";
  } catch {
    return href.split("?")[0].split("#")[0] || "/";
  }
}

function isSafeInternalHref(href: string) {
  if (!href) return false;
  if (href.startsWith("mailto:") || href.startsWith("tel:")) return false;
  if (/^https?:\/\//i.test(href)) return false;
  return href.startsWith("/") || href.startsWith("#");
}

function shouldShowComingSoon(anchor: HTMLAnchorElement) {
  if (anchor.dataset.comingSoon === "false") return false;
  if (anchor.dataset.comingSoon === "true") return true;

  const href = anchor.getAttribute("href");
  if (!href || !isSafeInternalHref(href)) return false;
  if (href === "/" || href === "#" || href === "#top") return false;
  if (href.startsWith("#legal-")) return false;

  return COMING_SOON_PATHS.has(normalizePath(href));
}

function shouldRedirectToContact(anchor: HTMLAnchorElement) {
  if (anchor.dataset.comingSoon === "true") return false;
  if (anchor.dataset.contactRedirect === "false") return false;

  const href = anchor.getAttribute("href");
  if (!href || !isSafeInternalHref(href)) return false;
  if (href === "/" || href === "#" || href === "#top") return false;
  if (href.startsWith("#legal-")) return false;

  if (href.startsWith("#")) {
    const id = href.slice(1);
    return Boolean(id) && !document.getElementById(id);
  }

  const path = normalizePath(href);
  if (REAL_ROUTES.has(path) || COMING_SOON_PATHS.has(path)) return false;
  return path.startsWith("/");
}

export function useComingSoonLinks() {
  const router = useRouter();
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

      if (shouldShowComingSoon(anchor)) {
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
        return;
      }

      if (shouldRedirectToContact(anchor)) {
        event.preventDefault();
        event.stopPropagation();
        router.push("/contact/");
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [router]);

  return { isOpen, pageName, closeModal };
}
