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
}: {
  cards: InfoCard[];
  columns?: 2 | 4;
  cardClassName?: string;
}) {
  return (
    <Stagger
      className={cn(
        "grid gap-5",
        columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4",
      )}
      variants={staggerContainer}
    >
      {cards.map((card) => {
        const Icon = card.icon ? getIcon(card.icon) : undefined;
        return (
          <StaggerItem key={card.key} variants={fadeUp}>
            <article
              className={cn(
                "h-full rounded-[1.35rem] p-6 sm:p-7",
                cardClassName ?? "bg-white",
              )}
            >
              {Icon ? (
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#DBEAFE] text-brand">
                  <Icon size={22} strokeWidth={2} />
                </span>
              ) : null}
              <h3 className="text-lg font-bold tracking-tight text-[#111827]">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
                {card.description}
              </p>
            </article>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
