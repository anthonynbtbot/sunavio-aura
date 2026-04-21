import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { AnimatedText } from "@/components/atoms/AnimatedText";
import { Reveal } from "@/components/atoms/Reveal";
import { KPINumber } from "@/components/atoms/KPINumber";

const EASE = [0.22, 1, 0.36, 1] as const;

interface KPI {
  value: number;
  suffix?: string;
  decimals?: number;
  separator?: string;
  label: string;
}

interface CaseStudy {
  badge: string;
  title: string;
  kpis: KPI[];
}

const CASES: CaseStudy[] = [
  {
    badge: "Villa",
    title: "Villa privée — Marrakech",
    kpis: [
      { value: 22.68, decimals: 2, suffix: " kWc", label: "Puissance installée" },
      { value: 93,    suffix: " %",                label: "Autonomie solaire" },
      { value: 6,     suffix: " ans",              label: "Retour sur investissement" },
    ],
  },
  {
    badge: "Hospitality",
    title: "Domaine hôtelier",
    kpis: [
      { value: 645,  suffix: " kWc",                            label: "Puissance installée" },
      { value: 1285, suffix: " kWh", separator: ",",            label: "Stockage batterie" },
      { value: 6.2,  decimals: 1, suffix: " ans",               label: "Retour sur investissement" },
    ],
  },
  {
    badge: "Villa",
    title: "Résidence privée",
    kpis: [
      { value: 12, suffix: " kWc", label: "Puissance installée" },
      { value: 87, suffix: " %",   label: "Autonomie solaire" },
      { value: 50, suffix: " kWh", label: "Stockage batterie" },
    ],
  },
];

export function Cases() {
  const reduced = useReducedMotion();

  return (
    <section className="relative bg-bg py-24 md:py-32 lg:py-40">
      <Container size="wide">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>Réalisations</Eyebrow>
          </Reveal>
          <AnimatedText
            as="h2"
            text="Des projets qui produisent réellement."
            accentWords={["produisent"]}
            className="mt-6 font-display text-display-section text-wh"
          />
          <Reveal delay={0.2}>
            <p className="mt-6 text-sm text-gr2">Cas anonymisés, chiffres réels.</p>
          </Reveal>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {CASES.map((c) => (
            <motion.article
              key={c.title}
              variants={
                reduced
                  ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
                  : {
                      hidden: { opacity: 0, y: 40 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8, ease: EASE },
                      },
                    }
              }
              className="group relative flex flex-col rounded-xl border border-line bg-bg2 p-10 transition-all duration-400 ease-out-expo hover:-translate-y-1 hover:border-or"
            >
              <span className="self-start rounded-full border border-or/40 bg-or/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-or">
                {c.badge}
              </span>

              <h3 className="mt-6 font-display text-xl font-semibold text-wh">
                {c.title}
              </h3>

              <div className="mt-8 space-y-6 border-t border-line pt-8">
                {c.kpis.map((k) => (
                  <div key={k.label}>
                    <KPINumber
                      value={k.value}
                      suffix={k.suffix}
                      decimals={k.decimals}
                      separator={k.separator}
                      className="block text-3xl font-semibold text-wh md:text-4xl"
                    />
                    <p className="mt-1 text-eyebrow text-gr2">{k.label}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
