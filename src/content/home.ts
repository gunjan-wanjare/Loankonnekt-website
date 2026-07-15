/** Homepage content — sourced from Landing page.docx */

import type { IconName } from "./icons";

export const hero = {
  id: "top",
  badge: "AI-Powered · RBI Compliant · Enterprise Ready",
  headline: "Stop Losing Borrowers to",
  headlineAccent: "Slow Decisions.",
  subcopy:
    "From customer acquisition to disbursements, LoanKonnekt brings every stage of the lending journey together on a single digital lending platform.",
  primaryCta: { label: "Start Free", href: "#contact" },
  secondaryCta: { label: "Explore the Product", href: "#features" },
  trustLine: "Trusted by 150+ financial institutions",
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
  badge: "PLATFORM INTELLIGENCE",
  headline: "The Only Lending Platform",
  headlineAccent: "You Need",
  subcopy:
    "Every function here runs on the same intelligence layer built for RBI compliance. No silos. No handoffs.",
  coreLabel: "Loan Konnekt",
  coreIcon: "Layers" as IconName,
  nodes: [
    {
      icon: "Brain" as IconName,
      label: "AI Credit Analysis",
      description:
        "Bureau + alternative data scoring with explainable AI decisions.",
    },
    {
      icon: "Shield" as IconName,
      label: "Risk Assessment",
      description:
        "Policy engines and risk grids tuned for every product and segment.",
    },
    {
      icon: "Users" as IconName,
      label: "Borrower Journey",
      description:
        "Guided digital journeys from application to repayment across channels.",
    },
    {
      icon: "FileBadge" as IconName,
      label: "Document Intelligence",
      description:
        "OCR, extraction, and automated verification for lending documents.",
    },
    {
      icon: "Eye" as IconName,
      label: "KYC & AML",
      description:
        "Aadhaar, PAN, Digilocker integration with liveliness check.",
    },
    {
      icon: "Lock" as IconName,
      label: "Fraud Detection",
      description:
        "Device, identity, and application fraud signals in real time.",
    },
    {
      icon: "Activity" as IconName,
      label: "Loan Monitoring",
      description:
        "Portfolio health, early warning signals, and collections triggers.",
    },
    {
      icon: "CircleCheck" as IconName,
      label: "Compliance",
      description:
        "Audit trails, maker-checker flows, and regulated reporting built-in.",
    },
  ],
} as const;

export const features = {
  id: "features",
  badge: "PRODUCT SUITE",
  headline: "The Complete Lending Stack,",
  headlineAccent: "Rebuilt",
  subcopy:
    "Everything — from origination to portfolio visibility — under one roof of LoanKonnekt.",
  items: [
    {
      key: "origination",
      title: "Loan Origination",
      description:
        "A fully digital origination flow that compresses days of process into hours.",
      icon: "FileText" as IconName,
      tone: "navy" as const,
      tags: ["Auto-fill", "eSign", "Instant KYC", "Multi-product"],
    },
    {
      key: "decision",
      title: "AI Credit Decisioning",
      description:
        "Instant credit decisions with 99.2% accuracy. No more manual reviews and long hours.",
      icon: "Brain" as IconName,
      tone: "white" as const,
      speedLabel: "Decision Speed",
      speedValue: "< 2 sec",
      speedProgress: 88,
    },
    {
      key: "kyc",
      title: "Paperless Verification",
      description: "Full KYC compliance without a single physical document.",
      icon: "Eye" as IconName,
      tone: "white" as const,
      iconTone: "green" as const,
      tags: ["Aadhaar OTP", "Face Match", "Liveliness"],
      tagTone: "green" as const,
    },
    {
      key: "risk",
      title: "Risk Intelligence",
      description:
        "AI-powered predictive models that catch what traditional credit scores might miss.",
      icon: "Target" as IconName,
      tone: "sky" as const,
      chart: ["Applied", "Verified", "Assessed", "Approved"] as const,
      metric: "94.7%",
      metricLabel: "Prediction Accuracy",
    },
    {
      key: "dashboard",
      title: "Live Portfolio",
      description: "Every loan, every metric is always updated in real time.",
      icon: "BarChart3" as IconName,
      tone: "dark" as const,
      metric: "₹2,847 Cr",
      delta: "↑ 23% MoM",
    },
  ],
} as const;

