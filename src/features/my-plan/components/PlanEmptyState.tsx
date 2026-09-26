import Link from "next/link";

import { ROUTES } from "@/routes";

export default function PlanEmptyState() {
  return (
    <div className="flex flex-col items-center rounded-xl border border-dashed border-line px-6 py-24 text-center sm:py-28">
      <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">
        Nothing here yet
      </h3>
      <p className="mt-1 text-[13px] text-muted">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href={ROUTES.HOME}
        className="mt-8 inline-flex h-9 items-center rounded-full bg-accent px-6 text-xs font-semibold text-black shadow-[0_8px_24px_-6px_rgba(204,255,0,0.45)] transition hover:brightness-110"
      >
        Go to workouts
      </Link>
    </div>
  );
}
