"use client";

import { RotateCcw } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LibraryError() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleRetry = () => {
    startTransition(() => router.refresh());
  };

  return (
    <div
      role="alert"
      className="mt-8 flex flex-col items-center rounded-xl border border-dashed border-line px-6 py-20 text-center"
    >
      <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">
        Couldn&apos;t load workouts
      </h3>
      <p className="mt-1 max-w-sm text-[13px] text-muted">
        The workout library is busy right now. Please try again in a moment.
      </p>
      <button
        type="button"
        onClick={handleRetry}
        disabled={isPending}
        className="mt-8 inline-flex h-9 items-center gap-2 rounded-full bg-accent px-6 text-xs font-semibold text-black transition hover:brightness-110 disabled:opacity-60"
      >
        <RotateCcw className={`size-3.5 ${isPending ? "animate-spin" : ""}`} aria-hidden="true" />
        {isPending ? "Retrying…" : "Try again"}
      </button>
    </div>
  );
}
