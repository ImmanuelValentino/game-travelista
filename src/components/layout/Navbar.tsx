"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, Trophy, Dices, Globe, Menu, X, ArrowLeft } from "lucide-react";
import { INITIAL_GAMES } from "@/lib/games-data";

interface NavbarProps {
  onOpenSearch?: () => void;
  onOpenLeaderboard?: () => void;
}

export default function Navbar({ onOpenSearch, onOpenLeaderboard }: NavbarProps) {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<"ID" | "EN">("ID");

  const handleRandomPlay = () => {
    const randomIndex = Math.floor(Math.random() * INITIAL_GAMES.length);
    const randomGame = INITIAL_GAMES[randomIndex];
    router.push(`/play/${randomGame.slug}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Sisi Kiri: Logo Travelista GAMES */}
          <div className="flex items-center gap-3">
            <Link
              href="https://travelista.id"
              className="flex items-center gap-2 group"
              title="Kunjungi Portal Utama Travelista.id"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <Image
                    src="/travelista-logo-light.png"
                    alt="Travelista Logo"
                    width={140}
                    height={36}
                    className="h-8 w-auto object-contain group-hover:opacity-90 transition-opacity"
                    priority
                  />
                  <span className="bg-red-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-md tracking-wider shadow-sm">
                    GAMES
                  </span>
                </div>
                <span className="text-[10px] font-medium text-slate-500 hidden sm:inline-flex items-center gap-1 mt-0.5">
                  <ArrowLeft className="w-2.5 h-2.5" /> Portal Wisata travelista.id
                </span>
              </div>
            </Link>
          </div>

          {/* Tengah: Navigasi Kategori (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
            <Link
              href="/"
              className="hover:text-red-600 transition-colors py-1 border-b-2 border-transparent hover:border-red-600"
            >
              Semua Game
            </Link>
            <Link
              href="/category/arcade"
              className="hover:text-red-600 transition-colors py-1 border-b-2 border-transparent hover:border-red-600"
            >
              Arcade
            </Link>
            <Link
              href="/category/adventure"
              className="hover:text-red-600 transition-colors py-1 border-b-2 border-transparent hover:border-red-600"
            >
              Petualangan
            </Link>
            <Link
              href="/category/puzzle"
              className="hover:text-red-600 transition-colors py-1 border-b-2 border-transparent hover:border-red-600"
            >
              Puzzle
            </Link>
            <Link
              href="/category/casual"
              className="hover:text-red-600 transition-colors py-1 border-b-2 border-transparent hover:border-red-600"
            >
              Santai
            </Link>
          </nav>

          {/* Sisi Kanan: Action Badges & Tools */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Pill 1: Main Acak (Meniru style biru Tiket Kapal Travelista) */}
            <button
              onClick={handleRandomPlay}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-700 text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <Dices className="w-3.5 h-3.5 text-sky-600" />
              <span>Main Acak</span>
            </button>

            {/* Pill 2: Leaderboard (Meniru style hijau Paket Wisata Travelista) */}
            <button
              onClick={onOpenLeaderboard}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <Trophy className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden sm:inline">Leaderboard</span>
              <span className="sm:hidden">Skor</span>
            </button>

            {/* Search Icon Trigger */}
            <button
              onClick={onOpenSearch}
              aria-label="Cari Game"
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Language Selector */}
            <button
              onClick={() => setLang(lang === "ID" ? "EN" : "ID")}
              className="hidden md:inline-flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-slate-900 px-2 py-1 rounded-md border border-slate-200"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-2 shadow-lg">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-100">
            <button
              onClick={handleRandomPlay}
              className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-sky-50 text-sky-700 text-xs font-bold border border-sky-200"
            >
              <Dices className="w-3.5 h-3.5" />
              <span>Main Acak</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLeaderboard?.();
              }}
              className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200"
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>Peringkat</span>
            </button>
          </div>
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
          >
            Semua Game
          </Link>
          <Link
            href="/category/arcade"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
          >
            🕹️ Arcade
          </Link>
          <Link
            href="/category/adventure"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
          >
            🧭 Petualangan
          </Link>
          <Link
            href="/category/puzzle"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
          >
            🧩 Puzzle
          </Link>
          <Link
            href="/category/casual"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
          >
            ☕ Santai
          </Link>
          <div className="pt-2 border-t border-slate-100">
            <Link
              href="https://travelista.id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3 py-2 text-xs font-bold text-red-600 bg-red-50 rounded-lg"
            >
              <span>Kunjungi Portal Travelista.id</span>
              <span>&gt;</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

