import { Metadata } from "next";
import { SplitText } from "@/components/ui/SplitText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Studio 27 · Architecture & Interior Design",
  description:
    "Get in touch with Studio 27 for your architecture or interior design project in Kosovo. We'd love to hear about your ideas.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] pt-32 md:pt-40">
      <div className="mx-auto max-w-[var(--max-content)] px-5 md:px-10 lg:px-20">
        {/* Page header */}
        <SplitText
          as="h1"
          className="font-display text-5xl text-[var(--color-text-primary)] md:text-6xl lg:text-7xl"
        >
          Get in Touch
        </SplitText>

        <ScrollReveal>
          <p className="mt-4 font-body text-lg text-[var(--color-text-secondary)]">
            Have a project in mind? We&apos;d love to hear about it.
          </p>
        </ScrollReveal>

        {/* Two column layout */}
        <div className="mt-16 grid gap-12 md:mt-24 lg:grid-cols-2 lg:gap-20">
          {/* Left: Contact details */}
          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                  Email
                </h3>
                <a
                  href="mailto:connect@studio27.site"
                  className="mt-2 block font-body text-lg text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent)]"
                >
                  connect@studio27.site
                </a>
              </div>

              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                  Phone
                </h3>
                <a
                  href="tel:+38345448404"
                  className="mt-2 block font-body text-lg text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent)]"
                >
                  +383 45 448 404
                </a>
              </div>

              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                  Location
                </h3>
                <p className="mt-2 font-body text-lg text-[var(--color-text-primary)]">
                  Prishtina, Kosovo
                </p>
              </div>

              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                  Instagram
                </h3>
                <a
                  href="https://instagram.com/studio27____"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block font-body text-lg text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent)]"
                >
                  @studio27____
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Contact form */}
          <ScrollReveal delay={0.2}>
            <ContactForm />
          </ScrollReveal>
        </div>

        {/* Map placeholder */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 md:mt-24">
            <div className="flex aspect-[21/9] items-center justify-center bg-[var(--color-bg-secondary)]">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                Prishtina, Kosovo
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom spacing */}
        <div className="h-24 md:h-32" />
      </div>
    </div>
  );
}
