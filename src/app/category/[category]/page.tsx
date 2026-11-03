import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getGamesByCategory, CATEGORIES } from "@/lib/games-data";
import GameGrid from "@/components/game/GameGrid";
import { GameCategory } from "@/types/game";
import { ArrowLeft } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const validCat = CATEGORIES.find((c) => c.id === category);

  if (!validCat) {
    notFound();
  }

  const games = getGamesByCategory(category);

  return (
    <div className="pt-6 space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link
          href="/"
          className="inline-flex items-center gap-1 hover:text-red-600 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Semua Game</span>
        </Link>
        <span>/</span>
        <span className="text-slate-800 font-bold uppercase">{validCat.label}</span>
      </div>

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-700/60 shadow-lg flex items-center justify-between">
        <div>
          <span className="text-3xl mb-2 block">{validCat.icon}</span>
          <h1 className="text-xl sm:text-2xl font-black tracking-tight">
            Game Kategori {validCat.label}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Jelajahi dan mainkan game {validCat.label.toLowerCase()} seru pilihan Travelista Games.
          </p>
        </div>
      </div>

      {/* Grid */}
      <GameGrid games={games} title={`Daftar Game ${validCat.label}`} />
    </div>
  );
}

