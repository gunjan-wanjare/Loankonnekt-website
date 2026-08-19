/** Homepage content — sourced from LoanKonnekt Landing Page (Sanjana L) */

import { Mail, MapPin, Phone } from "lucide-react";
import type { IconName } from "./icons";

export const hero = {
  id: "top",
  headline: "Find the Right Loan,",
  headlineAccent: "Hassle-Free.",
  subcopy:
    "Get approved for loans up to ₹5,00,000 in under 10 minutes with minimal paperwork and flexible monthly repayment options.",
  primaryCta: { label: "Check Loan Offer", href: "/apply" },
  secondaryCta: { label: "Download App", href: "/download" },
  stats: [
    { value: "2M+", label: "Downloads" },
    { value: "4.7", label: "Rating" },
    { value: "500k+", label: "Active Users" },
  ],
  categories: [
    {
      key: "personal",
      label: "Personal Loan",
      href: "/loans/personal",
      side: "left" as const,
      tone: "lavender" as const,
      iconSrc: "/home/personal.png",
      rotate: 8,
    },
    {
      key: "business",
      label: "Business Loan",
      href: "/loans/business",
      side: "left" as const,
      tone: "sky" as const,
      iconSrc: "/home/business.png",
      rotate: -3,
    },
    {
      key: "property",
      label: "Property Loan",
      href: "/loans/property",
      side: "left" as const,
      tone: "mint" as const,
      iconSrc: "/home/property.png",
      rotate: -8,
    },
    {
      key: "home",
      label: "Home Loan",
      href: "/loans/home",
      side: "right" as const,
      tone: "peach" as const,
      iconSrc: "/home/home.png",
      rotate: -8,
    },
    {
      key: "education",
      label: "Education Loan",
      href: "/loans/education",
      side: "right" as const,
      tone: "cyan" as const,
      iconSrc: "/home/education.png",
      rotate: 3,
    },
    {
      key: "car",
      label: "Car Loan",
      href: "/loans/car",
      side: "right" as const,
      tone: "rose" as const,
      iconSrc: "/home/car.png",
      rotate: 8,
    },
  ],
} as const;

export const features = {
  id: "features",
  headline: "Types of Loans",
  subcopy: "Choose the right loan product for your needs",
  items: [
    {
      key: "personal",
      title: "Personal Loan",
      description: "Quick funds for personal needs",
      href: "/loans/personal",
      tone: "lavender" as const,
      iconSrc: "/home/loan-personal.png",
    },
    {
      key: "business",
      title: "Business Loan",
      description: "Finance to grow your business",
      href: "/loans/business",
      tone: "sky" as const,
      iconSrc: "/home/loan-business.png",
    },
    {
      key: "home",
      title: "Home Loan",
      description: "Easy loan for your dream home",
      href: "/loans/home",
      tone: "peach" as const,
      iconSrc: "/home/loan-home.png",
    },
    {
      key: "property",
      title: "Property Loan",
      description: "Unlock funds from your property",
      href: "/loans/property",
      tone: "mint" as const,
      iconSrc: "/home/loan-property.png",
    },
    {
      key: "education",
      title: "Education Loan",
      description: "Easy financing for higher studies",
      href: "/loans/education",
      tone: "cyan" as const,
      iconSrc: "/home/loan-education.png",
    },
    {
      key: "car",
      title: "Car Loan",
      description: "Drive your dream car easily",
      href: "/loans/car",
      tone: "rose" as const,
      iconSrc: "/home/loan-car.png",
    },
  ],
  cta: { label: "Check Loan Offer", href: "/apply" },
} as const;

export const process = {
  id: "process",
  headline: "Your Loan Disbursed in Minutes",
  headlineLine1: "Your Loan Disbursed",
  headlineLine2: "in Minutes",
  phoneSrc: "/home/iphone.png",
  steps: [
    { num: "1", label: "Sign up and register" },
    { num: "2", label: "Upload Documents" },
    { num: "3", label: "Get Approved" },
    { num: "4", label: "Receive Funds" },
  ],
  app: {
    name: "Pratik",
    greeting: "Hello, Pratik!",
    subcopy: "Find the best loan for you today.",
    eligibilityTitle: "Check Your Loan Eligibility",
    eligibilitySub: "Takes 2 mins  •  No impact on credit score",
    eligibilityCta: "Check Eligibility",
    eligibilityHref: "/apply",
    categoriesLabel: "Loan Categories",
    categories: [
      { key: "personal", label: "Personal", href: "/loans/personal" },
      { key: "business", label: "Business", href: "/loans/business" },
      { key: "education", label: "Education", href: "/loans/education" },
    ],
  },
} as const;

