import { BLOG_POSTS, BlogPost } from "@/data/blog-posts";

const WORDPRESS_API_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  "https://admin.empresarioimune.com.br/wp-json/wp/v2";

// Helper para decodificar entidades HTML comuns
function decodeHtmlEntities(str: string): string {
  if (!str) return "";
  return str
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8217;/g, "’")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ");
}

// Helper para limpar tags HTML
function stripHtml(html: string): string {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, "").trim();
}

// Estimar tempo de leitura
function estimateReadTime(text: string): string {
  const wordsPerMinute = 180;
  const wordCount = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${Math.max(1, minutes)} min de leitura`;
}

export interface WpPostRaw {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  _embedded?: {
    author?: Array<{ name: string; avatar_urls?: Record<string, string> }>;
    "wp:featuredmedia"?: Array<{
      source_url?: string;
      alt_text?: string;
      media_details?: {
        sizes?: Record<string, { source_url: string }>;
      };
    }>;
    "wp:term"?: Array<
      Array<{
        id: number;
        name: string;
        slug: string;
        taxonomy: string;
      }>
    >;
  };
}

// Converte post do WordPress para a estrutura padrão do projeto
function mapWpPostToBlogPost(raw: WpPostRaw): BlogPost {
  const cleanTitle = decodeHtmlEntities(stripHtml(raw.title.rendered));
  const rawExcerpt = decodeHtmlEntities(stripHtml(raw.excerpt.rendered));
  const cleanContentText = stripHtml(raw.content.rendered);
  
  const summary =
    rawExcerpt.length > 0
      ? rawExcerpt
      : cleanContentText.slice(0, 160) + "...";

  const categories =
    raw._embedded?.["wp:term"]?.[0]?.map((t) => t.name) || [];
  const primaryCategory = categories.length > 0 ? categories[0] : "Direito Trabalhista";

  const featuredImage =
    raw._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  const authorName =
    raw._embedded?.author?.[0]?.name || "Advocacia Especializada";

  const isPillar =
    categories.some((c) => c.toLowerCase().includes("pilar")) ||
    cleanTitle.toLowerCase().includes("guia completo");

  return {
    slug: raw.slug,
    title: cleanTitle,
    metaTitle: `${cleanTitle} | Empresário Imune`,
    metaDescription: summary.slice(0, 155),
    keywords: categories.length > 0 ? categories : ["direito trabalhista", "compliance", "gestão de rh"],
    summary,
    readTime: estimateReadTime(cleanContentText),
    publishDate: raw.date.split("T")[0] || raw.date,
    isPillar,
    category: primaryCategory,
    featuredImage,
    authorName,
    contentHtml: raw.content.rendered,
    sections: [],
  };
}

/**
 * Busca todos os posts do WordPress na Hostinger
 * com revalidação ISR de 60 segundos
 */
export async function getWordPressPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${WORDPRESS_API_URL}/posts?_embed&per_page=100`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.warn(`[WordPress API] Erro ao buscar posts: ${res.status} ${res.statusText}`);
      return BLOG_POSTS;
    }

    const data: WpPostRaw[] = await res.json();

    if (!Array.isArray(data) || data.length === 0) {
      return BLOG_POSTS;
    }

    // Filtra o post padrão "hello-world" apenas se existirem outros posts reais
    const validPosts = data.filter((p) => {
      if (data.length > 1 && p.slug === "hello-world") return false;
      return true;
    });

    const mappedPosts = validPosts.map(mapWpPostToBlogPost);

    // Se no WP só tiver 1 post inicial, mesclamos com os 9 artigos de SEO existentes
    if (mappedPosts.length < 3) {
      const existingSlugs = new Set(mappedPosts.map((p) => p.slug));
      const fallbackFiltered = BLOG_POSTS.filter((p) => !existingSlugs.has(p.slug));
      return [...mappedPosts, ...fallbackFiltered];
    }

    return mappedPosts;
  } catch (error) {
    console.error("[WordPress API] Falha na requisição:", error);
    return BLOG_POSTS;
  }
}

/**
 * Busca um artigo específico pelo slug
 */
export async function getWordPressPostBySlug(slug: string): Promise<BlogPost | undefined> {
  try {
    const res = await fetch(`${WORDPRESS_API_URL}/posts?slug=${encodeURIComponent(slug)}&_embed`, {
      next: { revalidate: 60 },
    });

    if (res.ok) {
      const data: WpPostRaw[] = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return mapWpPostToBlogPost(data[0]);
      }
    }
  } catch (error) {
    console.warn(`[WordPress API] Erro ao buscar post por slug (${slug}):`, error);
  }

  // Fallback para artigos estáticos
  return BLOG_POSTS.find((p) => p.slug === slug);
}

/**
 * Retorna todos os slugs para geração estática
 */
export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await getWordPressPosts();
  return posts.map((p) => p.slug);
}
