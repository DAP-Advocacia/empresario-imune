"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { COUNTERS } from "@/data/home";

function CounterItem({ end, suffix, label }: (typeof COUNTERS)[number]) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, end, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, end]);

  return (
    <StaggerItem className="stat">
      <span ref={ref} className="stat__value">
        {val}
        {suffix}
      </span>
      <span className="stat__label">{label}</span>
    </StaggerItem>
  );
}

export default function Counters() {
  return (
    <Stagger className="stats">
      {COUNTERS.map((c) => (
        <CounterItem key={c.label} {...c} />
      ))}
    </Stagger>
  );
}
