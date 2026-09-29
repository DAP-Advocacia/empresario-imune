import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      data-screen-label="Footer"
      style={{
        background: "#081729",
        padding: "50px 0 40px",
        borderTop: "1px solid rgba(255,255,255,.07)",
      }}
    >
      <div
        className="ei-wrap ei-footer"
        style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr 1fr 1.3fr",
          gap: "36px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Image
              src="/assets/images/Icone-Empresario-Imune.png"
              alt="Ícone Empresário Imune"
              width={46}
              height={46}
              style={{ height: "46px", width: "auto" }}
            />
          </span>
          <p
            style={{
              margin: 0,
              color: "#8FA0B8",
              fontSize: "13px",
              lineHeight: 1.6,
            }}
          >
            Proteja seu lucro.
            <br />
            Proteja seu legado empresarial.
          </p>
          <span
            style={{ color: "#64748B", fontSize: "11.5px", marginTop: "6px" }}
          >
            CNPJ: [00.000.000/0001-00 — Pendente de Validação]
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "9px",
            fontSize: "13px",
          }}
        >
          <span
            style={{
              fontWeight: 800,
              color: "#F7F3EA",
              fontSize: "11px",
              letterSpacing: ".14em",
              textTransform: "uppercase",
            }}
          >
            Navegação
          </span>
          <Link href="/#dor" style={{ color: "#C7D0DE" }}>
            Riscos Trabalhistas
          </Link>
          <Link href="/#metodo" style={{ color: "#C7D0DE" }}>
            Método de Prevenção
          </Link>
          <Link href="/#ebook" style={{ color: "#C7D0DE" }}>
            Conteúdo do E-book
          </Link>
          <Link href="/#autora" style={{ color: "#C7D0DE" }}>
            Sobre a Autora
          </Link>
          <Link href="/#depoimentos" style={{ color: "#C7D0DE" }}>
            Depoimentos
          </Link>
          <Link href="/#faq" style={{ color: "#C7D0DE" }}>
            Perguntas Frequentes
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "9px",
            fontSize: "13px",
          }}
        >
          <span
            style={{
              fontWeight: 800,
              color: "#F7F3EA",
              fontSize: "11px",
              letterSpacing: ".14em",
              textTransform: "uppercase",
            }}
          >
            Conteúdo & Legal
          </span>
          <Link href="/blog" style={{ color: "#C7D0DE" }}>
            Blog Empresário Imune
          </Link>
          <Link
            href="/blog/como-evitar-processos-trabalhistas-guia-completo"
            style={{ color: "#C7D0DE" }}
          >
            Guia Completo (Pilar)
          </Link>
          <Link href="/politica-de-privacidade" style={{ color: "#C7D0DE" }}>
            Política de Privacidade
          </Link>
          <a href="/sitemap.xml" style={{ color: "#C7D0DE" }}>
            Mapa do Site (XML)
          </a>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "9px",
            fontSize: "13px",
          }}
        >
          <span
            style={{
              fontWeight: 800,
              color: "#F7F3EA",
              fontSize: "11px",
              letterSpacing: ".14em",
              textTransform: "uppercase",
            }}
          >
            Contato & Localização
          </span>
          <a
            href="https://wa.me/5521986450256"
            style={{ color: "#C7D0DE" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            (21) 98645-0256
          </a>
          <a
            href="https://instagram.com/empresarioimune"
            style={{ color: "#C7D0DE" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            @empresarioimune
          </a>
          <span
            style={{
              color: "#8FA0B8",
              fontSize: "12px",
              lineHeight: 1.6,
            }}
          >
            Av. das Américas, 3443 – Barra da Tijuca, Rio de Janeiro – RJ
          </span>
          <span
            style={{ color: "#64748B", fontSize: "11.5px", marginTop: "6px" }}
          >
            © 2026 Empresário Imune. Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
