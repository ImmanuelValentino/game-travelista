import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getGameBySlug, INITIAL_GAMES } from "@/lib/games-data";
import GameFrame from "@/components/game/GameFrame";
import AdCompanion from "@/components/ads/AdCompanion";
import GameCard from "@/components/game/GameCard";
import { ArrowLeft, Keyboard, Smartphone, Info } from "lucide-react";

interface PlayPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PlayPage({ params }: PlayPageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  const relatedGames = INITIAL_GAMES.filter(
    (g) => g.id !== game.id && (g.category === game.category || g.featured)
  ).slice(0, 7);

  return (
    <div className="pt-4 space-y-6">
      {/* Breadcrumb / Back Link */}
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link
          href="/"
          className="inline-flex items-center gap-1 hover:text-red-600 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke Katalog</span>
        </Link>
        <span>/</span>
        <span className="uppercase text-slate-400">{game.category}</span>
        <span>/</span>
        <span className="text-slate-800 font-bold">{game.title}</span>
      </div>

      {/* Main Gameplay Layout: Game Frame + Sidebar Companion */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Left Column: Game Iframe Container (Span 3) */}
        <div className="xl:col-span-3 space-y-6">
          <GameFrame game={game} />

          {/* Description & Controls Guide Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm space-y-4">
            <div>
              <h3 className="text-sm sm:text-base font-black text-slate-900 flex items-center gap-2">
                <Info className="w-4 h-4 text-red-600" />
                <span>Tentang {game.title}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                {game.description}
              </p>
            </div>

            {/* Controls Guide */}
            {game.controlsGuide && (
              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Keyboard className="w-3.5 h-3.5 text-slate-500" />
                  <span>Petunjuk Tombol Kendali</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {game.controlsGuide.keyboard && (
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/70">
                      <span className="font-bold text-slate-700 block mb-1">
                        💻 Keyboard Komputer:
                      </span>
                      <ul className="list-disc list-inside space-y-1 text-slate-600">
                        {game.controlsGuide.keyboard.map((k, idx) => (
                          <li key={idx}>{k}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {game.controlsGuide.touch && (
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/70">
                      <span className="font-bold text-slate-700 block mb-1 flex items-center gap-1">
                        <Smartphone className="w-3.5 h-3.5 text-slate-500" /> Layar Sentuh / HP:
                      </span>
                      <p className="text-slate-600">{game.controlsGuide.touch}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Companion Ad (300x250) + Sinergi Travelista */}
        <div className="xl:col-span-1 space-y-6 flex flex-col items-center xl:items-start">
          {/* Ad Companion Banner 300x250 */}
          <AdCompanion />

          {/* Sinergi Promo Travelista Card */}
          <div className="w-[300px] bg-gradient-to-br from-red-600 to-rose-700 text-white p-5 rounded-2xl shadow-lg space-y-3">
            <span className="text-[10px] uppercase font-black bg-white/20 px-2 py-0.5 rounded-full inline-block">
              TRAVELISTA PARTNER
            </span>
            <h4 className="text-sm font-bold leading-tight">
              Butuh Tiket Kapal Penyeberangan?
            </h4>
            <p className="text-xs text-red-100 leading-relaxed">
              Dapatkan jadwal keberadaan kapal feri terlengkap di pelabuhan Merak, Bakauheni, dan Ketapang.
            </p>
            <Link
              href="https://travelista.id"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2 bg-white hover:bg-slate-100 text-red-700 text-xs font-bold rounded-xl text-center shadow transition-colors"
            >
              Cek Tiket di Travelista.id &gt;
            </Link>
          </div>
        </div>
      </div>

      {/* Related Games (Friv Grid Small) */}
      <section className="pt-6">
        <h3 className="text-base font-black text-slate-900 mb-4 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
          <span>Game Seru Lainnya Untukmu</span>
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3">
          {relatedGames.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </div>
      </section>
    </div>
  );
}

