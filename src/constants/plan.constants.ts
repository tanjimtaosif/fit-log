import type { PlanTab } from "@/types/plan.types";
import type { SortOption } from "@/types/workout.types";

export const PLAN_LIMIT = 5;

export const PLAN_STORAGE_KEY = "fitlog:plan";

export const PLAN_TABS: { value: PlanTab; label: string }[] = [
  { value: "plan", label: "Today's Plan" },
  { value: "saved", label: "Saved" },
];

export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "duration", label: "Duration" },
  { value: "calories", label: "Calories" },
  { value: "rating", label: "Rating" },
];
