import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { terms } from "@/content/terms";
import { site } from "@/content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms & Conditions governing use of ${site.name} websites, platforms, and services.`,
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: `Terms of Service | ${site.name}`,
    description: `Terms & Conditions governing use of ${site.name} websites, platforms, and services.`,
    url: `${site.url}/terms`,
    siteName: site.name,
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-white text-navy">
        <section className="border-b border-navy/8 bg-[#F7F9FC] pt-[6.5rem] pb-10 sm:pt-28 sm:pb-12">
          <div className="mx-auto max-w-3xl px-5 sm:px-6 md:px-8">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-brand-bright uppercase">
              Legal
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem]">
              {terms.title}
            </h1>
            <p className="mt-3 text-sm text-slate-500">
              Last updated: {terms.lastUpdated}
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-3xl px-5 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14">
          <p className="text-[15px] leading-relaxed text-slate-600 sm:text-base">
            {terms.intro}
          </p>

          <div className="mt-10 space-y-10">
            {terms.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-semibold tracking-tight text-navy sm:text-2xl">
                  {section.heading}
                </h2>

                {"body" in section && section.body ? (
                  <p className="mt-4 text-[15px] leading-relaxed text-slate-600 sm:text-base">
                    {section.body}
                  </p>
                ) : null}

                {"bullets" in section && section.bullets ? (
                  <ul className="mt-4 list-disc space-y-2.5 pl-5 text-[15px] leading-relaxed text-slate-600 marker:text-brand-bright sm:text-base">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}

                {"closing" in section && section.closing ? (
                  <p className="mt-4 text-[15px] leading-relaxed text-slate-600 sm:text-base">
                    {section.closing}
                  </p>
                ) : null}
              </section>
            ))}
          </div>

          <div className="mt-12 border-t border-navy/8 pt-8">
            <Link
              href="/"
              className="inline-flex text-sm font-semibold text-brand transition-colors hover:text-brand-bright"
            >
              ← Back to home
            </Link>
          </div>
        </article>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
