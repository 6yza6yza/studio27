"use client";

import { useState, useEffect, RefObject } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export function useMousePosition(ref?: RefObject<HTMLElement | null>): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (ref?.current) {
        const rect = ref.current.getBoundingClientRect();
        setMousePosition({
          x: ev.clientX - rect.left,
          y: ev.clientY - rect.top,
        });
      } else {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
      }
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [ref]);

  return mousePosition;
}
