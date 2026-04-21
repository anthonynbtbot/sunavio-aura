import { ArrowRight, Building, Compass, Eye, FileText, Globe, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useLenis } from "@/hooks/useLenis";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { AnimatedText } from "@/components/atoms/AnimatedText";
import { Reveal } from "@/components/atoms/Reveal";
import { SectionHeader } from "@/components/atoms/SectionHeader";
import { sunavioButtonVariants } from "@/components/atoms/SunavioButton";
import solarTexture from "@/assets/solar-texture.jpg";

const APPROACH = [
  {
    title: "Audit énergétique approfondi",
    description:
      "Analyse de consommation sur 12 mois, relevé précis du site (orientation toitures, ombrages, contraintes architecturales), étude de l'existant électrique. Aucun dimensionnement ne se fait sans cette étape.",
  },
  {
    title: "Dimensionnement sur-mesure",
    description:
      "Modélisation de production basée sur l'ensoleillement réel Marrakech, calcul de couverture solaire selon les profils de consommation, dimensionnement batterie adapté à l'autonomie souhaitée. Pas de configuration standard, chaque projet est unique.",
  },
  {
    title: "Installation premium",
    description:
      "Équipements tier-1 uniquement (Jinko Solar, WeCo, onduleurs haut rendement). Intégration architecturale soignée, câblage conforme aux normes internationales, mise en service supervisée par un ingénieur.",
  },
  {
    title: "Suivi dans la durée",
    description:
      "Monitoring temps réel de la production, maintenance préventive annuelle, garanties constructeur jusqu'à 25 ans sur les panneaux. Nos clients ne sont pas abandonnés après la livraison.",
  },
];

const VALUES = [
  {
    icon: Compass,
    title: "Rigueur technique",
    description:
      "Chaque kilowatt annoncé est un kilowatt livré. Nos études techniques sont transparentes, nos calculs vérifiables, nos promesses mesurables. Pas de surdimensionnement commercial, pas de flou artistique.",
  },
  {
    icon: Eye,
    title: "Transparence totale",
    description:
      "Vous savez exactement ce que vous achetez, pourquoi, et ce que ça va produire. Devis détaillés ligne par ligne, marge visible, équipements nommés avec références. Notre prix intègre la qualité, jamais de surprise.",
  },
  {
    icon: ShieldCheck,
    title: "Durabilité exigée",
    description:
      "Un système solaire, c'est un investissement sur 25 ans. Nous ne posons rien qui ne tiendrait pas cette durée. Équipements premium, installation aux standards européens, suivi rigoureux.",
  },
];

const PARTNERS = [
  {
    badge: "PANNEAUX",
    name: "Jinko Solar",
    description:
      "Leader mondial des panneaux photovoltaïques monocristallins tier-1. Rendements jusqu'à 22%, garantie produit 15 ans, garantie production 25 ans. Technologie N-Type dernière génération.",
  },
  {
    badge: "STOCKAGE",
    name: "WeCo",
    description:
      "Stockage lithium LiFePO4 haute performance. Sécurité thermique maximale, durée de vie 10+ ans, profondeur de décharge 95%, compatibilité multi-usages (résidentiel, tertiaire, industriel).",
  },
  {
    badge: "ONDULEURS & BOS",
    name: "Équipements électriques",
    description:
      "Onduleurs hybrides haut rendement (98%+), disjoncteurs DC/AC certifiés, câblage conforme normes internationales. Chaque composant électrique est sélectionné pour tenir 25 ans minimum.",
  },
];

