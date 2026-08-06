"use client";

import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  iconOnly?: boolean;
}

export function BrandLogo({ className = "", iconOnly = false }: BrandLogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* Unique Custom Vector Logo Badge Icon */}
      <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#00A8E8] via-[#00B4F2] to-[#38BDF8] text-white shadow-md shadow-sky-200/60 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 overflow-hidden border border-white/20">
        
        {/* Background Wave Accent Path */}
        <svg
          viewBox="0 0 40 40"
          className="w-full h-full text-white/25 absolute inset-0"
          fill="currentColor"
        >
          <path d="M0 25 C10 15, 20 30, 30 20 C35 15, 38 22, 40 25 L40 40 L0 40 Z" />
        </svg>

        {/* Center Laundry Bubble & Wave SVG Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 text-white relative z-10 drop-shadow-xs"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Washing Machine Tub / Water Wave */}
          <path d="M2 12c3 0 3-2 6-2s3 2 6 2 3-2 6-2" strokeWidth="2" />
          <path d="M2 17c3 0 3-2 6-2s3 2 6 2 3-2 6-2" strokeWidth="2" strokeOpacity="0.75" />
          
          {/* Soap Sparkle Star */}
          <path d="M12 3l1.2 2.8L16 7l-2.8 1.2L12 11l-1.2-2.8L8 7l2.8-1.2z" fill="#FFF4E8" stroke="none" />
          
          {/* Bubble Dots */}
          <circle cx="6" cy="6" r="1.5" fill="#FFF" stroke="none" />
          <circle cx="18" cy="5" r="1" fill="#FFF" stroke="none" />
        </svg>
      </div>

      {/* Brand Text Lockup */}
      {!iconOnly && (
        <div className="flex flex-col justify-center">
          <div className="font-black text-xl sm:text-2xl tracking-tight leading-none flex items-center gap-1.5">
            <span className="text-[#00A8E8]">Beachwood</span>
            <span className="text-[#F97316] font-black">Cleaners</span>
          </div>
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#F97316] pt-0.5">
            & Laundry
          </span>
        </div>
      )}
    </Link>
  );
}
