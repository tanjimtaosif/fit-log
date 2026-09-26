import { Suspense } from "react";

import { LibrarySearchProvider } from "../context/LibrarySearchContext";
import LibraryGrid from "./LibraryGrid";
import LibrarySearch from "./LibrarySearch";
import LibrarySkeleton from "./LibrarySkeleton";

export default function LibrarySection() {
  return (
    <section id="library" className="scroll-mt-6 pb-16 pt-14 sm:pb-20 sm:pt-16">
      <LibrarySearchProvider>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase text-white">The Library</h2>
            <p className="mt-1 text-sm text-muted">Twelve lifts covering every major muscle group.</p>
          </div>
          <LibrarySearch />
        </div>

        <Suspense fallback={<LibrarySkeleton />}>
          <LibraryGrid />
        </Suspense>
      </LibrarySearchProvider>
    </section>
  );
}
