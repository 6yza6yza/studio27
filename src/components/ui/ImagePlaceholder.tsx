interface ImagePlaceholderProps {
  label?: string;
  aspectRatio?: "16/9" | "3/2" | "4/5" | "1/1" | "9/16";
  className?: string;
}

export function ImagePlaceholder({
  label,
  aspectRatio = "3/2",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`placeholder-gradient relative flex items-center justify-center overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      {label && (
        <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)] opacity-60">
          {label}
        </span>
      )}
    </div>
  );
}
