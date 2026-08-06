import React from "react";
import { ContactFormSection } from "@/components/ContactFormSection";
import { LocationMapSection } from "@/components/LocationMapSection";
import { NewsletterBannerSection } from "@/components/NewsletterBannerSection";

export const metadata = {
  title: "Contact Us | Beachwood Cleaners & Laundry",
  description: "Get in touch with Beachwood Cleaners & Laundry. Schedule doorstep pickup or ask questions about our LA dry cleaning services.",
};

export default function ContactPage() {
  return (
    <div className="space-y-0 overflow-hidden bg-white">
      
      {/* Hero Page Banner */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#EBF7FD] via-[#FAFDFE] to-[#FFF4E8] text-center border-b border-sky-100">
        <div className="max-container space-y-4">
          <span className="inline-block bg-[#EAF7FD] border border-sky-200/60 text-[#00A8E8] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
            Beachwood Contact Center
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#363C44] tracking-tight">
            Lets <span className="text-[#F97316]">Talk</span> With Us
          </h1>
          <p className="text-[#5B636B] text-base sm:text-lg font-medium max-w-2xl mx-auto">
            Reach out to schedule your pickup, get pricing quotes, or ask any questions about our fabric care services.
          </p>
        </div>
      </section>

      {/* Main Split Contact Form Card */}
      <ContactFormSection />

      {/* Storefront Location & Embedded Google Map */}
      <LocationMapSection />

      {/* Newsletter Banner */}
      <NewsletterBannerSection />

    </div>
  );
}
