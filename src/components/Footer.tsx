"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

export function Footer() {
  return (
    <footer className="bg-[#FAF3EE] text-[#5B636B] pt-16 pb-12 border-t border-[#F3E7DC]">
      <div className="max-container space-y-12">
        {/* Top Grid — 2 cols on mobile, 2 on md, 12 on lg */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 sm:gap-x-10">
          
          {/* Column 1: Brand Info & Follow Us — full width on mobile */}
          <div className="col-span-2 lg:col-span-4 space-y-6">
            <BrandLogo />
            <h3 className="font-extrabold text-[#2C3238] text-lg -mt-2">
              Beachwood Cleaners & Laundry
            </h3>

            <p className="text-[#64748B] text-sm leading-relaxed max-w-sm font-medium">
              Beachwood Cleaners & Laundry offers professional laundering solutions to assist individuals and businesses in achieving optimal garment care and cleanliness.
            </p>

            {/* Follow Us Sub-heading & Cyan Solid Circle Social Icons */}
            <div className="space-y-3 pt-2">
              <h5 className="font-extrabold text-[#2C3238] text-base">Follow Us</h5>
              <div className="flex items-center gap-3">
                <a
                  href="#facebook"
                  className="w-9 h-9 rounded-full bg-[#00A8E8] text-white flex items-center justify-center hover:bg-[#0094D8] hover:scale-105 transition-all shadow-xs"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="#twitter"
                  className="w-9 h-9 rounded-full bg-[#00A8E8] text-white flex items-center justify-center hover:bg-[#0094D8] hover:scale-105 transition-all shadow-xs"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="#instagram"
                  className="w-9 h-9 rounded-full bg-[#00A8E8] text-white flex items-center justify-center hover:bg-[#0094D8] hover:scale-105 transition-all shadow-xs"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="#linkedin"
                  className="w-9 h-9 rounded-full bg-[#00A8E8] text-white flex items-center justify-center hover:bg-[#0094D8] hover:scale-105 transition-all shadow-xs"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <h4 className="font-extrabold text-[#2C3238] text-base sm:text-lg">Company</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link href="/about" className="hover:text-[#00A8E8] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#00A8E8] transition-colors">Contact</Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#00A8E8] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#00A8E8] transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#00A8E8] transition-colors">Latest Posts</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Further Links */}
          <div className="col-span-1 lg:col-span-3 space-y-4">
            <h4 className="font-extrabold text-[#2C3238] text-base sm:text-lg">Further Links</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link href="/pricing" className="hover:text-[#00A8E8] transition-colors">Pricing Rates</Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-[#00A8E8] transition-colors">Find Location</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#00A8E8] transition-colors">Garment Journal</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#00A8E8] transition-colors">Support & Help</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info — full width on mobile so the address wraps cleanly */}
          <div className="col-span-2 lg:col-span-3 space-y-4">
            <h4 className="font-extrabold text-[#2C3238] text-base sm:text-lg">Contact Info</h4>
            <ul className="space-y-3.5 text-sm font-medium">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#00A8E8] shrink-0" />
                <span>+1 (323) 828-7503</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#00A8E8] shrink-0" />
                <span>laundryday@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00A8E8] shrink-0 mt-1" />
                <span className="leading-relaxed">
                  2699 Beachwood Dr, Los Angeles, CA 90068, United States
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Divider Bar */}
        <div className="pt-8 border-t border-[#EFE3D9] text-center">
          <p className="text-xs sm:text-sm font-medium text-[#8E99A6]">
            Copyright © 2026 Beachwood Cleaners & Laundry. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}