import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Manifesto() {
  const pillars = [
    {
      title: "Material First",
      description: "Honest materials that age with grace",
    },
    {
      title: "Crafted Details",
      description: "Nothing is accidental",
    },
    {
      title: "Built to Last",
      description: "Designed for decades, not trends",
    },
  ];

  return (
    <section className="relative bg-[var(--color-bg-tertiary)] py-24 md:py-32">
      {/* Top accent line */}
      <div className="absolute left-0 right-0 top-0 h-[1px] bg-[var(--color-accent)]" />

      <div className="mx-auto max-w-[var(--max-content)] px-5 md:px-10 lg:px-20">
        {/* Quote */}
        <ScrollReveal>
          <blockquote className="mx-auto max-w-4xl text-center">
            <p className="font-display text-2xl italic leading-relaxed text-[var(--color-text-primary)] md:text-3xl lg:text-4xl">
              "Details make the design. Every corner, every texture — crafted with intention."
            </p>
          </blockquote>
        </ScrollReveal>

        {/* Value pillars */}
        <div className="mt-16 grid gap-8 md:mt-24 md:grid-cols-3 md:gap-12">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.title} delay={index * 0.1}>
              <div className="text-center">
                <h3 className="font-display text-xl text-[var(--color-text-primary)] md:text-2xl">
                  {pillar.title}
                </h3>
                <p className="mt-2 font-body text-sm text-[var(--color-text-secondary)]">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--color-accent)]" />
    </section>
  );
}
