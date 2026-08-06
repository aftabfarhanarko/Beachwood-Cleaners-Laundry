"use client";

import React from "react";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Marcus Sterling",
      location: "Beachwood Canyon, LA",
      comment: "Beachwood Cleaners is a game changer! My suit jackets look immaculate and their $2.45/lb wash and fold delivery saves me 4 hours every week.",
      rating: 5,
    },
    {
      name: "Elena Rostova",
      location: "Hollywood Hills",
      comment: "Hands down the best eco-friendly dry cleaners in Los Angeles. No nasty chemical smell on my dresses and their pickup driver is super punctual.",
      rating: 5,
    },
    {
      name: "David Vance",
      location: "Los Feliz",
      comment: "Super transparent pricing, crisp shirt pressing, and great customer service. I love supporting local Beachwood Dr businesses!",
      rating: 5,
    },
  ];

  return (
    <section className="max-container" data-aos="fade-up">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#FFC72C]">
          Real Social Proof
        </span>
        <h2 className="text-2xl lg:text-[36px] font-semibold text-[#00223D] tracking-tight">
          Loved By Los Angeles Neighbors
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-[1.6]">
          Read what our clients in Beachwood Canyon, Hollywood Hills, and Los Feliz have to say.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="glass-card p-6 flex flex-col justify-between space-y-4"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div className="space-y-3">
              <div className="flex text-[#FFC72C]">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFC72C] stroke-[#FFC72C]" />
                ))}
              </div>
              <p className="text-slate-700 text-sm italic leading-[1.6]">"{t.comment}"</p>
            </div>
            <div className="pt-3 border-t border-slate-100">
              <p className="font-bold text-[#00223D] text-sm">{t.name}</p>
              <p className="text-xs text-slate-500">{t.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
