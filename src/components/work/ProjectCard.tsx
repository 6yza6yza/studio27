"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";
import { CurtainReveal } from "@/components/ui/CurtainReveal";
import { MagneticElement } from "@/components/ui/MagneticElement";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <MagneticElement
      className="group"
      strength={0.1}
      tiltStrength={2}
    >
      <Link href={`/work/${project.slug}`} className="block">
        <CurtainReveal delay={index * 0.15} direction="left">
          <div className="relative aspect-[3/2] overflow-hidden">
            {project.heroImage ? (
              <Image
                src={project.heroImage}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className="placeholder-gradient flex h-full w-full items-center justify-center transition-transform duration-700 group-hover:scale-105">
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)] opacity-60">
                  {project.name}
                </span>
              </div>
            )}
            {/* Hover line */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--color-accent)] transition-all duration-500 group-hover:w-full" />
          </div>
        </CurtainReveal>

        {/* Project info */}
        <div className="mt-4">
          <h3 className="font-display text-xl text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-accent)] md:text-2xl">
            {project.name}
          </h3>
          <p className="mt-2 font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
            {project.category} · {project.subcategory} · {project.year} · {project.location}
            {project.area && ` · ${project.area}`}
          </p>
        </div>
      </Link>
    </MagneticElement>
  );
}
