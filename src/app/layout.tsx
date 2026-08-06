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
  title: "Beachwood Cleaners & Laundry | #1 Eco-Friendly Laundry & Dry Cleaning Los Angeles",
  description: "Professional eco-friendly dry cleaning and wash-and-fold laundry delivery in Los Angeles (2699 Beachwood Dr, LA CA 90068). Call +1 (323) 828-7503 for doorstep service.",
  keywords: "dry cleaners los angeles, wash and fold beachwood canyon, laundry pickup delivery 90068, suit dry cleaning LA",
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "DryCleaner",
  "name": "Beachwood Cleaners & Laundry",
  "image": "https://beachwoodcleaners.com/og-image.jpg",
  "telephone": "+1-323-828-7503",
  "email": "laundryday@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2699 Beachwood Dr",
    "addressLocality": "Los Angeles",
    "addressRegion": "CA",
    "postalCode": "90068",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.120027,
    "longitude": -118.321431
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
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-[#0F172A]">
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
