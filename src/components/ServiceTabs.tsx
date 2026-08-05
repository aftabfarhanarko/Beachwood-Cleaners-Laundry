"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export function ServiceTabs() {
  const [activeTab, setActiveTab] = useState<"wash" | "dry" | "shirts" | "commercial">("wash");

  return (
    <div className="space-y-10">
      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto bg-[#00223D]/80 p-1.5 rounded-2xl border border-cyan-900">
        <button
          onClick={() => setActiveTab("wash")}
          className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
            activeTab === "wash"
              ? "bg-[#00A8B5] text-white shadow"
              : "text-slate-300 hover:text-white hover:bg-cyan-950/50"
          }`}
        >
          Wash & Fold ($2.45/lb)
        </button>
        <button
          onClick={() => setActiveTab("dry")}
          className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
            activeTab === "dry"
              ? "bg-[#00A8B5] text-white shadow"
              : "text-slate-300 hover:text-white hover:bg-cyan-950/50"
          }`}
        >
          Executive Dry Cleaning
        </button>
        <button
          onClick={() => setActiveTab("shirts")}
          className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
            activeTab === "shirts"
              ? "bg-[#00A8B5] text-white shadow"
              : "text-slate-300 hover:text-white hover:bg-cyan-950/50"
          }`}
        >
          Shirt Service ($6.95)
        </button>
        <button
          onClick={() => setActiveTab("commercial")}
          className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
            activeTab === "commercial"
              ? "bg-[#00A8B5] text-white shadow"
              : "text-slate-300 hover:text-white hover:bg-cyan-950/50"
          }`}
        >
          Commercial & Airbnb
        </button>
      </div>

      {/* Tab Details Display */}
      <div className="bg-[#00223D]/60 rounded-3xl p-8 border border-cyan-950 max-w-4xl mx-auto">
        {activeTab === "wash" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="bg-[#00A8B5]/20 text-[#00A8B5] border border-[#00A8B5]/30 text-xs font-bold px-3 py-1 rounded-full">
                Most Popular Choice
              </span>
              <h3 className="text-2xl font-bold text-white">Everyday Wash & Fold Laundry</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We sort your clothes by lights and darks, wash in premium hypoallergenic detergent, dry on low heat, and neatly fold your garments ready for the drawer.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A8B5]" /> Standard Rate: $2.45 / lb (15 lb min)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A8B5]" /> Includes socks, t-shirts, towels, sheets, underwear
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A8B5]" /> 24 to 48 Hour Doorstep Return
                </li>
              </ul>
            </div>
            <div className="bg-[#00172B] p-6 rounded-2xl border border-cyan-950 space-y-4 text-center">
              <div className="text-4xl font-black text-[#FFC72C]">$2.45 <span className="text-base text-slate-400 font-normal">/ lb</span></div>
              <p className="text-xs text-slate-400">Free Pickup & Delivery on all orders over $35</p>
              <Link
                href="/contact"
                className="block w-full py-3 bg-[#00A8B5] hover:bg-[#0091A4] text-white font-bold rounded-xl text-sm transition-all"
              >
                Schedule Wash & Fold Pickup
              </Link>
            </div>
          </div>
        )}

        {activeTab === "dry" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="bg-[#00A8B5]/20 text-[#00A8B5] border border-[#00A8B5]/30 text-xs font-bold px-3 py-1 rounded-full">
                Eco-Friendly Organic Solvents
              </span>
              <h3 className="text-2xl font-bold text-white">Executive Suit & Delicate Dry Cleaning</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Expert hand-finishing for formalwear, silk dresses, wool suits, and outerwear. 100% PERC-free process protects fabric fibers and leaves zero odor.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A8B5]" /> 2-Piece Suits: $22.00 | Standard Dresses: $17.00
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A8B5]" /> Blazers/Jackets: $14.95 | Pants/Trousers: $8.95
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A8B5]" /> Hand-pressed with custom protective covers
                </li>
              </ul>
            </div>
            <div className="bg-[#00172B] p-6 rounded-2xl border border-cyan-950 space-y-4 text-center">
              <div className="text-3xl font-black text-[#FFC72C]">Suits from $22.00</div>
              <p className="text-xs text-slate-400">Stain pre-treatment & structural steam press included</p>
              <Link
                href="/services"
                className="block w-full py-3 bg-[#00A8B5] hover:bg-[#0091A4] text-white font-bold rounded-xl text-sm transition-all"
              >
                View All Dry Cleaning Items
              </Link>
            </div>
          </div>
        )}

        {activeTab === "shirts" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="bg-[#FFC72C]/20 text-[#FFC72C] border border-[#FFC72C]/30 text-xs font-bold px-3 py-1 rounded-full">
                Executive Crisp Finish
              </span>
              <h3 className="text-2xl font-bold text-white">Professional Laundered & Pressed Shirts</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Custom button-down dress shirts washed, conditioned, and hand-pressed with crisp collar and cuff detailing. Returned on heavy hangers or folded.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A8B5]" /> Flat Rate: $6.95 / shirt
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A8B5]" /> Choice of light, medium, or heavy starch
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A8B5]" /> Free replacement of loose buttons
                </li>
              </ul>
            </div>
            <div className="bg-[#00172B] p-6 rounded-2xl border border-cyan-950 space-y-4 text-center">
              <div className="text-4xl font-black text-[#FFC72C]">$6.95 <span className="text-base text-slate-400 font-normal">/ shirt</span></div>
              <p className="text-xs text-slate-400">Returned crisp on hangers in clear protective plastic</p>
              <Link
                href="/contact"
                className="block w-full py-3 bg-[#00A8B5] hover:bg-[#0091A4] text-white font-bold rounded-xl text-sm transition-all"
              >
                Book Shirt Laundry
              </Link>
            </div>
          </div>
        )}

        {activeTab === "commercial" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="bg-[#00A8B5]/20 text-[#00A8B5] border border-[#00A8B5]/30 text-xs font-bold px-3 py-1 rounded-full">
                B2B & Host Solutions
              </span>
              <h3 className="text-2xl font-bold text-white">Commercial & Airbnb Linen Care</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Custom high-volume laundry plans for Airbnb hosts, boutique hotels, spa wellness centers, and fitness clubs across Los Angeles. Dedicated account manager.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A8B5]" /> Bulk volume pricing discounts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A8B5]" /> Scheduled daily or weekly pickup slots
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A8B5]" /> Itemized monthly corporate billing
                </li>
              </ul>
            </div>
            <div className="bg-[#00172B] p-6 rounded-2xl border border-cyan-950 space-y-4 text-center">
              <div className="text-2xl font-black text-[#FFC72C]">Custom Commercial Rates</div>
              <p className="text-xs text-slate-400">Dedicated driver & scheduled recurring deliveries</p>
              <a
                href="tel:+13238287503"
                className="block w-full py-3 bg-[#FFC72C] hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl text-sm transition-all"
              >
                Call Commercial Team
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
