import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProgressiveImage } from "@/components/ui/ProgressiveImage";
import { projects } from "@/data/projects";
import Link from "next/link";

export function InstagramCTA() {
  // Get 6 different project images for the grid
  const projectImages = [
    { src: projects[0].heroImage!, slug: projects[0].slug, name: projects[0].name },
    { src: projects[1].heroImage!, slug: projects[1].slug, name: projects[1].name },
    { src: projects[2].heroImage!, slug: projects[2].slug, name: projects[2].name },
    { src: projects[3].heroImage!, slug: projects[3].slug, name: projects[3].name },
    { src: projects[4].heroImage!, slug: projects[4].slug, name: projects[4].name },
    { src: projects[5].heroImage!, slug: projects[5].slug, name: projects[5].name },
  ];

  return (
    <section className="content-auto bg-[var(--color-bg-primary)] py-24 md:py-32">
      <div className="mx-auto max-w-[var(--max-content)] px-5 md:px-10 lg:px-20">
        {/* CTA Header */}
        <ScrollReveal>
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="font-body text-lg text-[var(--color-text-secondary)]">
              Follow our process
            </p>
            <a
              href="https://instagram.com/studio27____"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-2xl text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent)] md:text-3xl"
            >
              @studio27____
            </a>
          </div>
        </ScrollReveal>

        {/* Project grid */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-4">
            {projectImages.map((project, index) => (
              <Link
                key={index}
                href={`/work/${project.slug}`}
                className="group relative aspect-square overflow-hidden"
              >
                <ProgressiveImage
                  src={project.src}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
