"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Heart, Sparkles, Award } from "lucide-react";

export function TrustCommunitySection() {
  const trustStats = [
    {
      label: "Locally Owned Since",
      value: "2017",
      offset: false,
    },
    {
      label: "Verified LA Reviews",
      value: "250+",
      offset: true, // Sitting slightly higher like screenshot
    },
    {
      label: "Satisfaction Rate",
      value: "99.8%",
      offset: true, // Sitting slightly higher like screenshot
    },
    {
      label: "Happy LA Neighbors",
      value: "12,480+",
      offset: false,
    },
  ];

  const coreValues = [
    {
      icon: Heart,
      title: "Garment-First Always",
      desc: "Every item is treated with personalized European care, eco-solvents, and hand pre-treatment.",
    },
    {
      icon: Sparkles,
      title: "100% Non-Toxic & PERC Free",
      desc: "Zero harsh chemicals. Organic cleaning safe for sensitive skin, babies, and nature.",
    },
    {
      icon: Award,
      title: "Garment Protection Guarantee",
      desc: "If an item isn't cleaned to your exact standards, we re-clean it free — no questions asked.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="max-container py-10 sm:py-16 overflow-hidden">
      {/* 1. Top Section: Centered Title & Narrative (Matching Screenshot Header) */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16"
      >
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E6F7F9] text-[#00A8B5] text-xs font-bold uppercase tracking-wider border border-[#00A8B5]/20">
          <ShieldCheck className="w-3.5 h-3.5" /> Trusted Neighborhood Valet
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#00223D] tracking-tight leading-tight">
          Serving Los Angeles Since 2017
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
          We were tired of clunky laundry services that lost garments or used toxic chemicals. So we built a local Beachwood Canyon service combining eco solvents and doorstep care.
        </p>
      </motion.div>

      {/* 2. Stat Cards Grid (4 Big Cards matching screenshot layout) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-20 items-end"
      >
        {trustStats.map((stat, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className={`bg-white border border-slate-200/80 rounded-[1.75rem] p-5 sm:p-6 flex flex-col justify-between h-36 sm:h-44 shadow-sm hover:shadow-xl hover:shadow-[#00A8B5]/10 hover:border-[#00A8B5]/30 transition-all duration-300 ${
              stat.offset ? "lg:-translate-y-5" : ""
            }`}
          >
            <p className="text-xs sm:text-sm font-semibold text-slate-500 tracking-wide">
              {stat.label}
            </p>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#00223D] tracking-tight leading-none">
              {stat.value}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* 3. Bottom Sub-Section: "What We Believe In" (Matching Screenshot Bottom Half) */}
      <div className="space-y-10">
        {/* Header Row: Title on Left, Text on Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end"
        >
          <div className="lg:col-span-6">
            <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#00223D] tracking-tight">
              What We Believe In
            </h3>
          </div>
          <div className="lg:col-span-6">
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Our values guide everything we do — from garment cleaning techniques to transparent door-to-door delivery. They keep us focused on reliable, human-centered service.
            </p>
          </div>
        </motion.div>

        {/* 3 Value Cards with Soft Glowing Icon Badges (Matching Screenshot Bottom Row) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="bg-[#E6F7F9]/40 border border-[#00A8B5]/20 rounded-[1.75rem] p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xs hover:shadow-lg hover:shadow-[#00A8B5]/10 transition-all duration-300 group"
              >
                {/* Soft Glowing Icon Badge */}
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#00A8B5] to-[#00D2E0] text-white flex items-center justify-center shadow-md shadow-[#00A8B5]/20 group-hover:scale-105 transition-transform duration-200">
                    <Icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl font-extrabold text-[#00223D] tracking-tight">
                    {val.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
