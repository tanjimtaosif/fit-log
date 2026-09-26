const SKELETON_COUNT = 6;

export default function LibrarySkeleton() {
  return (
    <div role="status" aria-live="polite" className="mt-8">
      <span className="sr-only">Loading workouts…</span>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: SKELETON_COUNT }, (_, index) => (
          <div
            key={index}
            className="animate-pulse overflow-hidden rounded-xl border border-line bg-surface"
          >
            <div className="aspect-[2/1] bg-surface-2" />
            <div className="space-y-4 p-6">
              <div className="flex gap-2">
                <div className="h-4 w-14 rounded-full bg-surface-2" />
                <div className="h-4 w-12 rounded-full bg-surface-2" />
              </div>
              <div className="h-5 w-3/4 rounded bg-surface-2" />
              <div className="h-3 w-1/3 rounded bg-surface-2" />
              <div className="border-t border-line pt-4">
                <div className="h-3 w-1/2 rounded bg-surface-2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
