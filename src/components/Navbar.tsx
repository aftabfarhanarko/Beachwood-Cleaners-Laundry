"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MapPin, Clock, ShieldCheck, Menu, X, ChevronRight } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Utility Header */}
      <div className="bg-[#1E3A8A] text-white text-xs sm:text-sm py-2 px-4 border-b border-blue-900/50">
        <div className="max-container flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 bg-emerald-600/90 text-white px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5" /> Same-Day Service Available
            </span>
            <div className="hidden md:flex items-center gap-1.5 text-blue-100">
              <MapPin className="w-3.5 h-3.5 text-blue-300" />
              <span>2699 Beachwood Dr, Los Angeles, CA 90068</span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 text-blue-100">
              <Clock className="w-3.5 h-3.5 text-blue-300" />
              <span>Mon-Fri 8am-6pm | Sat 9am-5pm</span>
            </div>
          </div>
          <div className="flex items-center gap-4 ml-auto sm:ml-0">
            <a
              href="tel:+13238287503"
              className="inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+1 (323) 828-7503</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-white py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-container flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-[#1E3A8A] flex items-center justify-center text-white font-black text-xl shadow-md group-hover:bg-[#2563EB] transition-colors">
              B
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg leading-tight tracking-tight text-[#0F172A]">
                Beachwood
              </span>
              <span className="text-xs font-semibold text-[#2563EB] tracking-wider uppercase">
                Cleaners & Laundry
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#2563EB] bg-blue-50/80 font-semibold"
                      : "text-slate-700 hover:text-[#2563EB] hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+13238287503"
              className="hidden lg:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-slate-700 hover:text-[#1E3A8A] border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
            >
              Call Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-sm font-bold text-white bg-[#2563EB] hover:bg-blue-700 rounded-xl shadow-sm hover:shadow transition-all duration-150 active:scale-98"
            >
              Book Pickup <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "text-[#2563EB] bg-blue-50 font-semibold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="tel:+13238287503"
                className="w-full py-2.5 text-center font-bold text-[#1E3A8A] bg-blue-50 rounded-xl"
              >
                Call +1 (323) 828-7503
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-center font-bold text-white bg-[#2563EB] rounded-xl shadow"
              >
                Schedule Pickup Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
