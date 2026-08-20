/** How It Works page content — sourced from Figma "LoanKonnect - How It Works" */

export const howItWorksHero = {
  subcopy:
    "From choosing the right loan to getting started, Loan Konnekt makes the journey simple, transparent and easy to understand.",
  primaryCta: { label: "Explore Our Loans", href: "/loans/" },
  secondaryCta: { label: "Check Eligibility", href: "/apply" },
  illustration: {
    src: "/how-it-works/hero-illustration.png",
    alt: "Loan approval, security and disbursal illustration",
  },
} as const;

export const steps = [
  {
    key: "sign-up",
    title: "Sign Up & Register",
    description:
      "Create your secure LoanKonnekt account in just a few clicks. Enter your mobile number, verify with a secure OTP, and fill in your basic personal profile to initiate the system.",
    bullets: ["Takes less than 2 minutes", "Highly encrypted profile creation"],
    image: { src: "/how-it-works/step-1.png", alt: "LoanKonnekt sign up screen" },
    imageSide: "left" as const,
  },
  {
    key: "upload-documents",
    title: "Upload Documents Digitally",
    description:
      "Say goodbye to tedious physical paper submission. Simply upload digital copies of your core documents directly through our intuitive application portal.",
    bullets: [
      "Only PAN, Aadhaar & 3 Months Bank Statements required",
      "No physical verification or visits needed",
    ],
    image: { src: "/how-it-works/step-2.png", alt: "Document upload screen" },
    imageSide: "right" as const,
  },
  {
    key: "instant-approval",
    title: "Instant Real-Time Approval",
    description:
      "Our advanced algorithmic scoring engines evaluate your application against thousands of parameters. Receive real-time approval within minutes with transparent interest rates.",
    bullets: [
      "Approval decision in under 10 minutes",
      "Zero hidden terms or processing surprises",
    ],
    image: { src: "/how-it-works/step-3.png", alt: "Real-time approval screen" },
    imageSide: "left" as const,
  },
  {
    key: "direct-disbursal",
    title: "Immediate Direct Disbursal",
    description:
      "Once approved, authorize the automatic NACH mandate setup. The cash is directly credited to your registered primary bank account safely and instantly.",
    bullets: ["Direct electronic fund transfer", "Automated easy repayment schedules"],
    image: { src: "/how-it-works/step-4.png", alt: "Disbursal confirmation screen" },
    imageSide: "right" as const,
  },
] as const;

export const howItWorksCta = {
  headline: "Access your pre-approved limit now",
  subcopy: "Manage EMIs and track repayments safely inside India's premier borrowing platform.",
  cta: { label: "Check Pre-Approval Now", href: "/apply" },
} as const;
