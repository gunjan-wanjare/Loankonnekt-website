import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/content";

type LogoProps = {
  className?: string;
  /** On dark backgrounds: white. On light: brand blue #0047FF. */
  tone?: "dark" | "light";
  size?: "md" | "lg";
};

export function Logo({ className, tone = "light", size = "md" }: LogoProps) {
  const isDark = tone === "dark";
  const isLg = size === "lg";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2",
        isDark ? "text-white" : "text-[#0047FF]",
        className,
      )}
    >
      <span
        className={cn(
          "relative shrink-0",
          isLg ? "h-8 w-8 sm:h-9 sm:w-9" : "h-7 w-7 sm:h-8 sm:w-8",
        )}
      >
        <Image
          src={site.logo.iconSrc}
          alt=""
          fill
          priority
          unoptimized
          sizes={isLg ? "36px" : "32px"}
          className="object-contain"
          style={isDark ? { filter: "brightness(0) invert(1)" } : undefined}
        />
      </span>
      <span
        className={cn(
          "whitespace-nowrap font-bold leading-none tracking-tight",
          isDark ? "text-white" : "text-[#0047FF]",
          isLg
            ? "text-[1.7rem] sm:text-[1.9rem]"
            : "text-[1.4rem] sm:text-[1.55rem]",
        )}
      >
        {site.logo.wordmark}
      </span>
    </span>
  );
}
