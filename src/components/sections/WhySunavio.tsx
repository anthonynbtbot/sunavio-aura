import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { AnimatedText } from "@/components/atoms/AnimatedText";
import { Reveal } from "@/components/atoms/Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

const POINTS = [
  {
    title: "Ingénierie marocaine, vision internationale",
    description:
      "Équipe formée aux standards européens, implantée à Marrakech, adaptée aux réalités locales : climat, réseau, réglementation.",
  },
  {
    title: "Équipements premium uniquement",
    description:
      "Jinko Solar (panneaux tier-1), WeCo (stockage lithium), onduleurs haut rendement. Pas de compromis sur la qualité.",
  },
  {
    title: "Dimensionnement honnête",
    description:
      "Études techniques précises, ROI transparent, zéro surdimensionnement commercial. Vous investissez pour ce qui produit réellement.",
  },
  {
    title: "Suivi post-installation",
    description:
      "Monitoring production, maintenance préventive, garanties équipements jusqu'à 25 ans sur les panneaux.",
  },
];

export function WhySunavio() {
  const reduced = useReducedMotion();

  return (
    <section className="relative bg-bg3 py-24 md:py-32 lg:py-40">
      <Container size="wide">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>Pourquoi SUNAVIO</Eyebrow>
          </Reveal>
          <AnimatedText
            as="h2"
            text="La rigueur de l'ingénieur, l'exigence du client."
            accentWords={["l'exigence", "du", "client"]}
            className="mt-6 font-display text-display-section text-wh"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
          }}
          className="mt-20 grid grid-cols-1 gap-x-16 gap-y-14 md:grid-cols-2"
        >
          {POINTS.map((p, i) => (
            <motion.div
              key={p.title}
              variants={
                reduced
                  ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
                  : {
                      hidden: { opacity: 0, y: 30 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8, ease: EASE },
                      },
                    }
              }
              className="relative border-t border-line pt-8"
            >
              <span className="font-mono text-sm tracking-widest text-or">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-wh">
                {p.title}
              </h3>
              <p className="mt-4 text-body text-gr">{p.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
