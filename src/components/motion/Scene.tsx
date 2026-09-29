"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

interface SceneProps {
  id?: string;
  label?: string;
  className?: string;
  children: ReactNode;
}

/**
 * Seção com transição de "cena" ligada ao scroll: ao entrar, ela sobe e
 * cresce até ocupar a largura total; ao sair pelo topo, recua levemente —
 * o efeito de uma página empilhando sobre a anterior.
 */
export default function Scene({ id, label, className, children }: SceneProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress: enter } = useScroll({
    target: ref,
    offset: ["start end", "start 30%"],
  });
  const { scrollYProgress: exit } = useScroll({
    target: ref,
    offset: ["end 55%", "end start"],
  });

  const scale = useTransform([enter, exit], ([e, x]: number[]) => {
    const inScale = 0.94 + 0.06 * e;
    const outScale = 1 - 0.05 * x;
    return Math.min(inScale, outScale);
  });
  const radius = useTransform(enter, [0, 1], [56, 32]);
  const opacity = useTransform(exit, [0, 1], [1, 0.35]);

  return (
    <motion.section
      ref={ref}
      id={id}
      data-screen-label={label}
      className={`scene ${className ?? ""}`}
      style={
        reduce
          ? undefined
          : {
              scale,
              opacity,
              borderTopLeftRadius: radius,
              borderTopRightRadius: radius,
            }
      }
    >
      {children}
    </motion.section>
  );
}
