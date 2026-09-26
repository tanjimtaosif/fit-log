interface WorkoutInstructionsProps {
  instructions: string[];
}

export default function WorkoutInstructions({ instructions }: WorkoutInstructionsProps) {
  return (
    <div className="mt-10">
      <h2 className="text-base font-bold uppercase tracking-[0.08em] text-white">Instructions</h2>
      <ol className="mt-5 space-y-3.5">
        {instructions.map((step, index) => (
          <li key={`${index}-${step}`} className="flex gap-2 text-sm leading-relaxed text-white/80">
            <span className="shrink-0 text-muted">{index + 1}.</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
