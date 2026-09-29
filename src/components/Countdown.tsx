"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const pad = (v: number) => String(v).padStart(2, "0");

function secondsToMidnight() {
  const now = new Date();
  const end = new Date(now);
  end.setHours(24, 0, 0, 0);
  return Math.max(0, Math.floor((end.getTime() - now.getTime()) / 1000));
}

export default function Countdown() {
  const [secs, setSecs] = useState<number | null>(null);

  useEffect(() => {
    setSecs(secondsToMidnight());
    const interval = setInterval(() => setSecs(secondsToMidnight()), 1000);
    return () => clearInterval(interval);
  }, []);

  const s = secs ?? 0;
  const units = [
    { label: "Horas", value: pad(Math.floor(s / 3600)) },
    { label: "Minutos", value: pad(Math.floor((s % 3600) / 60)) },
    { label: "Segundos", value: pad(s % 60) },
  ];

  return (
    <div className="ei-wrap">
      <Reveal direction="scale" className="countdown">
        <div className="countdown__copy">
          <span className="countdown__icon" aria-hidden="true">
            <Clock size={20} />
          </span>
          <div>
            <p className="countdown__kicker">Condição especial com bônus inclusos</p>
            <p className="countdown__title">Esta oferta expira em...</p>
          </div>
        </div>
        <div className="countdown__units" role="timer" aria-live="off">
          {units.map((u) => (
            <div key={u.label} className="countdown__unit">
              <span className="countdown__value">{u.value}</span>
              <span className="countdown__label">{u.label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
