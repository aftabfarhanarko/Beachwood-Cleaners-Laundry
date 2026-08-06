"use client";

import React from "react";
import { Award, Shirt, Clock, Star } from "lucide-react";

export function TrustCommunitySection() {
  const stats = [
    {
      id: 1,
      number: "5+",
      label: "Years of Excellence",
      subtext: "Serving Beachwood & LA",
      Icon: Award,
      cardBorder: "border-sky-100 hover:border-[#00A8E8]/40",
      shadowStyle: "shadow-lg shadow-sky-100/80 hover:shadow-2xl hover:shadow-sky-200/50",
      iconBg: "bg-gradient-to-tr from-[#00A8E8] to-[#38BDF8] text-white",
      tagColor: "text-[#00A8E8]",
    },
    {
      id: 2,
      number: "150K+",
      label: "Cleaned Garments",
      subtext: "Wash, fold & dry clean",
      Icon: Shirt,
      cardBorder: "border-sky-100 hover:border-[#00A8E8]/40",
      shadowStyle: "shadow-lg shadow-sky-100/80 hover:shadow-2xl hover:shadow-sky-200/50",
      iconBg: "bg-gradient-to-tr from-[#00A8E8] to-[#00C2FF] text-white",
      tagColor: "text-[#00A8E8]",
    },
    {
      id: 3,
      number: "99.8%",
      label: "On-Time Delivery",
      subtext: "Express 24h turnaround",
      Icon: Clock,
      cardBorder: "border-sky-100 hover:border-[#00A8E8]/40",
      shadowStyle: "shadow-lg shadow-sky-100/80 hover:shadow-2xl hover:shadow-sky-200/50",
      iconBg: "bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] text-white",
      tagColor: "text-[#00A8E8]",
    },
    {
      id: 4,
      number: "4.9 ★",
      label: "Customer Rating",
      subtext: "2,500+ verified reviews",
      Icon: Star,
      cardBorder: "border-orange-100 hover:border-[#F97316]/40",
      shadowStyle: "shadow-lg shadow-orange-100/80 hover:shadow-2xl hover:shadow-orange-200/50",
      iconBg: "bg-gradient-to-tr from-[#F97316] to-[#FDBA74] text-white",
      tagColor: "text-[#F97316]",
    },
  ];

  return (
    <section className="py-12 bg-[#FAFDFE] relative z-20" id="trust-stats">
      <div className="max-container">
        
        {/* 4 Separate Unique Floating Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => {
            const IconComponent = stat.Icon;
            return (
              <div
                key={stat.id}
                className={`group bg-white rounded-3xl p-7 border transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center space-y-4 ${stat.cardBorder} ${stat.shadowStyle}`}
              >
                {/* Floating Gradient Icon Badge */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${stat.iconBg}`}
                >
                  <IconComponent className="w-7 h-7" />
                </div>

                {/* Stat Number */}
                <div className="text-3xl sm:text-4xl font-black text-[#2C3238] tracking-tight">
                  {stat.number}
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-1">
                  <div className="font-extrabold text-sm sm:text-base text-[#363C44]">
                    {stat.label}
                  </div>
                  <div className="text-xs text-[#64748B] font-medium">
                    {stat.subtext}
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
