interface ApproachCardProps {
  number: string;
  title: string;
  description: string;
}

export function ApproachCard({ number, title, description }: ApproachCardProps) {
  return (
    <div className="border-l border-[var(--color-border)] pl-6">
      <span className="font-mono text-sm text-[var(--color-accent)]">{number}</span>
      <h3 className="mt-2 font-display text-xl text-[var(--color-text-primary)]">{title}</h3>
      <p className="mt-2 font-body text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {description}
      </p>
    </div>
  );
}
