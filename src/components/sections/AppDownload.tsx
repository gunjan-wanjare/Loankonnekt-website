"use client";

import { Reveal } from "@/components/ui/Reveal";
import { AppPhone } from "@/components/sections/AppPhone";
import { appDownload } from "@/content";
import { slideInLeft, slideInRight } from "@/lib/motion";

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
      <path d="M16.37 12.63c.03-2.32 1.9-3.44 1.98-3.49-1.08-1.58-2.76-1.8-3.36-1.82-1.43-.14-2.79.84-3.51.84-.73 0-1.84-.82-3.03-.8-1.56.02-3 .9-3.8 2.3-1.62 2.81-.41 6.97 1.16 9.25.77 1.12 1.69 2.37 2.9 2.33 1.16-.05 1.6-.75 3-.75s1.8.75 3.03.73c1.25-.02 2.04-1.14 2.8-2.27.88-1.29 1.24-2.54 1.26-2.6-.03-.01-2.41-.92-2.43-3.72ZM14.6 6.4c.64-.77 1.07-1.85.95-2.92-.92.04-2.03.61-2.69 1.38-.59.68-1.11 1.78-.97 2.83 1.03.08 2.08-.52 2.71-1.29Z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
      <path d="M3.6 2.3c-.4.2-.6.6-.6 1.1v17.2c0 .5.2.9.6 1.1l10.1-9.7L3.6 2.3Z" fill="#4285F4" />
      <path d="M16.8 11.1 13.1 7.5 3.6 2.3l10.1 9.7 3.1-.9Z" fill="#EA4335" />
      <path d="M3.6 21.7 13.1 16.5l3.7-3.6-3.1-.9-10.1 9.7Z" fill="#34A853" />
      <path d="M20.1 10.4c.6.4.9.9.9 1.6s-.3 1.2-.9 1.6l-3.3 1.9-3.7-3.6 3.7-3.6 3.3 2.1Z" fill="#FBBC04" />
    </svg>
  );
}

const storeIcons = {
  apple: AppleIcon,
  google: GooglePlayIcon,
} as const;

export function AppDownload() {
  return (
    <section
      id={appDownload.id}
      className="relative overflow-hidden bg-[linear-gradient(90deg,#040812_0%,#071428_48%,#0B1F4A_100%)] py-12 sm:py-14 md:py-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.28),transparent_62%)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-5 md:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8">
        <Reveal variants={slideInLeft} className="pb-2 lg:pb-6">
          <h2 className="max-w-xl text-[1.6rem] font-bold leading-[1.15] tracking-tight text-white sm:text-[1.8rem] md:text-[2.1rem] lg:text-[2.3rem]">
            {appDownload.headline}
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#94A3B8]">
            {appDownload.subcopy}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {appDownload.stores.map((store) => {
              const Icon = storeIcons[store.key];
              return (
                <a
                  key={store.key}
                  href={store.href}
                  className="inline-flex min-h-12 items-center gap-3 rounded-[12px] border border-white/20 bg-[#0B1220] px-4 py-2 text-white transition-colors hover:bg-[#111827]"
                >
                  <Icon />
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] font-medium tracking-wide text-white/80">
                      {store.eyebrow}
                    </span>
                    <span className="block text-sm font-bold sm:text-[15px]">
                      {store.name}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </Reveal>

        <Reveal variants={slideInRight} className="flex justify-center lg:justify-end">
          <div className="lg:translate-y-4">
            <AppPhone />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
