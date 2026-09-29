/*
  Conteúdo da landing page.

  [AVISO DE DADOS / PENDENTE DE VALIDAÇÃO]
  Métricas "70% menos riscos", "19+ pontos de blindagem" e "3h para aplicar"
  vêm do material original, sem fonte ou pesquisa empírica referenciada.
  Sinalizado para confirmação da cliente/advogada conforme boas práticas éticas.
*/

export const NAV_SECTIONS = [
  { id: "metodo", label: "Método" },
  { id: "ebook", label: "E-book" },
  { id: "autora", label: "Autora" },
  { id: "dor", label: "Riscos" },
  { id: "depoimentos", label: "Provas" },
] as const;

export const HERO_STATS = [
  { value: "70%", label: "Menos riscos operacionais" },
  { value: "19+", label: "Pontos de blindagem" },
  { value: "3h", label: "Para aplicar" },
];

/*
  Mini-quiz do Hero. Cada "Não" soma 1 ponto de risco.
  [PENDENTE DE VALIDAÇÃO] Perguntas e textos de resultado devem ser revisados
  pela advogada responsável antes da publicação.
*/
export const QUIZ_QUESTIONS = [
  "Todos os colaboradores têm contrato, recibos e entrega de EPI assinados e arquivados?",
  "A jornada e as horas extras são registradas e conferidas todo mês?",
  "As demissões seguem um roteiro documentado, com advertências e termos assinados?",
];

export const QUIZ_RESULTS = [
  {
    level: "Baixo",
    tone: "low",
    title: "Boa base — mas ainda há brechas invisíveis",
    text: "Sua rotina cobre o essencial. O checklist de 19+ pontos revela os detalhes que costumam passar despercebidos.",
  },
  {
    level: "Moderado",
    tone: "mid",
    title: "Há uma porta aberta para um processo",
    text: "Uma falha isolada já basta para uma reclamação trabalhista. O método mostra como fechá-la com modelos prontos.",
  },
  {
    level: "Alto",
    tone: "high",
    title: "Sua empresa está exposta a passivo trabalhista",
    text: "Esses pontos estão entre os que mais geram condenações. Dá para corrigir em poucas horas com o passo a passo do e-book.",
  },
] as const;

export const RISKS = [
  {
    icon: "file",
    title: "Falta de documentos e recibos",
    text: "Sem comprovante assinado, sua empresa fica sem defesa.",
  },
  {
    icon: "message",
    title: "Erros graves de comunicação",
    text: "Um áudio ou mensagem no WhatsApp pode virar pedido de dano moral.",
  },
  {
    icon: "user",
    title: "Demissões mal conduzidas",
    text: "Rescisão sem roteiro é a principal porta de entrada de reclamações.",
  },
  {
    icon: "scroll",
    title: "Políticas internas inexistentes",
    text: "Sem regra escrita, não há base para advertir nem para se defender.",
  },
  {
    icon: "zap",
    title: "Falhas no dia a dia do RH",
    text: "Ponto, horas extras e férias fora de controle viram passivo.",
  },
] as const;

export const METHOD_STEPS = [
  {
    n: "01",
    title: "Diagnóstico",
    text: "Aplique o checklist e descubra onde estão as vulnerabilidades invisíveis na contratação, folha e rotinas da sua empresa.",
  },
  {
    n: "02",
    title: "Correção",
    text: "Corrija documentos, contratos, recibos e advertências utilizando os modelos de documentos trabalhistas inclusos.",
  },
  {
    n: "03",
    title: "Vacina do RH",
    text: "Treine líderes e colaboradores para agirem como escudo preventivo — com comunicação interna e demissões seguras.",
  },
  {
    n: "04",
    title: "Empresa Imune",
    text: "Cultura de conformidade rodando no piloto seguro: você expande seu negócio com previsibilidade e sem sustos judiciais.",
  },
];

export const METHOD_BENEFITS = [
  "Mapear riscos trabalhistas ocultos",
  "Padronizar contratos e documentos de admissão",
  "Treinar líderes para evitar condutas de risco",
  "Criar políticas de comunicação interna segura",
  "Proteger o lucro contra passivo trabalhista",
];

export const COUNTERS = [
  { end: 70, suffix: "%", label: "de redução estimada nos riscos trabalhistas operacionais" },
  { end: 5, suffix: "", label: "pilares do Sistema Imune Jurídico" },
  { end: 10, suffix: "", label: "erros que mais geram ações mapeados em detalhes" },
  { end: 100, suffix: "%", label: "orientações práticas, sem juridiquês" },
];

export const EBOOK_RESULTS = [
  {
    title: "Diagnóstico em menos de 1 hora",
    text: "Descubra onde sua empresa está exposta com o checklist de vulnerabilidades.",
  },
  {
    title: "Documentos em dia",
    text: "Contratos, recibos e advertências corrigidos com modelos prontos.",
  },
  {
    title: "RH que previne processos",
    text: "Líderes treinados para evitar as condutas que geram ações trabalhistas.",
  },
];

export const EBOOK_MODULES = [
  {
    title: "Diagnóstico Imunológico",
    text: "Checklist de compliance trabalhista para identificar pontos de risco imediato na empresa.",
  },
  {
    title: "Sistema Imune Jurídico",
    text: "Pilares estratégicos para blindar seu negócio contra passivos e multas trabalhistas.",
  },
  {
    title: "Vacina do RH & Liderança",
    text: "Estratégias práticas para transformar líderes e RH em escudos de prevenção.",
  },
  {
    title: "Comunicação Segura",
    text: "Regras para mensagens, e-mails e feedbacks evitando pedidos de danos morais.",
  },
  {
    title: "Compliance Simplificado",
    text: "A legislação trabalhista traduzida em linguagem executiva para empresários e gestores.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Depois de aplicar o método, ajustamos contratos e evitamos duas ações trabalhistas em menos de 3 meses.",
    name: "Carlos Menezes",
    role: "CEO do Grupo Alfa",
    avatar: "/assets/images/avatar-cm.png",
  },
  {
    quote:
      "Direto, prático, e fez o jurídico deixar de ser um problema e virar um aliado. Sem complicações.",
    name: "Fernanda L.",
    role: "Setor de serviços",
    avatar: "/assets/images/avatar-fl.png",
  },
  {
    quote:
      "Revisamos o processo de demissão inteiro em uma tarde. O checklist sozinho já paga o e-book.",
    name: "Ricardo A.",
    role: "Indústria · 120 colaboradores",
    avatar: "/assets/images/avatar-ra.png",
  },
  {
    quote:
      "Meu RH passou a documentar tudo. Hoje durmo tranquila sabendo que a empresa está protegida.",
    name: "Patrícia M.",
    role: "Rede de clínicas",
    avatar: "/assets/images/avatar-pm.png",
  },
];

export const OFFER_ITEMS = [
  { label: "E-book completo e atualizado", was: "R$ 398,00" },
  { label: "Checklist de vulnerabilidades", was: "R$ 229,00" },
  { label: "Planilha de risco trabalhista", was: "R$ 278,00" },
  { label: "Modelos de documentos essenciais", was: "R$ 92,00" },
];

export const WHATSAPP_URL =
  "https://wa.me/5521986450256?text=Quero%20garantir%20meu%20acesso%20ao%20Empres%C3%A1rio%20Imune";
