import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { seo, site } from "@/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "How can we help you today? Share a few details and the LoanKonnekt team will help you understand what comes next.",
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
    <main>
      <ContactForm />
    </main>
  );
}
