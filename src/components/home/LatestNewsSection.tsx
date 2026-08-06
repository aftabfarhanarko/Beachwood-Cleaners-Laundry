"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Parent triggers whileInView ONCE (viewport: { once: true }); children only
// carry variants and inherit the trigger via staggerChildren. No child has
// its own whileInView, so scrolling back up/down never replays the animation.

const containerStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardUp = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function LatestNewsSection() {
  const articles = [
    {
      id: 1,
      date: "Friday, March 15, 2024",
      readTime: "2 Min Read",
      category: "Laundry",
      title: "Essential Laundry Hacks Every Homeowner Should Know",
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      date: "Tuesday, March 12, 2024",
      readTime: "8 Min Read",
      category: "Laundry",
      title: "The Ultimate Guide to Removing Common Stain",
      image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      date: "Sunday, March 10, 2024",
      readTime: "6 Min Read",
      category: "Laundry",
      title: "Efficient Laundry Sorting Techniques for Busy Families",
      image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=600&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-[#EAF5FC]" id="news">
      <div className="max-container space-y-8">
        
        {/* Section Header matching reference screenshot */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerStagger}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#363C44] tracking-tight"
          >
            Read Our <span className="text-[#F97316]">Latest News</span>
          </motion.h2>

          <motion.div variants={fadeUp}>
            <Link
              href="#news"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#00A8E8] hover:bg-[#0094D8] shadow-md transition-all hover:scale-105"
            >
              View All Blogs
            </Link>
          </motion.div>
        </motion.div>

        {/* 3 Blog Cards Grid matching exact layout in screenshot */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardStagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {articles.map((item) => (
            <motion.article
              key={item.id}
              variants={cardUp}
              className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 border border-sky-100/60 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Top Meta Bar: Date on Left, Read Time on Right */}
                <div className="flex items-center justify-between text-xs font-semibold text-[#64748B] px-1">
                  <span>{item.date}</span>
                  <span>{item.readTime}</span>
                </div>

                {/* Card Image */}
                <div className="relative h-48 sm:h-52 w-full rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Category Badge & Title */}
                <div className="space-y-3 px-1 pt-1">
                  <div>
                    <span className="inline-block border border-[#FDBA74] text-[#F97316] bg-[#FFF8F1] px-3.5 py-1 rounded-full text-xs font-bold">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-[#2C3238] text-lg sm:text-xl leading-snug group-hover:text-[#00A8E8] transition-colors">
                    {item.title}
                  </h3>
                </div>

              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}