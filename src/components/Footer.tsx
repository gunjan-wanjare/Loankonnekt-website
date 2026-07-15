"use client";

import { footer } from "@/content";
import { cn } from "@/lib/utils";

function FooterBrand() {
  return (
    <a
      href="/"
      className="inline-flex items-center gap-2.5"
      aria-label="LoanKonnekt"
    >
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-[12px] font-bold tracking-tight text-white">
        LK
      </span>
      <span className="text-base font-semibold tracking-tight text-white sm:text-[1.05rem]">
        LoanKonnekt
      </span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050A18] text-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-14 md:px-8 lg:py-16">
        {/* Brand + link columns */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="max-w-md shrink-0 lg:max-w-sm">
            <FooterBrand />
            <p className="mt-4 text-[13px] leading-relaxed text-slate-400 sm:mt-5 sm:text-sm sm:text-[15px]">
              {footer.blurb}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:mt-6">
              {footer.social.map(({ label, abbr, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.08] text-[10px] font-semibold tracking-wide text-slate-300 transition-colors hover:bg-[#2563EB] hover:text-white"
                >
                  {abbr}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns — 2x2 on mobile, 4-col from sm */}
          <div className="grid w-full grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-6 lg:max-w-3xl lg:gap-8">
            {footer.columns.map((col) => (
              <div key={col.heading} className="min-w-0">
                <h3 className="text-[13px] font-semibold tracking-tight text-white sm:text-sm">
                  {col.heading}
                </h3>
                <ul className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
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

        {/* Newsletter */}
        <div className="mt-10 rounded-2xl bg-[#0B1428] p-4 sm:mt-12 sm:p-6">
          <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="min-w-0 lg:max-w-md">
              <p className="text-[15px] font-semibold tracking-tight text-white sm:text-lg">
                {footer.newsletter.heading}
              </p>
              <p className="mt-1 text-[13px] leading-relaxed text-slate-400 sm:text-sm">
                {footer.newsletter.description}
              </p>
            </div>

            <form
              className="flex w-full flex-col gap-2.5 sm:flex-row sm:items-center lg:w-auto lg:max-w-md lg:flex-1"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder={footer.newsletter.placeholder}
                className={cn(
                  "min-h-11 w-full min-w-0 flex-1 rounded-xl border border-white/10 bg-[#050A18] px-4 text-sm text-white outline-none",
                  "placeholder:text-slate-500 focus:border-[#2563EB]/50",
                )}
              />
              <button
                type="submit"
                className="inline-flex min-h-11 w-full shrink-0 items-center justify-center rounded-xl bg-[#2563EB] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8] sm:w-auto"
              >
                {footer.newsletter.submitLabel}
              </button>
            </form>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className="text-[12px] leading-relaxed text-slate-500 sm:text-sm">
            {footer.copyright}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {footer.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12px] text-slate-500 transition-colors hover:text-white sm:text-sm"
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
