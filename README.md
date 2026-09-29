# Empresário Imune

> Página de vendas e portal de conteúdo de alta performance e conversão para o e-book e método de prevenção de passivos e compliance trabalhista para empresários.

---

## 🚀 Tecnologias e Arquitetura

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router, Server Side Generation / SSG, TypeScript)
- **UI & Estilização:** Vanilla CSS Design Tokens, micro-animações, efeitos glow, marquee infinito e glassmorphism
- **SEO & Performance:**
  - Metadados semânticos OpenGraph e Twitter Cards
  - Dados estruturados JSON-LD Schema.org (`WebSite`, `Organization`, `Product`, `Person`, `FAQPage`, `Article`)
  - Otimização LCP com priorização de carregamento de ativos e lazy-loading responsivo
  - Sitemap XML (`/sitemap.xml`) e Robots TXT (`/robots.txt`)
- **Portal de Conteúdo (Blog):**
  - 1 Artigo Pilar completo para autoridade tópica
  - 8 Artigos de Apoio estratégicos interligados com CTAs de conversão

---

## 📂 Estrutura do Projeto

```text
├── public/
│   ├── assets/images/       # Imagens e mockups otimizados
│   ├── robots.txt           # Diretrizes para indexadores
│   └── sitemap.xml          # Mapa do site atualizado
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout com SEO, fonts e schema global
│   │   ├── page.tsx         # Landing Page principal de alta conversão
│   │   ├── blog/
│   │   │   ├── page.tsx     # Hub de artigos do Blog
│   │   │   └── [slug]/      # Páginas dinâmicas para artigos (Pilar + Apoio)
│   │   └── politica-de-privacidade/
│   ├── components/          # Componentes modulares (Header, Footer, FAQ, etc.)
│   ├── data/                # Conteúdos, dados do blog e mockups
│   └── styles/              # Design system e tokens de cores
└── download-assets.js       # Script utilitário para download de ativos
```

---

## 🛠️ Como Executar Localmente

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000) no navegador.

3. **Gerar build de produção:**
   ```bash
   npm run build
   npm run start
   ```

---

## ⚖️ Conformidade e Boas Práticas

- Textos e termos revisados com foco preventivo em conformidade com o **Provimento 205/2021 da OAB**.
- Estrutura pronta com placeholders para identificação formal da advogada responsável e dados da empresa.

---

© 2026 Empresário Imune. Todos os direitos reservados.
