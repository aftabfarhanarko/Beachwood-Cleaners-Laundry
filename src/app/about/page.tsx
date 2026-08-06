import React from "react";
import { TrustCommunitySection } from "@/components/TrustCommunitySection";
import { NewsletterBannerSection } from "@/components/NewsletterBannerSection";
import { HeartHandshake, ShieldCheck, Sparkles, Clock, Scale, Truck, Award, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Us | Beachwood Cleaners & Laundry",
  description: "Learn about Beachwood Cleaners & Laundry, our 5+ years of dedicated garment care, eco-friendly washing techniques, and doorstep pickup service in Los Angeles.",
};

export default function AboutPage() {
  const pillars = [
    {
      title: "Eco-Friendly Organic Care",
      desc: "We exclusively use non-toxic, hypoallergenic biodegradable soaps safe for sensitive skin and delicate silk/wool.",
      icon: Sparkles,
      color: "text-[#00A8E8]",
      bg: "bg-[#EAF7FD]",
    },
    {
      title: "Digital Scale Transparency",
      desc: "Every laundry bag is weighed on certified digital scales with instant itemized digital receipts prior to washing.",
      icon: Scale,
      color: "text-[#F97316]",
      bg: "bg-[#FFF4E8]",
    },
    {
      title: "24-Hour Express Delivery",
      desc: "Our daily route drivers pick up dirty clothes and deliver fresh folded garments back to your doorstep within 24 hours.",
      icon: Truck,
      color: "text-[#00A8E8]",
      bg: "bg-[#EAF7FD]",
    },
    {
      title: "100% Free Re-Wash Guarantee",
      desc: "If you're not completely wowed by the freshness or crease lines, our master cleaners will re-wash your garment for free.",
      icon: ShieldCheck,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
  ];

  const team = [
    {
      name: "Elena Rostova",
      role: "Master Fabric Specialist",
      experience: "12+ Years Exp.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    },
    {
      name: "Marcus Vance",
      role: "Stain Restoration Expert",
      experience: "9+ Years Exp.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    },
    {
      name: "Sarah Jenkins",
      role: "Logistics & Route Manager",
      experience: "6+ Years Exp.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="space-y-0 overflow-hidden bg-white">
      
      {/* Hero Page Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#EBF7FD] via-[#FAFDFE] to-[#FFF4E8] text-center border-b border-sky-100">
        <div className="max-container space-y-3">
          <span className="inline-block bg-[#EAF7FD] border border-sky-200/60 text-[#00A8E8] px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
            Our Story & Mission
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#363C44] tracking-tight">
            About Beachwood <span className="text-[#F97316]">Cleaners & Laundry</span>
          </h1>
          <p className="text-[#5B636B] text-xs sm:text-sm font-medium max-w-xl mx-auto leading-relaxed">
            For over 5 years, we have been dedicated to providing exceptional customer service and top quality dry cleaning and laundry services in Los Angeles.
          </p>
        </div>
      </section>

      {/* Story & Mission Section */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-extrabold text-[#F97316] uppercase tracking-wider">
                Who We Are
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#363C44] leading-tight">
                Simplifying Garment Care <br />
                with <span className="text-[#00A8E8]">Precision & Passion</span>
              </h2>
            </div>

            <p className="text-[#5B636B] text-xs sm:text-sm font-medium leading-relaxed">
              Beachwood Cleaners & Laundry was founded with a simple mission: to take the hassle out of laundry day for busy families, professionals, and local businesses in Los Angeles.
            </p>

            <p className="text-[#5B636B] text-xs sm:text-sm font-medium leading-relaxed">
              Located on Beachwood Drive, our facility combines eco-friendly washing technologies, digital weight verification, and hand steam pressing to keep your wardrobe looking fresh and crisp.
            </p>

            <div className="p-4 rounded-2xl bg-[#EAF7FD] border border-sky-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00A8E8] text-white flex items-center justify-center font-black text-xl shrink-0">
                5+
              </div>
              <div>
                <h4 className="font-extrabold text-[#2C3238] text-sm sm:text-base">Years of Excellence</h4>
                <p className="text-xs text-[#5B636B] font-medium">Over 150,000 garments cleaned across Beachwood & LA</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=800&auto=format&fit=crop&q=80"
                alt="Beachwood Cleaners Facility"
                className="w-full h-[360px] sm:h-[400px] object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 4 Floating Trust Stats Cards */}
      <TrustCommunitySection />

      {/* 4 Core Pillars Section */}
      <section className="py-14 sm:py-20 bg-[#FAFDFE] border-y border-sky-100">
        <div className="max-container space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="inline-block bg-[#EAF7FD] border border-sky-200/60 text-[#00A8E8] px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              Our Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#363C44]">
              Our Core <span className="text-[#F97316]">Pillars</span>
            </h2>
            <p className="text-[#5B636B] text-xs sm:text-sm font-medium">
              The standards that guide our fabric cleaning operations every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl p-6 border border-sky-100/90 space-y-4 text-center shadow-xs hover:shadow-md transition-all">
                  <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} mx-auto flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-[#2C3238] text-base sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5B636B] font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet Our Master Cleaners Team Section */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-container space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="inline-block bg-[#EAF7FD] border border-sky-200/60 text-[#00A8E8] px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              The Experts Behind The Care
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#363C44]">
              Meet Our <span className="text-[#F97316]">Master Team</span>
            </h2>
            <p className="text-[#5B636B] text-xs sm:text-sm font-medium">
              Experienced fabric specialists dedicated to inspecting and caring for your garments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-5 border border-sky-100/90 shadow-xs hover:shadow-lg transition-all space-y-4 text-center group"
              >
                <div className="relative h-60 w-full rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#00A8E8] text-white px-3 py-0.5 rounded-full text-[11px] font-extrabold shadow-sm">
                    {member.experience}
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-black text-[#2C3238] text-lg">{member.name}</h3>
                  <p className="text-xs font-bold text-[#F97316]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Banner */}
      <NewsletterBannerSection />

    </div>
  );
}
