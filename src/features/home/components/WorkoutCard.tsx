import Image from "next/image";
import Link from "next/link";

import TagPill from "@/components/ui/TagPill";
import WorkoutStats from "@/components/ui/WorkoutStats";
import { ROUTES } from "@/routes";
import type { Workout } from "@/types/workout.types";

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link
      href={ROUTES.WORKOUT_DETAILS(workout.id)}
      className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-line-strong focus-visible:outline-2 focus-visible:outline-accent"
    >
      <div className="relative aspect-[2/1] overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <TagPill key={group} label={group} />
          ))}
        </div>
        <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-wide text-white">
          {workout.name}
        </h3>
        <p className="mt-1 text-xs text-muted">{workout.equipment}</p>

        <div className="mt-5 border-t border-line pt-4">
          <WorkoutStats
            duration={workout.duration}
            calories={workout.caloriesBurned}
            rating={workout.rating}
          />
        </div>
      </div>
    </Link>
  );
}
