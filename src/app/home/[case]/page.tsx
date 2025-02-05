import classes from "./page.module.css";
import Image from "next/image";
import checkMarkedImg from "../../../../public/check-marked.svg";
import activeDayImg from "../../../../public/activeDay.svg";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { DayActivity } from "../../api/streaks/streak_data";
import Link from "next/link";

interface DayActivityWithDay extends DayActivity {
  dayName: string;
  isToday: boolean;
}

interface StreakPageProps {
  params: Promise<{
    case: string;
  }>;
}

export default async function StreakPage({ params }: StreakPageProps) {
  const streakId = (await params).case;

  const data = await fetch(`${process.env.NEXT_API_URL}/streaks/${streakId}`);

  if (!data.ok) {
    notFound();
  }

  const streakData = await data.json();
  const todayDate = format(new Date(), "yyyy-MM-dd");

  const weekDays: DayActivityWithDay[] = streakData.days
    .map((dayActivity: DayActivity) => {
      return {
        ...dayActivity,
        isToday: dayActivity.date === todayDate,
        dayName: format(new Date(dayActivity.date), "EEE"),
      };
    })
    .reverse();

  const streakDayCount = weekDays.filter(
    (dayActivity: DayActivityWithDay) => dayActivity.date <= todayDate
  ).length;

  console.table(streakDayCount);

  return (
    <div className="container">
      <main>
        <h2>
          Case: {streakId}, Your streak in {streakDayCount} days
        </h2>

        <div className={classes.streakContainer}>
          {weekDays.map((day) => (
            <div
              className={day.isToday ? classes.activeDay : undefined}
              key={day.dayName}
            >
              <Image
                src={day.isToday ? activeDayImg : checkMarkedImg}
                alt="done"
              />
              <label className={classes.capitalize}>{day.dayName}</label>
            </div>
          ))}
        </div>

        <div className="cta">
          <Link href="/home">To Streak List</Link>
        </div>
      </main>
    </div>
  );
}
