import classes from "./page.module.css";
import Link from "next/link";

const availableStreaks = [3, 2, 1];

export default function HomePage() {
  return (
    <div className={classes.container}>
      <main className={classes.center}>
        <h2>Streak List</h2>

        <ul className={classes.streakList}>
          {availableStreaks.map((streak) => (
            <li key={streak}>
              <Link href={`home/${streak}`} title={`Streak ${streak}`}>
                Streak {streak}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
