import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ElementType } from "react";

interface AnimatedTextProps {
  text: string;
  /** Mots à styliser en accent doré (insensible à la casse, sans ponctuation). */
  accentWords?: string[];
  /** Trigger : "view" (au scroll) ou "mount" (au montage). */
  trigger?: "view" | "mount";
  className?: string;
  as?: ElementType;
  /** Délai de démarrage du stagger. */
  delay?: number;
  /** Stagger entre les mots, en secondes. */
  stagger?: number;
}

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Titre révélé mot-par-mot avec stagger. Mots accent en gradient doré.
 */
export function AnimatedText({
  text,
  accentWords = [],
  trigger = "view",
  className,
  as: Tag = "h2",
  delay = 0,
  stagger = 0.08,
}: AnimatedTextProps) {
  const reduced = useReducedMotion();
  const accentSet = new Set(accentWords.map((w) => w.toLowerCase()));
  const words = text.split(" ");

  const containerProps =
    trigger === "view"
      ? { whileInView: "visible", viewport: { once: true, amount: 0.3 } }
      : { animate: "visible" };

  if (reduced) {
    return (
      <Tag className={className}>
        {words.map((word, i) => {
          const clean = word.toLowerCase().replace(/[.,!?;:]/g, "");
          const accent = accentSet.has(clean);
          return (
            <span key={i} className={accent ? "text-accent-gradient" : undefined}>
              {word}
              {i < words.length - 1 ? " " : ""}
            </span>
          );
        })}
      </Tag>
    );
  }

  return (
    <Tag className={className}>
      <motion.span
        initial="hidden"
        {...containerProps}
        transition={{ staggerChildren: stagger, delayChildren: delay }}
        style={{ display: "inline" }}
      >
        {words.map((word, i) => {
          const clean = word.toLowerCase().replace(/[.,!?;:]/g, "");
          const accent = accentSet.has(clean);
          return (
            <span
              key={i}
              className="inline-block overflow-hidden align-baseline"
              // petit padding bottom pour ne pas couper les jambages italiques
              style={{ paddingBottom: "0.12em", marginBottom: "-0.12em" }}
            >
              <motion.span
                className={cn("inline-block", accent && "text-accent-gradient")}
                variants={{
                  hidden: { y: "110%", opacity: 0 },
                  visible: { y: "0%", opacity: 1 },
                }}
                transition={{ duration: 0.9, ease: EASE }}
              >
                {word}
                {i < words.length - 1 ? "\u00A0" : ""}
              </motion.span>
            </span>
          );
        })}
      </motion.span>
    </Tag>
  );
}
