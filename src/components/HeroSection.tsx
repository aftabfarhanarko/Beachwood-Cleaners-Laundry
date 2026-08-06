"use client";

import React from "react";
import { ArrowUpRight, Play, Star } from "lucide-react";

{/* Sticker 1: Washing Machine Vector */}
function WashingMachineSticker() {
  return (
    <div className="w-20 h-20 sm:w-28 sm:h-28 bg-[#FDE5D4] rounded-3xl shadow-lg p-3 flex flex-col items-center justify-center border border-[#FAD2B8] hover:scale-110 hover:shadow-xl transition-all duration-300 shrink-0 cursor-pointer">
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <text x="18" y="23" fill="#F97316" fontSize="9" fontWeight="900" fontFamily="sans-serif">
          SMART WASH
        </text>
        <rect x="18" y="32" width="46" height="52" rx="6" fill="#38BDF8" stroke="#0284C7" strokeWidth="2.5" />
        <rect x="22" y="36" width="38" height="10" rx="3" fill="#E0F2FE" />
        <circle cx="28" cy="41" r="2.5" fill="#F97316" />
        <circle cx="36" cy="41" r="2" fill="#0284C7" />
        <circle cx="44" cy="41" r="2" fill="#0284C7" />
        <circle cx="41" cy="62" r="14" fill="#F0F9FF" stroke="#0284C7" strokeWidth="2.5" />
        <circle cx="41" cy="62" r="10" fill="#7DD3FC" opacity="0.85" />
        <circle cx="44" cy="59" r="3" fill="white" opacity="0.7" />
        <path d="M60 62 L82 64 L80 80 L62 78 Z" fill="#0284C7" />
        <path d="M58 58 C62 52, 70 55, 68 62 Z" fill="#F97316" />
      </svg>
    </div>
  );
}

{/* Sticker 2: Steam Iron & Folded Laundry Vector */}
function IroningSticker() {
  return (
    <div className="w-20 h-20 sm:w-28 sm:h-28 bg-[#FDE5D4] rounded-3xl shadow-lg p-3 flex flex-col items-center justify-center border border-[#FAD2B8] hover:scale-110 hover:shadow-xl transition-all duration-300 shrink-0 cursor-pointer">
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <rect x="42" y="68" width="48" height="10" rx="3" fill="#0284C7" />
        <rect x="44" y="57" width="44" height="10" rx="3" fill="#F97316" />
        <rect x="46" y="46" width="40" height="10" rx="3" fill="#2DD4BF" />
        <path d="M60 46 L66 40 L72 46 Z" fill="white" />
        <path d="M58 40 L74 40 L66 46 Z" fill="#E0F2FE" />
        <g transform="translate(10, 25) rotate(-15)">
          <path d="M5 35 L40 35 C48 35, 52 25, 42 15 L15 15 C8 15, 5 22, 5 35 Z" fill="#0284C7" />
          <path d="M5 35 L42 35" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
          <path d="M12 15 C12 2, 35 2, 35 15" stroke="#F97316" strokeWidth="5" fill="none" strokeLinecap="round" />
          <circle cx="2" cy="20" r="2" fill="#38BDF8" />
          <circle cx="-3" cy="28" r="1.5" fill="#7DD3FC" />
          <circle cx="-2" cy="12" r="1.5" fill="#7DD3FC" />
        </g>
      </svg>
    </div>
  );
}

{/* Sticker 3: Sewing Machine "LET'S SEW!" Vector */}
function SewingSticker() {
  return (
    <div className="w-20 h-20 sm:w-28 sm:h-28 bg-[#FDE5D4] rounded-3xl shadow-lg p-3 flex flex-col items-center justify-center border border-[#FAD2B8] hover:scale-110 hover:shadow-xl transition-all duration-300 shrink-0 cursor-pointer">
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <text x="20" y="23" fill="#F97316" fontSize="9.5" fontWeight="900" fontFamily="sans-serif">
          LET&apos;S SEW!
        </text>
        <rect x="16" y="32" width="12" height="18" rx="2" fill="#38BDF8" stroke="#0284C7" strokeWidth="1.5" />
        <line x1="16" y1="36" x2="28" y2="36" stroke="white" strokeWidth="1.5" />
        <line x1="16" y1="41" x2="28" y2="41" stroke="white" strokeWidth="1.5" />
        <line x1="16" y1="46" x2="28" y2="46" stroke="white" strokeWidth="1.5" />
        <rect x="25" y="70" width="65" height="10" rx="3" fill="#0284C7" />
        <path d="M80 70 L80 40 C80 32, 65 32, 45 32 L45 48" stroke="#0284C7" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <rect x="43" y="48" width="4" height="14" fill="#94A3B8" />
        <polygon points="45,62 43,68 47,68" fill="#64748B" />
        <circle cx="80" cy="45" r="7" fill="#F97316" />
        <circle cx="80" cy="45" r="3" fill="white" />
        <path d="M22 70 C30 62, 40 68, 50 65 C60 62, 70 70, 75 70 Z" fill="#F97316" />
      </svg>
    </div>
  );
}

