"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Sparkles, DollarSign, ShieldCheck, Truck, Award } from "lucide-react";

export function ValuePropositionGrid() {
  const valueProps = [
    {
      icon: Clock,
      title: "24-48 Hour Express Care",
      desc: "Fast, reliable express processing so you never run out of pristine clean clothes.",
    },
    {
      icon: Sparkles,
      title: "100% Eco-Friendly Solvents",
      desc: "PERC-free, hypoallergenic solvents safe for sensitive skin & nature.",
      offset: true, // Alternating 2nd card (elevated on lg breakpoint)
    },
    {
      icon: DollarSign,
      title: "Transparent Per-Pound Pricing",
      desc: "$2.45/lb wash & fold with zero hidden service fees or surprise charges.",
    },
    {
      icon: ShieldCheck,
      title: "Professional Stain Removal",
      desc: "Master garment technicians pre-treat spots with specialized techniques.",
    },
    {
      icon: Truck,
      title: "Free Doorstep Pickup & Delivery",
      desc: "We collect and return your laundry right to your front door anywhere in LA.",
      offset: true, // Alternating 5th card (elevated on lg breakpoint)
    },
    {
      icon: Award,
      title: "Garment Protection Guarantee",
      desc: "100% satisfaction guarantee. If it's not perfect, we re-clean it free.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="max-container py-10 sm:py-16 overflow-hidden">
      {/* Centered Heading at Top */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#00223D] tracking-tight">
          See Our all Services
        </h2>
      </motion.div>

      {/* 3-Column Grid of Cards with Staggered Vertical Rhythm (2nd and 5th cards elevated on lg) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-start"
      >
        {valueProps.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`bg-[#E6F7F9]/50 backdrop-blur-md border border-[#00A8B5]/20 rounded-[1.75rem] p-7 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#00A8B5]/10 group cursor-pointer ${
                item.offset ? "lg:-translate-y-5" : ""
              }`}
            >
              {/* Small Rounded Icon Badge at Top (scales & inverts to solid brand color on hover) */}
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white border border-[#00A8B5]/20 shadow-2xs flex items-center justify-center text-[#00A8B5] group-hover:scale-105 group-hover:bg-[#00A8B5] group-hover:text-white transition-all duration-200">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
                </div>
              </div>

              {/* Bold Title & Short Description Below */}
              <div className="space-y-2.5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#00223D] tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-normal text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
