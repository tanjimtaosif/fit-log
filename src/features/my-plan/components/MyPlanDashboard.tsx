"use client";

import { useMemo, useState } from "react";
import { toast } from "react-toastify";

import NoResults from "@/components/ui/NoResults";
import SearchInput from "@/components/ui/SearchInput";
import Spinner from "@/components/ui/Spinner";
import { useHydrated } from "@/hooks/useHydrated";
import { usePlan } from "@/hooks/usePlan";
import type { PlanTab } from "@/types/plan.types";
import type { SortOption, Workout } from "@/types/workout.types";
import { filterWorkouts, sortWorkouts } from "@/utils/workout.utils";

import PlanEmptyState from "./PlanEmptyState";
import PlanMetrics from "./PlanMetrics";
import PlanTabs from "./PlanTabs";
import PlanWorkoutCard from "./PlanWorkoutCard";
import SortSelect from "./SortSelect";

export default function MyPlanDashboard() {
  const { plan, saved, completed, totals, markAsDone, removeFromPlan, removeFromSaved } = usePlan();
  const isHydrated = useHydrated();
  const [activeTab, setActiveTab] = useState<PlanTab>("plan");
  const [sortBy, setSortBy] = useState<SortOption>("duration");
  const [query, setQuery] = useState("");

  const isPlanTab = activeTab === "plan";

  const tabWorkouts = isPlanTab ? plan : saved;

  const workouts = useMemo(
    () => sortWorkouts(filterWorkouts(tabWorkouts, query), sortBy),
    [tabWorkouts, query, sortBy],
  );

  const handleMarkAsDone = (workout: Workout) => {
    markAsDone(workout.id);
    toast.success(`${workout.name} marked as done`);
  };

  const handleRemove = (workout: Workout) => {
    if (isPlanTab) {
      removeFromPlan(workout.id);
      toast.info(`${workout.name} removed from today's plan`);
    } else {
      removeFromSaved(workout.id);
      toast.info(`${workout.name} removed from saved`);
    }
  };

  const renderList = () => {
    if (!isHydrated) {
      return (
        <div className="rounded-xl border border-dashed border-line py-24">
          <Spinner label="Loading workouts…" />
        </div>
      );
    }

    if (tabWorkouts.length === 0) return <PlanEmptyState />;

    if (workouts.length === 0) return <NoResults query={query} onClear={() => setQuery("")} />;

    return (
      <div className="space-y-4">
        {workouts.map((workout) => (
          <PlanWorkoutCard
            key={workout.id}
            workout={workout}
            isDone={completed.includes(workout.id)}
            onMarkAsDone={isPlanTab ? handleMarkAsDone : undefined}
            onRemove={handleRemove}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Metrics Section Start */}
      <PlanMetrics totals={totals} />
      {/* Metrics Section End */}

      {/* Plan List Section Start */}
      <section className="mt-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <PlanTabs activeTab={activeTab} onChange={setActiveTab} />
          <div className="flex w-full flex-wrap items-center gap-3 sm:w-auto sm:gap-4">
            <SearchInput
              value={query}
              onChange={setQuery}
              label="Search this list by name or tag"
              placeholder="Search by name or tag"
              className="w-full sm:w-60"
            />
            <SortSelect value={sortBy} onChange={setSortBy} />
          </div>
        </div>

        <div id="plan-panel" role="tabpanel" aria-labelledby={`tab-${activeTab}`} className="mt-6">
          {renderList()}
        </div>
      </section>
      {/* Plan List Section End */}
    </>
  );
}
