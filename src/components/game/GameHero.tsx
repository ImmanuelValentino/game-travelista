"use client";

import React from "react";
import Link from "next/link";
import { Game } from "@/types/game";
import { Play, Flame, Star, Sparkles, Users } from "lucide-react";
import { formatNumber } from "@/lib/utils";

interface GameHeroProps {
  featuredGames: Game[];
}

export default function GameHero({ featuredGames }: GameHeroProps) {
  if (!featuredGames || featuredGames.length < 3) return null;

  const mainHero = featuredGames[0];
  const sideHeroes = featuredGames.slice(1, 3);

  return (
    <section className="mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Main Hero Card (Large - Span 2 Columns) */}
        <div className="lg:col-span-2 relative h-[320px] sm:h-[380px] rounded-3xl overflow-hidden bg-gradient-to-tr from-slate-950 via-slate-900 to-red-950 border border-slate-200/80 shadow-xl group">
          {/* Visual Background Illustration */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-600/30 via-amber-600/10 to-transparent pointer-events-none" />
          <div className="absolute right-4 bottom-4 opacity-20 text-[140px] sm:text-[180px] select-none pointer-events-none filter drop-shadow-2xl">
            🏃‍♂️
          </div>

          {/* Content Container */}
          <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8 text-white">
            {/* Top Badges */}
            <div className="flex items-center gap-2">
              <span className="bg-red-600 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                <Flame className="w-3.5 h-3.5 fill-white" />
                <span>GAME OF THE WEEK</span>
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 border border-white/20">
                <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                <span>{mainHero.rating.toFixed(1)} Rating</span>
              </span>
            </div>

            {/* Bottom Info & Play CTA */}
            <div className="max-w-xl">
              <span className="text-red-400 text-xs font-bold uppercase tracking-wider">
                {mainHero.category} • Petualangan Nusantara
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mt-1 leading-tight tracking-tight drop-shadow-sm">
                {mainHero.title}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                {mainHero.description}
              </p>

              <div className="flex items-center gap-4 mt-5">
                <Link
                  href={`/play/${mainHero.slug}`}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 active:scale-95 text-white text-sm font-black rounded-xl shadow-lg hover:shadow-red-600/30 transition-all flex items-center gap-2"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Main Sekarang</span>
                </Link>
                <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                  <Users className="w-4 h-4 text-slate-400" />
                  <span>{formatNumber(mainHero.playCount)} pemain aktif</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2 Stacked Side Hero Cards */}
        <div className="flex flex-col gap-4">
          {sideHeroes.map((game, idx) => (
            <Link
              key={game.id}
              href={`/play/${game.slug}`}
              className="relative flex-1 h-[152px] sm:h-[182px] rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-200/80 shadow-md hover:shadow-xl hover:border-red-500 transition-all overflow-hidden p-5 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500 text-white flex items-center gap-1 shadow">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>{game.badge || "FEATURED"}</span>
                </span>
                <span className="text-2xl">{idx === 0 ? "🚢" : "🎒"}</span>
              </div>

              <div>
                <span className="text-red-400 text-[10px] font-bold uppercase">
                  {game.category}
                </span>
                <h3 className="text-white text-sm sm:text-base font-bold leading-snug line-clamp-1 group-hover:text-red-400 transition-colors">
                  {game.title}
                </h3>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10">
                  <span className="text-[11px] text-slate-400">
                    {formatNumber(game.playCount)} main
                  </span>
                  <span className="text-xs font-bold text-red-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Mainkan</span>
                    <span>&gt;</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

