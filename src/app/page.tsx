import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  FileWarning,
  Gift,
  Lock,
  MessageSquareWarning,
  Quote,
  ScrollText,
  ShieldCheck,
  Star,
  UserX,
  Zap,
} from "lucide-react";
import Countdown from "@/components/Countdown";
import OfferCard from "@/components/OfferCard";
import Hero from "@/components/sections/Hero";
import MethodSteps from "@/components/sections/MethodSteps";
import Scene from "@/components/motion/Scene";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import SpotlightCard from "@/components/motion/SpotlightCard";
import MagneticButton from "@/components/motion/MagneticButton";
import {
  EBOOK_MODULES,
  EBOOK_RESULTS,
  METHOD_BENEFITS,
  RISKS,
  TESTIMONIALS,
  WHATSAPP_URL,
} from "@/data/home";

const RISK_ICONS = {
  file: FileWarning,
  message: MessageSquareWarning,
  user: UserX,
  scroll: ScrollText,
  zap: Zap,
};

function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`eyebrow${light ? " eyebrow--light" : ""}`}>
      <span className="eyebrow__dot" />
      {children}
    </span>
  );
}

export default function HomePage() {
  return (
    <div id="ei-page">
      <Hero />


      {/* ============================ MÉTODO ============================ */}
      <Scene id="metodo" label="Método" className="section section--light">
        <div className="ei-wrap section__body">
          <div className="method">
            <div className="method__intro">
              <Reveal>
                <Eyebrow light>Simples, rápido e direto ao ponto</Eyebrow>
                <h2 className="h-section h-section--dark">
                  Como evitar processos trabalhistas em{" "}
                  <span className="text-accent">4 passos</span>
                </h2>
                <p className="lead lead--light">
                  <strong>Prevenção de passivo trabalhista</strong> sem consultoria
                  cara: aplique <strong>compliance trabalhista</strong> na prática e
                  proteja sua empresa de <strong>ações trabalhistas</strong> com
                  modelos prontos.
                </p>
              </Reveal>
            </div>
            <MethodSteps />
          </div>

          <div className="split">
            <Reveal direction="left" className="split__copy">
              <h3 className="h-sub">
                O método que transforma o risco jurídico em{" "}
                <span className="text-accent">proteção estratégica</span>
              </h3>
              <p className="lead lead--light">
                Um roteiro prático de <strong>Direito do Trabalho Empresarial</strong>{" "}
                para <strong>blindar sua empresa</strong> contra processos, sem
                juridiquês.
              </p>
              <ul className="checklist">
                {METHOD_BENEFITS.map((b) => (
                  <li key={b}>
                    <span className="checklist__icon" aria-hidden="true">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <Link href="/#oferta" className="btn-dark">
                Quero blindar minha empresa
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </Reveal>

            <div id="oferta" className="split__offer">
              <OfferCard className="offer--split" />
            </div>
          </div>

        </div>
      </Scene>

      {/* ============================ E-BOOK ============================ */}
      <Scene id="ebook" label="E-book" className="section section--dark">
        <div className="ei-wrap section__body">
          {/* Capa + promessa + resultados + compra */}
          <div className="ebook">
            <Reveal direction="left" className="ebook__cover">
              <div className="ebook__glow" aria-hidden="true" />
              <Image
                src="/assets/images/ebook-capa-1.png"
                alt="Capa do E-book de Direito Trabalhista Empresarial Empresário Imune"
                width={460}
                height={560}
                loading="lazy"
              />
            </Reveal>

            <div className="ebook__offer">
              <Reveal className="ebook__promise">
                <Eyebrow>Veja por dentro</Eyebrow>
                <h2 className="h-section">
                  O guia prático para{" "}
                  <span className="text-gradient">blindar sua empresa</span> de
                  ações trabalhistas
                </h2>
                <p className="lead lead--dark">
                  Tudo o que o seu RH precisa em um só lugar:{" "}
                  <strong>checklist de compliance trabalhista</strong>, modelos
                  prontos e rotinas de prevenção, sem juridiquês.
                </p>
              </Reveal>

              <Stagger as="ul" className="ebook__results">
                {EBOOK_RESULTS.map((r) => (
                  <StaggerItem key={r.title} as="li" className="ebook__result card card--dark">
                    <span className="checklist__icon" aria-hidden="true">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <div>
                      <strong>{r.title}</strong>
                      <span>{r.text}</span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>

              <Reveal className="ebook__buy">
                <MagneticButton>
                  <a
                    href={WHATSAPP_URL}
                    className="btn-primary btn-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Quero o e-book por R$ 98,00
                    <ArrowRight size={18} aria-hidden="true" />
                  </a>
                </MagneticButton>
                <span className="offer__secure">
                  <Lock size={13} aria-hidden="true" />
                  Acesso imediato · Garantia de 7 dias
                </span>
              </Reveal>
            </div>
          </div>

          {/* O que você recebe */}
          <div className="ebook__modules">
            <Reveal>
              <h3 className="h-sub h-sub--light">
                O que você recebe no e-book de{" "}
                <span className="text-gradient">compliance trabalhista</span>
              </h3>
            </Reveal>

            <Stagger className="bento">
              {EBOOK_MODULES.map((m, i) => (
                <StaggerItem key={m.title} className="bento__item card card--dark">
                  <span className="bento__n">Módulo {i + 1}</span>
                  <h4 className="bento__title">{m.title}</h4>
                  <p className="bento__text">{m.text}</p>
                </StaggerItem>
              ))}
              <StaggerItem className="bento__item bento__item--bonus">
                <span className="bento__gift" aria-hidden="true">
                  <Gift size={22} />
                </span>
                <h4 className="bento__title">3 Bônus Exclusivos</h4>
                <p className="bento__text">
                  Checklist de vulnerabilidades + Planilha de risco trabalhista +
                  Modelos de documentos essenciais.
                </p>
              </StaggerItem>
            </Stagger>
          </div>

          {/* CTA final + garantia */}
          <Reveal direction="scale" className="ebook__final">
            <span className="guarantee__seal" aria-hidden="true">
              7<small>dias</small>
            </span>
            <div className="ebook__final-body">
              <p className="ebook__final-title">Garantia incondicional de 7 dias</p>
              <p className="ebook__final-text">
                Aplique o método. Se não fizer sentido para sua empresa, devolvemos
                100% do valor, sem burocracia.
              </p>
            </div>
          </Reveal>
        </div>
      </Scene>

      {/* ============================ AUTORA ============================ */}
      <Scene id="autora" label="Autora" className="section section--light">
        <div className="ei-wrap section__body">
          <div className="author">
            <Reveal direction="left" className="author__copy">
              <Eyebrow light>Quem vai te ensinar</Eyebrow>
              <h2 className="h-section h-section--dark">
                Por trás do Empresário Imune está quem entende a dor de quem
                empreende
              </h2>
              <p className="lead lead--light">
                Sou advogada especialista em{" "}
                <strong>Direito do Trabalho Empresarial</strong> e estrategista em
                Gestão e Marketing Jurídico. Nos últimos anos, ajudei{" "}
                <strong>dezenas de empresários</strong> a evitar processos, reduzir
                custos e transformar o jurídico em lucro.
              </p>
              <p className="lead lead--light">
                Criei o método <strong>Empresário Imune</strong> para levar
                blindagem jurídica a quem não tem tempo, paciência ou dinheiro para
                descobrir tudo sozinho.
              </p>
              <Link href="/#oferta" className="btn-primary">
                Quero blindar minha empresa agora
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </Reveal>

            <Reveal direction="right" className="author__visual">
              <div className="author__frame" aria-hidden="true" />
              <div className="author__ring" aria-hidden="true" />
              <Image
                src="/assets/images/2T8A4884.jpg"
                alt="Advogada especialista em Direito do Trabalho Empresarial, autora do método Empresário Imune"
                width={900}
                height={1350}
                loading="lazy"
                className="author__img"
              />
            </Reveal>
          </div>
        </div>
      </Scene>

      {/* ============================ RISCOS ============================ */}
      <Scene id="dor" label="Riscos" className="section section--dark">
        <Countdown />

        <div className="ei-wrap section__body">
          <Reveal className="section-head">
            <h2 className="h-section">
              Os 5 erros de RH que mais geram{" "}
              <span className="text-gradient">ações trabalhistas</span>
            </h2>
            <p className="lead lead--dark">
              A maioria das <strong>ações trabalhistas contra empresas</strong> não
              nasce de má-fé: nasce de falhas simples de RH. Sem{" "}
              <strong>compliance trabalhista</strong>, cada recibo que falta vira{" "}
              <strong>passivo trabalhista</strong>, e a conta sai do seu lucro.
            </p>
          </Reveal>

          <Stagger className="risks" as="ul">
            {RISKS.map((r, i) => {
              const Icon = RISK_ICONS[r.icon];
              return (
                <StaggerItem key={r.title} as="li" className="risk card card--dark">
                  <SpotlightCard className="risk__spotlight">
                    <span className="risk__index">0{i + 1}</span>
                    <span className="risk__icon" aria-hidden="true">
                      <Icon size={22} />
                    </span>
                    <span className="risk__title">{r.title}</span>
                    <span className="risk__text">{r.text}</span>
                  </SpotlightCard>
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal direction="scale" className="callout">
            <span className="callout__icon" aria-hidden="true">
              <ShieldCheck size={26} />
            </span>
            <div className="callout__body">
              <h3 className="callout__title">
                Existe uma forma segura de{" "}
                <span className="text-accent-light">prevenir esses riscos</span>
              </h3>
              <p className="callout__text">
                Troque o improviso por <strong>prevenção de passivo trabalhista</strong>:
                checklist, modelos prontos e rotinas que blindam sua empresa antes da
                notificação chegar.
              </p>
            </div>
            <Link href="/#oferta" className="btn-primary btn-sm callout__cta">
              Blindar minha empresa
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </Scene>

      {/* ========================== DEPOIMENTOS ========================== */}
      <Scene id="depoimentos" label="Depoimentos" className="section section--dark">
        <div className="ei-wrap section__body">
          <Reveal className="section-head">
            <Eyebrow>Quer uma prova?</Eyebrow>
            <h2 className="h-section">O que estão falando sobre o e-book</h2>
          </Reveal>
        </div>

        <div className="testimonials">
          <div className="testimonials__track">
            {[0, 1].map((k) => (
              <div key={k} className="testimonials__group" aria-hidden={k === 1}>
                {[0, 1, 2].map((r) => (
                  <div key={r} className="testimonials__set" aria-hidden={r > 0}>
                    {TESTIMONIALS.map((t) => (
                      <SpotlightCard
                        key={`${t.name}-${r}`}
                        as="figure"
                        className="testimonial card card--dark"
                      >
                        <Quote className="testimonial__quote" size={28} aria-hidden="true" />
                        <span className="testimonial__stars" aria-label="5 de 5 estrelas">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={14} fill="currentColor" aria-hidden="true" />
                          ))}
                        </span>
                        <blockquote>{t.quote}</blockquote>
                        <figcaption>
                          <Image
                            src={t.avatar}
                            alt={`${t.name} - ${t.role}`}
                            width={44}
                            height={44}
                            loading="lazy"
                          />
                          <div>
                            <strong>{t.name}</strong>
                            <span>{t.role}</span>
                          </div>
                        </figcaption>
                      </SpotlightCard>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </Scene>
    </div>
  );
}
