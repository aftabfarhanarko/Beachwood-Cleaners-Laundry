"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, CheckCircle2 } from "lucide-react";

export function PricingCalculator() {
  const [washWeight, setWashWeight] = useState<number>(15);
  const [shirts, setShirts] = useState<number>(3);
  const [suits, setSuits] = useState<number>(1);
  const [dresses, setDresses] = useState<number>(0);

  const washRate = 2.45;
  const shirtRate = 6.95;
  const suitRate = 22.0;
  const dressRate = 17.0;

  const totalWash = washWeight * washRate;
  const totalShirts = shirts * shirtRate;
  const totalSuits = suits * suitRate;
  const totalDresses = dresses * dressRate;

  const subtotal = totalWash + totalShirts + totalSuits + totalDresses;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center text-[#00A8B5]">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#00223D]">Instant Price Estimator</h3>
          <p className="text-xs sm:text-sm text-slate-500">Calculate your transparent laundry cost before booking.</p>
        </div>
      </div>

      <div className="space-y-5">
        {/* Wash & Fold Slider */}
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-slate-800 text-sm">
              Wash & Fold Laundry ($2.45 / lb)
            </span>
            <span className="text-[#00A8B5] font-extrabold text-sm">{washWeight} lbs (${totalWash.toFixed(2)})</span>
          </div>
          <input
            type="range"
            min="10"
            max="50"
            step="1"
            value={washWeight}
            onChange={(e) => setWashWeight(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00A8B5]"
          />
          <div className="flex justify-between text-[11px] text-slate-400 mt-1">
            <span>10 lbs (Min)</span>
            <span>25 lbs (Avg Bag)</span>
            <span>50 lbs (Large)</span>
          </div>
        </div>

        {/* Item Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Shirts */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between">
            <span className="text-xs font-semibold text-slate-700">Shirts ($6.95/ea)</span>
            <div className="flex items-center justify-between mt-2">
              <button
                onClick={() => setShirts(Math.max(0, shirts - 1))}
                className="w-7 h-7 rounded-lg bg-white border border-slate-200 font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                -
              </button>
              <span className="font-bold text-slate-900">{shirts}</span>
              <button
                onClick={() => setShirts(shirts + 1)}
                className="w-7 h-7 rounded-lg bg-white border border-slate-200 font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          {/* Suits */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between">
            <span className="text-xs font-semibold text-slate-700">Suits ($22.00/ea)</span>
            <div className="flex items-center justify-between mt-2">
              <button
                onClick={() => setSuits(Math.max(0, suits - 1))}
                className="w-7 h-7 rounded-lg bg-white border border-slate-200 font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                -
              </button>
              <span className="font-bold text-slate-900">{suits}</span>
              <button
                onClick={() => setSuits(suits + 1)}
                className="w-7 h-7 rounded-lg bg-white border border-slate-200 font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          {/* Dresses */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between">
            <span className="text-xs font-semibold text-slate-700">Dresses ($17.00/ea)</span>
            <div className="flex items-center justify-between mt-2">
              <button
                onClick={() => setDresses(Math.max(0, dresses - 1))}
                className="w-7 h-7 rounded-lg bg-white border border-slate-200 font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                -
              </button>
              <span className="font-bold text-slate-900">{dresses}</span>
              <button
                onClick={() => setDresses(dresses + 1)}
                className="w-7 h-7 rounded-lg bg-white border border-slate-200 font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Estimated Total Display */}
        <div className="p-5 bg-gradient-to-br from-[#003B65] to-[#00A8B5] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-cyan-100 block">
              Estimated Total Cost
            </span>
            <div className="text-3xl font-black">${subtotal.toFixed(2)}</div>
            <span className="text-[11px] text-[#FFC72C] flex items-center gap-1 mt-1 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" /> Free Pickup & Delivery Included
            </span>
          </div>
          <a
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FFC72C] hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl transition-all duration-150 shadow-md hover:shadow-lg active:scale-98 text-sm shrink-0"
          >
            Book This Order <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
