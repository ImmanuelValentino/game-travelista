"use client";

import React, { useState, useEffect } from "react";
import { Trophy, X, Medal, Sparkles, User, RefreshCw } from "lucide-react";
import { LeaderboardEntry } from "@/types/leaderboard";
import { getLocalScores } from "@/lib/local-storage";

interface LeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeaderboardModal({ isOpen, onClose }: LeaderboardModalProps) {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [localScores, setLocalScores] = useState<Record<string, number>>({});
  const [activeTab, setActiveTab] = useState<"global" | "local">("global");
  const [loading, setLoading] = useState(false);

  const fetchScores = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/leaderboard");
      const json = await res.json();
      if (json.success && json.data) {
        setEntries(json.data);
      }
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchScores();
      setLocalScores(getLocalScores());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center text-xl shadow-lg">
              🏆
            </div>
            <div>
              <h3 className="text-base font-black tracking-tight flex items-center gap-1.5">
                <span>Papan Peringkat Juara</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              </h3>
              <p className="text-[11px] text-slate-400">
                Peringkat skor tertinggi pemain Travelista Games
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center p-2 bg-slate-100 border-b border-slate-200">
          <button
            onClick={() => setActiveTab("global")}
            className={`flex-1 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === "global"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Global Top 10 (MySQL)
          </button>
          <button
            onClick={() => setActiveTab("local")}
            className={`flex-1 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === "local"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Skor Pribadi (LocalStorage)
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 max-h-[380px] overflow-y-auto space-y-2">
          {activeTab === "global" ? (
            loading ? (
              <div className="py-12 flex flex-col items-center justify-center text-slate-400 gap-2">
                <RefreshCw className="w-6 h-6 animate-spin text-red-600" />
                <span className="text-xs">Memuat data juara...</span>
              </div>
            ) : entries.length === 0 ? (
              <div className="py-8 text-center text-slate-500 text-xs">
                Belum ada skor tercatat. Jadilah yang pertama bermain dan cetak rekor!
              </div>
            ) : (
              entries.map((entry, idx) => {
                const isTop1 = idx === 0;
                const isTop2 = idx === 1;
                const isTop3 = idx === 2;

                return (
                  <div
                    key={idx}
                    className={`flex items-center justify-between p-3 rounded-2xl border transition-all ${
                      isTop1
                        ? "bg-amber-50/70 border-amber-200"
                        : isTop2
                        ? "bg-slate-50 border-slate-200"
                        : isTop3
                        ? "bg-orange-50/50 border-orange-200"
                        : "bg-white border-slate-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
                          isTop1
                            ? "bg-amber-400 text-slate-950 shadow"
                            : isTop2
                            ? "bg-slate-300 text-slate-800"
                            : isTop3
                            ? "bg-amber-700 text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {idx + 1}
                      </span>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1">
                          <span>{entry.playerName}</span>
                          {isTop1 && <Medal className="w-3.5 h-3.5 text-amber-500 inline" />}
                        </h4>
                        <span className="text-[10px] text-slate-400 uppercase font-semibold">
                          Game: {entry.gameId}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-sm font-black text-red-600">
                        {entry.score.toLocaleString("id-ID")}
                      </span>
                      <span className="text-[10px] text-slate-400 block font-medium">pts</span>
                    </div>
                  </div>
                );
              })
            )
          ) : (
            Object.keys(localScores).length === 0 ? (
              <div className="py-8 text-center text-slate-500 text-xs">
                Belum ada skor lokal yang tersimpan di browsermu. Mainkan salah satu game sekarang!
              </div>
            ) : (
              Object.entries(localScores).map(([gameId, score], idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-2xl bg-white border border-slate-100"
                >
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-slate-400" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 capitalize">
                        {gameId.replace(/-/g, " ")}
                      </h4>
                      <span className="text-[10px] text-slate-400">Tersimpan di perangkat lokal</span>
                    </div>
                  </div>
                  <span className="text-sm font-black text-red-600">
                    {score.toLocaleString("id-ID")} pts
                  </span>
                </div>
              ))
            )
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Skor tersinkronisasi otomatis saat Game Over.</span>
          <button
            onClick={fetchScores}
            className="flex items-center gap-1 font-semibold text-red-600 hover:text-red-700 cursor-pointer"
          >
            <RefreshCw className="w-3 h-3" /> Refresh
          </button>
        </div>
      </div>
    </div>
  );
}

