"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#E6F7F9] via-[#F4FBFD] to-white text-slate-800 pt-10 sm:pt-16 pb-6 sm:pb-8 border-t border-cyan-200/60 shadow-xs overflow-hidden">
      {/* Soft Ambient Background Glows */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-200/40 rounded-full blur-3xl -z-0 pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-amber-100/40 rounded-full blur-3xl -z-0 pointer-events-none"
      />

      <div className="max-container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 pb-8 sm:pb-12 border-b border-slate-200/80">
          {/* Col 1: About & Info */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="space-y-3 sm:space-y-4"
          >
            <div className="flex items-center gap-2.5 sm:gap-3">
              <motion.div
                whileHover={{ scale: 1.08, rotate: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0"
              >
                <Image
                  src="/logo1.png"
                  alt="Beachwood Cleaners Logo"
                  fill
                  className="object-contain drop-shadow-sm"
                />
              </motion.div>
              <span className="font-extrabold text-lg sm:text-xl text-[#003B65] tracking-tight">
                Beachwood Cleaners
              </span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
              Los Angeles’ premier eco-friendly dry cleaner & wash-and-fold laundry service. Providing white-glove doorstep garment care to Beachwood Canyon & greater LA.
            </p>
          </motion.div>

          {/* Col 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="font-extrabold text-[#003B65] text-xs sm:text-sm mb-3 sm:mb-4 tracking-wider uppercase flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#00A8B5]" /> Quick Navigation
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm font-bold text-slate-800">
              {[
                { name: "Home Overview", href: "/" },
                { name: "Services & Capabilities", href: "/services" },
                { name: "Transparent Pricing List", href: "/pricing" },
                { name: "About Our Eco Guarantee", href: "/about" },
                { name: "Schedule Pickup", href: "/contact" },
                { name: "Frequently Asked Questions", href: "/faq" },
              ].map((link) => (
                <motion.li key={link.name} whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link href={link.href} className="group inline-flex items-center gap-1.5 hover:text-[#00A8B5] transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-[#00A8B5] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3: Services */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <h3 className="font-extrabold text-[#003B65] text-xs sm:text-sm mb-3 sm:mb-4 tracking-wider uppercase flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#00A8B5]" /> Our Services
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm font-bold text-slate-800">
              {[
                "Wash & Fold ($2.45/lb)",
                "Executive Suit & Dress Dry Cleaning",
                "Professional Hand-Pressed Shirt Service",
                "Bedding, Comforter & Fine Linen Care",
                "Commercial & Airbnb Laundry Solutions",
                "Free Doorstep Pickup & Delivery",
              ].map((service, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 3 }}
                  className="hover:text-[#003B65] transition-colors flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-[#00A8B5] shrink-0" />
                  <span>{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4: Store Info & Hours */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm font-bold text-slate-800"
          >
            <h3 className="font-extrabold text-[#003B65] text-xs sm:text-sm mb-3 sm:mb-4 tracking-wider uppercase flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#00A8B5]" /> Contact & Hours
            </h3>
            <motion.div whileHover={{ x: 3 }} className="flex items-start gap-2.5">
              <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                <MapPin className="w-4 h-4 text-[#00A8B5] shrink-0 mt-0.5" />
              </motion.div>
              <span>2699 Beachwood Dr, Los Angeles, CA 90068</span>
            </motion.div>
            <motion.div whileHover={{ x: 3 }} className="flex items-center gap-2.5">
              <motion.div whileHover={{ scale: 1.2, rotate: -10 }}>
                <Phone className="w-4 h-4 text-[#00A8B5] shrink-0" />
              </motion.div>
              <a href="tel:+13238287503" className="text-[#003B65] font-extrabold hover:text-[#00A8B5] transition-colors">
                +1 (323) 828-7503
              </a>
            </motion.div>
            <motion.div whileHover={{ x: 3 }} className="flex items-center gap-2.5">
              <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                <Mail className="w-4 h-4 text-[#00A8B5] shrink-0" />
              </motion.div>
              <a href="mailto:laundryday@gmail.com" className="hover:text-[#00A8B5] transition-colors">
                laundryday@gmail.com
              </a>
            </motion.div>
            <div className="pt-2 text-xs text-slate-700 border-t border-slate-200/80 space-y-0.5 font-semibold">
              <p className="font-bold text-[#003B65]">Store Hours:</p>
              <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 5:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-[11px] sm:text-xs font-semibold text-slate-600 text-center sm:text-left"
        >
          <p>© {new Date().getFullYear()} Beachwood Cleaners & Laundry. All rights reserved.</p>
          <div className="flex items-center gap-1 text-slate-600 font-semibold">
            <span>Crafted with care in Beachwood Canyon, Los Angeles</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
