"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { features } from "@/content";
import { fadeUp, fadeUpBlur, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FeatureItem = (typeof features.items)[number];

const toneStyles: Record<
  FeatureItem["tone"],
  { fillFrom: string; fillTo: string; title: string }
> = {
  lavender: {
    fillFrom: "rgba(109, 40, 217, 0.12)",
    fillTo: "rgba(221, 200, 255, 0.12)",
    title: "text-[#7C3AED]",
  },
  sky: {
    fillFrom: "rgba(2, 132, 199, 0.12)",
    fillTo: "rgba(186, 230, 253, 0.12)",
    title: "text-[#0284C7]",
  },
  peach: {
    fillFrom: "rgba(234, 88, 12, 0.12)",
    fillTo: "rgba(254, 215, 170, 0.12)",
    title: "text-[#EA580C]",
  },
  mint: {
    fillFrom: "rgba(22, 163, 74, 0.12)",
    fillTo: "rgba(187, 247, 208, 0.12)",
    title: "text-[#16A34A]",
  },
  cyan: {
    fillFrom: "rgba(13, 148, 136, 0.12)",
    fillTo: "rgba(153, 246, 228, 0.12)",
    title: "text-[#0D9488]",
  },
  rose: {
    fillFrom: "rgba(225, 29, 72, 0.12)",
    fillTo: "rgba(254, 205, 211, 0.12)",
    title: "text-[#E11D48]",
  },
};

function LoanTypeCard({ item }: { item: FeatureItem }) {
  const tone = toneStyles[item.tone];

  return (
    <a
      href={item.href}
      className="block h-full rounded-[1.5rem] p-px transition-transform duration-300 hover:-translate-y-1"
      style={{
        backgroundImage: `linear-gradient(180deg, ${tone.fillTo} 0%, ${tone.fillFrom} 100%)`,
      }}
    >
      <div
        className="flex h-full flex-col items-center rounded-[calc(1.5rem-1px)] px-5 pb-7 pt-5 text-center"
        style={{
          backgroundImage: `linear-gradient(180deg, ${tone.fillFrom} 0%, ${tone.fillTo} 100%)`,
          backgroundColor: "#ffffff",
        }}
      >
        <div className="flex h-[8.5rem] w-full items-center justify-center sm:h-40 lg:h-44">
          <Image
            src={item.iconSrc}
            alt=""
            width={140}
            height={140}
            unoptimized
            className="h-[110px] w-[110px] object-contain object-center sm:h-[140px] sm:w-[140px]"
          />
        </div>
        <h3 className={cn("mt-2 text-lg font-bold tracking-tight sm:text-xl", tone.title)}>
          {item.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-[#4B5563]">
          {item.description}
        </p>
      </div>
    </a>
  );
}

export function Features({ showCta = false }: { showCta?: boolean }) {
  return (
    <section id={features.id} className="bg-white py-12 sm:py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal variants={fadeUpBlur} className="mx-auto max-w-3xl text-center">
          <h2 className="heading-gradient text-[1.85rem] font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-[2.6rem]">
            {features.headline}
          </h2>
          <p className="mt-3 text-sm font-normal leading-relaxed text-[#434657] sm:text-base">
            {features.subcopy}
          </p>
        </Reveal>

        <Stagger
          className="mx-auto mt-8 grid max-w-sm gap-4 sm:mt-10 sm:max-w-none sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
          variants={staggerContainer}
        >
          {features.items.map((item) => (
            <StaggerItem key={item.key} variants={fadeUp}>
              <LoanTypeCard item={item} />
            </StaggerItem>
          ))}
        </Stagger>

        {showCta ? (
          <Reveal variants={fadeUpBlur} className="mt-8 flex justify-center sm:mt-10">
            <Button
              href={features.cta.href}
              variant="primary"
              size="md"
              className="h-[50px] min-h-[50px] w-[187px] gap-2 rounded-[16px] px-6 py-3 text-sm font-medium shadow-none"
            >
              {features.cta.label}
            </Button>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
