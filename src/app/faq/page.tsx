"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<"general" | "logistics" | "care" | "billing">("general");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    { key: "general", label: "General Inquiries" },
    { key: "logistics", label: "Pickup & Delivery" },
    { key: "care", label: "Stain Removal & Delicate Care" },
    { key: "billing", label: "Payment & Pricing" },
  ];

  const faqData = {
    general: [
      {
        q: "Where is Beachwood Cleaners & Laundry located?",
        a: "We are physically located at 2699 Beachwood Dr, Los Angeles, CA 90068. Customers can visit our counter for walk-in drop-offs or schedule doorstep pickup online.",
      },
      {
        q: "What makes your cleaning eco-friendly?",
        a: "We never use Perchloroethylene (PERC)—a traditional, toxic dry cleaning solvent. Instead, we use 100% biodegradable organic solvents and non-allergenic detergents that protect fabric fibers and your health.",
      },
      {
        q: "Do you have a physical counter for drop-offs?",
        a: "Yes! Our Beachwood Canyon location is open Monday–Friday 8am-6pm and Saturday 9am-5pm.",
      },
    ],
    logistics: [
      {
        q: "What is your pickup minimum?",
        a: "Our free doorstep pickup and delivery minimum is 15 lbs for Wash & Fold ($36.75) or $35 for dry cleaning services.",
      },
      {
        q: "What neighborhoods in Los Angeles do you cover?",
        a: "We cover Beachwood Canyon, Hollywood, Hollywood Hills, Los Feliz, Silver Lake, Hancock Park, Larchmont Village, and surrounding LA areas within 10 miles of 2699 Beachwood Dr.",
      },
      {
        q: "Do I need to be home when the driver arrives?",
        a: "No! You can leave your laundry bag with your doorman, on your front porch, or in a designated safe place specified in your pickup instructions.",
      },
    ],
    care: [
      {
        q: "How do you handle stain removal?",
        a: "Our master garment care technicians inspect every item and apply specialized pre-treatment solutions for oil, wine, ink, and protein stains before washing.",
      },
      {
        q: "Can I request hypoallergenic detergents?",
        a: "Absolutely. We offer 100% fragrance-free, dye-free, hypoallergenic detergent options upon request at no extra charge.",
      },
      {
        q: "How are suits and delicate dresses packaged?",
        a: "Suits, blazers, and dresses are hand-pressed and returned on sturdy hangers wrapped in custom protective covers.",
      },
    ],
    billing: [
      {
        q: "How does payment work for Wash & Fold per-pound pricing?",
        a: "We weigh your laundry at our facility using certified scales. You will receive an itemized receipt prior to charging your card on file.",
      },
      {
        q: "Are there any hidden delivery or fuel fees?",
        a: "No! We believe in 100% upfront pricing transparency. Delivery is completely free on all orders meeting our minimum.",
      },
      {
        q: "Do you offer corporate or B2B invoicing?",
        a: "Yes, we offer itemized monthly invoicing for commercial clients, Airbnb hosts, and corporate offices.",
      },
    ],
  };

  const currentFaqs = faqData[activeCategory];

  return (
    <div className="space-y-16 py-12">
      {/* Header Banner */}
      <section className="bg-[#003B65] text-white py-16">
        <div className="max-container text-center space-y-4 max-w-3xl">
          <span className="bg-[#00A8B5] text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            Help & Knowledgebase
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-cyan-100 text-base sm:text-lg">
            Find answers regarding our eco solvents, pickup logistics, per-pound rates, and garment care.
          </p>
        </div>
      </section>

      {/* Category Tabs & Accordion */}
      <section className="max-container max-w-4xl space-y-10">
        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-2 bg-slate-100 p-2 rounded-2xl border border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setActiveCategory(cat.key as any);
                setOpenIndex(0);
              }}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? "bg-[#00A8B5] text-white shadow"
                  : "text-slate-700 hover:bg-slate-200/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {currentFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left font-bold text-[#00223D] flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <span className="text-base sm:text-lg">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                    openIndex === idx ? "rotate-180 text-[#00A8B5]" : ""
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="max-container max-w-3xl">
        <div className="bg-[#00223D] text-white rounded-3xl p-8 text-center space-y-4">
          <h3 className="text-2xl font-bold">Have a specific question not listed here?</h3>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Our customer care team is available by phone or email Monday through Saturday.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <a
              href="tel:+13238287503"
              className="px-6 py-3 bg-[#00A8B5] hover:bg-[#0091A4] font-bold rounded-xl text-sm transition-all"
            >
              Call +1 (323) 828-7503
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#00172B] hover:bg-slate-800 font-bold rounded-xl text-sm transition-all border border-cyan-950"
            >
              Send Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
