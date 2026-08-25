import { cn } from "@/lib/utils";
import { site } from "@/content";

type LogoProps = {
  className?: string;
  /** On dark backgrounds: white. On light: brand blue #0047FF. */
  tone?: "dark" | "light";
  size?: "md" | "lg" | "xl";
};

const sizeClasses = {
  md: "text-[1.4rem] sm:text-[1.55rem]",
  lg: "text-[1.45rem] sm:text-[1.9rem]",
  xl: "text-[2.25rem] sm:text-[2.75rem]",
};

export function Logo({ className, tone = "light", size = "md" }: LogoProps) {
  const isDark = tone === "dark";

  return (
    <span
      className={cn(
        "inline-flex items-center",
        isDark ? "text-white" : "text-[#0047FF]",
        className,
      )}
    >
      <span
        className={cn(
          "whitespace-nowrap font-bold leading-none tracking-tight",
          isDark ? "text-white" : "text-[#0047FF]",
          sizeClasses[size],
        )}
      >
        {site.logo.wordmark}
      </span>
    </span>
  );
}
