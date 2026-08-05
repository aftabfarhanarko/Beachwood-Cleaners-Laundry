"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function ServiceTabs() {
  const [activeTab, setActiveTab] = useState<"wash" | "dry" | "shirts" | "commercial">("wash");

  const tabContent = {
    wash: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <span className="bg-[#059669]/20 text-[#059669] border border-[#059669]/30 text-xs font-bold px-3 py-1 rounded-full">
            Everyday Laundry Care
          </span>
          <h3 className="text-2xl font-bold text-white">Wash & Fold Laundry ($2.45 / lb)</h3>
          <p className="text-sm text-slate-300 leading-[1.6]">
            Everyday clothes, towels, bedding. Separated by color, washed with hypoallergenic detergent, and neatly folded.
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#059669]" /> Standard Rate: $2.45 / lb (15 lb min)
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#059669]" /> Includes socks, t-shirts, towels, sheets, underwear
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#059669]" /> 24 to 48 Hour Doorstep Return
            </li>
          </ul>
        </div>
        <div className="bg-[#0F172A] p-6 rounded-2xl border border-blue-900 space-y-4 text-center">
          <div className="text-4xl font-black text-[#059669]">$2.45 <span className="text-base text-slate-400 font-normal">/ lb</span></div>
          <p className="text-xs text-slate-400">Free Pickup & Delivery on all orders over $35</p>
          <Link
            href="/contact"
            className="block w-full py-3 bg-[#2563EB] hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-all"
          >
            Schedule Wash & Fold
          </Link>
        </div>
      </div>
    ),
    dry: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <span className="bg-[#2563EB]/20 text-[#2563EB] border border-[#2563EB]/30 text-xs font-bold px-3 py-1 rounded-full">
            PERC-Free Organic Solvent
          </span>
          <h3 className="text-2xl font-bold text-white">Executive Suit & Dress Dry Cleaning</h3>
          <p className="text-sm text-slate-300 leading-[1.6]">
            Expert hand-finishing for formalwear, silk dresses, wool suits, and outerwear. 100% PERC-free process.
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#059669]" /> Two-Piece Suits: $22.00 / suit
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#059669]" /> Dresses: $17.00 / dress | Jackets: $14.95
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#059669]" /> Pants & Trousers: $8.95 / pair
            </li>
          </ul>
        </div>
        <div className="bg-[#0F172A] p-6 rounded-2xl border border-blue-900 space-y-4 text-center">
          <div className="text-3xl font-bold text-white">Suits $22.00 | Dresses $17.00</div>
          <p className="text-xs text-slate-400">Stain pre-treatment & structural steam press included</p>
          <Link
            href="/services"
            className="block w-full py-3 bg-[#2563EB] hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-all"
          >
            View All Pricing Details
          </Link>
        </div>
      </div>
    ),
    shirts: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <span className="bg-[#D97706]/20 text-[#D97706] border border-[#D97706]/30 text-xs font-bold px-3 py-1 rounded-full">
            Executive Hand-Pressed
          </span>
          <h3 className="text-2xl font-bold text-white">Laundered Shirts ($6.95 / shirt)</h3>
          <p className="text-sm text-slate-300 leading-[1.6]">
            Custom dress shirts washed and hand-pressed with collar & cuff detail. Returned on hangers.
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#059669]" /> Flat Rate: $6.95 / shirt
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#059669]" /> Choice of light, medium, or heavy starch
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#059669]" /> Free button replacement audit
            </li>
          </ul>
        </div>
        <div className="bg-[#0F172A] p-6 rounded-2xl border border-blue-900 space-y-4 text-center">
          <div className="text-4xl font-black text-[#D97706]">$6.95 <span className="text-base text-slate-400 font-normal">/ shirt</span></div>
          <p className="text-xs text-slate-400">Returned crisp on heavy dress hangers</p>
          <Link
            href="/contact"
            className="block w-full py-3 bg-[#2563EB] hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-all"
          >
            Book Shirt Pressing
          </Link>
        </div>
      </div>
    ),
    commercial: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <span className="bg-[#059669]/20 text-[#059669] border border-[#059669]/30 text-xs font-bold px-3 py-1 rounded-full">
            B2B & Airbnb Hosts
          </span>
          <h3 className="text-2xl font-bold text-white">Commercial & Airbnb Laundry</h3>
          <p className="text-sm text-slate-300 leading-[1.6]">
            Custom high-volume laundry plans for Airbnb hosts, boutique hotels, spas, and fitness centers.
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#059669]" /> Bulk volume pricing discounts
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#059669]" /> Scheduled daily or weekly pickup slots
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#059669]" /> Itemized monthly corporate invoicing
            </li>
          </ul>
        </div>
        <div className="bg-[#0F172A] p-6 rounded-2xl border border-blue-900 space-y-4 text-center">
          <div className="text-2xl font-bold text-[#059669]">Custom Commercial Rates</div>
          <p className="text-xs text-slate-400">Dedicated driver & scheduled recurring deliveries</p>
          <a
            href="tel:+13238287503"
            className="block w-full py-3 bg-[#2563EB] hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-all"
          >
            Call Commercial Team
          </a>
        </div>
      </div>
    ),
  };

  const tabs: { key: "wash" | "dry" | "shirts" | "commercial"; label: string }[] = [
    { key: "wash", label: "Wash & Fold ($2.45/lb)" },
    { key: "dry", label: "Executive Dry Cleaning" },
    { key: "shirts", label: "Laundered Shirts ($6.95)" },
    { key: "commercial", label: "Commercial & Airbnb" },
  ];

  return (
    <div className="space-y-10">
      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto bg-[#0F172A]/80 p-1.5 rounded-2xl border border-blue-900">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className="relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer text-slate-300 hover:text-white"
          >
            {activeTab === tab.key && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 bg-[#2563EB] rounded-xl -z-10"
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
              />
            )}
            <span className={activeTab === tab.key ? "text-white font-bold" : ""}>
              {tab.label}
            </span>
          </button>
        ))}
      </div>

      {/* Tab Details Display with Framer Motion AnimatePresence */}
      <div className="bg-[#0F172A]/60 rounded-3xl p-8 border border-blue-900 max-w-4xl mx-auto overflow-hidden min-h-[350px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="w-full"
          >
            {tabContent[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
