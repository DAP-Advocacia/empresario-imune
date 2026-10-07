import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getWordPressPosts, getWordPressPostBySlug } from "@/lib/wordpress";

export const revalidate = 60; // Incremental Static Regeneration a cada 60s
export const dynamicParams = true;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getWordPressPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getWordPressPostBySlug(slug);

  if (!post) {
    return {
      title: "Artigo não encontrado | Empresário Imune",
    };
  }

  return {
    title: `${post.metaTitle} | Blog Empresário Imune`,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `https://empresarioimune.com.br/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      locale: "pt_BR",
      url: `https://empresarioimune.com.br/blog/${post.slug}`,
      title: post.metaTitle,
      description: post.metaDescription,
      siteName: "Empresário Imune",
      publishedTime: post.publishDate,
      authors: [post.authorName || "Empresário Imune"],
      images: post.featuredImage ? [{ url: post.featuredImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: post.featuredImage ? [post.featuredImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getWordPressPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getWordPressPosts();
  const otherPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const pillarPost = allPosts.find((p) => p.isPillar);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: post.featuredImage,
    inLanguage: "pt-BR",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://empresarioimune.com.br/blog/${post.slug}`,
    },
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: {
      "@type": "Person",
      name: post.authorName || "Advogada Especialista em Direito do Trabalho Empresarial",
      jobTitle: "Advogada Especialista em Direito do Trabalho Empresarial",
    },
    publisher: {
      "@type": "Organization",
      name: "Empresário Imune",
      logo: {
        "@type": "ImageObject",
        url: "https://empresarioimune.com.br/assets/images/Logo-Empresario-Imune-Branco.png",
      },
    },
  };

  return (
    <div style={{ background: "#F3EEE5", color: "#0B1F3A", padding: "50px 0 90px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="ei-wrap" style={{ maxWidth: "880px" }}>
        {/* Breadcrumb */}
        <nav style={{ marginBottom: "20px", fontSize: "13px" }} aria-label="Breadcrumb">
          <Link href="/" style={{ color: "#D96F14", fontWeight: 600 }}>
            Início
          </Link>{" "}
          /{" "}
          <Link href="/blog" style={{ color: "#D96F14", fontWeight: 600 }}>
            Blog
          </Link>{" "}
          / <span style={{ color: "#3C4A5E" }}>{post.title}</span>
        </nav>

        {/* Metadados do Artigo */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
          {post.isPillar ? (
            <span
              style={{
                background: "#E87722",
                color: "#0B1F3A",
                fontSize: "11px",
                fontWeight: 900,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                padding: "5px 12px",
                borderRadius: "999px",
              }}
            >
              ★ Artigo Pilar
            </span>
          ) : (
            <span
              style={{
                background: "#0B1F3A",
                color: "#F7F3EA",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                padding: "5px 12px",
                borderRadius: "999px",
              }}
            >
              {post.category}
            </span>
          )}
          <span style={{ color: "#8FA0B8", fontSize: "13px" }}>{post.readTime}</span>
          {post.publishDate && (
            <span style={{ color: "#8FA0B8", fontSize: "13px" }}>• {post.publishDate}</span>
          )}
        </div>

        {/* Título Principal */}
        <h1
          style={{
            margin: "0 0 18px",
            fontSize: "clamp(26px, 3.8vw, 40px)",
            fontWeight: 800,
            color: "#0B1F3A",
            lineHeight: 1.25,
          }}
        >
          {post.title}
        </h1>

        {/* Resumo */}
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.7,
            color: "#3C4A5E",
            borderLeft: "4px solid #E87722",
            paddingLeft: "16px",
            marginBottom: "32px",
            fontStyle: "italic",
          }}
        >
          {post.summary}
        </p>

        {/* Imagem Destacada (se houver no WordPress) */}
        {post.featuredImage && (
          <div style={{ marginBottom: "32px", borderRadius: "16px", overflow: "hidden" }}>
            <img
              src={post.featuredImage}
              alt={post.title}
              style={{ width: "100%", height: "auto", maxHeight: "460px", objectFit: "cover", display: "block" }}
            />
          </div>
        )}

        {/* Aviso de Conformidade OAB */}
        <div
          style={{
            background: "rgba(232, 119, 34, 0.08)",
            border: "1px dashed rgba(242, 160, 81, 0.5)",
            borderRadius: "12px",
            padding: "14px 18px",
            fontSize: "12.5px",
            color: "#0B1F3A",
            marginBottom: "36px",
          }}
        >
          <strong>Aviso Institucional & Informativo:</strong> Conteúdo informativo e preventivo em conformidade com o Provimento 205/2021 do Conselho Federal da OAB.
        </div>

        {/* Link para o Artigo Pilar caso não seja ele */}
        {!post.isPillar && pillarPost && (
          <div
            style={{
              background: "#FBF8F1",
              border: "1px solid #E4DCCB",
              borderRadius: "14px",
              padding: "16px 20px",
              marginBottom: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "#D96F14", textTransform: "uppercase" }}>
                Guia Completo Recomendado
              </span>
              <p style={{ margin: "4px 0 0", fontSize: "14px", fontWeight: 700, color: "#0B1F3A" }}>
                {pillarPost.title}
              </p>
            </div>
            <Link
              href={`/blog/${pillarPost.slug}`}
              style={{
                color: "#D96F14",
                fontSize: "13px",
                fontWeight: 800,
                textDecoration: "underline",
              }}
            >
              Acessar Guia Pilar →
            </Link>
          </div>
        )}

        {/* Conteúdo do Artigo */}
        <div className="blog-content">
          {post.contentHtml ? (
            <div
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              style={{ fontSize: "16px", lineHeight: "1.8", color: "#2B3748" }}
            />
          ) : (
            post.sections?.map((section, idx) => (
              <div key={idx}>
                <h2>{section.heading}</h2>
                <div style={{ whiteSpace: "pre-line" }}>
                  <p>{section.content}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* CTA para a Página de Vendas */}
        <div className="blog-cta-box" style={{ marginTop: "48px" }}>
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
              marginBottom: "14px",
            }}
          >
            Proteção Imediata
          </span>
          <h2 style={{ fontSize: "clamp(20px, 2.6vw, 28px)", fontWeight: 800, color: "#F7F3EA", margin: "0 0 12px" }}>
            Aplique o método completo na sua empresa
          </h2>
          <p style={{ color: "#C7D0DE", fontSize: "14.5px", maxWidth: "640px", margin: "0 auto 22px", lineHeight: 1.65 }}>
            Tenha acesso imediato ao E-book Empresário Imune + Checklist dos 10 Erros + Planilha de Riscos + Modelos de Documentos Prontos.
          </p>
          <Link href="/#oferta" className="btn-primary">
            Garantir Acesso com 7 Dias de Garantia →
          </Link>
        </div>

        {/* Artigos Relacionados */}
        {otherPosts.length > 0 && (
          <div style={{ marginTop: "56px", paddingTop: "32px", borderTop: "1px solid #E4DCCB" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#0B1F3A", marginBottom: "20px" }}>
              Artigos Relacionados
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}>
              {otherPosts.map((op) => (
                <div
                  key={op.slug}
                  style={{
                    background: "#FBF8F1",
                    border: "1px solid #E4DCCB",
                    borderRadius: "14px",
                    padding: "18px",
                  }}
                >
                  <span style={{ color: "#D96F14", fontSize: "11px", fontWeight: 700, textTransform: "uppercase" }}>
                    {op.category}
                  </span>
                  <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#0B1F3A", margin: "6px 0 10px", lineHeight: 1.4 }}>
                    <Link href={`/blog/${op.slug}`} style={{ color: "#0B1F3A" }}>
                      {op.title}
                    </Link>
                  </h4>
                  <Link
                    href={`/blog/${op.slug}`}
                    style={{ color: "#D96F14", fontSize: "12.5px", fontWeight: 700 }}
                  >
                    Ler artigo →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
