"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ h: "00", m: "00", s: "00" });

  useEffect(() => {
    const pad = (v: number) => String(v).padStart(2, "0");
    const updateCountdown = () => {
      const now = new Date();
      const end = new Date(now);
      end.setHours(24, 0, 0, 0);
      let secondsRemaining = Math.max(
        0,
        Math.floor((end.getTime() - now.getTime()) / 1000)
      );
      const hours = Math.floor(secondsRemaining / 3600);
      secondsRemaining -= hours * 3600;
      const minutes = Math.floor(secondsRemaining / 60);
      secondsRemaining -= minutes * 60;

      setTimeLeft({
        h: pad(hours),
        m: pad(minutes),
        s: pad(secondsRemaining),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section data-screen-label="Contador" style={{ background: "#0B1F3A", padding: "44px 0" }}>
      <div className="ei-wrap">
        <div
          className="ei-row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "26px",
            flexWrap: "wrap",
            background: "linear-gradient(135deg,#122A4C,#0E2544)",
            border: "1px solid rgba(242,160,81,.28)",
            borderRadius: "20px",
            padding: "26px 34px",
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                color: "#F2A051",
                fontSize: "11.5px",
                fontWeight: 800,
                letterSpacing: ".18em",
                textTransform: "uppercase",
              }}
            >
              Condição especial com bônus inclusos
            </p>
            <p
              style={{
                margin: "6px 0 0",
                color: "#F7F3EA",
                fontSize: "20px",
                fontWeight: 800,
              }}
            >
              Esta oferta expira em...
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <div
              style={{
                background: "#0B1F3A",
                border: "1px solid #1E3E68",
                borderRadius: "12px",
                padding: "12px 16px",
                minWidth: "78px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  display: "block",
                  color: "#F2A051",
                  fontSize: "30px",
                  fontWeight: 800,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {timeLeft.h}
              </span>
              <span
                style={{
                  color: "#8FA0B8",
                  fontSize: "10.5px",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                }}
              >
                Horas
              </span>
            </div>
            <div
              style={{
                background: "#0B1F3A",
                border: "1px solid #1E3E68",
                borderRadius: "12px",
                padding: "12px 16px",
                minWidth: "78px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  display: "block",
                  color: "#F2A051",
                  fontSize: "30px",
                  fontWeight: 800,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {timeLeft.m}
              </span>
              <span
                style={{
                  color: "#8FA0B8",
                  fontSize: "10.5px",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                }}
              >
                Minutos
              </span>
            </div>
            <div
              style={{
                background: "#0B1F3A",
                border: "1px solid #1E3E68",
                borderRadius: "12px",
                padding: "12px 16px",
                minWidth: "78px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  display: "block",
                  color: "#F2A051",
                  fontSize: "30px",
                  fontWeight: 800,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {timeLeft.s}
              </span>
              <span
                style={{
                  color: "#8FA0B8",
                  fontSize: "10.5px",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                }}
              >
                Segundos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
