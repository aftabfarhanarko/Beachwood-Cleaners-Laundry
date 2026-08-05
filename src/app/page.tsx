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
      <section className="relative overflow-hidden bg-gradient-to-b from-[#003B65]/10 via-slate-50 to-white pt-10 pb-16 lg:pt-16 lg:pb-24">
        <div className="max-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Box */}
          <div className="lg:col-span-7 space-y-6" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 text-[#003B65] border border-cyan-100 text-xs sm:text-sm font-bold tracking-wide">
              <Sparkles className="w-4 h-4 text-[#00A8B5]" />
              #1 Rated Laundry & Dry Cleaning in Los Angeles
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#00223D] tracking-tight leading-[1.1]">
              Professional Garment Care <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003B65] via-[#00A8B5] to-[#0091A4]">
                Delivered To Your Doorstep
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Experience white-glove eco-friendly dry cleaning and wash-and-fold laundry care serving Beachwood Canyon & greater Los Angeles. Express 24h turnaround, transparent $2.45/lb rates.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-extrabold text-white bg-[#00A8B5] hover:bg-[#0091A4] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-150 active:scale-98"
              >
                Schedule Pickup Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 rounded-2xl transition-all duration-150"
              >
                View Rates ($2.45/lb)
              </Link>
            </div>

            {/* Micro Trust Bullets */}
            <div className="pt-4 flex flex-wrap gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold text-slate-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00A8B5]" /> Free Pickup & Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00A8B5]" /> 100% Non-Toxic & PERC-Free
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00A8B5]" /> Same-Day Service Available
              </span>
            </div>
          </div>

          {/* Right Hero Box - Graphic Card */}
          <div className="lg:col-span-5 relative" data-aos="fade-up" data-aos-delay="100">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-cyan-300/30 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-amber-300/30 rounded-full blur-3xl -z-10" />
              
              <div className="bg-gradient-to-tr from-[#003B65] via-[#005B94] to-[#00A8B5] rounded-3xl p-6 text-white shadow-2xl space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest font-bold text-cyan-100">
                    Beachwood Express Care
                  </span>
                  <span className="bg-[#FFC72C] text-slate-950 text-[11px] font-extrabold px-2.5 py-1 rounded-full">
                    Free Delivery
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black">Fresh Clothes, Zero Hassle.</h3>
                  <p className="text-sm text-cyan-100 leading-snug">
                    Schedule online in 60 seconds. Our professional drivers handle the rest.
                  </p>
                </div>

                {/* Floating Badge */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#FFC72C] flex items-center justify-center text-slate-950 font-black text-xl shrink-0">
                    4.9★
                  </div>
                  <div>
                    <div className="flex text-[#FFC72C]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#FFC72C] stroke-[#FFC72C]" />
                      ))}
                    </div>
                    <p className="text-xs font-bold text-white mt-0.5">Top-Rated LA Garment Service</p>
                    <p className="text-[11px] text-cyan-100">250+ Verified Google Reviews</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs text-cyan-100">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#FFC72C]" /> 2699 Beachwood Dr, LA
                  </span>
                  <a href="tel:+13238287503" className="font-bold text-[#FFC72C] hover:underline">
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
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#00A8B5]">
            Why Beachwood Cleaners
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-[#00223D] tracking-tight">
            Designed For Modern Los Angeles Living
          </p>
          <p className="text-slate-600 text-sm sm:text-base">
            We combine eco-friendly dry cleaning technology with effortless doorstep pickup so you can focus on what matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#00A8B5] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#00223D]">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="bg-[#00223D] text-white py-16" data-aos="fade-up">
        <div className="max-container space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00A8B5]">
              Our Core Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Garment Care Specialized For Every Fabric
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Select a service below to preview pricing and standard turnaround times.
            </p>
          </div>

          <ServiceTabs />
        </div>
      </section>

      {/* Transparent Pricing Preview Calculator */}
      <section className="max-container" data-aos="fade-up">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00A8B5]">
            No Hidden Fees
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00223D] tracking-tight">
            Calculate Your Order Estimate
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Adjust the sliders and quantities below for instant cost transparency before scheduling your pickup.
          </p>
        </div>
        <PricingCalculator />
      </section>

      {/* How It Works (4-Step Workflow) */}
      <section className="bg-cyan-50/40 py-16 border-y border-cyan-100" data-aos="fade-up">
        <div className="max-container space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00A8B5]">
              Seamless Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00223D] tracking-tight">
              4 Simple Steps To Fresh Laundry
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              How our white-glove pickup and delivery process works from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs relative" data-aos="fade-up" data-aos-delay="0">
              <div className="w-10 h-10 rounded-xl bg-[#003B65] text-white font-extrabold flex items-center justify-center text-lg mb-4">
                1
              </div>
              <h3 className="font-bold text-[#00223D] text-lg mb-2">Schedule Online</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Choose your pickup window online or call +1 (323) 828-7503 in under 60 seconds.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs relative" data-aos="fade-up" data-aos-delay="100">
              <div className="w-10 h-10 rounded-xl bg-[#00A8B5] text-white font-extrabold flex items-center justify-center text-lg mb-4">
                2
              </div>
              <h3 className="font-bold text-[#00223D] text-lg mb-2">We Collect</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our friendly local driver picks up your laundry bag right from your front doorstep.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs relative" data-aos="fade-up" data-aos-delay="200">
              <div className="w-10 h-10 rounded-xl bg-[#0091A4] text-white font-extrabold flex items-center justify-center text-lg mb-4">
                3
              </div>
              <h3 className="font-bold text-[#00223D] text-lg mb-2">Eco Care & Press</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Garments undergo non-toxic solvent processing, stain removal, and precise folding.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs relative" data-aos="fade-up" data-aos-delay="300">
              <div className="w-10 h-10 rounded-xl bg-[#FFC72C] text-slate-950 font-extrabold flex items-center justify-center text-lg mb-4">
                4
              </div>
              <h3 className="font-bold text-[#00223D] text-lg mb-2">Fresh Delivery</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Crisp, fresh garments returned to your door within 24-48 hours in protective covers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews & Trust Badges */}
      <section className="max-container" data-aos="fade-up">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FFC72C]">
            Real Social Proof
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00223D] tracking-tight">
            Loved By Los Angeles Neighbors
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Read what our clients in Beachwood Canyon, Hollywood Hills, and Los Feliz have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="space-y-3">
                <div className="flex text-[#FFC72C]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFC72C] stroke-[#FFC72C]" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm italic leading-relaxed">"{t.comment}"</p>
              </div>
              <div className="pt-3 border-t border-slate-100">
                <p className="font-bold text-[#00223D] text-sm">{t.name}</p>
                <p className="text-xs text-slate-500">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Google Map & Location Details */}
      <section className="max-container" data-aos="fade-up">
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 p-8 lg:p-10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="bg-cyan-100 text-[#003B65] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Store Location
              </span>
              <h3 className="text-2xl font-extrabold text-[#00223D]">
                Visit Our Beachwood Canyon Counter
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Prefer to drop off in person? Drop by our store situated right on Beachwood Dr in Los Angeles.
              </p>
              
              <div className="space-y-3 pt-2 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#00A8B5] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#00223D]">Address:</strong>
                    2699 Beachwood Dr, Los Angeles, CA 90068
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#FFC72C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#00223D]">Direct Call / Text:</strong>
                    <a href="tel:+13238287503" className="text-[#00A8B5] font-bold hover:underline">
                      +1 (323) 828-7503
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#0091A4] shrink-0 mt-0.5" />
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
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#003B65] hover:bg-[#00223D] text-white font-bold rounded-xl text-sm transition-all"
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
          <span className="text-xs font-bold uppercase tracking-wider text-[#00A8B5]">
            Got Questions?
          </span>
          <h2 className="text-3xl font-extrabold text-[#00223D]">Frequently Asked Questions</h2>
        </div>

        <HomeFaqAccordion faqs={faqs} />
      </section>

      {/* High-Conversion Banner CTA */}
      <section className="max-container" data-aos="fade-up">
        <div className="bg-gradient-to-r from-[#003B65] via-[#00A8B5] to-[#00223D] rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight max-w-2xl mx-auto leading-tight">
            Ready For Fresh Clothes Without The Effort?
          </h2>
          <p className="text-cyan-100 text-base sm:text-lg max-w-xl mx-auto">
            Book your pickup online in under 60 seconds or call our LA team directly at +1 (323) 828-7503.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-[#FFC72C] hover:bg-amber-400 text-slate-950 font-extrabold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-150 text-base"
            >
              Schedule Pickup Now
            </Link>
            <a
              href="tel:+13238287503"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-2xl transition-all text-base flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#FFC72C]" /> Call +1 (323) 828-7503
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
