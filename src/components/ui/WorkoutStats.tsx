import { Clock, Flame, Star } from "lucide-react";

interface WorkoutStatsProps {
  duration: number;
  calories: number;
  rating: number;
  tone?: "muted" | "accent";
}

export default function WorkoutStats({ duration, calories, rating, tone = "muted" }: WorkoutStatsProps) {
  const iconClass = tone === "accent" ? "text-accent" : "text-muted";
  const textClass = tone === "accent" ? "text-white/85" : "text-muted";

  const stats = [
    { icon: Clock, label: `${duration} min` },
    { icon: Flame, label: `${calories} kcal` },
    { icon: Star, label: rating.toFixed(1) },
  ];

  return (
    <ul className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-xs ${textClass}`}>
      {stats.map(({ icon: Icon, label }) => (
        <li key={label} className="inline-flex items-center gap-1.5">
          <Icon className={`size-3.5 ${iconClass}`} aria-hidden="true" />
          {label}
        </li>
      ))}
    </ul>
  );
}
