import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { PricingCalculator } from "@/components/PricingCalculator";

export const metadata = {
  title: "Transparent Rates & Pricing | Beachwood Cleaners LA",
  description: "View transparent dry cleaning and laundry prices for Beachwood Cleaners & Laundry. Wash & Fold $2.45/lb, Shirts $6.95, Suits $22.00, Dresses $17.00.",
};

export default function PricingPage() {
  const priceItems = [
    { item: "Regular Wash & Fold", price: "$2.45 / lb", desc: "Everyday laundry, towels, bedsheets, socks. Separated by color." },
    { item: "Laundered & Pressed Shirts", price: "$6.95 / shirt", desc: "Washed, professionally hand-pressed, returned on hangers." },
    { item: "Pants & Trousers", price: "$8.95 / pair", desc: "Dry cleaned or laundered, custom steam pressed with crisp crease." },
    { item: "Jackets & Blazers", price: "$14.95 / jacket", desc: "Expert dry cleaning, stain pretreating, structural pressing." },
    { item: "Dresses (Standard)", price: "$17.00 / dress", desc: "Eco-friendly dry cleaning for casual, business, and formal dresses." },
    { item: "Two-Piece Suits", price: "$22.00 / suit", desc: "Full suit dry cleaning, gentle pressing, custom protective cover." },
    { item: "Comforter / Bedspread", price: "$35.00 - $45.00", desc: "Deep sanitizing wash or dry clean for Queen & King bedding." },
    { item: "Winter Coats / Overcoats", price: "$24.95 / coat", desc: "Heavy wool, down jacket, or trench coat deep eco cleaning." },
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Header Banner */}
      <section className="bg-[#003B65] text-white py-16">
        <div className="max-container text-center space-y-4 max-w-3xl">
          <span className="bg-[#FFC72C] text-slate-950 text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider">
            100% Upfront Transparency
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            Transparent Price List
          </h1>
          <p className="text-cyan-100 text-base sm:text-lg">
            No hidden service fees, environmental surcharges, or delivery markups. What you see is what you pay.
          </p>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section className="max-container">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
          <h2 className="text-2xl font-bold text-[#00223D]">Estimate Your Pickup Total</h2>
          <p className="text-sm text-slate-600">Use our interactive calculator below to model your expected cost.</p>
        </div>
        <PricingCalculator />
      </section>

      {/* Itemized Price Table */}
      <section className="max-container max-w-4xl">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
          <div className="p-6 sm:p-8 bg-[#00223D] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">Standard Item Rate Card</h2>
              <p className="text-xs text-slate-400">All prices include free doorstep pickup & return delivery on orders over $35</p>
            </div>
            <a
              href="tel:+13238287503"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FFC72C] hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl shrink-0"
            >
              <Phone className="w-3.5 h-3.5" /> Call for Custom Items
            </a>
          </div>

          <div className="divide-y divide-slate-100">
            {priceItems.map((row, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
              >
                <div className="space-y-1 max-w-md">
                  <h3 className="font-bold text-[#00223D] text-base">{row.item}</h3>
                  <p className="text-xs text-slate-500">{row.desc}</p>
                </div>
                <div className="text-lg font-black text-[#00A8B5] bg-cyan-50 px-4 py-1.5 rounded-xl shrink-0">
                  {row.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-container max-w-3xl">
        <div className="bg-gradient-to-r from-[#003B65] to-[#00A8B5] text-white rounded-3xl p-8 text-center space-y-6 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to Schedule Your Pickup?</h3>
          <p className="text-sm text-cyan-100 max-w-md mx-auto">
            Book online in under 60 seconds. Our professional drivers will collect your garments right from your front door.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-[#FFC72C] hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl shadow text-sm transition-all"
            >
              Book Pickup Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
