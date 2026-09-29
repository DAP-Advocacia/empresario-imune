"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { EASE } from "@/components/motion/Reveal";
import { METHOD_STEPS } from "@/data/home";

/** Linha do tempo dos 4 passos; o traço vertical preenche conforme o scroll. */
export default function MethodSteps() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <ol ref={ref} className="steps">
      <span className="steps__track" aria-hidden="true">
        <motion.span className="steps__fill" style={{ scaleY }} />
      </span>
      {METHOD_STEPS.map((step, i) => (
        <motion.li
          key={step.n}
          data-reveal
          className={`step${i === METHOD_STEPS.length - 1 ? " step--final" : ""}`}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px 0px -20% 0px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <span className="step__n">{step.n}</span>
          <div>
            <h3 className="step__title">{step.title}</h3>
            <p className="step__text">{step.text}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
