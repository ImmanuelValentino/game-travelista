import React from "react";
import Link from "next/link";
import { Sparkles, ExternalLink } from "lucide-react";

export default function AdNativeTile() {
  return (
    <Link
      href="https://travelista.id"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative aspect-square rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 border-2 border-dashed border-red-500/50 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200 overflow-hidden flex flex-col justify-between p-3.5"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between z-10">
        <span className="text-[10px] font-black uppercase tracking-wider bg-red-600 text-white px-2 py-0.5 rounded-full flex items-center gap-1 shadow">
          <Sparkles className="w-2.5 h-2.5 text-amber-300" />
          <span>IKLAN</span>
        </span>
        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
      </div>

      {/* Center Visual Icon */}
      <div className="flex flex-col items-center justify-center my-auto z-10 text-center">
        <span className="text-3xl sm:text-4xl filter drop-shadow group-hover:rotate-6 transition-transform">
          🎒
        </span>
        <span className="text-white text-xs sm:text-sm font-bold mt-1 leading-tight line-clamp-1">
          Paket Wisata Hemat
        </span>
        <span className="text-amber-400 text-[10px] sm:text-xs font-semibold">
          Diskon s.d 40%
        </span>
      </div>

      {/* Bottom Button Pill */}
      <div className="z-10 w-full text-center">
        <div className="w-full py-1.5 bg-red-600/90 group-hover:bg-red-600 text-white text-[11px] font-bold rounded-lg transition-colors">
          Lihat Tiket &gt;
        </div>
      </div>
    </Link>
  );
}

