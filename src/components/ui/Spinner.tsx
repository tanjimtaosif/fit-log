interface SpinnerProps {
  label?: string;
}

export default function Spinner({ label }: SpinnerProps) {
  return (
    <div role="status" className="flex items-center justify-center gap-3 text-sm text-muted">
      <span
        className="size-5 animate-spin rounded-full border-2 border-line border-t-accent"
        aria-hidden="true"
      />
      {label ? <span>{label}</span> : <span className="sr-only">Loading</span>}
    </div>
  );
}
