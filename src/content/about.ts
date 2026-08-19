/** About Us page content — sourced from Figma "LoanKonnect - About Us" */

import type { IconName } from "./icons";

export const aboutHero = {
  subcopy:
    "We are building the smartest lending platform. Transparent pathways, algorithmically quick approvals, and a focus on human dignity.",
  primaryCta: { label: "Explore Our Loans", href: "/loans/" },
  secondaryCta: { label: "Check Eligibility", href: "/apply" },
  illustration: {
    src: "/about/hero-illustration.png",
    alt: "LoanKonnekt lending ecosystem illustration",
  },
} as const;

export const aboutStats = {
  stats: [
    { value: "6+", label: "Years Empowering" },
    { value: "4.5 Lakhs+", label: "Happy Customers" },
    { value: "40+", label: "Lending Partners" },
    { value: "₹5,200 Cr+", label: "Total Disbursed" },
  ],
} as const;

export const whyWeBuilt = {
  headline: "Why We Built LoanKonnekt",
  image: { src: "/about/why-we-built.png", alt: "LoanKonnekt loan eligibility app preview" },
  lead: "Borrowing shouldn't feel complicated.",
  paragraphs: [
    "Finding the right loan can often mean comparing different products, understanding complicated terms and navigating multiple application processes.",
    "LoanKonnekt was created to make that journey simpler — helping people discover loan options, understand their choices and take the next step with confidence.",
  ],
} as const;

export const missionCards = [
  {
    key: "mission",
    title: "Our Mission",
    description:
      "Make borrowing simpler, clearer and more accessible for everyone — with experiences designed around real customer needs.",
  },
  {
    key: "vision",
    title: "Our Vision",
    description:
      "Build a trusted financial platform where everyone can confidently discover, understand and choose the right borrowing options.",
  },
  {
    key: "leadership",
    title: "Our Leadership",
    description:
      "We lead with customer-first thinking, responsible innovation and a commitment to creating better financial experiences.",
  },
  {
    key: "commitment",
    title: "Our Commitment",
    description:
      "We're committed to transparency, security and responsible financial journeys that help customers make informed decisions.",
  },
] as const;

export const coreValues = {
  headline: "Our Core Values",
  cards: [
    {
      key: "transparency",
      icon: "Shield" satisfies IconName,
      title: "Extreme Transparency",
      description:
        "No hidden charges, zero prepayment penalties, and absolute honesty about all fees.",
    },
    {
      key: "speed",
      icon: "Cpu" satisfies IconName,
      title: "Algorithmic Speed",
      description:
        "We replace slow human verification with smart data pipelines that disburse cash instantly.",
    },
    {
      key: "sovereignty",
      icon: "UserRound" satisfies IconName,
      title: "Customer Sovereignty",
      description: "You choose your custom EMIs, monthly schedules, and repayment models.",
    },
    {
      key: "security",
      icon: "Lock" satisfies IconName,
      title: "Enterprise Security",
      description:
        "Bank-level encryption to store your Aadhaar, PAN, and credentials safely.",
    },
  ],
} as const;

export const beliefs = {
  headline: "What We Believe In",
  cards: [
    {
      key: "customer-first",
      title: "Customer First",
      description: "We design every experience around real customer needs.",
    },
    {
      key: "transparency",
      title: "Transparency",
      description: "Clear information helps people make better financial decisions.",
    },
    {
      key: "simplicity",
      title: "Simplicity",
      description: "Financial journeys shouldn't feel unnecessarily complicated.",
    },
    {
      key: "trust",
      title: "Trust",
      description: "We believe trust is built through responsible, secure and transparent experiences.",
    },
  ],
} as const;

export const aboutCta = {
  headline: "Access your pre-approved limit now",
  subcopy: "Manage EMIs and track repayments safely inside India's premier borrowing platform.",
  cta: { label: "Check Pre-Approval Now", href: "/apply" },
} as const;
