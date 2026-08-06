"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Sparkles, Tag, MapPin, BookOpen, Info, PhoneCall } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

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
    { name: "Home", href: "/", icon: Home },
    { name: "Services", href: "/services", icon: Sparkles },
    { name: "Pricing", href: "/pricing", icon: Tag },
    { name: "Find Location", href: "/location", icon: MapPin },
    { name: "Blog", href: "/blog", icon: BookOpen },
    { name: "About Us", href: "/about", icon: Info },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-sky-100"
            : "bg-gradient-to-r from-[#EBF7FD] via-white to-[#FFF6ED] py-4 border-b border-transparent"
        }`}
      >
        <div className="max-container flex items-center justify-between">
          {/* Custom Brand Logo */}
          <BrandLogo />

          {/* Desktop Nav Links with Route-Related Icons */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-1.5 text-xs sm:text-sm font-extrabold transition-colors hover:text-[#00A8E8] group ${
                    isActive ? "text-[#00A8E8]" : "text-[#2C3238]"
                  }`}
                >
                  <IconComponent
                    className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                      isActive ? "text-[#00A8E8]" : "text-slate-400 group-hover:text-[#00A8E8]"
                    }`}
                  />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold text-white bg-[#00A8E8] hover:bg-[#0094D8] shadow-md shadow-sky-100 transition-all hover:scale-105 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact us</span>
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#2C3238] hover:bg-sky-50 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-sky-100 px-6 py-6 space-y-4 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 text-base font-extrabold transition-colors ${
                      isActive ? "text-[#00A8E8]" : "text-[#2C3238]"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                        isActive ? "bg-[#00A8E8] text-white" : "bg-[#EAF7FD] text-[#00A8E8]"
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-extrabold text-white bg-[#00A8E8] shadow-md"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Contact us</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}