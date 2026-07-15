"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type YakaBrandMarkProps = {
  className?: string;
  logoClassName?: string;
  taglineClassName?: string;
  showTagline?: boolean;
  /**
   * dark — hero / preloader (navy): soft mark + #B0C0F8 tagline (Crediple dark)
   * light — on white surfaces: royal blue mark + #2F80ED tagline (Crediple light)
   */
  tone?: "dark" | "light";
  priority?: boolean;
};

/**
 * Crediple-style YAKA mark + “A YAKA Brand” tagline.
 * Used on Preloader + Hero only — Footer keeps its own white copy.
 */
export function YakaBrandMark({
  className,
  logoClassName,
  taglineClassName,
  showTagline = true,
  tone = "dark",
  priority = true,
}: YakaBrandMarkProps) {
  const isDark = tone === "dark";
  const logoSrc = isDark ? "/images/yaka-soft.png" : "/images/yaka-light.png";
  const taglineClass = isDark ? "text-[#B0C0F8]" : "text-[#2F80ED]";

  return (
    <div
      className={cn(
        "flex max-w-[4.25rem] flex-col items-center gap-0.5 sm:max-w-none sm:gap-1.5 md:gap-2",
        className,
      )}
    >
      <div
        data-yaka-icon
        className={cn(
          "relative h-6 w-6 sm:h-10 sm:w-10 md:h-14 md:w-14 xl:h-16 xl:w-16",
          logoClassName,
        )}
      >
        <Image
          src={logoSrc}
          alt="YAKA"
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
            taglineClass,
            taglineClassName,
          )}
        >
          A{" "}
          <span className={cn("font-bold", taglineClass)}>YAKA</span> Brand
        </p>
      ) : null}
    </div>
  );
}
