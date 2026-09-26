import type { PlanTotals } from "@/types/plan.types";
import type { SortOption, Workout } from "@/types/workout.types";

const sorters: Record<SortOption, (a: Workout, b: Workout) => number> = {
  duration: (a, b) => a.duration - b.duration,
  calories: (a, b) => b.caloriesBurned - a.caloriesBurned,
  rating: (a, b) => b.rating - a.rating,
};

export function sortWorkouts(workouts: Workout[], sortBy: SortOption): Workout[] {
  return [...workouts].sort(sorters[sortBy]);
}

export function filterWorkouts(workouts: Workout[], query: string): Workout[] {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return workouts;

  return workouts.filter(
    (workout) =>
      workout.name.toLowerCase().includes(normalizedQuery) ||
      workout.muscleGroups.some((group) => group.toLowerCase().includes(normalizedQuery)),
  );
}

export function getPlanTotals(workouts: Workout[]): PlanTotals {
  return workouts.reduce<PlanTotals>(
    (totals, workout) => ({
      exercises: totals.exercises + 1,
      minutes: totals.minutes + workout.duration,
      calories: totals.calories + workout.caloriesBurned,
    }),
    { exercises: 0, minutes: 0, calories: 0 },
  );
}
