import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/#metodo", label: "Método de Prevenção" },
  { href: "/#ebook", label: "Conteúdo do E-book" },
  { href: "/#autora", label: "Sobre a Autora" },
  { href: "/#dor", label: "Riscos Trabalhistas" },
  { href: "/#depoimentos", label: "Depoimentos" },
];

const CONTENT_LINKS = [
  { href: "/blog", label: "Blog Empresário Imune" },
  {
    href: "/blog/como-evitar-processos-trabalhistas-guia-completo",
    label: "Guia Completo (Pilar)",
  },
  { href: "/politica-de-privacidade", label: "Política de Privacidade" },
];

export default function Footer() {
  return (
    <footer className="site-footer" data-screen-label="Footer">
      <div className="ei-wrap">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Image
              src="/assets/images/Icone-Empresario-Imune.png"
              alt="Ícone Empresário Imune"
              width={52}
              height={52}
            />
            <p>
              Proteja seu lucro.
              <br />
              Proteja seu legado empresarial.
            </p>
            <span className="site-footer__meta">
              CNPJ: [00.000.000/0001-00 — Pendente de Validação]
            </span>
          </div>

          <nav className="site-footer__col" aria-label="Navegação do rodapé">
            <span className="site-footer__title">Navegação</span>
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>

          <nav className="site-footer__col" aria-label="Conteúdo e documentos legais">
            <span className="site-footer__title">Conteúdo & Legal</span>
            {CONTENT_LINKS.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
            <a href="/sitemap.xml">Mapa do Site (XML)</a>
          </nav>

          <div className="site-footer__col">
            <span className="site-footer__title">Contato & Localização</span>
            <a href="https://wa.me/5521986450256" target="_blank" rel="noopener noreferrer">
              (21) 98645-0256
            </a>
            <a
              href="https://instagram.com/empresarioimune"
              target="_blank"
              rel="noopener noreferrer"
            >
              @empresarioimune
            </a>
            <address>
              Av. das Américas, 3443 – Barra da Tijuca, Rio de Janeiro – RJ
            </address>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© 2026 Empresário Imune. Todos os direitos reservados.</span>
          <span>Conteúdo informativo — não substitui consulta jurídica individual.</span>
        </div>
      </div>
    </footer>
  );
}