export const compare = {
  id: "compare",
  headline: "The Smartest Way to Borrow Money",
  subcopy:
    "Compare loan options, understand your choices, and apply with confidence — all in one simple platform.",
  items: [
    {
      key: "collateral",
      icon: "FileText" as IconName,
      title: "No Collateral Required",
      description:
        "Access funds purely based on your credibility. Zero collateral or guarantor needed.",
    },
    {
      key: "approval",
      icon: "CheckCheck" as IconName,
      title: "Instant Approval",
      description:
        "Our real-time algorithmic assessment checks your eligibility and approves in seconds.",
    },
    {
      key: "emi",
      icon: "CalendarClock" as IconName,
      title: "Flexible EMI Options",
      description:
        "Choose a customized repayment structure that perfectly fits your monthly cash flow.",
    },
    {
      key: "docs",
      icon: "IdCard" as IconName,
      title: "Minimal Documentation",
      description:
        "Upload simple digital copies of your PAN, Aadhaar, and a bank statement.",
    },
    {
      key: "digital",
      icon: "Smartphone" as IconName,
      title: "100% Digital Process",
      description:
        "From application to direct account disbursal — everything happens online.",
    },
    {
      key: "rates",
      icon: "Percent" as IconName,
      title: "Competitive Rates",
      description:
        "Enjoy low interest rates calculated transparently without hidden setup fees.",
    },
  ],
} as const;

export const creditScore = {
  id: "credit-score",
  headline: "Check Your Credit Score For Free",
  subcopy:
    "Track your financial health in real-time. Checking your score is fast, totally secure, and won't affect your credit rating.",
  badges: [
    { key: "secure", label: "Encrypted & Secure" },
    { key: "eligibility", label: "Unlock Credit Eligibility" },
  ],
  cta: { label: "Check your score", href: "/credit-score" },
  trust: {
    prefix: "Powered by",
    brand: "Equifax",
    suffix: "Secure SSL Connection",
  },
  gauge: {
    score: 750,
    min: 300,
    max: 900,
    status: "GOOD",
    updated: "Updated today",
  },
} as const;

export const emiCalculator = {
  id: "emi-calculator",
  headline: "Calculate Your EMI Instantly",
  subcopy:
    "Adjust your loan amount and tenure to instantly estimate your monthly EMI, interest, and total repayment.",
  amount: {
    label: "Required Loan Amount",
    min: 5000,
    max: 500000,
    step: 1000,
    defaultValue: 150000,
  },
  tenure: {
    label: "Loan Tenure",
    min: 3,
    max: 36,
    step: 1,
    defaultValue: 12,
    unit: "Months",
  },
  monthlyRate: 0.0133,
  monthlyRateLabel: "1.33% p.m.",
  processingFeeRate: 0.02,
  processingFeeLabel: "Processing Fee (2%)",
  resultLabel: "Your Estimated Monthly EMI",
  interestLabel: "Interest Rate",
  totalInterestLabel: "Total Interest Payable",
  totalRepaymentLabel: "Total Repayment",
  cta: { label: "Get Cash Instantly", href: "/apply" },
} as const;

export const support = {
  id: "support",
  headline: "Expert assistance whenever you need it",
  items: [
    {
      key: "immediate",
      title: "Immediate support",
      subcopy: "With any time",
      icon: "headset" as const,
    },
    {
      key: "chat",
      title: "24/7",
      subcopy: "Chat Assistance",
      icon: "chat24" as const,
    },
    {
      key: "connect",
      title: "Connect",
      subcopy: "With our expert on phone",
      icon: "users" as const,
    },
  ],
} as const;

