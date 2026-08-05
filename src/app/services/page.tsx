import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Shield } from "lucide-react";

export const metadata = {
  title: "Garment Services | Beachwood Cleaners & Laundry LA",
  description: "Comprehensive laundry & eco-friendly dry cleaning services in Los Angeles. Wash & Fold ($2.45/lb), Executive Suits ($22), Shirt Pressing ($6.95), Commercial & Airbnb.",
};

export default function ServicesPage() {
  const serviceList = [
    {
      title: "Wash & Fold Everyday Laundry",
      price: "$2.45 / lb",
      min: "15 lb minimum order",
      desc: "Comprehensive everyday garment cleaning for socks, t-shirts, athletic gear, towels, and bedsheets. Sorted by lights and darks, washed with hypoallergenic detergents, gently tumble-dried, and neatly folded.",
      inclusions: [
        "Light & Dark fabric separation",
        "Hypoallergenic & scent-free options",
        "Gentle tumble dry on medium heat",
        "Neat rectangular folding ready for storage",
        "Packaged in protective clear laundry bags",
      ],
      cta: "Schedule Wash & Fold",
    },
    {
      title: "Executive Dry Cleaning",
      price: "Suits $22.00 | Dresses $17.00",
      min: "Jackets $14.95 | Pants $8.95",
      desc: "Delicate garment treatment for business suits, formal dresses, wool coats, silk blouses, and neckties. 100% PERC-free organic solvent process that maintains fabric integrity.",
      inclusions: [
        "Spot-pretreatment for wine, oil & soil",
        "PERC-free eco organic solvent washing",
        "Hand steam pressing for crisp contours",
        "Returned on wood/heavy wire hangers",
        "Custom breathable plastic garment cover",
      ],
      cta: "Book Dry Cleaning",
    },
    {
      title: "Professional Shirt Service",
      price: "$6.95 / shirt",
      min: "No minimum shirt count",
      desc: "Laundered and professionally hand-pressed custom dress shirts. Collar and cuff detailing, choice of light, medium, or heavy starch, delivered on hangers or boxed.",
      inclusions: [
        "Specialized collar and cuff pre-scrubbing",
        "Custom starch preference selection",
        "Hand inspection & loose button stitching",
        "Returned crisp on heavy dress hangers",
      ],
      cta: "Book Shirt Pressing",
    },
    {
      title: "Commercial & Airbnb Laundry",
      price: "Custom B2B Volume Pricing",
      min: "Dedicated account manager",
      desc: "Tailored recurring laundry service plans for Los Angeles boutique hotels, Airbnb hosts, vacation rentals, wellness spas, and gym facilities.",
      inclusions: [
        "High-temp sanitizing wash for linens & towels",
        "Scheduled daily or weekly recurring pickup",
        "Itemized monthly corporate invoicing",
        "Express turnaround guarantees",
      ],
      cta: "Contact Commercial Team",
    },
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Header Banner */}
      <section className="bg-[#003B65] text-white py-16">
        <div className="max-container text-center space-y-4 max-w-3xl">
          <span className="bg-[#0091A4] text-white border border-cyan-700 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            Full Service Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            Our Services & Capabilities
          </h1>
          <p className="text-cyan-100 text-base sm:text-lg">
            From $2.45/lb everyday laundry to executive suit dry cleaning, we deliver eco-friendly garment care across Los Angeles.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-container space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {serviceList.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <h2 className="text-2xl font-bold text-[#00223D]">{service.title}</h2>
                  <span className="text-lg font-black text-[#00A8B5] bg-cyan-50 px-3 py-1 rounded-xl">
                    {service.price}
                  </span>
                </div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                  {service.min}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                
                <div className="pt-2 space-y-2">
                  <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                    Service Includes:
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {service.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00A8B5] shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#003B65] hover:bg-[#00A8B5] text-white font-bold rounded-xl text-sm transition-colors"
                >
                  {service.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guarantee Banner */}
      <section className="max-container">
        <div className="bg-cyan-50/60 border border-cyan-200 rounded-3xl p-8 text-center max-w-3xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#00A8B5] text-white flex items-center justify-center mx-auto">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-extrabold text-[#00223D]">
            Our 100% Satisfaction & Garment Protection Guarantee
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed">
            If you are not completely satisfied with the cleanliness, press, or fold of any item in your order, let us know within 24 hours of delivery and we will re-clean and re-press your items free of charge.
          </p>
        </div>
      </section>
    </div>
  );
}
