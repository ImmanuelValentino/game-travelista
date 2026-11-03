"use client";

import React, { useState } from "react";
import GameHero from "@/components/game/GameHero";
import CategoryChips from "@/components/game/CategoryChips";
import GameGrid from "@/components/game/GameGrid";
import { INITIAL_GAMES } from "@/lib/games-data";
import { GameCategory } from "@/types/game";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<GameCategory>("all");

  const featuredGames = INITIAL_GAMES.filter((g) => g.featured);
  const displayGames =
    selectedCategory === "all"
      ? INITIAL_GAMES
      : INITIAL_GAMES.filter((g) => g.category === selectedCategory);

  return (
    <div className="pt-6">
      {/* 1. Hero Section (Travelista Style 1 Large + 2 Stacked) */}
      <GameHero featuredGames={featuredGames} />

      {/* 2. Jelajahi Kategori Filter Chips */}
      <CategoryChips
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* 3. The Friv Game Grid */}
      <GameGrid
        games={displayGames}
        title={
          selectedCategory === "all"
            ? "Koleksi Game Friv Populer"
            : `Kategori: ${selectedCategory.toUpperCase()}`
        }
      />

      {/* 4. Section Edukasi & SEO Travelista Games */}
      <section className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 mt-12 shadow-sm">
        <h2 className="text-lg sm:text-xl font-black text-slate-900 mb-2">
          Selamat Datang di Travelista Games
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Travelista Games adalah platform hiburan mini game HTML5 instan yang menghadirkan pengalaman bermain seru bertema keindahan pariwisata, kuliner, dan budaya Indonesia. Nikmati ratusan game arcade, strategi kapal feri, dan asah otak koper tanpa perlu mengunduh aplikasi tambahan!
        </p>
      </section>
    </div>
  );
}
