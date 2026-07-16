"use client";

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

function FooterBrand() {
  return (
    <div className="flex flex-col items-start">
      <a href="/" aria-label="LoanKonnekt" className="inline-flex text-xl sm:text-[1.35rem]">
        <Logo tone="dark" />
      </a>
      <p className="mt-2.5 text-[12px] tracking-wide text-white">
        A <span className="font-bold">YAKA</span> Brand
      </p>
    </div>
  );
}

export function Footer() {
  const isExternalHref = (href: string) => /^https?:\/\//i.test(href);
  const getAnchorProps = (href: string) =>
    isExternalHref(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <footer id="contact" className="border-t border-white/10 bg-[#050A18] text-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-5 sm:px-6 md:px-8 md:py-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="max-w-md shrink-0 lg:max-w-sm">
            <FooterBrand />
            <p className="mt-2.5 max-w-[17.5rem] text-[13px] leading-[1.55] text-slate-400 sm:max-w-[19rem] sm:text-sm sm:leading-relaxed">
              {footer.blurb.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>

          <div className="grid w-full grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4 sm:gap-x-6 lg:max-w-3xl lg:gap-7">
            {footer.columns.map((col) => (
              <div key={col.heading} className="min-w-0">
                <h3 className="text-[13px] font-semibold tracking-tight text-white sm:text-sm">
                  {col.heading}
                </h3>
                <ul className="mt-2 space-y-1.5 sm:mt-2.5 sm:space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...getAnchorProps(link.href)}
                        className="block text-[13px] leading-snug text-slate-400 transition-colors hover:text-white sm:text-sm"
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

        <div className="mt-5 flex flex-col gap-2.5 border-t border-white/10 pt-4 sm:mt-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p className="text-[12px] leading-relaxed text-slate-500 sm:text-sm">
            {footer.copyright}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {footer.legal.map((link) =>
              link.label.toLowerCase() === "linkedin" ? (
                <a
                  key={link.label}
                  href={link.href}
                  {...getAnchorProps(link.href)}
                  aria-label="LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.08] text-slate-300 transition-colors hover:bg-brand hover:text-white"
                >
                  <LinkedInIcon />
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  {...getAnchorProps(link.href)}
                  className="text-[12px] text-slate-500 transition-colors hover:text-white sm:text-sm"
                >
                  {link.label}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
