import classes from "./page.module.css";
import Link from "next/link";

export default async function HomePage() {
  const data = await fetch(`${process.env.NEXT_API_URL}/streaks`);
  const streakIds = await data.json();

  return (
    <div className="container">
      <main>
        <h1>Streaks</h1>

        <ul className={classes.streakList}>
          {streakIds.map((streakId: number) => (
            <li key={streakId}>
              <Link href={`home/${streakId}`} title={`View Streak ${streakId}`}>
                Streak {streakId}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
