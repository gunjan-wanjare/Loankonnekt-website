"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { footer } from "@/content";

function LinkedInIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Footer() {
  const isExternalHref = (href: string) => /^https?:\/\//i.test(href);
  const getAnchorProps = (href: string) =>
    isExternalHref(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};

  const linkedIn = footer.legal.find((link) => link.label.toLowerCase() === "linkedin");
  const legalLinks = footer.legal.filter(
    (link) => link.label.toLowerCase() !== "linkedin",
  );

  return (
    <footer className="border-t border-[#E5E7EB] bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-5 md:px-8 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,2.2fr)] lg:gap-12">
          <div className="max-w-sm">
            <Link href="/" aria-label="LoanKonnekt" className="inline-flex">
              <Logo tone="light" />
            </Link>
            <p className="mt-3 text-sm font-medium text-[#111827]">
              A <span className="font-bold">YAKA</span> Brand
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#374151]">
              {footer.blurb.join(" ")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {footer.columns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-sm font-bold tracking-tight text-[#111827]">
                  {col.heading}
                </h3>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...getAnchorProps(link.href)}
                        className="text-sm text-[#6B7280] transition-colors hover:text-brand"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[#E5E7EB] pt-5 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#111827]">{footer.copyright}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {linkedIn ? (
              <a
                href={linkedIn.href}
                {...getAnchorProps(linkedIn.href)}
                aria-label="LinkedIn"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white transition-opacity hover:opacity-90"
              >
                <LinkedInIcon />
              </a>
            ) : null}
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...getAnchorProps(link.href)}
                className="text-sm text-[#6B7280] transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
