"use client";

import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { getIcon, type IconName } from "@/content";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

type InfoCard = {
  key: string;
  title: string;
  description: string;
  icon?: IconName;
};

export function InfoCardGrid({
  cards,
  columns = 2,
  cardClassName,
  titleClassName,
  descriptionClassName,
  className,
}: {
  cards: InfoCard[];
  columns?: 2 | 4;
  cardClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  className?: string;
}) {
  return (
    <Stagger
      className={cn(
        "grid",
        columns === 2
          ? "grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8"
          : "gap-5 sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
      variants={staggerContainer}
    >
      {cards.map((card) => {
        const Icon = card.icon ? getIcon(card.icon) : undefined;
        return (
          <StaggerItem key={card.key} className="h-full" variants={fadeUp}>
            <article
              className={cn(
                "h-full",
                cardClassName ?? "rounded-[1.35rem] bg-white p-6 sm:p-7 dark:bg-[#111A2E]",
              )}
            >
              {Icon ? (
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#0047FF] text-white">
                  <Icon size={22} strokeWidth={2} />
                </span>
              ) : null}
              <h3 className={cn("tracking-normal", titleClassName ?? "text-lg font-bold text-[#0047FF]")}>
                {card.title}
              </h3>
              <p className={cn("mt-2 font-normal", descriptionClassName ?? "text-sm leading-relaxed text-[#4B5563] dark:text-[#94A3B8]")}>
                {card.description}
              </p>
            </article>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
