"use client";

import { Project, ProjectCategory } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  filter: string;
}

export function ProjectGrid({ projects, filter }: ProjectGridProps) {
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === (filter as ProjectCategory));

  return (
    <div className="grid gap-8 md:grid-cols-2 md:gap-12">
      {filteredProjects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}
