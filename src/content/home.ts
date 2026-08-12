/** Homepage content — sourced from LoanKonnekt Landing Page (Sanjana L) */

import { Mail, MapPin, Phone } from "lucide-react";
import type { IconName } from "./icons";

export const hero = {
  id: "top",
  badge: "Trusted Lenders · Instant Matching · Zero Hassles",
  headline: "Your Search for the Best Loan",
  headlineAccent: "Ends Here.",
  subcopy:
    "LoanKonnekt brings you trusted lenders on one digital platform. Compare loan options and find the best fit instantly. Zero hassles guaranteed.",
  primaryCta: { label: "Apply Now", href: "/apply" },
  secondaryCta: { label: "Learn More", href: "#features" },
  trustAvatars: ["HD", "SB", "IC", "BF", "TC"],
  cards: [
    {
      key: "score",
      title: "CIBIL Credit Score",
      value: "782",
      badge: "AA+",
      delta: "+12 pts this month",
      type: "score" as const,
    },
    {
      key: "pipeline",
      title: "Active Loan Pipeline",
      value: "₹847 Cr",
      badge: "+18% MoM",
      type: "pipeline" as const,
    },
    {
      key: "decisions",
      title: "Active Decisions / min",
      value: "247",
      live: true,
      speed: "< 2s",
      accuracy: "99.2%",
      type: "decisions" as const,
    },
    {
      key: "approval",
      title: "Approval Rate",
      value: "94.2%",
      risks: [
        { label: "Low Risk", value: "72%", tone: "low" as const },
        { label: "Med Risk", value: "20%", tone: "med" as const },
        { label: "High Risk", value: "8%", tone: "high" as const },
      ],
      type: "approval" as const,
    },
  ],
  stats: [
    { value: "₹8,500+ Cr", label: "Loans Processed" },
    { value: "200K+", label: "Active Borrowers" },
    { value: "97%", label: "Faster Approvals" },
    { value: "99.8%", label: "Platform Uptime" },
    { value: "150+", label: "Institutions" },
  ],
} as const;

export const trust = {
  id: "trust",
  headline: "Trusted by 150+ leading financial institutions",
  partners: [
    { name: "Mahindra Finance", initial: "M" },
    { name: "Tata Capital", initial: "T" },
    { name: "Aditya Birla Finance", initial: "A" },
    { name: "Piramal Finance", initial: "P" },
    { name: "HDFC Bank", initial: "H" },
    { name: "ICICI Bank", initial: "I" },
  ],
} as const;

export const ecosystem = {
  id: "platform",
  badge: "BORROWER FIRST",
  headline: "We Make Borrowing",
  headlineAccent: "Stress-Free.",
  subcopy:
    "Whether taking your first loan or tenth, LoanKonnekt matches you with the best lenders for your profile.",
  coreLabel: "Loan Konnekt",
  coreIcon: "Layers" as IconName,
  nodes: [
    {
      icon: "Target" as IconName,
      label: "Tailored Loan Matching",
      description:
        "Get matched with lenders that fit your profile, goals, and eligibility.",
    },
    {
      icon: "Brain" as IconName,
      label: "Personalised Recommendations",
      description:
        "See loan options curated for your needs—not a one-size-fits-all list.",
    },
    {
      icon: "SearchCheck" as IconName,
      label: "Smart Eligibility Check",
      description:
        "Know where you stand before you apply, with clear eligibility insights.",
    },
    {
      icon: "LineChart" as IconName,
      label: "Interest & EMI Comparison",
      description:
        "Compare rates, EMIs, and tenures side by side to pick the best deal.",
    },
    {
      icon: "Users" as IconName,
      label: "Dedicated Application Assistance",
      description:
        "Get help at every step so your application moves forward smoothly.",
    },
    {
      icon: "FileBadge" as IconName,
      label: "Full Documentation Guidance",
      description:
        "Know exactly what to upload and how—no paperwork confusion.",
    },
    {
      icon: "CircleCheck" as IconName,
      label: "Ongoing Support",
      description:
        "Stay supported from discovery through approval and beyond.",
    },
  ],
} as const;

export const features = {
  id: "features",
  badge: "PLATFORM",
  headline: "More Than",
  headlineAccent: "Lending.",
  subcopy:
    "Whether comparing loan options or managing documentation, LoanKonnekt is for borrowers who prefer convenience and safety.",
  items: [
    {
      key: "marketplace",
      title: "Lender Marketplace",
      description:
        "Choose from 150+ leading banks and RBI-registered NBFCs on one platform.",
      icon: "Building2" as IconName,
      tone: "navy" as const,
      tags: ["Banks", "NBFCs", "RBI Registered", "One Platform"],
    },
    {
      key: "discovery",
      title: "Loan Discovery",
      description:
        "Browse loan offers tailored to your profile. Compare interest rates, EMIs, repayment tenures, eligibility, and processing fees to find the perfect loan for your needs.",
      icon: "SearchCheck" as IconName,
      tone: "white" as const,
      tags: ["Rates", "EMIs", "Tenure", "Fees"],
    },
    {
      key: "application",
      title: "Digital Application",
      description:
        "Submit your loan application online in just a few steps. First-time borrower? We'll guide you every step of the way.",
      icon: "FileInput" as IconName,
      tone: "white" as const,
      iconTone: "green" as const,
      tags: ["Online", "Guided", "Few Steps"],
      tagTone: "green" as const,
    },
    {
      key: "documents",
      title: "Document Management",
      description:
        "Say goodbye to complicated paperwork. Upload your documents and let us handle the application process.",
      icon: "FileBadge" as IconName,
      tone: "sky" as const,
      tags: ["Upload", "Paperless", "Assisted"],
    },
    {
      key: "approval",
      title: "Approval Assistance",
      description:
        "From application to approval, our team ensures a smooth borrowing experience for you.",
      icon: "BadgeCheck" as IconName,
      tone: "dark" as const,
      metric: "200K+",
      delta: "Borrowers trust us",
    },
  ],
} as const;

