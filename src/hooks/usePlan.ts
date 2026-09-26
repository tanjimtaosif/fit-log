"use client";

import { useMemo, useSyncExternalStore } from "react";

import { PLAN_LIMIT } from "@/constants/plan.constants";
import { planActions, planStore } from "@/store/plan.store";
import { getPlanTotals } from "@/utils/workout.utils";

export function usePlan() {
  const state = useSyncExternalStore(
    planStore.subscribe,
    planStore.getSnapshot,
    planStore.getServerSnapshot,
  );

  const totals = useMemo(() => getPlanTotals(state.plan), [state.plan]);

  return {
    ...state,
    ...planActions,
    totals,
    isPlanFull: state.plan.length >= PLAN_LIMIT,
  };
}
