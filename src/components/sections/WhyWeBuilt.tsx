"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { whyWeBuilt } from "@/content/about";
import { slideInLeft, slideInRight } from "@/lib/motion";

export function WhyWeBuilt() {
  return (
    <section className="bg-white py-12 sm:py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
          <Reveal variants={slideInLeft} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-6 -top-6 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.16),transparent_65%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-8 -right-6 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.14),transparent_65%)]"
            />
            <div className="relative overflow-hidden rounded-[1.5rem] shadow-[0_24px_60px_-28px_rgba(15,23,42,0.3)]">
              <Image
                src={whyWeBuilt.image.src}
                alt={whyWeBuilt.image.alt}
                width={490}
                height={426}
                unoptimized
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal variants={slideInRight}>
            <h2 className="heading-gradient text-[1.75rem] font-bold leading-none tracking-normal sm:text-[2rem] lg:text-[40px]">
              {whyWeBuilt.headline}
            </h2>
            <p className="mt-5 text-[1.25rem] font-semibold leading-6 tracking-normal text-[#111827] lg:text-[24px] lg:leading-6">
              {whyWeBuilt.lead}
            </p>
            <div className="mt-4 space-y-4">
              {whyWeBuilt.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base font-normal leading-[1.6] tracking-normal text-[#4B5563] lg:text-[20px] lg:leading-[30px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
