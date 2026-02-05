"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const filters = [
  { value: "all", label: "All" },
  { value: "Residential", label: "Residential" },
  { value: "Commercial", label: "Commercial" },
];

export function FilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentFilter = searchParams.get("category") || "all";

  const handleFilterChange = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === "all") {
        params.delete("category");
      } else {
        params.set("category", value);
      }
      router.push(`/work?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  return (
    <div className="mb-12 flex flex-wrap gap-4 md:mb-16">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => handleFilterChange(filter.value)}
          className={`relative font-body text-sm tracking-wide transition-colors ${
            currentFilter === filter.value
              ? "text-[var(--color-text-primary)]"
              : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
          }`}
        >
          {filter.label}
          {currentFilter === filter.value && (
            <span className="absolute -bottom-1 left-0 h-[1px] w-full bg-[var(--color-accent)]" />
          )}
        </button>
      ))}
    </div>
  );
}
