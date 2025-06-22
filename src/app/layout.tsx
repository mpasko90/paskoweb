import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { PersonBusinessSchema } from "@/components/seo/EnhancedJsonLdSchema";

import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://paskomichal.pl"),
  title: {
    default:
      "Web Developer Wrocław | Michał Paśko - Tworzenie Stron Internetowych",
    template: "%s | Michał Paśko - Web Developer Wrocław",
  },
  description:
    "Web Developer Wrocław ⭐ Michał Paśko - Absolwent informatyki z 4-letnim doświadczeniem. WordPress, Next.js, React. Strony internetowe, aplikacje webowe, pomoc komputerowa. Freelancer ✅",
  generator: "Next.js",
  applicationName: "Michał Paśko - Web Developer Wrocław",
  referrer: "origin-when-cross-origin",
  keywords: [
    "web developer wrocław",
    "tworzenie stron internetowych wrocław",
    "programista wrocław",
    "freelancer programista",
    "strony internetowe wrocław",
    "next.js developer",
    "react developer wrocław",
    "typescript developer",
    "sklepy internetowe wrocław",
    "aplikacje webowe",
    "michał paśko",
    "paskomichal",
  ],
  authors: [{ name: "Michał Paśko", url: "https://paskomichal.pl" }],
  creator: "Michał Paśko",
  publisher: "Michał Paśko",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://paskomichal.pl",
    siteName: "Michał Paśko - Web Developer Wrocław",
    title:
      "Web Developer Wrocław | Michał Paśko - Tworzenie Stron Internetowych",
    description:
      "Web Developer Wrocław ⭐ Michał Paśko - Freelancer z 10+ lat doświadczenia. Nowoczesne strony internetowe Next.js, React, TypeScript. Konkurencyjne ceny ✅",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Michał Paśko - Web Developer Wrocław",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://paskomichal.pl/",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pl" className={inter.variable}>
      <body className={inter.className}>
        <PersonBusinessSchema />
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
