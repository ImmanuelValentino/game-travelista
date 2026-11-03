export type GameCategory =
  | "all"
  | "arcade"
  | "adventure"
  | "puzzle"
  | "action"
  | "sports"
  | "casual";

export type GameBadge = "NONE" | "BARU" | "HOT" | "POPULAR";

export interface Game {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: GameCategory;
  thumbnailUrl: string;
  gamePath: string; // URL /path to index.html (e.g. /games/nusantara-runner/index.html)
  playCount: number;
  likesCount: number;
  rating: number; // 1.0 - 5.0
  badge?: GameBadge;
  featured?: boolean; // For Hero section
  controlsGuide?: {
    keyboard?: string[];
    touch?: string;
  };
  isSponsored?: boolean; // If this card slot is an In-Grid Native Ad Tile
  sponsorUrl?: string;
}

export interface CategoryInfo {
  id: GameCategory;
  label: string;
  icon: string;
  colorClass: string;
}

