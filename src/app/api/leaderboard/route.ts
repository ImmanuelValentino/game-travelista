import { NextResponse } from "next/server";
import { queryDb } from "@/lib/db";
import { LeaderboardEntry } from "@/types/leaderboard";

// Default mock leaderboard if database table is not yet seeded
const MOCK_LEADERBOARDS: LeaderboardEntry[] = [
  { id: 1, gameId: "nusantara-runner", playerName: "BudiTraveler", score: 14200, createdAt: "2026-11-01" },
  { id: 2, gameId: "nusantara-runner", playerName: "SitiPetualang", score: 12850, createdAt: "2026-11-01" },
  { id: 3, gameId: "nusantara-runner", playerName: "RianBackpacker", score: 11100, createdAt: "2026-11-02" },
  { id: 4, gameId: "kapal-feri", playerName: "KaptenAndi", score: 9800, createdAt: "2026-11-01" },
  { id: 5, gameId: "kapal-feri", playerName: "PelautSejati", score: 8750, createdAt: "2026-11-02" },
  { id: 6, gameId: "packing-master", playerName: "RapiKoper", score: 9500, createdAt: "2026-11-01" },
  { id: 7, gameId: "packing-master", playerName: "TravelGirl99", score: 8900, createdAt: "2026-11-02" },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const gameId = searchParams.get("gameId");

  try {
    let sql = `
      SELECT id, game_id as gameId, player_name as playerName, score, created_at as createdAt 
      FROM leaderboards
    `;
    const params: any[] = [];
    if (gameId) {
      sql += " WHERE game_id = ?";
      params.push(gameId);
    }
    sql += " ORDER BY score DESC LIMIT 10";

    const rows = await queryDb<LeaderboardEntry>(sql, params);
    if (rows && rows.length > 0) {
      return NextResponse.json({ success: true, data: rows });
    }
  } catch {
    // Fallback
  }

  const filtered = gameId
    ? MOCK_LEADERBOARDS.filter((m) => m.gameId === gameId)
    : MOCK_LEADERBOARDS;

  return NextResponse.json({
    success: true,
    data: filtered.sort((a, b) => b.score - a.score).slice(0, 10),
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { gameId, playerName, score } = body;

    if (!gameId || !playerName || typeof score !== "number") {
      return NextResponse.json(
        { success: false, message: "Invalid payload parameters" },
        { status: 400 }
      );
    }

    const cleanName = String(playerName).trim().slice(0, 32);
    const sql = `
      INSERT INTO leaderboards (game_id, player_name, score) 
      VALUES (?, ?, ?)
    `;
    await queryDb(sql, [gameId, cleanName, score]);

    return NextResponse.json({
      success: true,
      message: "Score submitted successfully",
      data: { gameId, playerName: cleanName, score },
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: (err as Error).message },
      { status: 500 }
    );
  }
}

