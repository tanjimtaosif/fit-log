import TagPill from "@/components/ui/TagPill";

interface WorkoutOverviewProps {
  name: string;
  description: string;
  muscleGroups: string[];
}

export default function WorkoutOverview({ name, description, muscleGroups }: WorkoutOverviewProps) {
  return (
    <div>
      <h1 className="font-display text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-[36px]">
        {name}
      </h1>
      <p className="mt-3 text-base leading-relaxed text-muted lg:text-[17px]">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {muscleGroups.map((group) => (
          <TagPill key={group} label={group} variant="regular" />
        ))}
      </div>
    </div>
  );
}
