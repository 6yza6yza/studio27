"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  splitBy?: "word" | "character";
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function SplitText({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.03,
  splitBy = "word",
  as: Component = "h1",
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const units = splitBy === "word" ? children.split(" ") : children.split("");

  return (
    <Component ref={ref as React.RefObject<HTMLHeadingElement>} className={className}>
      {units.map((unit, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{
              duration: 0.5,
              delay: delay + index * staggerDelay,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            {unit}
            {splitBy === "word" && index < units.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
