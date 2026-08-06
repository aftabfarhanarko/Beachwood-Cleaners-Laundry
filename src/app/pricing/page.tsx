"use client";

import React, { useState } from "react";
import { PricingSection } from "@/components/pricing/PricingSection";
import { HomeFaqAccordion } from "@/components/home/HomeFaqAccordion";
import { NewsletterBannerSection } from "@/components/home/NewsletterBannerSection";
import {
  CheckCircle2,
  ShieldCheck,
  Scale,
  Sparkles,
  Droplet,
  Truck,
  Shirt,
  HelpCircle,
  Check
} from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const [pricingTab, setPricingTab] = useState<"individual" | "bundles">("individual");

  const inclusions = [
    {
      title: "Digital Scale Verification",
      desc: "Accurate digital scale weighing with instant itemized digital receipt before washing.",
      icon: Scale,
      badgeBg: "bg-gradient-to-tr from-[#00A8E8] to-[#38BDF8]",
      shadow: "shadow-lg shadow-sky-100/80 hover:shadow-2xl hover:shadow-sky-200/50",
    },
    {
      title: "Hypoallergenic Organic Soap",
      desc: "Non-toxic, biodegradable detergent options gentle on sensitive skin and silk/wool.",
      icon: Sparkles,
      badgeBg: "bg-gradient-to-tr from-emerald-500 to-teal-300",
      shadow: "shadow-lg shadow-emerald-100/80 hover:shadow-2xl hover:shadow-emerald-200/50",
    },
    {
      title: "Targeted Stain Pre-Treatment",
      desc: "Enzyme spot lifting pre-treatment for food, wine, grease, and coffee stains.",
      icon: Droplet,
      badgeBg: "bg-gradient-to-tr from-[#F97316] to-[#FDBA74]",
      shadow: "shadow-lg shadow-orange-100/80 hover:shadow-2xl hover:shadow-orange-200/50",
    },
    {
      title: "Free Doorstep Pickup & Delivery",
      desc: "Daily route driver pickup & delivery across Beachwood Canyon and Los Angeles.",
      icon: Truck,
      badgeBg: "bg-gradient-to-tr from-[#0284C7] to-[#60A5FA]",
      shadow: "shadow-lg shadow-sky-100/80 hover:shadow-2xl hover:shadow-sky-200/50",
    },
    {
      title: "Crisp Folding & Hanger Packaging",
      desc: "Neat rectangular folding for laundry or custom ready-to-wear hanger packaging.",
      icon: Shirt,
      badgeBg: "bg-gradient-to-tr from-purple-500 to-indigo-300",
      shadow: "shadow-lg shadow-purple-100/80 hover:shadow-2xl hover:shadow-purple-200/50",
    },
    {
      title: "100% Satisfaction Free Re-wash",
      desc: "If you're not completely wowed by the freshness, we re-wash your garment for free.",
      icon: ShieldCheck,
      badgeBg: "bg-gradient-to-tr from-amber-500 to-yellow-300",
      shadow: "shadow-lg shadow-amber-100/80 hover:shadow-2xl hover:shadow-amber-200/50",
    },
  ];

  const bundlePlans = [
    {
      title: "Weekly Solo Plan",
      price: "$29.95",
      period: "per week (up to 15 lbs)",
      desc: "Perfect for busy individuals & studio apartment residents.",
      features: [
        "15 lbs regular wash & fold included",
        "Free weekly scheduled doorstep pickup",
        "24-hour express turnaround",
        "Eco-friendly soap & custom folding",
      ],
      badge: "Popular",
    },
    {
      title: "Family Care Plan",
      price: "$69.95",
      period: "per week (up to 40 lbs)",
      desc: "Ideal for families with heavy weekly clothes, towels & bed sheets.",
      features: [
        "40 lbs regular wash & fold included",
        "2 free weekly scheduled doorstep pickups",
        "Free bedding & linen wash inclusion",
        "Priority 24-hour turnaround",
      ],
      badge: "Best Value",
    },
    {
      title: "Commercial & Business",
      price: "Custom",
      period: "per month",
      desc: "Tailored solutions for Airbnb hosts, boutique hotels, spas & salons.",
      features: [
        "High-volume linen & towel laundering",
        "Custom billing & monthly invoicing",
        "Dedicated account manager & route driver",
        "Same-day rush service available",
      ],
      badge: "Commercial",
    },
  ];

  return (
    <div className="space-y-0 overflow-hidden bg-white">
      
      {/* Hero Page Banner */}
      <section className="py-14 sm:py-18 bg-gradient-to-r from-[#EBF7FD] via-[#FAFDFE] to-[#FFF4E8] text-center border-b border-sky-100">
        <div className="max-container space-y-3">
          <span className="inline-block bg-[#EAF7FD] border border-sky-200/60 text-[#00A8E8] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
            Beachwood Pricing Table
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#363C44] tracking-tight">
            Transparent & Simple <span className="text-[#F97316]">Pricing</span>
          </h1>
          <p className="text-[#5B636B] text-xs sm:text-sm font-medium max-w-xl mx-auto leading-relaxed">
            No hidden fees, no surge pricing. Quality garment care at affordable rates for Beachwood Cleaners & Laundry.
          </p>

          {/* Pricing Mode Toggle Switch */}
          <div className="pt-4 flex justify-center">
            <div className="bg-[#EAF7FD] p-1.5 rounded-full border border-sky-200/80 inline-flex items-center gap-1 shadow-inner">
              <button
                onClick={() => setPricingTab("individual")}
                className={`px-5 py-2 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                  pricingTab === "individual"
                    ? "bg-[#00A8E8] text-white shadow-md"
                    : "text-[#2C3238] hover:text-[#00A8E8]"
                }`}
              >
                Individual Garment Rates
              </button>
              <button
                onClick={() => setPricingTab("bundles")}
                className={`px-5 py-2 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                  pricingTab === "bundles"
                    ? "bg-[#F97316] text-white shadow-md"
                    : "text-[#2C3238] hover:text-[#F97316]"
                }`}
              >
                Weekly Subscription Bundles
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Main Pricing View depending on tab */}
      {pricingTab === "individual" ? (
        <PricingSection />
      ) : (
        <section className="py-16 sm:py-24 bg-[#FAFDFE]">
          <div className="max-container space-y-12">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h2 className="text-3xl font-black text-[#363C44]">
                Weekly <span className="text-[#F97316]">Laundry Subscriptions</span>
              </h2>
              <p className="text-[#5B636B] text-sm font-medium">
                Save up to 20% with recurring weekly doorstep pickup plans.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {bundlePlans.map((plan, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-sky-100 shadow-sm hover:shadow-xl transition-all space-y-6 flex flex-col justify-between relative"
                >
                  <div className="space-y-4">
                    <span className="bg-[#EAF7FD] text-[#00A8E8] px-3.5 py-1 rounded-full text-xs font-extrabold">
                      {plan.badge}
                    </span>
                    <h3 className="font-extrabold text-[#2C3238] text-xl">
                      {plan.title}
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-[#00A8E8]">
                        {plan.price}
                      </span>
                      <span className="text-xs font-bold text-[#5B636B]">
                        / {plan.period}
                      </span>
                    </div>
                    <p className="text-xs text-[#5B636B] font-medium leading-relaxed">
                      {plan.desc}
                    </p>
                    <ul className="space-y-2.5 pt-2 border-t border-slate-100">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs font-bold text-[#363C44]">
                          <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center py-3 rounded-full bg-[#00A8E8] text-white hover:bg-[#0094D8] font-bold text-xs shadow-md transition-all"
                  >
                    Subscribe Plan
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Redesigned 6-Card Grid: "Included in Every Beachwood Order" with Unique Shadows & Icons */}
      <section className="py-16 sm:py-24 bg-[#FAFDFE] border-y border-sky-100">
        <div className="max-container space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-block bg-[#EAF7FD] border border-sky-200/60 text-[#00A8E8] px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              Zero Hidden Charges
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#363C44] tracking-tight">
              Included in Every <span className="text-[#F97316]">Beachwood Order</span>
            </h2>
            <p className="text-[#5B636B] text-xs sm:text-sm font-medium">
              We never charge extra for premium fabric care standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {inclusions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`group bg-white rounded-3xl p-7 border border-sky-100/90 transition-all duration-500 hover:-translate-y-2 space-y-4 flex flex-col justify-between ${item.shadow}`}
                >
                  <div className="space-y-4">
                    {/* Floating Gradient Icon Badge */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${item.badgeBg}`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="font-extrabold text-[#2C3238] text-lg sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5B636B] font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center gap-2 text-xs font-bold text-emerald-600">
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>Included Free</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <HomeFaqAccordion />

      {/* Newsletter Banner */}
      <NewsletterBannerSection />

    </div>
  );
}
