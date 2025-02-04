import { NextRequest, NextResponse } from "next/server";
import streaksData from "../streak_data";

// todo: to be extracted
type GetOneStreakParam = {
  params: Promise<{ id: string }>;
};

export async function GET(request: NextRequest, { params }: GetOneStreakParam) {
  const id = (await params).id;

  const match = streaksData.find((streak) => streak.id === +id);

  if (!match) {
    return NextResponse.json({ error: "Record not found" }, { status: 404 });
  }

  return Response.json(match);
}
