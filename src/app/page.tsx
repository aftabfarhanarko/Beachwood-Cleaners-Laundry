import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustCommunitySection } from "@/components/home/TrustCommunitySection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { WorkingProcessSection } from "@/components/home/WorkingProcessSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ContactFormSection } from "@/components/home/ContactFormSection";
import { LatestNewsSection } from "@/components/home/LatestNewsSection";
import { NewsletterBannerSection } from "@/components/home/NewsletterBannerSection";

export const metadata = {
  title: "Beachwood Cleaners & Laundry | Premier Dry Cleaning & Wash Service in Los Angeles",
  description: "Express wash-and-fold, dry cleaning, ironing, and doorstep delivery across Los Angeles with Beachwood Cleaners & Laundry.",
};

export default function Home() {
  return (
    <div className="space-y-0 overflow-hidden bg-white">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust & Community Stats (4 Floating Cards) */}
      <TrustCommunitySection />

      {/* 3. Services Section ("We are here to make our customers smile") */}
      <ServicesSection />

      {/* 4. Why Choose Us (Circular Orbit Laundry Diagram) */}
      <WhyChooseUsSection />

      {/* 5. Working Process (4 Connected Steps) */}
      <WorkingProcessSection />

      {/* 6. Laundry Rates & Pricing Section */}
      <PricingSection />

      {/* 7. Customer Testimonials (Dark Blue Slider) */}
      <TestimonialsSection />

      {/* 8. Contact Form ("Lets Talk With Us") */}
      <ContactFormSection />

      {/* 9. Latest News (Blog Articles) */}
      <LatestNewsSection />

      {/* 10. Full-Width Newsletter Subscription Banner */}
      <NewsletterBannerSection />
    </div>
  );
}