export const eligibility = {
  id: "eligibility",
  headline: "Simple",
  headlineAccent: "Eligibility",
  headlineAfter: "Requirements",
  subcopy:
    "Basic eligibility criteria to help you understand which loan options may be right for you.",
  cards: [
    {
      key: "salaried",
      icon: "Briefcase" as IconName,
      tone: "blue" as const,
      title: "Salaried Employees",
      items: [
        { label: "Age", value: "21 to 58 years old" },
        { label: "Minimum Monthly Net Income", value: "₹15,000" },
        { label: "Employment", value: "Active service for at least 3 months" },
        {
          label: "Income Mode",
          value: "Directly credited into a registered bank account",
        },
        {
          label: "Documents",
          value: "Direct bank statements & company ID copy",
        },
      ],
    },
    {
      key: "business",
      icon: "Store" as IconName,
      tone: "green" as const,
      title: "Self-Employed / Business",
      items: [
        { label: "Age", value: "21 to 65 years old" },
        { label: "Minimum Annual Turnover", value: "₹2,00,000" },
        {
          label: "Business Vintage",
          value: "Minimum 1 year of continuous operations",
        },
        {
          label: "Bank Account",
          value: "Active current or personal savings bank statement",
        },
        {
          label: "Documents",
          value: "Basic GST registration / ITR and PAN card",
        },
      ],
    },
  ],
} as const;

export const testimonials = {
  id: "testimonials",
  headline: "What Our Customers Say",
  subcopy: "See how borrowers are making their loan journey simpler with us.",
  items: [
    {
      name: "Rahul Verma",
      role: "Software Engineer",
      imageSrc: "/home/testimonial-rahul.png",
      rating: 5,
      quote:
        "LoanKonnekt helped me secure money for my medical emergency in less than 10 minutes. The direct integration and lack of physical verification was incredibly convenient.",
    },
    {
      name: "Priyah Patel",
      role: "Boutique Owner",
      imageSrc: "/home/testimonial-priyah.png",
      rating: 5,
      quote:
        "As a small business owner, getting loans is usually an uphill task. LoanKonnekt's easy self-employed flow verified my business and disbursed ₹2,00,000 without any issues.",
    },
    {
      name: "Amit Sharma",
      role: "Sales Consultant",
      imageSrc: "/home/testimonial-amit.png",
      rating: 5,
      quote:
        "The EMI Calculator was spot-on. No hidden charges, zero surprises, and automatic NACH debit setups meant I never had to worry about repayment dates.",
    },
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
  headline: "Frequently Asked Questions",
  items: [
    {
      q: "What is the maximum loan amount I can borrow?",
      a: "With LoanKonnekt, you can borrow any personal loan amount ranging from ₹5,000 to a maximum limit of ₹5,00,000, depending completely on your pre-calculated eligibility metrics.",
    },
    {
      q: "How long does it take for the money to be credited?",
      a: "Our completely digital process is designed for maximum speed. Once approved, the funds are instantly transferred into your linked bank account via direct bank transfer in under 10 minutes.",
    },
    {
      q: "What documents do I need to apply?",
      a: "You only need to upload digital copies of your PAN card, Aadhaar card, and your active primary bank statements from the previous three months.",
    },
    {
      q: "Are there any hidden pre-payment penalties?",
      a: "Absolutely not. We believe in complete transparency. There are zero pre-payment or foreclosure charges if you decide to pay off your loan early.",
    },
    {
      q: "How are the interest rates calculated?",
      a: "Interest rates starting from just 1.33% p.m. are determined directly by evaluating your credit score, repayment capability, and income details during our assessment flow.",
    },
  ],
} as const;

export const appDownload = {
  id: "app-download",
  headlineLine1: "Access LoanKonnekt",
  headlineLine2: "Anytime, Anywhere.",
  subcopy:
    "Download our top-rated secure mobile app to manage your EMI, track repayment schedules, view pre-approved credit limits, and request immediate money.",
  phoneSrc: "/home/app-download-phone.png",
  stores: [
    {
      key: "apple",
      eyebrow: "Download on the",
      name: "App Store",
      href: "/download",
    },
    {
      key: "google",
      eyebrow: "GET IT ON",
      name: "Google Play",
      href: "/download",
    },
  ],
} as const;

export const homeContent = {
  hero,
  features,
  process,
  creditScore,
  compare,
  emiCalculator,
  support,
  eligibility,
  testimonials,
  faq,
  appDownload,
} as const;
