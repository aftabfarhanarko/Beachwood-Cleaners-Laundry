import React from "react";
import { LocationMapSection } from "@/components/LocationMapSection";
import { NewsletterBannerSection } from "@/components/NewsletterBannerSection";
import { HomeFaqAccordion } from "@/components/HomeFaqAccordion";

export const metadata = {
  title: "Find Location & Delivery Areas | Beachwood Cleaners & Laundry",
  description: "Visit our storefront at 2699 Beachwood Dr, Los Angeles, CA 90068 or schedule free daily doorstep pickup across local LA neighborhoods.",
};

export default function LocationPage() {
  return (
    <div className="space-y-0 overflow-hidden bg-white">
      
      {/* Single Clean Hero Page Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#EBF7FD] via-[#FAFDFE] to-[#FFF4E8] text-center border-b border-sky-100">
        <div className="max-container space-y-3">
          <span className="inline-block bg-[#EAF7FD] border border-sky-200/60 text-[#00A8E8] px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
            Beachwood Location & Delivery
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#363C44] tracking-tight">
            Find Us in <span className="text-[#F97316]">Los Angeles</span>
          </h1>
          <p className="text-[#5B636B] text-xs sm:text-sm font-medium max-w-xl mx-auto leading-relaxed">
            Visit our Beachwood Canyon laundromat or schedule free doorstep pickup & delivery right to your door.
          </p>
        </div>
      </section>

      {/* Main Location Map Section (showHeading set to false to prevent double title) */}
      <LocationMapSection showHeading={false} />

      {/* FAQ Section */}
      <HomeFaqAccordion />

      {/* Newsletter Banner */}
      <NewsletterBannerSection />

    </div>
  );
}
