/** Loans page content — sourced from Figma "LoanKonnect - Loan" */

export const loansHero = {
  subcopy:
    "Explore our curated suite of quick financial products. Transparent rates, flexible repayments, and 100% digital verification.",
  primaryCta: { label: "Check Eligibility", href: "/apply" },
  secondaryCta: { label: "Explore Loans", href: "#features" },
  badges: ["Trusted Lenders", "Instant Matching", "Zero Hassles"],
  illustration: {
    src: "/loans/hero-illustration.png",
    alt: "Loan money bag with coins",
  },
} as const;

export const loansStats = {
  eyebrow: "Trusted by Borrowers Across India",
  stats: [
    { value: "250K+", label: "Customers Assisted" },
    { value: "40+", label: "Lending Partners" },
    { value: "6+", label: "Loan Categories" },
    { value: "₹5,200 Cr+", label: "Total Disbursed" },
  ],
} as const;

export const loanComparison = {
  id: "compare-loans",
  headline: "Compare Loan Options at a Glance",
  columns: ["Loan Type", "Best For", "Loan Amount", "Tenure", "Interest Rate"],
  rows: [
    {
      type: "Personal Loan",
      bestFor: "Emergency, Travel, Purchases",
      amount: "Up to ₹5 L",
      tenure: "12 - 60 Months",
      rate: "Starting 10.99% p.a.",
    },
    {
      type: "Business Loan",
      bestFor: "Working Capital, Scaling",
      amount: "Up to ₹50 L",
      tenure: "12 - 60 Months",
      rate: "Starting 15.00% p.a.",
    },
    {
      type: "Home Loan",
      bestFor: "Buying Home, Land, Renovating",
      amount: "Up to ₹2 Cr",
      tenure: "Up to 30 Years",
      rate: "Starting 8.40% p.a.",
    },
    {
      type: "Property Loan",
      bestFor: "High-value Funding Needs",
      amount: "Up to ₹5 Cr",
      tenure: "Up to 15 Years",
      rate: "Starting 9.00% p.a.",
    },
    {
      type: "Education Loan",
      bestFor: "Higher Education, Global Study",
      amount: "Up to ₹40 L",
      tenure: "Up to 15 Years",
      rate: "Starting 9.50% p.a.",
    },
    {
      type: "Car Loan",
      bestFor: "New / Pre-owned Vehicles",
      amount: "Up to ₹25 L",
      tenure: "Up to 7 Years",
      rate: "Starting 9.15% p.a.",
    },
  ],
} as const;

export const eligibilityEstimator = {
  id: "eligibility-estimator",
  headline: "Quick Eligibility Estimator",
  salary: { label: "Monthly Net Salary", placeholder: "₹ Enter net monthly income" },
  creditTier: {
    label: "Credit Score Tier",
    options: ["Below 650", "650 - 750", "Above 750"],
    defaultValue: "Above 750",
  },
  cta: { label: "Estimate Pre-Approval", href: "/apply" },
  requirements: {
    headline: "Minimal Requirements",
    subcopy:
      "Our system instantly checks your PAN and digital KYC to establish a credit profile. Here is what guarantees rapid approval:",
    items: [
      "Indian Citizenship with valid Aadhaar & PAN",
      "Direct credit salary mode to bank statement",
      "Minimum age of 21 and active income route",
    ],
  },
} as const;

export const loansCta = {
  headline: "Ready to secure your transparent loan limit?",
  subcopy: "Get pre-approved in under 10 minutes. Zero collateral, zero hassle.",
  cta: { label: "Check Free Eligibility", href: "/apply" },
} as const;