export const process = {
  id: "process",
  badge: "HOW IT WORKS",
  headline: "The Quickest Path to",
  headlineAccent: "Approval.",
  subcopy:
    'Bridging the gap between "Applied" and "Approved" with a smarter digital experience.',
  steps: [
    {
      num: "01",
      icon: "FileText" as IconName,
      label: "Enter requirements",
      description: "Enter your loan requirements",
      tone: "primary" as const,
    },
    {
      num: "02",
      icon: "SearchCheck" as IconName,
      label: "Get eligible offers",
      description: "See offers matched to your profile",
      tone: "primary" as const,
    },
    {
      num: "03",
      icon: "LineChart" as IconName,
      label: "Compare and choose",
      description: "Compare lenders, rates, and options",
      tone: "primary" as const,
    },
    {
      num: "04",
      icon: "FileBadge" as IconName,
      label: "Submit documents",
      description: "Upload documents with guided support",
      tone: "primary" as const,
    },
    {
      num: "05",
      icon: "Zap" as IconName,
      label: "Get approved",
      description: "Get approved and receive funds",
      tone: "light" as const,
    },
  ],
} as const;

export const compare = {
  id: "compare",
  eyebrow: "WHY LOANKONNEKT",
  headline: "What Makes LoanKonnekt a",
  headlineAccent: "Smarter Choice",
  subcopy: "See why 200k+ borrowers trust us.",
  traditional: {
    title: "Other Platforms",
    subtitle: "Scattered & manual",
    items: [
      "Manual loan search",
      "Limited lender options",
      "No loan comparisons",
      "Handle documentation yourself",
      "Limited assistance after application",
    ],
  },
  loankonnekt: {
    title: "LoanKonnekt",
    subtitle: "Smart & supported",
    items: [
      "Eligibility-based loan matching",
      "Multiple lenders on one platform",
      "Compare lenders, rates, and options in one place",
      "Documentation support from start to finish",
      "Support from application till approval",
    ],
  },
} as const;

export const stats = {
  id: "stats",
  eyebrow: "IMPACT",
  headline: "Our",
  headlineAccent: "Impact.",
  subcopy:
    "Thousands of borrowers have already found the right loan with LoanKonnekt.",
  items: [
    { value: "₹8500+ Cr", label: "Loans Processed" },
    { value: "200K+", label: "Borrowers" },
    { value: "97%", label: "Faster Approvals" },
    { value: "99.8%", label: "Platform Uptime" },
    { value: "150+", label: "Institutions" },
    { value: "24x7", label: "Availability" },
  ],
} as const;

export const landingContact = {
  id: "contact",
  heading: "How can we help you today?",
  supporting:
    "Tell us about your business. We'll show you how Orgatry fits.",
  submitLabel: "Submit",
  fields: {
    firstName: {
      label: "First Name*",
      placeholder: "Enter your first name",
    },
    lastName: {
      label: "Last Name*",
      placeholder: "Enter your last name",
    },
    email: {
      label: "Email",
      placeholder: "Enter your email",
    },
    subject: {
      label: "Subject",
      placeholder: "Enter your subject",
    },
    description: {
      label: "Description",
      placeholder: "Please describe what you need",
    },
  },
} as const;

export const landingContactInfo = [
  {
    id: "email",
    label: "Email",
    value: "hello@orgatry.com",
    href: "mailto:hello@orgatry.com",
    icon: Mail,
  },
  {
    id: "phone",
    label: "Phone",
    value: "+91 1234567890",
    href: "tel:+911234567890",
    icon: Phone,
  },
  {
    id: "office",
    label: "Office",
    value: "Sattva Knowledge City, Hi-Tec City, Hyderabad.",
    href: undefined,
    icon: MapPin,
  },
] as const;

export const faq = {
  id: "faq",
  badge: "FAQ",
  headline: "Frequently Asked",
  headlineAccent: "Questions",
  subcopy: "Still have queries? We've answered the most common ones below.",
  items: [
    {
      q: "Does LoanKonnekt provide loans directly?",
      a: "No, we do not provide loans directly. We connect you with trusted lenders and assist you through the application process. The lender disburses the loan amount.",
    },
    {
      q: "How does LoanKonnekt help me find the right loan?",
      a: "We use secure bank integrations to fetch loan offers based on your eligibility, so you can compare and choose the best one.",
    },
    {
      q: "Is LoanKonnekt compliant with RBI regulations?",
      a: "Yes, we follow RBI digital lending guidelines to ensure secure, transparent, and compliant lending practices.",
    },
    {
      q: "Are the banks and NBFCs listed on LoanKonnekt verified and trustworthy?",
      a: "Yes, we ensure the lending institutions listed on our platform are RBI-regulated banks and registered NBFCs.",
    },
    {
      q: "How does Loan Konnekt ensure data security?",
      a: "We protect your data with encrypted storage, complete audit trails, and strict role-based access controls across the platform.",
    },
  ],
} as const;

export const homeContent = {
  hero,
  trust,
  ecosystem,
  features,
  process,
  compare,
  stats,
  faq,
} as const;
