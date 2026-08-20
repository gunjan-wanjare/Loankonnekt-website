"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { appDownload } from "@/content";
import { slideInLeft, slideInRight } from "@/lib/motion";

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[28px] w-[28px] shrink-0" fill="currentColor" aria-hidden>
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zm3.378-3.066c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.56-1.702z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[26px] w-[26px] shrink-0" fill="currentColor" aria-hidden>
      <path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92Zm10.89 10.893 2.302 2.302-10.937 6.333 8.635-8.635Zm3.199-3.199 2.807 1.626a1 1 0 0 1 0 1.732l-2.808 1.626L15.206 12l2.492-2.492ZM5.864 2.658 16.802 8.99l-2.302 2.302-8.636-8.634Z" />
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
      className="relative bg-[#051325]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute right-[-8%] top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,71,255,0.42)_0%,rgba(0,71,255,0.12)_42%,transparent_68%)] sm:h-[38rem] sm:w-[38rem]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-end gap-8 px-4 pt-10 sm:px-5 sm:pt-12 md:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-8 lg:pt-14">
        <Reveal variants={slideInLeft} className="pb-10 lg:-translate-y-8 lg:pb-16">
          <h2 className="max-w-xl text-[1.85rem] font-bold leading-[1.12] tracking-tight text-white sm:text-[2.15rem] md:text-[2.45rem] lg:text-[2.75rem]">
            <span className="block">{appDownload.headlineLine1}</span>
            <span className="block">{appDownload.headlineLine2}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-[#94A3B8] sm:text-lg">
            {appDownload.subcopy}
          </p>

          <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5">
            {appDownload.stores.map((store) => {
              const Icon = storeIcons[store.key];
              return (
                <Link
                  key={store.key}
                  href={store.href}
                  data-coming-soon="true"
                  className="inline-flex w-full items-center gap-2.5 rounded-[10px] border border-solid border-[#CCDAFF]/55 bg-transparent px-3.5 py-2.5 text-white transition-colors hover:bg-white/5 sm:w-auto sm:px-4 sm:py-2.5"
                >
                  <Icon />
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] font-normal tracking-[0.02em] text-white/85">
                      {store.eyebrow}
                    </span>
                    <span className="block text-[15px] font-bold sm:text-[16px]">
                      {store.name}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </Reveal>

        <Reveal variants={slideInRight} className="flex justify-center self-end lg:justify-end">
          <div className="relative w-[260px] sm:w-[300px] lg:w-[340px]">
            <Image
              src={appDownload.phoneSrc}
              alt="LoanKonnekt app — check loan eligibility"
              width={311}
              height={454}
              unoptimized
              className="h-auto w-full object-contain drop-shadow-[0_32px_60px_rgba(0,0,0,0.45)]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
