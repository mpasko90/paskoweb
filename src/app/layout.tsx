import { Inter } from "next/font/google";
import { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PersonBusinessSchema } from "@/components/seo/JsonLdSchema";

import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://paskomichal.pl"),
  title: {
    default: "Michał Paśko - Web Developer Wrocław | Tworzenie Stron Internetowych",
    template: "%s | Michał Paśko - Web Developer Wrocław",
  },
  description:
    "Profesjonalne tworzenie stron internetowych i pomoc komputerowa we Wrocławiu. Doświadczony web developer, freelancer z 10+ lat doświadczenia.",
  generator: "Next.js",
  applicationName: "Michał Paśko - Web Developer",
  referrer: "origin-when-cross-origin",
  keywords: [
    "web developer wrocław",
    "tworzenie stron internetowych",
    "pomoc komputerowa",
    "freelancer",
  ],
  authors: [{ name: "Michał Paśko" }],
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
    title: "Michał Paśko - Web Developer Wrocław | Tworzenie Stron Internetowych",
    description:
      "Profesjonalne tworzenie stron internetowych i pomoc komputerowa we Wrocławiu. Doświadczony web developer, freelancer z 10+ lat doświadczenia.",
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

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
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
