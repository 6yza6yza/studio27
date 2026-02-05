"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Project } from "@/data/projects";
import { SplitText } from "@/components/ui/SplitText";
import { CurtainReveal } from "@/components/ui/CurtainReveal";
import { MagneticElement } from "@/components/ui/MagneticElement";

interface SelectedWorkProps {
  projects: Project[];
}

export function SelectedWork({ projects }: SelectedWorkProps) {
  return (
    <section className="content-auto bg-[var(--color-bg-secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-[var(--max-content)] px-5 md:px-10 lg:px-20">
        {/* Section heading */}
        <SplitText
          as="h2"
          className="mb-16 font-display text-4xl text-[var(--color-text-primary)] md:mb-24 md:text-5xl lg:text-6xl"
        >
          Selected Work
        </SplitText>

        {/* Asymmetric grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => {
            const isLarge = index < 2;

            return (
              <MagneticElement
                key={project.slug}
                className={`group ${isLarge ? "md:col-span-1" : ""}`}
                strength={0.1}
                tiltStrength={2}
              >
                <Link href={`/work/${project.slug}`} className="block">
                  <CurtainReveal delay={index * 0.15} direction="left">
                    <div className={`relative overflow-hidden ${isLarge ? "aspect-[4/3]" : "aspect-[3/2]"}`}>
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
                    <p className="mt-1 font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                      {project.category} · {project.year}
                    </p>
                  </div>
                </Link>
              </MagneticElement>
            );
          })}
        </div>

        {/* View all link */}
        <div className="mt-16 text-center md:mt-24">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 font-body text-sm tracking-wide text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
          >
            View All Work
            <motion.span
              className="inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
            >
              →
            </motion.span>
          </Link>
        </div>
      </div>
    </section>
  );
}
