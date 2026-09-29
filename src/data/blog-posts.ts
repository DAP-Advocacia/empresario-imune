export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  summary: string;
  readTime: string;
  publishDate: string;
  isPillar: boolean;
  category: string;
  sections: {
    heading: string;
    content: string;
  }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'como-evitar-processos-trabalhistas-guia-completo',
    title: 'Como evitar processos trabalhistas: guia completo para empresários',
    metaTitle: 'Como Evitar Processos Trabalhistas: Guia Completo para Empresários',
    metaDescription: 'Descubra como evitar processos trabalhistas com prevenção prática, compliance de RH, documentação correta e gestão segura de pessoas.',
    keywords: ['como evitar processos trabalhistas', 'prevenção de passivo trabalhista', 'compliance trabalhista', 'ações trabalhistas contra empresas'],
    summary: 'Um panorama definitivo para empresários e líderes entenderem a raiz dos litígios e estruturarem um sistema contínuo de imunização e conformidade jurídica.',
    readTime: '12 min de leitura',
    publishDate: '2026-09-29',
    isPillar: true,
    category: 'Guia Geral e Estratégia',
    sections: [
      {
        heading: 'Por que empresas perdem processos trabalhistas mesmo achando que estão certas?',
        content: `Na Justiça do Trabalho brasileira, vigora o princípio da primazia da realidade e da proteção probatória. Para o juiz, o que não está formalmente documentado e assinado simplesmente não existiu. A maior parte das condenações contra micro, pequenas e médias empresas não ocorre por má-fé do empresário, mas pela incapacidade de provar o cumprimento das obrigações legais (controle de ponto, recibos de EPI, comprovantes de pagamento e termos de ciência).`
      },
      {
        heading: 'Os 4 Pilares da Imunização Trabalhista Empresarial',
        content: `Para blindar o caixa e o patrimônio da sua empresa, você precisa atuar em quatro frentes coordenadas:
1. **Admissão e Contratação Estruturada:** Contratos alinhados à realidade, descrição precisa de funções e termos de confidencialidade/uso de ferramentas.
2. **Controle de Rotinas e Ponto:** Gestão impecável de horas extras, intervalos intrajornada e controle documental de compensação.
3. **Comunicação Interna e Conduta:** Políticas claras sobre uso de aplicativos de mensagens, canais de feedback e prevenção ao assédio moral.
4. **Demissão Segura e Rescisão:** Roteiro formal de desligamento com checklist de quitação e conduta ética dos gestores.`
      },
      {
        heading: 'A importância de um Checklist de Compliance Trabalhista',
        content: `Adotar auditorias preventivas periódicas com um checklist prático permite diagnosticar falhas antes que se tornem passivos ocultos. No método Empresário Imune, empresários recebem um roteiro pronto para aplicar em menos de 1 hora no RH.`
      },
      {
        heading: 'Próximos passos para proteger o seu lucro',
        content: `Não espere a notificação da Justiça chegar para agir. O custo de um acordo judicial ou condenação frequentemente supera em mais de 10 vezes o investimento em rotinas preventivas.`
      }
    ]
  },
  {
    slug: '10-erros-rh-que-geram-acoes-trabalhistas',
    title: 'Os 10 erros de RH que mais geram ações trabalhistas',
    metaTitle: '10 Erros de RH que Geram Ações Trabalhistas | Empresário Imune',
    metaDescription: 'Conheça os 10 principais erros operacionais do RH que resultam em processos trabalhistas caros e saiba como corrigi-los hoje.',
    keywords: ['erros de rh', 'ações trabalhistas', 'passivo trabalhista', 'como evitar processos trabalhistas'],
    summary: 'Mapeamento detalhado das falhas operacionais mais frequentes em contratações, folha de pagamento e gestão cotidiana de colaboradores.',
    readTime: '8 min de leitura',
    publishDate: '2026-09-29',
    isPillar: false,
    category: 'Gestão de RH',
    sections: [
      {
        heading: '1. Falta de comprovante de entrega de EPIs e equipamentos',
        content: `A simples alegação verbal de que o colaborador recebeu EPI não tem validade jurídica. A empresa deve manter fichas de entrega individuais com data, CA (Certificado de Aprovação) e assinatura do funcionário.`
      },
      {
        heading: '2. Controle de ponto britânico e horas extras não pagas',
        content: `Cartões de ponto com horários idênticos de entrada e saída (ex: 08:00 às 18:00 todos os dias) são invalidados pela Súmula 338 do TST, transferindo o ônus da prova para o empregador.`
      },
      {
        heading: '3. Desvio e acúmulo de função não formalizados',
        content: `Colaboradores contratados para uma função que passam a exercer atividades mais complexas ou acumuladas sem aditivo contratual e compensação proporcional geram pedidos vultosos de diferenças salariais.`
      },
      {
        heading: '4. Mensagens de trabalho fora do expediente',
        content: `Envio de cobranças ou solicitações em grupos de WhatsApp durante finais de semana ou férias gera risco iminente de pedido de sobreaviso ou dano existencial.`
      }
    ]
  },
  {
    slug: 'como-demitir-sem-gerar-processo',
    title: 'Como demitir sem gerar processo trabalhista',
    metaTitle: 'Como Demitir sem Gerar Processo Trabalhista | Guia Prático',
    metaDescription: 'Aprenda a conduzir o processo de desligamento de funcionários com segurança jurídica, respeito e sem criar riscos de ações judiciais.',
    keywords: ['como demitir sem processo', 'demissão segura', 'rescisão contratual', 'prevenção de passivo trabalhista'],
    summary: 'Boas práticas, procedimentos formais e conduta humana para demitir colaboradores sem dar margem a litígios e pedidos de indenização.',
    readTime: '7 min de leitura',
    publishDate: '2026-09-29',
    isPillar: false,
    category: 'Desligamento & Rescisão',
    sections: [
      {
        heading: 'O momento da conversa de desligamento',
        content: `A demissão deve ser conduzida com cordialidade, objetividade e privacidade. Expor o funcionário perante a equipe ou justificar a demissão com ofensas é a porta de entrada para ações de danos morais.`
      },
      {
        heading: 'Prazos de pagamento das verbas rescisórias',
        content: `O artigo 477 da CLT prevê prazo de até 10 dias corridos após o término do contrato para pagamento das verbas rescisórias. O descumprimento gera multa equivalente a um salário do empregado.`
      },
      {
        heading: 'Exame demissional e quitação de obrigações',
        content: `Nunca conclua a rescisão sem a realização tempestiva do ASO Demissional que comprove a aptidão física do trabalhador no momento da saída.`
      }
    ]
  },
  {
    slug: 'o-que-e-passivo-trabalhista',
    title: 'O que é passivo trabalhista e como calcular para sua empresa',
    metaTitle: 'O Que é Passivo Trabalhista e Como Calcular | Empresário Imune',
    metaDescription: 'Entenda o conceito de passivo trabalhista oculto, aprenda a mensurar riscos no seu caixa e veja como prevenir prejuízos futuros.',
    keywords: ['o que é passivo trabalhista', 'calcular passivo trabalhista', 'auditoria trabalhista', 'compliance trabalhista'],
    summary: 'Aprenda a mapear e quantificar riscos jurídicos acumulados na sua folha de pagamento e operações diárias.',
    readTime: '9 min de leitura',
    publishDate: '2026-09-29',
    isPillar: false,
    category: 'Finanças & Risco',
    sections: [
      {
        heading: 'Definição de passivo trabalhista',
        content: `Passivo trabalhista é o somatório de obrigações legais, verbas rescisórias, encargos e riscos de indenizações decorrentes de descumprimentos ou ambiguidades na relação de emprego ao longo do tempo.`
      },
      {
        heading: 'Passivo Visível vs. Passivo Oculto',
        content: `O passivo visível inclui férias vencidas e tributos a recolher. O passivo oculto — o mais perigoso — é composto por horas extras informais, equiparações salariais não reconhecidas e riscos de insalubridade.`
      },
      {
        heading: 'Como auditar sua empresa e estancar o passivo',
        content: `Com uma planilha de risco trabalhista e auditoria interna simples, você quantifica a exposição financeira da sua empresa e prioriza as correções imediatas.`
      }
    ]
  },
  {
    slug: 'documentos-obrigatorios-na-admissao',
    title: 'Documentos obrigatórios na admissão de funcionários',
    metaTitle: 'Documentos Obrigatórios na Admissão de Funcionários | Checklist',
    metaDescription: 'Checklist completo com todos os documentos essenciais na contratação de empregados para garantir total conformidade legal.',
    keywords: ['documentos obrigatórios na admissão', 'admissão de empregados', 'contrato de trabalho', 'compliance trabalhista'],
    summary: 'O dossiê documental que todo RH e empresário deve exigir e arquivar desde o primeiro dia de trabalho do colaborador.',
    readTime: '6 min de leitura',
    publishDate: '2026-09-29',
    isPillar: false,
    category: 'Documentos & Contratos',
    sections: [
      {
        heading: 'Dossiê admissional indispensável',
        content: `CTPS digital atualizada, comprovante de residência recente, ASO Admissional antes do início das atividades, ficha de registro preenchida e declaração de dependentes para fins de IR e salário-família.`
      },
      {
        heading: 'Contrato de trabalho e cláusulas essenciais',
        content: `O contrato deve estipular detalhadamente cargo, remuneração, jornada, local de prestação de serviços e cláusula de confidencialidade e proteção de dados (LGPD).`
      },
      {
        heading: 'Termos de entrega e ciência',
        content: `Termo de entrega de crachá, ferramentas de trabalho, notebook, celular corporativo e recibo assinado do regulamento interno da empresa.`
      }
    ]
  },
  {
    slug: 'politica-interna-de-rh',
    title: 'Como criar uma política interna de RH eficaz e preventiva',
    metaTitle: 'Como Criar uma Política Interna de RH Preventiva | Passo a Passo',
    metaDescription: 'Veja como estruturar o manual de conduta e regulamento interno da empresa para padronizar regras e afastar riscos de litígios.',
    keywords: ['politica interna de rh', 'regulamento interno empresa', 'manual do colaborador', 'como evitar processos trabalhistas'],
    summary: 'Guia prático para redigir e implementar normas internas que estabelecem limites claros e servem como prova cabal em juízo.',
    readTime: '8 min de leitura',
    publishDate: '2026-09-29',
    isPillar: false,
    category: 'Políticas & Governança',
    sections: [
      {
        heading: 'O poder regulamentar do empregador',
        content: `O artigo 444 da CLT permite que a empresa institua normas internas, desde que não contrariem a legislação nem os acordos coletivos da categoria.`
      },
      {
        heading: 'Itens indispensáveis no Regulamento Interno',
        content: `Regras de vestimenta e apresentação pessoal, uso correto de equipamentos e celulares, política de utilização de veículos corporativos, horários e tolerâncias de atraso, e canal confidencial de denúncias.`
      },
      {
        heading: 'Como dar validade jurídica ao manual',
        content: `É fundamental coletar a assinatura de cada colaborador em um Termo de Recebimento e Ciência das Políticas Internas no momento da contratação.`
      }
    ]
  },
  {
    slug: 'checklist-de-demissao-segura',
    title: 'Checklist de demissão segura: o passo a passo para evitar passivos',
    metaTitle: 'Checklist de Demissão Segura: Passo a Passo | Empresário Imune',
    metaDescription: 'Tenha em mãos o checklist definitivo para conduzir desligamentos sem riscos de multas, erros de cálculo ou ações judiciais.',
    keywords: ['checklist de demissao segura', 'rescisão trabalhista', 'evitar processo na demissao', 'prevenção de passivo trabalhista'],
    summary: 'Um roteiro objetivo para conferência antes, durante e após o encerramento do contrato de trabalho.',
    readTime: '6 min de leitura',
    publishDate: '2026-09-29',
    isPillar: false,
    category: 'Desligamento & Rescisão',
    sections: [
      {
        heading: 'Fase 1: Pré-desligamento e análise de estabilidade',
        content: `Verifique se o colaborador possui estabilidade provisória (gestante, acidentário, membro da CIPA, pré-aposentadoria ou previsão em Convenção Coletiva de Trabalho).`
      },
      {
        heading: 'Fase 2: Comunicação e assinatura do aviso prévio',
        content: `Formalize o aviso prévio por escrito com dia, hora e opção de redução de jornada (2 horas diárias ou 7 dias corridos).`
      },
      {
        heading: 'Fase 3: ASO demissional, TRCT e guias do FGTS/Seguro Desemprego',
        content: `Envio correto dos eventos de desligamento ao eSocial e homologação sem pendências documentais.`
      }
    ]
  },
  {
    slug: 'comunicacao-que-vira-indenizacao',
    title: 'Erros de comunicação interna que viram indenização na Justiça',
    metaTitle: 'Erros de Comunicação Interna que Viram Indenização na Justiça',
    metaDescription: 'Entenda como conversas no WhatsApp, cobranças públicas e feedbacks malconduzidos se tornam provas em processos trabalhistas.',
    keywords: ['comunicação interna risco trabalhista', 'danos morais trabalho', 'whatsapp processo trabalhista', 'assedio moral empresa'],
    summary: 'Como treinar seus gestores e líderes para se comunicarem com firmeza sem ultrapassar os limites legais da dignidade do trabalhador.',
    readTime: '7 min de leitura',
    publishDate: '2026-09-29',
    isPillar: false,
    category: 'Liderança & Conduta',
    sections: [
      {
        heading: 'Mensagens no WhatsApp e prints como prova judicial',
        content: `Hoje, prints e áudios de aplicativos de mensagens são aceitos como prova em praticamente 100% das Varas do Trabalho. Mensagens enviadas fora do horário comercial ou com tom intimidador são fatais.`
      },
      {
        heading: 'Cobrança de metas vs. Assédio moral',
        content: `Cobrar resultados é direito do empresário; expor rankings vexatórios ou ridicularizar o colaborador perante o time configura dano moral indenizável.`
      },
      {
        heading: 'Protocolo de comunicação segura para líderes',
        content: `Estabeleça diretrizes claras: feedbacks negativos sempre individuais, linguagem estritamente profissional e respeito irrestrito aos períodos de folga e descanso.`
      }
    ]
  },
  {
    slug: 'riscos-trabalhistas-em-pmes',
    title: 'Principais riscos trabalhistas em pequenas e médias empresas',
    metaTitle: 'Principais Riscos Trabalhistas em PMEs e Como Mitigar',
    metaDescription: 'Conheça os desafios específicos das pequenas e médias empresas na gestão de relações de trabalho e como estruturar compliance acessível.',
    keywords: ['riscos trabalhistas em pmes', 'direito trabalhista pequenas empresas', 'compliance para pmes', 'prevenção de passivo trabalhista'],
    summary: 'Como pequenos empresários podem ter a mesma segurança jurídica de grandes corporações sem custos exorbitantes.',
    readTime: '8 min de leitura',
    publishDate: '2026-09-29',
    isPillar: false,
    category: 'PMEs & Empreendedorismo',
    sections: [
      {
        heading: 'A falsa sensação de que "aqui somos uma família"',
        content: `Muitas PMEs confundem informalidade com bom relacionamento. A falta de contratos formais, recibos e regras claras não impede litígios futuros e quase sempre resulta em condenações pesadas.`
      },
      {
        heading: 'Contratação via PJ ("Pejotização") sem critérios',
        content: `Contratar pessoas físicas como pessoas jurídicas exigindo subordinação, horário fixo e exclusividade gera o reconhecimento imediato de vínculo empregatício com pagamento retroativo de todos os direitos.`
      },
      {
        heading: 'Como estruturar uma blindagem proporcional ao seu negócio',
        content: `Com o método e os modelos do Empresário Imune, mesmo uma empresa com 2 ou 20 colaboradores consegue alcançar alto nível de segurança e proteger sua margem de lucro.`
      }
    ]
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return BLOG_POSTS;
}
