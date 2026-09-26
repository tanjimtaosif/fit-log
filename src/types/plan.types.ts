import type { Workout } from "./workout.types";

export type PlanTab = "plan" | "saved";

export interface PlanState {
  plan: Workout[];
  saved: Workout[];
  completed: number[];
}

export interface PlanTotals {
  exercises: number;
  minutes: number;
  calories: number;
}

export type AddToPlanResult = "added" | "exists" | "full";

export type SaveResult = "added" | "exists";
