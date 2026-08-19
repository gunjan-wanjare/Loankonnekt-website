/** Site-wide brand, SEO, navigation, and footer content */

export const site = {
  name: "LoanKonnekt",
  url: "https://www.loankonnekt.com",
  email: "hello@loankonnekt.com",
  brandUrl: "https://crediple.com/brands/Loan-Konnekt/",
  yakaTagline: "A YAKA Brand",
  logo: {
    src: "/logo.png",
    iconSrc: "/rupee.svg",
    wordmark: "Loan Konnekt",
    alt: "LoanKonnekt — India’s smart lending marketplace",
  },
  yaka: {
    /** Soft mark for dark navy (hero / preloader) — Crediple dark */
    softSrc: "/images/yaka-soft.png",
    /** Royal blue mark for light surfaces (scrolled header) — Crediple light */
    /** Header / light surfaces — drop your PNG at public/images/yaka-header.png */
    headerSrc: "/images/yaka-header.png",
    lightSrc: "/images/yaka-light.png",
    alt: "A YAKA Brand",
    darkText: "#B0C0F8",
    lightText: "#2F80ED",
  },
} as const;

export const seo = {
  title: "Compare Loans Instantly | LoanKonnekt",
  titleTemplate: "%s | LoanKonnekt",
  description:
    "LoanKonnekt brings trusted lenders on one digital platform. Compare loan options, check eligibility, and find the best fit instantly—zero hassles guaranteed.",
  keywords: [
    "loan comparison",
    "loan marketplace",
    "personal loan",
    "compare EMI",
    "loan eligibility",
    "RBI compliant lending",
    "banks and NBFCs",
    "digital loan application",
    "best loan offers",
    "LoanKonnekt",
  ],
  ogImage: {
    url: "/images/Frame.svg",
    width: 1200,
    height: 630,
    alt: "LoanKonnekt — India’s smart lending marketplace",
  },
} as const;

export const header = {
  nav: [
    { label: "Home", href: "/" },
    { label: "Loans", href: "/loans/" },
    { label: "How It Works", href: "/how-it-works/" },
    { label: "About Us", href: "/about/" },
    { label: "Contact", href: "/contact/" },
  ],
  cta: { label: "Download App", href: "/download" },
} as const;

export const footer = {
  blurb: [
    "India’s smart lending marketplace",
    "for the next generation of borrowers.",
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
        { label: "About Us", href: "/about/" },
        { label: "Careers", href: "/careers" },
        { label: "Press Kit", href: "/press" },
        { label: "Contact", href: "/contact/" },
        { label: "Partners", href: "/partners" },
      ],
    },
  ],
  copyright: "© 2026 Loan Konnekt Technologies Pvt. Ltd. All rights reserved.",
  linkedInIconSrc: "/home/icon-linkedin.png",
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
