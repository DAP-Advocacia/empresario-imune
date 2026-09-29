"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  MessageCircle,
  ShieldAlert,
  Sparkles,
  Users,
} from "lucide-react";
import ScrollProgress from "@/components/motion/ScrollProgress";
import { NAV_SECTIONS } from "@/data/home";

const NAV_ICONS = {
  dor: ShieldAlert,
  metodo: Sparkles,
  ebook: BookOpen,
  autora: Users,
  depoimentos: MessageCircle,
};

/**
 * Devolve o id da seção da home que cruza a linha de leitura (35% da tela).
 * Recalculado a cada scroll/resize: as seções se sobrepõem (margem negativa
 * das cenas), então um IntersectionObserver com faixa estreita perdia trocas.
 */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      setActive(null);
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.35;
      let current: string | null = null;
      for (const { id } of NAV_SECTIONS) {
        const rect = document.getElementById(id)?.getBoundingClientRect();
        if (rect && rect.top <= line && rect.bottom > line) current = id;
      }
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [enabled]);

  return active;
}

const MOBILE_TABS = [
  NAV_SECTIONS[0],
  NAV_SECTIONS[1],
  { id: "oferta", label: "Oferta", isCta: true } as const,
  NAV_SECTIONS[2],
  NAV_SECTIONS[3],
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const active = useActiveSection(isHome);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <nav className="ei-wrap site-header__nav" aria-label="Navegação principal">
          <Link
            href="/"
            className="site-header__logo"
            aria-label="Página inicial do Empresário Imune"
          >
            <Image
              src="/assets/images/Logo-Empresario-Imune-Branco.png"
              alt="Logotipo Empresário Imune: Prevenção Trabalhista"
              width={180}
              height={46}
              priority
            />
          </Link>

          <ul className="site-header__links">
            {NAV_SECTIONS.map((s) => (
              <li key={s.id}>
                <Link
                  href={`/#${s.id}`}
                  className={active === s.id ? "is-active" : undefined}
                  aria-current={active === s.id ? "true" : undefined}
                >
                  {active === s.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="site-header__pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span>{s.label}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/blog"
                className={`is-blog${pathname.startsWith("/blog") ? " is-active" : ""}`}
              >
                <span>Blog</span>
              </Link>
            </li>
          </ul>

        </nav>
        <ScrollProgress />
      </header>

      <nav className="bottom-nav" aria-label="Navegação inferior">
        {MOBILE_TABS.map((tab) => {
          if ("isCta" in tab && tab.isCta) {
            return (
              <Link key={tab.id} href="/#oferta" className="bottom-nav__cta">
                <span className="bottom-nav__cta-badge" aria-hidden="true">
                  <ArrowRight size={15} />
                </span>
                <span>{tab.label}</span>
              </Link>
            );
          }
          const Icon = NAV_ICONS[tab.id as keyof typeof NAV_ICONS];
          const isActive = isHome && active === tab.id;
          return (
            <Link
              key={tab.id}
              href={`/#${tab.id}`}
              className={`bottom-nav__item${isActive ? " is-active" : ""}`}
              aria-current={isActive ? "true" : undefined}
            >
              {isActive && <span className="bottom-nav__dot" aria-hidden="true" />}
              <Icon size={17} aria-hidden="true" />
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
