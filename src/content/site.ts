/** Site-wide brand, SEO, navigation, and footer content */

export const site = {
  name: "LoanKonnekt",
  url: "https://www.loankonnekt.com",
  email: "hello@loankonnekt.com",
  brandUrl: "https://crediple.com/brands/Loan-Konnekt/",
  yakaTagline: "A YAKA Brand",
  logo: {
    src: "/images/logo.png",
    alt: "LoanKonnekt — AI Digital Lending Platform",
  },
  yaka: {
    /** Soft mark for dark navy (hero / preloader) — Crediple dark */
    softSrc: "/images/yaka-soft.png",
    /** Royal blue mark for light surfaces (scrolled header) — Crediple light */
    lightSrc: "/images/yaka-light.png",
    alt: "A YAKA Brand",
    darkText: "#B0C0F8",
    lightText: "#2F80ED",
  },
} as const;

export const seo = {
  title: "AI Digital Lending Platform for Banks & NBFCs - LoanKonnekt",
  titleTemplate: "%s | LoanKonnekt",
  description:
    "LoanKonnekt is an RBI-compliant digital lending platform that offers instant credit decisioning, loan origination & quick disbursals. Explore platform now.",
  keywords: [
    "digital lending platform",
    "instant credit decisioning",
    "loan origination",
    "AI digital lending platform",
    "RBI compliant lending",
    "loan disbursement",
    "NBFC lending software",
    "bank lending platform",
    "credit decisioning",
    "LoanKonnekt",
  ],
  ogImage: {
    url: "/images/logo.png",
    width: 1200,
    height: 630,
    alt: "LoanKonnekt — AI Digital Lending Platform for Banks & NBFCs",
  },
} as const;

export const header = {
  nav: [
    { label: "Platform", href: "#platform" },
    { label: "Products", href: "#features" },
    { label: "Solutions", href: "#compare" },
    { label: "Resources", href: "#faq" },
    { label: "About", href: "#contact" },
  ],
  cta: { label: "Contact us", href: "/contact" },
} as const;

export const footer = {
  blurb: [
    "Intelligent lending infrastructure",
    "for the next generation of financial",
    "institutions across India.",
  ],
  columns: [
    {
      heading: "Products",
      links: [
        { label: "Loan Origination", href: "/loan-origination" },
        { label: "Credit Engine", href: "/credit-engine" },
        { label: "Digital KYC", href: "/digital-kyc" },
        { label: "Document Vault", href: "/document-vault" },
        { label: "Risk Analytics", href: "/risk-analytics" },
      ],
    },
    {
      heading: "Solutions",
      links: [
        { label: "Banks & HFCs", href: "/solutions/banks" },
        { label: "NBFCs", href: "/solutions/nbfcs" },
        { label: "Fintechs", href: "/solutions/fintechs" },
        { label: "Microfinance", href: "/solutions/microfinance" },
        { label: "Corporate Lending", href: "/solutions/corporate" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "API Reference", href: "/api" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Blog", href: "/blog" },
        { label: "Webinars", href: "/webinars" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Press Kit", href: "/press" },
        { label: "Contact", href: "/contact" },
        { label: "Partners", href: "/partners" },
      ],
    },
  ],
  copyright: "© 2024 Loan Konnekt Technologies Pvt. Ltd. All rights reserved.",
  legal: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/loankonnekt/about/",
    },
    { label: "Privacy Policy", href: "#legal-privacy" },
    { label: "Terms of Service", href: "#legal-terms" },
    { label: "Cookie Policy", href: "#legal-cookies" },
  ],
} as const;
