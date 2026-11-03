"use client";

import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

interface AdSkyscraperProps {
  position: "left" | "right";
  slotId?: string;
}

export default function AdSkyscraper({ position }: AdSkyscraperProps) {
  return (
    <aside
      className={`hidden 2xl:block fixed top-32 z-30 w-[160px] ${
        position === "left" ? "left-3" : "right-3"
      }`}
      aria-label={`Advertisement ${position}`}
    >
      <div className="flex flex-col items-center">
        {/* Label Iklan Sesuai Kebijakan Google */}
        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">
          IKLAN
        </span>

        {/* Container Banner 160x600 */}
        <div className="w-[160px] h-[600px] bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 rounded-xl border border-slate-700/60 shadow-xl overflow-hidden flex flex-col justify-between p-3 relative group">
          {/* Subtle Glow Background */}
          <div className="absolute inset-0 bg-red-600/10 opacity-30 group-hover:opacity-50 transition-opacity pointer-events-none" />

          {/* Top Brand / Sponsor Header */}
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-1 bg-red-600/90 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-full mb-2">
              <Sparkles className="w-2.5 h-2.5" />
              <span>SPONSOR</span>
            </div>
            <h4 className="text-white text-xs font-bold leading-tight">
              {position === "left" ? "Tiket Kapal Feri" : "Paket Wisata Bali"}
            </h4>
            <p className="text-slate-300 text-[10px] mt-1 leading-snug">
              {position === "left"
                ? "Diskon s.d 30% rute Merak - Bakauheni & Ketapang - Gilimanuk."
                : "Nikmati liburan hemat pulau impian bersama Travelista."}
            </p>
          </div>

          {/* Visual Graphic Element */}
          <div className="relative z-10 flex flex-col items-center justify-center my-4">
            <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-4xl shadow-inner group-hover:scale-105 transition-transform duration-300">
              {position === "left" ? "🚢" : "🏖️"}
            </div>
            <div className="mt-3 px-2 py-1 bg-amber-400 text-slate-950 font-black text-xs rounded-md shadow">
              HEMAT 40%
            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="relative z-10 text-center">
            <Link
              href="https://travelista.id"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2 px-3 bg-red-600 hover:bg-red-700 active:scale-95 text-white text-xs font-bold rounded-lg shadow-md transition-all text-center"
            >
              Cek Promo &gt;
            </Link>
            <span className="text-[9px] text-slate-400 block mt-1">
              travelista.id
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}

