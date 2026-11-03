import { NextResponse } from "next/server";
import { queryDb } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { gameId, action } = await request.json();
    if (!gameId) {
      return NextResponse.json({ success: false, message: "Missing gameId" }, { status: 400 });
    }

    if (action === "play") {
      await queryDb("UPDATE games SET play_count = play_count + 1 WHERE id = ?", [gameId]);
    } else if (action === "like") {
      await queryDb("UPDATE games SET likes_count = likes_count + 1 WHERE id = ?", [gameId]);
    }

    return NextResponse.json({ success: true, message: `Recorded action: ${action}` });
  } catch (err) {
    return NextResponse.json({ success: false, message: (err as Error).message }, { status: 500 });
  }
}

