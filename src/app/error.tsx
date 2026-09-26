"use client";

import { RotateCcw } from "lucide-react";
import { useEffect } from "react";

import Container from "@/components/layout/Container";

interface ErrorPageProps {
  error: Error & { digest?: string };
  retry: () => void;
}

export default function ErrorPage({ error, retry }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-1 items-center">
      <Container className="py-24">
        {/* Error Section Start */}
        <section className="flex flex-col items-center text-center">
          <h1 className="font-display text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
            Something went wrong
          </h1>
          <p className="mt-2 max-w-sm text-sm text-muted">
            We couldn&apos;t load the workouts right now. Please try again in a moment.
          </p>
          <button
            type="button"
            onClick={() => retry()}
            className="mt-8 inline-flex h-10 items-center gap-2 rounded-full bg-accent px-6 text-xs font-semibold text-black transition hover:brightness-110"
          >
            <RotateCcw className="size-3.5" aria-hidden="true" />
            Try again
          </button>
        </section>
        {/* Error Section End */}
      </Container>
    </main>
  );
}
