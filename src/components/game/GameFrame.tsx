"use client";

import React, { useState, useEffect, useRef } from "react";
import { Game } from "@/types/game";
import {
  Maximize,
  Minimize,
  RotateCcw,
  Heart,
  Share2,
  Trophy,
  Sparkles,
  Check,
} from "lucide-react";
import {
  toggleLocalFavorite,
  getLocalFavorites,
  addRecentGame,
  saveLocalScore,
} from "@/lib/local-storage";

interface GameFrameProps {
  game: Game;
  onOpenLeaderboard?: () => void;
}

export default function GameFrame({ game, onOpenLeaderboard }: GameFrameProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [copied, setCopied] = useState(false);
  const [lastScore, setLastScore] = useState<number | null>(null);
  const [playerName, setPlayerName] = useState("");
  const [submittedScore, setSubmittedScore] = useState(false);

  // Initialize favorite and record recent play
  useEffect(() => {
    const favs = getLocalFavorites();
    setIsFavorite(favs.includes(game.id));
    addRecentGame(game.id);

    // Record play count on server
    fetch("/api/stats", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ gameId: game.id, action: "play" }),
    }).catch(() => {});
  }, [game.id]);

  // Listen to postMessage from internal HTML5 game iframe
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === "GAME_OVER") {
        const score = Number(e.data.score) || 0;
        setLastScore(score);
        saveLocalScore(game.id, score);
        setSubmittedScore(false);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [game.id]);

  const handleToggleFavorite = () => {
    const next = toggleLocalFavorite(game.id);
    setIsFavorite(next);
  };

  const handleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true));
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false));
    }
  };

  const handleReload = () => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${game.title} - Travelista Games`,
        text: `Ayo mainkan game ${game.title} di Travelista Games sekarang!`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmitScore = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!playerName.trim() || lastScore === null) return;

    try {
      await fetch("/api/leaderboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          gameId: game.id,
          playerName: playerName.trim(),
          score: lastScore,
        }),
      });
      setSubmittedScore(true);
      onOpenLeaderboard?.();
    } catch {
      // ignore
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Game Iframe Wrapper */}
      <div
        ref={containerRef}
        className={`relative w-full rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl transition-all ${
          isFullscreen ? "h-screen rounded-none" : "h-[450px] sm:h-[540px] md:h-[600px]"
        }`}
      >
        <iframe
          ref={iframeRef}
          src={game.gamePath}
          title={game.title}
          className="w-full h-full border-0 select-none"
          allow="autoplay; fullscreen; pointer-lock"
          sandbox="allow-scripts allow-same-origin allow-pointer-lock"
        />

        {/* Score Submission Banner Overlay (When Game Over Emitted) */}
        {lastScore !== null && !submittedScore && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 bg-slate-900/95 border border-amber-500/80 rounded-2xl p-4 shadow-2xl text-white flex flex-col sm:flex-row items-center gap-3 backdrop-blur-md animate-in slide-in-from-top duration-300">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" />
              <div>
                <span className="text-xs text-slate-300 block">Game Selesai! Skor Kamu:</span>
                <span className="text-lg font-black text-amber-400">
                  {lastScore.toLocaleString("id-ID")} pts
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmitScore} className="flex items-center gap-2">
              <input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="Ketik Nickname..."
                maxLength={16}
                required
                className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-red-500"
              />
              <button
                type="submit"
                className="px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl shadow cursor-pointer transition-colors"
              >
                Kirim Skor
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Control Utility Toolbar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-3.5 shadow-sm flex items-center justify-between gap-3">
        {/* Left: Game Title & Category */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xl shrink-0">
            🎮
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
              {game.title}
            </h1>
            <span className="text-[11px] font-semibold text-red-600 uppercase">
              Kategori: {game.category}
            </span>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Favorite */}
          <button
            onClick={handleToggleFavorite}
            aria-label="Simpan ke Favorit"
            className={`p-2 rounded-xl border transition-colors cursor-pointer ${
              isFavorite
                ? "bg-rose-50 border-rose-200 text-rose-600"
                : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? "fill-rose-600" : ""}`} />
          </button>

          {/* Share */}
          <button
            onClick={handleShare}
            aria-label="Bagikan Game"
            className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
          </button>

          {/* Reload Game */}
          <button
            onClick={handleReload}
            aria-label="Ulangi Permainan"
            className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={handleFullscreen}
            className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
          >
            {isFullscreen ? (
              <>
                <Minimize className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Normal</span>
              </>
            ) : (
              <>
                <Maximize className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Layar Penuh</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

