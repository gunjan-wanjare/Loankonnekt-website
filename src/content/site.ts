/** Site-wide brand, SEO, navigation, and footer content */

export const site = {
  name: "LoanKonnekt",
  url: "https://www.loankonnekt.com",
  email: "hello@loankonnekt.com",
  brandUrl: "https://crediple.com/brands/Loan-Konnekt/",
  yakaTagline: "A YAKA Brand",
  logo: {
    src: "/logo.png",
    wordmark: "Loan Konnekt",
    alt: "LoanKonnekt — India’s smart lending marketplace",
  },
  yaka: {
    /** Soft mark for dark navy (hero / preloader) — Crediple dark */
    softSrc: "/images/yaka-soft.png",
    /** Royal blue mark for light surfaces (scrolled header) — Crediple light.
     *  Full-res mask: yaka-header.png/yaka-light.png are only 38x34px and
     *  blur badly on upscale, so header/light surfaces use the full-res
     *  version of the same mark instead. */
    headerSrc: "/images/yaka-mark-hq.png",
    /** Header mark on dark theme — darkthemelogo.png's color, full-res mask (source file was only 38x34px and blurred on upscale) */
    headerDarkSrc: "/images/yaka-header-dark.png",
    lightSrc: "/images/yaka-mark-hq.png",
    alt: "A YAKA Brand",
    darkText: "#E2E8F0",
    lightText: "#0047AB",
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
    { label: "Contact", href: "/contact/#contact-form" },
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
        { label: "Loan Origination", href: "/contact/#contact-form" },
        { label: "Credit Engine", href: "/contact/#contact-form" },
        { label: "Digital KYC", href: "/contact/#contact-form" },
        { label: "Document Vault", href: "/contact/#contact-form" },
        { label: "Risk Analytics", href: "/contact/#contact-form" },
      ],
    },
    {
      heading: "Solutions",
      links: [
        { label: "Banks & HFCs", href: "/contact/#contact-form" },
        { label: "NBFCs", href: "/contact/#contact-form" },
        { label: "Fintechs", href: "/contact/#contact-form" },
        { label: "Microfinance", href: "/contact/#contact-form" },
        { label: "Corporate Lending", href: "/contact/#contact-form" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Documentation", href: "/contact/#contact-form" },
        { label: "API Reference", href: "/contact/#contact-form" },
        { label: "Case Studies", href: "/contact/#contact-form" },
        { label: "Blog", href: "/contact/#contact-form" },
        { label: "Webinars", href: "/contact/#contact-form" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "/about/" },
        { label: "Careers", href: "/contact/#contact-form" },
        { label: "Press Kit", href: "/contact/#contact-form" },
        { label: "Contact", href: "/contact/#contact-form" },
        { label: "Partners", href: "/contact/#contact-form" },
      ],
    },
  ],
  copyright: "© 2026 LoanKonnekt Technologies Pvt. Ltd. All rights reserved.",
  linkedInIconSrc: "/home/icon-linkedin.png",
  legal: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/loankonnekt/about/",
    },
    { label: "Privacy Policy", href: "#legal-privacy" },
    { label: "Terms of service", href: "#legal-terms" },
    { label: "Cookie Policy", href: "#legal-cookies" },
  ],
} as const;
