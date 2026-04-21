import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sun, Zap, TrendingUp } from "lucide-react";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { AnimatedText } from "@/components/atoms/AnimatedText";
import { Reveal } from "@/components/atoms/Reveal";
import { SunavioButton } from "@/components/atoms/SunavioButton";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Simulator() {
  const reduced = useReducedMotion();

  return (
    <section className="relative bg-bg3 py-24 md:py-32 lg:py-40">
      <Container size="wide">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Texte */}
          <div>
            <Reveal>
              <Eyebrow>Estimation instantanée</Eyebrow>
            </Reveal>

            <AnimatedText
              as="h2"
              text="Combien peut produire votre toit ?"
              accentWords={["votre", "toit"]}
              className="mt-6 font-display text-display-section text-wh"
            />

            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-body text-gr">
                Une estimation technique précise en 2 minutes : puissance installable,
                production annuelle, économies réalisées, retour sur investissement.
                Notre simulateur utilise les données ONEE, l'ensoleillement réel
                Marrakech et les tarifs équipements actualisés.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10">
                <SunavioButton size="lg" asChild>
                  <a href="https://estimer.sunavio.com" target="_blank" rel="noreferrer">
                    Lancer le simulateur <ArrowRight />
                  </a>
                </SunavioButton>
              </div>
            </Reveal>
          </div>

          {/* Mockup */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 60, rotate: -2 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: EASE }}
            className="relative"
          >
            {/* Halo or */}
            <div
              aria-hidden
              className="absolute -inset-8 rounded-3xl bg-or/10 blur-3xl"
            />

            <div className="relative overflow-hidden rounded-2xl border border-line bg-bg2 shadow-elevated">
              {/* Barre fenêtre */}
              <div className="flex items-center gap-2 border-b border-line bg-bg3 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="ml-3 font-mono text-[10px] uppercase tracking-widest text-gr2">
                  estimer.sunavio.com
                </span>
              </div>

              {/* Contenu mockup */}
              <div className="space-y-6 p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-eyebrow">Surface toiture</p>
                    <p className="mt-2 font-mono text-2xl text-wh">
                      180 <span className="text-gr2">m²</span>
                    </p>
                  </div>
                  <Sun className="h-10 w-10 text-or" />
                </div>

                {/* Slider faux */}
                <div className="space-y-2">
                  <div className="h-1 overflow-hidden rounded-full bg-line">
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: "72%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: EASE, delay: 0.4 }}
                      className="h-full bg-or"
                    />
                  </div>
                  <div className="flex justify-between font-mono text-[10px] text-gr2">
                    <span>0 m²</span>
                    <span>250 m²</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-line pt-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-gr2">
                      <Zap className="h-3.5 w-3.5" />
                      <span className="text-[11px] uppercase tracking-widest">Production /an</span>
                    </div>
                    <p className="font-mono text-xl text-wh">
                      48 720 <span className="text-xs text-gr2">kWh</span>
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-gr2">
                      <TrendingUp className="h-3.5 w-3.5" />
                      <span className="text-[11px] uppercase tracking-widest">ROI estimé</span>
                    </div>
                    <p className="font-mono text-xl text-or">
                      6,4 <span className="text-xs text-gr2">ans</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