export const process = {
  id: "process",
  badge: "BORROWER JOURNEY",
  headline: "The Quickest Path to",
  headlineAccent: "Disbursement",
  subcopy:
    'A digital journey to instantly close the gap between "applied" and "funded."',
  steps: [
    {
      num: "01",
      icon: "FileText" as IconName,
      label: "Apply",
      description: "Apply and upload document from any device",
      tone: "primary" as const,
    },
    {
      num: "02",
      icon: "CircleCheck" as IconName,
      label: "Validate",
      description: "Validated instantly with zero manual steps",
      tone: "primary" as const,
    },
    {
      num: "03",
      icon: "Zap" as IconName,
      label: "Approve & Disburse",
      description: "Approve and disburse same-day",
      tone: "light" as const,
    },
  ],
} as const;

export const compare = {
  id: "compare",
  eyebrow: "WHY LOANKONNEKT",
  headline: "Why Institutions Are Moving Off",
  headlineAccent: "Legacy Infrastructure",
  subcopy: "The difference Loan Konnekt intelligence brings.",
  traditional: {
    title: "Traditional Lending",
    subtitle: "Manual, disconnected",
    items: [
      "A 7–10 day underwriting queue",
      "Files, folders, and photocopies",
      "Disconnected tools, manual syncing",
      "Outdated numbers",
      "Defaults discovered too late",
      "Audits take weeks to prepare for",
    ],
  },
  loankonnekt: {
    title: "LoanKonnekt",
    subtitle: "Fast, intelligent",
    items: [
      "A 2–4 hour decision window",
      "OCR extraction and e-signatures",
      "A single source of truth",
      "Numbers updated in real-time",
      "Defaults flagged early by design",
      "Audit-ready by default",
    ],
  },
} as const;

export const stats = {
  id: "stats",
  eyebrow: "IMPACT",
  headline: "Our Track",
  headlineAccent: "Record",
  subcopy:
    "Financial firms using Loan Konnekt are already seeing results like these. You can, too.",
  items: [
    { value: "₹8500+ Cr", label: "Loans Processed" },
    { value: "200K+", label: "Borrowers" },
    { value: "97%", label: "Faster Approvals" },
    { value: "99.8%", label: "Platform Uptime" },
    { value: "150+", label: "Institutions" },
    { value: "24x7", label: "Availability" },
  ],
} as const;

export const faq = {
  id: "faq",
  badge: "FAQ",
  headline: "Frequently Asked",
  headlineAccent: "Questions",
  subcopy: "Everything you need to know about Loan Konnekt.",
  items: [
    {
      q: "How quickly can we integrate Loan Konnekt into our existing systems?",
      a: "Onboarding typically takes 1–2 weeks. Our team handles integration alongside your existing stack.",
    },
    {
      q: "Is Loan Konnekt compliant with RBI regulations?",
      a: "We adhere to the latest RBI digital lending norms, covering KYC, data localization, and fair practice requirements out of the box.",
    },
    {
      q: "What AI models power the credit decision engine?",
      a: "Our models are continuously retrained on live lending outcomes, so accuracy improves as your portfolio grows.",
    },
    {
      q: "How does Loan Konnekt ensure data security?",
      a: "Full audit trails, encrypted storage, and strict role-based access control across the entire platform.",
    },
    {
      q: "What pricing model do you offer?",
      a: "We have a flexible, volume-based pricing model that scales with your lending activity.",
    },
  ],
} as const;

export const finalCta = {
  id: "contact",
  badge: "Start your free trial today",
  headline: "Ready to Transform",
  headlineAccent: "Digital Lending?",
  subcopy:
    "Join 150+ financial institutions that have modernized their lending operations with Loan Konnekt.",
  cta: { label: "Talk to Experts", href: "mailto:hello@loankonnekt.com" },
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
  finalCta,
} as const;
