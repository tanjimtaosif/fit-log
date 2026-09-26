import { connection } from "next/server";

import { getWorkouts } from "@/services/workout.service";
import type { Workout } from "@/types/workout.types";

import LibraryError from "./LibraryError";
import WorkoutGrid from "./WorkoutGrid";

export default async function LibraryGrid() {
  await connection();

  let workouts: Workout[];

  try {
    workouts = await getWorkouts();
  } catch {
    return <LibraryError />;
  }

  if (workouts.length === 0) {
    return <p className="mt-8 text-sm text-muted">No workouts available right now.</p>;
  }

  return <WorkoutGrid workouts={workouts} />;
}
