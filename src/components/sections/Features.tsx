"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { features, getIcon } from "@/content";
import { fadeUp, fadeUpBlur, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FeatureItem = (typeof features.items)[number];

function FeatureCard({ item }: { item: FeatureItem }) {
  const Icon = getIcon(item.icon);
  const isDark = item.tone === "navy" || item.tone === "dark";
  const isGreenIcon = "iconTone" in item && item.iconTone === "green";
  const isGreenTags = "tagTone" in item && item.tagTone === "green";
  const tags = "tags" in item ? item.tags : undefined;
  const metric = "metric" in item ? item.metric : undefined;
  const delta = "delta" in item ? item.delta : undefined;

  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-[1.25rem] border p-5 sm:p-6",
        item.tone === "navy" &&
          "border-transparent bg-gradient-to-r from-[#0B1B3A] to-[#163A7A] text-white",
        item.tone === "white" &&
          "border-navy/8 bg-white text-navy shadow-[0_10px_40px_-24px_rgba(15,23,42,0.35)]",
        item.tone === "sky" && "border-brand/10 bg-[#EAF2FF] text-navy",
        item.tone === "dark" && "border-transparent bg-[#07111F] text-white",
      )}
    >
      <span
        className={cn(
          "inline-flex h-11 w-11 items-center justify-center rounded-2xl",
          isDark && "bg-white/15 text-white",
          !isDark && !isGreenIcon && "bg-[#E8F1FF] text-brand-bright",
          isGreenIcon && "bg-emerald-500/15 text-emerald-600",
        )}
      >
        <Icon size={22} strokeWidth={1.85} />
      </span>

      <h3
        className={cn(
          "mt-5 text-xl font-semibold tracking-tight sm:text-[1.35rem]",
          isDark ? "text-white" : "text-navy",
        )}
      >
        {item.title}
      </h3>
      <p
        className={cn(
          "mt-2.5 text-sm leading-relaxed sm:text-[15px]",
          isDark ? "text-white/70" : "text-muted",
        )}
      >
        {item.description}
      </p>

      {tags ? (
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "rounded-full px-3 py-1 text-[11px] font-medium sm:text-xs",
                isDark && "bg-white/10 text-white/85",
                !isDark && !isGreenTags && "bg-[#E8F1FF] text-brand-bright",
                isGreenTags && "bg-emerald-500/10 text-emerald-700",
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}

      {metric && delta ? (
        <div className="mt-auto flex items-end justify-between gap-3 pt-8">
          <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {metric}
          </p>
          <p className="pb-1 text-sm font-semibold text-emerald-400">{delta}</p>
        </div>
      ) : null}
    </div>
  );
}

export function Features() {
  const [marketplace, discovery, application, documents, approval] =
    features.items;

  return (
    <section id={features.id} className="bg-[#F7F9FC] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal variants={fadeUpBlur} className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E8F1FF] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-bright sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-bright" aria-hidden />
            {features.badge}
          </span>
          <h2 className="mt-5 text-[1.75rem] font-semibold tracking-tight text-navy sm:text-3xl md:text-4xl lg:text-[2.75rem]">
            {features.headline}{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#60A5FA] bg-clip-text text-transparent">
              {features.headlineAccent}
            </span>
          </h2>
          <p className="mt-4 text-sm text-muted sm:text-base">{features.subcopy}</p>
        </Reveal>

        <Stagger
          className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
        >
          <StaggerItem variants={fadeUp} className="sm:col-span-2">
            <FeatureCard item={marketplace} />
          </StaggerItem>
          <StaggerItem variants={fadeUp}>
            <FeatureCard item={discovery} />
          </StaggerItem>
          <StaggerItem variants={fadeUp}>
            <FeatureCard item={application} />
          </StaggerItem>
          <StaggerItem variants={fadeUp}>
            <FeatureCard item={documents} />
          </StaggerItem>
          <StaggerItem variants={fadeUp}>
            <FeatureCard item={approval} />
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
