"use client";

import React from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight } from "lucide-react";

{/* Custom Vector Sticker Icons for Premium Cards */}
function RegularLaundryIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="4" />
      <circle cx="12" cy="13" r="5" stroke="#00A8E8" strokeWidth="2" />
      <circle cx="9" cy="6" r="1" fill="#F97316" stroke="none" />
      <circle cx="12" cy="6" r="1" fill="#00A8E8" stroke="none" />
      <circle cx="15" cy="6" r="1" fill="#00A8E8" stroke="none" />
    </svg>
  );
}

function ShirtIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#00A8E8]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10a2 2 0 002 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" />
      <path d="M12 2v6" stroke="#F97316" />
    </svg>
  );
}

function PantsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#00A8E8]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2h12v20h-4v-9h-4v9H6Z" />
      <path d="M6 6h12" stroke="#F97316" />
    </svg>
  );
}

function JacketIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#00A8E8]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 2a4 4 0 00-8 0L3 5v15a2 2 0 002 2h14a2 2 0 002-2V5z" />
      <path d="M12 2v20" stroke="#F97316" />
    </svg>
  );
}

function SuitIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 00-3 3v1.17a3 3 0 001 2.23l2 1.6 2-1.6a3 3 0 001-2.23V5a3 3 0 00-3-3z" />
      <path d="M4 11l8-4 8 4" stroke="#00A8E8" />
      <path d="M6 10v10a2 2 0 002 2h8a2 2 0 002-2V10" stroke="#00A8E8" />
    </svg>
  );
}

function DressIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#00A8E8]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 2h6l2 5-3 3 4 12H6l4-12-3-3z" />
      <line x1="9" y1="10" x2="15" y2="10" stroke="#F97316" />
    </svg>
  );
}

export function PricingSection() {
  const rates = [
    {
      id: 1,
      title: "Regular Laundry",
      price: "$2.45",
      unit: "per pound",
      description: "Socks, towels, sheets, underwear & everyday washable clothes.",
      popular: true,
      badgeText: "Most Popular",
      Icon: RegularLaundryIcon,
      features: [
        "Eco-friendly detergent wash",
        "Neat crisp folding",
        "Free door pickup & delivery",
      ],
    },
    {
      id: 2,
      title: "Shirts",
      price: "$6.95",
      unit: "per shirt",
      description: "Professional wash, crisp collar pressing & hanger packaging.",
      popular: false,
      Icon: ShirtIcon,
      features: [
        "Hand collar & cuff treatment",
        "Steam iron pressing",
        "Hanger packaging",
      ],
    },
    {
      id: 3,
      title: "Pants & Trousers",
      price: "$8.95",
      unit: "per pair",
      description: "Precision crease pressing, stain treatment & gentle steam care.",
      popular: false,
      Icon: PantsIcon,
      features: [
        "Precision leg crease press",
        "Stain pretreatment",
        "Fabric lint removal",
      ],
    },
    {
      id: 4,
      title: "Jackets & Coats",
      price: "$14.95",
      unit: "per jacket",
      description: "Deep eco dry cleaning, fabric restoration & garment protection.",
      popular: false,
      Icon: JacketIcon,
      features: [
        "Delicate dry cleaning",
        "Lining & zipper check",
        "Garment bag included",
      ],
    },
    {
      id: 5,
      title: "Full Suits",
      price: "$22.00",
      unit: "per suit",
      description: "2-piece & 3-piece suit dry cleaning, hand pressing & finishing.",
      popular: true,
      badgeText: "Best Value",
      Icon: SuitIcon,
      features: [
        "Jacket & trousers care",
        "Hand steam finish",
        "Custom suit hanger",
      ],
    },
    {
      id: 6,
      title: "Dresses",
      price: "$17.00",
      unit: "per dress",
      description: "Delicate fabric handling for casual, evening & formal dresses.",
      popular: false,
      Icon: DressIcon,
      features: [
        "Delicate silk & lace care",
        "Hand steam pressing",
        "Stain protection finish",
      ],
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-b from-[#F7FCFF] via-[#FAFDFE] to-white relative overflow-hidden" id="pricing">
      
      {/* Decorative Translucent Glowing Background Circles */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#00A8E8]/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-[#F97316]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-container space-y-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-block bg-[#EAF7FD] border border-sky-200/60 text-[#00A8E8] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
            Beachwood Pricing Table
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#363C44] tracking-tight">
            Laundry & Dry Cleaning <span className="text-[#F97316]">Rates</span>
          </h2>
          <p className="text-[#5B636B] text-sm sm:text-base font-medium">
            Affordable, transparent pricing with no hidden fees for Beachwood Cleaners & Laundry.
          </p>
        </div>

        {/* 6 Unique & Ultra-Premium Price Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {rates.map((item) => {
            const IconComponent = item.Icon;
            return (
              <div
                key={item.id}
                className={`group relative rounded-3xl p-8 transition-all duration-500 flex flex-col justify-between space-y-7 ${
                  item.popular
                    ? "bg-gradient-to-b from-[#00A8E8] to-[#0086BD] text-white shadow-2xl scale-102 border-2 border-sky-300"
                    : "bg-white text-[#2C3238] border border-sky-100/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5"
                }`}
              >
                {/* Popular Pill Badge */}
                {item.popular && (
                  <div className="absolute -top-3.5 right-6 bg-[#F97316] text-white px-4 py-1 rounded-full text-xs font-black shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 fill-white" /> {item.badgeText}
                  </div>
                )}

                <div className="space-y-5">
                  {/* Top Header: Icon Badge & Title */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${
                        item.popular
                          ? "bg-white/20 border border-white/30 backdrop-blur-xs text-white"
                          : "bg-[#EAF7FD] border border-sky-100 text-[#00A8E8]"
                      }`}
                    >
                      <IconComponent />
                    </div>
                    <div>
                      <h3
                        className={`font-black text-xl sm:text-2xl tracking-tight ${
                          item.popular ? "text-white" : "text-[#2C3238]"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <span
                        className={`text-xs font-semibold ${
                          item.popular ? "text-sky-100" : "text-slate-400"
                        }`}
                      >
                        Standard Garment Rate
                      </span>
                    </div>
                  </div>

                  {/* Price Banner Tag */}
                  <div
                    className={`p-4 rounded-2xl flex items-baseline justify-between ${
                      item.popular
                        ? "bg-white/10 border border-white/20"
                        : "bg-[#F4F9FD] border border-sky-100/60"
                    }`}
                  >
                    <span
                      className={`text-3xl sm:text-4xl font-black ${
                        item.popular ? "text-white" : "text-[#00A8E8]"
                      }`}
                    >
                      {item.price}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-bold uppercase ${
                        item.popular ? "text-sky-100" : "text-[#5B636B]"
                      }`}
                    >
                      {item.unit}
                    </span>
                  </div>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed font-medium ${
                      item.popular ? "text-sky-100" : "text-[#5B636B]"
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2.5 pt-2 border-t border-slate-100/20">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                            item.popular
                              ? "bg-white/20 text-white"
                              : "bg-emerald-100 text-emerald-600"
                          }`}
                        >
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className={item.popular ? "text-white" : "text-slate-700"}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-extrabold transition-all group-hover:scale-102 cursor-pointer ${
                      item.popular
                        ? "bg-[#F97316] text-white hover:bg-[#EA580C] shadow-lg shadow-orange-950/20"
                        : "bg-[#00A8E8] text-white hover:bg-[#0094D8] shadow-md shadow-sky-100"
                    }`}
                  >
                    <span>Schedule Pickup</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
