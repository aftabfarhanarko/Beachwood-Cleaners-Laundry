import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Shield, Star, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: About & Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-[#2563EB] flex items-center justify-center text-white font-black text-lg shadow">
                B
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Beachwood Cleaners
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Los Angeles’ premier eco-friendly dry cleaner & wash-and-fold laundry service. Providing white-glove doorstep garment care to Beachwood Canyon & greater LA.
            </p>
            <div className="flex items-center gap-1.5 text-amber-400 font-semibold text-sm">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                ))}
              </div>
              <span className="text-white font-bold">4.9 / 5.0</span>
              <span className="text-slate-400 text-xs">(250+ Verified LA Reviews)</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs text-blue-400">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services & Capabilities
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Transparent Pricing List
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Our Eco Guarantee
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Schedule Pickup
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs text-blue-400">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>Wash & Fold ($2.45/lb)</li>
              <li>Executive Suit & Dress Dry Cleaning</li>
              <li>Professional Hand-Pressed Shirt Service</li>
              <li>Bedding, Comforter & Fine Linen Care</li>
              <li>Commercial & Airbnb Laundry Solutions</li>
              <li>Free Doorstep Pickup & Delivery</li>
            </ul>
          </div>

          {/* Col 4: Store Info & Hours */}
          <div className="space-y-3 text-sm">
            <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs text-blue-400">
              Contact & Store Hours
            </h3>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>2699 Beachwood Dr, Los Angeles, CA 90068</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <a href="tel:+13238287503" className="text-white font-semibold hover:underline">
                +1 (323) 828-7503
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <a href="mailto:laundryday@gmail.com" className="hover:underline">
                laundryday@gmail.com
              </a>
            </div>
            <div className="pt-2 text-xs text-slate-400 border-t border-slate-800">
              <p className="font-semibold text-slate-300">Store Hours:</p>
              <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 5:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Beachwood Cleaners & Laundry. All rights reserved.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with care in Beachwood Canyon, Los Angeles</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
