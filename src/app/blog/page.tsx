"use client";

import React, { useState } from "react";
import { blogPosts } from "@/data/blogData";
import { NewsletterBannerSection } from "@/components/home/NewsletterBannerSection";
import Link from "next/link";
import { ArrowRight, Search, Calendar, Clock } from "lucide-react";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Laundry", "Stain Removal", "Eco Care", "Dry Cleaning", "Fabric Guide"];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-0 overflow-hidden bg-white">
      
      {/* Hero Page Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#EBF7FD] via-[#FAFDFE] to-[#FFF4E8] text-center border-b border-sky-100">
        <div className="max-container space-y-3">
          <span className="inline-block bg-[#EAF7FD] border border-sky-200/60 text-[#00A8E8] px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
            Beachwood Garment Care Journal
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#363C44] tracking-tight">
            Read Our <span className="text-[#F97316]">Latest News & Guides</span>
          </h1>
          <p className="text-[#5B636B] text-xs sm:text-sm font-medium max-w-xl mx-auto leading-relaxed">
            Discover expert garment care tips, stain removal guides, and laundry insights from Beachwood Cleaners.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar + 6 Blog Cards Grid */}
      <section className="py-12 sm:py-16 bg-[#FAFDFE]">
        <div className="max-container space-y-10">
          
          {/* Controls Bar: Filter Pills + Search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full font-extrabold text-xs transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#F97316] text-white shadow-md shadow-orange-200 scale-105"
                        : "bg-[#EAF7FD] text-[#00A8E8] hover:bg-[#00A8E8] hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64 shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-white border border-sky-200 text-slate-800 placeholder-slate-400 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#00A8E8] shadow-xs"
              />
            </div>

          </div>

          {/* 6 Blog Grid Posts linking to /blog/[id] */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-3xl p-5 border border-sky-100/90 shadow-xs hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between text-xs font-semibold text-[#64748B] px-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#00A8E8]" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#F97316]" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  {/* Image Container */}
                  <Link href={`/blog/${post.id}`} className="block relative h-48 sm:h-52 w-full rounded-2xl overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  {/* Category & Title */}
                  <div className="space-y-2 px-1">
                    <span className="inline-block border border-orange-200 text-[#F97316] bg-[#FFF8F1] px-3.5 py-1 rounded-full text-[11px] font-extrabold">
                      {post.category}
                    </span>

                    <h3 className="font-extrabold text-[#2C3238] text-base sm:text-lg leading-snug group-hover:text-[#00A8E8] transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>

                    <p className="text-xs text-[#5B636B] font-medium leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-1 pt-2">
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#00A8E8] group-hover:text-[#F97316] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Newsletter Banner */}
      <NewsletterBannerSection />

    </div>
  );
}
