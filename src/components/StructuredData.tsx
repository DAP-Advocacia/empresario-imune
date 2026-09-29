export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://empresarioimune.com.br/#website",
        "url": "https://empresarioimune.com.br/",
        "name": "Empresário Imune",
        "description":
          "Prevenção de passivo trabalhista e compliance para empresários",
        "publisher": {
          "@id": "https://empresarioimune.com.br/#organization",
        },
        "inLanguage": "pt-BR",
      },
      {
        "@type": "Organization",
        "@id": "https://empresarioimune.com.br/#organization",
        "name": "Empresário Imune",
        "url": "https://empresarioimune.com.br/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://empresarioimune.com.br/assets/images/Logo-Empresario-Imune-Branco.png",
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+55-21-98645-0256",
          "contactType": "customer service",
          "areaServed": "BR",
          "availableLanguage": "Portuguese",
        },
      },
      {
        "@type": "Person",
        "@id": "https://empresarioimune.com.br/#author",
        "name": "[Nome da Autora - Validação Pendente]",
        "jobTitle": "Advogada Especialista em Direito do Trabalho Empresarial",
        "description":
          "Advogada especialista em Direito do Trabalho Empresarial e estrategista em Gestão de Riscos Trabalhistas para empresas.",
        "url": "https://empresarioimune.com.br/#autora",
        "identifier": "[OAB/UF 000.000 - Validação Pendente]",
      },
      {
        "@type": "Product",
        "@id": "https://empresarioimune.com.br/#product",
        "name": "E-book Empresário Imune: Guia de Prevenção e Compliance Trabalhista",
        "description":
          "Método prático de prevenção de passivo trabalhista para empresários, incluindo checklist de vulnerabilidades, planilha de risco e modelos de documentos.",
        "image": "https://empresarioimune.com.br/assets/images/mockup-tablet-1.png",
        "brand": {
          "@id": "https://empresarioimune.com.br/#organization",
        },
        "offers": {
          "@type": "Offer",
          "url": "https://empresarioimune.com.br/#oferta",
          "priceCurrency": "BRL",
          "price": "98.00",
          "priceValidUntil": "2026-12-31",
          "itemCondition": "https://schema.org/NewCondition",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@id": "https://empresarioimune.com.br/#organization",
          },
        },
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "merchantReturnDays": 7,
          "returnPolicyCategory":
            "https://schema.org/MerchantReturnFiniteReturnWindow",
          "applicableCountry": "BR",
        },
      }
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
