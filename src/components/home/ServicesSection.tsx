"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

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

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)"; // premium "settle-in" easing

function Reveal({
  children,
  className = "",
  delay = 0,
  from = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  from?: "up" | "scale";
}) {
  const { ref, inView } = useInView();

  const hidden = from === "up" ? "opacity-0 translate-y-10" : "opacity-0 scale-90";

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: inView ? `${delay}ms` : "0ms",
        transitionTimingFunction: EASE,
      }}
      className={`transition-all duration-700 will-change-transform ${
        inView ? "opacity-100 translate-y-0 scale-100" : hidden
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------------------------------------------------
   SVG Icon Stickers
--------------------------------------------------- */
function WashFoldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10a2 2 0 002 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" />
      <path d="M12 2v6" />
    </svg>
  );
}

function DryCleaningIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 00-3 3v1.17a3 3 0 001 2.23l2 1.6 2-1.6a3 3 0 001-2.23V5a3 3 0 00-3-3z" />
      <path d="M4 11l8-4 8 4" />
      <path d="M6 10v10a2 2 0 002 2h8a2 2 0 002-2V10" />
      <line x1="12" y1="13" x2="12" y2="18" />
    </svg>
  );
}

function IronClothesIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 17h18a2 2 0 002-2v-4a7 7 0 00-7-7H7a5 5 0 00-5 5v8z" />
      <path d="M6 8h10" />
    </svg>
  );
}

function StainRemovalIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10a2 2 0 002 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" />
      <circle cx="12" cy="14" r="2.5" fill="#F97316" stroke="none" />
    </svg>
  );
}

function SewingMachineIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="17" width="18" height="3" rx="1" />
      <path d="M19 17V8a2 2 0 00-2-2H9a2 2 0 00-2 2v4" />
      <line x1="9" y1="12" x2="9" y2="17" />
      <circle cx="17" cy="9" r="1.5" />
    </svg>
  );
}

function BeddingIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="18" height="5" rx="2" />
      <rect x="3" y="13" width="18" height="5" rx="2" />
      <line x1="5" y1="20" x2="19" y2="20" />
    </svg>
  );
}

/* ---------------------------------------------------
   Individual animated service card
--------------------------------------------------- */
function ServiceCard({
  service,
  index,
}: {
  service: {
    id: number;
    title: string;
    linkText: string;
    image: string;
    Icon: React.ElementType;
  };
  index: number;
}) {
  const { ref, inView } = useInView();
  const IconComponent = service.Icon;

  const col = index % 3;
  const row = Math.floor(index / 3);
  const delay = row * 150 + col * 120;

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: inView ? `${delay}ms` : "0ms",
        transitionTimingFunction: EASE,
      }}
      className={`group relative rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-700 bg-white border border-sky-100 hover:-translate-y-1 ${
        inView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
      }`}
    >
      {/* Image Container */}
      <div className="relative h-[250px] sm:h-[270px] w-full overflow-hidden bg-slate-100">
        <img
          src={service.image}
          alt={service.title}
          className={`w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 ${
            inView ? "scale-100" : "scale-110"
          }`}
          style={{ transitionTimingFunction: EASE }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>

      {/* Floating Light Blue Card Tag Overlay — slides up with its own delay */}
      <div
        style={{
          transitionDelay: inView ? `${delay + 200}ms` : "0ms",
          transitionTimingFunction: EASE,
        }}
        className={`absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-[85%] bg-[#DDF2FF] border border-sky-200/60 rounded-2xl p-3 shadow-md flex items-center gap-3 backdrop-blur-xs transition-all duration-700 group-hover:scale-102 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* White Circle Icon Badge */}
        <div
          style={{
            transitionDelay: inView ? `${delay + 350}ms` : "0ms",
            transitionTimingFunction: EASE,
          }}
          className={`w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-xs shrink-0 border border-sky-100 transition-all duration-500 group-hover:rotate-6 ${
            inView ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-12"
          }`}
        >
          <IconComponent />
        </div>

        {/* Title & Orange Link */}
        <div className="space-y-0.5">
          <h3 className="font-bold text-[#2C3238] text-base sm:text-lg leading-tight">
            {service.title}
          </h3>
          <a
            href="/services"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#F97316] hover:underline"
          >
            <span>{service.linkText}</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------
   Section
--------------------------------------------------- */

export function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Wash and Fold",
      linkText: "View Details",
      image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=600&auto=format&fit=crop&q=80",
      Icon: WashFoldIcon,
    },
    {
      id: 2,
      title: "Dry Cleaning",
      linkText: "View Details",
      image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=600&auto=format&fit=crop&q=80",
      Icon: DryCleaningIcon,
    },
    {
      id: 3,
      title: "Iron Clothes",
      linkText: "View Details",
      image: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=600&auto=format&fit=crop&q=80",
      Icon: IronClothesIcon,
    },
    {
      id: 4,
      title: "Stain Removal",
      linkText: "View Details",
      image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&auto=format&fit=crop&q=80",
      Icon: StainRemovalIcon,
    },
    {
      id: 5,
      title: "Clothe Sewing",
      linkText: "View Details",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&auto=format&fit=crop&q=80",
      Icon: SewingMachineIcon,
    },
    {
      id: 6,
      title: "Bedding Cleaning",
      linkText: "View Details",
      image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&auto=format&fit=crop&q=80",
      Icon: BeddingIcon,
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-[#F8FCFF]" id="services">
      <div className="max-container space-y-8">
        {/* Section Header */}
        <Reveal from="up" className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#363C44] tracking-tight leading-tight">
            We are here to make our customers <br />
            smile with <span className="text-[#F97316]">our services</span>
          </h2>
        </Reveal>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}