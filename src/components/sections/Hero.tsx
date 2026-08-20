import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { hero } from "@/content";
import { cn } from "@/lib/utils";

type Category = (typeof hero.categories)[number];
type CategoryTone = Category["tone"];

const toneStyles: Record<
  CategoryTone,
  { border: string; from: string; to: string; label: string }
> = {
  lavender: {
    border: "border-[#DDC8FF]",
    from: "from-[rgba(109,40,217,0.12)]",
    to: "to-[rgba(221,200,255,0.12)]",
    label: "text-[#6D28D9]",
  },
  sky: {
    border: "border-[#BFD3FF]",
    from: "from-[rgba(37,99,235,0.12)]",
    to: "to-[rgba(191,211,255,0.12)]",
    label: "text-[#2563EB]",
  },
  mint: {
    border: "border-[#BEFFD6]",
    from: "from-[rgba(22,163,74,0.12)]",
    to: "to-[rgba(190,255,214,0.12)]",
    label: "text-[#16A34A]",
  },
  peach: {
    border: "border-[#FFDDC6]",
    from: "from-[rgba(249,115,22,0.12)]",
    to: "to-[rgba(255,221,198,0.12)]",
    label: "text-[#F97316]",
  },
  cyan: {
    border: "border-[#C7F4FF]",
    from: "from-[rgba(8,145,178,0.12)]",
    to: "to-[rgba(199,244,255,0.12)]",
    label: "text-[#0891B2]",
  },
  rose: {
    border: "border-[#FFC7D3]",
    from: "from-[rgba(225,29,72,0.12)]",
    to: "to-[rgba(255,199,211,0.12)]",
    label: "text-[#E11D48]",
  },
};

function LoanCard({
  category,
  rotate = true,
}: {
  category: Category;
  rotate?: boolean;
}) {
  const tone = toneStyles[category.tone];

  return (
    <a
      href={category.href}
      style={rotate ? { transform: `rotate(${category.rotate}deg)` } : undefined}
      className={cn(
        "flex w-[8.25rem] flex-col items-center gap-2 rounded-xl border bg-gradient-to-b px-3 pt-3 pb-4 shadow-[0_4px_12px_0_rgba(0,0,0,0.05)]",
        tone.border,
        tone.from,
        tone.to,
      )}
    >
      <div className="relative h-14 w-14 shrink-0">
        <Image
          src={category.iconSrc}
          alt=""
          fill
          unoptimized
          className="object-contain"
        />
      </div>
      <span
        className={cn(
          "w-full shrink-0 text-center text-sm font-bold leading-tight",
          tone.label,
        )}
      >
        {category.label}
      </span>
    </a>
  );
}

export function Hero() {
  const left = hero.categories.filter((item) => item.side === "left");
  const right = hero.categories.filter((item) => item.side === "right");

  return (
    <section
      id={hero.id}
      className="relative overflow-hidden bg-white pt-[6.25rem] pb-14 sm:pt-28 sm:pb-16 lg:pb-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-[42%] bg-[radial-gradient(ellipse_70%_65%_at_0%_48%,rgba(59,130,246,0.09),transparent_72%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-[42%] bg-[radial-gradient(ellipse_70%_65%_at_100%_42%,rgba(167,139,250,0.09),transparent_72%)]"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-5 md:px-8 lg:grid-cols-[minmax(0,10rem)_minmax(0,1fr)_minmax(0,10rem)] lg:gap-4 xl:grid-cols-[minmax(0,10.5rem)_minmax(0,1fr)_minmax(0,10.5rem)]">
        <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-4">
          {left.map((category) => (
            <LoanCard key={category.key} category={category} />
          ))}
        </div>

        <div className="mx-auto w-full max-w-[52.9rem] text-center">
          <h1 className="heading-gradient text-center text-[2.15rem] font-bold leading-none tracking-normal sm:text-[2.75rem] md:text-[3.25rem] lg:text-[64px]">
            <span className="block">{hero.headline}</span>
            <span className="block">{hero.headlineAccent}</span>
          </h1>

          <p className="mx-auto mt-5 max-w-[39.4rem] text-center text-base leading-relaxed text-[#434657] sm:mt-6 sm:text-lg lg:text-[20px] lg:leading-[30px]">
            {hero.subcopy}
          </p>

          <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              href={hero.primaryCta.href}
              variant="primary"
              size="lg"
              className="h-[50px] w-full rounded-[16px] border-[#0047FF] bg-[#0047FF] px-6 text-base font-medium shadow-none hover:bg-[#003DE0] sm:w-auto"
            >
              {hero.primaryCta.label}
            </Button>
            <Button
              href={hero.secondaryCta.href}
              variant="outlineBrand"
              size="lg"
              className="h-[50px] w-full rounded-[16px] border-[#0047FF] bg-white px-6 text-base font-medium text-[#0047FF] hover:bg-[#0047FF]/5 sm:w-auto"
            >
              {hero.secondaryCta.label}
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-8 sm:mt-10">
            {hero.stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8">
                {i > 0 && <div className="h-10 w-px bg-[#434657]" />}
                <div className="flex flex-col items-center">
                  <p className="text-base font-semibold text-[#051325]">
                    {stat.value}
                  </p>
                  <p className="text-base text-[#434657]">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-4">
          {right.map((category) => (
            <LoanCard key={category.key} category={category} />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-10 grid max-w-[22rem] grid-cols-2 justify-items-center gap-4 px-4 sm:max-w-2xl sm:grid-cols-3 sm:gap-5 sm:px-5 lg:hidden">
        {hero.categories.map((category) => (
          <LoanCard key={category.key} category={category} rotate={false} />
        ))}
      </div>
    </section>
  );
}
