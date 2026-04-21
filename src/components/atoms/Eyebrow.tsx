import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

/**
 * Petit label monospace au-dessus d'un titre.
 * Ex : "ÉNERGIE SOLAIRE PREMIUM · MARRAKECH"
 */
export function Eyebrow({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-eyebrow",
        // petit point devant
        "before:inline-block before:h-1 before:w-1 before:rounded-full before:bg-or",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
