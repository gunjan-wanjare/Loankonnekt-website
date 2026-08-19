"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { support } from "@/content";
import { fadeUp, fadeUpBlur, staggerFast } from "@/lib/motion";

function HeadsetIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" aria-hidden>
      <path
        d="M7 16v3.5A2.5 2.5 0 0 0 9.5 22h1A1.5 1.5 0 0 0 12 20.5v-4A1.5 1.5 0 0 0 10.5 15h-1A2.5 2.5 0 0 0 7 17.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M25 16v3.5A2.5 2.5 0 0 1 22.5 22h-1A1.5 1.5 0 0 1 20 20.5v-4A1.5 1.5 0 0 1 21.5 15h1A2.5 2.5 0 0 1 25 17.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M7 17.2C7.4 11.8 11.2 8 16 8s8.6 3.8 9 9.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M22 24.5c0 1.4-2.7 2.5-6 2.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <rect x="5" y="8" width="9" height="6" rx="2" fill="currentColor" />
      <circle cx="7.5" cy="11" r="0.7" fill="#2563EB" />
      <circle cx="9.5" cy="11" r="0.7" fill="#2563EB" />
      <circle cx="11.5" cy="11" r="0.7" fill="#2563EB" />
    </svg>
  );
}

function Chat24Icon() {
  return (
    <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" aria-hidden>
      <path
        d="M16 5a11 11 0 1 1-9.8 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M5.6 6.2 6.2 11.4 11 9.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="16"
        y="19.5"
        textAnchor="middle"
        fill="currentColor"
        fontSize="9"
        fontWeight="700"
      >
        24
      </text>
    </svg>
  );
}

function ConnectIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" aria-hidden>
      <path
        d="M8 7h-2v18h18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="14" cy="13" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M9.5 22c.4-3 2.3-4.8 4.5-4.8S18.1 19 18.5 22"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="22" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M18.8 20.5c.5-2.2 1.9-3.4 3.3-3.4 1.5 0 2.8 1.2 3.2 3.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

const icons = {
  headset: HeadsetIcon,
  chat24: Chat24Icon,
  users: ConnectIcon,
} as const;

export function Support() {
  return (
    <section
      id={support.id}
      className="bg-[linear-gradient(90deg,#3BA4FF_0%,#2563EB_48%,#1D4ED8_100%)] py-12 sm:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal variants={fadeUpBlur} className="text-center">
          <h2 className="text-[1.45rem] font-bold tracking-tight text-white sm:text-[1.65rem] md:text-[1.85rem]">
            {support.headline}
          </h2>
        </Reveal>

        <Stagger
          className="mt-8 flex flex-col items-center gap-5 sm:mt-10 sm:flex-row sm:justify-center sm:gap-6 md:gap-8"
          variants={staggerFast}
        >
          {support.items.map((item) => {
            const Icon = icons[item.icon];
            return (
              <StaggerItem
                key={item.key}
                variants={fadeUp}
                className="flex items-center gap-3"
              >
                <span className="text-white">
                  <Icon />
                </span>
                <span className="text-left">
                  <span className="block text-base font-bold text-white sm:text-lg">
                    {item.title}
                  </span>
                  <span className="mt-0.5 block text-sm text-white/90">
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
