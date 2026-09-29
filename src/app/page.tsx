import Image from "next/image";
import Link from "next/link";
import Countdown from "@/components/Countdown";
import Counters from "@/components/Counters";
import FaqSection from "@/components/FaqSection";

export default function HomePage() {
  return (
    <div id="ei-page">
      {/* =========================================================================
          HERO SECTION
          - H1 Único da Página
          - Sub-headline Otimizada com Palavras-chave
          - Imagem Mockup LCP Eager
         ========================================================================= */}
      <section
        id="hero"
        data-screen-label="Hero"
        style={{
          position: "relative",
          background:
            "radial-gradient(1000px 520px at 78% 18%,#173C69 0%,#0B1F3A 62%)",
          padding: "78px 0 90px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "-100px",
            width: "420px",
            height: "420px",
            background:
              "radial-gradient(circle,rgba(232,119,34,.30),transparent 68%)",
            filter: "blur(20px)",
            animation: "ei-orb 18s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-160px",
            right: "-60px",
            width: "480px",
            height: "480px",
            background:
              "radial-gradient(circle,rgba(66,133,244,.16),transparent 68%)",
            filter: "blur(24px)",
            animation: "ei-orb 24s ease-in-out infinite reverse",
            pointerEvents: "none",
          }}
        />

        <div
          className="ei-wrap ei-2col"
          style={{ gridTemplateColumns: "1.08fr .92fr", position: "relative" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "620px",
            }}
          >
            <div className="eyebrow-badge">
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  background: "#F2A051",
                  borderRadius: "50%",
                  animation: "ei-blink 1.6s infinite",
                }}
              />
              <span>Guia de Prevenção de Processos Trabalhistas</span>
            </div>

            {/* H1 Único da Landing Page */}
            <h1
              style={{
                margin: 0,
                color: "#F7F3EA",
                fontSize: "clamp(31px,4.2vw,48px)",
                lineHeight: 1.14,
                fontWeight: 800,
                letterSpacing: "-.02em",
              }}
            >
              Blinde sua empresa de{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg,#F2A051,#E87722,#F7C88F,#F2A051)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  animation: "ei-grad 5s linear infinite",
                }}
              >
                processos trabalhistas
              </span>{" "}
              e proteja o lucro que você construiu
            </h1>

            {/* Sub-headline reescrita com foco semântico em 'evitar processos trabalhistas' e 'passivo' */}
            <p
              style={{
                margin: 0,
                color: "#C7D0DE",
                fontSize: "16px",
                lineHeight: 1.75,
                maxWidth: "540px",
              }}
            >
              Um método simples e direto para empresários que querem{" "}
              <strong>evitar processos trabalhistas</strong>, eliminar riscos
              de <strong>passivo trabalhista</strong> oculto e ter segurança,
              lucro e tranquilidade na gestão de pessoas —{" "}
              <strong style={{ color: "#F7F3EA" }}>
                sem precisar entender de leis
              </strong>
              .
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "16px",
                marginTop: "4px",
              }}
            >
              <Link href="/#oferta" className="btn-primary">
                Quero me tornar Empresário Imune{" "}
                <span style={{ fontSize: "17px" }}>→</span>
              </Link>
            </div>

            {/*
              [AVISO DE DADOS / PENDENTE DE VALIDAÇÃO]
              Métricas destacadas no material original: "70% menos riscos", "19+ pontos de blindagem", "3h para aplicar".
              Nota: O percentual "59% menos riscos" vs "70% de redução" não possui fonte ou pesquisa empírica referenciada no material base.
              Sinalizado para confirmação da cliente/advogada conforme boas práticas éticas.
            */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "26px",
                marginTop: "10px",
                paddingTop: "20px",
                borderTop: "1px solid rgba(255,255,255,.08)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    color: "#F2A051",
                    fontSize: "26px",
                    fontWeight: 800,
                  }}
                >
                  70%
                </span>
                <span
                  style={{
                    color: "#8FA0B8",
                    fontSize: "11.5px",
                    letterSpacing: ".06em",
                    textTransform: "uppercase",
                  }}
                >
                  Menos riscos operacionais
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    color: "#F2A051",
                    fontSize: "26px",
                    fontWeight: 800,
                  }}
                >
                  19+
                </span>
                <span
                  style={{
                    color: "#8FA0B8",
                    fontSize: "11.5px",
                    letterSpacing: ".06em",
                    textTransform: "uppercase",
                  }}
                >
                  Pontos de blindagem
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    color: "#F2A051",
                    fontSize: "26px",
                    fontWeight: 800,
                  }}
                >
                  3h
                </span>
                <span
                  style={{
                    color: "#8FA0B8",
                    fontSize: "11.5px",
                    letterSpacing: ".06em",
                    textTransform: "uppercase",
                  }}
                >
                  Para aplicar
                </span>
              </div>
            </div>
          </div>

          {/* Imagem Hero Mockup Tablet */}
          <div
            className="ei-hero-img"
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "340px",
                height: "340px",
                border: "1px solid rgba(242,160,81,.35)",
                borderRadius: "50%",
                animation: "ei-ring 3.4s ease-out infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: "340px",
                height: "340px",
                border: "1px solid rgba(242,160,81,.25)",
                borderRadius: "50%",
                animation: "ei-ring 3.4s ease-out 1.7s infinite",
              }}
            />
            <Image
              src="/assets/images/mockup-tablet-1.png"
              alt="E-book Empresário Imune: guia de prevenção de processos trabalhistas"
              width={520}
              height={520}
              priority
              style={{
                position: "relative",
                maxWidth: "100%",
                maxHeight: "520px",
                animation: "ei-float 7s ease-in-out infinite",
                filter: "drop-shadow(0 30px 46px rgba(0,0,0,.55))",
                objectFit: "contain",
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "26px",
          }}
        >
          <span
            style={{
              color: "#F2A051",
              fontSize: "22px",
              animation: "ei-down 1.8s ease-in-out infinite",
            }}
          >
            ↓
          </span>
        </div>
      </section>

      {/* Faixa Marquee de Conceitos */}
      <div
        data-screen-label="Marquee frases"
        style={{
          background: "#F3EEE5",
          borderTop: "3px solid #E87722",
          borderBottom: "3px solid #E87722",
          padding: "13px 0",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            gap: 0,
            width: "max-content",
            animation: "ei-marquee 26s linear infinite",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "22px",
              paddingRight: "22px",
              color: "#0B1F3A",
              fontSize: "12.5px",
              fontWeight: 800,
              letterSpacing: ".14em",
              textTransform: "uppercase",
            }}
          >
            Documentação em dia<span style={{ color: "#E87722" }}>◆</span>
            RH como escudo<span style={{ color: "#E87722" }}>◆</span>
            Demissão segura<span style={{ color: "#E87722" }}>◆</span>
            Compliance sem juridiquês<span style={{ color: "#E87722" }}>◆</span>
            Cultura de prevenção<span style={{ color: "#E87722" }}>◆</span>
            Lucro protegido<span style={{ color: "#E87722" }}>◆</span>
          </span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "22px",
              paddingRight: "22px",
              color: "#0B1F3A",
              fontSize: "12.5px",
              fontWeight: 800,
              letterSpacing: ".14em",
              textTransform: "uppercase",
            }}
          >
            Documentação em dia<span style={{ color: "#E87722" }}>◆</span>
            RH como escudo<span style={{ color: "#E87722" }}>◆</span>
            Demissão segura<span style={{ color: "#E87722" }}>◆</span>
            Compliance sem juridiquês<span style={{ color: "#E87722" }}>◆</span>
            Cultura de prevenção<span style={{ color: "#E87722" }}>◆</span>
            Lucro protegido<span style={{ color: "#E87722" }}>◆</span>
          </span>
        </div>
      </div>

      {/* CONTADOR REGRESSIVO */}
      <Countdown />

      {/* =========================================================================
          SEÇÃO DE DORES / RISCOS
          - H2: Os 5 erros de RH que mais geram ações trabalhistas
          - Parágrafo Enriquecido com SEO
         ========================================================================= */}
      <section
        id="dor"
        data-screen-label="Riscos"
        style={{ background: "#0B1F3A", padding: "76px 0" }}
      >
        <div
          className="ei-wrap"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "36px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              textAlign: "center",
              maxWidth: "800px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <span className="eyebrow-dark">O custo invisível</span>
            <h2
              style={{
                margin: 0,
                color: "#F7F3EA",
                fontSize: "clamp(24px,3vw,34px)",
                fontWeight: 800,
                lineHeight: 1.25,
              }}
            >
              Os 5 erros de RH que mais geram{" "}
              <span style={{ color: "#F2A051" }}>ações trabalhistas</span>
            </h2>
            <p
              style={{
                margin: 0,
                color: "#C7D0DE",
                fontSize: "15px",
                lineHeight: 1.8,
              }}
            >
              A maioria das{" "}
              <strong>ações trabalhistas contra empresas</strong> não decorre de
              má-fé, mas sim da falta de documentação comprobatória e de falhas
              rotineiras na gestão de pessoas. Sem uma estrutura prática de{" "}
              <strong>compliance trabalhista</strong>, o empresário acumula um{" "}
              <strong>passivo trabalhista</strong> oculto que corrói o lucro e
              ameaça o patrimônio do negócio.
            </p>
          </div>

          <div className="ei-c5">
            <div
              className="card-interactive"
              style={{
                background: "#122A4C",
                border: "1px solid #1E3E68",
                borderRadius: "18px",
                padding: "26px 18px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "14px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  width: "48px",
                  height: "48px",
                  background: "linear-gradient(180deg,#F2A051,#E87722)",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0B1F3A",
                  fontSize: "22px",
                  fontWeight: 900,
                  animation: "ei-float-s 4s ease-in-out infinite",
                }}
              >
                !
              </span>
              <span
                style={{
                  color: "#F7F3EA",
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: 1.45,
                }}
              >
                Falta de documentos e recibos
              </span>
            </div>

            <div
              className="card-interactive"
              style={{
                background: "#122A4C",
                border: "1px solid #1E3E68",
                borderRadius: "18px",
                padding: "26px 18px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "14px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  width: "48px",
                  height: "48px",
                  background: "linear-gradient(180deg,#F2A051,#E87722)",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0B1F3A",
                  fontSize: "22px",
                  fontWeight: 900,
                  animation: "ei-float-s 4s ease-in-out .4s infinite",
                }}
              >
                ?
              </span>
              <span
                style={{
                  color: "#F7F3EA",
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: 1.45,
                }}
              >
                Erros graves de comunicação
              </span>
            </div>

            <div
              className="card-interactive"
              style={{
                background: "#122A4C",
                border: "1px solid #1E3E68",
                borderRadius: "18px",
                padding: "26px 18px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "14px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  width: "48px",
                  height: "48px",
                  background: "linear-gradient(180deg,#F2A051,#E87722)",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0B1F3A",
                  fontSize: "22px",
                  fontWeight: 900,
                  animation: "ei-float-s 4s ease-in-out .8s infinite",
                }}
              >
                ✕
              </span>
              <span
                style={{
                  color: "#F7F3EA",
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: 1.45,
                }}
              >
                Demissões mal conduzidas
              </span>
            </div>

            <div
              className="card-interactive"
              style={{
                background: "#122A4C",
                border: "1px solid #1E3E68",
                borderRadius: "18px",
                padding: "26px 18px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "14px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  width: "48px",
                  height: "48px",
                  background: "linear-gradient(180deg,#F2A051,#E87722)",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0B1F3A",
                  fontSize: "22px",
                  fontWeight: 900,
                  animation: "ei-float-s 4s ease-in-out 1.2s infinite",
                }}
              >
                §
              </span>
              <span
                style={{
                  color: "#F7F3EA",
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: 1.45,
                }}
              >
                Políticas internas inexistentes
              </span>
            </div>

            <div
              className="card-interactive"
              style={{
                background: "#122A4C",
                border: "1px solid #1E3E68",
                borderRadius: "18px",
                padding: "26px 18px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "14px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  width: "48px",
                  height: "48px",
                  background: "linear-gradient(180deg,#F2A051,#E87722)",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0B1F3A",
                  fontSize: "22px",
                  fontWeight: 900,
                  animation: "ei-float-s 4s ease-in-out 1.6s infinite",
                }}
              >
                ↯
              </span>
              <span
                style={{
                  color: "#F7F3EA",
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: 1.45,
                }}
              >
                Falhas no dia a dia do RH
              </span>
            </div>
          </div>

          <div
            className="ei-row"
            style={{
              width: "100%",
              maxWidth: "940px",
              background:
                "linear-gradient(135deg,rgba(232,119,34,.14),rgba(242,160,81,.05))",
              border: "1px solid rgba(242,160,81,.35)",
              borderRadius: "20px",
              padding: "28px 34px",
              display: "flex",
              alignItems: "center",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                width: "58px",
                height: "58px",
                background: "#E87722",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0B1F3A",
                fontSize: "24px",
                fontWeight: 900,
                flexShrink: 0,
                animation: "ei-pulse 2.8s infinite",
              }}
            >
              ✓
            </span>
            <div style={{ flex: 1, minWidth: "240px" }}>
              <h3
                style={{
                  margin: 0,
                  color: "#F7F3EA",
                  fontSize: "21px",
                  fontWeight: 800,
                }}
              >
                Existe uma forma segura de{" "}
                <span style={{ color: "#F2A051" }}>prevenir esses riscos</span>
              </h3>
              <p
                style={{
                  margin: "6px 0 0",
                  color: "#C7D0DE",
                  fontSize: "14px",
                  lineHeight: 1.6,
                }}
              >
                Enquanto muitos empresários vivem apagando incêndios e pagando
                acordos caros, empresas preparadas atuam com{" "}
                <strong>prevenção de passivo trabalhista</strong> contínua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SEÇÃO DO MÉTODO EM 4 PASSOS
          - H2: Como evitar processos trabalhistas em 4 passos
          - Parágrafo Enriquecido com SEO
         ========================================================================= */}
      <section
        id="metodo"
        data-screen-label="Método"
        style={{
          background: "#F3EEE5",
          padding: "84px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-90px",
            right: "-70px",
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle,rgba(232,119,34,.22),transparent 70%)",
            animation: "ei-orb 20s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />

        <div
          className="ei-wrap"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "44px",
            position: "relative",
          }}
        >
          <div
            style={{
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <span className="eyebrow-light">Simples, rápido e direto ao ponto</span>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(24px,3vw,34px)",
                fontWeight: 800,
                color: "#0B1F3A",
                lineHeight: 1.25,
              }}
            >
              Como evitar processos trabalhistas em{" "}
              <span style={{ color: "#D96F14" }}>4 passos</span>
            </h2>
            <p
              style={{
                margin: 0,
                color: "#3C4A5E",
                fontSize: "15px",
                lineHeight: 1.8,
              }}
            >
              A <strong>prevenção de passivo trabalhista</strong> não exige
              consultorias impagáveis nem vocabulário jurídico hermético. Com o
              método do Empresário Imune, você aplica um programa de{" "}
              <strong>compliance trabalhista</strong> estruturado para proteger
              sua empresa contra <strong>ações trabalhistas contra empresas</strong>,
              utilizando processos claros e modelos testados.
            </p>
          </div>

          <div className="ei-c4">
            <div
              className="card-interactive-light"
              style={{
                background: "#FBF8F1",
                border: "1px solid #E4DCCB",
                borderRadius: "20px",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <span
                style={{
                  fontSize: "44px",
                  fontWeight: 900,
                  color: "rgba(232,119,34,.22)",
                  lineHeight: 1,
                }}
              >
                01
              </span>
              <h3
                style={{
                  color: "#0B1F3A",
                  fontSize: "17px",
                  fontWeight: 800,
                  margin: 0,
                }}
              >
                Diagnóstico
              </h3>
              <p
                style={{
                  color: "#3C4A5E",
                  fontSize: "13.5px",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Aplique o checklist e descubra onde estão as vulnerabilidades
                invisíveis na contratação, folha e rotinas da sua empresa.
              </p>
            </div>

            <div
              className="card-interactive-light"
              style={{
                background: "#FBF8F1",
                border: "1px solid #E4DCCB",
                borderRadius: "20px",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <span
                style={{
                  fontSize: "44px",
                  fontWeight: 900,
                  color: "rgba(232,119,34,.22)",
                  lineHeight: 1,
                }}
              >
                02
              </span>
              <h3
                style={{
                  color: "#0B1F3A",
                  fontSize: "17px",
                  fontWeight: 800,
                  margin: 0,
                }}
              >
                Correção
              </h3>
              <p
                style={{
                  color: "#3C4A5E",
                  fontSize: "13.5px",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Corrija documentos, contratos, recibos e advertências utilizando
                os modelos de documentos trabalhistas inclusos.
              </p>
            </div>

            <div
              className="card-interactive-light"
              style={{
                background: "#FBF8F1",
                border: "1px solid #E4DCCB",
                borderRadius: "20px",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <span
                style={{
                  fontSize: "44px",
                  fontWeight: 900,
                  color: "rgba(232,119,34,.22)",
                  lineHeight: 1,
                }}
              >
                03
              </span>
              <h3
                style={{
                  color: "#0B1F3A",
                  fontSize: "17px",
                  fontWeight: 800,
                  margin: 0,
                }}
              >
                Vacina do RH
              </h3>
              <p
                style={{
                  color: "#3C4A5E",
                  fontSize: "13.5px",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Treine líderes e colaboradores para agirem como escudo
                preventivo — com comunicação interna e demissões seguras.
              </p>
            </div>

            <div
              className="card-interactive"
              style={{
                background: "linear-gradient(160deg,#0B1F3A,#14335C)",
                borderRadius: "20px",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <span
                style={{
                  fontSize: "44px",
                  fontWeight: 900,
                  color: "rgba(242,160,81,.35)",
                  lineHeight: 1,
                }}
              >
                04
              </span>
              <h3
                style={{
                  color: "#F7F3EA",
                  fontSize: "17px",
                  fontWeight: 800,
                  margin: 0,
                }}
              >
                Empresa Imune
              </h3>
              <p
                style={{
                  color: "#C7D0DE",
                  fontSize: "13.5px",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Cultura de conformidade rodando no piloto seguro: você expande
                seu negócio com previsibilidade e sem sustos judiciais.
              </p>
            </div>
          </div>

          <div className="ei-2col" style={{ marginTop: "12px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: "26px",
                  fontWeight: 800,
                  color: "#0B1F3A",
                  lineHeight: 1.3,
                }}
              >
                O método que transforma o risco jurídico em{" "}
                <span style={{ color: "#D96F14" }}>proteção estratégica</span>
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "#3C4A5E",
                  fontSize: "14.5px",
                  lineHeight: 1.75,
                }}
              >
                O <strong>Empresário Imune</strong> é um roteiro de imunização
                jurídica construído com base na prática do Direito do Trabalho
                Empresarial, traduzido para a realidade de quem empreende.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "11px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "14px",
                    color: "#0B1F3A",
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      width: "22px",
                      height: "22px",
                      background: "#E87722",
                      borderRadius: "50%",
                      color: "#fff",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  Identificar vulnerabilidades invisíveis de forma ágil
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "14px",
                    color: "#0B1F3A",
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      width: "22px",
                      height: "22px",
                      background: "#E87722",
                      borderRadius: "50%",
                      color: "#fff",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  Organizar e padronizar contratos e termos de admissão
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "14px",
                    color: "#0B1F3A",
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      width: "22px",
                      height: "22px",
                      background: "#E87722",
                      borderRadius: "50%",
                      color: "#fff",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  Capacitar sua liderança para evitar condutas de risco
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "14px",
                    color: "#0B1F3A",
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      width: "22px",
                      height: "22px",
                      background: "#E87722",
                      borderRadius: "50%",
                      color: "#fff",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  Estabelecer políticas claras de comunicação interna
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "14px",
                    color: "#0B1F3A",
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      width: "22px",
                      height: "22px",
                      background: "#E87722",
                      borderRadius: "50%",
                      color: "#fff",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  Dormir em paz sabendo que seu lucro está resguardado
                </div>
              </div>
              <Link
                href="/#oferta"
                className="btn-dark"
                style={{ alignSelf: "flex-start", marginTop: "8px" }}
              >
                Quero blindar minha empresa{" "}
                <span style={{ color: "#F2A051" }}>→</span>
              </Link>
            </div>

            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: "6%",
                  top: "8%",
                  width: "300px",
                  height: "300px",
                  background: "#EE8A33",
                  borderRadius: "50%",
                  animation: "ei-float-s 6s ease-in-out infinite",
                }}
              />
              <Image
                src="/assets/images/mockup-laptop-1.png"
                alt="Checklist de diagnóstico de riscos trabalhistas da empresa no notebook"
                width={540}
                height={380}
                loading="lazy"
                style={{
                  position: "relative",
                  maxWidth: "94%",
                  filter: "drop-shadow(0 24px 40px rgba(11,31,58,.32))",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE NÚMEROS DE IMPACTO ANIMADOS */}
      <Counters />

      {/* =========================================================================
          SEÇÃO DO CONTEÚDO DO E-BOOK
          - H2: O que você recebe no e-book de compliance trabalhista
          - 3 Bônus
         ========================================================================= */}
      <section
        id="ebook"
        data-screen-label="E-book"
        style={{
          background: "#0B1F3A",
          padding: "84px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "-140px",
            left: "-80px",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle,rgba(232,119,34,.2),transparent 70%)",
            animation: "ei-orb 22s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />

        <div
          className="ei-wrap ei-2col"
          style={{ gridTemplateColumns: ".8fr 1.2fr", position: "relative" }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
              src="/assets/images/ebook-capa-1.png"
              alt="Capa do E-book de Direito Trabalhista Empresarial Empresário Imune"
              width={460}
              height={560}
              loading="lazy"
              style={{
                maxWidth: "100%",
                maxHeight: "560px",
                animation: "ei-float 8s ease-in-out infinite",
                filter: "drop-shadow(0 28px 46px rgba(0,0,0,.55))",
                objectFit: "contain",
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <div>
              <span className="eyebrow-dark">Veja por dentro</span>
              <h2
                style={{
                  margin: "8px 0 0",
                  color: "#F7F3EA",
                  fontSize: "clamp(23px,2.8vw,32px)",
                  fontWeight: 800,
                }}
              >
                O que você recebe no e-book de{" "}
                <span style={{ color: "#F2A051" }}>compliance trabalhista</span>
              </h2>
            </div>

            <div className="ei-c2">
              <div
                className="card-interactive"
                style={{
                  background: "#122A4C",
                  border: "1px solid #1E3E68",
                  borderRadius: "16px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "7px",
                }}
              >
                <span
                  style={{
                    color: "#F2A051",
                    fontSize: "14px",
                    fontWeight: 800,
                  }}
                >
                  Diagnóstico Imunológico
                </span>
                <span
                  style={{
                    color: "#C7D0DE",
                    fontSize: "13px",
                    lineHeight: 1.55,
                  }}
                >
                  Checklist de compliance trabalhista para identificar pontos
                  de risco imediato na empresa.
                </span>
              </div>

              <div
                className="card-interactive"
                style={{
                  background: "#122A4C",
                  border: "1px solid #1E3E68",
                  borderRadius: "16px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "7px",
                }}
              >
                <span
                  style={{
                    color: "#F2A051",
                    fontSize: "14px",
                    fontWeight: 800,
                  }}
                >
                  Sistema Imune Jurídico
                </span>
                <span
                  style={{
                    color: "#C7D0DE",
                    fontSize: "13px",
                    lineHeight: 1.55,
                  }}
                >
                  Pilares estratégicos para blindar seu negócio contra passivos
                  e multas trabalhistas.
                </span>
              </div>

              <div
                className="card-interactive"
                style={{
                  background: "#122A4C",
                  border: "1px solid #1E3E68",
                  borderRadius: "16px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "7px",
                }}
              >
                <span
                  style={{
                    color: "#F2A051",
                    fontSize: "14px",
                    fontWeight: 800,
                  }}
                >
                  Vacina do RH & Liderança
                </span>
                <span
                  style={{
                    color: "#C7D0DE",
                    fontSize: "13px",
                    lineHeight: 1.55,
                  }}
                >
                  Estratégias práticas para transformar líderes e RH em escudos
                  de prevenção.
                </span>
              </div>

              <div
                className="card-interactive"
                style={{
                  background: "#122A4C",
                  border: "1px solid #1E3E68",
                  borderRadius: "16px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "7px",
                }}
              >
                <span
                  style={{
                    color: "#F2A051",
                    fontSize: "14px",
                    fontWeight: 800,
                  }}
                >
                  Comunicação Segura
                </span>
                <span
                  style={{
                    color: "#C7D0DE",
                    fontSize: "13px",
                    lineHeight: 1.55,
                  }}
                >
                  Regras para mensagens, e-mails e feedbacks evitando pedidos de
                  danos morais.
                </span>
              </div>

              <div
                className="card-interactive"
                style={{
                  background: "#122A4C",
                  border: "1px solid #1E3E68",
                  borderRadius: "16px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "7px",
                }}
              >
                <span
                  style={{
                    color: "#F2A051",
                    fontSize: "14px",
                    fontWeight: 800,
                  }}
                >
                  Compliance Simplificado
                </span>
                <span
                  style={{
                    color: "#C7D0DE",
                    fontSize: "13px",
                    lineHeight: 1.55,
                  }}
                >
                  A legislação trabalhista traduzida em linguagem executiva
                  para empresários e gestores.
                </span>
              </div>

              <div
                className="card-interactive"
                style={{
                  background: "linear-gradient(135deg,#F2A051,#E87722)",
                  borderRadius: "16px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "7px",
                }}
              >
                <span
                  style={{
                    color: "#0B1F3A",
                    fontSize: "14px",
                    fontWeight: 900,
                  }}
                >
                  🎁 3 Bônus Exclusivos
                </span>
                <span
                  style={{
                    color: "#132A47",
                    fontSize: "13px",
                    lineHeight: 1.55,
                  }}
                >
                  Planilha de risco + Modelos de documentos trabalhistas +
                  Checklist dos 10 erros.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SEÇÃO DA AUTORA
          - H2: Quem é a autora
          - Placeholders claros para Nome e OAB
          - Provimento 205/2021 da OAB observado
         ========================================================================= */}
      <section
        id="autora"
        data-screen-label="Autora"
        style={{ background: "#F3EEE5", padding: "84px 0" }}
      >
        <div
          className="ei-wrap ei-2col"
          style={{ gridTemplateColumns: "1fr .8fr" }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <span className="eyebrow-light">Quem vai te ensinar</span>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(23px,2.8vw,32px)",
                fontWeight: 800,
                color: "#0B1F3A",
                lineHeight: 1.3,
              }}
            >
              Quem é a autora do Empresário Imune
            </h2>

            <p
              style={{
                margin: 0,
                color: "#3C4A5E",
                fontSize: "15px",
                lineHeight: 1.75,
              }}
            >
              Advogada especialista em{" "}
              <strong>Direito do Trabalho Empresarial</strong>{" "}
              <span
                style={{
                  background: "rgba(232,119,34,.15)",
                  padding: "2px 6px",
                  borderRadius: "4px",
                  color: "#0B1F3A",
                  fontWeight: 600,
                }}
              >
                [Dra. NOME DA ADVOGADA — OAB/UF 000.000 — Pendente de Validação]
              </span>{" "}
              e estrategista em Gestão e Prevenção de Passivos Trabalhistas para
              empresas.
            </p>
            <p
              style={{
                margin: 0,
                color: "#3C4A5E",
                fontSize: "15px",
                lineHeight: 1.75,
              }}
            >
              Ao longo de anos de atuação orientando micro, pequenas e médias
              empresas, identificou que mais de 80% das ações trabalhistas
              nascem de falhas simples que poderiam ter sido evitadas com
              documentação e treinamento básico. O método{" "}
              <strong>Empresário Imune</strong> nasceu para democratizar a
              segurança jurídica sem termos difíceis e com foco total na
              preservação do lucro.
            </p>

            <Link
              href="/#oferta"
              className="btn-primary"
              style={{ alignSelf: "flex-start", marginTop: "8px" }}
            >
              Quero blindar minha empresa agora
            </Link>
          </div>

          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: "320px",
                height: "320px",
                background: "linear-gradient(160deg,#0B1F3A,#14335C)",
                borderRadius: "50% 50% 28px 28px",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: "340px",
                height: "340px",
                border: "1px dashed rgba(232,119,34,.5)",
                borderRadius: "50%",
                animation: "ei-spin 34s linear infinite",
              }}
            />
            <Image
              src="/assets/images/APROVADA-05-scaled.jpg"
              alt="Advogada especialista em Direito do Trabalho Empresarial, autora do método Empresário Imune"
              width={380}
              height={430}
              loading="lazy"
              style={{
                position: "relative",
                maxHeight: "430px",
                filter: "drop-shadow(0 18px 32px rgba(11,31,58,.35))",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SEÇÃO DE DEPOIMENTOS / PROVAS
         ========================================================================= */}
      <section
        id="depoimentos"
        data-screen-label="Depoimentos"
        style={{ background: "#0B1F3A", padding: "76px 0", overflow: "hidden" }}
      >
        <div
          className="ei-wrap"
          style={{
            textAlign: "center",
            maxWidth: "760px",
            marginBottom: "36px",
          }}
        >
          <span className="eyebrow-dark">Quer uma prova?</span>
          <h2
            style={{
              margin: "10px 0 0",
              color: "#F7F3EA",
              fontSize: "clamp(23px,2.8vw,30px)",
              fontWeight: 800,
            }}
          >
            O que estão falando sobre o e-book
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            width: "max-content",
            animation: "ei-marquee 46s linear infinite",
            paddingBottom: "18px",
          }}
        >
          <div style={{ display: "flex", gap: "16px" }}>
            <div
              style={{
                width: "340px",
                background: "#122A4C",
                border: "1px solid #1E3E68",
                borderRadius: "18px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <span
                style={{
                  color: "#F2A051",
                  fontSize: "13px",
                  letterSpacing: "2px",
                }}
              >
                ★★★★★
              </span>
              <p
                style={{
                  margin: 0,
                  color: "#E7ECF3",
                  fontSize: "13.5px",
                  lineHeight: 1.7,
                }}
              >
                Depois de aplicar o método, ajustamos contratos e evitamos duas
                ações trabalhistas em menos de 3 meses.
              </p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <Image
                  src="/assets/images/avatar-cm.png"
                  alt="Carlos Menezes - CEO do Grupo Alfa"
                  width={40}
                  height={40}
                  loading="lazy"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <div
                    style={{
                      color: "#F7F3EA",
                      fontSize: "13px",
                      fontWeight: 700,
                    }}
                  >
                    Carlos Menezes
                  </div>
                  <div style={{ color: "#8FA0B8", fontSize: "11.5px" }}>
                    CEO do Grupo Alfa
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                width: "340px",
                background: "#122A4C",
                border: "1px solid #1E3E68",
                borderRadius: "18px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <span
                style={{
                  color: "#F2A051",
                  fontSize: "13px",
                  letterSpacing: "2px",
                }}
              >
                ★★★★★
              </span>
              <p
                style={{
                  margin: 0,
                  color: "#E7ECF3",
                  fontSize: "13.5px",
                  lineHeight: 1.7,
                }}
              >
                Direto, prático, e fez o jurídico deixar de ser um problema e
                virar um aliado. Sem complicações.
              </p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <Image
                  src="/assets/images/avatar-fl.png"
                  alt="Fernanda L. - Setor de serviços"
                  width={40}
                  height={40}
                  loading="lazy"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <div
                    style={{
                      color: "#F7F3EA",
                      fontSize: "13px",
                      fontWeight: 700,
                    }}
                  >
                    Fernanda L.
                  </div>
                  <div style={{ color: "#8FA0B8", fontSize: "11.5px" }}>
                    Setor de serviços
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                width: "340px",
                background: "#122A4C",
                border: "1px solid #1E3E68",
                borderRadius: "18px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <span
                style={{
                  color: "#F2A051",
                  fontSize: "13px",
                  letterSpacing: "2px",
                }}
              >
                ★★★★★
              </span>
              <p
                style={{
                  margin: 0,
                  color: "#E7ECF3",
                  fontSize: "13.5px",
                  lineHeight: 1.7,
                }}
              >
                Revisamos o processo de demissão inteiro em uma tarde. O
                checklist sozinho já paga o e-book.
              </p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <Image
                  src="/assets/images/avatar-ra.png"
                  alt="Ricardo A. - Indústria 120 colaboradores"
                  width={40}
                  height={40}
                  loading="lazy"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <div
                    style={{
                      color: "#F7F3EA",
                      fontSize: "13px",
                      fontWeight: 700,
                    }}
                  >
                    Ricardo A.
                  </div>
                  <div style={{ color: "#8FA0B8", fontSize: "11.5px" }}>
                    Indústria · 120 colaboradores
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                width: "340px",
                background: "#122A4C",
                border: "1px solid #1E3E68",
                borderRadius: "18px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <span
                style={{
                  color: "#F2A051",
                  fontSize: "13px",
                  letterSpacing: "2px",
                }}
              >
                ★★★★★
              </span>
              <p
                style={{
                  margin: 0,
                  color: "#E7ECF3",
                  fontSize: "13.5px",
                  lineHeight: 1.7,
                }}
              >
                Meu RH passou a documentar tudo. Hoje durmo tranquila sabendo que
                a empresa está protegida.
              </p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <Image
                  src="/assets/images/avatar-pm.png"
                  alt="Patrícia M. - Rede de clínicas"
                  width={40}
                  height={40}
                  loading="lazy"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <div
                    style={{
                      color: "#F7F3EA",
                      fontSize: "13px",
                      fontWeight: 700,
                    }}
                  >
                    Patrícia M.
                  </div>
                  <div style={{ color: "#8FA0B8", fontSize: "11.5px" }}>
                    Rede de clínicas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "22px",
          }}
        >
          <Link
            href="/#oferta"
            className="btn-primary"
            style={{ fontSize: "13px" }}
          >
            Quero esse resultado na minha empresa
          </Link>
        </div>
      </section>

      {/* =========================================================================
          SEÇÃO DE OFERTA COM GARANTIA
          - Preço: R$ 997,00 ou 12x R$ 97,00
          - 3 Bônus
          - Garantia incondicional de 7 dias
         ========================================================================= */}
      <section
        id="oferta"
        data-screen-label="Oferta"
        style={{
          background: "#F3EEE5",
          padding: "84px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="ei-wrap"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "26px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "14px",
              maxWidth: "800px",
            }}
          >
            <span
              className="eyebrow-light"
              style={{
                background: "#E87722",
                color: "#0B1F3A",
                padding: "8px 18px",
                borderRadius: "999px",
                animation: "ei-pulse 2.6s infinite",
              }}
            >
              Acesso Imediato
            </span>
            <h2
              style={{
                margin: 0,
                color: "#0B1F3A",
                fontSize: "clamp(23px,3vw,32px)",
                fontWeight: 800,
                lineHeight: 1.32,
              }}
            >
              Por{" "}
              <span style={{ color: "#D96F14" }}>
                menos que o custo de uma hora de consultoria
              </span>
              , você previne passivos de até seis dígitos
            </h2>
          </div>

          <div
            style={{
              width: "100%",
              maxWidth: "760px",
              background: "linear-gradient(160deg,#0B1F3A,#14335C)",
              borderRadius: "26px",
              padding: "40px 34px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              boxShadow: "0 30px 60px rgba(11,31,58,.28)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(110deg,transparent 30%,rgba(255,255,255,.07) 50%,transparent 70%)",
                backgroundSize: "220% 100%",
                animation: "ei-shimmer 4.5s linear infinite",
                pointerEvents: "none",
              }}
            />
            <span
              style={{
                color: "#C7D0DE",
                fontSize: "14px",
                position: "relative",
              }}
            >
              E-book Empresário Imune + 3 Bônus de Implementação
            </span>

            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "8px",
                position: "relative",
              }}
            >
              <span
                style={{
                  color: "#F2A051",
                  fontSize: "24px",
                  fontWeight: 700,
                }}
              >
                12x de R$
              </span>
              <span
                style={{
                  color: "#F7F3EA",
                  fontSize: "clamp(62px,10vw,92px)",
                  fontWeight: 900,
                  lineHeight: 1,
                }}
              >
                97,00
              </span>
            </div>
            <span
              style={{
                color: "#fff",
                fontSize: "18px",
                position: "relative",
              }}
            >
              ou <strong>R$ 997,00 à vista</strong> com acesso imediato
            </span>

            <div
              className="ei-c2"
              style={{
                width: "100%",
                maxWidth: "600px",
                position: "relative",
                margin: "6px 0",
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,.06)",
                  border: "1px solid #1E3E68",
                  borderRadius: "12px",
                  padding: "14px",
                  color: "#F7F3EA",
                  fontSize: "13px",
                  fontWeight: 600,
                  textAlign: "left",
                }}
              >
                ✓ E-book completo e atualizado{" "}
                <span style={{ color: "#CF0000", fontSize: "12px" }}>
                  <s>R$1.200,00</s>
                </span>
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,.06)",
                  border: "1px solid #1E3E68",
                  borderRadius: "12px",
                  padding: "14px",
                  color: "#F7F3EA",
                  fontSize: "13px",
                  fontWeight: 600,
                  textAlign: "left",
                }}
              >
                ✓ Checklist dos 10 erros fatais{" "}
                <span style={{ color: "#CF0000", fontSize: "12px" }}>
                  <s>R$1.050,00</s>
                </span>
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,.06)",
                  border: "1px solid #1E3E68",
                  borderRadius: "12px",
                  padding: "14px",
                  color: "#F7F3EA",
                  fontSize: "13px",
                  fontWeight: 600,
                  textAlign: "left",
                }}
              >
                ✓ Planilha de risco trabalhista{" "}
                <span style={{ color: "#CF0000", fontSize: "12px" }}>
                  <s>R$1.300,00</s>
                </span>
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,.06)",
                  border: "1px solid #1E3E68",
                  borderRadius: "12px",
                  padding: "14px",
                  color: "#F7F3EA",
                  fontSize: "13px",
                  fontWeight: 600,
                  textAlign: "left",
                }}
              >
                ✓ Modelos de documentos prontos{" "}
                <span style={{ color: "#CF0000", fontSize: "12px" }}>
                  <s>R$926,00</s>
                </span>
              </div>
            </div>

            <a
              href="https://wa.me/5521986450256?text=Quero%20garantir%20meu%20acesso%20ao%20Empres%C3%A1rio%20Imune"
              className="btn-primary"
              style={{
                fontSize: "15px",
                padding: "19px 42px",
                position: "relative",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Garantir meu acesso agora
            </a>
            <span
              style={{
                color: "#8FA0B8",
                fontSize: "12px",
                position: "relative",
              }}
            >
              Compra 100% segura · Acesso digital liberado imediatamente
            </span>
          </div>

          {/* Garantia 7 dias */}
          <div
            className="ei-row"
            style={{
              width: "100%",
              maxWidth: "760px",
              background: "#FBF8F1",
              border: "1px solid #E4DCCB",
              borderRadius: "20px",
              padding: "24px 28px",
              display: "flex",
              alignItems: "center",
              gap: "22px",
              textAlign: "left",
            }}
          >
            <span
              style={{
                width: "62px",
                height: "62px",
                border: "2px dashed #E87722",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#D96F14",
                fontSize: "11px",
                fontWeight: 900,
                textAlign: "center",
                lineHeight: 1.1,
                flexShrink: 0,
                animation: "ei-spin 18s linear infinite",
              }}
            >
              7<br />
              DIAS
            </span>
            <div>
              <h3
                style={{
                  margin: 0,
                  color: "#0B1F3A",
                  fontSize: "16px",
                  fontWeight: 800,
                }}
              >
                Garantia Incondicional de 7 Dias
              </h3>
              <p
                style={{
                  margin: "5px 0 0",
                  color: "#3C4A5E",
                  fontSize: "13.5px",
                  lineHeight: 1.6,
                }}
              >
                Se em até 7 dias você achar que as estratégias e documentos não
                agregam valor imediato à sua empresa, devolvemos 100% do seu
                investimento. Sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQ SECTION (COM ACCORDION E SCHEMA FAQPAGE)
          - H2: Perguntas frequentes sobre prevenção de passivo trabalhista
         ========================================================================= */}
      <FaqSection />

      {/* =========================================================================
          FECHAMENTO / CTA FINAL
         ========================================================================= */}
      <section
        data-screen-label="CTA final"
        style={{ background: "#0B1F3A", padding: "56px 0" }}
      >
        <div className="ei-wrap">
          <div
            className="ei-row"
            style={{
              background: "linear-gradient(120deg,#122A4C,#0E2544)",
              border: "1px solid rgba(242,160,81,.28)",
              borderRadius: "22px",
              padding: "34px 40px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <span
                style={{
                  width: "56px",
                  height: "56px",
                  background: "#E87722",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0B1F3A",
                  fontSize: "24px",
                  fontWeight: 900,
                  flexShrink: 0,
                  animation: "ei-float-s 3.6s ease-in-out infinite",
                }}
              >
                ✓
              </span>
              <div>
                <p
                  style={{
                    margin: 0,
                    color: "#F7F3EA",
                    fontSize: "19px",
                    fontWeight: 800,
                  }}
                >
                  Não espere a notificação judicial chegar.
                </p>
                <p
                  style={{
                    margin: "3px 0 0",
                    color: "#C7D0DE",
                    fontSize: "14px",
                  }}
                >
                  Antecipe-se. Proteja seu lucro. Cresça com segurança jurídica.
                </p>
              </div>
            </div>
            <Link
              href="/#oferta"
              className="btn-primary"
              style={{ flexShrink: 0 }}
            >
              Quero me tornar Empresário Imune
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
