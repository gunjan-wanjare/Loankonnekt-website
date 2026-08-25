"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { footer } from "@/content";
import { cn, isInternalHref } from "@/lib/utils";

export function Footer() {
  const isExternalHref = (href: string) => /^https?:\/\//i.test(href);
  const getAnchorProps = (href: string) =>
    isExternalHref(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};

  const legalLinks = footer.legal.filter((link) =>
    ["privacy policy", "terms of service"].includes(link.label.toLowerCase()),
  );

  const renderHref = (
    href: string,
    className: string,
    children: React.ReactNode,
    extra?: { "aria-label"?: string },
  ) => {
    if (isInternalHref(href)) {
      return (
        <Link href={href} className={className} {...extra}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} {...getAnchorProps(href)} className={className} {...extra}>
        {children}
      </a>
    );
  };

  return (
    <footer className="border-t border-[#E5E7EB] bg-white dark:border-white/8 dark:bg-[#0A0F1E]">
      <div className="mx-auto w-full max-w-[1340px] px-4 py-8 sm:px-5 md:px-6 md:py-10">
        <div className="grid grid-cols-2 items-start gap-x-8 gap-y-8 sm:grid-cols-4 lg:grid-cols-[minmax(14rem,32%)_repeat(4,minmax(0,1fr))] lg:gap-x-6 xl:gap-x-8">
          <div className="col-span-2 sm:col-span-4 lg:col-span-1">
            <Link href="/" aria-label="LoanKonnekt" className="inline-flex">
              <Logo tone="light" size="lg" />
            </Link>
            <p className="mt-2 text-sm font-medium leading-none text-[#111827] dark:text-[#E2E8F0]">
              A <span className="font-bold">YAKA</span> Brand
            </p>
            <p className="mt-2.5 max-w-92 text-sm font-normal leading-5 tracking-normal text-[#000000] dark:text-[#94A3B8]">
              {footer.blurb.join(" ")}
            </p>
          </div>

          {footer.columns.map((col, index) => (
            <div
              key={col.heading}
              className={cn(
                "min-w-0",
                index > 0 && "lg:border-l lg:border-[#E5E7EB] lg:pl-6 xl:pl-8 dark:lg:border-white/8",
              )}
            >
              <h3 className="sr-only">{col.heading}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {renderHref(
                      link.href,
                      "block text-sm leading-5 text-[#000000] transition-colors hover:text-[#051325] dark:text-white dark:hover:text-white",
                      link.label,
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-[#CCDAFF] pt-4 dark:border-white/10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="shrink-0 text-sm leading-5 text-[#000000] dark:text-[#94A3B8] sm:leading-none">
              {footer.copyright}
            </p>
            <nav aria-label="Legal" className="flex flex-wrap items-center sm:justify-end">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-2 sm:gap-x-10">
                {legalLinks.map((link) => (
                  <span key={link.label}>
                    {renderHref(
                      link.href,
                      "whitespace-nowrap text-sm leading-none text-[#000000] transition-colors hover:text-[#051325] dark:text-white dark:hover:text-white",
                      link.label,
                    )}
                  </span>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
