"use client";

import React, { useEffect, useRef, useState } from "react";
import { Award, Shirt, Clock, Star } from "lucide-react";

/* ---------------------------------------------------
   Scroll-reveal hook — RE-TRIGGERS on every scroll pass,
   whether scrolling top→bottom or bottom→top. Leaving the
   viewport resets state so it replays next time it enters.
--------------------------------------------------- */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ---------------------------------------------------
   Count-up for the stat number (handles "5+", "150K+",
   "99.8%", "4.9 ★" style mixed strings). Resets to zero
   when out of view so it replays cleanly each time.
--------------------------------------------------- */
function useCountUp(target: string, start: boolean, duration = 1400) {
  const zeroed = React.useMemo(() => {
    const match = target.match(/[\d.]+/);
    return match ? target.replace(match[0], "0") : target;
  }, [target]);

  const [display, setDisplay] = useState<string>(zeroed);

  useEffect(() => {
    if (!start) {
      setDisplay(zeroed);
      return;
    }

    const match = target.match(/[\d.]+/);
    if (!match) {
      setDisplay(target);
      return;
    }

    const numStr = match[0];
    const endValue = parseFloat(numStr);
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
    const prefix = target.slice(0, match.index);
    const suffix = target.slice((match.index ?? 0) + numStr.length);

    let startTime: number | null = null;
    let rafId: number;

    const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = easeOutExpo(progress);
      const current = (endValue * eased).toFixed(decimals);
      setDisplay(`${prefix}${current}${suffix}`);
      if (progress < 1) rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [start, target, duration, zeroed]);

  return display;
}

/* ---------------------------------------------------
   Individual animated stat card
--------------------------------------------------- */
function StatCard({
  stat,
  index,
}: {
  stat: {
    id: number;
    number: string;
    label: string;
    subtext: string;
    Icon: React.ElementType;
    cardBorder: string;
    shadowStyle: string;
    iconBg: string;
    tagColor: string;
  };
  index: number;
}) {
  const { ref, inView } = useInView();
  const countValue = useCountUp(stat.number, inView, 1200 + index * 100);
  const IconComponent = stat.Icon;

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: inView ? `${index * 120}ms` : "0ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`group bg-white rounded-3xl p-7 border transition-all duration-700 hover:-translate-y-2 flex flex-col items-center text-center space-y-4 ${
        stat.cardBorder
      } ${stat.shadowStyle} ${
        inView
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-12 scale-95"
      }`}
    >
      {/* Floating Gradient Icon Badge */}
      <div
        style={{
          transitionDelay: inView ? `${index * 120 + 150}ms` : "0ms",
        }}
        className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
          stat.iconBg
        } ${inView ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-12"}`}
      >
        <IconComponent className="w-7 h-7" />
      </div>

      {/* Stat Number — count-up */}
      <div className="text-3xl sm:text-4xl font-black text-[#2C3238] tracking-tight tabular-nums">
        {countValue}
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
}

/* ---------------------------------------------------
   Section
--------------------------------------------------- */

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 