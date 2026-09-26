"use client";

import { useMemo } from "react";

import NoResults from "@/components/ui/NoResults";
import { useHydrated } from "@/hooks/useHydrated";
import type { Workout } from "@/types/workout.types";
import { filterWorkouts } from "@/utils/workout.utils";

import { useLibrarySearch } from "../context/LibrarySearchContext";
import WorkoutCard from "./WorkoutCard";

interface WorkoutGridProps {
  workouts: Workout[];
}

export default function WorkoutGrid({ workouts }: WorkoutGridProps) {
  const { query, setQuery } = useLibrarySearch();
  const isHydrated = useHydrated();
  const activeQuery = isHydrated ? query : "";
  const filteredWorkouts = useMemo(() => filterWorkouts(workouts, activeQuery), [workouts, activeQuery]);
  const resultCount = filteredWorkouts.length;

  return (
    <div className="mt-8">
      <p className="sr-only" aria-live="polite">
        {activeQuery ? `${resultCount} ${resultCount === 1 ? "workout" : "workouts"} found` : ""}
      </p>

      {resultCount === 0 ? (
        <NoResults query={activeQuery} onClear={() => setQuery("")} />
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredWorkouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      )}
    </div>
  );
}
