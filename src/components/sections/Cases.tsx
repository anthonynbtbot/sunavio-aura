import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/atoms/Container";
import { SectionHeader } from "@/components/atoms/SectionHeader";
import { KPINumber } from "@/components/atoms/KPINumber";

const EASE = [0.22, 1, 0.36, 1] as const;

const NBSP = "\u00a0";

const CASE = {
  badge: "Villa",
  title: "Villa privée, région de Marrakech",
  subtitle: "Pose sur pergola · Réalisée en 2026",
  kpi: { value: 13.86, decimals: 2, suffix: `${NBSP}kWc`, label: "Puissance installée" },
};

export function Cases() {
  const reduced = useReducedMotion();

  return (
    <section className="relative bg-bg py-24 md:py-32 lg:py-40">
      <Container size="wide">
        <SectionHeader
          eyebrow="Réalisation"
          title="Une réalisation récente, en région de Marrakech."
          accentWords={["récente"]}
          intro="Cas réel, anonymisé."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="mx-auto mt-16 w-full lg:max-w-[calc((100%-3rem)/3)]"
        >
            <motion.article
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

              <div className="relative z-10 flex flex-col">
                <span className="self-start rounded-full border border-or/40 bg-bg2/80 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-or backdrop-blur">
                  {CASE.badge}
                </span>

                <h3 className="mt-6 font-display text-xl font-semibold text-wh">
                  {CASE.title}
                </h3>
                <p className="mt-2 text-eyebrow text-gr2">{CASE.subtitle}</p>

                <div className="mt-8 space-y-6 rounded-lg border border-line/60 bg-bg2/80 p-5 backdrop-blur">
                  {c.kpis.map((k) => (
                    <div key={CASE.kpi.label}>
                      <KPINumber
                        value={CASE.kpi.value}
                        suffix={CASE.kpi.suffix}
                        decimals={CASE.kpi.decimals}
                        separator={NBSP}
                        decimalSeparator=","
                        className="block text-3xl font-semibold text-wh md:text-4xl"
                      />
                      <p className="mt-1 text-eyebrow text-gr2">{CASE.kpi.label}</p>
                    </div>
                        </div>
              </div>
            </motion.article>
        </motion.div>
      </Container>
    </section>
  );
}
