import React from "react";
import { PodcastStyleFeature } from "@/components/PodcastStyleFeature";
import { ValuePropositionGrid } from "@/components/ValuePropositionGrid";
import { TrustCommunitySection } from "@/components/TrustCommunitySection";
import { ServiceTabs } from "@/components/ServiceTabs";
import { PricingCalculator } from "@/components/PricingCalculator";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { LocationMapSection } from "@/components/LocationMapSection";
import { HomeFaqAccordion } from "@/components/HomeFaqAccordion";
import { BottomCtaBanner } from "@/components/BottomCtaBanner";

export const metadata = {
  title: "Beachwood Cleaners & Laundry | #1 Eco-Friendly Laundry & Dry Cleaning LA",
  description: "Premier eco-friendly dry cleaning & wash-and-fold laundry service in Los Angeles. Free doorstep pickup & delivery in Beachwood Canyon, Hollywood Hills, Los Feliz.",
};

const faqs = [
  {
    q: "What is your minimum weight for Wash & Fold pickup?",
    a: "Our standard minimum order for free doorstep pickup and delivery is 15 lbs ($36.75). Orders under 15 lbs are welcome but will be charged at the 15 lb minimum rate.",
  },
  {
    q: "What is your standard turnaround time?",
    a: "Our standard turnaround time is 24 to 48 hours. Express same-day service is available for orders picked up before 9:00 AM.",
  },
  {
    q: "How do you handle delicate items or special wash preferences?",
    a: "You can specify temperature settings, hypoallergenic detergents, and hang-dry requests in your order notes. Delicates are washed separately in protective mesh bags.",
  },
  {
    q: "Which areas in Los Angeles do you service for doorstep pickup?",
    a: "We service Beachwood Canyon, Hollywood, Hollywood Hills, Los Feliz, Silver Lake, Hancock Park, and surrounding Los Angeles neighborhoods within a 10-mile radius of 2699 Beachwood Dr.",
  },
  {
    q: "Are your dry cleaning solvents safe for delicate fabrics and the environment?",
    a: "Yes! We use 100% organic, toxic-free, PERC-free solvents that leave zero chemical odor while protecting silk, wool, cashmere, and fine garments.",
  },
];

export default function Home() {
  return (
    <div className="space-y-20 pb-16 overflow-hidden">
      {/* 1. Main Hero Section (Podcast-style Overlapping Layout) */}
      <PodcastStyleFeature />

      {/* 2. Value Proposition Grid (6 Core Benefits) */}
      <ValuePropositionGrid />

      {/* 3. Trust & Community Impact Stats */}
      <TrustCommunitySection />

      {/* 4. Core Services Tab Switcher */}
      <section className="bg-white py-16 border-y border-slate-100" data-aos="fade-up">
        <div className="max-container space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00A8B5]">
              Our Core Services
            </span>
            <h2 className="text-2xl lg:text-[36px] font-semibold tracking-tight text-[#00223D]">
              Garment Care Specialized For Every Fabric
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-[1.6]">
              Select a service below to preview pricing and standard turnaround times.
            </p>
          </div>

          <ServiceTabs />
        </div>
      </section>

      {/* 5. Transparent Order Estimate Pricing Calculator */}
      <section className="max-container" data-aos="fade-up">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00A8B5]">
            No Hidden Fees
          </span>
          <h2 className="text-2xl lg:text-[36px] font-semibold text-[#00223D] tracking-tight">
            Calculate Your Order Estimate
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-[1.6]">
            Adjust the sliders and quantities below for instant cost transparency before scheduling your pickup.
          </p>
        </div>
        <PricingCalculator />
      </section>

      {/* 6. Seamless 4-Step How It Works Workflow */}
      <HowItWorksSection />

      {/* 7. Customer Reviews & Testimonials */}
      <TestimonialsSection />

      {/* 8. Store Location & Interactive Google Map */}
      <LocationMapSection />

      {/* 9. Frequently Asked Questions */}
      <section className="max-container max-w-4xl" data-aos="fade-up">
        <div className="text-center mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00A8B5]">
            Got Questions?
          </span>
          <h2 className="text-2xl lg:text-[36px] font-semibold text-[#00223D]">
            Frequently Asked Questions
          </h2>
        </div>

        <HomeFaqAccordion faqs={faqs} />
      </section>

      {/* 10. High-Conversion Bottom Call To Action Banner */}
      <BottomCtaBanner />
    </div>
  );
}