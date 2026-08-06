"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function ServiceTabs() {
  const cards = [
    {
      title: "Wash & Fold",
      subtitle: "Provides simple and convenient doorstep wash & neatly folded laundry",
      price: "$2.45",
      unit: "PER LB (15 LBS MIN)",
      isPopular: false,
      buttonText: "Schedule Wash & Fold",
      buttonHref: "/contact",
      features: [
        "Color-separated washing cycles",
        "Hypoallergenic & eco detergents",
        "Neatly folded & ready to wear",
        "24-48 hour guaranteed return",
        "Free doorstep pickup & delivery",
      ],
    },
    {
      title: "Executive Dry Cleaning",
      subtitle: "Gentle organic solvent cleaning for suits, silk dresses & formalwear",
      price: "$22.00",
      unit: "SUITS & FORMALWEAR",
      isPopular: true,
      popularTag: "MOST POPULAR 🔥",
      buttonText: "Book Dry Cleaning",
      buttonHref: "/contact",
      features: [
        "100% PERC-free organic process",
        "Hand pre-treatment for tough stains",
        "Custom protective garment covers",
        "Executive steam press finish",
        "Free minor button audit & repairs",
      ],
    },
    {
      title: "Laundered Shirts",
      subtitle: "Custom dress shirts hand-pressed and returned crisp on heavy hangers",
      price: "$6.95",
      unit: "PER SHIRT ON HANGERS",
      isPopular: false,
      buttonText: "Book Shirt Pressing",
      buttonHref: "/contact",
      features: [
        "Choice of starch intensity",
        "Collar & cuff detail pressing",
        "Free button inspection & repair",
        "Returned crisp on heavy dress hangers",
        "Same-day express return option",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch max-w-6xl mx-auto"
    >
      {cards.map((card, idx) => (
        <motion.div
          key={idx}
          variants={cardVariants}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={`bg-white rounded-[1.75rem] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative ${
            card.isPopular
              ? "border-2 border-[#00A8B5] shadow-lg shadow-[#00A8B5]/10"
              : "border border-slate-200/80"
          }`}
        >
          {/* Top Tag for Featured Popular Card */}
          {card.isPopular && (
            <div className="bg-[#00A8B5] text-white text-[11px] font-black tracking-widest uppercase py-1.5 text-center w-full">
              {card.popularTag}
            </div>
          )}

          <div className="p-7 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
            {/* Header: Title, Subtitle, Price */}
            <div className="space-y-4">
              <div className="space-y-1.5">
                <h3 className="text-2xl font-extrabold text-[#00223D] tracking-tight">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal min-h-[36px]">
                  {card.subtitle}
                </p>
              </div>

              <div className="pt-2">
                <div className="text-4xl sm:text-5xl font-black text-[#00223D] tracking-tight">
                  {card.price}
                </div>
                <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mt-1">
                  {card.unit}
                </div>
              </div>

              {/* Action CTA Button */}
              <div className="pt-2">
                <Link
                  href={card.buttonHref}
                  className={`block w-full text-center py-3.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all shadow-md active:scale-98 ${
                    card.isPopular
                      ? "bg-[#00A8B5] hover:bg-[#0091A4] text-white shadow-cyan-500/20"
                      : "bg-[#00A8B5] hover:bg-[#0091A4] text-white"
                  }`}
                >
                  {card.buttonText}
                </Link>
              </div>
            </div>

            {/* Features Checklist */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Features Included
              </span>
              {card.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                  <Check className="w-4 h-4 text-[#00A8B5] shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
