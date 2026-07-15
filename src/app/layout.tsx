import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { seo, site } from "@/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#050A18" },
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
      { url: "/favicon.ico?v=3", sizes: "any" },
      { url: "/favicon-16x16.png?v=3", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png?v=3", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png?v=3", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png?v=3", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=3", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.png?v=3"],
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
    <html lang="en-IN" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
