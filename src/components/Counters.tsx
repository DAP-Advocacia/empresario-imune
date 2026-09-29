"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
}

function CounterItem({ end, suffix = "", label }: CounterProps) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const t0 = performance.now();
          const duration = 1400;

          const tick = (now: number) => {
            const progress = Math.min((now - t0) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setVal(Math.round(end * easeOut));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div
      ref={ref}
      className="card-interactive"
      style={{
        background: "#0B1F3A",
        borderRadius: "20px",
        padding: "28px 24px",
        textAlign: "center",
      }}
    >
      <span
        style={{
          display: "block",
          color: "#F2A051",
          fontSize: "40px",
          fontWeight: 900,
        }}
      >
        {val}
        {suffix}
      </span>
      <span
        style={{
          color: "#C7D0DE",
          fontSize: "13px",
          lineHeight: 1.5,
          display: "block",
          marginTop: "6px",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function Counters() {
  return (
    <section
      data-screen-label="Números"
      style={{ background: "#F3EEE5", padding: "0 0 84px" }}
    >
      <div className="ei-wrap ei-c4">
        <CounterItem
          end={70}
          suffix="%"
          label="de redução estimada nos riscos trabalhistas operacionais"
        />
        <CounterItem
          end={5}
          label="pilares do Sistema Imune Jurídico"
        />
        <CounterItem
          end={10}
          label="erros que mais geram ações mapeados em detalhes"
        />
        <CounterItem
          end={100}
          suffix="%"
          label="orientações práticas, sem juridiquês"
        />
      </div>
    </section>
  );
}
