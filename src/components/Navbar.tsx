"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Waves, Menu, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
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
    { name: "Find Location", href: "#location" },
    { name: "Blog", href: "#news" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-sm py-3 border-b border-sky-100"
            : "bg-gradient-to-r from-[#EBF7FD] via-white to-[#FFF6ED] py-4 border-b border-transparent"
        }`}
      >
        <div className="max-container flex items-center justify-between">
          {/* QuickFold Logo matching screenshot */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00A8E8] to-[#00C2FF] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
              <Waves className="w-5 h-5" />
            </div>
            <div className="flex items-center font-extrabold text-2xl tracking-tight leading-none">
              <span className="text-[#00A8E8]">Beachwood Cleaners </span>
              <span className="text-[#F97316]">& Laundry</span>
            </div>
          </Link>

          {/* Center Links matching screenshot */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = link.name === "Home";
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors ${
                    isActive ? "text-[#F97316] font-bold" : "text-slate-700 hover:text-[#00A8E8]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action Button matching screenshot */}
          <div className="hidden sm:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-bold text-white bg-[#00A8E8] hover:bg-[#0094D8] shadow-md shadow-sky-200 transition-all hover:scale-102 active:scale-98"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-sky-50 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-sky-100 px-6 py-4 space-y-3 shadow-xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:text-[#F97316] hover:bg-orange-50"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="pt-2 border-t border-slate-100">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-bold text-white bg-[#00A8E8]"
              >
                Contact us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}