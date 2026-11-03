export type AdSlotType =
  | "skyscraper-left"
  | "skyscraper-right"
  | "bottom-anchor"
  | "in-grid-tile"
  | "companion-sidebar";

export interface AdConfig {
  slotId: string;
  type: AdSlotType;
  width: number;
  height: number;
  title: string;
  fallbackImageUrl?: string;
  fallbackTargetUrl?: string;
}

