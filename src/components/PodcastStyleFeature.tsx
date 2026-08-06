"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Pause, Sparkles, ArrowRight } from "lucide-react";

export function PodcastStyleFeature() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="py-8 sm:py-16 lg:py-20 bg-[#F8FAFC] overflow-hidden">
      <div className="max-container grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Side: Headline & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-5 sm:space-y-6"
        >
          <div className="space-y-3 sm:space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-[#00707A] text-xs font-bold border border-cyan-100/80 shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00A8B5]" />
              #1 Rated Eco-Friendly Care
            </motion.div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00223D] tracking-tight leading-[1.15]">
              Find and schedule your favorite laundry service here!
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-md">
              The best laundry & dry cleaning service communicates quality and makes it easy for LA visitors to discover doorstep eco garment care.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="px-6 sm:px-7 py-3 sm:py-3.5 bg-[#111827] hover:bg-[#00223D] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all inline-block"
              >
                Get Started
              </Link>
            </motion.div>

            <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-semibold text-slate-800 hover:text-[#00A8B5] text-xs sm:text-sm transition-colors group px-3 py-3"
              >
                <span>🚀 Explore services</span>
                <ArrowRight className="w-4 h-4 text-[#00A8B5] group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Overlapping Design Composition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 relative"
        >
          <div className="relative max-w-lg mx-auto lg:max-w-none grid grid-cols-12 gap-3 sm:gap-5 items-end">
            
            {/* Top-Left Card Group */}
            <div className="col-span-7 space-y-2.5 sm:space-y-4 relative z-10">
              {/* Sage Green Background Panel Container */}
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-[#CBD5E1] p-2.5 sm:p-4 rounded-2xl relative overflow-hidden shadow-sm"
              >
                <div className="relative w-full h-40 sm:h-60 rounded-xl overflow-hidden bg-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=800&q=80"
                    alt="Eco Dry Cleaning Specialist"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </motion.div>

              {/* Floating Dark Metric Badge (Overlapping Top Right) */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#111827] text-white p-3 sm:p-4 rounded-xl shadow-2xl absolute -top-4 -right-2 sm:-top-6 sm:-right-6 z-30 min-w-[140px] sm:min-w-[170px]"
              >
                <div className="text-[10px] sm:text-[11px] font-medium text-slate-400">Total Orders Done</div>
                <div className="text-base sm:text-xl font-extrabold tracking-tight text-white flex items-baseline justify-between mt-0.5">
                  <span>12,480</span>
                  <span className="text-[9px] sm:text-[10px] text-slate-400 font-normal hover:underline cursor-pointer">stats</span>
                </div>
                <div className="text-[9px] sm:text-[10px] font-medium text-cyan-400 mt-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Beachwood LA
                </div>
              </motion.div>

              {/* Audio / Status Waveform Player Bar */}
              <div className="bg-white border border-slate-200/90 shadow-lg rounded-xl p-2.5 sm:p-3.5 flex items-center gap-2.5 sm:gap-3 relative z-20">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label="Toggle Animation Status"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#111827] text-white flex items-center justify-center shrink-0 hover:scale-105 transition-transform"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white ml-0.5" />}
                </button>
                <div className="flex-1 flex items-center gap-0.5 sm:gap-1 h-5 overflow-hidden">
                  {[40, 70, 45, 90, 60, 100, 30, 85, 55, 95, 40, 75, 50, 80, 60, 35, 90, 65].map((h, i) => (
                    <motion.div
                      key={i}
                      animate={
                        isPlaying
                          ? {
                              height: [`${h * 0.15}px`, `${h * 0.22}px`, `${h * 0.1}px`],
                            }
                          : { height: `${h * 0.18}px` }
                      }
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: i * 0.05,
                        ease: "easeInOut",
                      }}
                      className={`w-1 rounded-full ${i < 8 ? "bg-[#111827]" : "bg-slate-300"}`}
                    />
                  ))}
                </div>
              </div>

              {/* Decorative Accent Ribbon Orange Stroke */}
              <div className="pt-1">
                <svg className="w-28 sm:w-40 h-6 sm:h-8 text-[#F97316]" viewBox="0 0 160 30" fill="currentColor">
                  <path d="M0,15 L40,0 L80,25 L120,5 L160,20 L160,30 L120,15 L80,30 L40,10 L0,25 Z" />
                </svg>
              </div>
            </div>

            {/* Bottom-Right Card Group (Overlapping) */}
            <div className="col-span-5 relative z-20">
              {/* Soft Purple Background Panel */}
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-[#DDD6FE] p-2.5 sm:p-4 rounded-2xl relative shadow-md"
              >
                <div className="relative w-full h-48 sm:h-68 rounded-xl overflow-hidden bg-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=800&q=80"
                    alt="Luxury Linen Laundry Valet"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </motion.div>

              {/* Floating Circular Badge (Bottom Right) */}
              <motion.div
                animate={{
                  y: [0, 6, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-3 -right-2 sm:-bottom-5 sm:-right-5 bg-[#1E3A8A] text-white w-18 h-18 sm:w-22 sm:h-22 rounded-full flex flex-col items-center justify-center text-center p-1.5 shadow-2xl border-4 border-white font-extrabold z-30"
              >
                <span className="text-xs sm:text-sm leading-none font-black text-white">500+</span>
                <span className="text-[9px] sm:text-[10px] font-semibold text-cyan-200 mt-0.5 leading-tight">
                  Happy Homes
                </span>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
