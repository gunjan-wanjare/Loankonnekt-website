"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { hero } from "@/content";
import { easeOutExpo, heroContainer, heroItem } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Category = (typeof hero.categories)[number];
type CategoryTone = Category["tone"];

const toneStyles: Record<CategoryTone, { card: string; label: string }> = {
  lavender: {
    card: "bg-[#FAF5FF] shadow-[0_10px_24px_-14px_rgba(124,58,237,0.22)]",
    label: "text-[#7C3AED]",
  },
  sky: {
    card: "bg-[#F0F9FF] shadow-[0_10px_24px_-14px_rgba(2,132,199,0.22)]",
    label: "text-[#0284C7]",
  },
  mint: {
    card: "bg-[#F0FDF4] shadow-[0_10px_24px_-14px_rgba(22,163,74,0.22)]",
    label: "text-[#16A34A]",
  },
  peach: {
    card: "bg-[#FFF7ED] shadow-[0_10px_24px_-14px_rgba(234,88,12,0.22)]",
    label: "text-[#EA580C]",
  },
  cyan: {
    card: "bg-[#ECFEFF] shadow-[0_10px_24px_-14px_rgba(13,148,136,0.22)]",
    label: "text-[#0D9488]",
  },
  rose: {
    card: "bg-[#FDF2F8] shadow-[0_10px_24px_-14px_rgba(225,29,72,0.22)]",
    label: "text-[#E11D48]",
  },
};

function LoanCard({
  category,
  delay,
  rotate = true,
}: {
  category: Category;
  delay: number;
  rotate?: boolean;
}) {
  const tone = toneStyles[category.tone];

  return (
    <motion.a
      href={category.href}
      initial={{ opacity: 0, y: 18, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate: rotate ? category.rotate : 0 }}
      transition={{ duration: 0.7, delay, ease: easeOutExpo }}
      whileHover={{ y: -6 }}
      className={cn(
        "flex h-[6.75rem] w-[8rem] flex-col items-center rounded-[1.15rem] px-2.5 pb-2 pt-2 sm:h-[7.15rem] sm:w-[8.5rem]",
        tone.card,
      )}
    >
      <span className="relative flex min-h-0 w-full flex-1 items-end justify-center pb-0.5">
        <Image
          src={category.iconSrc}
          alt=""
          width={56}
          height={56}
          unoptimized
          className="h-[3.5rem] w-[3.5rem] object-contain object-center sm:h-[3.75rem] sm:w-[3.75rem]"
        />
      </span>
      <span
        className={cn(
          "mt-1 shrink-0 text-center text-[12px] font-semibold leading-tight sm:text-[13px]",
          tone.label,
        )}
      >
        {category.label}
      </span>
    </motion.a>
  );
}

export function Hero() {
  const left = hero.categories.filter((item) => item.side === "left");
  const right = hero.categories.filter((item) => item.side === "right");

  return (
    <section
      id={hero.id}
      className="relative overflow-hidden bg-[#FCFCFF] pt-[6.25rem] pb-14 sm:pt-28 sm:pb-16 lg:pb-[4.5rem]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-[42%] bg-[radial-gradient(ellipse_70%_65%_at_0%_48%,rgba(59,130,246,0.09),transparent_72%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-[42%] bg-[radial-gradient(ellipse_70%_65%_at_100%_42%,rgba(167,139,250,0.09),transparent_72%)]"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-6 px-4 pt-6 sm:px-5 sm:pt-8 md:px-8 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)_minmax(0,15rem)] lg:gap-3 lg:pt-10 xl:grid-cols-[minmax(0,16rem)_minmax(0,1fr)_minmax(0,16rem)]">
        <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-7">
          {left.map((category, i) => (
            <motion.div
              key={category.key}
              className={cn(i === 1 && "translate-x-4", i === 2 && "translate-x-1")}
              animate={{ y: [0, i % 2 === 0 ? -6 : 6, 0] }}
              transition={{
                duration: 5 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <LoanCard category={category} delay={0.22 + i * 0.08} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mx-auto w-full max-w-[52rem] text-center lg:max-w-none"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={heroItem}
            className="heading-gradient mt-2 text-[1.9rem] font-extrabold leading-[1.12] tracking-tight sm:mt-3 sm:text-[2.4rem] md:text-[2.75rem] lg:mt-0 lg:text-[3rem]"
          >
            <span className="block">{hero.headline}</span>
            <span className="block">{hero.headlineAccent}</span>
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="mx-auto mt-5 max-w-[32rem] text-sm leading-relaxed text-[#4B5563] sm:mt-6"
          >
            {hero.subcopy}
          </motion.p>

          <motion.div
            variants={heroItem}
            className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-3.5"
          >
            <Button
              href={hero.primaryCta.href}
              variant="primary"
              size="lg"
              className="min-h-11 w-full rounded-[16px] border-[#0047FF] bg-[#0047FF] px-7 text-sm font-medium shadow-none hover:bg-[#003DE0] sm:min-h-12 sm:w-auto"
            >
              {hero.primaryCta.label}
            </Button>
            <Button
              href={hero.secondaryCta.href}
              variant="outlineBrand"
              size="lg"
              className="min-h-11 w-full rounded-[16px] border-[#0047FF] bg-white px-7 text-sm font-medium text-[#0047FF] hover:bg-[#0047FF]/5 sm:min-h-12 sm:w-auto"
            >
              {hero.secondaryCta.label}
            </Button>
          </motion.div>

          <motion.div
            variants={heroItem}
            className="mt-8 flex items-center justify-center sm:mt-10"
          >
            {hero.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={cn(
                  "flex min-w-[5.75rem] flex-col items-center px-4 sm:min-w-[7.5rem] sm:px-8",
                  i > 0 && "border-l border-[#D1D5DB]",
                )}
              >
                <p className="text-lg font-bold tracking-tight text-[#111827] sm:text-xl md:text-[1.65rem]">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[11px] text-[#6B7280] sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-7">
          {right.map((category, i) => (
            <motion.div
              key={category.key}
              className={cn(i === 1 && "-translate-x-4", i === 2 && "-translate-x-1")}
              animate={{ y: [0, i % 2 === 0 ? 6 : -6, 0] }}
              transition={{
                duration: 5.2 + i * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <LoanCard category={category} delay={0.28 + i * 0.08} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-10 grid max-w-lg grid-cols-2 justify-items-center gap-5 px-4 sm:max-w-2xl sm:grid-cols-3 sm:px-5 lg:hidden">
        {hero.categories.map((category, i) => (
          <LoanCard
            key={category.key}
            category={category}
            delay={0.2 + i * 0.05}
            rotate={false}
          />
        ))}
      </div>
    </section>
  );
}
