"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarCheck, Truck, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      icon: CalendarCheck,
      title: "Schedule Your Pickup",
      desc: "Choose your DNA, BP, or laundry service window online or call our LA team in under 60 seconds.",
      isActive: true,
    },
    {
      step: "02",
      icon: Truck,
      title: "Collect & Return",
      desc: "Our friendly driver collects your laundry bag right from your doorstep at your specified time.",
      isActive: false,
    },
    {
      step: "03",
      icon: Sparkles,
      title: "Eco Cleaning & Pressing",
      desc: "Garments undergo non-toxic solvent processing, stain pre-treatment, and precise steam folding.",
      isActive: false,
    },
    {
      step: "04",
      icon: CheckCircle2,
      title: "Get Fresh Garments Delivered",
      desc: "Crisp, fresh garments returned to your door within 24-48 hours in protective garment covers.",
      isActive: false,
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-transparent overflow-hidden">
      <div className="max-container space-y-12 sm:space-y-16">
        {/* Header matching screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#00A8B5]">
            Simple Steps
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#00223D] tracking-tight">
            How It Works
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            No confusion or delays. Just fast, clean, and reliable doorstep garment care.
          </p>
        </motion.div>

        {/* 2-Column Split Layout matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Overlapping Graphic Photo Composition */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-5 relative"
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Main Photo Container */}
              <div className="relative w-full h-[360px] sm:h-[430px] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80"
                  alt="Beachwood Doorstep Valet Service"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Floating Green/Cyan Tag Pill matching screenshot */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute top-1/2 -right-4 sm:-right-6 transform -translate-y-12 bg-[#00A8B5] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg border-2 border-white z-30 flex items-center gap-1.5"
              >
                <span>Order Your Pickup</span>
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.div>

              {/* Overlapping Glass Status Card matching screenshot */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -right-3 sm:-bottom-8 sm:-right-6 bg-white/95 backdrop-blur-md border border-slate-200/80 p-4 sm:p-5 rounded-2xl shadow-2xl w-64 sm:w-72 space-y-3 z-20"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#00223D]">Live Status</span>
                  <span className="text-[9px] font-extrabold bg-[#E6F7F9] text-[#00A8B5] px-2 py-0.5 rounded-full border border-[#00A8B5]/20">
                    Pickup Confirmed
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                      <div className={`w-2.5 h-2.5 rounded-full ${i < 4 ? "bg-[#00A8B5]" : "bg-slate-300"}`} />
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00A8B5]" />
                  <span>Doorstep Valet #12,480</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Vertical Stepper Timeline matching screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-7 space-y-8 relative pl-2 sm:pl-6"
          >
            {/* Vertical Connecting Track Line */}
            <div className="absolute left-[34px] sm:left-[50px] top-6 bottom-6 w-0.5 bg-slate-200/80 -z-0" />

            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-4 sm:gap-6 relative z-10 group cursor-pointer"
                >
                  {/* Icon Box matching screenshot styling */}
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 shadow-2xs ${
                      item.isActive || idx === 0
                        ? "bg-[#00A8B5] text-white shadow-md shadow-[#00A8B5]/20 ring-4 ring-[#E6F7F9]"
                        : "bg-white border border-slate-200/90 text-slate-700 group-hover:border-[#00A8B5] group-hover:text-[#00A8B5]"
                    }`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
                  </div>

                  {/* Text Content */}
                  <div className="space-y-1 pt-1">
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#00223D] tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md font-normal">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
