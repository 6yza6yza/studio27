import { Suspense } from "react";
import { Metadata } from "next";
import { SplitText } from "@/components/ui/SplitText";
import { FilterBar } from "@/components/work/FilterBar";
import { ProjectGrid } from "@/components/work/ProjectGrid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work — Studio 27 · Architecture & Interior Design",
  description:
    "Explore our portfolio of architecture and interior design projects in Kosovo. Residential homes, commercial spaces, cafés, and offices designed with intention.",
};

interface WorkPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function WorkPage({ searchParams }: WorkPageProps) {
  const params = await searchParams;
  const filter = params.category || "all";

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] pt-32 md:pt-40">
      <div className="mx-auto max-w-[var(--max-content)] px-5 md:px-10 lg:px-20">
        {/* Page header */}
        <div className="mb-12 md:mb-16">
          <SplitText
            as="h1"
            className="font-display text-5xl text-[var(--color-text-primary)] md:text-6xl lg:text-7xl"
          >
            Work
          </SplitText>
          <p className="mt-4 font-body text-lg text-[var(--color-text-secondary)]">
            Architecture, interiors, and everything in between.
          </p>
        </div>

        {/* Filter bar */}
        <Suspense fallback={<div className="h-8" />}>
          <FilterBar />
        </Suspense>

        {/* Project grid */}
        <ProjectGrid projects={projects} filter={filter} />

        {/* Bottom spacing */}
        <div className="h-24 md:h-32" />
      </div>
    </div>
  );
}
