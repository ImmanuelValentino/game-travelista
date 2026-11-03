import React from "react";
import Link from "next/link";
import { Flame, Sparkles, ChevronRight } from "lucide-react";

export default function BreakingTicker() {
  const tickerItems = [
    { text: "🔥 Nusantara Runner baru saja dimainkan oleh 1.420 traveler!", href: "/play/nusantara-runner" },
    { text: "🏆 Rekor Skor Baru: 14.200 pts diraih BudiTraveler di Nusantara Runner", href: "/play/nusantara-runner" },
    { text: "🚢 Diskon Tiket Kapal Feri Merak - Bakauheni s.d 30% di Travelista", href: "https://travelista.id" },
    { text: "⭐ Game Baru Rilis: Kapal Feri Island Hopper siap dijelajahi", href: "/play/kapal-feri" },
    { text: "🧩 Selesaikan Packing Master untuk raih badge Backpacker Sejati!", href: "/play/packing-master" },
  ];

  return (
    <div className="bg-[#E53935] text-white text-xs h-9 flex items-center overflow-hidden border-b border-red-700/60 shadow-inner select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center gap-3">
        {/* Badge Ticker */}
        <div className="shrink-0 flex items-center gap-1.5 bg-red-800/80 px-2.5 py-1 rounded-md text-[11px] font-black uppercase tracking-wider text-amber-300 shadow-sm">
          <Flame className="w-3.5 h-3.5 fill-amber-300" />
          <span>TRENDING</span>
        </div>

        {/* Marquis Container */}
        <div className="flex-1 overflow-hidden relative">
          <div className="animate-ticker flex items-center gap-8 text-white font-medium">
            {tickerItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="inline-flex items-center gap-1 hover:text-amber-200 transition-colors shrink-0"
              >
                <span>{item.text}</span>
                <ChevronRight className="w-3 h-3 text-red-200 inline" />
              </Link>
            ))}
            {/* Duplikasi untuk looping mulus */}
            {tickerItems.map((item, index) => (
              <Link
                key={`dup-${index}`}
                href={item.href}
                className="inline-flex items-center gap-1 hover:text-amber-200 transition-colors shrink-0"
              >
                <span>{item.text}</span>
                <ChevronRight className="w-3 h-3 text-red-200 inline" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

