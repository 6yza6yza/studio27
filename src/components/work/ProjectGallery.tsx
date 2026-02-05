"use client";

import Image from "next/image";
import { ImageReveal } from "@/components/ui/ImageReveal";

interface ProjectGalleryProps {
  projectName: string;
  galleryImages?: string[];
  galleryCount: number;
}

export function ProjectGallery({ projectName, galleryImages, galleryCount }: ProjectGalleryProps) {
  // Use real images if available, otherwise create placeholder data
  const images = galleryImages
    ? galleryImages.map((src, i) => ({ id: i + 1, src }))
    : Array.from({ length: galleryCount }, (_, i) => ({ id: i + 1, src: null as string | null }));

  // Skip the first image as it's already shown as hero
  const galleryOnly = images.slice(1);

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Show all remaining images */}
      {galleryOnly.map((image, index) => {
        // Load first 4 images eagerly to avoid Edge lazy loading issues
        const shouldLoadEager = index < 4;

        // Every other image: full width or pair
        const isEven = index % 3 === 0;

        if (isEven) {
          // Full width image
          return (
            <ImageReveal key={image.id} delay={0}>
              <div className="relative aspect-video overflow-hidden">
                {image.src ? (
                  <Image
                    src={image.src}
                    alt={`${projectName} - Image ${image.id}`}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    loading={shouldLoadEager ? "eager" : "lazy"}
                    priority={index === 0}
                  />
                ) : (
                  <div className="placeholder-gradient flex h-full w-full items-center justify-center">
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)] opacity-60">
                      Image {image.id}
                    </span>
                  </div>
                )}
              </div>
            </ImageReveal>
          );
        }

        // Check if this is the start of a pair
        const nextImage = galleryOnly[index + 1];
        const isPairStart = index % 3 === 1;

        if (isPairStart) {
          return (
            <div key={image.id} className="grid gap-6 md:grid-cols-2 md:gap-8">
              {/* First image of pair */}
              <ImageReveal delay={0}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  {image.src ? (
                    <Image
                      src={image.src}
                      alt={`${projectName} - Image ${image.id}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading={shouldLoadEager ? "eager" : "lazy"}
                    />
                  ) : (
                    <div className="placeholder-gradient flex h-full w-full items-center justify-center">
                      <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)] opacity-60">
                        Image {image.id}
                      </span>
                    </div>
                  )}
                </div>
              </ImageReveal>
              {/* Second image of pair (if exists) */}
              {nextImage && (
                <ImageReveal delay={0.1}>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    {nextImage.src ? (
                      <Image
                        src={nextImage.src}
                        alt={`${projectName} - Image ${nextImage.id}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading={shouldLoadEager ? "eager" : "lazy"}
                      />
                    ) : (
                      <div className="placeholder-gradient flex h-full w-full items-center justify-center">
                        <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)] opacity-60">
                          Image {nextImage.id}
                        </span>
                      </div>
                    )}
                  </div>
                </ImageReveal>
              )}
            </div>
          );
        }

        // Skip second image of pair (already rendered above)
        return null;
      })}
    </div>
  );
}
