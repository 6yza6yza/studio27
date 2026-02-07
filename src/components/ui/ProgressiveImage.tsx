"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import blurData from "@/data/blur-data.json";

const blurMap = blurData as Record<string, string>;

interface ProgressiveImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  loading?: "eager" | "lazy";
}

export function ProgressiveImage({
  src,
  alt,
  fill = true,
  width,
  height,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  loading,
}: ProgressiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const blurSrc = blurMap[src];

  // Robust loading detection: check on mount + poll as fallback + native event listener
  useEffect(() => {
    if (isLoaded) return;

    const el = containerRef.current;
    if (!el) return;

    const checkLoaded = () => {
      const img = el.querySelector("img");
      if (img && img.complete && img.naturalWidth > 0) {
        setIsLoaded(true);
        return true;
      }
      return false;
    };

    // Check immediately (handles cached images)
    if (checkLoaded()) return;

    // Attach native load listener as secondary mechanism
    const img = el.querySelector("img");
    const handleLoad = () => setIsLoaded(true);
    if (img) {
      img.addEventListener("load", handleLoad);
    }

    // Poll every 200ms as final fallback
    const interval = setInterval(() => {
      if (checkLoaded()) {
        clearInterval(interval);
      }
    }, 200);

    return () => {
      clearInterval(interval);
      if (img) {
        img.removeEventListener("load", handleLoad);
      }
    };
  }, [isLoaded]);

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden">
      {/* Full resolution image — always visible, loads naturally */}
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover ${className}`}
          priority={priority}
          sizes={sizes}
          loading={loading}
          onLoad={() => setIsLoaded(true)}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width || 800}
          height={height || 600}
          className={`object-cover ${className}`}
          priority={priority}
          sizes={sizes}
          loading={loading}
          onLoad={() => setIsLoaded(true)}
        />
      )}

      {/* LQIP overlay: blurred version of actual image, fades out when loaded */}
      {blurSrc && (
        <img
          src={blurSrc}
          alt=""
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            isLoaded ? "opacity-0" : "opacity-100"
          }`}
          style={{ filter: "blur(20px)", transform: "scale(1.1)" }}
        />
      )}

      {/* Fallback background if no blur data, fades out when loaded */}
      {!blurSrc && (
        <div
          className={`pointer-events-none absolute inset-0 bg-[#d4c4b0] transition-opacity duration-700 dark:bg-[#2a2420] ${
            isLoaded ? "opacity-0" : "opacity-100"
          }`}
        />
      )}
    </div>
  );
}
