"use client";

import { useRef, useState, ReactNode, MouseEvent } from "react";
import { motion } from "motion/react";

interface MagneticElementProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  tiltStrength?: number;
}

export function MagneticElement({
  children,
  className = "",
  strength = 0.3,
  tiltStrength = 3,
}: MagneticElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    setPosition({
      x: distanceX * strength,
      y: distanceY * strength,
    });

    setTilt({
      x: (distanceY / rect.height) * tiltStrength,
      y: -(distanceX / rect.width) * tiltStrength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: position.x,
        y: position.y,
        rotateX: tilt.x,
        rotateY: tilt.y,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
      style={{ perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
}
