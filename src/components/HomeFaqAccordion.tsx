"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

export function HomeFaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all"
        >
          <button
            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            className="w-full p-5 text-left font-bold text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-50 cursor-pointer"
          >
            <span className="text-base">{faq.q}</span>
            <ChevronDown
              className={`w-5 h-5 text-slate-500 transition-transform ${
                openFaq === idx ? "rotate-180 text-[#2563EB]" : ""
              }`}
            />
          </button>
          {openFaq === idx && (
            <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
