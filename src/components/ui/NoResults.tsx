interface NoResultsProps {
  query: string;
  onClear: () => void;
}

export default function NoResults({ query, onClear }: NoResultsProps) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-dashed border-line px-6 py-20 text-center">
      <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">No matches</h3>
      <p className="mt-1 max-w-sm break-words text-[13px] text-muted">
        Nothing matches &ldquo;{query}&rdquo;. Try another workout name or tag.
      </p>
      <button
        type="button"
        onClick={onClear}
        className="mt-8 inline-flex h-9 items-center rounded-full border border-line-strong px-6 text-xs font-semibold text-white transition-colors hover:bg-surface-2"
      >
        Clear search
      </button>
    </div>
  );
}
