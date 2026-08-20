import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** In-app path that should use Next.js client navigation. */
export function isInternalHref(href: string) {
  if (!href) return false;
  if (
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("sms:") ||
    href.startsWith("#")
  ) {
    return false;
  }
  if (/^https?:\/\//i.test(href) || href.startsWith("//")) return false;
  return href.startsWith("/");
}
