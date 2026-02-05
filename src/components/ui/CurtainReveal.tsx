"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "motion/react";

interface CurtainRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "left" | "right" | "top" | "bottom";
}

export function CurtainReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  direction = "left",
}: CurtainRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getInitialClipPath = () => {
    switch (direction) {
      case "left":
        return "inset(0 0 0 100%)";
      case "right":
        return "inset(0 100% 0 0)";
      case "top":
        return "inset(100% 0 0 0)";
      case "bottom":
        return "inset(0 0 100% 0)";
      default:
        return "inset(0 0 0 100%)";
    }
  };

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Terracotta overlay that slides away */}
      <motion.div
        className="absolute inset-0 z-10 bg-[var(--color-accent)]"
        initial={{ x: 0 }}
        animate={
          isInView
            ? {
                x: direction === "left" ? "100%" : direction === "right" ? "-100%" : 0,
                y: direction === "top" ? "100%" : direction === "bottom" ? "-100%" : 0,
              }
            : { x: 0, y: 0 }
        }
        transition={{
          duration,
          delay,
          ease: [0.4, 0, 0.2, 1],
        }}
      />
      {/* Content that reveals */}
      <motion.div
        initial={{ clipPath: getInitialClipPath() }}
        animate={isInView ? { clipPath: "inset(0 0 0 0)" } : { clipPath: getInitialClipPath() }}
        transition={{
          duration,
          delay,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
