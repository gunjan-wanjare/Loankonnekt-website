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
            {footer.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...getAnchorProps(link.href)}
                aria-label={link.label}
                className="inline-flex items-center gap-1.5 text-[12px] text-slate-500 transition-colors hover:text-white sm:text-sm"
              >
                {link.label.toLowerCase() === "linkedin" ? (
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="h-[13px] w-[13px] fill-current"
                  >
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31zM5.33 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.55V9h3.56v11.45z" />
                  </svg>
                ) : (
                  link.label
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
