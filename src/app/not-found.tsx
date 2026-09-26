import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/layout/Container";
import { ROUTES } from "@/routes";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center">
      <Container className="py-24">
        {/* Not Found Section Start */}
        <section className="flex flex-col items-center text-center">
          <p className="font-display text-7xl font-bold text-accent sm:text-8xl">404</p>
          <h1 className="mt-4 font-display text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
            Page not found
          </h1>
          <p className="mt-2 max-w-sm text-sm text-muted">
            The page you&apos;re looking for skipped leg day and never showed up.
          </p>
          <Link
            href={ROUTES.HOME}
            className="mt-8 inline-flex h-10 items-center rounded-full bg-accent px-6 text-xs font-semibold text-black shadow-[0_8px_24px_-6px_rgba(204,255,0,0.45)] transition hover:brightness-110"
          >
            Back to workouts
          </Link>
        </section>
        {/* Not Found Section End */}
      </Container>
    </main>
  );
}
