"use client";
import { useParams } from "next/navigation";
import classes from "./page.module.css";
import Image from "next/image";
import checkMarkedImg from "../../../../public/check-marked.svg";
import activeDayImg from "../../../../public/activeDay.svg";

interface DaySummary {
  name: string;
  active: boolean;
}

const days: DaySummary[] = [
  { name: "Sun", active: false },
  { name: "Mon", active: false },
  { name: "Tue", active: false },
  { name: "Thu", active: false },
  { name: "Fri", active: false },
  { name: "Sat", active: true },
];

export default function StreakPage() {
  const params = useParams();

  return (
    <div className={classes.container}>
      <main className={classes.center}>
        <h2>Your streak in 6 days </h2>

        <div className={classes.streakContainer}>
          {days.map((day) => (
            <div
              className={day.active ? classes.activeDay : undefined}
              key={day.name}
            >
              <Image
                src={day.active ? activeDayImg : checkMarkedImg}
                alt="done"
              />
              <label className={classes.capitalize}>{day.name}</label>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
