"use client";

import SearchInput from "@/components/ui/SearchInput";

import { useLibrarySearch } from "../context/LibrarySearchContext";

export default function LibrarySearch() {
  const { query, setQuery } = useLibrarySearch();

  return (
    <SearchInput
      value={query}
      onChange={setQuery}
      label="Search workouts by name or tag"
      placeholder="Search by name or tag"
      className="w-full sm:w-72"
    />
  );
}
