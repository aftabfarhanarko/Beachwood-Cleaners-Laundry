"use client";

import React, { useState } from "react";
import Link from "next/link";

export function WhyChooseUsSection() {
  const [activeHoverIndex, setActiveHoverIndex] = useState<number>(1); // Default to Convenience (index 1)

  const items = [
    {
      id: 0,
      title: "Exceptional Quality",
      subtitle: "High standards of washing & fabric care for every single garment.",
      // Top Center (0, -250)
      x: 0,
      y: -250,
    },
    {
      id: 1,
      title: "Convenience",
      subtitle: "More free time, less laundry stress. Pickup and delivery available.",
      // Top Right (230, -170)
      x: 230,
      y: -170,
    },
    {
      id: 2,
      title: "Personalized Care",
      subtitle: "Tailored wash preferences, delicate mesh bags & custom detergent options.",
      // Mid Right (290, 40)
      x: 290,
      y: 40,
    },
    {
      id: 3,
      title: "Transparent Pricing",
      subtitle: "No hidden fees or unexpected charges, clear per-pound pricing always.",
      // Bottom Right (170, 240)
      x: 170,
      y: 240,
    },
    {
      id: 4,
      title: "Customer Satisfaction",
      subtitle: "100% satisfaction guarantee or we re-wash your clothes for free.",
      // Bottom Left (-170, 240)
      x: -170,
      y: 240,
    },
    {
      id: 5,
      title: "Timely Service",
      subtitle: "Express 24-hour turnaround delivered straight back to your doorstep.",
      // Mid Left (-290, 40)
      x: -290,
      y: 40,
    },
    {
      id: 6,
      title: "Expertise and Experience",
      subtitle: "5+ years of professional dry cleaning & fine fabric care expertise.",
      // Top Left (-230, -170)
      x: -230,
      y: -170,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#EBF7FD] via-[#FAFDFE] to-[#FFF4E8] py-16 sm:py-24" id="why-choose-us">
      
      {/* Floating Translucent Soap Bubbles Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1000 650" fill="none">
          <circle cx="150" cy="120" r="40" fill="#0284C7" opacity="0.08" />
          <circle cx="180" cy="220" r="25" fill="#0284C7" opacity="0.06" />
          <circle cx="850" cy="140" r="50" fill="#F97316" opacity="0.08" />
          <circle cx="880" cy="260" r="30" fill="#F97316" opacity="0.06" />
          <circle cx="280" cy="520" r="60" fill="#0284C7" opacity="0.06" />
          <circle cx="750" cy="500" r="45" fill="#F97316" opacity="0.07" />
        </svg>
      </div>

      <div className="max-container relative z-10 space-y-12 text-center">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#363C44] tracking-tight">
            Why <span className="text-[#F97316]">Choose Us</span>
          </h2>
          <p className="text-[#5B636B] text-sm sm:text-base font-medium leading-relaxed">
            At Quickfold, we understand that you have options when it comes to laundry services.
          </p>
        </div>

        {/* Central Graphic Container with Wide-Spaced 7 Interactive Badges */}
        <div className="relative max-w-6xl mx-auto h-[620px] sm:h-[680px] flex items-center justify-center">
          
          {/* Stationary Center Graphic & Order Now Button */}
          <div className="relative z-10 flex flex-col items-center space-y-6 pointer-events-auto">
            <div className="w-[260px] h-[200px] sm:w-[380px] sm:h-[300px] relative hover:scale-105 transition-transform duration-500">
              <img
                src="/iron_folded_clothes.svg"
                alt="Stack of neatly folded clothes with steam iron"
                className="w-full h-full object-contain filter drop-shadow-2xl"
              />
            </div>

            {/* Bottom Orange Pill CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm sm:text-base font-bold text-white bg-[#F97316] hover:bg-[#EA580C] shadow-lg shadow-orange-200 transition-all hover:scale-105 cursor-pointer z-30"
            >
              Order Now
            </Link>
          </div>

          {/* 7 Wide-Spaced Badges with Interactive Hover & Speech Bubble Popup */}
          {items.map((item) => {
            const isActive = activeHoverIndex === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveHoverIndex(item.id)}
                className="absolute z-20 transition-all duration-300 pointer-events-auto"
                style={{
                  transform: `translate(${item.x}px, ${item.y}px)`,
                }}
              >
                <div className="relative flex flex-col items-center group">
                  
                  {/* Interactive Pop-Up Speech Bubble */}
                  <div
                    className={`absolute bottom-full mb-3 px-4 py-2.5 bg-[#FDE6D5] text-[#2C3238] rounded-2xl shadow-xl border border-orange-200/90 w-[190px] sm:w-[220px] text-left transition-all duration-300 origin-bottom z-30 pointer-events-none ${
                      isActive
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-90 translate-y-2"
                    }`}
                  >
                    <p className="text-[11px] sm:text-xs font-semibold leading-snug">
                      {item.subtitle}
                    </p>
                    {/* Speech Bubble Pointer Triangle */}
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#FDE6D5] rotate-45 border-r border-b border-orange-200/90" />
                  </div>

                  {/* Interactive Circle Badge (Turns Solid Orange on Hover) */}
                  <div
                    className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center p-3 text-center transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-[#F97316] text-white shadow-xl scale-110 border-2 border-[#F97316] font-extrabold"
                        : "bg-[#FFF8F1] text-[#2C3238] border-2 border-dashed border-[#FDBA74] shadow-sm font-bold hover:scale-105"
                    }`}
                  >
                    <span className="text-xs sm:text-sm leading-tight">
                      {item.title.split(" ").map((word, idx) => (
                        <React.Fragment key={idx}>
                          {word}
                          {idx === 0 && item.title.includes(" ") ? <br /> : " "}
                        </React.Fragment>
                      ))}
                    </span>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
