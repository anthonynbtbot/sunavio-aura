import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/atoms/Container";

/**
 * Bandeau de confiance — affiché en haut de la home, sous le hero.
 * Signal légal fort : société marocaine immatriculée.
 */
export function TrustBanner() {
  return (
    <aside
      aria-label="Informations légales SUNAVIO"
      className="relative border-y border-or/20 bg-bg2/60"
    >
      <Container size="wide" className="py-4">
        <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-4 sm:text-left">
          <ShieldCheck className="h-5 w-5 shrink-0 text-or" aria-hidden />
          <p className="text-sm leading-relaxed text-gr">
            <span className="text-wh">Société marocaine légitime</span>
            <span className="mx-2 text-gr2">·</span>
            SUNAVIO SARL
            <span className="mx-2 text-gr2">·</span>
            <span className="font-mono text-xs uppercase tracking-widest text-or">RC 164901 Marrakech</span>
            <span className="mx-2 text-gr2">·</span>
            ICE 003721552000008
          </p>
        </div>
      </Container>
    </aside>
  );
}
