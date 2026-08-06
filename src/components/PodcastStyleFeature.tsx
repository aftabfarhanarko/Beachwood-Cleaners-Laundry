"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Sparkles, ArrowRight } from "lucide-react";

export function PodcastStyleFeature() {
  return (
    <section className="py-12 sm:py-20 bg-[#F8FAFC]">
      <div className="max-container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Side: Headline & CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-6 sm:space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#00223D] tracking-tight leading-[1.1]">
              Find and schedule your favorite laundry service here!
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-lg">
              The best laundry & dry cleaning service communicates quality and makes it easy for LA visitors to discover doorstep eco garment care.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-[#111827] hover:bg-[#00223D] text-white font-extrabold text-sm sm:text-base rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-bold text-slate-800 hover:text-[#00A8B5] text-sm sm:text-base transition-colors group"
            >
              <span>🚀 Explore services</span>
              <ArrowRight className="w-4 h-4 text-[#00A8B5] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Overlapping Design Composition */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7 relative"
        >
          <div className="relative max-w-xl mx-auto lg:max-w-none grid grid-cols-12 gap-4 sm:gap-6 items-end">
            
            {/* Top-Left Card Group */}
            <div className="col-span-7 space-y-3 sm:space-y-4 relative z-10">
              {/* Sage Green Background Panel Container */}
              <div className="bg-[#CBD5E1] p-3 sm:p-4 rounded-2xl relative overflow-hidden shadow-sm">
                <div className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden bg-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=800&q=80"
                    alt="Eco Dry Cleaning Specialist"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>

              {/* Floating Dark Metric Badge (Overlapping Top Right) */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-[#111827] text-white p-3.5 sm:p-4 rounded-xl shadow-2xl absolute -top-6 -right-4 sm:-right-8 z-30 min-w-[170px]"
              >
                <div className="text-[11px] font-semibold text-slate-400">Total Orders Done</div>
                <div className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-baseline justify-between mt-0.5">
                  <span>12,480</span>
                  <span className="text-[10px] text-slate-400 font-normal hover:underline cursor-pointer">view stats</span>
                </div>
                <div className="text-[10px] font-medium text-cyan-400 mt-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Source: Beachwood LA
                </div>
              </motion.div>

              {/* Audio / Status Waveform Player Bar */}
              <div className="bg-white border border-slate-200/90 shadow-xl rounded-xl p-3 sm:p-3.5 flex items-center gap-3 relative z-20">
                <button className="w-8 h-8 rounded-full bg-[#111827] text-white flex items-center justify-center shrink-0 hover:scale-105 transition-transform">
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                </button>
                <div className="flex-1 flex items-center gap-1">
                  {[40, 70, 45, 90, 60, 100, 30, 85, 55, 95, 40, 75, 50, 80, 60, 35, 90, 65].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h * 0.22}px` }}
                      className={`w-1 rounded-full ${i < 8 ? "bg-[#111827]" : "bg-slate-300"}`}
                    />
                  ))}
                </div>
              </div>

              {/* Decorative Accent Ribbon Orange Stroke */}
              <div className="pt-2">
                <svg className="w-32 sm:w-44 h-8 text-[#F97316]" viewBox="0 0 160 30" fill="currentColor">
                  <path d="M0,15 L40,0 L80,25 L120,5 L160,20 L160,30 L120,15 L80,30 L40,10 L0,25 Z" />
                </svg>
              </div>
            </div>

            {/* Bottom-Right Card Group (Overlapping) */}
            <div className="col-span-5 relative z-20">
              {/* Soft Purple Background Panel */}
              <div className="bg-[#DDD6FE] p-3 sm:p-4 rounded-2xl relative shadow-md">
                <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden bg-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=800&q=80"
                    alt="Luxury Linen Laundry Valet"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>

              {/* Floating Circular Badge (Bottom Right) */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="absolute -bottom-5 -right-4 sm:-right-6 bg-[#1E3A8A] text-white w-20 h-20 sm:w-24 sm:h-24 rounded-full flex flex-col items-center justify-center text-center p-2 shadow-2xl border-4 border-white font-extrabold z-30"
              >
                <span className="text-sm sm:text-base leading-none font-black text-white">500+</span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-cyan-200 mt-0.5 leading-tight">
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
