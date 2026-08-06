"use client";

import React, { useState } from "react";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WorkingProcessSection } from "@/components/home/WorkingProcessSection";
import { NewsletterBannerSection } from "@/components/home/NewsletterBannerSection";
import Link from "next/link";
import { Sparkles, ShieldCheck, Truck, RefreshCw, Check, ArrowRight, Search } from "lucide-react";

{/* Custom Vector Sticker Icons */}
function WashFoldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10a2 2 0 002 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" />
      <path d="M12 2v6" />
    </svg>
  );
}

function DryCleaningIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 00-3 3v1.17a3 3 0 001 2.23l2 1.6 2-1.6a3 3 0 001-2.23V5a3 3 0 00-3-3z" />
      <path d="M4 11l8-4 8 4" />
      <path d="M6 10v10a2 2 0 002 2h8a2 2 0 002-2V10" />
      <line x1="12" y1="13" x2="12" y2="18" />
    </svg>
  );
}

function IronClothesIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 17h18a2 2 0 002-2v-4a7 7 0 00-7-7H7a5 5 0 00-5 5v8z" />
      <path d="M6 8h10" />
    </svg>
  );
}

function StainRemovalIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10a2 2 0 002 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" />
      <circle cx="12" cy="14" r="2.5" fill="#F97316" stroke="none" />
    </svg>
  );
}

function SewingMachineIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="17" width="18" height="3" rx="1" />
      <path d="M19 17V8a2 2 0 00-2-2H9a2 2 0 00-2 2v4" />
      <line x1="9" y1="12" x2="9" y2="17" />
      <circle cx="17" cy="9" r="1.5" />
    </svg>
  );
}

function BeddingIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="18" height="5" rx="2" />
      <rect x="3" y="13" width="18" height="5" rx="2" />
      <line x1="5" y1="20" x2="19" y2="20" />
    </svg>
  );
}

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Wash & Fold", "Dry Cleaning", "Ironing", "Stain & Sewing", "Bedding"];

  const servicesData = [
    {
      id: 1,
      category: "Wash & Fold",
      title: "Wash and Fold",
      priceTag: "$2.45 / lb",
      turnaround: "24h Express",
      linkText: "View Details",
      image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=600&auto=format&fit=crop&q=80",
      Icon: WashFoldIcon,
      desc: "Everyday washable items washed in eco-friendly non-toxic soap, dried at optimal temperature, and crisply folded.",
      features: [
        "Digital weight scale verification",
        "Hypoallergenic organic detergent",
        "Free door pickup & 24h delivery",
      ],
    },
    {
      id: 2,
      category: "Dry Cleaning",
      title: "Dry Cleaning",
      priceTag: "Starting $6.95",
      turnaround: "24-48h Care",
      linkText: "View Details",
      image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=600&auto=format&fit=crop&q=80",
      Icon: DryCleaningIcon,
      desc: "Specialized eco dry cleaning for suits, dresses, coats, and silk garments preserving color intensity and fabric integrity.",
      features: [
        "Non-solvent organic solvent",
        "Hand stain pretreatment",
        "Custom hanger & garment bag",
      ],
    },
    {
      id: 3,
      category: "Ironing",
      title: "Iron Clothes",
      priceTag: "$6.95 / shirt",
      turnaround: "Same Day Avail.",
      linkText: "View Details",
      image: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=600&auto=format&fit=crop&q=80",
      Icon: IronClothesIcon,
      desc: "Hand steam iron pressing for dress shirts, pants, and blouses ensuring sharp collar lines and zero wrinkles.",
      features: [
        "Precision collar & cuff press",
        "Steam iron temperature control",
        "Ready-to-wear hanger packaging",
      ],
    },
    {
      id: 4,
      category: "Stain & Sewing",
      title: "Stain Removal",
      priceTag: "Pre-wash Included",
      turnaround: "24h Expert",
      linkText: "View Details",
      image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&auto=format&fit=crop&q=80",
      Icon: StainRemovalIcon,
      desc: "Master pre-treatment using enzyme spot formulas to lift coffee, wine, ink, and grease stains without fading fabric dyes.",
      features: [
        "Fabric-safe spot treatment",
        "Enzyme spot lifting formula",
        "Color fastness testing",
      ],
    },
    {
      id: 5,
      category: "Stain & Sewing",
      title: "Clothe Sewing",
      priceTag: "Custom Quote",
      turnaround: "2-3 Days",
      linkText: "View Details",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&auto=format&fit=crop&q=80",
      Icon: SewingMachineIcon,
      desc: "Expert tailoring, seam repair, zipper replacement, and dress/pant hem adjustments by master seamstresses.",
      features: [
        "Pant & dress hem tailoring",
        "Zipper & button repair",
        "Seam reinforcement",
      ],
    },
    {
      id: 6,
      category: "Bedding",
      title: "Bedding Cleaning",
      priceTag: "Starting $14.95",
      turnaround: "24-48h Care",
      linkText: "View Details",
      image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&auto=format&fit=crop&q=80",
      Icon: BeddingIcon,
      desc: "Deep cleansing and sanitization for heavy duvets, comforters, pillows, and bed sheet sets for allergen-free sleep.",
      features: [
        "Dust-mite & allergen removal",
        "High-capacity drum wash",
        "Plush fluff & dry finish",
      ],
    },
  ];

  // Filter Logic
  const filteredServices = servicesData.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category.toLowerCase().includes(activeCategory.toLowerCase());
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-0 overflow-hidden bg-white">
      
      {/* Hero Page Banner with Compact Title Font Size */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#EBF7FD] via-[#FAFDFE] to-[#FFF4E8] text-center border-b border-sky-100">
        <div className="max-container space-y-3">
          <span className="inline-block bg-[#EAF7FD] border border-sky-200/60 text-[#00A8E8] px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
            Beachwood Fabric Care
          </span>
          <h1 className="text-2xl sm:text-2xl font-extrabold text-[#363C44] tracking-tight">
            Our Professional <span className="text-[#F97316]">Services</span>
          </h1>
          <p className="text-[#5B636B] text-xs sm:text-sm font-medium max-w-xl mx-auto leading-relaxed">
            We are here to make our customers smile with our eco-friendly laundry & dry cleaning services.
          </p>
        </div>
      </section>

      {/* Interactive Category Filter & Search Bar */}
      <section className="py-12 bg-[#FAFDFE] border-b border-sky-100" id="services">
        <div className="max-container space-y-8">
          
          {/* Controls Bar: Category Filter Pills + Search Input */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full font-extrabold text-xs transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#F97316] text-white shadow-md shadow-orange-200 scale-105"
                        : "bg-[#EAF7FD] text-[#00A8E8] hover:bg-[#00A8E8] hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64 shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-white border border-sky-200 text-slate-800 placeholder-slate-400 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#00A8E8] shadow-xs"
              />
            </div>

          </div>

          {/* Filtered Services Grid matching reference screenshot layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-2">
            {filteredServices.map((service) => {
              const IconComponent = service.Icon;
              return (
                <div
                  key={service.id}
                  className="group relative rounded-3xl overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-500 bg-white border border-sky-100/90 flex flex-col justify-between"
                >
                  <div>
                    {/* Image Container with Turnaround & Price Tag Badges */}
                    <div className="relative h-[240px] sm:h-[260px] w-full overflow-hidden bg-slate-100">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                        <span className="bg-[#00A8E8] text-white px-3 py-1 rounded-full text-[11px] font-extrabold shadow-sm">
                          {service.turnaround}
                        </span>
                        <span className="bg-[#F97316] text-white px-3 py-1 rounded-full text-[11px] font-extrabold shadow-sm">
                          {service.priceTag}
                        </span>
                      </div>

                      {/* Floating Light Blue Card Tag Overlay matching reference design */}
                      <div className="absolute bottom-3 left-3 right-3 bg-[#DDF2FF] border border-sky-200/80 rounded-2xl p-3 shadow-md flex items-center gap-3 backdrop-blur-xs group-hover:scale-102 transition-transform">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-xs shrink-0 border border-sky-100">
                          <IconComponent />
                        </div>

                        <div className="space-y-0.5">
                          <h3 className="font-bold text-[#2C3238] text-base leading-tight">
                            {service.title}
                          </h3>
                          <a
                            href="/contact"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-[#F97316] hover:underline"
                          >
                            <span>{service.linkText}</span>
                            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Detailed Description & Features List */}
                    <div className="p-6 space-y-4">
                      <p className="text-xs sm:text-sm text-[#5B636B] font-medium leading-relaxed">
                        {service.desc}
                      </p>

                      <ul className="space-y-2 pt-2 border-t border-slate-100">
                        {service.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#363C44]">
                            <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="p-6 pt-0">
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#EAF7FD] text-[#00A8E8] group-hover:bg-[#00A8E8] group-hover:text-white font-extrabold text-xs sm:text-sm transition-all shadow-xs"
                    >
                      <span>Book Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Working Process Section */}
      <WorkingProcessSection />

      {/* Newsletter Banner */}
      <NewsletterBannerSection />

    </div>
  );
}
