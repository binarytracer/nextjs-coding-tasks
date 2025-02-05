import streaks from "./streak_data";

export async function GET() {
  const streakIds = streaks.map((streak) => streak.id);
  return Response.json(streakIds);
}
