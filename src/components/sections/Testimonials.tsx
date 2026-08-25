"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { testimonials } from "@/content";
import { fadeUp, fadeUpBlur, staggerContainer } from "@/lib/motion";

export function Testimonials() {
  return (
    <section id={testimonials.id} className="bg-white py-12 sm:py-14 md:py-16 dark:bg-[#0A0F1E]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-5 md:px-6">
        <Reveal variants={fadeUpBlur} className="mx-auto max-w-3xl text-center">
          <h2 className="heading-gradient text-[1.6rem] font-bold tracking-tight sm:text-[1.75rem] md:text-[2rem] lg:text-[2.2rem]">
            {testimonials.headline}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#6B7280] dark:text-[#94A3B8]">
            {testimonials.subcopy}
          </p>
        </Reveal>

        <Stagger
          className="mx-auto mt-8 grid max-w-sm gap-5 sm:mt-10 sm:max-w-none md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          variants={staggerContainer}
        >
          {testimonials.items.map((item) => (
            <StaggerItem key={item.name} variants={fadeUp}>
              <article className="flex h-full flex-col rounded-[1.35rem] bg-[#EEF2FF] p-6 sm:p-7 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <Image
                    src={item.imageSrc}
                    alt={item.name}
                    width={48}
                    height={48}
                    unoptimized
                    className="h-12 w-12 shrink-0 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold tracking-tight text-[#111827] dark:text-white">
                      {item.name}
                    </p>
                    <p className="text-sm text-[#6B7280] dark:text-[#94A3B8]">{item.role}</p>
                  </div>
                </div>

                <div className="mt-4 flex gap-1" aria-label={`${item.rating} out of 5 stars`}>
                  {Array.from({ length: item.rating }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={16}
                      fill="none"
                      stroke="#FBBF24"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                <p className="mt-4 text-[15px] font-normal leading-[22px] tracking-normal text-[#051325] dark:text-white">
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
