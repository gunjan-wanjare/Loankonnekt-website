import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { StatsBand } from "@/components/sections/StatsBand";
import { Features } from "@/components/sections/Features";
import { LoanComparisonTable } from "@/components/sections/LoanComparisonTable";
import { EligibilityEstimator } from "@/components/sections/EligibilityEstimator";
import { EmiCalculator } from "@/components/sections/EmiCalculator";
import { Support } from "@/components/sections/Support";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CtaBand } from "@/components/sections/CtaBand";
import { AppDownload } from "@/components/sections/AppDownload";
import { loansHero, loansStats, loansCta } from "@/content/loans";
import { seo, site } from "@/content";

export const metadata: Metadata = {
  title: "Compare & Apply for Loans",
  description:
    "Explore LoanKonnekt's curated suite of personal, business, home, property, education and car loans with transparent rates and 100% digital verification.",
  alternates: { canonical: "/loans/" },
  openGraph: {
    type: "website",
    url: `${site.url}/loans/`,
    title: `Compare & Apply for Loans | ${site.name}`,
    description: seo.description,
    siteName: site.name,
  },
};

export default function LoansPage() {
  return (
    <main>
        <PageHero
          tall
          secondaryHasArrow
          headline={
            <>
              Transparent Loans
              <br />
              Designed for Your Life
            </>
          }
          subcopy={loansHero.subcopy}
          primaryCta={loansHero.primaryCta}
          secondaryCta={loansHero.secondaryCta}
          illustration={loansHero.illustration}
          badges={[...loansHero.badges]}
        >
          <StatsBand eyebrow={loansStats.eyebrow} stats={[...loansStats.stats]} />
        </PageHero>
        <Features showCta />
        <LoanComparisonTable />
        <EligibilityEstimator />
        <EmiCalculator />
        <Support />
        <Testimonials />
        <FAQ />
        <CtaBand headline={loansCta.headline} subcopy={loansCta.subcopy} cta={loansCta.cta} />
        <AppDownload />
    </main>
  );
}
