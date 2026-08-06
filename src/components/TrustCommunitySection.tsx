"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Building2, Star, Users, Recycle, BadgeCheck, Award } from "lucide-react";

export function TrustCommunitySection() {
  const trustStats = [
    {
      icon: Building2,
      value: "2017",
      label: "Locally Owned Since",
      desc: "Proudly serving the Beachwood Canyon community for years.",
    },
    {
      icon: Star,
      value: "4.9★",
      label: "250+ Verified Reviews",
      desc: "Rated top laundry & dry cleaning service across Google & Yelp.",
    },
    {
      icon: Users,
      value: "10 mi",
      label: "Neighborhoods Covered",
      desc: "Free doorstep service across Hollywood, Los Feliz & Silver Lake.",
    },
    {
      icon: Recycle,
      value: "100%",
      label: "PERC-Free Process",
      desc: "Every order cleaned with non-toxic, environmentally safe solvents.",
    },
  ];

  const trustBadges = [
    { icon: ShieldCheck, label: "Fully Insured & Bonded" },
    { icon: BadgeCheck, label: "Locally Owned & Operated" },
    { icon: Recycle, label: "Eco-Certified Solvents" },
    { icon: Award, label: "Satisfaction Guaranteed" },
  ];

  return (
    <section className="max-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        className="relative rounded-[2.25rem] bg-white overflow-hidden border border-[#00A8B5]/20 shadow-sm"
      >
        {/* Ambient glass glows */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-cyan-200/25 rounded-full blur-3xl -z-0" />
        <div className="absolute -bottom-24 -right-16 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl -z-0" />

        <div className="relative z-10 p-8 sm:p-12 lg:p-14 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E6F7F9] backdrop-blur-sm text-[#00A8B5] text-xs font-bold uppercase tracking-wider border border-[#00A8B5]/20">
              <ShieldCheck className="w-3.5 h-3.5" /> Trusted Local Business
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#00223D] tracking-tight">
              Serving Los Angeles Since 2017
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-[1.6]">
              A neighborhood business built on reliability, transparency, and care for both your garments and the environment.
            </p>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {trustStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                  whileHover={{ y: -5 }}
                  className="bg-[#E6F7F9]/50 border border-[#00A8B5]/20 rounded-[1.75rem] p-5 sm:p-6 text-center flex flex-col items-center gap-2 backdrop-blur-md transition-all duration-200 hover:shadow-lg hover:shadow-[#00A8B5]/10 group"
                >
                  <div className="w-11 h-11 rounded-2xl bg-white border border-[#00A8B5]/20 text-[#00A8B5] group-hover:bg-[#00A8B5] group-hover:text-white flex items-center justify-center mb-1 transition-all duration-200 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-2xl sm:text-3xl font-black text-[#00223D] tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-[#00A8B5]">{stat.label}</p>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-[1.5]">{stat.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Trust Badge Strip */}
          <div className="pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {trustBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/70 backdrop-blur-md border border-[#00A8B5]/20 text-xs sm:text-sm font-semibold text-slate-700 shadow-2xs"
                >
                  <Icon className="w-4 h-4 text-[#00A8B5]" />
                  {badge.label}
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
