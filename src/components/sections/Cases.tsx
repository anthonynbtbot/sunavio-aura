import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { AnimatedText } from "@/components/atoms/AnimatedText";
import { Reveal } from "@/components/atoms/Reveal";
import { KPINumber } from "@/components/atoms/KPINumber";
import villaInstall from "@/assets/villa-installation.jpg";

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
  imageStyle: string;
  imageOpacity: number;
  kpis: KPI[];
}

const CASES: CaseStudy[] = [
  {
    badge: "Villa",
    title: "Villa privée — Marrakech",
    imageStyle: "saturate(1.1) contrast(1.05)",
    imageOpacity: 0.5,
    kpis: [
      { value: 22.68, decimals: 2, suffix: " kWc", label: "Puissance installée" },
      { value: 93,    suffix: " %",                label: "Autonomie solaire" },
      { value: 6,     suffix: " ans",              label: "Retour sur investissement" },
    ],
  },
  {
    badge: "Hospitality",
    title: "Domaine hôtelier",
    imageStyle: "hue-rotate(-15deg) saturate(0.7) brightness(0.9)",
    imageOpacity: 0.45,
    kpis: [
      { value: 645,  suffix: " kWc",                            label: "Puissance installée" },
      { value: 1285, suffix: " kWh", separator: ",",            label: "Stockage batterie" },
      { value: 6.2,  decimals: 1, suffix: " ans",               label: "Retour sur investissement" },
    ],
  },
  {
    badge: "Villa",
    title: "Résidence privée",
    imageStyle: "grayscale(0.6) sepia(0.4) saturate(1.4)",
    imageOpacity: 0.4,
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
              className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-bg2 p-10 transition-all duration-400 ease-out-expo hover:-translate-y-1 hover:border-or"
            >
              {/* Image villa en fond avec filtre variant */}
              <img
                src={villaInstall}
                alt={`Installation solaire — ${c.title}`}
                loading="lazy"
                decoding="async"
                width={1600}
                height={896}
                className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-[0.6]"
                style={{ filter: c.imageStyle, opacity: c.imageOpacity }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg2 via-bg2/85 to-bg2/40"
              />

              <div className="relative z-10 flex flex-col">
                <span className="self-start rounded-full border border-or/40 bg-bg2/80 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-or backdrop-blur">
                  {c.badge}
                </span>

                <h3 className="mt-6 font-display text-xl font-semibold text-wh">
                  {c.title}
                </h3>

                <div className="mt-8 space-y-6 rounded-lg border border-line/60 bg-bg2/80 p-5 backdrop-blur">
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
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
