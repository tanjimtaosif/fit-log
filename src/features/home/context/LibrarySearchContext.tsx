"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

interface LibrarySearchContextValue {
  query: string;
  setQuery: (query: string) => void;
}

const LibrarySearchContext = createContext<LibrarySearchContextValue | null>(null);

export function LibrarySearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");
  const value = useMemo(() => ({ query, setQuery }), [query]);

  return <LibrarySearchContext.Provider value={value}>{children}</LibrarySearchContext.Provider>;
}

export function useLibrarySearch() {
  const context = useContext(LibrarySearchContext);

  if (!context) {
    throw new Error("useLibrarySearch must be used within a LibrarySearchProvider");
  }

  return context;
}
