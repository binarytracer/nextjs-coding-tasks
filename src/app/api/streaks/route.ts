import streaks from "./streak_data";

export async function GET() {
  return Response.json(streaks);
}
