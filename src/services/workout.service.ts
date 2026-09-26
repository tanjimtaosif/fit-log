import { API_BASE_URL, API_REVALIDATE_SECONDS } from "@/config/api.config";
import { API_ENDPOINTS } from "@/config/endpoints";
import type { Workout } from "@/types/workout.types";

export async function getWorkouts(): Promise<Workout[]> {
  const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.WORKOUTS}`, {
    next: { revalidate: API_REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    throw new Error(`Failed to load workouts (status ${response.status})`);
  }

  const data: unknown = await response.json();

  return Array.isArray(data) ? (data as Workout[]) : [];
}

export async function getWorkoutById(id: string): Promise<Workout | null> {
  if (!/^\d+$/.test(id)) return null;

  const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.WORKOUT_BY_ID(id)}`, {
    next: { revalidate: API_REVALIDATE_SECONDS },
  });

  if (response.status === 404) return null;

  if (!response.ok) {
    throw new Error(`Failed to load workout ${id} (status ${response.status})`);
  }

  const data = (await response.json()) as Partial<Workout> | null;

  return data && typeof data.id === "number" ? (data as Workout) : null;
}
