"use client";

import { Bookmark, CalendarPlus } from "lucide-react";
import { toast } from "react-toastify";

import { PLAN_LIMIT } from "@/constants/plan.constants";
import { usePlan } from "@/hooks/usePlan";
import type { Workout } from "@/types/workout.types";

interface WorkoutActionsProps {
  workout: Workout;
}

export default function WorkoutActions({ workout }: WorkoutActionsProps) {
  const { plan, addToPlan, saveForLater, isPlanFull } = usePlan();
  const isInPlan = plan.some((item) => item.id === workout.id);
  const isAddDisabled = isPlanFull && !isInPlan;

  const handleAddToPlan = () => {
    const result = addToPlan(workout);

    if (result === "added") toast.success("Added to today's plan");
    else if (result === "exists") toast.info("Already in today's plan");
    else toast.warning(`Today's plan is capped at ${PLAN_LIMIT} lifts`);
  };

  const handleSaveForLater = () => {
    const result = saveForLater(workout);

    if (result === "added") toast.success("Saved for later");
    else toast.info("Already in your saved list");
  };

  return (
    <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <button
        type="button"
        onClick={handleAddToPlan}
        disabled={isAddDisabled}
        title={isAddDisabled ? `Today's plan already has ${PLAN_LIMIT} lifts` : undefined}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-semibold text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:brightness-100"
      >
        <CalendarPlus className="size-4" aria-hidden="true" />
        Add to today&apos;s plan
      </button>
      <button
        type="button"
        onClick={handleSaveForLater}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-line-strong px-6 text-sm font-medium text-white transition-colors hover:bg-surface-2"
      >
        <Bookmark className="size-4" aria-hidden="true" />
        Save for later
      </button>
    </div>
  );
}
