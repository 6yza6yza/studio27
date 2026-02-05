import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function StudioIntro() {
  return (
    <section className="content-auto bg-[var(--color-bg-primary)] py-24 md:py-32">
      <div className="mx-auto max-w-[var(--max-content)] px-5 md:px-10 lg:px-20">
        {/* Two column layout */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          {/* Left: Intro text */}
          <ScrollReveal>
            <p className="font-body text-xl leading-relaxed text-[var(--color-text-primary)] md:text-2xl lg:text-[28px] lg:leading-[1.6]">
              Studio 27 is an architecture and interior design studio in Prishtina, Kosovo.
              We design spaces that blend warm materials, clean lines, and handcrafted details —
              built to age beautifully.
            </p>
          </ScrollReveal>

          {/* Right: Team photo placeholder */}
          <ScrollReveal delay={0.2}>
            <div className="aspect-[3/4] lg:aspect-[4/5]">
              <ImagePlaceholder label="Team Photo" aspectRatio="4/5" className="h-full w-full" />
            </div>
          </ScrollReveal>
        </div>

        {/* Stats bar */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-[var(--color-border)] pt-8 md:mt-24 md:flex-row md:items-center md:gap-0 md:pt-12">
            <div className="flex items-center gap-4">
              <span className="font-mono text-sm text-[var(--color-text-secondary)]">2018</span>
              <span className="h-4 w-[1px] bg-[var(--color-accent)]" />
              <span className="font-body text-sm text-[var(--color-text-muted)]">Founded</span>
            </div>
            <div className="hidden h-8 w-[1px] bg-[var(--color-accent)] md:block" />
            <div className="flex items-center gap-4">
              <span className="font-mono text-sm text-[var(--color-text-secondary)]">50+</span>
              <span className="h-4 w-[1px] bg-[var(--color-accent)]" />
              <span className="font-body text-sm text-[var(--color-text-muted)]">Projects Completed</span>
            </div>
            <div className="hidden h-8 w-[1px] bg-[var(--color-accent)] md:block" />
            <div className="flex items-center gap-4">
              <span className="font-mono text-sm text-[var(--color-text-secondary)]">Prishtina</span>
              <span className="h-4 w-[1px] bg-[var(--color-accent)]" />
              <span className="font-body text-sm text-[var(--color-text-muted)]">Kosovo</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
