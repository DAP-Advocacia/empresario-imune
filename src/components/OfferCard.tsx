import { ArrowRight, Check, Lock } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import MagneticButton from "@/components/motion/MagneticButton";
import { OFFER_ITEMS, WHATSAPP_URL } from "@/data/home";

/** Card de preço da oferta (usado no método e na seção de oferta). */
export default function OfferCard({ className }: { className?: string }) {
  return (
    <Reveal direction="scale" className={`offer${className ? ` ${className}` : ""}`}>
      <div className="offer__shine" aria-hidden="true" />
      <div className="offer__grid">
        <div className="offer__price">
          <span className="offer__kicker">
            E-book Empresário Imune + 3 Bônus de Implementação
          </span>
          <span className="offer__from">
            de <s>R$ 997,00</s> por apenas
          </span>
          <div className="offer__value">
            <span className="offer__prefix">R$</span>
            <span className="offer__amount">98,00</span>
          </div>
          <span className="offer__cash">
            Pagamento único com <strong>acesso imediato</strong>
          </span>
          <MagneticButton>
            <a
              href={WHATSAPP_URL}
              className="btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Garantir meu acesso agora
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </MagneticButton>
          <span className="offer__secure">
            <Lock size={13} aria-hidden="true" />
            Compra 100% segura · Acesso digital liberado imediatamente
          </span>
        </div>

        <ul className="offer__items">
          {OFFER_ITEMS.map((o) => (
            <li key={o.label}>
              <span className="checklist__icon" aria-hidden="true">
                <Check size={14} strokeWidth={3} />
              </span>
              <span className="offer__label">{o.label}</span>
              <s className="offer__was">{o.was}</s>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
