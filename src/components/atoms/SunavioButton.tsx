import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Bouton SUNAVIO custom — variantes premium dark + or.
 * Hover : remplissage gauche → droite via pseudo-element.
 */
const sunavioButtonVariants = cva(
  [
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden",
    "whitespace-nowrap font-medium tracking-tight",
    "transition-all duration-400 ease-out-expo",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-or focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:scale-[0.98]",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-400 [&_svg]:ease-out-expo",
    "hover:[&_svg]:translate-x-1",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-or text-bg border border-or",
          "hover:shadow-cta",
          // overlay or2 qui scale-x au hover
          "before:pointer-events-none before:absolute before:inset-0 before:bg-or2 before:origin-left before:scale-x-0 before:transition-transform before:duration-500 before:ease-out-expo",
          "hover:before:scale-x-100",
        ],
        secondary: [
          "bg-transparent text-wh border border-line",
          "hover:border-or hover:text-or",
          "before:pointer-events-none before:absolute before:inset-0 before:bg-or/5 before:origin-left before:scale-x-0 before:transition-transform before:duration-500 before:ease-out-expo",
          "hover:before:scale-x-100",
        ],
        ghost: [
          "bg-transparent text-gr border border-transparent",
          "hover:text-or",
        ],
      },
      size: {
        sm: "h-9 px-4 text-xs rounded-md",
        md: "h-11 px-6 text-sm rounded-md",
        lg: "h-14 px-8 text-base rounded-md",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface SunavioButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof sunavioButtonVariants> {
  asChild?: boolean;
}

export const SunavioButton = React.forwardRef<HTMLButtonElement, SunavioButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(sunavioButtonVariants({ variant, size }), className)}
        {...props}
      >
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </Comp>
    );
  },
);
SunavioButton.displayName = "SunavioButton";

export { sunavioButtonVariants };
