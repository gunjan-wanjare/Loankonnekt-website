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
          primaryHasArrow
          largeIllustration
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
          <StatsBand
            stats={[...aboutStats.stats]}
            className="px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14"
          />
        </PageHero>

        <WhyWeBuilt />

        <section className="bg-white pb-12 sm:pb-14 md:pb-16">
          <div className="mx-auto max-w-7xl border-t border-dashed border-[#0047FF66] px-4 pt-12 sm:px-5 sm:pt-14 md:px-8 md:pt-16">
            <InfoCardGrid
              cards={[...missionCards]}
              columns={2}
              cardClassName="rounded-[1.5rem] bg-[#0047FF14] px-8 py-8 text-left sm:px-10 sm:py-9"
              titleClassName="text-[1.25rem] font-semibold leading-6 tracking-normal text-[#0047FF] lg:text-[24px]"
              descriptionClassName="mt-3 text-base font-normal leading-[1.6] tracking-normal text-[#051325] lg:text-[20px] lg:leading-[30px]"
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
              <InfoCardGrid
                cards={[...coreValues.cards]}
                columns={4}
                cardClassName="rounded-[1.35rem] bg-white p-6 sm:p-7"
                titleClassName="text-[20px] font-bold leading-none tracking-normal text-[#051325]"
                descriptionClassName="mt-2 text-[16px] font-normal leading-[22px] tracking-normal text-[#434657]"
              />
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
              <InfoCardGrid
                cards={[...beliefs.cards]}
                columns={4}
                cardClassName="rounded-[1.35rem] border border-solid border-[#E2E8F0] bg-[#0047FF14] p-6 sm:p-7"
                titleClassName="text-[24px] font-bold leading-none tracking-normal text-[#0047FF]"
                descriptionClassName="mt-2 text-[18px] font-normal leading-6 tracking-normal text-[#051325]"
              />
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
