"use client";

import { motion, useTransform } from "framer-motion";
import { useIntroPhase } from "@/components/FloatingLogo";
import { useScrollHandoffProgress } from "@/components/ScrollHandoff";
import { useTheme, withThemeParam } from "@/components/ThemeProvider";
import { YakaBrandMark } from "@/components/YakaBrandMark";
import { site } from "@/content";

/**
 * Hero-corner YAKA mark + tagline (same composition as the splash).
 * Invisible until intro flight lands, then cross-fades out as the header's
 * own nav icon fades in at the same scroll progress (no floating clone).
 */
export function HeroYakaAnchor() {
  const { phase } = useIntroPhase();
  const progress = useScrollHandoffProgress();
  const scrollOpacity = useTransform(progress, [0, 0.3], [1, 0]);
  const visible = phase === "ready";
  const { theme } = useTheme();

  return (
    <motion.a
      id="yaka-logo-anchor"
      href={withThemeParam(site.brandUrl, theme)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="A YAKA Brand"
      className="absolute right-4 top-22 z-20 hidden md:block md:right-6 lg:right-10"
      style={{
        opacity: visible ? scrollOpacity : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <YakaBrandMark
        tone="light"
        darkLogoSrc={site.yaka.headerDarkSrc}
        className="max-w-none gap-1.5 sm:gap-2"
        logoClassName="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
        taglineClassName="max-w-none whitespace-nowrap text-[10px] md:text-[11px] lg:text-xs"
      />
    </motion.a>
  );
}
