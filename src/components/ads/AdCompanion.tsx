import React from "react";
import Link from "next/link";
import { Sparkles, ExternalLink } from "lucide-react";

export default function AdCompanion() {
  return (
    <div className="w-[300px] h-[250px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 rounded-2xl border border-slate-700/80 shadow-lg p-4 flex flex-col justify-between relative overflow-hidden group">
      {/* Background Accent Glow */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-red-600/20 rounded-full blur-2xl pointer-events-none" />

      {/* Top Tag */}
      <div className="flex items-center justify-between z-10">
        <span className="text-[10px] font-black uppercase tracking-wider bg-red-600 text-white px-2 py-0.5 rounded-md flex items-center gap-1 shadow">
          <Sparkles className="w-2.5 h-2.5" />
          <span>SPONSOR TRAVELISTA</span>
        </span>
        <span className="text-[10px] text-slate-400 uppercase font-semibold">
          IKLAN 300x250
        </span>
      </div>

      {/* Center Body */}
      <div className="z-10 flex items-center gap-3 my-2">
        <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-3xl shrink-0 group-hover:scale-105 transition-transform">
          🎫
        </div>
        <div>
          <h4 className="text-white text-sm font-bold leading-snug">
            Cek Tiket Kapal & Tur
          </h4>
          <p className="text-slate-300 text-xs mt-0.5 leading-relaxed">
            Booking penyeberangan feri resmi & paket wisata nusantara online.
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <Link
        href="https://travelista.id"
        target="_blank"
        rel="noopener noreferrer"
        className="z-10 w-full py-2.5 bg-red-600 hover:bg-red-700 active:scale-95 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
      >
        <span>Pesan Sekarang</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}

