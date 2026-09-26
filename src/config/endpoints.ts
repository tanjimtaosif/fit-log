export const API_ENDPOINTS = {
  WORKOUTS: "/fitlog",
  WORKOUT_BY_ID: (id: number | string) => `/fitlog/${id}`,
} as const;
