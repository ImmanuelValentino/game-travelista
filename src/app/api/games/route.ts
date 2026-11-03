import { NextResponse } from "next/server";
import { INITIAL_GAMES, getGamesByCategory, searchGames } from "@/lib/games-data";
import { queryDb } from "@/lib/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") || "all";
  const search = searchParams.get("search");

  // If search query is provided
  if (search) {
    const results = searchGames(search);
    return NextResponse.json({ success: true, data: results });
  }

  // Try querying from DB first if table exists, otherwise fallback to static catalog
  try {
    let sql = "SELECT * FROM games WHERE is_active = 1";
    const params: any[] = [];
    if (category !== "all") {
      sql += " AND category = ?";
      params.push(category);
    }
    sql += " ORDER BY play_count DESC";

    const dbGames = await queryDb(sql, params);
    if (dbGames && dbGames.length > 0) {
      return NextResponse.json({ success: true, data: dbGames });
    }
  } catch {
    // Graceful fallback to static data
  }

  const staticGames = getGamesByCategory(category);
  return NextResponse.json({ success: true, data: staticGames });
}

