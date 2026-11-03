"use client";

const FAVORITES_KEY = "travelista_game_favorites";
const RECENT_KEY = "travelista_game_recent";
const HIGH_SCORES_KEY = "travelista_game_scores";

export function getLocalFavorites(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function toggleLocalFavorite(gameId: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    const favs = getLocalFavorites();
    const index = favs.indexOf(gameId);
    let isFav = false;
    if (index > -1) {
      favs.splice(index, 1);
      isFav = false;
    } else {
      favs.push(gameId);
      isFav = true;
    }
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
    return isFav;
  } catch {
    return false;
  }
}

export function addRecentGame(gameId: string): void {
  if (typeof window === "undefined") return;
  try {
    let recent = getRecentGames();
    recent = recent.filter((id) => id !== gameId);
    recent.unshift(gameId);
    if (recent.length > 10) recent = recent.slice(0, 10);
    localStorage.setItem(RECENT_KEY, JSON.stringify(recent));
  } catch {
    // ignore
  }
}

export function getRecentGames(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(RECENT_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveLocalScore(gameId: string, score: number): void {
  if (typeof window === "undefined") return;
  try {
    const scores = getLocalScores();
    const currentHigh = scores[gameId] || 0;
    if (score > currentHigh) {
      scores[gameId] = score;
      localStorage.setItem(HIGH_SCORES_KEY, JSON.stringify(scores));
    }
  } catch {
    // ignore
  }
}

export function getLocalScores(): Record<string, number> {
  if (typeof window === "undefined") return {};
  try {
    const data = localStorage.getItem(HIGH_SCORES_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

