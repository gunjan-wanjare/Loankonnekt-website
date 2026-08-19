import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { StatsBand } from "@/components/sections/StatsBand";
import { WhyWeBuilt } from "@/components/sections/WhyWeBuilt";
import { InfoCardGrid } from "@/components/sections/InfoCardGrid";
import { Support } from "@/components/sections/Support";
import { CtaBand } from "@/components/sections/CtaBand";
import { AppDownload } from "@/components/sections/AppDownload";
import {
  aboutHero,
  aboutStats,
  missionCards,
  coreValues,
  beliefs,
  aboutCta,
} from "@/content/about";
import { seo, site } from "@/content";
import { fadeUpBlur } from "@/lib/motion";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "LoanKonnekt is building India's smartest lending platform — transparent pathways, algorithmically quick approvals, and a focus on human dignity.",
  alternates: { canonical: "/about/" },
  openGraph: {
    type: "website",
    url: `${site.url}/about/`,
    title: `About Us | ${site.name}`,
    description: seo.description,
    siteName: site.name,
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          headline={
            <>
              Making Credit Simple
              <br />
              for Everyone
            </>
          }
          subcopy={aboutHero.subcopy}
          primaryCta={aboutHero.primaryCta}
          secondaryCta={aboutHero.secondaryCta}
          illustration={aboutHero.illustration}
        >
          <StatsBand stats={[...aboutStats.stats]} />
        </PageHero>

        <WhyWeBuilt />

        <section className="bg-white pb-12 sm:pb-14 md:pb-16">
          <div className="mx-auto max-w-7xl border-t border-[#E5E7EB] px-4 pt-12 sm:px-5 sm:pt-14 md:px-8 md:pt-16">
            <InfoCardGrid
              cards={[...missionCards]}
              columns={2}
              cardClassName="bg-[#F3F6FF]"
            />
          </div>
        </section>

        <section className="bg-[#F8FAFF] py-12 sm:py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
            <Reveal variants={fadeUpBlur} className="mx-auto max-w-3xl text-center">
              <h2 className="heading-gradient text-[1.6rem] font-bold tracking-tight sm:text-[1.75rem] md:text-[2rem] lg:text-[2.2rem]">
                {coreValues.headline}
              </h2>
            </Reveal>
            <div className="mt-8 sm:mt-10">
              <InfoCardGrid cards={[...coreValues.cards]} columns={4} cardClassName="bg-white" />
            </div>
          </div>
        </section>

        <Support />

        <section className="bg-white py-12 sm:py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
            <Reveal variants={fadeUpBlur} className="mx-auto max-w-3xl text-center">
              <h2 className="heading-gradient text-[1.6rem] font-bold tracking-tight sm:text-[1.75rem] md:text-[2rem] lg:text-[2.2rem]">
                {beliefs.headline}
              </h2>
            </Reveal>
            <div className="mt-8 sm:mt-10">
              <InfoCardGrid cards={[...beliefs.cards]} columns={4} cardClassName="bg-[#F3F7FF]" />
            </div>
          </div>
        </section>

        <CtaBand headline={aboutCta.headline} subcopy={aboutCta.subcopy} cta={aboutCta.cta} />
        <AppDownload />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
