import { HeroCarousel } from "@/components/home/HeroCarousel";
import { StudioIntro } from "@/components/home/StudioIntro";
import { SelectedWork } from "@/components/home/SelectedWork";
import { Manifesto } from "@/components/home/Manifesto";
import { InstagramCTA } from "@/components/home/InstagramCTA";
import { projects, getFeaturedProjects } from "@/data/projects";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      {/* Section A: Horizontal Scroll Hero */}
      <HeroCarousel projects={featuredProjects} />

      {/* Section B: Studio Introduction */}
      <StudioIntro />

      {/* Section C: Selected Work Grid */}
      <SelectedWork projects={projects} />

      {/* Section D: Philosophy / Manifesto */}
      <Manifesto />

      {/* Section E: Instagram CTA */}
      <InstagramCTA />
    </>
  );
}
