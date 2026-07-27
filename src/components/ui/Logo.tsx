import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/content";

type LogoProps = {
  className?: string;
  /** On dark backgrounds: white + brand blue. On light: navy + brand blue. */
  tone?: "dark" | "light";
};

export function Logo({ className, tone = "light" }: LogoProps) {
  const isDark = tone === "dark";

  return (
    <div className={cn("relative h-5 w-50", className)}>
      <Image
        src={site.logo.src}
        alt={site.logo.alt}
        fill
        priority
        className="h-5 w-full"
        style={isDark ? { filter: "brightness(0) invert(1)" } : undefined}
      />
    </div>
  );
}