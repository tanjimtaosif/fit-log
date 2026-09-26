export const ROUTES = {
  HOME: "/",
  LIBRARY: "/#library",
  MY_PLAN: "/my-plan",
  WORKOUT_DETAILS: (id: number | string) => `/workouts/${id}`,
} as const;

export const NAV_LINKS = [
  { label: "Workouts", href: ROUTES.HOME },
  { label: "My Plan", href: ROUTES.MY_PLAN },
] as const;
