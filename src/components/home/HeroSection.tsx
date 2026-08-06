"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Play, Star } from "lucide-react";

/* ---------------------------------------------------
   Scroll-reveal hook — RE-TRIGGERS on every scroll pass
   (top→bottom OR bottom→top). Element leaving the
   viewport resets it so it replays next time it enters.
--------------------------------------------------- */
function useInView(threshold = 0.1) {
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

function Reveal({
  children,
  className = "",
  delay = 0,
  from = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  from?: "up" | "left" | "right" | "scale";
}) {
  const { ref, inView } = useInView();

  const hidden =
    from === "up"
      ? "opacity-0 translate-y-8"
      : from === "left"
      ? "opacity-0 -translate-x-8"
      : from === "right"
      ? "opacity-0 translate-x-8"
      : "opacity-0 scale-75";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        inView ? "opacity-100 translate-y-0 translate-x-0 scale-100" : hidden
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------------------------------------------------
   5 Cartoon Vector Stickers (Responsive Size)
--------------------------------------------------- */

function PickupTruckSticker() {
  return (
    <div className="w-14 h-14 sm:w-24 sm:h-24 bg-[#FDE5D4] rounded-2xl sm:rounded-3xl shadow-lg p-1.5 sm:p-2.5 flex flex-col items-center justify-center border border-[#FAD2B8] hover:scale-110 hover:shadow-xl transition-all duration-300 shrink-0 cursor-pointer">
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <text x="20" y="23" fill="#F97316" fontSize="9" fontWeight="900" fontFamily="sans-serif">
          FREE PICKUP
        </text>
        <path d="M25 45 L58 45 L68 55 L82 55 L82 72 L25 72 Z" fill="#38BDF8" stroke="#0284C7" strokeWidth="2" />
        <rect x="58" y="50" width="12" height="10" fill="#E0F2FE" />
        <circle cx="38" cy="72" r="7" fill="#334155" />
        <circle cx="38" cy="72" r="3" fill="#94A3B8" />
        <circle cx="72" cy="72" r="7" fill="#334155" />
        <circle cx="72" cy="72" r="3" fill="#94A3B8" />
        <path d="M12 50 C18 42, 22 42, 28 50" stroke="#F97316" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

function IroningSticker() {
  return (
    <div className="w-14 h-14 sm:w-24 sm:h-24 bg-[#FDE5D4] rounded-2xl sm:rounded-3xl shadow-lg p-1.5 sm:p-2.5 flex flex-col items-center justify-center border border-[#FAD2B8] hover:scale-110 hover:shadow-xl transition-all duration-300 shrink-0 cursor-pointer">
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <rect x="42" y="68" width="48" height="10" rx="3" fill="#0284C7" />
        <rect x="44" y="57" width="44" height="10" rx="3" fill="#F97316" />
        <rect x="46" y="46" width="40" height="10" rx="3" fill="#2DD4BF" />
        <path d="M60 46 L66 40 L72 46 Z" fill="white" />
        <g transform="translate(10, 25) rotate(-15)">
          <path d="M5 35 L40 35 C48 35, 52 25, 42 15 L15 15 C8 15, 5 22, 5 35 Z" fill="#0284C7" />
          <path d="M35 15 C38 8, 20 8, 12 15" stroke="#F97316" strokeWidth="3" fill="none" />
        </g>
      </svg>
    </div>
  );
}

function DryCleanSticker() {
  return (
    <div className="w-14 h-14 sm:w-24 sm:h-24 bg-[#FDE5D4] rounded-2xl sm:rounded-3xl shadow-lg p-1.5 sm:p-2.5 flex flex-col items-center justify-center border border-[#FAD2B8] hover:scale-110 hover:shadow-xl transition-all duration-300 shrink-0 cursor-pointer">
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <text x="22" y="23" fill="#F97316" fontSize="9" fontWeight="900" fontFamily="sans-serif">
          DRY CLEAN
        </text>
        <path d="M50 30 C50 24, 42 24, 44 28 L50 35 L72 50 L28 50 Z" stroke="#0284C7" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 50 L42 45 L50 52 L58 45 L68 50 L66 78 L34 78 Z" fill="#38BDF8" />
        <polygon points="50,52 46,65 50,70 54,65" fill="#F97316" />
        <path d="M72 34 L74 28 L76 34 L82 36 L76 38 L74 44 L72 38 L66 36 Z" fill="#F97316" />
      </svg>
    </div>
  );
}

function EcoCleanSticker() {
  return (
    <div className="w-14 h-14 sm:w-24 sm:h-24 bg-[#FDE5D4] rounded-2xl sm:rounded-3xl shadow-lg p-1.5 sm:p-2.5 flex flex-col items-center justify-center border border-[#FAD2B8] hover:scale-110 hover:shadow-xl transition-all duration-300 shrink-0 cursor-pointer">
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <text x="22" y="23" fill="#F97316" fontSize="9" fontWeight="900" fontFamily="sans-serif">
          ECO CLEAN
        </text>
        <rect x="36" y="52" width="28" height="34" rx="5" fill="#2DD4BF" stroke="#0D9488" strokeWidth="2" />
        <path d="M46 52 L46 42 L56 42 L56 52 Z" fill="#F8FAFC" />
        <path d="M56 44 L68 44 L66 48 L56 48 Z" fill="#F97316" />
        <circle cx="74" cy="42" r="2" fill="#38BDF8" />
        <circle cx="78" cy="46" r="3" fill="#38BDF8" />
        <path d="M50 62 C46 62, 44 68, 50 74 C56 68, 54 62, 50 62 Z" fill="#F97316" />
      </svg>
    </div>
  );
}

function WashingMachineSticker() {
  return (
    <div className="w-14 h-14 sm:w-24 sm:h-24 bg-[#FDE5D4] rounded-2xl sm:rounded-3xl shadow-lg p-1.5 sm:p-2.5 flex flex-col items-center justify-center border border-[#FAD2B8] hover:scale-110 hover:shadow-xl transition-all duration-300 shrink-0 cursor-pointer">
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <text x="18" y="23" fill="#F97316" fontSize="9" fontWeight="900" fontFamily="sans-serif">
          SMART WASH
        </text>
        <rect x="18" y="32" width="46" height="52" rx="6" fill="#38BDF8" stroke="#0284C7" strokeWidth="2.5" />
        <rect x="22" y="36" width="38" height="10" rx="3" fill="#E0F2FE" />
        <circle cx="28" cy="41" r="2.5" fill="#F97316" />
        <circle cx="36" cy="41" r="2" fill="#0284C7" />
        <circle cx="44" cy="41" r="2" fill="#0284C7" />
        <circle cx="41" cy="62" r="14" fill="#F0F9FF" stroke="#0284C7" strokeWidth="2.5" />
        <circle cx="41" cy="62" r="10" fill="#7DD3FC" opacity="0.85" />
        <circle cx="44" cy="59" r="3" fill="white" opacity="0.7" />
      </svg>
    </div>
  );
}

export function HeroSection() {
  const orbitingStickers = [
    { id: 1, StickerComponent: PickupTruckSticker, x: 0, y: -245, mobX: 0, mobY: -135 },
    { id: 2, StickerComponent: IroningSticker, x: 235, y: -75, mobX: 128, mobY: -42 },
    { id: 3, StickerComponent: DryCleanSticker, x: 145, y: 195, mobX: 79, mobY: 109 },
    { id: 4, StickerComponent: EcoCleanSticker, x: -145, y: 195, mobX: -79, mobY: 109 },
    { id: 5, StickerComponent: WashingMachineSticker, x: -235, y: -75, mobX: -128, mobY: -42 },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#EAF7FD] via-[#FAFDFE] to-[#FFF4E8] py-8 sm:py-12 lg:py-14">
      <div className="max-container grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">

        {/* Left Column Text Content */}
        <Reveal from="up" className="lg:col-span-6 space-y-6 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-black text-[#2D3339] tracking-tight leading-[1.12]">
              Simplify Your Life <br />
              with <span className="text-[#00A8E8]">Beachwood</span> <br />
              <span className="relative inline-block text-[#F97316] pb-2">
                Laundry Service
                <svg
                  className="absolute -bottom-1 left-0 w-full h-4 text-[#F97316]"
                  viewBox="0 0 280 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 10C85 2 195 -1 277 10" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-[#5B636B] text-base sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              For over 5 years, we have been dedicated to providing exceptional customer service and top quality dry cleaning and laundry services.
            </p>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2">
            <a href="/contact" className="inline-flex items-center gap-3 group cursor-pointer">
              <div className="w-11 h-11 rounded-2xl bg-[#00A8E8] group-hover:bg-[#0094D8] flex items-center justify-center text-white shadow-md shadow-sky-200 transition-all group-hover:scale-105">
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-sm font-extrabold text-[#00A8E8] group-hover:text-[#0094D8] transition-colors">
                Get Started
              </span>
            </a>

            <div className="flex items-center gap-3">
              <button
                onClick={() => alert("Watch Beachwood Laundry Video Overview")}
                className="w-11 h-11 rounded-full bg-[#F97316] hover:bg-[#EA580C] flex items-center justify-center text-white shadow-md shadow-orange-200 transition-all hover:scale-105 cursor-pointer"
                aria-label="Play Video"
              >
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </button>

              <svg className="w-16 h-8 text-[#F97316]/70 hidden sm:block pointer-events-none" viewBox="0 0 100 50" fill="none">
                <path d="M10 15 Q 50 40 85 25" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" fill="none" />
                <path d="M80 32 L 87 24 L 78 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Customer Reviews Row */}
          <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <div className="flex -space-x-2">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Reviewer 1" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xs" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Reviewer 2" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xs" />
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80" alt="Reviewer 3" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xs" />
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" alt="Reviewer 4" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xs" />
            </div>

            <div className="text-left space-y-0.5">
              <div className="flex items-center gap-1.5 text-amber-500 text-xs font-black">
                <span>4.8</span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-xs font-semibold text-slate-500">150k Total Reviews</p>
            </div>
          </div>
        </Reveal>

        {/* Right Column: Central Laundry SVG & Responsive Orbiting 5 Badges */}
        <Reveal from="up" delay={100} className="lg:col-span-6 relative flex items-center justify-center min-h-[360px] sm:min-h-[580px]">

          <div className="relative w-[300px] h-[300px] sm:w-[520px] sm:h-[520px] flex items-center justify-center group">

            <svg className="absolute inset-0 w-full h-full text-sky-200 pointer-events-none" viewBox="0 0 520 520">
              <circle cx="260" cy="260" r="245" className="hidden sm:block" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
              <circle cx="260" cy="260" r="150" className="block sm:hidden" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
            </svg>

            <div className="relative w-[180px] h-[180px] sm:w-[290px] sm:h-[290px] z-10 flex items-center justify-center transition-all duration-500 group-hover:scale-105">
              <img
                src="/laundry_hero.svg"
                alt="Beachwood Laundry Service Graphic"
                className="w-full h-full object-contain filter drop-shadow-xl"
              />
            </div>

            {orbitingStickers.map((item, index) => {
              const StickerComp = item.StickerComponent;
              return (
                <Reveal
                  key={item.id}
                  from="scale"
                  delay={150 + index * 80}
                  className="absolute z-20 transition-all duration-300 pointer-events-auto"
                >
                  <div
                    style={{
                      "--x": `${item.x}px`,
                      "--y": `${item.y}px`,
                      "--mob-x": `${item.mobX}px`,
                      "--mob-y": `${item.mobY}px`,
                    } as React.CSSProperties}
                    className="translate-x-[var(--mob-x)] translate-y-[var(--mob-y)] sm:translate-x-[var(--x)] sm:translate-y-[var(--y)] transition-transform duration-300"
                  >
                    <StickerComp />
                  </div>
                </Reveal>
              );
            })}

          </div>
        </Reveal>

      </div>
    </section>
  );
}