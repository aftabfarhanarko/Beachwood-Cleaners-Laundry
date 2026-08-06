"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export function WhyChooseUsSection() {
  const [activeHoverIndex, setActiveHoverIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Polar coords: Desktop R≈270, Mobile R≈140
  const items = [
    {
      id: 1,
      title: "Eco-Friendly\nCleaning",
      subtitle: "Non-toxic biodegradable detergent gentle on skin & delicate fabrics.",
      x: 0,    y: -270,   mx: 0,    my: -140,
    },
    {
      id: 2,
      title: "Fast\nTurnaround\nTime",
      subtitle: "Express 24-hour delivery back to your doorstep.",
      x: 250,  y: -185,   mx: 130,  my: -96,
    },
    {
      id: 3,
      title: "Competitive\nPricing",
      subtitle: "Transparent $2.45 per pound rates with digital weight receipts.",
      x: 305,  y: 50,     mx: 158,  my: 26,
    },
    {
      id: 4,
      title: "Convenient\nPickup\n& Delivery",
      subtitle: "Free doorstep collection across Beachwood & Los Angeles.",
      x: 185,  y: 255,    mx: 96,   my: 133,
    },
    {
      id: 5,
      title: "Quality\nAssurance\nGuarantee",
      subtitle: "100% satisfaction or we re-wash your garment for free.",
      x: -185, y: 255,    mx: -96,  my: 133,
    },
    {
      id: 6,
      title: "Customized\nService\nOptions",
      subtitle: "Delicate bags, fragrance-free soap & hanger packaging.",
      x: -305, y: 50,     mx: -158, my: 26,
    },
    {
      id: 7,
      title: "Expertise\nand\nExperience",
      subtitle: "5+ years of professional dry cleaning & fine fabric care expertise.",
      x: -250, y: -185,   mx: -130, my: -96,
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-r from-[#EBF7FD] via-[#FAFDFE] to-[#FFF4E8] py-10 sm:py-14"
      id="why-choose-us"
    >
      {/* Decorative bubbles */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1000 650" fill="none">
          <circle cx="150" cy="120" r="40" fill="#0284C7" opacity="0.08" />
          <circle cx="850" cy="140" r="50" fill="#F97316" opacity="0.08" />
          <circle cx="280" cy="520" r="60" fill="#0284C7" opacity="0.06" />
          <circle cx="750" cy="500" r="45" fill="#F97316" opacity="0.07" />
        </svg>
      </div>

      <div className="max-container relative z-10 space-y-8 text-center">

        {/* Section Header */}
        <div className="max-w-2xl mx-auto space-y-3 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#363C44] tracking-tight">
            Why <span className="text-[#F97316]">Choose Us</span>
          </h2>
          <p className="text-[#5B636B] text-sm sm:text-base font-medium leading-relaxed">
            At Beachwood Cleaners, we understand that you have options when it comes to laundry services.
          </p>
        </div>

        {/* Unified Orbital Layout — same structure, responsive sizing */}
        <div
          className="relative mx-auto flex items-center justify-center"
          style={{
            width: isMobile ? 320 : 700,
            height: isMobile ? 380 : 700,
          }}
        >
          {/* Center graphic + CTA */}
          <div className="relative z-10 flex flex-col items-center pointer-events-auto"
            style={{ gap: isMobile ? 12 : 24 }}>
            <div
              style={{
                width: isMobile ? 130 : 300,
                height: isMobile ? 100 : 230,
              }}
              className="hover:scale-105 transition-transform duration-500"
            >
              <img
                src="/iron_folded_clothes.svg"
                alt="Stack of neatly folded clothes with steam iron"
                className="w-full h-full object-contain filter drop-shadow-2xl"
              />
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white font-extrabold shadow-xl shadow-orange-950/20 hover:scale-105 transition-all cursor-pointer"
              style={{
                padding: isMobile ? "8px 20px" : "14px 32px",
                fontSize: isMobile ? 12 : 16,
              }}
            >
              Order Now
            </Link>
          </div>

          {/* 7 Interactive Orbit Badges */}
          {items.map((item) => {
            const isActive = activeHoverIndex === item.id;
            const tx = isMobile ? item.mx : item.x;
            const ty = isMobile ? item.my : item.y;
            const badgeSize = isMobile ? 60 : 108;
            const fontSize = isMobile ? 7.5 : 12;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveHoverIndex(item.id)}
                onMouseLeave={() => setActiveHoverIndex(null)}
                onClick={() => setActiveHoverIndex(isActive ? null : item.id)}
                className="absolute z-20 pointer-events-auto"
                style={{ transform: `translate(${tx}px, ${ty}px)` }}
              >
                <div className="relative flex flex-col items-center group">

                  {/* Speech Bubble Popup */}
                  <div
                    className={`
                      absolute bottom-full
                      bg-[#FDE6D5] text-[#2C3238]
                      rounded-2xl shadow-xl border border-orange-200/90
                      text-left transition-all duration-300 origin-bottom z-30 pointer-events-none
                      ${isActive ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-2"}
                    `}
                    style={{
                      marginBottom: isMobile ? 6 : 12,
                      padding: isMobile ? "8px 10px" : "10px 16px",
                      width: isMobile ? 110 : 200,
                    }}
                  >
                    <p style={{ fontSize: isMobile ? 9 : 12 }} className="font-semibold leading-snug">
                      {item.subtitle}
                    </p>
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#FDE6D5] rotate-45 border-r border-b border-orange-200/90" />
                  </div>

                  {/* Circle Badge */}
                  <div
                    className={`
                      flex items-center justify-center text-center cursor-pointer
                      rounded-full transition-all duration-300
                      ${isActive
                        ? "bg-[#F97316] text-white shadow-xl scale-110 border-2 border-[#F97316]"
                        : "bg-[#FFF8F1] text-[#2C3238] border-2 border-dashed border-[#FDBA74] shadow-sm hover:scale-105"
                      }
                    `}
                    style={{
                      width: badgeSize,
                      height: badgeSize,
                      padding: isMobile ? 4 : 12,
                    }}
                  >
                    <span
                      className="font-bold leading-tight whitespace-pre-line"
                      style={{ fontSize }}
                    >
                      {item.title}
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
