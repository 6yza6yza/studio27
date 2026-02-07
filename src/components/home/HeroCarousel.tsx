"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Project } from "@/data/projects";
import { ProgressiveImage } from "@/components/ui/ProgressiveImage";

interface HeroCarouselProps {
  projects: Project[];
}

export function HeroCarousel({ projects }: HeroCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const slideWidth = container.clientWidth;
      const newIndex = Math.round(scrollLeft / slideWidth);
      setActiveIndex(Math.min(newIndex, projects.length - 1));
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [projects.length]);

  // Auto-advance every 8 seconds
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % projects.length;
      const slideWidth = container.clientWidth;
      container.scrollTo({
        left: nextIndex * slideWidth,
        behavior: "smooth",
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [activeIndex, projects.length]);

  return (
    <section className="relative h-screen w-full">
      {/* Horizontal scroll container */}
      <div
        ref={containerRef}
        className="horizontal-scroll flex h-full w-full snap-x snap-mandatory overflow-x-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="relative h-full w-full flex-shrink-0 snap-start"
          >
            {/* Background image */}
            <div className="absolute inset-0">
              {project.heroImage ? (
                <ProgressiveImage
                  src={project.heroImage}
                  alt={project.name}
                  priority={index === 0}
                  sizes="100vw"
                />
              ) : (
                <div className="placeholder-gradient flex h-full w-full items-center justify-center">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)] opacity-60">
                    {project.name}
                  </span>
                </div>
              )}
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)]/80 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute bottom-20 left-5 right-5 md:bottom-32 md:left-20 md:right-20">
              <motion.span
                className="mb-4 inline-block font-mono text-xs uppercase tracking-wider text-[var(--color-text-secondary)]"
                initial={{ opacity: 0, y: 20 }}
                animate={activeIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {project.category} · {project.year} · {project.location}
              </motion.span>
              <motion.h2
                className="font-display text-5xl leading-[1.1] text-[var(--color-text-primary)] md:text-7xl lg:text-8xl"
                initial={{ opacity: 0, y: 40 }}
                animate={activeIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {project.name}
              </motion.h2>
            </div>
          </Link>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-8 left-5 right-5 md:left-20 md:right-20">
        <div className="h-[1px] w-full bg-[var(--color-border)]">
          <motion.div
            className="h-full bg-[var(--color-accent)]"
            style={{ width: `${((activeIndex + 1) / projects.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-5 flex items-center gap-2 md:left-20">
        <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">
          Scroll to explore
        </span>
        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="text-[var(--color-text-muted)]"
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-5 font-mono text-xs text-[var(--color-text-muted)] md:right-20">
        <span className="text-[var(--color-accent)]">{String(activeIndex + 1).padStart(2, "0")}</span>
        <span className="mx-1">/</span>
        <span>{String(projects.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}
