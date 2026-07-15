"use client";

import { Logo } from "@/components/ui/Logo";
import { footer } from "@/content";

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
