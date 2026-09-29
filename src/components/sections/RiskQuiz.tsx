"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";
import { ArrowDown, ArrowRight, RotateCcw, Timer, X } from "lucide-react";
import { EASE } from "@/components/motion/Reveal";
import { QUIZ_QUESTIONS, QUIZ_RESULTS } from "@/data/home";

type Stage = "idle" | "quiz" | "result";

const TOTAL = QUIZ_QUESTIONS.length;

function resultFor(risk: number) {
  if (risk === 0) return QUIZ_RESULTS[0];
  if (risk === 1) return QUIZ_RESULTS[1];
  return QUIZ_RESULTS[2];
}

const slide = {
  initial: { opacity: 0, x: 32 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -32 },
  transition: { duration: 0.35, ease: EASE },
};

/** CTA do Hero: 3 perguntas de sim/não que levam à oferta. */
export default function RiskQuiz() {
  const [stage, setStage] = useState<Stage>("idle");
  const [step, setStep] = useState(0);
  const [risk, setRisk] = useState(0);
  // Leva o foco para a pergunta/resultado que acabou de entrar (teclado e leitores de tela).
  const focusOnMount = useCallback((el: HTMLParagraphElement | null) => {
    el?.focus({ preventScroll: true });
  }, []);

  const start = () => {
    setStep(0);
    setRisk(0);
    setStage("quiz");
  };

  const answer = (yes: boolean) => {
    const nextRisk = risk + (yes ? 0 : 1);
    setRisk(nextRisk);
    if (step + 1 < TOTAL) setStep(step + 1);
    else setStage("result");
  };

  const result = resultFor(risk);
  const progress = stage === "result" ? 1 : step / TOTAL;

  return (
    <div className="quiz-slot">
      <AnimatePresence mode="wait" initial={false}>
        {stage === "idle" ? (
          <motion.div key="idle" className="hero__actions" {...slide}>
            <button type="button" className="btn-primary btn-quiz" onClick={start}>
              <Timer size={18} aria-hidden="true" />
              Descubra o risco trabalhista da sua empresa em 30s
            </button>
            <Link href="/#metodo" className="btn-link">
              <ArrowDown size={16} aria-hidden="true" />
              Conhecer o método
            </Link>
          </motion.div>
        ) : (
          <motion.div
            key="card"
            className="quiz"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="quiz__top">
              <span className="quiz__kicker">
                {stage === "result"
                  ? "Seu diagnóstico"
                  : `Pergunta ${step + 1} de ${TOTAL}`}
              </span>
              <button
                type="button"
                className="quiz__close"
                aria-label="Fechar diagnóstico"
                onClick={() => setStage("idle")}
              >
                <X size={16} />
              </button>
            </div>
            <div
              className="quiz__bar"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={TOTAL}
              aria-valuenow={stage === "result" ? TOTAL : step}
              aria-label="Progresso do diagnóstico"
            >
              <motion.span
                className="quiz__bar-fill"
                animate={{ scaleX: progress }}
                transition={{ duration: 0.5, ease: EASE }}
              />
            </div>

            <AnimatePresence mode="wait" initial={false}>
              {stage === "quiz" ? (
                <motion.div key={`q-${step}`} {...slide}>
                  <p ref={focusOnMount} tabIndex={-1} className="quiz__question">
                    {QUIZ_QUESTIONS[step]}
                  </p>
                  <div className="quiz__answers">
                    <button type="button" className="quiz__answer" onClick={() => answer(true)}>
                      Sim
                    </button>
                    <button type="button" className="quiz__answer" onClick={() => answer(false)}>
                      Não
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="result" {...slide} aria-live="polite">
                  <div className={`quiz__meter quiz__meter--${result.tone}`}>
                    <span className="quiz__level">
                      Risco <strong>{result.level}</strong>
                    </span>
                    <span className="quiz__track" aria-hidden="true">
                      <motion.span
                        className="quiz__track-fill"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: Math.max(risk, 0.35) / TOTAL }}
                        transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
                      />
                    </span>
                  </div>
                  <p ref={focusOnMount} tabIndex={-1} className="quiz__question">
                    {result.title}
                  </p>
                  <p className="quiz__text">{result.text}</p>
                  <div className="quiz__cta">
                    <Link href="/#oferta" className="btn-primary">
                      Ver como blindar minha empresa
                      <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                    <button type="button" className="btn-link" onClick={start}>
                      <RotateCcw size={14} aria-hidden="true" />
                      Refazer
                    </button>
                  </div>
                  <p className="quiz__note">
                    Resultado indicativo. Não substitui análise jurídica individual.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
