"use client";

import React from "react";

export function HowItWorksSection() {
  return (
    <section className="bg-cyan-50/40 py-16 border-y border-cyan-100/60" data-aos="fade-up">
      <div className="max-container space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00A8B5]">
            Seamless Workflow
          </span>
          <h2 className="text-2xl lg:text-[36px] font-semibold text-[#00223D] tracking-tight">
            4 Simple Steps To Fresh Laundry
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-[1.6]">
            How our white-glove pickup and delivery process works from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-6 relative" data-aos="fade-up" data-aos-delay="0">
            <div className="w-10 h-10 rounded-xl bg-[#003B65] text-white font-bold flex items-center justify-center text-lg mb-4">
              1
            </div>
            <h3 className="font-bold text-[#00223D] text-lg mb-2">Step 1: Schedule Online or Call</h3>
            <p className="text-slate-600 text-sm leading-[1.6]">
              Choose your pickup window online or call +1 (323) 828-7503 in under 60 seconds.
            </p>
          </div>

          <div className="glass-card p-6 relative" data-aos="fade-up" data-aos-delay="100">
            <div className="w-10 h-10 rounded-xl bg-[#00A8B5] text-white font-bold flex items-center justify-center text-lg mb-4">
              2
            </div>
            <h3 className="font-bold text-[#00223D] text-lg mb-2">Step 2: We Collect Your Items</h3>
            <p className="text-slate-600 text-sm leading-[1.6]">
              Our friendly local driver picks up your laundry bag right from your front doorstep.
            </p>
          </div>

          <div className="glass-card p-6 relative" data-aos="fade-up" data-aos-delay="200">
            <div className="w-10 h-10 rounded-xl bg-[#0091A4] text-white font-bold flex items-center justify-center text-lg mb-4">
              3
            </div>
            <h3 className="font-bold text-[#00223D] text-lg mb-2">Step 3: Eco Cleaning & Pressing</h3>
            <p className="text-slate-600 text-sm leading-[1.6]">
              Garments undergo non-toxic solvent processing, stain removal, and precise folding.
            </p>
          </div>

          <div className="glass-card p-6 relative" data-aos="fade-up" data-aos-delay="300">
            <div className="w-10 h-10 rounded-xl bg-[#FFC72C] text-slate-950 font-bold flex items-center justify-center text-lg mb-4">
              4
            </div>
            <h3 className="font-bold text-[#00223D] text-lg mb-2">Step 4: Fresh Delivery to Your Door</h3>
            <p className="text-slate-600 text-sm leading-[1.6]">
              Crisp, fresh garments returned to your door within 24-48 hours in protective covers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
