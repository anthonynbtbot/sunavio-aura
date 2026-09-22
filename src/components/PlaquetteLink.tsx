import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const PLAQUETTE_URL = "/SUNAVIO_Plaquette_Solutions_Industrie.pdf";

export function trackPlaquetteDownload() {
  if (typeof window === "undefined") return;
  const w = window as typeof window & { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: "download_plaquette" });
}

/** Lien de téléchargement de la plaquette commerciale (nouvel onglet + événement GTM). */
export function PlaquetteLink({
  className,
  children = "Télécharger notre plaquette",
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a
      href={PLAQUETTE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackPlaquetteDownload}
      className={cn(
        "inline-flex h-14 items-center justify-center rounded-md border border-line px-8 font-semibold text-wh transition hover:border-or",
        className,
      )}
    >
      {children}
    </a>
  );
}
