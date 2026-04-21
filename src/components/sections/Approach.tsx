import { motion, useReducedMotion } from "framer-motion";
import { Network, Battery, Gauge, type LucideIcon } from "lucide-react";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { AnimatedText } from "@/components/atoms/AnimatedText";
import { Reveal } from "@/components/atoms/Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

const PILLARS: Pillar[] = [
  {
    icon: Network,
    title: "Micro-réseaux intelligents",
    description:
      "Architecture résiliente pour s'affranchir des coupures ONEE. Gestion intelligente de la production, de la consommation et du stockage en temps réel.",
  },
  {
    icon: Battery,
    title: "Stockage batterie lithium",
    description:
      "Équipements WeCo haute performance, durée de vie 10+ ans, sécurité thermique maximale. Autonomie garantie même en l'absence totale de réseau.",
  },
  {
    icon: Gauge,
    title: "Dimensionnement précis",
    description:
      "Études techniques sur-mesure, modélisation de production, calcul de ROI transparent. Aucun surdimensionnement commercial : vous payez pour ce qui produit.",
  },
];

export function Approach() {
  const reduced = useReducedMotion();

  return (
    <section className="relative bg-bg3 py-24 md:py-32 lg:py-40">
      <Container size="wide">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>Notre approche</Eyebrow>
          </Reveal>
          <AnimatedText
            as="h2"
            text="Une ingénierie au millimètre."
            accentWords={["au", "millimètre"]}
            className="mt-6 font-display text-display-section text-wh"
          />
        </div>

        <div className="relative mt-20 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0">
          {PILLARS.map(({ icon: Icon, title, description }, i) => (
            <div key={title} className="relative md:px-10 md:first:pl-0 md:last:pr-0">
              {/* Ligne verticale dessinée */}
              {i > 0 && (
                <motion.div
                  aria-hidden
                  initial={reduced ? false : { scaleY: 0 }}
                  whileInView={reduced ? undefined : { scaleY: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1, ease: EASE, delay: 0.15 * i }}
                  style={{ transformOrigin: "top" }}
                  className="absolute left-0 top-0 hidden h-full w-px md:block"
                >
                  <div
                    className="h-full w-full"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent, hsl(var(--line)) 20%, hsl(var(--line)) 80%, transparent)",
                    }}
                  />
                </motion.div>
              )}

              <motion.div
                initial={reduced ? false : { opacity: 0, y: 40 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.15 * i }}
              >
                <Icon className="h-12 w-12 text-or" strokeWidth={1.5} />
                <h3 className="mt-8 font-display text-2xl font-semibold text-wh">
                  {title}
                </h3>
                <p className="mt-4 text-body text-gr">{description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
