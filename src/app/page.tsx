import React from "react";
import Link from "next/link";
import {
  Star,
  ShieldCheck,
  Truck,
  Sparkles,
  Clock,
  DollarSign,
  Award,
  ArrowRight,
  Phone,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { PricingCalculator } from "@/components/PricingCalculator";
import { ServiceTabs } from "@/components/ServiceTabs";
import { HomeFaqAccordion } from "@/components/HomeFaqAccordion";

export const metadata = {
  title: "Beachwood Cleaners & Laundry | #1 Eco-Friendly Laundry & Dry Cleaning Los Angeles",
  description: "Professional eco-friendly dry cleaning and wash-and-fold laundry delivery in Los Angeles (2699 Beachwood Dr, LA CA 90068). Call +1 (323) 828-7503 for doorstep service.",
};

export default function Home() {
  const valueProps = [
    {
      icon: Clock,
      title: "24-48 Hour Turnaround",
      desc: "Fast, reliable express processing so you never run out of clean clothes.",
    },
    {
      icon: Sparkles,
      title: "100% Eco-Friendly Detergents",
      badge: "Eco Green #059669",
      desc: "PERC-free, hypoallergenic solvents safe for sensitive skin & nature.",
    },
    {
      icon: DollarSign,
      title: "Transparent Per-Pound Pricing",
      desc: "$2.45/lb wash & fold with zero hidden service fees or surprise charges.",
    },
    {
      icon: ShieldCheck,
      title: "Professional Stain Removal",
      desc: "Master garment technicians pre-treat spots with specialized European techniques.",
    },
    {
      icon: Truck,
      title: "Free Doorstep Pickup & Delivery",
      desc: "We collect and return your laundry right to your front door anywhere in LA.",
    },
    {
      icon: Award,
      title: "Garment Protection Guarantee",
      desc: "100% satisfaction guarantee. If it's not perfect, we re-clean it free.",
    },
  ];

  const faqs = [
    {
      q: "What is your minimum weight for Wash & Fold pickup?",
      a: "Our standard minimum order for free doorstep pickup and delivery is 15 lbs ($36.75). Orders under 15 lbs are welcome but will be charged at the 15 lb minimum rate.",
    },
    {
      q: "What is your standard turnaround time?",
      a: "Our standard turnaround time is 24 to 48 hours. Express same-day service is available for orders picked up before 9:00 AM.",
    },
    {
      q: "How do you handle delicate items or special wash preferences?",
      a: "You can specify temperature settings, hypoallergenic detergents, and hang-dry requests in your order notes. Delicates are washed separately in protective mesh bags.",
    },
    {
      q: "Which areas in Los Angeles do you service for doorstep pickup?",
      a: "We service Beachwood Canyon, Hollywood, Hollywood Hills, Los Feliz, Silver Lake, Hancock Park, and surrounding Los Angeles neighborhoods within a 10-mile radius of 2699 Beachwood Dr.",
    },
    {
      q: "Are your dry cleaning solvents safe for delicate fabrics and the environment?",
      a: "Yes! We use 100% organic, toxic-free, PERC-free solvents that leave zero chemical odor while protecting silk, wool, cashmere, and fine garments.",
    },
  ];

  const testimonials = [
    {
      name: "Marcus Sterling",
      location: "Beachwood Canyon, LA",
      comment: "Beachwood Cleaners is a game changer! My suit jackets look immaculate and their $2.45/lb wash and fold delivery saves me 4 hours every week.",
      rating: 5,
    },
    {
      name: "Elena Rostova",
      location: "Hollywood Hills",
      comment: "Hands down the best eco-friendly dry cleaners in Los Angeles. No nasty chemical smell on my dresses and their pickup driver is super punctual.",
      rating: 5,
    },
    {
      name: "David Vance",
      location: "Los Feliz",
      comment: "Super transparent pricing, crisp shirt pressing, and great customer service. I love supporting local Beachwood Dr businesses!",
      rating: 5,
    },
  ];

  return (
    <div className="space-y-20 pb-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1E3A8A]/10 via-slate-50 to-white pt-10 pb-16 lg:pt-16 lg:pb-24">
        <div className="max-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Box */}
          <div className="lg:col-span-7 space-y-6" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/70 backdrop-blur-md text-[#1E3A8A] border border-blue-100 text-xs sm:text-sm font-bold tracking-wide shadow-xs">
              <Sparkles className="w-4 h-4 text-[#2563EB]" />
              #1 Rated Laundry & Dry Cleaning in Los Angeles
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-bold text-[#0F172A] tracking-tight leading-[1.1]">
              Professional Garment Care <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#059669]">
                Delivered To Your Doorstep
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-[1.6] max-w-2xl">
              Top-rated wash, fold, and dry cleaning service in Beachwood & Los Angeles. Free pickup & delivery.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-white bg-[#2563EB] hover:bg-blue-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-150 active:scale-98"
              >
                Schedule Pickup <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-slate-800 bg-white/80 backdrop-blur-md hover:bg-slate-100 border border-slate-200 rounded-2xl transition-all duration-150"
              >
                View Rates ($2.45/lb)
              </Link>
            </div>

            {/* Micro Trust Bullets */}
            <div className="pt-4 flex flex-wrap gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-slate-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#059669]" /> Free Pickup & Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#059669]" /> 100% Non-Toxic & PERC-Free
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#059669]" /> Same-Day Service Available
              </span>
            </div>
          </div>

          {/* Right Hero Box - Graphic Card with Floating Glass Badge */}
          <div className="lg:col-span-5 relative" data-aos="fade-up" data-aos-delay="100">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-emerald-300/30 rounded-full blur-3xl -z-10" />
              
              <div className="bg-gradient-to-tr from-[#1E3A8A] via-[#2563EB] to-[#059669] rounded-3xl p-6 text-white shadow-2xl space-y-6 relative overflow-hidden border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest font-bold text-blue-100">
                    Beachwood Express Care
                  </span>
                  <span className="bg-[#059669] text-white text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-xs">
                    Free Delivery
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Fresh Clothes, Zero Hassle.</h3>
                  <p className="text-sm text-blue-100 leading-snug">
                    Schedule online in 60 seconds. Our professional drivers handle the rest.
                  </p>
                </div>

                {/* Floating Glass Badge */}
                <div className="glass-card p-4 flex items-center gap-3 text-slate-900 border-white/30">
                  <div className="w-12 h-12 rounded-xl bg-[#D97706] flex items-center justify-center text-white font-black text-xl shrink-0 shadow-xs">
                    4.9★
                  </div>
                  <div>
                    <div className="flex text-[#D97706]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#D97706] stroke-[#D97706]" />
                      ))}
                    </div>
                    <p className="text-xs font-bold text-[#0F172A] mt-0.5">★ 4.9 Rating (250+ LA Reviews)</p>
                    <p className="text-[11px] text-slate-500">Top-Rated LA Garment Service</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs text-blue-100">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#059669]" /> 2699 Beachwood Dr, LA
                  </span>
                  <a href="tel:+13238287503" className="font-bold text-[#D97706] hover:underline">
                    +1 (323) 828-7503
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Grid (6 Cards) */}
      <section className="max-container" data-aos="fade-up">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
            Why Beachwood Cleaners
          </h2>
          <p className="text-2xl lg:text-[36px] font-semibold text-[#0F172A] tracking-tight">
            Designed For Modern Los Angeles Living
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-[1.6]">
            We combine eco-friendly dry cleaning technology with effortless doorstep pickup so you can focus on what matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 flex flex-col justify-between"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    {item.badge && (
                      <span className="text-[11px] font-bold px-2.5 py-1 bg-emerald-50 text-[#059669] rounded-full border border-emerald-200">
                        100% Eco
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A]">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-[1.6]">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="bg-[#1E3A8A] text-white py-16" data-aos="fade-up">
        <div className="max-container space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">
              Our Core Services
            </span>
            <h2 className="text-2xl lg:text-[36px] font-semibold tracking-tight text-white">
              Garment Care Specialized For Every Fabric
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-[1.6]">
              Select a service below to preview pricing and standard turnaround times.
            </p>
          </div>

          <ServiceTabs />
        </div>
      </section>

      {/* Transparent Pricing Preview Calculator */}
      <section className="max-container" data-aos="fade-up">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
            No Hidden Fees
          </span>
          <h2 className="text-2xl lg:text-[36px] font-semibold text-[#0F172A] tracking-tight">
            Calculate Your Order Estimate
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-[1.6]">
            Adjust the sliders and quantities below for instant cost transparency before scheduling your pickup.
          </p>
        </div>
        <PricingCalculator />
      </section>

      {/* How It Works (4-Step Workflow) */}
      <section className="bg-blue-50/50 py-16 border-y border-blue-100/60" data-aos="fade-up">
        <div className="max-container space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Seamless Workflow
            </span>
            <h2 className="text-2xl lg:text-[36px] font-semibold text-[#0F172A] tracking-tight">
              4 Simple Steps To Fresh Laundry
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-[1.6]">
              How our white-glove pickup and delivery process works from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 relative" data-aos="fade-up" data-aos-delay="0">
              <div className="w-10 h-10 rounded-xl bg-[#1E3A8A] text-white font-bold flex items-center justify-center text-lg mb-4">
                1
              </div>
              <h3 className="font-bold text-[#0F172A] text-lg mb-2">Step 1: Schedule Online or Call</h3>
              <p className="text-slate-600 text-sm leading-[1.6]">
                Choose your pickup window online or call +1 (323) 828-7503 in under 60 seconds.
              </p>
            </div>

            <div className="glass-card p-6 relative" data-aos="fade-up" data-aos-delay="100">
              <div className="w-10 h-10 rounded-xl bg-[#2563EB] text-white font-bold flex items-center justify-center text-lg mb-4">
                2
              </div>
              <h3 className="font-bold text-[#0F172A] text-lg mb-2">Step 2: We Collect Your Items</h3>
              <p className="text-slate-600 text-sm leading-[1.6]">
                Our friendly local driver picks up your laundry bag right from your front doorstep.
              </p>
            </div>

            <div className="glass-card p-6 relative" data-aos="fade-up" data-aos-delay="200">
              <div className="w-10 h-10 rounded-xl bg-[#059669] text-white font-bold flex items-center justify-center text-lg mb-4">
                3
              </div>
              <h3 className="font-bold text-[#0F172A] text-lg mb-2">Step 3: Eco Cleaning & Pressing</h3>
              <p className="text-slate-600 text-sm leading-[1.6]">
                Garments undergo non-toxic solvent processing, stain removal, and precise folding.
              </p>
            </div>

            <div className="glass-card p-6 relative" data-aos="fade-up" data-aos-delay="300">
              <div className="w-10 h-10 rounded-xl bg-[#D97706] text-white font-bold flex items-center justify-center text-lg mb-4">
                4
              </div>
              <h3 className="font-bold text-[#0F172A] text-lg mb-2">Step 4: Fresh Delivery to Your Door</h3>
              <p className="text-slate-600 text-sm leading-[1.6]">
                Crisp, fresh garments returned to your door within 24-48 hours in protective covers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews & Trust Badges */}
      <section className="max-container" data-aos="fade-up">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
            Real Social Proof
          </span>
          <h2 className="text-2xl lg:text-[36px] font-semibold text-[#0F172A] tracking-tight">
            Loved By Los Angeles Neighbors
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-[1.6]">
            Read what our clients in Beachwood Canyon, Hollywood Hills, and Los Feliz have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="glass-card p-6 flex flex-col justify-between space-y-4"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="space-y-3">
                <div className="flex text-[#D97706]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D97706] stroke-[#D97706]" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm italic leading-[1.6]">"{t.comment}"</p>
              </div>
              <div className="pt-3 border-t border-slate-100">
                <p className="font-bold text-[#0F172A] text-sm">{t.name}</p>
                <p className="text-xs text-slate-500">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Google Map & Location Details */}
      <section className="max-container" data-aos="fade-up">
        <div className="glass-card overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-lg">
          <div className="lg:col-span-5 p-8 lg:p-10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="bg-blue-100/70 text-[#1E3A8A] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-blue-200">
                Store Location
              </span>
              <h3 className="text-2xl font-semibold text-[#0F172A]">
                Visit Our Beachwood Canyon Counter
              </h3>
              <p className="text-sm text-slate-600 leading-[1.6]">
                Prefer to drop off in person? Drop by our store situated right on Beachwood Dr in Los Angeles.
              </p>
              
              <div className="space-y-3 pt-2 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#0F172A]">Address:</strong>
                    2699 Beachwood Dr, Los Angeles, CA 90068
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#0F172A]">Direct Call / Text:</strong>
                    <a href="tel:+13238287503" className="text-[#2563EB] font-bold hover:underline">
                      +1 (323) 828-7503
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#0F172A]">Operating Hours:</strong>
                    Mon-Fri: 8:00 AM – 6:00 PM | Sat: 9:00 AM – 5:00 PM
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#1E3A8A] hover:bg-blue-900 text-white font-bold rounded-xl text-sm transition-all"
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
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-container max-w-4xl" data-aos="fade-up">
        <div className="text-center mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
            Got Questions?
          </span>
          <h2 className="text-2xl lg:text-[36px] font-semibold text-[#0F172A]">Frequently Asked Questions</h2>
        </div>

        <HomeFaqAccordion faqs={faqs} />
      </section>

      {/* High-Conversion Banner CTA */}
      <section className="max-container" data-aos="fade-up">
        <div className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-blue-900 rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 shadow-2xl relative overflow-hidden border border-white/10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight max-w-2xl mx-auto leading-tight">
            Ready For Fresh Clothes Without The Effort?
          </h2>
          <p className="text-blue-100 text-base sm:text-lg max-w-xl mx-auto leading-[1.6]">
            Book your pickup online in under 60 seconds or call our LA team directly at +1 (323) 828-7503.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-[#2563EB] hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-150 text-base"
            >
              Schedule Pickup Now
            </Link>
            <a
              href="tel:+13238287503"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-2xl transition-all text-base flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-300" /> Call +1 (323) 828-7503
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
