"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/content";

type YakaBrandMarkProps = {
  className?: string;
  logoClassName?: string;
  taglineClassName?: string;
  showTagline?: boolean;
  /**
   * dark = navy / dark surfaces (hero, preloader)
   * light = white surfaces (scrolled header)
   * Kept for layout callers; tagline always matches logo blue.
   */
  tone?: "dark" | "light";
  priority?: boolean;
};

/**
 * Shared YAKA mark + “A YAKA Brand” tagline.
 * Always uses the same hi-res blue logo so color matches everywhere.
 */
export function YakaBrandMark({
  className,
  logoClassName,
  taglineClassName,
  showTagline = true,
  tone: _tone = "dark",
  priority = true,
}: YakaBrandMarkProps) {
  void _tone;

  return (
    <div
      className={cn(
        "flex max-w-[4.25rem] flex-col items-center gap-0.5 sm:max-w-none sm:gap-1.5 md:gap-2",
        className,
      )}
    >
      <div
        className={cn(
          "relative h-6 w-6 sm:h-10 sm:w-10 md:h-14 md:w-14 xl:h-16 xl:w-16",
          logoClassName,
        )}
      >
        <Image
          src={site.yaka.src}
          alt={site.yaka.alt}
          fill
          priority={priority}
          quality={100}
          sizes="(max-width: 640px) 28px, 150px"
          className="object-contain"
        />
      </div>
      {showTagline ? (
        <p
          className={cn(
            "max-w-[4rem] text-center text-[7.5px] font-medium leading-[1.15] tracking-wide sm:max-w-none sm:whitespace-nowrap sm:text-[10px] md:text-[11px]",
            taglineClassName,
          )}
          style={{ color: site.yaka.color }}
        >
          A <span className="font-bold">YAKA</span> Brand
        </p>
      ) : null}
    </div>
  );
}
