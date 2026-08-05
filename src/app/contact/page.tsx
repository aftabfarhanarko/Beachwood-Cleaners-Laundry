"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceRequired: "Wash & Fold ($2.45/lb)",
    pickupDate: "",
    address: "",
    specialInstructions: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 py-12">
      {/* Header Banner */}
      <section className="bg-[#003B65] text-white py-16">
        <div className="max-container text-center space-y-4 max-w-3xl">
          <span className="bg-[#FFC72C] text-slate-950 text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider">
            Fast Response Team
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            Schedule Pickup & Contact Us
          </h1>
          <p className="text-cyan-100 text-base sm:text-lg">
            Book your doorstep laundry pickup online or contact our Beachwood Canyon team directly.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Info Container */}
      <section className="max-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Contact Info Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-extrabold text-[#00223D]">Get In Touch</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Have a question about a delicate fabric or commercial account? Reach out to us anytime.
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-700">
              <div className="flex items-start gap-3.5 p-3.5 bg-slate-50 rounded-2xl">
                <MapPin className="w-5 h-5 text-[#00A8B5] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#00223D] font-bold">Store Location:</strong>
                  <span>2699 Beachwood Dr, Los Angeles, CA 90068</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 bg-slate-50 rounded-2xl">
                <Phone className="w-5 h-5 text-[#FFC72C] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#00223D] font-bold">Phone / Text Support:</strong>
                  <a href="tel:+13238287503" className="text-[#00A8B5] font-extrabold hover:underline">
                    +1 (323) 828-7503
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 bg-slate-50 rounded-2xl">
                <Mail className="w-5 h-5 text-[#0091A4] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#00223D] font-bold">Email Address:</strong>
                  <a href="mailto:laundryday@gmail.com" className="text-slate-800 hover:underline">
                    laundryday@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 bg-slate-50 rounded-2xl">
                <Clock className="w-5 h-5 text-[#003B65] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#00223D] font-bold">Business Hours:</strong>
                  <p>Mon – Fri: 8:00 AM – 6:00 PM</p>
                  <p>Saturday: 9:00 AM – 5:00 PM</p>
                  <p className="text-slate-400">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Pickup Request Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200 shadow-md">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-cyan-100 text-[#00A8B5] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#00223D]">Pickup Request Received!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. Our driver dispatch team will call or text you shortly at <strong>{formData.phone}</strong> to confirm your scheduled pickup slot.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#003B65] text-white font-bold text-sm rounded-xl"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="text-2xl font-extrabold text-[#00223D]">Schedule Doorstep Pickup</h2>
                  <p className="text-xs text-slate-500 mt-1">Fill in your pickup details below for fast LA service.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#00A8B5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (323) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#00A8B5]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#00A8B5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Service Required *
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#00A8B5]"
                    >
                      <option>Wash & Fold ($2.45/lb)</option>
                      <option>Executive Dry Cleaning</option>
                      <option>Professional Shirt Pressing ($6.95)</option>
                      <option>Commercial / Airbnb Linen</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Preferred Pickup Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.pickupDate}
                      onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#00A8B5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Pickup Address *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Street, Unit #, City, ZIP"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#00A8B5]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Special Garment / Stain Instructions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="E.g., Wine stain on white shirt, please use hypoallergenic detergent..."
                    value={formData.specialInstructions}
                    onChange={(e) => setFormData({ ...formData, specialInstructions: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#00A8B5]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#00A8B5] hover:bg-[#0091A4] text-white font-extrabold rounded-xl shadow-lg hover:shadow-xl transition-all duration-150 flex items-center justify-center gap-2 text-base cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Submit Pickup Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Interactive Map Embed */}
      <section className="max-container">
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg h-[400px]">
          <iframe
            title="Beachwood Cleaners Location Map"
            src="https://maps.google.com/maps?q=2699%20Beachwood%20Dr,%20Los%20Angeles,%20CA%2090068&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}
