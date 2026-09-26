interface TagPillProps {
  label: string;
  variant?: "compact" | "regular";
}

const variantClasses = {
  compact: "px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide",
  regular: "px-3.5 py-1 text-[13px] font-semibold capitalize",
};

export default function TagPill({ label, variant = "compact" }: TagPillProps) {
  return (
    <span className={`inline-flex rounded-full bg-accent text-black ${variantClasses[variant]}`}>
      {label}
    </span>
  );
}
