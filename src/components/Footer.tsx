"use client";

import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { footer } from "@/content";

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
              <Logo tone="light" size="lg" />
            </Link>
            <p className="mt-3 text-sm font-medium text-[#111827]">
              A <span className="font-bold">YAKA</span> Brand
            </p>
            <p className="mt-3 text-base font-normal leading-[25.36px] tracking-normal text-[#000000]">
              {footer.blurb.join(" ")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {footer.columns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-sm font-bold tracking-tight" style={{ color: "#051325" }}>
                  {col.heading}
                </h3>
                <ul className="mt-1.5 space-y-0">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...getAnchorProps(link.href)}
                        className="block py-0.5 text-sm leading-tight text-[#434657] transition-colors hover:text-[#051325]"
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

        <div className="mt-10 flex flex-col gap-4 border-t border-[#CCDAFF] pt-5 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#000000]">{footer.copyright}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {linkedIn ? (
              <a
                href={linkedIn.href}
                {...getAnchorProps(linkedIn.href)}
                aria-label="LinkedIn"
                className="inline-flex shrink-0 transition-opacity hover:opacity-80"
              >
                <Image
                  src={footer.linkedInIconSrc}
                  alt=""
                  width={32}
                  height={32}
                  unoptimized
                  className="h-8 w-8 object-contain"
                />
              </a>
            ) : null}
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...getAnchorProps(link.href)}
                className="text-sm text-[#000000] transition-colors hover:text-[#051325]"
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
