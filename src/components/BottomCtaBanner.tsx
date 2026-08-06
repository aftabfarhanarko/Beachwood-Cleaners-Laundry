"use client";

import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

export function BottomCtaBanner() {
  return (
    <section className="max-container" data-aos="fade-up">
      <div className="bg-gradient-to-r from-[#003B65] via-[#00A8B5] to-[#00223D] rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 shadow-2xl relative overflow-hidden border border-white/10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight max-w-2xl mx-auto leading-tight">
          Ready For Fresh Clothes Without The Effort?
        </h2>
        <p className="text-cyan-100 text-base sm:text-lg max-w-xl mx-auto leading-[1.6]">
          Book your pickup online in under 60 seconds or call our LA team directly at +1 (323) 828-7503.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-[#FFC72C] hover:bg-amber-400 text-slate-950 font-extrabold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-150 text-base"
          >
            Schedule Pickup Now
          </Link>
          <a
            href="tel:+13238287503"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-2xl transition-all text-base flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#FFC72C]" /> Call +1 (323) 828-7503
          </a>
        </div>
      </div>
    </section>
  );
}
