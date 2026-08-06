"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  ShieldCheck,
  Truck,
  Sparkles,
  Clock,
  DollarSign,
  Award,
  ArrowRight,
  Phone,
  CheckCircle2,
  MapPin,
  Users,
  Recycle,
  BadgeCheck,
  Building2,
  Calculator,
  Shirt,
  Briefcase,
} from "lucide-react";
import { HomeFaqAccordion } from "@/components/HomeFaqAccordion";
import { PodcastStyleFeature } from "@/components/PodcastStyleFeature";

/* ------------------------------------------------------------------ */
/*  PricingCalculator — premium minimal instant price estimator        */
/* ------------------------------------------------------------------ */
/*  PricingCalculator — Modern SaaS Checkout / Order Summary Cart      */
/* ------------------------------------------------------------------ */
function PricingCalculator() {
  const [washWeight, setWashWeight] = useState<number>(15);
  const [shirts, setShirts] = useState<number>(3);
  const [suits, setSuits] = useState<number>(1);
  const [dresses, setDresses] = useState<number>(0);

  const washRate = 2.45;
  const shirtRate = 6.95;
  const suitRate = 22.0;
  const dressRate = 17.0;

  const totalWash = washWeight * washRate;
  const totalShirts = shirts * shirtRate;
  const totalSuits = suits * suitRate;
  const totalDresses = dresses * dressRate;

  const subtotal = totalWash + totalShirts + totalSuits + totalDresses;

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Background Glows */}
      <div className="absolute -top-12 -right-12 w-72 h-72 bg-cyan-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl -z-10" />

      {/* Main SaaS Cart Container */}
      <div className="bg-white rounded-[2.5rem] border border-slate-200/80 shadow-[0_16px_50px_-15px_rgba(0,59,101,0.12)] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Configure Order Items */}
        <div className="lg:col-span-7 p-6 sm:p-9 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-[#00A8B5] flex items-center justify-center font-bold">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-[#00223D] text-lg tracking-tight">
                  Customize Your Order
                </h3>
                <p className="text-xs text-slate-500">Instant real-time price calculator</p>
              </div>
            </div>
            <span className="text-[11px] font-bold px-2.5 py-1 bg-cyan-50 text-[#0091A4] rounded-full border border-cyan-100">
              Live Estimator
            </span>
          </div>

          <div className="space-y-5">
            {/* Wash & Fold Slider Card */}
            <div className="p-4 sm:p-5 bg-slate-50/80 rounded-2xl border border-slate-200/60 space-y-3">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="font-bold text-[#00223D] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#00A8B5]" /> Wash & Fold Laundry
                </span>
                <span className="text-[#00A8B5] font-extrabold">${totalWash.toFixed(2)}</span>
              </div>

              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-black text-[#00223D]">
                  {washWeight} <span className="text-xs font-semibold text-slate-400">lbs</span>
                </span>
                <span className="text-[11px] text-slate-400 font-medium">$2.45 / lb</span>
              </div>

              <input
                type="range"
                min="10"
                max="50"
                step="1"
                value={washWeight}
                onChange={(e) => setWashWeight(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-full appearance-none cursor-pointer accent-[#00A8B5]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
                <span>10 lbs Min ($24.50)</span>
                <span>25 lbs Avg Bag</span>
                <span>50 lbs Large</span>
              </div>
            </div>

            {/* Individual Item Selectors */}
            <div className="space-y-2.5">
              {/* Shirts */}
              <div className="p-3.5 bg-slate-50/60 rounded-xl border border-slate-200/60 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Shirt className="w-4 h-4 text-slate-500" />
                  <div>
                    <span className="text-xs font-bold text-[#00223D] block">Laundered Shirts</span>
                    <span className="text-[10px] text-slate-400">$6.95 / shirt</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setShirts(Math.max(0, shirts - 1))}
                    className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-600 font-bold text-xs hover:border-[#00A8B5] transition-colors cursor-pointer"
                  >
                    –
                  </button>
                  <span className="text-sm font-black text-[#00223D] w-4 text-center tabular-nums">
                    {shirts}
                  </span>
                  <button
                    onClick={() => setShirts(shirts + 1)}
                    className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-600 font-bold text-xs hover:border-[#00A8B5] transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Suits */}
              <div className="p-3.5 bg-slate-50/60 rounded-xl border border-slate-200/60 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Briefcase className="w-4 h-4 text-slate-500" />
                  <div>
                    <span className="text-xs font-bold text-[#00223D] block">Two-Piece Suits</span>
                    <span className="text-[10px] text-slate-400">$22.00 / suit</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSuits(Math.max(0, suits - 1))}
                    className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-600 font-bold text-xs hover:border-[#00A8B5] transition-colors cursor-pointer"
                  >
                    –
                  </button>
                  <span className="text-sm font-black text-[#00223D] w-4 text-center tabular-nums">
                    {suits}
                  </span>
                  <button
                    onClick={() => setSuits(suits + 1)}
                    className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-600 font-bold text-xs hover:border-[#00A8B5] transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Dresses */}
              <div className="p-3.5 bg-slate-50/60 rounded-xl border border-slate-200/60 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-slate-500" />
                  <div>
                    <span className="text-xs font-bold text-[#00223D] block">Dry Clean Dresses</span>
                    <span className="text-[10px] text-slate-400">$17.00 / dress</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setDresses(Math.max(0, dresses - 1))}
                    className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-600 font-bold text-xs hover:border-[#00A8B5] transition-colors cursor-pointer"
                  >
                    –
                  </button>
                  <span className="text-sm font-black text-[#00223D] w-4 text-center tabular-nums">
                    {dresses}
                  </span>
                  <button
                    onClick={() => setDresses(dresses + 1)}
                    className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-600 font-bold text-xs hover:border-[#00A8B5] transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: SaaS Checkout Summary Cart Panel */}
        <div className="lg:col-span-5 bg-gradient-to-b from-[#003B65] to-[#00223D] text-white p-6 sm:p-9 flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs uppercase tracking-widest font-bold text-cyan-200">
                Order Summary
              </span>
              <span className="text-[10px] font-extrabold bg-[#FFC72C] text-slate-950 px-2 py-0.5 rounded-full">
                LA Doorstep Care
              </span>
            </div>

            {/* Itemized Line Items Breakdown */}
            <div className="space-y-3 text-xs text-cyan-100/90 font-medium">
              <div className="flex justify-between items-center">
                <span>Wash & Fold ({washWeight} lbs)</span>
                <span className="font-bold text-white">${totalWash.toFixed(2)}</span>
              </div>
              {shirts > 0 && (
                <div className="flex justify-between items-center">
                  <span>Shirts ({shirts}x @ $6.95)</span>
                  <span className="font-bold text-white">${totalShirts.toFixed(2)}</span>
                </div>
              )}
              {suits > 0 && (
                <div className="flex justify-between items-center">
                  <span>Suits ({suits}x @ $22.00)</span>
                  <span className="font-bold text-white">${totalSuits.toFixed(2)}</span>
                </div>
              )}
              {dresses > 0 && (
                <div className="flex justify-between items-center">
                  <span>Dresses ({dresses}x @ $17.00)</span>
                  <span className="font-bold text-white">${totalDresses.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between items-center text-emerald-300">
                <span>Doorstep Pickup & Delivery</span>
                <span className="font-bold uppercase text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded-md border border-emerald-400/30">
                  FREE
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/15 flex justify-between items-baseline">
              <span className="text-xs uppercase tracking-wider font-semibold text-cyan-200">
                Estimated Total
              </span>
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                ${subtotal.toFixed(2)}
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <a
              href="/contact"
              className="w-full py-4 bg-[#00A8B5] hover:bg-[#0091A4] text-white font-extrabold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-150 active:scale-[0.98] text-sm flex items-center justify-center gap-2"
            >
              Checkout & Schedule Pickup <ArrowRight className="w-4 h-4" />
            </a>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-cyan-200/80 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FFC72C]" />
              No credit card required to calculate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  ServiceTabs — Modern SaaS Product Style Tab Switcher               */
/* ------------------------------------------------------------------ */
function ServiceTabs() {
  const [activeTab, setActiveTab] = useState<"wash" | "dry" | "shirts" | "commercial">("wash");

  const services = [
    {
      id: "wash",
      name: "Wash & Fold",
      tagline: "$2.45 / lb",
      icon: Sparkles,
      badge: "Everyday Laundry",
      title: "Effortless Everyday Laundry ($2.45 / lb)",
      desc: "We wash, dry, and neatly fold your everyday clothes, towels, and bed linens using hypoallergenic eco-detergents.",
      priceDisplay: "$2.45",
      priceUnit: "/ lb (15 lbs minimum)",
      features: [
        "Color-separated washing cycles",
        "Hypoallergenic & scent-free options",
        "Neatly folded & ready to wear",
        "24-48 hour guaranteed return",
      ],
      ctaText: "Schedule Wash & Fold",
      ctaLink: "/contact",
    },
    {
      id: "dry",
      name: "Dry Cleaning",
      tagline: "Suits & Dresses",
      icon: Briefcase,
      badge: "Organic & Non-Toxic",
      title: "Executive Dry Cleaning & Pressing",
      desc: "Gentle organic solvent cleaning for suits, silk dresses, coats, and formalwear with expert hand-press finishing.",
      priceDisplay: "$22.00",
      priceUnit: "Suits ($17.00 Dresses)",
      features: [
        "100% PERC-free organic process",
        "Hand pre-treatment for tough stains",
        "Custom protective garment covers",
        "Executive steam press finish",
      ],
      ctaText: "Book Dry Cleaning",
      ctaLink: "/contact",
    },
    {
      id: "shirts",
      name: "Laundered Shirts",
      tagline: "$6.95 / shirt",
      icon: Shirt,
      badge: "Crisp Finish",
      title: "Hand-Pressed Dress Shirts ($6.95 / ea)",
      desc: "Washed with specialized collar cleaners and hand-pressed with your choice of light, medium, or heavy starch.",
      priceDisplay: "$6.95",
      priceUnit: "/ shirt (on hangers)",
      features: [
        "Choice of starch intensity",
        "Collar & cuff detail pressing",
        "Free button inspection & repair",
        "Returned crisp on heavy hangers",
      ],
      ctaText: "Book Shirt Pressing",
      ctaLink: "/contact",
    },
    {
      id: "commercial",
      name: "B2B & Airbnb",
      tagline: "Custom Volume",
      icon: Building2,
      badge: "Commercial Business",
      title: "Commercial & Airbnb Turnover Cleaning",
      desc: "Reliable, high-capacity linen and garment service tailored for Airbnb hosts, boutique hotels, spas, and gyms.",
      priceDisplay: "Volume",
      priceUnit: "Custom B2B Tier Rates",
      features: [
        "Dedicated pickup driver & schedule",
        "Itemized monthly billing statement",
        "Fast 24-hour turnaround for turnover",
        "High-temp sanitizing towel & sheet wash",
      ],
      ctaText: "Inquire Commercial Rates",
      ctaLink: "tel:+13238287503",
    },
  ];

  const currentService = services.find((s) => s.id === activeTab) || services[0];

  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      {/* SaaS Product Navigation Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 bg-slate-100/90 p-2 rounded-3xl border border-slate-200/80 shadow-xs">
        {services.map((service) => {
          const Icon = service.icon;
          const isActive = activeTab === service.id;
          return (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id as any)}
              className="relative p-3.5 sm:p-4 rounded-2xl transition-all cursor-pointer text-left flex items-center gap-3.5 group"
            >
              {isActive && (
                <motion.div
                  layoutId="activeSaaSIndicator"
                  className="absolute inset-0 bg-white rounded-2xl shadow-sm border border-slate-200/60 -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  isActive
                    ? "bg-[#003B65] text-white"
                    : "bg-slate-200/60 text-slate-600 group-hover:bg-slate-200"
                }`}
              >
                <Icon className="w-5 h-5" strokeWidth={2} />
              </div>
              <div className="leading-tight overflow-hidden">
                <span
                  className={`block text-xs sm:text-sm font-bold truncate ${
                    isActive ? "text-[#00223D]" : "text-slate-700"
                  }`}
                >
                  {service.name}
                </span>
                <span
                  className={`text-[11px] font-medium block truncate ${
                    isActive ? "text-[#00A8B5]" : "text-slate-400"
                  }`}
                >
                  {service.tagline}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* SaaS Active Feature Showcase Panel */}
      <div className="bg-white rounded-[2.5rem] p-7 sm:p-10 border border-slate-200/80 shadow-[0_12px_45px_-15px_rgba(0,59,101,0.08)] overflow-hidden min-h-[380px] relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-50/60 rounded-full blur-3xl -z-0" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Left Column: Feature Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-[#0091A4] border border-cyan-100 text-xs font-bold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-[#00A8B5]" />
                {currentService.badge}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#00223D] tracking-tight">
                {currentService.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-[1.6]">
                {currentService.desc}
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentService.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#00A8B5] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Pricing & Action Card */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-50 to-slate-100/80 p-7 rounded-3xl border border-slate-200/80 text-center space-y-5 shadow-xs flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-widest font-bold text-slate-400">
                  Standard Rate
                </span>
                <div className="text-4xl sm:text-5xl font-black text-[#00223D] tracking-tight">
                  {currentService.priceDisplay}
                </div>
                <p className="text-xs font-medium text-slate-500">{currentService.priceUnit}</p>
              </div>

              <div className="py-3 px-4 bg-white rounded-xl border border-slate-200/60 text-xs text-slate-600 font-medium">
                ✨ Includes free doorstep pickup & delivery on orders over $35
              </div>

              {currentService.ctaLink.startsWith("tel:") ? (
                <a
                  href={currentService.ctaLink}
                  className="w-full py-4 bg-[#00A8B5] hover:bg-[#0091A4] text-white font-extrabold rounded-2xl shadow-md hover:shadow-lg transition-all duration-150 active:scale-[0.98] text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" /> {currentService.ctaText}
                </a>
              ) : (
                <Link
                  href={currentService.ctaLink}
                  className="w-full py-4 bg-[#00A8B5] hover:bg-[#0091A4] text-white font-extrabold rounded-2xl shadow-md hover:shadow-lg transition-all duration-150 active:scale-[0.98] text-sm flex items-center justify-center gap-2"
                >
                  {currentService.ctaText} <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Home Page                                                          */
/* ------------------------------------------------------------------ */
export default function Home() {
  const valueProps = [
    {
      icon: Clock,
      title: "24-48 Hour Turnaround",
      desc: "Fast, reliable express processing so you never run out of clean clothes.",
    },
    {
      icon: Sparkles,
      title: "100% Eco-Friendly Detergents",
      badge: "Eco Teal #0091A4",
      desc: "PERC-free, hypoallergenic solvents safe for sensitive skin & nature.",
    },
    {
      icon: DollarSign,
      title: "Transparent Per-Pound Pricing",
      desc: "$2.45/lb wash & fold with zero hidden service fees or surprise charges.",
    },
    {
      icon: ShieldCheck,
      title: "Professional Stain Removal",
      desc: "Master garment technicians pre-treat spots with specialized European techniques.",
    },
    {
      icon: Truck,
      title: "Free Doorstep Pickup & Delivery",
      desc: "We collect and return your laundry right to your front door anywhere in LA.",
    },
    {
      icon: Award,
      title: "Garment Protection Guarantee",
      desc: "100% satisfaction guarantee. If it's not perfect, we re-clean it free.",
    },
  ];

  const trustStats = [
    {
      icon: Building2,
      value: "2017",
      label: "Locally Owned Since",
      desc: "Proudly serving the Beachwood Canyon community for years.",
    },
    {
      icon: Star,
      value: "4.9★",
      label: "250+ Verified Reviews",
      desc: "Rated top laundry & dry cleaning service across Google & Yelp.",
    },
    {
      icon: Users,
      value: "10 mi",
      label: "Neighborhoods Covered",
      desc: "Free doorstep service across Hollywood, Los Feliz & Silver Lake.",
    },
    {
      icon: Recycle,
      value: "100%",
      label: "PERC-Free Process",
      desc: "Every order cleaned with non-toxic, environmentally safe solvents.",
    },
  ];

  const trustBadges = [
    { icon: ShieldCheck, label: "Fully Insured & Bonded" },
    { icon: BadgeCheck, label: "Locally Owned & Operated" },
    { icon: Recycle, label: "Eco-Certified Solvents" },
    { icon: Award, label: "Satisfaction Guaranteed" },
  ];

  const faqs = [
    {
      q: "What is your minimum weight for Wash & Fold pickup?",
      a: "Our standard minimum order for free doorstep pickup and delivery is 15 lbs ($36.75). Orders under 15 lbs are welcome but will be charged at the 15 lb minimum rate.",
    },
    {
      q: "What is your standard turnaround time?",
      a: "Our standard turnaround time is 24 to 48 hours. Express same-day service is available for orders picked up before 9:00 AM.",
    },
    {
      q: "How do you handle delicate items or special wash preferences?",
      a: "You can specify temperature settings, hypoallergenic detergents, and hang-dry requests in your order notes. Delicates are washed separately in protective mesh bags.",
    },
    {
      q: "Which areas in Los Angeles do you service for doorstep pickup?",
      a: "We service Beachwood Canyon, Hollywood, Hollywood Hills, Los Feliz, Silver Lake, Hancock Park, and surrounding Los Angeles neighborhoods within a 10-mile radius of 2699 Beachwood Dr.",
    },
    {
      q: "Are your dry cleaning solvents safe for delicate fabrics and the environment?",
      a: "Yes! We use 100% organic, toxic-free, PERC-free solvents that leave zero chemical odor while protecting silk, wool, cashmere, and fine garments.",
    },
  ];

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
    <div className="space-y-20 pb-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#003B65]/10 via-slate-50 to-white pt-10 pb-16 lg:pt-16 lg:pb-24">
        <div className="max-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Box */}
          <div className="lg:col-span-7 space-y-6" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50/70 backdrop-blur-md text-[#003B65] border border-cyan-100 text-xs sm:text-sm font-bold tracking-wide shadow-xs">
              <Sparkles className="w-4 h-4 text-[#00A8B5]" />
              #1 Rated Laundry & Dry Cleaning in Los Angeles
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-bold text-[#00223D] tracking-tight leading-[1.1]">
              Professional Garment Care <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003B65] via-[#00A8B5] to-[#0091A4]">
                Delivered To Your Doorstep
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-[1.6] max-w-2xl">
              Top-rated wash, fold, and dry cleaning service in Beachwood & Los Angeles. Free pickup & delivery.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-white bg-[#00A8B5] hover:bg-[#0091A4] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-150 active:scale-98"
              >
                Schedule Pickup <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-slate-800 bg-white/80 backdrop-blur-md hover:bg-slate-100 border border-slate-200 rounded-2xl transition-all duration-150"
              >
                View Rates ($2.45/lb)
              </Link>
            </div>

            {/* Micro Trust Bullets */}
            <div className="pt-4 flex flex-wrap gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-slate-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00A8B5]" /> Free Pickup & Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00A8B5]" /> 100% Non-Toxic & PERC-Free
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00A8B5]" /> Same-Day Service Available
              </span>
            </div>
          </div>

          {/* Right Hero Box - Graphic Card with Floating Glass Badge */}
          <div className="lg:col-span-5 relative" data-aos="fade-up" data-aos-delay="100">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-cyan-300/30 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-amber-300/30 rounded-full blur-3xl -z-10" />

              <div className="bg-gradient-to-tr from-[#003B65] via-[#005B94] to-[#00A8B5] rounded-3xl p-6 text-white shadow-2xl space-y-6 relative overflow-hidden border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest font-bold text-cyan-100">
                    Beachwood Express Care
                  </span>
                  <span className="bg-[#FFC72C] text-slate-950 text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-xs">
                    Free Delivery
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Fresh Clothes, Zero Hassle.</h3>
                  <p className="text-sm text-cyan-100 leading-snug">
                    Schedule online in 60 seconds. Our professional drivers handle the rest.
                  </p>
                </div>

                {/* Floating Glass Badge */}
                <div className="glass-card p-4 flex items-center gap-3 text-slate-900 border-white/30">
                  <div className="w-12 h-12 rounded-xl bg-[#FFC72C] flex items-center justify-center text-slate-950 font-black text-xl shrink-0 shadow-xs">
                    4.9★
                  </div>
                  <div>
                    <div className="flex text-[#FFC72C]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#FFC72C] stroke-[#FFC72C]" />
                      ))}
                    </div>
                    <p className="text-xs font-bold text-[#00223D] mt-0.5">★ 4.9 Rating (250+ LA Reviews)</p>
                    <p className="text-[11px] text-slate-500">Top-Rated LA Garment Service</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs text-cyan-100">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#FFC72C]" /> 2699 Beachwood Dr, LA
                  </span>
                  <a href="tel:+13238287503" className="font-bold text-[#FFC72C] hover:underline">
                    +1 (323) 828-7503
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overlapping Podcast-Style Feature Component */}
      <PodcastStyleFeature />
      <section className="max-container" data-aos="fade-up">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#00A8B5]">
            Why Beachwood Cleaners
          </h2>
          <p className="text-2xl lg:text-[36px] font-semibold text-[#00223D] tracking-tight">
            Designed For Modern Los Angeles Living
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-[1.6]">
            We combine eco-friendly dry cleaning technology with effortless doorstep pickup so you can focus on what matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 flex flex-col justify-between"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#00A8B5] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    {item.badge && (
                      <span className="text-[11px] font-bold px-2.5 py-1 bg-cyan-50 text-[#0091A4] rounded-full border border-cyan-200">
                        100% Eco
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-[#00223D]">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-[1.6]">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust & Community Impact — white glass section */}
      <section className="max-container" data-aos="fade-up">
        <div className="relative rounded-[2rem] bg-white overflow-hidden border border-slate-100 shadow-sm">
          {/* Ambient glass glows */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-cyan-200/25 rounded-full blur-3xl -z-0" />
          <div className="absolute -bottom-24 -right-16 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl -z-0" />

          <div className="relative z-10 p-8 sm:p-12 lg:p-14 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50/80 backdrop-blur-sm text-[#0091A4] text-xs font-bold uppercase tracking-wider border border-cyan-100">
                <ShieldCheck className="w-3.5 h-3.5" /> Trusted Local Business
              </span>
              <p className="text-2xl lg:text-[36px] font-semibold text-[#00223D] tracking-tight">
                Serving Los Angeles Since 2017
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-[1.6]">
                A neighborhood business built on reliability, transparency, and care for both your garments and the environment.
              </p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {trustStats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="glass-card p-5 sm:p-6 text-center flex flex-col items-center gap-2"
                    data-aos="fade-up"
                    data-aos-delay={idx * 75}
                  >
                    <div className="w-11 h-11 rounded-xl bg-cyan-50 text-[#00A8B5] flex items-center justify-center mb-1">
                      <Icon className="w-5 h-5" />
                    </div>
                    <p className="text-2xl sm:text-3xl font-black text-[#00223D] tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-[#0091A4]">{stat.label}</p>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-[1.5]">{stat.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Trust Badge Strip */}
            <div className="pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {trustBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/70 backdrop-blur-md border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 shadow-xs"
                  >
                    <Icon className="w-4 h-4 text-[#00A8B5]" />
                    {badge.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Overview — light, premium section */}
      <section className="bg-white py-16 border-y border-slate-100" data-aos="fade-up">
        <div className="max-container space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00A8B5]">
              Our Core Services
            </span>
            <h2 className="text-2xl lg:text-[36px] font-semibold tracking-tight text-[#00223D]">
              Garment Care Specialized For Every Fabric
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-[1.6]">
              Select a service below to preview pricing and standard turnaround times.
            </p>
          </div>

          <ServiceTabs />
        </div>
      </section>

      {/* Transparent Pricing Preview Calculator */}
      <section className="max-container" data-aos="fade-up">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00A8B5]">
            No Hidden Fees
          </span>
          <h2 className="text-2xl lg:text-[36px] font-semibold text-[#00223D] tracking-tight">
            Calculate Your Order Estimate
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-[1.6]">
            Adjust the sliders and quantities below for instant cost transparency before scheduling your pickup.
          </p>
        </div>
        <PricingCalculator />
      </section>

      {/* How It Works (4-Step Workflow) */}
      <section className="bg-cyan-50/40 py-16 border-y border-cyan-100/60" data-aos="fade-up">
        <div className="max-container space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00A8B5]">
              Seamless Workflow
            </span>
            <h2 className="text-2xl lg:text-[36px] font-semibold text-[#00223D] tracking-tight">
              4 Simple Steps To Fresh Laundry
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-[1.6]">
              How our white-glove pickup and delivery process works from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 relative" data-aos="fade-up" data-aos-delay="0">
              <div className="w-10 h-10 rounded-xl bg-[#003B65] text-white font-bold flex items-center justify-center text-lg mb-4">
                1
              </div>
              <h3 className="font-bold text-[#00223D] text-lg mb-2">Step 1: Schedule Online or Call</h3>
              <p className="text-slate-600 text-sm leading-[1.6]">
                Choose your pickup window online or call +1 (323) 828-7503 in under 60 seconds.
              </p>
            </div>

            <div className="glass-card p-6 relative" data-aos="fade-up" data-aos-delay="100">
              <div className="w-10 h-10 rounded-xl bg-[#00A8B5] text-white font-bold flex items-center justify-center text-lg mb-4">
                2
              </div>
              <h3 className="font-bold text-[#00223D] text-lg mb-2">Step 2: We Collect Your Items</h3>
              <p className="text-slate-600 text-sm leading-[1.6]">
                Our friendly local driver picks up your laundry bag right from your front doorstep.
              </p>
            </div>

            <div className="glass-card p-6 relative" data-aos="fade-up" data-aos-delay="200">
              <div className="w-10 h-10 rounded-xl bg-[#0091A4] text-white font-bold flex items-center justify-center text-lg mb-4">
                3
              </div>
              <h3 className="font-bold text-[#00223D] text-lg mb-2">Step 3: Eco Cleaning & Pressing</h3>
              <p className="text-slate-600 text-sm leading-[1.6]">
                Garments undergo non-toxic solvent processing, stain removal, and precise folding.
              </p>
            </div>

            <div className="glass-card p-6 relative" data-aos="fade-up" data-aos-delay="300">
              <div className="w-10 h-10 rounded-xl bg-[#FFC72C] text-slate-950 font-bold flex items-center justify-center text-lg mb-4">
                4
              </div>
              <h3 className="font-bold text-[#00223D] text-lg mb-2">Step 4: Fresh Delivery to Your Door</h3>
              <p className="text-slate-600 text-sm leading-[1.6]">
                Crisp, fresh garments returned to your door within 24-48 hours in protective covers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews & Trust Badges */}
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

      {/* Interactive Google Map & Location Details */}
      <section className="max-container" data-aos="fade-up">
        <div className="glass-card overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-lg">
          <div className="lg:col-span-5 p-8 lg:p-10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="bg-cyan-100/70 text-[#003B65] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-cyan-200">
                Store Location
              </span>
              <h3 className="text-2xl font-semibold text-[#00223D]">
                Visit Our Beachwood Canyon Counter
              </h3>
              <p className="text-sm text-slate-600 leading-[1.6]">
                Prefer to drop off in person? Drop by our store situated right on Beachwood Dr in Los Angeles.
              </p>

              <div className="space-y-3 pt-2 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#00A8B5] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#00223D]">Address:</strong>
                    2699 Beachwood Dr, Los Angeles, CA 90068
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#FFC72C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#00223D]">Direct Call / Text:</strong>
                    <a href="tel:+13238287503" className="text-[#00A8B5] font-bold hover:underline">
                      +1 (323) 828-7503
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#0091A4] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#00223D]">Operating Hours:</strong>
                    Mon-Fri: 8:00 AM – 6:00 PM | Sat: 9:00 AM – 5:00 PM
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#003B65] hover:bg-[#00223D] text-white font-bold rounded-xl text-sm transition-all"
              >
                Request Pickup Service Instead
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 h-[360px] lg:h-auto bg-slate-100 relative min-h-[300px]">
            <iframe
              title="Beachwood Cleaners Location Map"
              src="https://maps.google.com/maps?q=2699%20Beachwood%20Dr,%20Los%20Angeles,%20CA%2090068&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-container max-w-4xl" data-aos="fade-up">
        <div className="text-center mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00A8B5]">
            Got Questions?
          </span>
          <h2 className="text-2xl lg:text-[36px] font-semibold text-[#00223D]">Frequently Asked Questions</h2>
        </div>

        <HomeFaqAccordion faqs={faqs} />
      </section>

      {/* High-Conversion Banner CTA */}
      <section className="max-container" data-aos="fade-up">
        <div className="bg-gradient-to-r from-[#003B65] via-[#00A8B5] to-[#00223D] rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 shadow-2xl relative overflow-hidden border border-white/10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight max-w-2xl mx-auto leading-tight">
            Ready For Fresh Clothes Without The Effort?
          </h2>
          <p className="text-cyan-100 text-base sm:text-lg max-w-xl mx-auto leading-[1.6]">
            Book your pickup online in under 60 seconds or call our LA team directly at +1 (323) 828-7503.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-[#FFC72C] hover:bg-amber-400 text-slate-950 font-extrabold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-150 text-base"
            >
              Schedule Pickup Now
            </Link>
            <a
              href="tel:+13238287503"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-2xl transition-all text-base flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#FFC72C]" /> Call +1 (323) 828-7503
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}