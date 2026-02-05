import Image from "next/image";

interface ProjectImageProps {
  src?: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function ProjectImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: ProjectImageProps) {
  // If no src provided, show placeholder
  if (!src) {
    return (
      <div
        className={`placeholder-gradient flex items-center justify-center ${className}`}
        style={!fill ? { width, height } : undefined}
      >
        <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)] opacity-60">
          {alt}
        </span>
      </div>
    );
  }

  // Real image
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${className}`}
        priority={priority}
        sizes={sizes}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={`object-cover ${className}`}
      priority={priority}
      sizes={sizes}
    />
  );
}
