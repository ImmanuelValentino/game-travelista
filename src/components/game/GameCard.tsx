"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Game } from "@/types/game";
import { Play, Star, Flame, Sparkles } from "lucide-react";
import { formatNumber } from "@/lib/utils";

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const [imageError, setImageError] = useState(false);

  // Gradient generator for fallback visual based on title hash
  const getGradientByString = (str: string) => {
    const gradients = [
      "from-rose-500 to-red-600",
      "from-amber-400 to-orange-600",
      "from-emerald-400 to-teal-600",
      "from-sky-400 to-indigo-600",
      "from-purple-500 to-pink-600",
      "from-blue-500 to-cyan-600",
    ];
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % gradients.length;
    return gradients[index];
  };

  const getEmojiByGame = (game: Game) => {
    switch (game.slug) {
      case "nusantara-runner":
        return "🏃‍♂️";
      case "kapal-feri":
        return "🚢";
      case "packing-master":
        return "🧳";
      case "becak-drift":
        return "🛺";
      case "candi-stacker":
        return "🛕";
      case "batik-flow":
        return "🎨";
      case "layangan-sanur":
        return "🪁";
      case "kopi-klotok":
        return "☕";
      case "lembah-bromo":
        return "🪂";
      case "pasar-terapung":
        return "🛶";
      case "kamus-kelana":
        return "🗺️";
      default:
        switch (game.category) {
          case "arcade":
            return "🕹️";
          case "adventure":
            return "🧭";
          case "puzzle":
            return "🧩";
          case "action":
            return "⚡";
          case "casual":
            return "☕";
          case "sports":
            return "⚽";
          default:
            return "🎮";
        }
    }
  };

  return (
    <Link
      href={`/play/${game.slug}`}
      className="group relative aspect-square rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl hover:scale-105 hover:border-red-500 transition-all duration-300 overflow-hidden flex flex-col justify-between block select-none cursor-pointer"
    >
      {/* Background Graphic / Canvas */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${getGradientByString(
          game.title
        )} flex flex-col items-center justify-center p-3 text-white transition-transform duration-500 group-hover:scale-110`}
      >
        <span className="text-4xl sm:text-5xl filter drop-shadow-md group-hover:rotate-6 transition-transform">
          {getEmojiByGame(game)}
        </span>
      </div>

      {/* Top Badges */}
      <div className="relative z-10 p-2.5 flex items-start justify-between">
        {game.badge && game.badge !== "NONE" && (
          <span
            className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-md flex items-center gap-1 ${
              game.badge === "HOT"
                ? "bg-red-600 text-white"
                : game.badge === "BARU"
                ? "bg-emerald-600 text-white"
                : "bg-amber-400 text-slate-900"
            }`}
          >
            {game.badge === "HOT" && <Flame className="w-2.5 h-2.5 fill-white" />}
            {game.badge === "BARU" && <Sparkles className="w-2.5 h-2.5" />}
            <span>{game.badge}</span>
          </span>
        )}
        <div className="ml-auto bg-black/40 backdrop-blur-sm text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md flex items-center gap-1 shadow">
          <Star className="w-2.5 h-2.5 text-amber-300 fill-amber-300" />
          <span>{game.rating.toFixed(1)}</span>
        </div>
      </div>

      {/* Hover Overlay with Title and Play Button */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3 text-white">
        <h4 className="text-xs sm:text-sm font-bold leading-tight line-clamp-2 drop-shadow">
          {game.title}
        </h4>
        <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/20">
          <span className="text-[10px] text-slate-300 font-medium">
            {formatNumber(game.playCount)} pemain
          </span>
          <span className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
          </span>
        </div>
      </div>

      {/* Default Bottom Bar (When Not Hovered) */}
      <div className="relative z-10 bg-white/95 backdrop-blur-sm px-2.5 py-1.5 border-t border-slate-100 flex items-center justify-between group-hover:opacity-0 transition-opacity">
        <span className="text-[11px] font-bold text-slate-800 truncate pr-1">
          {game.title}
        </span>
      </div>
    </Link>
  );
}

