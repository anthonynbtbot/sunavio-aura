import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Stagger des enfants directs si `staggerChildren` > 0. */
  staggerChildren?: number;
  amount?: number;
}

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Wrapper "fade + translateY" déclenché à 20% de visibilité (par défaut).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 40,
  staggerChildren = 0,
  amount = 0.2,
}: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren, delayChildren: delay } },
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: EASE, delay },
          },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
