"use client";

import React from "react";
import { motion } from "framer-motion";
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
    <section className="max-container overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        className="text-center max-w-2xl mx-auto mb-12 space-y-3"
      >
        <span className="text-xs font-bold uppercase tracking-wider text-[#00A8B5]">
          Real Social Proof
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#00223D] tracking-tight">
          Loved By Los Angeles Neighbors
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-[1.6]">
          Read what our clients in Beachwood Canyon, Hollywood Hills, and Los Feliz have to say.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            whileHover={{ y: -6 }}
            className="bg-[#E6F7F9]/50 backdrop-blur-md border border-[#00A8B5]/20 rounded-[1.75rem] p-7 flex flex-col justify-between space-y-5 shadow-sm hover:shadow-xl hover:shadow-[#00A8B5]/10 transition-all duration-200"
          >
            <div className="space-y-3">
              <div className="flex text-[#FFC72C]">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFC72C] stroke-[#FFC72C]" />
                ))}
              </div>
              <p className="text-slate-700 text-sm italic leading-relaxed">"{t.comment}"</p>
            </div>
            <div className="pt-3.5 border-t border-[#00A8B5]/15">
              <p className="font-extrabold text-[#00223D] text-sm">{t.name}</p>
              <p className="text-xs text-slate-500 font-medium">{t.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
