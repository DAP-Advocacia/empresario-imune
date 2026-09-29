import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <>
      {/* Topbar Marquee / Urgência */}
      <aside
        data-screen-label="Barra de topo"
        style={{
          background: "linear-gradient(90deg,#E87722,#F2A051,#E87722)",
          backgroundSize: "200% 100%",
          animation: "ei-grad 6s linear infinite",
          padding: "9px 22px",
          position: "relative",
          zIndex: 60,
        }}
      >
        <div
          className="ei-wrap"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              background: "#0B1F3A",
              borderRadius: "50%",
              animation: "ei-blink 1.2s infinite",
            }}
          />
          <span
            className="ei-topbar-txt"
            style={{
              color: "#0B1F3A",
              fontSize: "12.5px",
              fontWeight: 700,
              letterSpacing: ".04em",
              textTransform: "uppercase",
            }}
          >
            Um único processo trabalhista pode custar o lucro de um ano inteiro
          </span>
          <Link
            href="/#oferta"
            style={{
              color: "#0B1F3A",
              fontSize: "12.5px",
              fontWeight: 800,
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            Proteger minha empresa agora →
          </Link>
        </div>
      </aside>

      {/* Main Sticky Navbar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 55,
          background: "rgba(11,31,58,.88)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(242,160,81,.18)",
          padding: "12px 0",
        }}
      >
        <nav
          className="ei-wrap"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
          aria-label="Navegação principal"
        >
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
            aria-label="Página inicial do Empresário Imune"
          >
            <Image
              src="/assets/images/Logo-Empresario-Imune-Branco.png"
              alt="Logotipo Empresário Imune: Prevenção Trabalhista"
              width={180}
              height={46}
              style={{ height: "46px", width: "auto" }}
              priority
            />
          </Link>

          <div
            className="ei-nav-links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "26px",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: ".08em",
              textTransform: "uppercase",
            }}
          >
            <Link href="/#dor" style={{ color: "#E7ECF3" }}>
              Riscos
            </Link>
            <Link href="/#metodo" style={{ color: "#E7ECF3" }}>
              Método
            </Link>
            <Link href="/#ebook" style={{ color: "#E7ECF3" }}>
              E-book
            </Link>
            <Link href="/#autora" style={{ color: "#E7ECF3" }}>
              Autora
            </Link>
            <Link href="/#depoimentos" style={{ color: "#E7ECF3" }}>
              Provas
            </Link>
            <Link href="/#faq" style={{ color: "#E7ECF3" }}>
              FAQ
            </Link>
            <Link href="/blog" style={{ color: "#F2A051", fontWeight: 700 }}>
              Blog
            </Link>
          </div>

          <Link
            href="/#oferta"
            className="btn-primary"
            style={{ fontSize: "11.5px", padding: "12px 22px" }}
          >
            Quero blindar
          </Link>
        </nav>
      </header>
    </>
  );
}
