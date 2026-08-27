"use client";

import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { support } from "@/content";
import { fadeUp, fadeUpBlur, staggerFast } from "@/lib/motion";

const icons = {
  headset: { src: "/about/Group (1).svg", width: 40, height: 34 },
  chat24: { src: "/about/Group.svg", width: 40, height: 40 },
  users: { src: "/about/Group 1000005644.svg", width: 36, height: 36 },
} as const;

export function Support() {
  return (
    <section
      id={support.id}
      className="py-14 sm:py-16 lg:py-[4.25rem]"
      style={{
        background:
          "linear-gradient(90deg, #3692FF 0%, #1E71FD 12%, #0047FF 28%, #0047FF 58%, #1E45D6 82%, #1C3ABF 100%)",
      }}
    >
      <div className="mx-auto max-w-[1340px] px-4 sm:px-5 md:px-6">
        <Reveal variants={fadeUpBlur} className="text-center">
          <h2 className="text-center text-[1.75rem] font-bold leading-none tracking-normal text-white sm:text-[2rem] lg:text-[40px]">
            {support.headline}
          </h2>
        </Reveal>

        <Stagger
          className="mt-8 flex flex-col items-center gap-5 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8 md:gap-12 lg:mt-12"
          variants={staggerFast}
        >
          {support.items.map((item) => {
            const icon = icons[item.icon];
            return (
              <StaggerItem
                key={item.key}
                variants={fadeUp}
                className="flex min-h-[5.25rem] items-center gap-3.5 py-1.5 sm:min-h-[5.75rem]"
              >
                <Image
                  src={icon.src}
                  alt=""
                  width={icon.width}
                  height={icon.height}
                  unoptimized
                  className="shrink-0"
                />
                <span className="text-left">
                  <span className="block font-[family-name:var(--font-plus-jakarta)] text-[22px] font-semibold leading-[28px] tracking-normal text-white lg:text-[25px] lg:leading-[30px]">
                    {item.title}
                  </span>
                  <span
                    className="mt-0.5 block text-[16px] font-medium leading-[25px] tracking-normal text-[#FFFFFF]"
                    style={{ fontFamily: "var(--font-be-vietnam), sans-serif" }}
                  >
                    {item.subcopy}
                  </span>
                </span>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
