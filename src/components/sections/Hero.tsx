"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { EASE } from "@/components/motion/Reveal";
import RiskQuiz from "@/components/sections/RiskQuiz";
import { HERO_STATS } from "@/data/home";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE, delay },
});

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 220]);

  return (
    <section ref={ref} id="hero" data-screen-label="Hero" className="hero">
      <motion.div
        className="hero__glow hero__glow--a"
        style={{ y: glowY }}
        aria-hidden="true"
      />
      <div className="hero__glow hero__glow--b" aria-hidden="true" />

      <div className="ei-wrap hero__layout hero__layout--centered">
        <motion.div
          className="hero__content hero__content--centered"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <motion.h1 className="h-display" {...fadeUp(0.15)}>
            Blinde sua empresa de{" "}
            <span className="text-gradient">processos trabalhistas</span> e
            proteja o lucro que você construiu
          </motion.h1>

          <motion.p className="lead lead--dark" {...fadeUp(0.28)}>
            Um método simples e direto para empresários que querem{" "}
            <strong>evitar processos trabalhistas</strong>, eliminar riscos de{" "}
            <strong>passivo trabalhista</strong> oculto e ter segurança, lucro e
            tranquilidade na gestão de pessoas —{" "}
            <strong className="text-strong">sem precisar entender de leis</strong>.
          </motion.p>

          <motion.div {...fadeUp(0.4)}>
            <RiskQuiz />
          </motion.div>

          <motion.dl className="hero__stats" {...fadeUp(0.52)}>
            {HERO_STATS.map((s) => (
              <div key={s.label} className="hero__stat">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>

      <a href="#metodo" className="hero__scroll" aria-label="Rolar para a próxima seção">
        <ArrowDown size={18} aria-hidden="true" />
      </a>
    </section>
  );
}
