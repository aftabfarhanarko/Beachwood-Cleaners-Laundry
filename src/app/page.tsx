import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PricingSection } from "@/components/PricingSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WorkingProcessSection } from "@/components/WorkingProcessSection";
import { ContactFormSection } from "@/components/ContactFormSection";
import { LatestNewsSection } from "@/components/LatestNewsSection";
import { NewsletterBannerSection } from "@/components/NewsletterBannerSection";

export const metadata = {
  title: "Beachwood Cleaners & Laundry | Professional Garment Care in Los Angeles",
  description: "Fast, reliable wash-and-fold, dry cleaning, ironing, and doorstep delivery with Beachwood Cleaners & Laundry.",
};

export default function Home() {
  return (
    <div className="space-y-0 overflow-hidden bg-white">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Services Section */}
      <ServicesSection />

      {/* 3. Pricing Section with Real Rates */}
      <PricingSection />

      {/* 4. Why Choose Us (Circular Orbit Diagram) */}
      <WhyChooseUsSection />

      {/* 5. Customer Testimonials (Vibrant Blue Card Slider) */}
      <TestimonialsSection />

      {/* 6. Working Process (4 Connected Steps) */}
      <WorkingProcessSection />

      {/* 7. Contact Form ("Lets Talk With Us") */}
      <ContactFormSection />

      {/* 8. Latest News */}
      <LatestNewsSection />

      {/* 9. Join Our Newsletter Banner */}
      <NewsletterBannerSection />
    </div>
  );
}