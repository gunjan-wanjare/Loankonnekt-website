import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Geist, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { AppShell } from "@/components/AppShell";
import { ThemeProvider } from "@/components/ThemeProvider";
import { seo, site } from "@/content";
import "./globals.css";

const NO_FLASH_THEME_SCRIPT = `(function(){try{var t=localStorage.getItem("loankonnekt-theme");document.documentElement.setAttribute("data-theme",t==="dark"?"dark":"light");}catch(e){document.documentElement.setAttribute("data-theme","light");}})();`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["600"],
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin"],
  weight: ["500"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f1e" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: seo.title,
    template: seo.titleTemplate,
  },
  description: seo.description,
  applicationName: site.name,
  generator: "Next.js",
  keywords: [...seo.keywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Financial Technology",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: site.url,
    languages: {
      "en-IN": site.url,
      "en-US": site.url,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["en_US"],
    url: site.url,
    siteName: site.name,
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: seo.ogImage.url,
        width: seo.ogImage.width,
        height: seo.ogImage.height,
        alt: seo.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  appleWebApp: {
    title: site.name,
    capable: true,
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: "/favicon.png?v=4", sizes: "any", type: "image/png" },
      { url: "/favicon-16x16.png?v=4", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png?v=4", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png?v=3", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png?v=3", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=3", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.png?v=4"],
  },
  other: {
    "brand:url": site.brandUrl,
    "geo.region": "IN",
    "geo.placename": "India",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${plusJakartaSans.variable} ${beVietnamPro.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: NO_FLASH_THEME_SCRIPT }} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZJ3C7B2PSF"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZJ3C7B2PSF');
          `}
        </Script>
        <meta
          name="google-site-verification"
          content="EsvzOuLamVLFhCGM2lLWEN40sshku_XjfUoW881tOaU"
        />
        {/* Force top before browser restores mid-page scroll on refresh */}
        <script
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration="manual";window.scrollTo(0,0);`,
          }}
        />
      </head>
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        <ThemeProvider>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
