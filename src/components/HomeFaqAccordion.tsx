"use client";

import React, { useState } from "react";
import { Plus, X, PhoneCall } from "lucide-react";

export function HomeFaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First question open by default

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
    {
      q: "What if I am not home during driver delivery?",
      a: "No problem! You can leave special delivery instructions (e.g. drop at back porch, concierge desk, or door ring). Our driver will leave your protected garment bag safely and send a photo receipt.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section className="py-10 sm:py-14 bg-[#FAFDFE]" id="faq">
      <div className="max-container">
        
        {/* 2-Column Split Grid matching website light sky color palette */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Heading & Call Card */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Top Cyan Tag & Large Heading */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 bg-[#EAF7FD] border border-sky-200/60 text-[#00A8E8] px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#00A8E8] inline-block animate-pulse" />
                <span>FAQs</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#363C44] leading-tight tracking-tight">
                Frequently Asked <br /> <span className="text-[#F97316]">Questions</span>
              </h2>
            </div>

            {/* Floating Booking / Support Card matching website theme */}
            <div className="bg-white rounded-3xl p-8 border border-sky-100 shadow-xl shadow-sky-100/50 space-y-6 max-w-md">
              {/* Customer Care Avatar */}
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#00A8E8] shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
                  alt="Beachwood Support Team"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-black text-[#2C3238]">
                  Book a 15 min call
                </h3>
                <p className="text-xs sm:text-sm text-[#5B636B] font-medium leading-relaxed">
                  If you have any questions, just book a 15-minute call with us before subscribing or placing your order.
                </p>
              </div>

              <a
                href="tel:+13238287503"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white font-extrabold text-sm shadow-md shadow-orange-200 transition-all hover:scale-102 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book a Free Call</span>
              </a>
            </div>

          </div>

          {/* Right Column: Accordion Questions List */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openIdx === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white border-2 border-[#00A8E8] shadow-md p-6 space-y-3"
                      : "bg-[#EAF7FD]/60 hover:bg-[#EAF7FD] border border-sky-100/80 p-5 cursor-pointer"
                  }`}
                  onClick={() => !isOpen && toggleFaq(index)}
                >
                  {/* Header Row */}
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-extrabold text-[#2C3238] text-base sm:text-lg leading-snug">
                      {item.q}
                    </h3>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFaq(index);
                      }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors cursor-pointer ${
                        isOpen ? "bg-[#00A8E8] text-white" : "bg-[#EAF7FD] text-[#00A8E8]"
                      }`}
                      aria-label={isOpen ? "Close Question" : "Open Question"}
                    >
                      {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Expanded Body */}
                  {isOpen && (
                    <div className="text-[#5B636B] text-xs sm:text-sm font-medium leading-relaxed pt-1 border-t border-sky-100">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
