"use client";

import { Star } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { testimonials } from "@/content";
import { fadeUp, fadeUpBlur, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

const avatarTones = [
  "bg-[#DBEAFE] text-brand",
  "bg-[#EDE9FE] text-[#7C3AED]",
  "bg-[#CFFAFE] text-[#0D9488]",
] as const;

export function Testimonials() {
  return (
    <section id={testimonials.id} className="bg-white py-12 sm:py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal variants={fadeUpBlur} className="mx-auto max-w-3xl text-center">
          <h2 className="text-[1.85rem] font-bold tracking-tight text-[#0B3A82] sm:text-3xl md:text-4xl lg:text-[2.5rem]">
            {testimonials.headline}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#6B7280] sm:text-base">
            {testimonials.subcopy}
          </p>
        </Reveal>

        <Stagger
          className="mt-8 grid gap-5 sm:mt-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          variants={staggerContainer}
        >
          {testimonials.items.map((item, index) => (
            <StaggerItem key={item.name} variants={fadeUp}>
              <article className="flex h-full flex-col rounded-[1.35rem] bg-[#EEF2FF] p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                      avatarTones[index % avatarTones.length],
                    )}
                  >
                    {item.initials}
                  </span>
                  <div>
                    <p className="font-bold tracking-tight text-[#111827]">
                      {item.name}
                    </p>
                    <p className="text-sm text-[#6B7280]">{item.role}</p>
                  </div>
                </div>

                <div className="mt-4 flex gap-1" aria-label={`${item.rating} out of 5 stars`}>
                  {Array.from({ length: item.rating }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={16}
                      className="fill-[#FBBF24] text-[#FBBF24]"
                    />
                  ))}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#374151] sm:text-[15px]">
                  “{item.quote}”
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
