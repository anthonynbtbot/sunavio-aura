import { motion, useReducedMotion } from "framer-motion";
import {
  Hotel,
  Home,
  Flag,
  Building2,
  Factory,
  Waves,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/atoms/Container";
import { SectionHeader } from "@/components/atoms/SectionHeader";
import solarTexture from "@/assets/solar-texture.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;

interface Segment {
  icon: LucideIcon;
  title: string;
  description: string;
  slug: string;
}

const SEGMENTS: Segment[] = [
  {
    icon: Hotel,
    title: "Hôtellerie & Hospitality",
    description:
      "Autonomie énergétique pour resorts et boutique-hôtels exigeants.",
    slug: "hospitality",
  },
  {
    icon: Home,
    title: "Villas d'exception",
    description:
      "Solaire premium pour résidences privées et propriétés de prestige.",
    slug: "villas",
  },
  {
    icon: Flag,
    title: "Golf & domaines",
    description:
      "Alimenter club-house, irrigation et éclairage sur des emprises étendues.",
    slug: "golf",
  },
  {
    icon: Building2,
    title: "Tertiaire & bureaux",
    description:
      "Réduire la facture ONEE des sièges sociaux et immeubles professionnels.",
    slug: "tertiaire",
  },
  {
    icon: Factory,
    title: "Industriel",
    description:
      "Process industriel, ateliers, entrepôts : optimiser et sécuriser l'alimentation.",
    slug: "industriel",
  },
  {
    icon: Waves,
    title: "Piscines & pool houses",
    description:
      "Chauffage, filtration, éclairage : dimensionné pour l'usage réel.",
    slug: "piscines",
  },
];

export function Segments() {
  const reduced = useReducedMotion();

  return (
    <section className="relative bg-bg py-24 md:py-32 lg:py-40">
      <Container size="wide">
        <SectionHeader
          eyebrow="Nos expertises"
          title="Des solutions pour chaque projet."
          accentWords={["chaque", "projet"]}
          intro="Six expertises distinctes, une exigence commune : produire réellement, durablement, sans compromis sur la qualité d'intégration."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {SEGMENTS.map(({ icon: Icon, title, description, slug }) => (
            <motion.div
              key={slug}
              variants={
                reduced
                  ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
                  : {
                      hidden: { opacity: 0, y: 30 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.7, ease: EASE },
                      },
                    }
              }
            >
              <Link
                to={`/services#${slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-bg2 p-8 transform-gpu [transition:transform_400ms_var(--ease-out-expo),border-color_400ms_var(--ease-out-expo),box-shadow_400ms_var(--ease-out-expo)] hover:-translate-y-2 hover:border-or hover:shadow-[0_0_60px_-10px_hsl(var(--or)/0.35)]"
              >
                {/* Texture solaire commune */}
                <img
                  src={solarTexture}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  decoding="async"
                  width={1600}
                  height={896}
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.12] mix-blend-luminosity transition-opacity duration-500 group-hover:opacity-[0.20]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-bg2/85 via-bg2/90 to-bg2"
                />
                {/* Halo orange au hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-or/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative z-10 flex h-full flex-col">
                  <Icon
                    className="h-12 w-12 text-or transition-transform duration-400 ease-out-expo group-hover:rotate-[5deg]"
                    strokeWidth={1.5}
                  />

                  <h3 className="mt-8 font-display text-2xl font-semibold text-wh">
                    {title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-gr">
                    {description}
                  </p>

                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-or">
                    <span className="link-underline">En savoir plus</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-400 ease-out-expo group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
