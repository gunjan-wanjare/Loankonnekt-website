import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { AlternatingStep } from "@/components/sections/AlternatingStep";
import { CtaBand } from "@/components/sections/CtaBand";
import { AppDownload } from "@/components/sections/AppDownload";
import { howItWorksHero, steps, howItWorksCta } from "@/content/how-it-works";
import { seo, site } from "@/content";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how LoanKonnekt takes you from sign-up to disbursal: register, upload documents digitally, get instant real-time approval, and receive direct disbursal.",
  alternates: { canonical: "/how-it-works/" },
  openGraph: {
    type: "website",
    url: `${site.url}/how-it-works/`,
    title: `How It Works | ${site.name}`,
    description: seo.description,
    siteName: site.name,
  },
};

export default function HowItWorksPage() {
  return (
    <main>
        <PageHero
          primaryHasArrow
          largeIllustration
          headline={
            <>
              Your Loan Journey,
              <br />
              Made Simple
            </>
          }
          subcopy={howItWorksHero.subcopy}
          primaryCta={howItWorksHero.primaryCta}
          secondaryCta={howItWorksHero.secondaryCta}
          illustration={howItWorksHero.illustration}
        />

        <section className="bg-white dark:bg-[#0A0F1E]">
          {steps.map((step, index) => (
            <AlternatingStep
              key={step.key}
              title={step.title}
              description={step.description}
              bullets={step.bullets}
              image={step.image}
              imageSide={step.imageSide}
              isFirst={index === 0}
            />
          ))}
        </section>

        <CtaBand
          headline={howItWorksCta.headline}
          subcopy={howItWorksCta.subcopy}
          cta={howItWorksCta.cta}
        />
        <AppDownload />
    </main>
  );
}
