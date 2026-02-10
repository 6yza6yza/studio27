import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function StudioIntro() {
  return (
    <section className="content-auto bg-[var(--color-bg-primary)] py-24 md:py-32">
      <div className="mx-auto max-w-[var(--max-content)] px-5 md:px-10 lg:px-20">
        {/* Intro text - full width */}
        <ScrollReveal>
          <p className="max-w-4xl font-body text-xl leading-relaxed text-[var(--color-text-primary)] md:text-2xl lg:text-[28px] lg:leading-[1.6]">
            Studio 27 is an award-winning architecture and interior design studio based in Prishtina, Kosovo.
            We design spaces that blend warm materials, clean lines, and handcrafted details —
            built to age beautifully.
          </p>
        </ScrollReveal>

        {/* Stats bar */}
        <ScrollReveal delay={0.2}>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-[var(--color-border)] pt-8 md:mt-24 md:flex-row md:items-center md:gap-0 md:pt-12">
            <div className="flex items-center gap-4">
              <span className="font-mono text-sm text-[var(--color-text-secondary)]">2019</span>
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
