import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ContactForm } from "@/components/sections/ContactForm";
import { AppDownload } from "@/components/sections/AppDownload";
import { seo, site } from "@/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have a question about a loan? Share your details and the LoanKonnekt team will help you understand what comes next.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    type: "website",
    url: `${site.url}/contact/`,
    title: `Contact Us | ${site.name}`,
    description: seo.description,
    siteName: site.name,
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactForm />
        <AppDownload />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