{/* Sticker 4: Pickup Truck Vector */}
function PickupTruckSticker() {
  return (
    <div className="w-20 h-20 sm:w-28 sm:h-28 bg-[#FDE5D4] rounded-3xl shadow-lg p-3 flex flex-col items-center justify-center border border-[#FAD2B8] hover:scale-110 hover:shadow-xl transition-all duration-300 shrink-0 cursor-pointer">
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <text x="18" y="23" fill="#F97316" fontSize="9" fontWeight="900" fontFamily="sans-serif">
          FREE PICKUP
        </text>
        <rect x="15" y="42" width="45" height="28" rx="4" fill="#0284C7" />
        <path d="M60 48 L76 48 C82 48, 85 52, 85 58 L85 70 L60 70 Z" fill="#38BDF8" />
        <rect x="64" y="52" width="12" height="8" rx="2" fill="#E0F2FE" />
        <circle cx="32" cy="72" r="8" fill="#1E293B" />
        <circle cx="32" cy="72" r="3.5" fill="#E2E8F0" />
        <circle cx="72" cy="72" r="8" fill="#1E293B" />
        <circle cx="72" cy="72" r="3.5" fill="#E2E8F0" />
        <line x1="8" y1="50" x2="13" y2="50" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
        <line x1="5" y1="58" x2="11" y2="58" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

{/* Sticker 5: Eco Clean Spray Vector */}
function EcoCleanSticker() {
  return (
    <div className="w-20 h-20 sm:w-28 sm:h-28 bg-[#FDE5D4] rounded-3xl shadow-lg p-3 flex flex-col items-center justify-center border border-[#FAD2B8] hover:scale-110 hover:shadow-xl transition-all duration-300 shrink-0 cursor-pointer">
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <text x="22" y="23" fill="#F97316" fontSize="9" fontWeight="900" fontFamily="sans-serif">
          ECO CLEAN
        </text>
        <path d="M40 40 L58 40 L55 75 L43 75 Z" fill="#38BDF8" />
        <path d="M44 32 L54 32 L54 40 L44 40 Z" fill="#0284C7" />
        <path d="M36 32 L44 28 L44 36 Z" fill="#F97316" />
        <path d="M52 50 C62 42, 68 55, 54 62 Z" fill="#10B981" />
        <circle cx="30" cy="28" r="2.5" fill="#0284C7" />
        <circle cx="24" cy="34" r="2" fill="#38BDF8" />
        <circle cx="28" cy="40" r="1.5" fill="#38BDF8" />
      </svg>
    </div>
  );
}

{/* Sticker 6: Dry Clean Suit Hanger Vector */}
function DryCleanSticker() {
  return (
    <div className="w-20 h-20 sm:w-28 sm:h-28 bg-[#FDE5D4] rounded-3xl shadow-lg p-3 flex flex-col items-center justify-center border border-[#FAD2B8] hover:scale-110 hover:shadow-xl transition-all duration-300 shrink-0 cursor-pointer">
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <text x="22" y="23" fill="#F97316" fontSize="9" fontWeight="900" fontFamily="sans-serif">
          DRY CLEAN
        </text>
        <path d="M50 30 C50 24, 42 24, 44 28 L50 35 L72 50 L28 50 Z" stroke="#0284C7" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 50 L42 45 L50 52 L58 45 L68 50 L66 78 L34 78 Z" fill="#38BDF8" />
        <polygon points="50,52 46,65 50,70 54,65" fill="#F97316" />
        <path d="M72 34 L74 28 L76 34 L82 36 L76 38 L74 44 L72 38 L66 36 Z" fill="#F97316" />
      </svg>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#EAF7FD] via-[#FAFDFE] to-[#FFF4E8] py-8 sm:py-12 lg:py-14">
      
      <div className="max-container grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
        
        {/* Left Column Text Content */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
          
          {/* Headline matching reference image */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-black text-[#2D3339] tracking-tight leading-[1.12]">
              Simplify Your Life <br />
              with <span className="text-[#00A8E8]">QuickFold</span> <br />
              <span className="relative inline-block text-[#F97316] pb-2">
                Laundry Service
                {/* Hand-drawn Orange Curved Swoosh Underline */}
                <svg
                  className="absolute -bottom-1 left-0 w-full h-4 text-[#F97316]"
                  viewBox="0 0 280 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 10C85 2 195 -1 277 10"
                    stroke="currentColor"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-[#5B636B] text-base sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              For over 5 years, we have been dedicated to providing exceptional customer service and top quality dry cleaning and laundry services.
            </p>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2">
            
            {/* Get Started Button */}
            <a
              href="/contact"
              className="inline-flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-[#00A8E8] group-hover:bg-[#0094D8] flex items-center justify-center text-white shadow-md shadow-sky-200 transition-all group-hover:scale-105">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <span className="text-[#00A8E8] font-bold text-lg group-hover:underline">
                Get Started
              </span>
            </a>

            {/* Play Button + Doodle Arrow */}
            <div className="flex items-center gap-4 relative">
              <button
                onClick={() => alert("Watch QuickFold Overview Video")}
                className="w-10 h-10 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white flex items-center justify-center shadow-md shadow-orange-200 hover:scale-110 transition-all cursor-pointer"
                aria-label="Play Video"
              >
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </button>

              {/* Hand-drawn Doodle Arrow */}
              <svg
                className="w-20 h-10 text-[#F97316]/70 hidden sm:block pointer-events-none"
                viewBox="0 0 100 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 15 Q 50 40 85 25"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="3 3"
                  fill="none"
                />
                <path
                  d="M80 32 L 87 24 L 78 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Customer Reviews Row */}
          <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <div className="flex -space-x-3">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Reviewer 1"
                className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xs"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                alt="Reviewer 2"
                className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xs"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                alt="Reviewer 3"
                className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xs"
              />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                alt="Reviewer 4"
                className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xs"
              />
            </div>

            <div className="text-left space-y-0.5">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-[#F97316] text-sm">4.8</span>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs font-semibold text-slate-500">
                150k Total Review
              </p>
            </div>
          </div>
        </div>

        {/* Right Hero Graphic with Orbit Line & 6 Sticker Badges */}
        <div className="lg:col-span-6 relative flex justify-center items-center py-6">
          
          <div className="relative w-[360px] h-[380px] sm:w-[560px] sm:h-[560px] lg:w-[600px] lg:h-[600px] flex items-center justify-center group">
            
            {/* Dashed Circle Orbit SVG */}
            <svg
              className="absolute inset-0 w-full h-full text-slate-300/90 pointer-events-none"
              viewBox="0 0 600 600"
            >
              <circle
                cx="300"
                cy="300"
                r="280"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeDasharray="7 7"
              />
            </svg>

            {/* Character & Laundry Graphic */}
            <div className="relative w-[320px] h-[380px] sm:w-[450px] sm:h-[500px] z-10 flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-2xl">
              <img
                src="/laundry_hero.svg"
                alt="QuickFold Laundry Service Graphic"
                className="w-full h-full object-contain filter drop-shadow-xl"
              />
            </div>

            {/* 1. Top Left Sticker: Pickup Truck */}
            <div className="absolute left-6 sm:left-10 top-4 sm:top-6 z-20">
              <PickupTruckSticker />
            </div>

            {/* 2. Mid Left Sticker: Washing Machine */}
            <div className="absolute left-0 sm:-left-4 top-[48%] -translate-y-1/2 z-20">
              <WashingMachineSticker />
            </div>

            {/* 3. Bottom Left Sticker: Eco Clean Spray */}
            <div className="absolute left-6 sm:left-10 bottom-6 sm:bottom-8 z-20">
              <EcoCleanSticker />
            </div>

            {/* 4. Top Right Sticker: Steam Iron & Clothes Stack */}
            <div className="absolute right-6 sm:right-10 top-4 sm:top-6 z-20">
              <IroningSticker />
            </div>

            {/* 5. Mid Right Sticker: Dry Clean Suit */}
            <div className="absolute right-0 sm:-right-4 top-[48%] -translate-y-1/2 z-20">
              <DryCleanSticker />
            </div>

            {/* 6. Bottom Right Sticker: Sewing Machine "LET'S SEW!" */}
            <div className="absolute right-6 sm:right-10 bottom-6 sm:bottom-8 z-20">
              <SewingSticker />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
