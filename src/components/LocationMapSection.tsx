"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

export function LocationMapSection() {
  return (
    <section className="max-container overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        className="bg-white border border-[#00A8B5]/20 rounded-[2.25rem] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-sm"
      >
        <div className="lg:col-span-5 p-8 lg:p-10 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="bg-[#E6F7F9] text-[#00A8B5] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider border border-[#00A8B5]/20">
              Store Location
            </span>
            <h3 className="text-2xl font-extrabold text-[#00223D]">
              Visit Our Beachwood Canyon Counter
            </h3>
            <p className="text-sm text-slate-600 leading-[1.6]">
              Prefer to drop off in person? Drop by our store situated right on Beachwood Dr in Los Angeles.
            </p>

            <div className="space-y-3.5 pt-2 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00A8B5] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#00223D]">Address:</strong>
                  2699 Beachwood Dr, Los Angeles, CA 90068
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#00A8B5] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#00223D]">Direct Call / Text:</strong>
                  <a href="tel:+13238287503" className="text-[#00A8B5] font-bold hover:underline">
                    +1 (323) 828-7503
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#00A8B5] shrink-0 mt-0.5" />
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
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#00A8B5] hover:bg-[#0091A4] text-white font-bold rounded-xl text-sm transition-all shadow-md"
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
      </motion.div>
    </section>
  );
}
