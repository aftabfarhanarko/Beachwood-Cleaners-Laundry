"use client";

import React from "react";

{/* Sticker 1: Schedule Pickup (Calendar & Clock) */}
function SchedulePickupSticker() {
  return (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28" fill="none">
      <rect x="22" y="24" width="56" height="52" rx="7" fill="white" />
      <path d="M22 31 C22 27 26 24 30 24 L70 24 C74 24 78 27 78 31 L78 36 L22 36 Z" fill="#F97316" />
      <rect x="32" y="18" width="5" height="10" rx="2.5" fill="#1E293B" />
      <rect x="47.5" y="18" width="5" height="10" rx="2.5" fill="#1E293B" />
      <rect x="63" y="18" width="5" height="10" rx="2.5" fill="#1E293B" />
      <circle cx="34" cy="44" r="3" fill="#38BDF8" />
      <circle cx="50" cy="44" r="3" fill="#38BDF8" />
      <circle cx="66" cy="44" r="3" fill="#38BDF8" />
      <circle cx="34" cy="54" r="3" fill="#38BDF8" />
      <circle cx="50" cy="54" r="3" fill="#38BDF8" />
      <circle cx="66" cy="54" r="3" fill="#38BDF8" />
      <circle cx="68" cy="66" r="12" fill="#F97316" stroke="white" strokeWidth="2.5" />
      <polyline points="68,59 68,66 73,66" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

{/* Sticker 2: Laundry Collection (Box with Clothes & Detergent) */}
function LaundryCollectionSticker() {
  return (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28" fill="none">
      <rect x="58" y="24" width="12" height="24" rx="4" fill="#38BDF8" transform="rotate(10 58 24)" />
      <circle cx="62" cy="22" r="4" fill="#F97316" />
      <path d="M30 42 C25 35, 45 30, 50 42 Z" fill="#10B981" />
      <path d="M42 38 C38 30, 58 28, 62 38 Z" fill="#EC4899" />
      <path d="M22 48 L78 48 L70 82 L30 82 Z" fill="#D97706" />
      <path d="M22 48 L40 40 L50 48 L32 58 Z" fill="#F59E0B" />
      <path d="M78 48 L60 40 L50 48 L68 58 Z" fill="#F59E0B" opacity="0.8" />
      <path d="M48 48 L52 48 L50 82 L48 82 Z" fill="#B45309" opacity="0.4" />
      <path d="M25 28 Q27 22 32 26 Q37 22 39 28 Q39 34 32 38 Q25 34 25 28 Z" fill="#F43F5E" />
      <rect x="74" y="28" width="5" height="12" rx="1.5" fill="#38BDF8" />
    </svg>
  );
}

{/* Sticker 3: Expert Cleaning (Orange Shirt & Towel Stack) */}
function ExpertCleaningSticker() {
  return (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28" fill="none">
      <path d="M30 24 L42 20 L50 26 L58 20 L70 24 L76 38 L65 42 L65 72 L35 72 L35 42 L24 38 Z" fill="#F97316" stroke="#1E293B" strokeWidth="2.5" />
      <path d="M42 20 L50 28 L58 20" stroke="#1E293B" strokeWidth="2.5" fill="none" />
      <rect x="52" y="66" width="36" height="8" rx="2.5" fill="#0284C7" stroke="#1E293B" strokeWidth="2" />
      <rect x="54" y="58" width="34" height="8" rx="2.5" fill="#10B981" stroke="#1E293B" strokeWidth="2" />
      <rect x="56" y="50" width="32" height="8" rx="2.5" fill="#FBBF24" stroke="#1E293B" strokeWidth="2" />
      <rect x="58" y="42" width="30" height="8" rx="2.5" fill="#EC4899" stroke="#1E293B" strokeWidth="2" />
      <path d="M20 50 L23 42 L26 50 L34 53 L26 56 L23 64 L20 56 L12 53 Z" fill="#FBBF24" />
      <path d="M68 22 L70 16 L72 22 L78 24 L72 26 L70 32 L68 26 L62 24 Z" fill="#FBBF24" />
    </svg>
  );
}

{/* Sticker 4: Convenient Delivery (Hands & Package Box) */}
function ConvenientDeliverySticker() {
  return (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28" fill="none">
      <path d="M38 28 L62 28 L68 44 L32 44 Z" fill="#F59E0B" />
      <rect x="30" y="44" width="40" height="24" rx="3" fill="#D97706" />
      <rect x="46" y="44" width="8" height="24" fill="#B45309" opacity="0.6" />
      <rect x="54" y="32" width="10" height="8" rx="1.5" fill="#FEF3C7" />
      <path d="M22 36 Q32 36 38 42 L34 46 Q28 42 20 40 Z" fill="#FED7AA" />
      <path d="M60 74 Q70 76 80 72 L76 68 Q68 70 56 68 Z" fill="#FED7AA" />
      <path d="M50 78 Q62 80 74 76 L70 72 Q60 74 48 72 Z" fill="#FDBA74" />
    </svg>
  );
}

export function WorkingProcessSection() {
  const steps = [
    {
      step: 1,
      title: "Schedule Pickup",
      desc: "Book online or by phone, choose your time.",
      Sticker: SchedulePickupSticker,
    },
    {
      step: 2,
      title: "Laundry Collection",
      desc: "Our team collects your bagged laundry at your doorstep.",
      Sticker: LaundryCollectionSticker,
    },
    {
      step: 3,
      title: "Expert Cleaning",
      desc: "We use top tier techniques and detergents for best results.",
      Sticker: ExpertCleaningSticker,
    },
    {
      step: 4,
      title: "Convenient Delivery",
      desc: "After cleaning, we deliver neatly folded laundry on time.",
      Sticker: ConvenientDeliverySticker,
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-[#EAF5FC] relative overflow-hidden" id="how-it-works">
      
      {/* Floating Translucent Soap Bubbles Background */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <svg className="w-full h-full" viewBox="0 0 1000 500" fill="none">
          <circle cx="40" cy="220" r="35" fill="#38BDF8" opacity="0.25" stroke="white" strokeWidth="2" />
          <circle cx="280" cy="180" r="10" fill="#38BDF8" opacity="0.3" stroke="white" strokeWidth="1.5" />
          <circle cx="490" cy="190" r="14" fill="#38BDF8" opacity="0.2" stroke="white" strokeWidth="1.5" />
          <circle cx="730" cy="310" r="16" fill="#38BDF8" opacity="0.25" stroke="white" strokeWidth="1.5" />
          <circle cx="960" cy="420" r="30" fill="#38BDF8" opacity="0.2" stroke="white" strokeWidth="2" />
          <circle cx="940" cy="460" r="18" fill="#38BDF8" opacity="0.15" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="max-container space-y-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#383F47] tracking-tight leading-tight">
            Our Working <span className="text-[#F97316]">Process</span>
          </h2>
        </div>

        {/* 4 Steps Row with Enlarged Animated Sticker Circles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative">
          {steps.map((item, index) => {
            const StickerComponent = item.Sticker;
            return (
              <div key={item.step} className="relative text-center space-y-6 group">
                
                {/* Animated Curved Orange Connector Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-14 w-28 h-12 -z-0 pointer-events-none">
                    <svg className="w-full h-full text-[#F97316]" viewBox="0 0 100 40" fill="none">
                      <path
                        d="M10 25 Q 50 5 85 20"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        fill="none"
                        strokeDasharray="100"
                        className="group-hover:animate-pulse"
                      />
                      <path
                        d="M78 24 L 88 20 L 82 13"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}

                {/* Enlarged Circle Badge with Hover Scale, Shadow & Rotating Dashed Ring */}
                <div className="relative mx-auto w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full border-2 border-dashed border-[#FDBA74] p-2 bg-white shadow-md hover:shadow-2xl hover:scale-108 transition-all duration-500 cursor-pointer">
                  {/* Rotating Inner Dash Effect on Hover */}
                  <div className="w-full h-full rounded-full bg-[#38BDF8] flex items-center justify-center shadow-inner group-hover:bg-[#0284C7] transition-colors duration-500">
                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                      <StickerComponent />
                    </div>
                  </div>
                </div>

                {/* Step Title & Subtitle */}
                <div className="space-y-2">
                  <h3 className="font-extrabold text-[#2C3238] text-xl sm:text-2xl group-hover:text-[#F97316] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#5B636B] text-xs sm:text-sm leading-relaxed max-w-[240px] mx-auto font-medium">
                    {item.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
