"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

export function TestimonialsSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    [
      {
        id: 1,
        category: "Service Quality",
        name: "Esther Miles",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
        quote:
          "I can't thank QuickFold enough for their impeccable service. My clothes have never looked better, and the convenience of pickup and delivery is unbeatable!",
      },
      {
        id: 2,
        category: "Service Quality",
        name: "Kristin Cooper",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
        quote:
          "I've been using QuickFold for months now, and I'm consistently impressed by their attention to detail and commitment to customer satisfaction.",
      },
    ],
    [
      {
        id: 3,
        category: "Service Quality",
        name: "Marcus Vance",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
        quote:
          "The doorstep collection and delivery save me hours every single week! Clothes are always crisply folded and returned smelling super fresh.",
      },
      {
        id: 4,
        category: "Service Quality",
        name: "Sophia Chen",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        quote:
          "Best dry cleaning service in town! My delicate silk blouses and wool coats come back restored looking brand new every time.",
      },
    ],
    [
      {
        id: 5,
        category: "Service Quality",
        name: "David Miller",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
        quote:
          "Fast 24-hour turnaround and eco-friendly soap options. Very impressed with the quality and friendly customer support team.",
      },
      {
        id: 6,
        category: "Service Quality",
        name: "Emily Watson",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
        quote:
          "Customer service is top-notch and pricing is completely transparent. 10/10 recommended to anyone looking for hassle-free laundry!",
      },
    ],
  ];

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-[#00A8E8] text-white relative overflow-hidden" id="testimonials">
      
      {/* Translucent World Map Vector Background Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-15 flex items-center justify-center">
        <svg className="w-full h-full max-w-6xl" viewBox="0 0 1000 500" fill="none">
          <path d="M150 150 C 200 100, 300 120, 350 180 C 400 220, 250 300, 200 280 C 150 250, 100 200, 150 150 Z" fill="white" opacity="0.4" />
          <path d="M600 120 C 700 80, 850 100, 900 180 C 950 240, 800 320, 700 300 C 620 280, 550 200, 600 120 Z" fill="white" opacity="0.4" />
          <path d="M450 250 C 500 220, 580 240, 600 280 C 620 320, 520 380, 480 350 Z" fill="white" opacity="0.3" />
        </svg>
      </div>

      <div className="max-container space-y-12 relative z-10">
        
        {/* Title matching exact screenshot */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white tracking-tight">
            Our Customers <span className="text-[#F97316]">Feedback</span>
          </h2>
        </div>

        {/* Dynamic Sliding Testimonial Cards Container */}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8">
          
          {/* Left Arrow Button matching reference screenshot */}
          <button
            onClick={handlePrev}
            className="absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform z-20 cursor-pointer group"
            aria-label="Previous Testimonials"
          >
            <ArrowLeft className="w-5 h-5 stroke-[2.5] text-[#F97316] group-hover:scale-110 transition-transform" />
          </button>

          {/* Right Arrow Button matching reference screenshot */}
          <button
            onClick={handleNext}
            className="absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform z-20 cursor-pointer group"
            aria-label="Next Testimonials"
          >
            <ArrowRight className="w-5 h-5 stroke-[2.5] text-[#F97316] group-hover:scale-110 transition-transform" />
          </button>

          {/* Sliding Cards Carousel Container */}
          <div className="overflow-hidden py-2">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((pair, pairIdx) => (
                <div
                  key={pairIdx}
                  className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8 px-1"
                >
                  {pair.map((item) => (
                    <div
                      key={item.id}
                      className="bg-[#13618C] rounded-3xl p-7 sm:p-8 shadow-xl text-white space-y-6 flex flex-col justify-between border border-white/10 hover:border-white/20 transition-all"
                    >
                      <div className="space-y-4">
                        {/* Category Tag */}
                        <span className="text-xs font-bold text-[#F97316] uppercase tracking-wide">
                          {item.category}
                        </span>

                        {/* Quote */}
                        <p className="text-white/95 text-sm sm:text-base leading-relaxed font-medium min-h-[72px]">
                          &ldquo;{item.quote}&rdquo;
                        </p>
                      </div>

                      {/* Bottom Row: User Avatar + Name + Stars & Orange Double Quote Mark */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        
                        {/* Left: Avatar + Name + 5 Stars */}
                        <div className="flex items-center gap-3.5">
                          <img
                            src={item.avatar}
                            alt={item.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-white/80 shadow-xs"
                          />
                          <div className="space-y-1">
                            <h4 className="font-extrabold text-white text-base sm:text-lg leading-none">
                              {item.name}
                            </h4>
                            {/* 5 Stars */}
                            <div className="flex items-center gap-0.5 text-[#F97316]">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3.5 h-3.5 fill-[#F97316] stroke-none" />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right: Orange Double Quotation Mark Icon */}
                        <div className="text-[#F97316] text-4xl sm:text-5xl font-black font-serif leading-none select-none opacity-90">
                          &rdquo;&rdquo;
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Interactive Pagination Dots matching screenshot */}
        <div className="flex justify-center items-center gap-2.5 pt-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`transition-all duration-300 cursor-pointer ${
                activeSlide === idx
                  ? "w-3.5 h-3.5 rounded-full bg-[#F97316] scale-110 shadow-sm"
                  : "w-2.5 h-2.5 rounded-full bg-white/80 hover:bg-white"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
