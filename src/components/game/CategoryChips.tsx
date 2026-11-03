"use client";

import React from "react";
import { CATEGORIES } from "@/lib/games-data";
import { GameCategory } from "@/types/game";
import { Compass } from "lucide-react";

interface CategoryChipsProps {
  selectedCategory: GameCategory;
  onSelectCategory: (cat: GameCategory) => void;
}

export default function CategoryChips({
  selectedCategory,
  onSelectCategory,
}: CategoryChipsProps) {
  return (
    <div className="py-4">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {/* Label Jelajahi Khas Travelista */}
        <div className="shrink-0 flex items-center gap-1 text-xs font-black uppercase tracking-wider text-slate-500 mr-1">
          <Compass className="w-3.5 h-3.5 text-red-600" />
          <span>JELAJAHI:</span>
        </div>

        {/* Category Pills */}
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer shadow-sm active:scale-95 ${
                isSelected
                  ? "bg-[#E53935] text-white shadow-red-500/20 shadow-md ring-2 ring-red-400"
                  : "bg-white hover:bg-slate-100 border border-slate-200 text-slate-700"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

