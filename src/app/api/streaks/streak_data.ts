import { format, addDays } from "date-fns";

// todo: be extracted
enum StateEnum {
  INCOMPLETE = "INCOMPLETE",
  SAVED = "SAVED",
  AT_RISK = "AT_RISK",
  COMPLETED = "COMPLETED",
}

export interface DayActivity {
  date: string;
  activities: number;
  state: StateEnum;
}
export interface DayActivityWithDay extends DayActivity {
  dayName: string;
}

interface Streak {
  id?: number;
  activitiesToday: number;
  total: number;
  days: DayActivity[];
}

const streaks: Streak[] = [generateCase1(), generateCase2(), generateCase3()];
export default streaks;

function generateCase3(): Streak {
  const currentDate = new Date();
  return {
    id: 3,
    activitiesToday: 1,
    total: 4, // total completed streaks from previous to current
    days: [
      {
        date: format(addDays(currentDate, 2), "yyyy-MM-dd"),
        activities: 0,
        state: StateEnum.INCOMPLETE,
      },
      {
        date: format(addDays(currentDate, 1), "yyyy-MM-dd"),
        activities: 0,
        state: StateEnum.INCOMPLETE,
      },
      {
        date: format(currentDate, "yyyy-MM-dd"),
        activities: 1,
        state: StateEnum.AT_RISK,
      },
      {
        date: format(addDays(currentDate, -1), "yyyy-MM-dd"),
        activities: 3,
        state: StateEnum.COMPLETED,
      },
      {
        date: format(addDays(currentDate, -2), "yyyy-MM-dd"),
        activities: 0,
        state: StateEnum.SAVED,
      },
      {
        date: format(addDays(currentDate, -3), "yyyy-MM-dd"),
        activities: 0,
        state: StateEnum.SAVED,
      },
      {
        date: format(addDays(currentDate, -4), "yyyy-MM-dd"),
        activities: 1,
        state: StateEnum.COMPLETED,
      },
    ],
  };
}

function generateCase2(): Streak {
  const currentDate = new Date();
  return {
    id: 2,
    activitiesToday: 1,
    total: 3, // total completed streaks from previous to current
    days: [
      {
        date: format(addDays(currentDate, 2), "yyyy-MM-dd"),
        activities: 0,
        state: StateEnum.INCOMPLETE,
      },
      {
        date: format(addDays(currentDate, 1), "yyyy-MM-dd"),
        activities: 0,
        state: StateEnum.INCOMPLETE,
      },
      {
        date: format(currentDate, "yyyy-MM-dd"),
        activities: 1,
        state: StateEnum.COMPLETED,
      },
      {
        date: format(addDays(currentDate, -1), "yyyy-MM-dd"),
        activities: 0,
        state: StateEnum.SAVED,
      },
      {
        date: format(addDays(currentDate, -2), "yyyy-MM-dd"),
        activities: 0,
        state: StateEnum.SAVED,
      },
      {
        date: format(addDays(currentDate, -3), "yyyy-MM-dd"),
        activities: 1,
        state: StateEnum.COMPLETED,
      },
      {
        date: format(addDays(currentDate, -4), "yyyy-MM-dd"),
        activities: 1,
        state: StateEnum.COMPLETED,
      },
    ],
  };
}

function generateCase1(): Streak {
  const currentDate = new Date();
  return {
    id: 1,
    activitiesToday: 3,
    total: 4, // total completed streaks from previous to current
    days: [
      {
        date: format(addDays(currentDate, 3), "yyyy-MM-dd"),
        activities: 0,
        state: StateEnum.INCOMPLETE,
      },
      {
        date: format(addDays(currentDate, 2), "yyyy-MM-dd"),
        activities: 0,
        state: StateEnum.INCOMPLETE,
      },
      {
        date: format(addDays(currentDate, 1), "yyyy-MM-dd"),
        activities: 0,
        state: StateEnum.INCOMPLETE,
      },
      {
        date: format(currentDate, "yyyy-MM-dd"),
        activities: 3,
        state: StateEnum.COMPLETED,
      },
      {
        date: format(addDays(currentDate, -1), "yyyy-MM-dd"),
        activities: 0,
        state: StateEnum.INCOMPLETE,
      },
      {
        date: format(addDays(currentDate, -2), "yyyy-MM-dd"),
        activities: 0,
        state: StateEnum.INCOMPLETE,
      },
      {
        date: format(addDays(currentDate, -3), "yyyy-MM-dd"),
        activities: 1,
        state: StateEnum.COMPLETED,
      },
    ],
  };
}
