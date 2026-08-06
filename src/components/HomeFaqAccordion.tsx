"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function HomeFaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First item open by default

  const faqs = [
    {
      q: "How does doorstep pickup & delivery work?",
      a: "Simply schedule your pickup online or by phone (+1 323 828-7503). Place your laundry in any bag at your front door, and our friendly driver collects it. Within 24 hours, your fresh, neatly folded clothes are delivered straight back to your doorstep!",
    },
    {
      q: "How long does standard laundry turnaround take?",
      a: "Our standard turnaround time is 24 hours for regular wash-and-fold laundry and standard dry cleaning. We also offer express same-day rush service upon request.",
    },
    {
      q: "What eco-friendly detergents do you use?",
      a: "We exclusively use non-toxic, hypoallergenic, biodegradable detergents that are gentle on sensitive skin and safe for all garment fabrics. You can also specify fragrance-free or custom detergent options.",
    },
    {
      q: "How is regular wash-and-fold laundry weighed and priced?",
      a: "Wash and fold laundry is priced transparently at $2.45 per pound. We weigh your garments on digital scales upon arrival at our facility and send you an itemized digital receipt prior to washing.",
    },
    {
      q: "Do you specialize in delicate fabric care & stain removal?",
      a: "Yes! Our master cleaners pre-treat stains with specialized fabric-safe enzyme treatments for wine, grease, ink, and oil. Delicate items such as silk, lace, and cashmere are washed in protective mesh bags.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FAFDFE]" id="faq">
      <div className="max-container space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-block bg-[#EAF7FD] border border-sky-200/60 text-[#00A8E8] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#363C44] tracking-tight">
            Frequently Asked <span className="text-[#F97316]">Questions</span>
          </h2>
          <p className="text-[#5B636B] text-sm sm:text-base font-medium">
            Everything you need to know about Beachwood Cleaners & Laundry services.
          </p>
        </div>

        {/* FAQ Accordion Grid */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-2 border-[#00A8E8] shadow-lg"
                    : "bg-white border border-sky-100 hover:border-sky-200 shadow-xs"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? "text-[#F97316]" : "text-[#00A8E8]"}`} />
                    <span className="font-extrabold text-[#2C3238] text-base sm:text-lg">
                      {item.q}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "bg-[#00A8E8] text-white rotate-180" : "bg-[#EAF7FD] text-[#00A8E8]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-[#5B636B] text-sm leading-relaxed font-medium border-t border-slate-100 animate-fadeIn">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
