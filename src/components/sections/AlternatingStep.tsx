"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { slideInLeft, slideInRight } from "@/lib/motion";
import { cn } from "@/lib/utils";

type AlternatingStepProps = {
  title: string;
  description: string;
  bullets: readonly string[];
  image: { src: string; alt: string };
  imageSide: "left" | "right";
  isFirst?: boolean;
};

export function AlternatingStep({
  title,
  description,
  bullets,
  image,
  imageSide,
  isFirst = false,
}: AlternatingStepProps) {
  const textContent = (
    <Reveal variants={imageSide === "left" ? slideInRight : slideInLeft}>
      <h3
        className="heading-gradient text-[1.55rem] font-bold tracking-tight sm:text-[1.75rem]"
        style={{ fontWeight: 700 }}
      >
        {title}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-[#4B5563] sm:text-base dark:text-[#94A3B8]">{description}</p>
      <ul className="mt-5 space-y-3">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3">
            <Image
              src="/how-it-works/icon-check.svg"
              alt=""
              width={19}
              height={19}
              unoptimized
              className="mt-0.5 h-[19px] w-[19px] shrink-0"
            />
            <span className="text-sm text-[#374151] sm:text-base dark:text-[#94A3B8]">{bullet}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );

  const imageContent = (
    <Reveal
      variants={imageSide === "left" ? slideInLeft : slideInRight}
      className="relative mx-auto w-full max-w-lg lg:max-w-none"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-6 -top-6 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.16),transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.14),transparent_65%)]"
      />
      <div className="relative mx-auto w-full max-w-[620px] overflow-hidden rounded-3xl bg-[#F8FAFC] shadow-[0_24px_60px_-28px_rgba(15,23,42,0.3)] dark:bg-white/5 dark:shadow-black/30">
        <Image
          src={image.src}
          alt={image.alt}
          width={620}
          height={367}
          unoptimized
          className="h-auto w-full object-contain object-center"
        />
      </div>
    </Reveal>
  );

  return (
    <div className={cn("py-10 sm:py-12", !isFirst && "border-t border-[#E5E7EB] dark:border-white/10")}>
      <div className="mx-auto max-w-[1340px] px-4 sm:px-5 md:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {imageSide === "left" ? (
            <>
              {imageContent}
              {textContent}
            </>
          ) : (
            <>
              {textContent}
              {imageContent}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
