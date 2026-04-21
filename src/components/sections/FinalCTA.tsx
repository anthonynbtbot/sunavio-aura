import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/atoms/Container";
import { AnimatedText } from "@/components/atoms/AnimatedText";
import { Reveal } from "@/components/atoms/Reveal";
import { SunavioButton } from "@/components/atoms/SunavioButton";

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-bg py-32 md:py-40">
      {/* Halo radial */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cta-final-glow"
      />
      {/* Halo secondaire pulsé */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-or/10 blur-[120px] animate-glow-pulse"
      />

      <Container size="wide" className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedText
            as="h2"
            text="Prêt à reprendre le contrôle de votre énergie ?"
            accentWords={["énergie"]}
            className="font-display text-display-hero text-wh"
          />

          <Reveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-2xl text-body-lg text-gr">
              Parlons de votre projet. Estimation en ligne ou rendez-vous en visite.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <SunavioButton size="lg" asChild>
                <a href="https://estimer.sunavio.com">
                  Estimer mon projet <ArrowRight />
                </a>
              </SunavioButton>
              <SunavioButton size="lg" variant="secondary" asChild>
                <Link to="/contact">Prendre rendez-vous</Link>
              </SunavioButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
