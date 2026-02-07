import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug, getAdjacentProjects } from "@/data/projects";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProjectGallery } from "@/components/work/ProjectGallery";
import { ProgressiveImage } from "@/components/ui/ProgressiveImage";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found — Studio 27",
    };
  }

  return {
    title: `${project.name} — Studio 27`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      {/* Hero image */}
      <div className="relative h-[60vh] w-full md:h-[80vh]">
        {project.heroImage ? (
          <ProgressiveImage
            src={project.heroImage}
            alt={project.name}
            priority
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
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-transparent to-transparent" />
        {/* Project name */}
        <div className="absolute bottom-8 left-5 right-5 md:bottom-16 md:left-20 md:right-20">
          <ScrollReveal>
            <h1 className="font-display text-4xl text-[var(--color-text-primary)] md:text-5xl lg:text-6xl">
              {project.name}
            </h1>
          </ScrollReveal>
        </div>
      </div>

      {/* Content section */}
      <div className="mx-auto max-w-[var(--max-content)] px-5 py-16 md:px-10 md:py-24 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          {/* Left: Description */}
          <ScrollReveal>
            <div className="space-y-6">
              {project.longDescription.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="font-body text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: Metadata panel */}
          <ScrollReveal delay={0.2}>
            <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]">
                    Location
                  </span>
                  <p className="mt-1 font-body text-sm text-[var(--color-text-primary)]">
                    {project.location}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]">
                    Year
                  </span>
                  <p className="mt-1 font-body text-sm text-[var(--color-text-primary)]">
                    {project.year}
                  </p>
                </div>

                {project.area && (
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]">
                      Area
                    </span>
                    <p className="mt-1 font-body text-sm text-[var(--color-text-primary)]">
                      {project.area}
                    </p>
                  </div>
                )}

                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]">
                    Category
                  </span>
                  <p className="mt-1 font-body text-sm text-[var(--color-text-primary)]">
                    {project.category} · {project.subcategory}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]">
                    Status
                  </span>
                  <p className="mt-1 font-body text-sm text-[var(--color-text-primary)]">
                    {project.status}
                  </p>
                </div>

                {project.photographer && (
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]">
                      Photography
                    </span>
                    <p className="mt-1 font-body text-sm text-[var(--color-text-primary)]">
                      {project.photographer}
                      {project.photographerHandle && (
                        <a
                          href={`https://instagram.com/${project.photographerHandle}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-1 text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
                        >
                          @{project.photographerHandle}
                        </a>
                      )}
                    </p>
                  </div>
                )}

                {project.collaborators && project.collaborators.length > 0 && (
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]">
                      Collaborators
                    </span>
                    <div className="mt-1 space-y-1">
                      {project.collaborators.map((collab, index) => (
                        <p key={index} className="font-body text-sm text-[var(--color-text-primary)]">
                          {collab.name}
                          {collab.handle && (
                            <a
                              href={`https://instagram.com/${collab.handle}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-1 text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
                            >
                              @{collab.handle}
                            </a>
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Image gallery */}
        <div className="mt-16 md:mt-24">
          <ProjectGallery
            projectName={project.name}
            galleryImages={project.galleryImages}
            galleryCount={project.galleryCount}
          />
        </div>
      </div>

      {/* Navigation to prev/next projects */}
      <div className="border-t border-[var(--color-border)]">
        <div className="grid md:grid-cols-2">
          {/* Previous */}
          {prev && (
            <Link
              href={`/work/${prev.slug}`}
              className="group flex items-center justify-between border-b border-[var(--color-border)] p-8 transition-colors hover:bg-[var(--color-bg-secondary)] md:border-b-0 md:border-r md:p-12"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                  ← Previous
                </span>
                <p className="mt-2 font-display text-xl text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-accent)] md:text-2xl">
                  {prev.name}
                </p>
              </div>
            </Link>
          )}

          {/* Next */}
          {next && (
            <Link
              href={`/work/${next.slug}`}
              className="group flex items-center justify-between p-8 text-right transition-colors hover:bg-[var(--color-bg-secondary)] md:p-12"
            >
              <div className="ml-auto">
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                  Next →
                </span>
                <p className="mt-2 font-display text-xl text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-accent)] md:text-2xl">
                  {next.name}
                </p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
