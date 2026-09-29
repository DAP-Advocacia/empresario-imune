import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog de Compliance e Prevenção Trabalhista | Empresário Imune",
  description:
    "Artigos, guias e dicas práticas de Direito do Trabalho Empresarial para blindar sua empresa contra ações e passivos judiciais.",
  keywords: [
    "blog direito trabalhista",
    "como evitar processos trabalhistas",
    "prevenção de passivo trabalhista",
    "compliance trabalhista",
    "gestão de rh segura",
  ],
  alternates: {
    canonical: "https://empresarioimune.com.br/blog",
  },
};

export default function BlogHubPage() {
  const posts = getAllBlogPosts();
  const pillarPost = posts.find((p) => p.isPillar) || posts[0];
  const supportPosts = posts.filter((p) => !p.isPillar);

  return (
    <div style={{ background: "#F3EEE5", color: "#0B1F3A", padding: "60px 0 90px" }}>
      <div className="ei-wrap">
        {/* Header do Blog */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 48px" }}>
          <span className="eyebrow-light">Artigos & Orientações Práticas</span>
          <h1
            style={{
              margin: "12px 0 16px",
              fontSize: "clamp(28px, 3.8vw, 44px)",
              fontWeight: 800,
              color: "#0B1F3A",
              lineHeight: 1.2,
            }}
          >
            Blog de Prevenção e <span style={{ color: "#D96F14" }}>Compliance Trabalhista</span>
          </h1>
          <p style={{ color: "#3C4A5E", fontSize: "16px", lineHeight: 1.7 }}>
            Conteúdos práticos, sem juridiquês, desenvolvidos para ajudar empresários e gestores a protegerem o caixa, organizarem rotinas de RH e evitarem litígios na Justiça.
          </p>
        </div>

        {/* Artigo Pilar em Destaque */}
        {pillarPost && (
          <div
            className="card-interactive"
            style={{
              background: "linear-gradient(145deg, #0B1F3A, #14335C)",
              borderRadius: "24px",
              padding: "44px 38px",
              color: "#F7F3EA",
              marginBottom: "56px",
              border: "1px solid rgba(242, 160, 81, 0.35)",
              boxShadow: "0 20px 40px rgba(11, 31, 58, 0.2)",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <span
                style={{
                  background: "#E87722",
                  color: "#0B1F3A",
                  fontSize: "11px",
                  fontWeight: 900,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  padding: "6px 14px",
                  borderRadius: "999px",
                }}
              >
                ★ Artigo Pilar / Guia Definitivo
              </span>
              <span style={{ color: "#8FA0B8", fontSize: "12.5px" }}>{pillarPost.readTime}</span>
              <span style={{ color: "#8FA0B8", fontSize: "12.5px" }}>• {pillarPost.category}</span>
            </div>

            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.3 }}>
              <Link href={`/blog/${pillarPost.slug}`} style={{ color: "#F7F3EA" }}>
                {pillarPost.title}
              </Link>
            </h2>

            <p style={{ color: "#C7D0DE", fontSize: "15.5px", lineHeight: 1.75, maxWidth: "860px", marginBottom: "24px" }}>
              {pillarPost.summary}
            </p>

            <Link
              href={`/blog/${pillarPost.slug}`}
              className="btn-primary"
              style={{ display: "inline-flex", fontSize: "13px", padding: "14px 28px" }}
            >
              Ler Guia Completo →
            </Link>
          </div>
        )}

        {/* Grade dos 8 Artigos de Apoio */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#0B1F3A", marginBottom: "24px" }}>
            Artigos Recentes de Suporte
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
            marginBottom: "64px",
          }}
        >
          {supportPosts.map((post) => (
            <article
              key={post.slug}
              className="card-interactive-light"
              style={{
                background: "#FBF8F1",
                border: "1px solid #E4DCCB",
                borderRadius: "20px",
                padding: "30px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "18px",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <span
                    style={{
                      color: "#D96F14",
                      fontSize: "11px",
                      fontWeight: 800,
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {post.category}
                  </span>
                  <span style={{ color: "#8FA0B8", fontSize: "11.5px" }}>{post.readTime}</span>
                </div>

                <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#0B1F3A", margin: "0 0 12px", lineHeight: 1.4 }}>
                  <Link href={`/blog/${post.slug}`} style={{ color: "#0B1F3A" }}>
                    {post.title}
                  </Link>
                </h3>

                <p style={{ color: "#3C4A5E", fontSize: "13.5px", lineHeight: 1.65, margin: 0 }}>
                  {post.summary}
                </p>
              </div>

              <div style={{ paddingTop: "14px", borderTop: "1px solid #E4DCCB" }}>
                <Link
                  href={`/blog/${post.slug}`}
                  style={{
                    color: "#D96F14",
                    fontWeight: 700,
                    fontSize: "13px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  Continuar lendo →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Box para a Oferta do E-book */}
        <div className="blog-cta-box">
          <span
            style={{
              background: "#E87722",
              color: "#0B1F3A",
              fontSize: "11px",
              fontWeight: 900,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              padding: "6px 16px",
              borderRadius: "999px",
              display: "inline-block",
              marginBottom: "16px",
            }}
          >
            Implementação Prática
          </span>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800, color: "#F7F3EA", margin: "0 0 12px" }}>
            Quer todos os modelos e checklists prontos para aplicar na sua empresa?
          </h2>
          <p style={{ color: "#C7D0DE", fontSize: "15px", maxWidth: "680px", margin: "0 auto 24px", lineHeight: 1.7 }}>
            Economize semanas de trabalho e blinde sua empresa com o método Empresário Imune + 3 bônus exclusivos.
          </p>
          <Link href="/#oferta" className="btn-primary">
            Conhecer a Oferta com 7 Dias de Garantia →
          </Link>
        </div>
      </div>
    </div>
  );
}
