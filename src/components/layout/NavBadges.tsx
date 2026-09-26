"use client";

import Link from "next/link";

import { usePlan } from "@/hooks/usePlan";
import { ROUTES } from "@/routes";

export default function NavBadges() {
  const { plan, saved } = usePlan();

  return (
    <div className="flex items-center gap-5 md:justify-self-end">
      <Link
        href={ROUTES.MY_PLAN}
        className="-my-2 inline-flex items-center gap-2 py-2 text-[13px] font-medium text-white"
        aria-label={`Today's plan: ${plan.length} workouts`}
      >
        Plan
        <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-[11px] font-bold text-black">
          {plan.length}
        </span>
      </Link>
      <Link
        href={ROUTES.MY_PLAN}
        className="-my-2 inline-flex items-center gap-2 py-2 text-[13px] font-medium text-muted transition-colors hover:text-white"
        aria-label={`Saved: ${saved.length} workouts`}
      >
        Saved
        <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full border border-line-strong px-1.5 text-[11px] font-semibold text-white">
          {saved.length}
        </span>
      </Link>
    </div>
  );
}
