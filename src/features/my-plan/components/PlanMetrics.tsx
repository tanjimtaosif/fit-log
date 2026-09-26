import type { PlanTotals } from "@/types/plan.types";

interface PlanMetricsProps {
  totals: PlanTotals;
}

export default function PlanMetrics({ totals }: PlanMetricsProps) {
  const metrics = [
    { label: "Exercises", value: totals.exercises, highlight: true },
    { label: "Minutes", value: totals.minutes, highlight: false },
    { label: "Calories", value: totals.calories, highlight: false },
  ];

  return (
    <dl className="mt-7 grid grid-cols-3 rounded-2xl border border-line bg-surface py-8">
      {metrics.map(({ label, value, highlight }) => (
        <div key={label} className="border-line px-4 sm:px-6 [&:not(:first-child)]:border-l sm:[&:not(:first-child)]:pl-8">
          <dt className="text-xs text-muted">{label}</dt>
          <dd
            className={`mt-1 font-display text-3xl font-bold sm:text-4xl ${highlight ? "text-accent" : "text-white"}`}
          >
            {value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
