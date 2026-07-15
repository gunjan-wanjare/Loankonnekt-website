import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Features } from "@/components/sections/Features";
import { Process } from "@/components/sections/Process";
import { Compare } from "@/components/sections/Compare";
import { Stats } from "@/components/sections/Stats";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { BackToTop } from "@/components/BackToTop";
import { seo, site } from "@/content";

export const metadata: Metadata = {
  title: {
    absolute: seo.title,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.url,
    title: seo.title,
    description: seo.description,
    siteName: site.name,
    images: [
      {
        url: seo.ogImage.url,
        width: seo.ogImage.width,
        height: seo.ogImage.height,
        alt: seo.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage.url],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}${site.logo.src}`,
      sameAs: [site.url, site.brandUrl],
      description: seo.description,
      areaServed: "IN",
      knowsAbout: [...seo.keywords],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: seo.description,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "WebPage",
      "@id": `${site.url}/#webpage`,
      url: site.url,
      name: seo.title,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#organization` },
      description: seo.description,
      inLanguage: "en-IN",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${site.url}${seo.ogImage.url}`,
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${site.url}/#product`,
      name: "LoanKonnekt Digital Lending Platform",
      alternateName: "LoanKonnekt",
      url: site.url,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      provider: { "@id": `${site.url}/#organization` },
      description: seo.description,
      keywords: seo.keywords.join(", "),
      offers: {
        "@type": "Offer",
        url: `${site.url}/#contact`,
        availability: "https://schema.org/InStock",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <main>
        <Hero />
        <Trust />
        <Ecosystem />
        <Features />
        <Process />
        <Compare />
        <Stats />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
