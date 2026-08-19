"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { loanArt } from "@/components/sections/loanArt";
import { features } from "@/content";
import { fadeUp, fadeUpBlur, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FeatureItem = (typeof features.items)[number];

const toneStyles: Record<
  FeatureItem["tone"],
  { card: string; title: string }
> = {
  lavender: { card: "bg-[#F3E8FF]", title: "text-[#7C3AED]" },
  sky: { card: "bg-[#E0F2FE]", title: "text-[#0284C7]" },
  peach: { card: "bg-[#FFEDD5]", title: "text-[#EA580C]" },
  mint: { card: "bg-[#DCFCE7]", title: "text-[#16A34A]" },
  cyan: { card: "bg-[#CFFAFE]", title: "text-[#0D9488]" },
  rose: { card: "bg-[#FCE7F3]", title: "text-[#E11D48]" },
};

function LoanTypeCard({ item }: { item: FeatureItem }) {
  const Art = loanArt[item.key];
  const tone = toneStyles[item.tone];

  return (
    <a
      href={item.href}
      className={cn(
        "flex h-full flex-col items-center rounded-[1.5rem] px-5 pb-7 pt-5 text-center transition-transform duration-300 hover:-translate-y-1",
        tone.card,
      )}
    >
      <div className="h-36 w-full sm:h-40">
        <Art />
      </div>
      <h3 className={cn("mt-2 text-lg font-bold tracking-tight sm:text-xl", tone.title)}>
        {item.title}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-[#4B5563]">
        {item.description}
      </p>
    </a>
  );
}

export function Features() {
  return (
    <section id={features.id} className="bg-white py-12 sm:py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal variants={fadeUpBlur} className="mx-auto max-w-3xl text-center">
          <h2 className="heading-gradient text-[1.6rem] font-bold tracking-tight sm:text-[1.75rem] md:text-[2rem] lg:text-[2.2rem]">
            {features.headline}
          </h2>
          <p className="mt-3 text-sm text-[#6B7280]">
            {features.subcopy}
          </p>
        </Reveal>

        <Stagger
          className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
          variants={staggerContainer}
        >
          {features.items.map((item) => (
            <StaggerItem key={item.key} variants={fadeUp}>
              <LoanTypeCard item={item} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
