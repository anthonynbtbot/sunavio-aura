import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { AnimatedText } from "@/components/atoms/AnimatedText";
import { SunavioButton } from "@/components/atoms/SunavioButton";
import { Link } from "react-router-dom";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 md:pt-0">
      {/* Halo orange en haut-droite, pulsé */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-hero-glow animate-glow-pulse"
      />
      {/* Grille verticale subtile */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--wh)) 1px, transparent 1px)",
          backgroundSize: "120px 100%",
        }}
      />

      <Container size="wide" className="relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <Eyebrow>Énergie solaire premium · Marrakech</Eyebrow>
          </motion.div>

          <AnimatedText
            as="h1"
            trigger="mount"
            delay={0.2}
            text="Produire son énergie, reprendre le contrôle."
            accentWords={["contrôle"]}
            className="mt-6 font-display text-display-hero text-wh"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
            className="mt-8 max-w-2xl text-body-lg text-gr"
          >
            Solutions solaires sur-mesure pour villas, hôtels et domaines d'exception.
            Micro-réseaux intelligents, stockage batterie, ingénierie marocaine.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.05 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <SunavioButton size="lg" asChild>
              <a href="https://estimer.sunavio.com" target="_blank" rel="noreferrer">
                Estimer mon projet <ArrowRight />
              </a>
            </SunavioButton>
            <SunavioButton size="lg" variant="secondary" asChild>
              <Link to="/contact">Nous contacter</Link>
            </SunavioButton>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-eyebrow text-gr2">Scroll</span>
          <div className="relative h-12 w-px bg-line">
            <span className="absolute inset-x-0 top-0 mx-auto h-6 w-px origin-center bg-or animate-scroll-indicator" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
