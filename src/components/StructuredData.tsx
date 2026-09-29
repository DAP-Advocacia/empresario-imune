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
          "price": "997.00",
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
      },
      {
        "@type": "FAQPage",
        "@id": "https://empresarioimune.com.br/#faqpage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "O que é o Empresário Imune?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "O Empresário Imune é um guia estratégico de prevenção trabalhista e compliance elaborado por advogada especialista. Ele ensina empresários a identificarem vulnerabilidades, implementarem rotinas seguras de RH, estruturarem documentos essenciais e protegerem o caixa da empresa contra processos trabalhistas, sem termos jurídicos complexos.",
            },
          },
          {
            "@type": "Question",
            "name": "Como este método ajuda a proteger o lucro da minha empresa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "O método atua diretamente nas principais causas de condenações trabalhistas: ausência de documentação comprobatória, falhas graves na comunicação interna e erros no processo de demissão. Ao corrigir essas brechas operacionais com rotinas preventivas e contratos adequados, sua empresa elimina passivos ocultos e protege o caixa contra condenações inesperadas.",
            },
          },
          {
            "@type": "Question",
            "name": "É obrigatório ter um advogado para aplicar o e-book?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Não é obrigatório. O guia foi projetado em linguagem 100% prática e direta para ser aplicado imediatamente por empresários, diretores e equipes de RH. No entanto, para demandas contenciosas específicas ou litígios já existentes na Justiça, o acompanhamento de um advogado continua sendo formalmente recomendado.",
            },
          },
          {
            "@type": "Question",
            "name": "Quais riscos trabalhistas são abordados no material?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "O material cobre os 10 maiores gargalos de risco das empresas brasileiras: controle de jornada e horas extras, documentação de admissão e rescisão, advertências e demissão sem justa causa/com justa causa, desvio de função, políticas de mensagens instantâneas e conduta interna, além de medidas preventivas de saúde e segurança do trabalho.",
            },
          },
          {
            "@type": "Question",
            "name": "Como funciona o acesso ao material e por onde devo começar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "O acesso é imediato logo após a confirmação da compra. Você recebe todo o e-book digital junto com os bônus exclusivos (planilha de risco, modelos de documentos editáveis e checklist dos 10 erros). O passo recomendado é iniciar pelo Checklist de Diagnóstico para identificar as prioridades críticas do seu negócio na primeira hora.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
