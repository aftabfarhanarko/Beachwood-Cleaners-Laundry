import React from "react";
import Link from "next/link";
import { ShieldCheck, Heart, Leaf, Award, MapPin, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About Us & Eco Guarantee | Beachwood Cleaners LA",
  description: "Learn about Beachwood Cleaners & Laundry, located at 2699 Beachwood Dr, LA. Serving Beachwood Canyon & Hollywood with 100% PERC-free eco-friendly dry cleaning.",
};

export default function AboutPage() {
  const steps = [
    { step: "01", title: "Barcoded Garment Tagging", desc: "Every item is tagged and cataloged under your personal account to ensure zero misplaced garments." },
    { step: "02", title: "Hand Spot Inspection", desc: "Our master cleaners inspect cuffs, collars, and hems for spots, applying custom pre-treatment solutions." },
    { step: "03", title: "100% Non-Toxic Eco Wash", desc: "Garments are cleaned using non-hazardous, hypoallergenic organic solvents that protect fine fibers." },
    { step: "04", title: "Custom Steam Pressing", desc: "Garments are hand steam-pressed to recreate original tailored lines, crisp pleats, and smooth contours." },
    { step: "05", title: "Final Quality Audit", desc: "A supervisor conducts a 5-point final inspection before packaging garments in breathable protective covers." },
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Header Banner */}
      <section className="bg-[#1E3A8A] text-white py-16">
        <div className="max-container text-center space-y-4 max-w-3xl">
          <span className="bg-emerald-600 text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            Beachwood Canyon Community Heritage
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            About Beachwood Cleaners & Laundry
          </h1>
          <p className="text-blue-100 text-base sm:text-lg">
            Dedicated to providing Hollywood & Beachwood Canyon residents with white-glove, eco-friendly garment care since day one.
          </p>
        </div>
      </section>

      {/* Local Heritage Story */}
      <section className="max-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-emerald-600" />
              2699 Beachwood Dr, Los Angeles, CA 90068
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Rooted In The Heart Of Beachwood Canyon
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Beachwood Cleaners & Laundry was founded with a singular purpose: to deliver premium, hassle-free garment care tailored to high-value residential and commercial clients across Los Angeles.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Situated right at the foothills of Beachwood Canyon below the iconic Hollywood Sign, we understand the fast-paced lifestyle of LA professionals, artists, and families. That’s why we created a seamless doorstep pickup and delivery model paired with strict artisanal cleaning standards.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                <p className="text-2xl font-black text-[#1E3A8A]">250+</p>
                <p className="text-xs text-slate-600 font-semibold">5-Star Google Reviews</p>
              </div>
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                <p className="text-2xl font-black text-emerald-700">100%</p>
                <p className="text-xs text-slate-600 font-semibold">PERC-Free Organic Clean</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-tr from-[#1E3A8A] to-[#2563EB] text-white p-8 sm:p-10 rounded-3xl space-y-6 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">Our Eco-Friendly Commitment</h3>
            <p className="text-sm text-blue-100 leading-relaxed">
              Traditional dry cleaners rely on Perchloroethylene (PERC)—a harsh, toxic chemical solvent harmful to fabrics, human health, and groundwater.
            </p>
            <p className="text-sm text-blue-100 leading-relaxed">
              At Beachwood Cleaners, we use 100% toxic-free, biodegradable organic solvents and advanced wet-cleaning technology. Your clothes come back clean, soft, vibrant, and completely odorless.
            </p>
            <div className="pt-2 border-t border-white/20 flex items-center gap-2 text-xs font-semibold text-emerald-300">
              <CheckCircle2 className="w-4 h-4" /> Hypoallergenic & Safe For Delicate Baby Clothing
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance 5-Point Process */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-container space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Artisanal Inspection
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Our 5-Point Quality Inspection Standard
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              How every single garment is treated from the moment it arrives at our Beachwood location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {steps.map((s, idx) => (
              <div key={idx} className="bg-slate-800 p-5 rounded-2xl border border-slate-700 space-y-3">
                <span className="text-2xl font-black text-amber-400">{s.step}</span>
                <h3 className="font-bold text-white text-base">{s.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
