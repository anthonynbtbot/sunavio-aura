import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

/**
 * Container fluide centré, padding latéral cohérent.
 */
export function Container({
  className,
  size = "default",
  children,
  ...props
}: ContainerProps) {
  const widthCls =
    size === "narrow" ? "max-w-3xl" : size === "wide" ? "max-w-[1400px]" : "max-w-6xl";

  return (
    <div
      className={cn("mx-auto w-full px-5 md:px-8 lg:px-10", widthCls, className)}
      {...props}
    >
      {children}
    </div>
  );
}
