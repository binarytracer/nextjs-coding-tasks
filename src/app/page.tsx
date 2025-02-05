import Link from "next/link";
import classes from "./page.module.css";

export default function Home() {
  return (
    <div className="container">
      <main>
        <h1>
          Hi, Welcome to{" "}
          <span className={classes.emphasis}>Streaks Monitoring App</span>.
        </h1>

        <div className="cta">
          <Link href="/home" title="Home">
            Home
          </Link>
        </div>
      </main>
    </div>
  );
}
