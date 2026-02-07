import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-primary)]">
      {/* Terracotta accent line */}
      <div className="h-[1px] bg-[var(--color-accent)]" />

      <div className="mx-auto max-w-[var(--max-content)] px-5 py-16 md:px-10 lg:px-20">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Column 1: Logo & Description */}
          <div>
            <h3 className="font-body text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-text-primary)]">
              Studio 27
            </h3>
            <p className="mt-4 font-body text-sm leading-relaxed text-[var(--color-text-secondary)]">
              Architecture and interior design studio based in Prishtina, Kosovo.
            </p>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 font-body text-sm text-[var(--color-text-secondary)]">
              <li>
                <a
                  href="mailto:connect@studio27.site"
                  className="transition-colors hover:text-[var(--color-accent)]"
                >
                  connect@studio27.site
                </a>
              </li>
              <li>
                <a
                  href="tel:+38345448404"
                  className="transition-colors hover:text-[var(--color-accent)]"
                >
                  +383 45 448 404
                </a>
              </li>
              <li>Prishtina, Kosovo</li>
            </ul>
          </div>

          {/* Column 3: Navigation & Social */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/work"
                  className="font-body text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-body text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-body text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <a
              href="https://instagram.com/studio27____"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-body text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              @studio27____
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-[var(--color-border)] pt-8">
          <p className="font-mono text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} Studio 27. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
