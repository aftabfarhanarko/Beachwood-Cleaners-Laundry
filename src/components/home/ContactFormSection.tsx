"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent to QuickFold Laundry.");
  };

  return (
    <section className="py-10 sm:py-14 bg-[#FAFDFE]" id="contact">
      <div className="max-container space-y-8">
        {/* Title matching reference image */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#2D3339] tracking-tight">
            Lets <span className="text-[#F97316]">Talk</span> With Us
          </h2>
        </motion.div>

        {/* Split Container Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Cyan Card with Solid Orange Bottom-Right Quarter-Circle */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeLeft}
            className="lg:col-span-5 bg-[#00A8E8] text-white p-8 sm:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between space-y-8 shadow-xl min-h-[500px]"
          >
            
            {/* Solid Orange Curved Oval Shape in Bottom Right Corner matching screenshot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-10 -right-10 w-52 h-52 bg-[#F97316] rounded-full pointer-events-none z-0"
            />

            <div className="space-y-6 relative z-10">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                custom={0.1}
                variants={fadeUp}
                className="space-y-3"
              >
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Contact Information
                </h3>
                <p className="text-[#E0F2FE] text-sm leading-relaxed font-medium max-w-xs">
                  Fill up the form and our Team will get back to you within 24 hours.
                </p>
              </motion.div>

              {/* Contact List with Icons */}
              <div className="space-y-6 pt-6 text-sm font-semibold">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  custom={0.2}
                  variants={fadeUp}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span>+1 (828) 325 - 4480</span>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  custom={0.3}
                  variants={fadeUp}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <span className="break-all">hello.laundry@quickfold.com</span>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  custom={0.4}
                  variants={fadeUp}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <span className="leading-relaxed">
                    69853 Harvey Shoals Apt. 358, Rosenbaumborough, New Jersey, USA.
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Bottom Left Social Icons matching exact reference image */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              custom={0.5}
              variants={fadeUp}
              className="flex items-center gap-4 relative z-10 pt-8"
            >
              <a
                href="#facebook"
                className="text-white hover:text-orange-200 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#instagram"
                className="text-white hover:text-orange-200 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#linkedin"
                className="text-white hover:text-orange-200 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href="#twitter"
                className="text-white hover:text-orange-200 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </motion.div>

          </motion.div>

          {/* Right Form Container matching exact reference screenshot */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeRight}
            className="lg:col-span-7 flex flex-col justify-between py-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* 2-Column Grid Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Field 1: Name */}
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  custom={0.1}
                  variants={fadeUp}
                  className="space-y-2"
                >
                  <label className="text-xs font-bold text-[#2C3238]">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#EAF7FD] border border-[#D0ECFC] text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#00A8E8] transition-all duration-200 focus:scale-[1.01]"
                  />
                </motion.div>

                {/* Field 2: Email */}
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  custom={0.2}
                  variants={fadeUp}
                  className="space-y-2"
                >
                  <label className="text-xs font-bold text-[#2C3238]">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your mail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#EAF7FD] border border-[#D0ECFC] text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#00A8E8] transition-all duration-200 focus:scale-[1.01]"
                  />
                </motion.div>

                {/* Field 3: Phone Number */}
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  custom={0.3}
                  variants={fadeUp}
                  className="space-y-2"
                >
                  <label className="text-xs font-bold text-[#2C3238]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#EAF7FD] border border-[#D0ECFC] text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#00A8E8] transition-all duration-200 focus:scale-[1.01]"
                  />
                </motion.div>

                {/* Field 4: Address */}
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  custom={0.4}
                  variants={fadeUp}
                  className="space-y-2"
                >
                  <label className="text-xs font-bold text-[#2C3238]">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#EAF7FD] border border-[#D0ECFC] text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#00A8E8] transition-all duration-200 focus:scale-[1.01]"
                  />
                </motion.div>

              </div>

              {/* Full Width Field: Message */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                custom={0.5}
                variants={fadeUp}
                className="space-y-2"
              >
                <label className="text-xs font-bold text-[#2C3238]">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#EAF7FD] border border-[#D0ECFC] text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#00A8E8] transition-all duration-200 focus:scale-[1.01]"
                />
              </motion.div>

              {/* Submit Button at Bottom Left */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                custom={0.6}
                variants={fadeUp}
                className="pt-2"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#00A8E8] hover:bg-[#0094D8] text-white font-extrabold text-sm shadow-md transition-colors cursor-pointer"
                >
                  Send Message
                </motion.button>
              </motion.div>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}