const About = () => {
  useLenis();

  return (
    <div className="min-h-screen bg-bg text-wh">
      <Header />
      <main>
        {/* SECTION 1 — Hero */}
        <section className="relative flex min-h-[60vh] items-center pt-32 pb-20">
          <img
            src={solarTexture}
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.15]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(60% 50% at 50% 0%, hsl(var(--or) / 0.10), transparent 70%)",
            }}
          />
          <Container size="wide">
            <div className="max-w-3xl">
              <Reveal>
                <Eyebrow>À PROPOS</Eyebrow>
              </Reveal>
              <AnimatedText
                as="h1"
                trigger="mount"
                text="Ingénierie marocaine, vision internationale."
                accentWords={["vision", "internationale."]}
                className="mt-6 font-display text-display-hero text-wh"
              />
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-2xl text-body text-gr">
                  SUNAVIO conçoit, dimensionne et installe des solutions solaires premium
                  pour les acteurs les plus exigeants du Royaume. Micro-réseaux intelligents,
                  stockage batterie, ingénierie sur-mesure.
                </p>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* SECTION 2 — Notre mission */}
        <section className="bg-bg3 py-24 md:py-32">
          <Container size="wide">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <Reveal>
                  <Eyebrow>NOTRE MISSION</Eyebrow>
                </Reveal>
                <AnimatedText
                  as="h2"
                  text="Rendre l'autonomie énergétique accessible."
                  accentWords={["accessible."]}
                  className="mt-6 font-display text-display-section text-wh"
                />
              </div>
              <div className="space-y-6">
                <Reveal delay={0.1}>
                  <p className="text-body text-gr">
                    Le Maroc dispose d'un ensoleillement exceptionnel — parmi les meilleurs au
                    monde. Pourtant, la majorité du parc immobilier premium reste dépendante
                    d'un réseau vieillissant, sujet aux coupures, aux hausses tarifaires et aux
                    contraintes de puissance.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-body text-gr">
                    SUNAVIO a été fondée pour combler cet écart. Notre mission : permettre aux
                    villas d'exception, hôtels, domaines et sites industriels du Royaume de
                    produire leur propre énergie, de stocker intelligemment, et de s'affranchir
                    progressivement des aléas du réseau.
                  </p>
                </Reveal>
                <Reveal delay={0.3}>
                  <p className="text-body text-gr">
                    Nous ne vendons pas des panneaux solaires. Nous concevons des systèmes
                    énergétiques sur-mesure, dimensionnés pour l'usage réel, équipés de
                    matériel premium, et suivis sur la durée.
                  </p>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 3 — Notre approche */}
        <section className="bg-bg py-24 md:py-32">
          <Container size="wide">
            <SectionHeader
              eyebrow="NOTRE APPROCHE"
              title="Une méthodologie rigoureuse."
              accentWords={["rigoureuse."]}
            />
            <div className="mt-20 grid grid-cols-1 gap-x-16 gap-y-14 md:grid-cols-2">
              {APPROACH.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.08}>
                  <div className="relative border-t border-line pt-8">
                    <span className="font-mono text-sm tracking-widest text-or">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-semibold text-wh">
                      {p.title}
                    </h3>
                    <p className="mt-4 text-body text-gr">{p.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* SECTION 4 — Nos valeurs */}
        <section className="bg-bg3 py-24 md:py-32">
          <Container size="wide">
            <SectionHeader
              eyebrow="NOS VALEURS"
              title="Ce qui nous différencie."
              accentWords={["nous", "différencie."]}
            />
            <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-3">
              {VALUES.map((v, i) => {
                const Icon = v.icon;
                return (
                  <Reveal key={v.title} delay={i * 0.1}>
                    <div className="h-full border-t border-line pt-8">
                      <Icon className="text-or" size={48} strokeWidth={1.5} />
                      <h3 className="mt-6 font-display text-2xl font-semibold text-wh">
                        {v.title}
                      </h3>
                      <p className="mt-4 text-body text-gr">{v.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

        {/* SECTION 5 — Notre ancrage */}
        <section className="bg-bg py-24 md:py-32">
          <Container size="wide">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <Reveal>
                  <Eyebrow>ANCRAGE LOCAL</Eyebrow>
                </Reveal>
                <AnimatedText
                  as="h2"
                  text="Marrakech, notre terrain."
                  accentWords={["Marrakech,"]}
                  className="mt-6 font-display text-display-section text-wh"
                />
                <div className="mt-10 space-y-6">
                  <Reveal delay={0.1}>
                    <p className="text-body text-gr">
                      SUNAVIO est une société marocaine de droit marocain. Notre siège social
                      est implanté au cœur de Marrakech-Guéliz, au Zenith Business Center, à
                      Bab Doukala. Nous connaissons le terrain, les acteurs, les contraintes
                      locales — du climat continental à sec, aux spécificités du réseau ONEE,
                      en passant par les exigences administratives marocaines.
                    </p>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <p className="text-body text-gr">
                      Nos équipes combinent formation internationale (standards européens
                      d'ingénierie) et connaissance fine du marché local. Cette double culture
                      nous permet de servir aussi bien un propriétaire de villa française
                      installé à la Palmeraie qu'un groupe hôtelier marocain historique.
                    </p>
                  </Reveal>
                  <Reveal delay={0.3}>
                    <p className="text-body text-gr">
                      Nous intervenons prioritairement sur Marrakech et sa région, et nous
                      déplaçons pour les projets d'envergure dans tout le Royaume : domaines
                      privés, golfs, complexes hôteliers, sites industriels.
                    </p>
                  </Reveal>
                </div>
              </div>

              <Reveal delay={0.2}>
                <div className="rounded-md border border-line bg-bg2 p-8 md:p-10">
                  <div>
                    <Building className="text-or" size={48} strokeWidth={1.5} />
                    <p className="mt-4 text-eyebrow">SIÈGE SOCIAL</p>
                    <div className="mt-3 space-y-1 text-body text-gr">
                      <p className="text-wh">SUNAVIO SARL</p>
                      <p>Zenith Business Center</p>
                      <p>Rue Mouslim, Lot Boukar</p>
                      <p>3ème étage, Apt N°14</p>
                      <p>Bab Doukala</p>
                      <p>Marrakech-Guéliz, Maroc</p>
                    </div>
                  </div>

                  <div className="my-8 border-t border-line" />

                  <div>
                    <FileText className="text-or" size={48} strokeWidth={1.5} />
                    <p className="mt-4 text-eyebrow">INFORMATIONS LÉGALES</p>
                    <dl className="mt-3 space-y-1 text-body text-gr">
                      <div className="flex gap-2">
                        <dt className="text-gr2">Raison sociale :</dt>
                        <dd className="text-wh">SUNAVIO SARL</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="text-gr2">Capital social :</dt>
                        <dd className="text-wh">100 000 MAD</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="text-gr2">ICE :</dt>
                        <dd className="text-wh">003721552000008</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="text-gr2">RC :</dt>
                        <dd className="text-wh">164901 Marrakech</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="text-gr2">IF :</dt>
                        <dd className="text-wh">66967281</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="my-8 border-t border-line" />

                  <div>
                    <Globe className="text-or" size={48} strokeWidth={1.5} />
                    <p className="mt-4 text-eyebrow">ZONE D'INTERVENTION</p>
                    <div className="mt-3 space-y-1 text-body text-gr">
                      <p className="text-wh">Marrakech et région (prioritaire)</p>
                      <p>Tout le Royaume du Maroc (sur demande)</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* SECTION 6 — Partenaires équipementiers */}
        <section className="bg-bg3 py-24 md:py-32">
          <Container size="wide">
            <SectionHeader
              eyebrow="ÉQUIPEMENTS PREMIUM"
              title="Nous ne travaillons qu'avec le meilleur."
              accentWords={["le", "meilleur."]}
              intro="Le choix des équipements détermine la durée de vie et la performance d'une installation. Nous sélectionnons rigoureusement nos partenaires pour garantir qualité, durabilité et support technique."
            />
            <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
              {PARTNERS.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.1}>
                  <div className="group h-full rounded-md border border-line bg-bg2 p-8 transition-all duration-400 ease-out-expo hover:-translate-y-1 hover:border-or">
                    <span className="inline-block rounded-sm border border-line px-3 py-1 font-mono text-xs tracking-widest text-or">
                      {p.badge}
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-semibold text-wh">
                      {p.name}
                    </h3>
                    <p className="mt-4 text-body text-gr">{p.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* SECTION 7 — CTA final */}
        <section className="relative overflow-hidden bg-bg py-24 md:py-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 50%, hsl(var(--or) / 0.15), transparent 70%)",
            }}
          />
          <Container size="wide" className="relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <AnimatedText
                as="h2"
                text="Votre projet mérite cette rigueur."
                accentWords={["mérite"]}
                className="font-display text-display-section text-wh"
              />
              <Reveal delay={0.2}>
                <p className="mx-auto mt-6 max-w-2xl text-body text-gr">
                  Commencez par une estimation précise en ligne, ou contactez-nous directement
                  pour en discuter.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="https://estimer.sunavio.com"
                    className={sunavioButtonVariants({ variant: "primary", size: "lg" })}
                  >
                    Estimer mon projet
                    <ArrowRight />
                  </a>
                  <Link
                    to="/contact"
                    className={sunavioButtonVariants({ variant: "secondary", size: "lg" })}
                  >
                    Nous contacter
                  </Link>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
