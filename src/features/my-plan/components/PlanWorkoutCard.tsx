import { Check, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import WorkoutStats from "@/components/ui/WorkoutStats";
import { ROUTES } from "@/routes";
import type { Workout } from "@/types/workout.types";

interface PlanWorkoutCardProps {
  workout: Workout;
  isDone?: boolean;
  onMarkAsDone?: (workout: Workout) => void;
  onRemove: (workout: Workout) => void;
}

export default function PlanWorkoutCard({ workout, isDone = false, onMarkAsDone, onRemove }: PlanWorkoutCardProps) {
  return (
    <article className="relative flex flex-col gap-4 rounded-xl border border-line bg-surface p-4 md:flex-row md:items-center">
      <div className="flex min-w-0 items-center gap-4 pr-8 md:pr-0">
        <div className="relative h-16 w-28 shrink-0 overflow-hidden rounded-lg sm:h-20 sm:w-36">
          <Image src={workout.image} alt={workout.name} fill sizes="144px" className="object-cover" />
        </div>
        <div className="min-w-0">
          <h3 className="break-words font-display text-lg font-bold uppercase leading-tight tracking-wide text-white md:truncate">
            {workout.name}
          </h3>
          <p className="text-xs font-medium text-muted">{workout.equipment}</p>
          <div className="mt-2">
            <WorkoutStats
              duration={workout.duration}
              calories={workout.caloriesBurned}
              rating={workout.rating}
              tone="accent"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 md:ml-auto">
        <Link
          href={ROUTES.WORKOUT_DETAILS(workout.id)}
          className="inline-flex h-9 flex-1 items-center justify-center whitespace-nowrap rounded-full border border-line-strong px-4 text-xs font-medium text-white transition-colors hover:bg-surface-2 md:h-8 md:flex-none"
        >
          View Details
        </Link>

        {onMarkAsDone && (
          <button
            type="button"
            onClick={() => onMarkAsDone(workout)}
            disabled={isDone}
            className="inline-flex h-9 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-accent px-4 text-xs font-medium text-black transition hover:brightness-110 disabled:cursor-default disabled:opacity-60 disabled:hover:brightness-100 md:h-8 md:flex-none"
          >
            <Check className="size-3.5" aria-hidden="true" />
            {isDone ? "Done" : "Mark as Done"}
          </button>
        )}

        <button
          type="button"
          onClick={() => onRemove(workout)}
          aria-label={`Remove ${workout.name}`}
          className="absolute right-2 top-2 rounded-full p-2 text-subtle transition-colors hover:text-white md:static md:p-1.5"
        >
          <X className="size-4" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
