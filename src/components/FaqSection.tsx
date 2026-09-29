"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "O que é o Empresário Imune?",
    answer:
      "O Empresário Imune é um guia estratégico e prático de prevenção trabalhista desenvolvido por advogada especialista em Direito do Trabalho Empresarial. O material ensina passo a passo como donos de empresas e gestores podem blindar suas operações contra processos trabalhistas, eliminar falhas comuns de documentação e estabelecer rotinas seguras de RH, sem complicação e sem juridiquês.",
  },
  {
    question: "Como este método ajuda a proteger o lucro da minha empresa?",
    answer:
      "O método atua na raiz dos maiores passivos judiciais: erros de documentação na contratação, descontrole de ponto e horas extras, falhas de comunicação interna e demissões malconduzidas. Ao aplicar as rotinas preventivas e os modelos de documentos prontos, sua empresa previne condenações que poderiam comprometer dezenas ou centenas de milhares de reais do seu fluxo de caixa.",
  },
  {
    question: "É obrigatório ter um advogado para aplicar o conteúdo do e-book?",
    answer:
      "Não é obrigatório. As orientações, checklists e modelos foram estruturados especificamente para que o próprio empresário, gerente operacional ou equipe interna de RH consiga implementar as melhorias no mesmo dia. Para situações judiciais contenciosas ou acordos específicos de alta complexidade, o acompanhamento jurídico formal continua sendo recomendado.",
  },
  {
    question: "Quais riscos trabalhistas são abordados no guia?",
    answer:
      "O guia aborda as 10 principais causas de condenação na Justiça do Trabalho: ausência de recibos e comprovações de entrega de EPIs, controle inadequado de jornada e horas extras, falhas no processo admissional, desvio e acúmulo de função, demissões sem respaldo documental, políticas inadequadas de WhatsApp e mensagens, e riscos ligados a pedidos de assédio moral ou dano existencial.",
  },
  {
    question: "Como começo a usar o guia e por onde devo iniciar?",
    answer:
      "O acesso é liberado instantaneamente logo após a aprovação da compra. Você recebe os arquivos digitais e os bônus por e-mail e na área de membros. Recomendamos iniciar diretamente pelo Checklist de Diagnóstico dos 10 Erros: em menos de 1 hora você já terá um mapa completo das vulnerabilidades que precisam de ajuste imediato na sua empresa.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      data-screen-label="FAQ"
      style={{ background: "#F3EEE5", padding: "0 0 84px" }}
    >
      <div className="ei-wrap" style={{ maxWidth: "860px" }}>
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <span className="eyebrow-light">Dúvidas Frequentes</span>
          <h2
            style={{
              margin: "10px 0 0",
              fontSize: "clamp(23px,2.8vw,32px)",
              fontWeight: 800,
              color: "#0B1F3A",
            }}
          >
            Perguntas frequentes sobre prevenção de passivo trabalhista
          </h2>
        </div>

        <div
          className="faq-accordion"
          style={{ display: "flex", flexDirection: "column", gap: "12px" }}
        >
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <details
                key={index}
                open={isOpen}
                onClick={(e) => {
                  e.preventDefault();
                  toggle(index);
                }}
                className="card-interactive-light"
                style={{
                  background: "#FBF8F1",
                  border: "1px solid #E4DCCB",
                  borderRadius: "14px",
                  padding: "18px 22px",
                  cursor: "pointer",
                }}
              >
                <summary
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#0B1F3A",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <span>{item.question}</span>
                  <span
                    className="faq-toggle-icon"
                    style={{
                      color: "#E87722",
                      fontSize: "22px",
                      fontWeight: 800,
                      lineHeight: 1,
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </summary>
                <div
                  style={{
                    marginTop: "12px",
                    color: "#3C4A5E",
                    fontSize: "14px",
                    lineHeight: 1.75,
                  }}
                >
                  {item.answer}
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
