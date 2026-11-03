"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, ExternalLink, Sparkles } from "lucide-react";

export default function AdBottomAnchor() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 flex flex-col items-center pointer-events-none transition-transform duration-300 ${
        isCollapsed ? "translate-y-[calc(100%-28px)]" : "translate-y-0"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-label={isCollapsed ? "Buka Iklan" : "Sembunyikan Iklan"}
        className="pointer-events-auto bg-slate-900/90 hover:bg-slate-950 text-white text-[10px] font-bold px-3 py-1 rounded-t-lg border-t border-x border-slate-700/70 shadow-lg flex items-center gap-1.5 backdrop-blur-sm cursor-pointer transition-colors"
      >
        <span>{isCollapsed ? "Tampilkan Iklan" : "Sembunyikan Iklan"}</span>
        {isCollapsed ? (
          <ChevronUp className="w-3.5 h-3.5 text-amber-400" />
        ) : (
          <ChevronDown className="w-3.5 h-3.5 text-slate-300" />
        )}
      </button>

      {/* Ad Banner Body (728x90 Desktop / 320x50 Mobile) */}
      <div className="pointer-events-auto w-full max-w-[728px] mx-auto bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-t border-x border-slate-700/80 shadow-2xl rounded-t-xl overflow-hidden px-3 py-2 flex items-center justify-between gap-3">
        {/* Left Ad Info */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center text-2xl shadow-md shrink-0">
            🚢
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] bg-red-600 text-white font-black uppercase px-1.5 py-0.2 rounded">
                SPONSOR
              </span>
              <span className="text-white text-xs font-bold sm:text-sm">
                Travelista Ferry & Tour Pass
              </span>
            </div>
            <p className="text-slate-300 text-[11px] hidden sm:block mt-0.5">
              Pesan Tiket Kapal Feri Merak - Bakauheni & Ketapang - Gilimanuk instan tanpa antre!
            </p>
          </div>
        </div>

        {/* Right Action Button */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="https://travelista.id"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 active:scale-95 text-white text-xs font-bold rounded-lg shadow-md transition-transform"
          >
            <span>Buka Promo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

