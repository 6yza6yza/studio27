import { Metadata } from "next";
import { SplitText } from "@/components/ui/SplitText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ApproachCard } from "@/components/about/ApproachCard";

export const metadata: Metadata = {
  title: "About — Studio 27 · Architecture & Interior Design",
  description:
    "Learn about Studio 27, an architecture and interior design studio in Prishtina, Kosovo. We design spaces with warm materials, clean lines, and handcrafted details.",
};

const approach = [
  {
    number: "01",
    title: "Material First",
    description:
      "We start with materials. Oak, terracotta, stone — honest materials that age with grace.",
  },
  {
    number: "02",
    title: "Crafted Details",
    description:
      "Every joint, edge, and surface is designed with intention. Nothing is accidental.",
  },
  {
    number: "03",
    title: "Warm Minimalism",
    description:
      "Clean lines and calm spaces, but never cold. Our interiors feel like home.",
  },
  {
    number: "04",
    title: "Built to Last",
    description:
      "We design for decades, not trends. Spaces that get better with time.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] pt-32 md:pt-40">
      <div className="mx-auto max-w-[var(--max-content)] px-5 md:px-10 lg:px-20">
        {/* Page header */}
        <SplitText
          as="h1"
          className="font-display text-5xl text-[var(--color-text-primary)] md:text-6xl lg:text-7xl"
        >
          Studio
        </SplitText>

        {/* Opening statement */}
        <ScrollReveal>
          <p className="mt-8 max-w-3xl font-body text-xl leading-relaxed text-[var(--color-text-primary)] md:mt-12 md:text-2xl lg:text-[28px] lg:leading-[1.6]">
            We are an architecture and interior design studio in Prishtina, Kosovo.
            We believe great design lives in the details — in the way materials meet,
            light falls, and spaces feel.
          </p>
        </ScrollReveal>

        {/* Philosophy section */}
        <ScrollReveal>
          <div className="mt-16 max-w-3xl space-y-6 md:mt-24">
            <p className="font-body text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
              Founded in 2019, Studio 27 has grown from a small practice into one of
              Kosovo&apos;s most recognized design studios. Our work spans residential
              interiors, commercial spaces, cafés, offices, and increasingly, full
              architectural projects.
            </p>
            <p className="font-body text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
              We believe in the power of warm materials — oak, terracotta, natural stone
              — combined with clean, precise lines. Our spaces are designed to feel
              immediately welcoming while revealing their depth over time. Every detail
              is intentional, every material chosen for how it will age.
            </p>
            <p className="font-body text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
              Our approach is collaborative. We work closely with clients, craftspeople,
              and suppliers to ensure every project reflects both our design philosophy
              and the unique needs of those who will inhabit the space.
            </p>
          </div>
        </ScrollReveal>

        {/* Approach section */}
        <div className="mt-24 md:mt-32">
          <ScrollReveal>
            <h2 className="mb-12 font-display text-3xl text-[var(--color-text-primary)] md:mb-16 md:text-4xl">
              Our Approach
            </h2>
          </ScrollReveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((item, index) => (
              <ScrollReveal key={item.number} delay={index * 0.1}>
                <ApproachCard
                  number={item.number}
                  title={item.title}
                  description={item.description}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-24 md:h-32" />
      </div>
    </div>
  );
}
