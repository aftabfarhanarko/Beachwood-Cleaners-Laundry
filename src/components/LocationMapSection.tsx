"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Sparkles } from "lucide-react";

export function LocationMapSection() {
  const [selectedLocation, setSelectedLocation] = useState({
    name: "Beachwood, Los Angeles",
    address: "2699 Beachwood Dr",
    city: "Los Angeles, CA 90068 US",
    phone: "+1 (323) 828-7503",
    hours: "Mon-Fri: 8am-6pm | Sat: 9am-5pm",
  });

  const pins = [
    { id: 1, name: "Beachwood Canyon HQ", x: "22%", y: "42%", active: true },
    { id: 2, name: "Hollywood Hills", x: "20%", y: "48%", active: false },
    { id: 3, name: "Los Feliz", x: "28%", y: "45%", active: false },
    { id: 4, name: "Silver Lake", x: "32%", y: "52%", active: false },
    { id: 5, name: "Studio City", x: "18%", y: "38%", active: false },
    { id: 6, name: "Downtown LA", x: "35%", y: "58%", active: false },
    { id: 7, name: "Beverly Hills", x: "15%", y: "54%", active: false },
  ];

  return (
    <section className="relative py-12 sm:py-20 bg-transparent overflow-hidden">
      {/* Background Subtle Grid pattern matching screenshot */}
      <div className="absolute inset-0 bg-[linear-[#f1f5f9]_1px,transparent_1px] bg-[size:32px_32px] opacity-40 pointer-events-none" />

      <div className="max-container relative z-10 space-y-10 sm:space-y-14">
        {/* 1. Centered Header matching screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#00A8B5] bg-[#E6F7F9] px-3 py-1 rounded-full border border-[#00A8B5]/20">
            <Sparkles className="w-3.5 h-3.5" /> Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#00223D] tracking-tight">
            Get in touch with our team
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
            We have the local LA team and know-how to deliver fresh, eco garment care 10x faster.
          </p>
        </motion.div>

        {/* 2. Dotted Vector Map Canvas Container matching screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative w-full h-[420px] sm:h-[520px] rounded-[2.5rem] bg-gradient-to-b from-slate-50/50 via-white to-slate-50/80 border border-slate-200/80 shadow-xs overflow-hidden flex items-center justify-center p-4 sm:p-8"
        >
          {/* Custom SVG Dotted Vector Map Graphic */}
          <div className="relative w-full h-full max-w-5xl flex items-center justify-center">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full object-contain opacity-75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Dotted Map Matrix Pattern (World/LA regional matrix matching screenshot) */}
              <g fill="#94A3B8" opacity="0.45">
                {/* North America Dotted Cluster */}
                <circle cx="150" cy="180" r="3" /><circle cx="170" cy="170" r="3.5" /><circle cx="190" cy="165" r="3" /><circle cx="210" cy="160" r="3.5" /><circle cx="230" cy="160" r="3" /><circle cx="250" cy="165" r="3.5" />
                <circle cx="140" cy="200" r="3.5" /><circle cx="160" cy="195" r="3" /><circle cx="180" cy="190" r="3.5" /><circle cx="200" cy="185" r="3" /><circle cx="220" cy="180" r="3.5" /><circle cx="240" cy="185" r="3" /><circle cx="260" cy="190" r="3.5" /><circle cx="280" cy="195" r="3" />
                <circle cx="130" cy="220" r="3" /><circle cx="150" cy="215" r="3.5" /><circle cx="170" cy="210" r="3" /><circle cx="190" cy="205" r="3.5" /><circle cx="210" cy="200" r="3" /><circle cx="230" cy="205" r="3.5" /><circle cx="250" cy="210" r="3" /><circle cx="270" cy="215" r="3.5" /><circle cx="290" cy="220" r="3" />
                <circle cx="145" cy="240" r="3.5" /><circle cx="165" cy="235" r="3" /><circle cx="185" cy="230" r="3.5" /><circle cx="205" cy="225" r="3" /><circle cx="225" cy="230" r="3.5" /><circle cx="245" cy="235" r="3" /><circle cx="265" cy="240" r="3.5" /><circle cx="285" cy="245" r="3" />
                <circle cx="160" cy="260" r="3" /><circle cx="180" cy="255" r="3.5" /><circle cx="200" cy="250" r="3" /><circle cx="220" cy="255" r="3.5" /><circle cx="240" cy="260" r="3" /><circle cx="260" cy="265" r="3.5" />
                <circle cx="195" cy="280" r="3.5" /><circle cx="215" cy="275" r="3" /><circle cx="235" cy="280" r="3.5" />

                {/* South America Dotted Cluster */}
                <circle cx="310" cy="320" r="3" /><circle cx="330" cy="315" r="3.5" /><circle cx="350" cy="320" r="3" />
                <circle cx="300" cy="340" r="3.5" /><circle cx="320" cy="335" r="3" /><circle cx="340" cy="340" r="3.5" /><circle cx="360" cy="345" r="3" />
                <circle cx="315" cy="365" r="3" /><circle cx="335" cy="360" r="3.5" /><circle cx="355" cy="365" r="3" />
                <circle cx="325" cy="390" r="3.5" /><circle cx="345" cy="385" r="3" />
                <circle cx="335" cy="415" r="3" />

                {/* Europe & Africa Dotted Cluster */}
                <circle cx="480" cy="150" r="3" /><circle cx="500" cy="145" r="3.5" /><circle cx="520" cy="150" r="3" /><circle cx="540" cy="155" r="3.5" /><circle cx="560" cy="150" r="3" />
                <circle cx="470" cy="175" r="3.5" /><circle cx="490" cy="170" r="3" /><circle cx="510" cy="165" r="3.5" /><circle cx="530" cy="170" r="3" /><circle cx="550" cy="175" r="3.5" /><circle cx="570" cy="180" r="3" />
                <circle cx="460" cy="200" r="3" /><circle cx="480" cy="195" r="3.5" /><circle cx="500" cy="190" r="3" /><circle cx="520" cy="195" r="3.5" /><circle cx="540" cy="200" r="3" /><circle cx="560" cy="205" r="3.5" />
                <circle cx="475" cy="225" r="3.5" /><circle cx="495" cy="220" r="3" /><circle cx="515" cy="225" r="3.5" /><circle cx="535" cy="230" r="3" /><circle cx="555" cy="235" r="3.5" />
                <circle cx="490" cy="250" r="3" /><circle cx="510" cy="245" r="3.5" /><circle cx="530" cy="250" r="3" /><circle cx="550" cy="255" r="3.5" /><circle cx="570" cy="260" r="3" />
                <circle cx="505" cy="275" r="3.5" /><circle cx="525" cy="270" r="3" /><circle cx="545" cy="275" r="3.5" /><circle cx="565" cy="280" r="3" />
                <circle cx="515" cy="300" r="3" /><circle cx="535" cy="295" r="3.5" /><circle cx="555" cy="300" r="3" />
                <circle cx="525" cy="325" r="3.5" /><circle cx="545" cy="320" r="3" />

                {/* Asia & Australia Dotted Cluster */}
                <circle cx="620" cy="140" r="3" /><circle cx="640" cy="135" r="3.5" /><circle cx="660" cy="140" r="3" /><circle cx="680" cy="135" r="3.5" /><circle cx="700" cy="140" r="3" /><circle cx="720" cy="145" r="3.5" /><circle cx="740" cy="150" r="3" /><circle cx="760" cy="155" r="3.5" /><circle cx="780" cy="160" r="3" /><circle cx="800" cy="165" r="3.5" /><circle cx="820" cy="170" r="3" />
                <circle cx="610" cy="165" r="3.5" /><circle cx="630" cy="160" r="3" /><circle cx="650" cy="165" r="3.5" /><circle cx="670" cy="160" r="3" /><circle cx="690" cy="165" r="3.5" /><circle cx="710" cy="170" r="3" /><circle cx="730" cy="175" r="3.5" /><circle cx="750" cy="180" r="3" /><circle cx="770" cy="185" r="3.5" /><circle cx="790" cy="190" r="3" /><circle cx="810" cy="195" r="3.5" /><circle cx="830" cy="200" r="3" />
                <circle cx="640" cy="190" r="3" /><circle cx="660" cy="185" r="3.5" /><circle cx="680" cy="190" r="3" /><circle cx="700" cy="195" r="3.5" /><circle cx="720" cy="200" r="3" /><circle cx="740" cy="205" r="3.5" /><circle cx="760" cy="210" r="3" /><circle cx="780" cy="215" r="3.5" /><circle cx="800" cy="220" r="3" />
                <circle cx="670" cy="220" r="3.5" /><circle cx="690" cy="215" r="3" /><circle cx="710" cy="220" r="3.5" /><circle cx="730" cy="225" r="3" /><circle cx="750" cy="230" r="3.5" />
                <circle cx="720" cy="250" r="3" /><circle cx="740" cy="245" r="3.5" /><circle cx="760" cy="250" r="3" /><circle cx="780" cy="255" r="3.5" />

                {/* Australia Dotted Cluster (Highlight Cluster matching bottom right tooltip in screenshot!) */}
                <circle cx="780" cy="350" r="3.5" /><circle cx="800" cy="345" r="3" /><circle cx="820" cy="350" r="3.5" /><circle cx="840" cy="355" r="3" /><circle cx="860" cy="360" r="3.5" />
                <circle cx="770" cy="375" r="3" fill="#00A8B5" /><circle cx="790" cy="370" r="3.5" fill="#00A8B5" /><circle cx="810" cy="375" r="3" fill="#00A8B5" /><circle cx="830" cy="380" r="3.5" fill="#00A8B5" /><circle cx="850" cy="385" r="3" fill="#00A8B5" /><circle cx="870" cy="390" r="3.5" fill="#00A8B5" />
                <circle cx="785" cy="400" r="3.5" fill="#00A8B5" /><circle cx="805" cy="395" r="3" fill="#00A8B5" /><circle cx="825" cy="400" r="3.5" fill="#00A8B5" /><circle cx="845" cy="405" r="3" fill="#00A8B5" /><circle cx="865" cy="410" r="3.5" fill="#00A8B5" />
                <circle cx="815" cy="425" r="3" fill="#00A8B5" /><circle cx="835" cy="420" r="3.5" fill="#00A8B5" /><circle cx="855" cy="425" r="3" fill="#00A8B5" />
              </g>

              {/* Connecting Wave lines */}
              <path d="M 220 200 Q 500 120 830 380" stroke="#00A8B5" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
              <path d="M 220 200 Q 360 250 510 165" stroke="#00A8B5" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3" />
            </svg>

            {/* Interactive Animated Location Pins matching screenshot */}
            {pins.map((pin) => (
              <div
                key={pin.id}
                style={{ left: pin.x, top: pin.y }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
                onClick={() =>
                  setSelectedLocation({
                    name: pin.name,
                    address: pin.id === 1 ? "2699 Beachwood Dr" : `${pin.name} Valet Route`,
                    city: "Los Angeles, CA 90068 US",
                    phone: "+1 (323) 828-7503",
                    hours: "Doorstep Pickup Available",
                  })
                }
              >
                {/* Outer Pulsing Ring */}
                <span className="absolute -inset-2 rounded-full bg-[#00A8B5]/30 animate-ping" />
                {/* Solid Pin Dot matching screenshot */}
                <div className="w-4 h-4 rounded-full bg-[#00A8B5] border-2 border-white shadow-md group-hover:scale-125 transition-transform duration-200 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
              </div>
            ))}

            {/* Bottom Right Floating Dark Tooltip Card (Matching Screenshot Tooltip Card Exactly!) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#00223D] text-white p-5 rounded-2xl border border-[#00A8B5]/30 shadow-2xl space-y-2.5 z-30 max-w-[280px] text-left"
            >
              <div className="space-y-1">
                <h4 className="text-sm font-extrabold text-white tracking-tight flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#00A8B5]" />
                  {selectedLocation.name}
                </h4>
                <p className="text-xs text-slate-300 font-medium leading-tight">
                  {selectedLocation.address}
                </p>
                <p className="text-xs text-slate-400 font-normal leading-tight">
                  {selectedLocation.city}
                </p>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-1 text-xs text-cyan-200">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-[#FFC72C]" />
                  <a href="tel:+13238287503" className="font-bold hover:underline text-[#FFC72C]">
                    {selectedLocation.phone}
                  </a>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-300">
                  <Clock className="w-3 h-3 text-[#00A8B5]" />
                  <span>{selectedLocation.hours}</span>
                </div>
              </div>

              <div className="pt-1">
                <Link
                  href="/contact"
                  className="block w-full text-center py-2 px-3 bg-[#00A8B5] hover:bg-[#0091A4] text-white font-extrabold text-xs rounded-xl shadow-sm transition-all"
                >
                  Schedule Pickup
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
