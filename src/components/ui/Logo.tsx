import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/content";

type LogoProps = {
  className?: string;
  /** On dark backgrounds: white + brand blue. On light: navy + brand blue. */
  tone?: "dark" | "light";
};

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("relative h-14 w-50", className)}>
      <Image
        src={site.logo.src}
        alt={site.logo.alt}
        fill
        priority
        className="object-contain w-full h-full"
      />
    </div>
  );
}
