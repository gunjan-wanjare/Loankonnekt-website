"use client";

/**
 * Smooth-scroll to an in-page section, accounting for the fixed header.
 * Used when the mobile menu needs to close before scrolling.
 */
export function scrollToSection(hash: string) {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  if (!id) return;

  const el = document.getElementById(id);
  if (!el) return;

  const header = document.querySelector("header");
  const headerHeight = header?.getBoundingClientRect().height ?? 80;
  const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 12;

  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  history.pushState(null, "", `#${id}`);
}
