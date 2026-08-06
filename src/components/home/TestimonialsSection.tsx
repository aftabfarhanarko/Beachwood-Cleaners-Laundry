"use client";

import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export function TestimonialsSection() {
  const row1 = [
    {
      id: 1,
      name: "Esther Miles",
      role: "Beachwood Canyon Resident",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
      quote:
        "I can't thank Beachwood Cleaners enough for their impeccable service. My clothes have never looked better, and the doorstep delivery is unbeatable!",
    },
    {
      id: 2,
      name: "Kristin Cooper",
      role: "Hollywood Hills",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      quote:
        "I've been using Beachwood for months now, and I'm consistently impressed by their attention to detail and organic eco-friendly soap care.",
    },
    {
      id: 3,
      name: "Fenian Umrah",
      role: "Franklin Village",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      quote:
        "The doorstep pickup van is a lifesaver for our studio apartment. 24-hour turnaround every single time without delay!",
    },
    {
      id: 4,
      name: "Sk Lincoln",
      role: "Los Feliz",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      quote:
        "Amazing dry cleaning quality. My wool suits look fresh off the rack without any chemical odor.",
    },
    {
      id: 5,
      name: "Miah Rasel",
      role: "Silver Lake",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
      quote:
        "Their per-pound wash & fold at $2.45/lb is top notch. Neatly folded, crisp, and smelling organic fresh.",
    },
  ];

  const row2 = [
    {
      id: 6,
      name: "M-Martly",
      role: "Glendale",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
      quote:
        "Very professional steam iron pressing. Saves me 2 hours every week on work dress shirts and trousers!",
    },
    {
      id: 7,
      name: "Konok Shrabon",
      role: "Burbank Resident",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
      quote:
        "Professional, friendly route drivers, and timely delivery. Easily the best laundromat service in Los Angeles.",
    },
    {
      id: 8,
      name: "Mavoza",
      role: "Studio City",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
      quote:
        "Great wash quality and stain treatment. A stubborn red wine stain on my white silk shirt vanished completely!",
    },
    {
      id: 9,
      name: "Sophia Reed",
      role: "Beachwood Local",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
      quote:
        "Eco-friendly organic detergent options are fantastic for my toddler's sensitive skin. 100% recommended!",
    },
    {
      id: 10,
      name: "Daniel Hayes",
      role: "Hollywood Hills",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
      quote:
        "Transparent scale pricing with digital receipt before wash. No surprise charges ever. Exceptional business!",
    },
  ];

  const marqueeRow1 = [...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2];

  return (
    <section className="py-10 sm:py-14 bg-[#FAFDFE] overflow-hidden" id="testimonials">
      <div className="space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto px-4 space-y-3">
          <span className="inline-block bg-[#EAF7FD] border border-sky-200/60 text-[#00A8E8] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
            Verified Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#363C44] tracking-tight">
            Our Customers <span className="text-[#F97316]">Feedback</span>
          </h2>
          <p className="text-[#5B636B] text-sm sm:text-base font-medium">
            See what Beachwood Canyon & Los Angeles residents say about our 24-hour laundry care.
          </p>
        </div>

        {/* 2-Row Infinite Marquee Container */}
        <div className="space-y-6 relative">
          
          {/* Edge Fade Gradients */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#FAFDFE] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#FAFDFE] to-transparent z-10 pointer-events-none" />

          {/* Row 1: Right to Left Infinite Slider */}
          <div className="overflow-hidden w-full">
            <div className="animate-marquee-left gap-6">
              {marqueeRow1.map((item, idx) => (
                <div
                  key={`r1-${item.id}-${idx}`}
                  className="group relative w-[340px] sm:w-[380px] shrink-0 bg-white rounded-3xl p-6 border border-sky-100/90 shadow-xs hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 space-y-4 flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Gradient Stripe Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A8E8] via-[#00C2FF] to-[#F97316]" />

                  {/* Watermark Quote Icon */}
                  <Quote className="absolute top-4 right-4 w-10 h-10 text-sky-100/60 pointer-events-none group-hover:text-[#F97316]/20 transition-colors" />

                  <div className="space-y-3 relative z-10">
                    {/* Top Row: Stars + Verified Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3 stroke-[2.5]" /> Verified Customer
                      </span>
                    </div>

                    {/* Quote */}
                    <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed italic">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Author Footer */}
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100 relative z-10">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-[#00A8E8] shadow-xs group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <h4 className="font-extrabold text-[#2C3238] text-sm">{item.name}</h4>
                      <p className="text-[11px] font-bold text-[#F97316]">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Left to Right Infinite Slider */}
          <div className="overflow-hidden w-full">
            <div className="animate-marquee-right gap-6">
              {marqueeRow2.map((item, idx) => (
                <div
                  key={`r2-${item.id}-${idx}`}
                  className="group relative w-[340px] sm:w-[380px] shrink-0 bg-white rounded-3xl p-6 border border-sky-100/90 shadow-xs hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 space-y-4 flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Gradient Stripe Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F97316] via-[#00C2FF] to-[#00A8E8]" />

                  {/* Watermark Quote Icon */}
                  <Quote className="absolute top-4 right-4 w-10 h-10 text-sky-100/60 pointer-events-none group-hover:text-[#00A8E8]/20 transition-colors" />

                  <div className="space-y-3 relative z-10">
                    {/* Top Row: Stars + Verified Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3 stroke-[2.5]" /> Verified Customer
                      </span>
                    </div>

                    {/* Quote */}
                    <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed italic">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Author Footer */}
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100 relative z-10">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-[#00A8E8] shadow-xs group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <h4 className="font-extrabold text-[#2C3238] text-sm">{item.name}</h4>
                      <p className="text-[11px] font-bold text-[#F97316]">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
