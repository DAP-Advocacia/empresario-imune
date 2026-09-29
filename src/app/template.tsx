"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { EASE } from "@/components/motion/Reveal";

// O template remonta a cada navegação; a primeira carga não anima para não
// atrasar o LCP — só as trocas de rota subsequentes.
let hasNavigated = false;

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [animate] = useState(() => hasNavigated);

  useEffect(() => {
    hasNavigated = true;
  }, []);

  return (
    <>
      {animate && (
        <motion.div
          key={`curtain-${pathname}`}
          className="route-curtain"
          aria-hidden="true"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.span
            className="route-curtain__mark"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            Empresário Imune
          </motion.span>
        </motion.div>
      )}
      <motion.div
        key={pathname}
        initial={animate ? { opacity: 0, y: 40 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </>
  );
}
