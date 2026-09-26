import type { Workout } from "@/types/workout.types";

interface WorkoutSpecsProps {
  workout: Workout;
}

export default function WorkoutSpecs({ workout }: WorkoutSpecsProps) {
  const specs = [
    { label: "Equipment", value: workout.equipment },
    { label: "Difficulty", value: workout.difficulty },
    { label: "Sets", value: workout.sets },
    { label: "Reps", value: workout.reps },
    { label: "Duration", value: `${workout.duration} min` },
    { label: "Calories", value: `${workout.caloriesBurned} kcal` },
    { label: "Rating", value: workout.rating.toFixed(1) },
  ];

  return (
    <dl className="mt-8 overflow-hidden rounded-xl border border-line bg-surface">
      {specs.map(({ label, value }) => (
        <div
          key={label}
          className="flex items-center justify-between gap-6 border-b border-line px-6 py-3.5 last:border-b-0"
        >
          <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">{label}</dt>
          <dd className="text-right text-sm text-white">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
