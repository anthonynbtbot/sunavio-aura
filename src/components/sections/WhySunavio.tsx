import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/atoms/Container";
import { SectionHeader } from "@/components/atoms/SectionHeader";
import solarTexture from "@/assets/solar-texture.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;

const POINTS = [
  {
    title: "SARL marocaine immatriculée",
    description:
      "SUNAVIO SARL — RC 164901 Marrakech, ICE 003721552000008, IF 66967281. Société légalement constituée au Maroc, fiscalement déclarée, basée à Bab Doukala.",
  },
  {
    title: "Conformité données — CNDP & RGPD",
    description:
      "Déclaration CNDP en cours. Vos données ne sont jamais revendues ni transmises à des tiers commerciaux. Droit d'accès, de rectification et de suppression garantis.",
  },
  {
    title: "Garanties commerciales écrites",
    description:
      "Devis détaillés et engageants, garanties équipements jusqu'à 25 ans (panneaux Jinko), 10 ans (onduleurs), 10 ans (stockage WeCo). Contrats clairs, aucune zone grise.",
  },
  {
    title: "Équipe locale Marrakech",
    description:
      "Bureau physique à Bab Doukala, équipe technique sur place, interlocuteurs identifiés et joignables. Pas de sous-traitance opaque, pas de centre d'appel délocalisé.",
  },
];

export function WhySunavio() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-bg3 py-24 md:py-32 lg:py-40">
      <img
        src={solarTexture}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        width={1600}
        height={896}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.18] mix-blend-luminosity"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg3 via-bg3/60 to-bg3"
      />
      <Container size="wide" className="relative z-10">
        <SectionHeader
          eyebrow="Pourquoi SUNAVIO"
          title="La rigueur de l'ingénieur, l'exigence du client."
          accentWords={["l'exigence", "du", "client"]}
          intro="Quatre engagements qui guident chaque décision technique et commerciale."
        />

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
