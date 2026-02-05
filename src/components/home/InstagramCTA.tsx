import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function InstagramCTA() {
  // 6 placeholder Instagram squares
  const instagramPosts = Array.from({ length: 6 }, (_, i) => i + 1);

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

        {/* Instagram grid */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-4">
            {instagramPosts.map((post) => (
              <a
                key={post}
                href="https://instagram.com/studio27____"
                target="_blank"
                rel="noopener noreferrer"
                className="group aspect-square overflow-hidden"
              >
                <ImagePlaceholder
                  label={`Post ${post}`}
                  aspectRatio="1/1"
                  className="h-full w-full transition-transform duration-500 group-hover:scale-110"
                />
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
