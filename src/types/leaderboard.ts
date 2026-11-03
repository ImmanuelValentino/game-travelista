export interface LeaderboardEntry {
  id?: number;
  gameId: string;
  playerName: string;
  score: number;
  createdAt: string;
}

export interface SubmitScoreRequest {
  gameId: string;
  playerName: string;
  score: number;
}

