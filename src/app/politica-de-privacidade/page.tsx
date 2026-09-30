import type { Metadata } from "next";
import Link from "next/link";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade | Empresário Imune",
  description:
    "Conheça as diretrizes de privacidade, tratamento de dados e segurança do site Empresário Imune, em conformidade com a LGPD.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PoliticaPrivacidadePage() {
  return (
    <div style={{ background: "#F3EEE5", color: "#0B1F3A", padding: "60px 0 90px" }}>
      <div className="ei-wrap" style={{ maxWidth: "860px" }}>
        <nav style={{ marginBottom: "24px", fontSize: "13px" }} aria-label="Breadcrumb">
          <Link href="/" style={{ color: "#D96F14", fontWeight: 600 }}>
            Início
          </Link>{" "}
          / <span style={{ color: "#3C4A5E" }}>Política de Privacidade</span>
        </nav>

        <span className="eyebrow-light">
          <Shield size={12} aria-hidden="true" />
          Transparência e Segurança
        </span>
        <h1
          style={{
            margin: "12px 0 24px",
            fontSize: "clamp(26px, 3.5vw, 38px)",
            fontWeight: 800,
            color: "#0B1F3A",
            lineHeight: 1.25,
          }}
        >
          Política de Privacidade e Proteção de Dados
        </h1>

        <div className="blog-content">
          <p>
            A sua privacidade e a proteção dos seus dados pessoais são prioridades para o <strong>Empresário Imune</strong>. Esta Política de Privacidade descreve de forma clara e transparente como coletamos, usamos, armazenamos e protegemos suas informações ao navegar pelo nosso site ou adquirir nossos materiais e e-books, em total conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD).
          </p>

          <h2>1. Dados Pessoais Coletados</h2>
          <p>
            Podemos coletar as seguintes categorias de informações:
          </p>
          <ul>
            <li><strong>Dados de Identificação e Contato:</strong> Nome completo, endereço de e-mail, número de telefone/WhatsApp e dados da empresa quando fornecidos voluntariamente através de formulários de contato ou checkout.</li>
            <li><strong>Dados de Pagamento:</strong> Processados de forma criptografada por plataformas parceiras de pagamento seguras. O Empresário Imune não armazena números de cartões de crédito.</li>
            <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, páginas visualizadas e tempo de permanência, coletados por meio de cookies para melhoria contínua da experiência do usuário.</li>
          </ul>

          <h2>2. Finalidade do Tratamento de Dados</h2>
          <p>
            Os dados coletados são utilizados exclusivamente para:
          </p>
          <ul>
            <li>Viabilizar a entrega e o acesso digital imediato ao e-book Empresário Imune e seus bônus;</li>
            <li>Prestar suporte ao cliente e esclarecer dúvidas sobre os materiais adquiridos;</li>
            <li>Enviar comunicações sobre atualizações do conteúdo e novidades jurídicas preventivas (com opção de cancelamento a qualquer momento);</li>
            <li>Cumprir obrigações legais, regulatórias e fiscais aplicáveis.</li>
          </ul>

          <h2>3. Compartilhamento Seguro de Dados</h2>
          <p>
            Não vendemos nem alugamos seus dados pessoais a terceiros. O compartilhamento ocorre estritamente com fornecedores de tecnologia essenciais à operação (plataformas de checkout, hospedagem e serviços de disparo de e-mail), todos submetidos a rígidos padrões de confidencialidade e segurança.
          </p>

          <h2>4. Direitos do Titular dos Dados (LGPD)</h2>
          <p>
            Em conformidade com o artigo 18 da LGPD, você tem o direito de, a qualquer momento:
          </p>
          <ul>
            <li>Confirmar a existência de tratamento de seus dados;</li>
            <li>Acessar ou solicitar a correção de dados incompletos ou desatualizados;</li>
            <li>Solicitar a eliminação ou anonimização de dados desnecessários;</li>
            <li>Revogar o consentimento para recebimento de comunicações institucionais.</li>
          </ul>

          <h2>5. Segurança das Informações</h2>
          <p>
            Adotamos medidas técnicas e administrativas aptas a proteger seus dados contra acessos não autorizados, perdas ou alterações ilícitas. Nossas conexões utilizam certificado de segurança SSL com criptografia de ponta a ponta.
          </p>

          <h2>6. Contato com o Encarregado de Dados (DPO)</h2>
          <p>
            Para exercer seus direitos ou esclarecer qualquer dúvida sobre o tratamento de seus dados pessoais, entre em contato pelo e-mail oficial ou canal de atendimento:
          </p>
          <blockquote>
            <strong>Empresário Imune</strong><br />
            Encarregado de Proteção de Dados: [contato@empresarioimune.com.br - Pendente de Validação]<br />
            WhatsApp: (21) 98645-0256<br />
            Av. das Américas, 3443 – Barra da Tijuca, Rio de Janeiro – RJ
          </blockquote>

          <p style={{ marginTop: "32px", fontSize: "14px", color: "#8FA0B8" }}>
            Última atualização: 29 de setembro de 2026.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <Link href="/" className="btn-primary">
            ← Voltar para a Página Principal
          </Link>
        </div>
      </div>
    </div>
  );
}
