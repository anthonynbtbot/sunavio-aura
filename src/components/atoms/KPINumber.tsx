import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface KPINumberProps {
  value: number;
  /** Suffixe affiché après le chiffre, ex : "%", " kWc", " ans". */
  suffix?: string;
  prefix?: string;
  /** Décimales à afficher. */
  decimals?: number;
  /** Durée d'incrémentation en ms. */
  duration?: number;
  className?: string;
  /** Séparateur de milliers. */
  separator?: string;
}

/**
 * Compteur incrémenté de 0 → value à l'entrée dans le viewport.
 * Easing ease-out, requestAnimationFrame.
 */
export function KPINumber({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1500,
  className,
  separator = " ",
}: KPINumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(value * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  const formatted = display
    .toFixed(decimals)
    .replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  return (
    <span ref={ref} className={cn("font-mono tabular-nums", className)}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
