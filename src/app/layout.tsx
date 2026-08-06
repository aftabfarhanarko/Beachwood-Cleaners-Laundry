import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AosProvider } from "@/components/AosProvider";
import { PageTransition } from "@/components/PageTransition";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bai-jamjuree",
  display: "swap",
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QuickFold Laundry Service | Premium Eco-Friendly Laundry & Dry Cleaning",
  description: "Simplify your life with QuickFold Laundry Service. Professional wash & fold, dry cleaning, ironing, and express 24-hour doorstep pickup & delivery.",
  keywords: "quickfold laundry, dry cleaning, wash and fold, laundry delivery, eco friendly laundry service",
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "DryCleaner",
  "name": "QuickFold Laundry Service",
  "telephone": "+1-123-456-7890",
  "email": "info@quickfoldlaundry.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Clean Street",
    "addressLocality": "Beachwood",
    "addressRegion": "NY",
    "postalCode": "10001",
    "addressCountry": "US"
  },
  "priceRange": "$$"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${baiJamjuree.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#0F172A]">
        <AosProvider>
          <Navbar />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </AosProvider>
      </body>
    </html>
  );
}
