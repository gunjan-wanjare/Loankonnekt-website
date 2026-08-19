"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { compare, getIcon } from "@/content";
import { fadeUp, fadeUpBlur, staggerContainer } from "@/lib/motion";

export function Compare() {
  return (
    <section id={compare.id} className="bg-white py-12 sm:py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal variants={fadeUpBlur} className="mx-auto max-w-3xl text-center">
          <h2 className="heading-gradient text-[1.6rem] font-bold tracking-tight sm:text-[1.75rem] md:text-[2rem] lg:text-[2.2rem]">
            {compare.headline}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
            {compare.subcopy}
          </p>
        </Reveal>

        <Stagger
          className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
          variants={staggerContainer}
        >
          {compare.items.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <StaggerItem key={item.key} variants={fadeUp}>
                <article className="h-full rounded-[1.35rem] bg-[#F3F7FF] px-5 py-6 sm:px-6 sm:py-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] bg-brand text-white">
                    <Icon size={20} strokeWidth={2.1} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-[#111827] sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4B5563] sm:text-[15px]">
                    {item.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
