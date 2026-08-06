"use client";

import React from "react";
import { motion } from "framer-motion";

export function HowItWorksSection() {
  const steps = [
    {
      step: 1,
      title: "Schedule Online or Call",
      desc: "Choose your pickup window online or call +1 (323) 828-7503 in under 60 seconds.",
      numBg: "bg-[#003B65] text-white",
    },
    {
      step: 2,
      title: "We Collect Your Items",
      desc: "Our friendly local driver picks up your laundry bag right from your front doorstep.",
      numBg: "bg-[#00A8B5] text-white",
    },
    {
      step: 3,
      title: "Eco Cleaning & Pressing",
      desc: "Garments undergo non-toxic solvent processing, stain removal, and precise folding.",
      numBg: "bg-[#00707A] text-white",
    },
    {
      step: 4,
      title: "Fresh Delivery to Your Door",
      desc: "Crisp, fresh garments returned to your door within 24-48 hours in protective covers.",
      numBg: "bg-[#FFC72C] text-slate-950",
    },
  ];

  return (
    <section className="bg-[#E6F7F9]/40 py-16 sm:py-20 border-y border-[#00A8B5]/20 overflow-hidden">
      <div className="max-container space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#00A8B5]">
            Seamless Workflow
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#00223D] tracking-tight">
            4 Simple Steps To Fresh Laundry
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-[1.6]">
            How our white-glove pickup and delivery process works from start to finish.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              whileHover={{ y: -6 }}
              className="bg-white/80 backdrop-blur-md border border-[#00A8B5]/20 rounded-[1.75rem] p-6 sm:p-7 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-xl hover:shadow-[#00A8B5]/10 transition-all duration-200"
            >
              <div className="space-y-3">
                <div
                  className={`w-10 h-10 rounded-2xl font-black flex items-center justify-center text-base shadow-2xs ${item.numBg}`}
                >
                  {item.step}
                </div>
                <h3 className="font-extrabold text-[#00223D] text-lg leading-snug">
                  Step {item.step}: {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
