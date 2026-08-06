"use client";

import React, { useState } from "react";
import { MapPin, Phone, Clock, Navigation, Mail, Search, Car, Truck, Zap } from "lucide-react";

interface LocationMapSectionProps {
  showHeading?: boolean;
}

export function LocationMapSection({ showHeading = true }: LocationMapSectionProps) {
  const [zipInput, setZipInput] = useState("");
  const [zipResult, setZipResult] = useState<string | null>(null);

  const neighborhoods = [
    { name: "Beachwood Canyon", zip: "90068", time: "Morning & Afternoon" },
    { name: "Hollywood Hills", zip: "90028", time: "Daily 8am - 6pm" },
    { name: "Franklin Village", zip: "90027", time: "Daily 8am - 6pm" },
    { name: "Los Feliz", zip: "90027", time: "Daily Morning" },
    { name: "Silver Lake", zip: "90026", time: "Daily Afternoon" },
    { name: "Burbank", zip: "91501", time: "Mon, Wed, Fri" },
    { name: "Glendale", zip: "91201", time: "Tue, Thu, Sat" },
    { name: "Studio City", zip: "91604", time: "Mon, Wed, Fri" },
  ];

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipInput.trim()) return;
    const match = neighborhoods.find(
      (item) => item.zip === zipInput.trim() || item.name.toLowerCase().includes(zipInput.toLowerCase())
    );
    if (match) {
      setZipResult(`✅ Free Doorstep Pickup is ACTIVE in ${match.name} (${match.zip})!`);
    } else {
      setZipResult(`✨ Pickup is available! Call +1 (323) 828-7503 to confirm your route.`);
    }
  };

  return (
    <section className="py-10 sm:py-14 bg-[#FAFDFE]" id="location">
      <div className="max-container space-y-8">
        
        {/* Optional Section Header (Only rendered when showHeading is true) */}
        {showHeading && (
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-block bg-[#EAF7FD] border border-sky-200/60 text-[#00A8E8] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
              Beachwood Storefront & Map
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#363C44] tracking-tight">
              Find Us in <span className="text-[#F97316]">Los Angeles</span>
            </h2>
            <p className="text-[#5B636B] text-sm font-medium">
              Visit our storefront on Beachwood Drive or schedule free daily doorstep pickup across LA.
            </p>
          </div>
        )}

        {/* Shadow-Free Full-Width Map Container with Floating Glassmorphism Storefront Overlay */}
        <div className="relative w-full h-[500px] sm:h-[540px] rounded-3xl overflow-hidden border border-sky-100/90 bg-slate-100">
          
          {/* Full Width Google Maps Embed */}
          <iframe
            title="Beachwood Cleaners Full Width Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.4938639207436!2d-118.32431692348507!3d34.11320491410188!2m3!1f0!0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf485e9fa651%3A0x6b42b65ecb90e6a8!2s2699%20Beachwood%20Dr%2C%20Los%20Angeles%2C%20CA%2090068!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Top Right "Open Now" Status Badge */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 bg-white px-4 py-2 rounded-full border border-sky-100 text-xs font-black text-[#2C3238] flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
            <span>Store Open Now (Until 8 PM)</span>
          </div>

          {/* Floating Clean Storefront Info Card (Shadow Free, Clean Border) */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 max-w-sm w-[calc(100%-2rem)] sm:w-full bg-white rounded-3xl p-6 sm:p-7 border border-sky-100/90 space-y-5 text-[#2C3238]">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="bg-[#EAF7FD] text-[#00A8E8] px-3 py-0.5 rounded-full text-[11px] font-extrabold uppercase">
                  Primary Location
                </span>
                <span className="text-xs font-bold text-[#F97316]">Beachwood Canyon</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-[#2C3238]">
                Beachwood Cleaners
              </h3>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm font-semibold">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#EAF7FD] text-[#00A8E8] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Address</p>
                  <p className="font-extrabold text-xs sm:text-sm leading-snug">
                    2699 Beachwood Dr, Los Angeles, CA 90068
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#EAF7FD] text-[#00A8E8] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Direct Phone</p>
                  <p className="font-extrabold text-xs sm:text-sm">+1 (323) 828-7503</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#FFF4E8] text-[#F97316] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Hours</p>
                  <p className="font-medium text-xs">Mon - Sat: 7am - 8pm | Sun: 9am - 5pm</p>
                </div>
              </div>
            </div>

            {/* Bottom Action Buttons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://maps.google.com/?q=2699+Beachwood+Dr,+Los+Angeles,+CA+90068"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white font-extrabold text-xs transition-all cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
              <a
                href="tel:+13238287503"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-[#00A8E8] hover:bg-[#0094D8] text-white font-extrabold text-xs transition-all cursor-pointer"
              >
                Call
              </a>
            </div>
          </div>

        </div>

        {/* Clean Shadow-Free Interactive Pickup ZIP Code Checker Widget */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-sky-100/90 space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-black text-[#363C44]">
              Check Doorstep Pickup in <span className="text-[#F97316]">Your Area</span>
            </h3>
            <p className="text-[#5B636B] text-xs sm:text-sm font-medium">
              Enter your LA ZIP code or neighborhood name below to verify instant pickup schedule.
            </p>
          </div>

          <form onSubmit={handleZipCheck} className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Enter ZIP code (e.g. 90068) or Neighborhood..."
                value={zipInput}
                onChange={(e) => setZipInput(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full bg-[#FAFDFE] border border-sky-200 text-slate-800 placeholder:text-slate-400 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#00A8E8]"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#00A8E8] hover:bg-[#0094D8] text-white font-extrabold text-xs sm:text-sm shrink-0 cursor-pointer"
            >
              Check Availability
            </button>
          </form>

          {zipResult && (
            <div className="p-4 rounded-2xl bg-[#EAF7FD] border border-sky-200 text-center font-bold text-xs sm:text-sm text-[#00A8E8] animate-fadeIn">
              {zipResult}
            </div>
          )}
        </div>

        {/* 3 Drop-off & Pickup Option Feature Cards (Clean Shadow-Free) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-7 border border-sky-100/90 space-y-3 text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF7FD] text-[#00A8E8] mx-auto flex items-center justify-center">
              <Truck className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-[#2C3238] text-lg">Doorstep Pickup Van</h4>
            <p className="text-xs text-[#5B636B] font-medium leading-relaxed">
              Route drivers collect laundry directly from your front door in waterproof laundry bags.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-sky-100/90 space-y-3 text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF4E8] text-[#F97316] mx-auto flex items-center justify-center">
              <Car className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-[#2C3238] text-lg">Curbside Car Hop</h4>
            <p className="text-xs text-[#5B636B] font-medium leading-relaxed">
              Pull up outside 2699 Beachwood Dr and our staff will unload your laundry straight from your trunk.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-sky-100/90 space-y-3 text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF7FD] text-[#00A8E8] mx-auto flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-[#2C3238] text-lg">Express Counter Drop</h4>
            <p className="text-xs text-[#5B636B] font-medium leading-relaxed">
              In-and-out storefront counter drop-off in under 60 seconds with instant digital receipt.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
