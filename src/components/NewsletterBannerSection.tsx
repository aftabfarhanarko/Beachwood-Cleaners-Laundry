"use client";

import React, { useState } from "react";

export function NewsletterBannerSection() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing to QuickFold Laundry newsletter!");
  };

  return (
    <section className="w-full bg-white overflow-hidden" id="newsletter">
      {/* Full Width Edge-to-Edge Container with 400px Height */}
      <div className="w-full relative bg-[#00A8E8] text-white grid grid-cols-1 lg:grid-cols-12 h-auto lg:h-[400px] min-h-[400px]">
        
        {/* Left Side: Guaranteed Laundry Graphic with Curved Orange Border */}
        <div className="lg:col-span-5 relative bg-[#EBF7FD] flex items-center justify-center p-8 h-[280px] lg:h-[400px] overflow-hidden">
          <img
            src="/laundry_newsletter.svg"
            alt="QuickFold Laundry Washing Machine Graphic"
            className="w-full h-[260px] sm:h-[300px] object-contain hover:scale-105 transition-transform duration-500"
          />

          {/* Curved Orange Divider Stroke (Desktop) */}
          <div className="hidden lg:block absolute inset-y-0 -right-1 w-28 pointer-events-none">
            <svg className="w-full h-full text-[#00A8E8]" viewBox="0 0 100 500" preserveAspectRatio="none">
              <path d="M0 0 C 70 150, 70 350, 0 500 L 100 500 L 100 0 Z" fill="currentColor" />
              <path d="M0 0 C 70 150, 70 350, 0 500" fill="none" stroke="#F97316" strokeWidth="8" />
            </svg>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6 relative z-10">
          
          {/* Floating 3D Soap Bubbles at Bottom Right */}
          <div className="absolute bottom-4 right-8 sm:bottom-8 sm:right-16 pointer-events-none opacity-80">
            <svg className="w-24 h-24 sm:w-36 sm:h-36" viewBox="0 0 100 100" fill="none">
              <circle cx="70" cy="70" r="22" fill="#38BDF8" opacity="0.35" stroke="white" strokeWidth="1.5" />
              <circle cx="74" cy="66" r="6" fill="white" opacity="0.6" />
              <circle cx="45" cy="85" r="12" fill="#38BDF8" opacity="0.3" stroke="white" strokeWidth="1" />
              <circle cx="85" cy="45" r="10" fill="#38BDF8" opacity="0.25" stroke="white" strokeWidth="1" />
            </svg>
          </div>

          <div className="space-y-3 max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-white tracking-tight leading-tight">
              Join Our Newsletter
            </h2>
            <p className="text-[#E0F2FE] text-sm sm:text-base font-medium leading-relaxed">
              Subscribe for news, promos, and laundry tips. Get exclusive offers in your inbox. Do not miss updates.
            </p>
          </div>

          {/* Subscribe Action Button */}
          <form onSubmit={handleSubscribe} className="pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-9 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-[#F97316] hover:bg-[#EA580C] transition-all hover:scale-105 cursor-pointer"
            >
              Subscribe Now
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
