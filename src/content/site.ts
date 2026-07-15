/** Site-wide brand, SEO, navigation, and footer content */

export const site = {
  name: "LoanKonnekt",
  url: "https://www.loankonnekt.com",
  email: "hello@loankonnekt.com",
  brandUrl: "https://crediple.com/brands/Loan-Konnekt/",
  logo: {
    src: "/images/logo.png",
    alt: "LoanKonnekt — AI Digital Lending Platform",
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
  login: { label: "Sign In", href: "#contact" },
  cta: { label: "Contact us", href: "#contact" },
} as const;

export const footer = {
  blurb:
    "Intelligent lending infrastructure for the next generation of financial institutions across India.",
  newsletter: {
    heading: "Stay ahead in fintech",
    description: "Insights on lending innovation, delivered monthly.",
    placeholder: "your@bank.com",
    submitLabel: "Subscribe",
  },
  columns: [
    {
      heading: "Products",
      links: [
        { label: "Loan Origination", href: "#features" },
        { label: "Credit Engine", href: "#features" },
        { label: "Digital KYC", href: "#platform" },
        { label: "Document Vault", href: "#features" },
        { label: "Risk Analytics", href: "#features" },
      ],
    },
    {
      heading: "Solutions",
      links: [
        { label: "Banks & HFCs", href: "#features" },
        { label: "NBFCs", href: "#features" },
        { label: "Fintechs", href: "#features" },
        { label: "Microfinance", href: "#features" },
        { label: "Corporate Lending", href: "#features" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Documentation", href: "#faq" },
        { label: "API Reference", href: "#faq" },
        { label: "Case Studies", href: "#stats" },
        { label: "Blog", href: "#faq" },
        { label: "Webinars", href: "#contact" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "#contact" },
        { label: "Careers", href: "#contact" },
        { label: "Press Kit", href: "#contact" },
        { label: "Contact", href: "#contact" },
        { label: "Partners", href: "#trust" },
      ],
    },
  ],
  social: [
    { label: "LinkedIn", abbr: "IN", href: "#contact" },
    { label: "Twitter", abbr: "TW", href: "#contact" },
    { label: "GitHub", abbr: "GH", href: "#contact" },
    { label: "YouTube", abbr: "YT", href: "#contact" },
  ],
  copyright: "© 2024 Loan Konnekt Technologies Pvt. Ltd. All rights reserved.",
  legal: [
    { label: "Privacy Policy", href: "#contact" },
    { label: "Terms of Service", href: "#contact" },
    { label: "Cookie Policy", href: "#contact" },
  ],
} as const;
