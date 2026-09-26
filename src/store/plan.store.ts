import { PLAN_LIMIT, PLAN_STORAGE_KEY } from "@/constants/plan.constants";
import type { AddToPlanResult, PlanState, SaveResult } from "@/types/plan.types";
import type { Workout } from "@/types/workout.types";

const EMPTY_STATE: PlanState = { plan: [], saved: [], completed: [] };

let state: PlanState = EMPTY_STATE;
let isLoaded = false;
const listeners = new Set<() => void>();

function readStorage(): PlanState {
  try {
    const raw = window.localStorage.getItem(PLAN_STORAGE_KEY);
    if (!raw) return EMPTY_STATE;

    const parsed = JSON.parse(raw) as Partial<PlanState>;

    return {
      plan: Array.isArray(parsed.plan) ? parsed.plan : [],
      saved: Array.isArray(parsed.saved) ? parsed.saved : [],
      completed: Array.isArray(parsed.completed) ? parsed.completed : [],
    };
  } catch {
    return EMPTY_STATE;
  }
}

function writeStorage(next: PlanState) {
  try {
    window.localStorage.setItem(PLAN_STORAGE_KEY, JSON.stringify(next));
  } catch {}
}

function emit() {
  listeners.forEach((listener) => listener());
}

function handleStorage(event: StorageEvent) {
  if (event.key !== PLAN_STORAGE_KEY) return;
  state = readStorage();
  emit();
}

function getSnapshot(): PlanState {
  if (!isLoaded) {
    state = readStorage();
    isLoaded = true;
  }
  return state;
}

function setState(updater: (current: PlanState) => PlanState) {
  state = updater(getSnapshot());
  writeStorage(state);
  emit();
}

export const planStore = {
  subscribe(listener: () => void) {
    if (listeners.size === 0) window.addEventListener("storage", handleStorage);
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
      if (listeners.size === 0) window.removeEventListener("storage", handleStorage);
    };
  },

  getSnapshot,

  getServerSnapshot(): PlanState {
    return EMPTY_STATE;
  },
};

export const planActions = {
  addToPlan(workout: Workout): AddToPlanResult {
    const { plan } = getSnapshot();

    if (plan.some((item) => item.id === workout.id)) return "exists";
    if (plan.length >= PLAN_LIMIT) return "full";

    setState((current) => ({ ...current, plan: [...current.plan, workout] }));
    return "added";
  },

  saveForLater(workout: Workout): SaveResult {
    if (getSnapshot().saved.some((item) => item.id === workout.id)) return "exists";

    setState((current) => ({ ...current, saved: [...current.saved, workout] }));
    return "added";
  },

  removeFromPlan(id: number) {
    setState((current) => ({
      ...current,
      plan: current.plan.filter((item) => item.id !== id),
      completed: current.completed.filter((completedId) => completedId !== id),
    }));
  },

  removeFromSaved(id: number) {
    setState((current) => ({
      ...current,
      saved: current.saved.filter((item) => item.id !== id),
    }));
  },

  markAsDone(id: number) {
    setState((current) =>
      current.completed.includes(id)
        ? current
        : { ...current, completed: [...current.completed, id] },
    );
  },
};
