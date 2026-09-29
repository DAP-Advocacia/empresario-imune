"use client";

import { useRef, type ReactNode, type ElementType } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/** Card com brilho que segue o cursor (estilo React Bits Spotlight Card). */
export default function SpotlightCard({
  children,
  className,
  as: Tag = "div",
}: SpotlightCardProps) {
  const ref = useRef<HTMLElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <Tag
      ref={ref}
      className={`spotlight-card${className ? ` ${className}` : ""}`}
      onMouseMove={handleMove}
    >
      {children}
    </Tag>
  );
}
