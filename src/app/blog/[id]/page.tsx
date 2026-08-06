import React from "react";
import { blogPosts, BlogPost } from "@/data/blogData";
import { NewsletterBannerSection } from "@/components/home/NewsletterBannerSection";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, ArrowRight, CheckCircle2, Tag, PhoneCall, Sparkles, RefreshCw, Shirt, ShieldCheck } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.id === resolvedParams.id);
  if (!post) return { title: "Post Not Found | Beachwood Cleaners" };
  return {
    title: `${post.title} | Beachwood Cleaners Journal`,
    description: post.excerpt,
  };
}

export default async function BlogDetailsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.id === resolvedParams.id);

  if (!post) {
    notFound();
  }

  // Get 2 related posts
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  const processSteps = [
    {
      num: "01",
      title: "Inspection & Spot Testing",
      desc: "Our master cleaners inspect care tags, check pocket contents, and perform color-fastness tests.",
      icon: SearchIcon,
    },
    {
      num: "02",
      title: "Eco Organic Wash",
      desc: "Washed in non-toxic, hypoallergenic soap formulas tailored to garment fiber types.",
      icon: Sparkles,
    },
    {
      num: "03",
      title: "Steam Pressing",
      desc: "Precision hand steam pressing ensuring crisp collar lines and zero wrinkles.",
      icon: Shirt,
    },
    {
      num: "04",
      title: "Sealed 24h Delivery",
      desc: "Crisp rectangular folding or custom hanger packaging delivered to your doorstep in 24 hours.",
      icon: RefreshCw,
    },
  ];

  function SearchIcon() {
    return (
      <svg className="w-5 h-5 text-[#00A8E8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    );
  }

  return (
    <div className="space-y-0 overflow-hidden bg-white">
      
      {/* Top Navigation Bar */}
      <section className="py-4 bg-[#FAFDFE] border-b border-sky-100">
        <div className="max-container">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-extrabold text-[#00A8E8] hover:text-[#F97316] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>
      </section>

      {/* Article Header Section with Compact Font Sizes & Subtle Animation */}
      <section className="py-10 sm:py-14 bg-gradient-to-r from-[#EBF7FD] via-[#FAFDFE] to-[#FFF4E8] border-b border-sky-100">
        <div className="max-container max-w-4xl space-y-4 animate-fadeIn">
          
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-[#F97316] text-white px-3 py-0.5 rounded-full text-xs font-extrabold shadow-xs">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-[#64748B]">
              <Calendar className="w-3.5 h-3.5 text-[#00A8E8]" />
              {post.date}
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-[#64748B]">
              <Clock className="w-3.5 h-3.5 text-[#F97316]" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-[#363C44] leading-tight tracking-tight">
            {post.title}
          </h1>

          {/* Author Badge */}
          <div className="flex items-center gap-3 pt-1">
            <img
              src={post.authorAvatar}
              alt={post.author}
              className="w-10 h-10 rounded-full object-cover border-2 border-[#00A8E8] shadow-xs"
            />
            <div>
              <p className="font-extrabold text-[#2C3238] text-xs sm:text-sm">{post.author}</p>
              <p className="text-[11px] text-[#5B636B] font-medium">{post.authorRole}</p>
            </div>
          </div>

        </div>
      </section>

      {/* Main Article Body & Interactive Process Sidebar Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-container max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Article Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Featured Image with Hover Scale Animation */}
            <div className="rounded-3xl overflow-hidden border border-sky-100 h-[280px] sm:h-[360px] w-full shadow-sm group">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
            </div>

            {/* Compact Paragraph Content */}
            <div className="space-y-4 text-[#475569] text-xs sm:text-sm leading-relaxed font-medium">
              {post.content.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Key Takeaways Box */}
            <div className="bg-[#EAF7FD] border border-sky-200/80 rounded-3xl p-6 space-y-3 shadow-xs hover:shadow-md transition-all">
              <h3 className="font-black text-[#2C3238] text-base sm:text-lg flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#F97316]" />
                <span>Key Takeaways</span>
              </h3>

              <div className="space-y-2.5">
                {post.keyTakeaways.map((takeaway, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-[#363C44]">
                    <CheckCircle2 className="w-4 h-4 text-[#00A8E8] shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive "How We Care For Your Garments" Process Flow */}
            <div className="bg-gradient-to-br from-[#FAFDFE] to-[#F0F9FF] border border-sky-100 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="space-y-1 text-center sm:text-left">
                <span className="bg-[#EAF7FD] text-[#00A8E8] px-3 py-0.5 rounded-full text-[11px] font-extrabold uppercase">
                  Our Garment Care Process
                </span>
                <h3 className="text-xl font-black text-[#363C44]">
                  How We Wash & Care For Your <span className="text-[#F97316]">Clothes</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {processSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.num}
                      className="bg-white rounded-2xl p-5 border border-sky-100 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 rounded-xl bg-[#EAF7FD] flex items-center justify-center">
                          <Icon />
                        </div>
                        <span className="text-xs font-black text-[#F97316] bg-[#FFF4E8] px-2 py-0.5 rounded-md">
                          Step {step.num}
                        </span>
                      </div>
                      <h4 className="font-extrabold text-[#2C3238] text-sm">{step.title}</h4>
                      <p className="text-[11px] text-[#5B636B] font-medium leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Share & Back Action Bar */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs font-extrabold text-[#00A8E8] hover:text-[#F97316] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Journal</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F97316] text-white text-xs font-extrabold hover:bg-[#EA580C] shadow-md transition-all cursor-pointer"
              >
                <span>Schedule Pickup</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Pickup Call Card */}
            <div className="bg-gradient-to-br from-[#00A8E8] to-[#007EA7] text-white rounded-3xl p-6 space-y-5 shadow-lg relative overflow-hidden">
              <div className="space-y-2 relative z-10">
                <span className="bg-white/20 text-white px-3 py-0.5 rounded-full text-[11px] font-extrabold">
                  Free Doorstep Pickup
                </span>
                <h3 className="text-xl font-black">
                  Need Laundry Done Today?
                </h3>
                <p className="text-sky-100 text-xs leading-relaxed font-medium">
                  Let Beachwood Cleaners take care of your laundry. We offer 24-hour turnaround across Los Angeles.
                </p>
              </div>

              <a
                href="tel:+13238287503"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white font-extrabold text-xs shadow-md transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call +1 (323) 828-7503</span>
              </a>
            </div>

            {/* Related Articles */}
            <div className="bg-[#FAFDFE] border border-sky-100 rounded-3xl p-6 space-y-4">
              <h4 className="font-extrabold text-[#2C3238] text-sm border-b border-sky-100 pb-2.5">
                More Articles
              </h4>

              <div className="space-y-3.5">
                {relatedPosts.map((rel) => (
                  <div key={rel.id} className="space-y-1">
                    <span className="text-[10px] font-extrabold text-[#F97316] uppercase">
                      {rel.category}
                    </span>
                    <h5 className="font-bold text-xs text-[#2C3238] hover:text-[#00A8E8] leading-snug">
                      <Link href={`/blog/${rel.id}`}>{rel.title}</Link>
                    </h5>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Newsletter Banner */}
      <NewsletterBannerSection />

    </div>
  );
}
