"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, X, Play, Star, Flame } from "lucide-react";
import { INITIAL_GAMES } from "@/lib/games-data";
import { Game } from "@/types/game";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Game[]>(INITIAL_GAMES.slice(0, 6));
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults(INITIAL_GAMES.slice(0, 6));
      return;
    }
    const q = query.toLowerCase();
    const filtered = INITIAL_GAMES.filter(
      (g) =>
        g.title.toLowerCase().includes(q) ||
        g.description.toLowerCase().includes(q) ||
        g.category.toLowerCase().includes(q)
    );
    setResults(filtered);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-red-600 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari game seru (misal: runner, kapal, koper, puzzle)..."
            className="w-full text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-3 space-y-1.5">
          <div className="text-[11px] uppercase font-bold text-slate-400 px-3 py-1">
            {query.trim() ? `Hasil Pencarian (${results.length})` : "Rekomendasi Populer"}
          </div>

          {results.length === 0 ? (
            <div className="py-8 text-center text-slate-500 text-xs">
              Tidak ada game yang cocok dengan &quot;{query}&quot;
            </div>
          ) : (
            results.map((game) => (
              <Link
                key={game.id}
                href={`/play/${game.slug}`}
                onClick={onClose}
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-slate-900 to-slate-800 text-white flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition-transform">
                    🎮
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                      {game.title}
                    </h5>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] uppercase font-semibold text-slate-400">
                        {game.category}
                      </span>
                      <span className="text-[10px] text-amber-500 font-bold flex items-center gap-0.5">
                        <Star className="w-2.5 h-2.5 fill-amber-500" />
                        {game.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>
                </div>

                <span className="p-2 rounded-full bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

