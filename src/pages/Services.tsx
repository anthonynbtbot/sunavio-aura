import { useEffect } from "react";
import { Check } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { useLenis } from "@/hooks/useLenis";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { AnimatedText } from "@/components/atoms/AnimatedText";
import { Reveal } from "@/components/atoms/Reveal";
import { sunavioButtonVariants } from "@/components/atoms/SunavioButton";

interface Segment {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  accent: string[];
  paragraphs: string[];
  cardTitle: string;
  benefits: string[];
  ctaLabel: string;
  bg: "bg" | "bg3";
}

const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Hôtellerie", href: "#hospitality" },
  { label: "Villas", href: "#villas" },
  { label: "Golf", href: "#golf" },
  { label: "Tertiaire", href: "#tertiaire" },
  { label: "Industriel", href: "#industriel" },
  { label: "Piscines", href: "#piscines" },
];

const SEGMENTS: Segment[] = [
  {
    id: "hospitality",
    label: "Hôtellerie",
    eyebrow: "HÔTELLERIE & HOSPITALITY",
    title: "Autonomie énergétique pour hôtels d'exception.",
    accent: ["hôtels", "d'exception."],
    paragraphs: [
      "Les établissements hôteliers premium ont des profils de consommation complexes : climatisation, cuisines professionnelles, éclairage d'ambiance, piscines, spas, buanderies. Une coupure ONEE en pleine saison peut coûter des milliers de dirhams en clients déçus et réputation fragilisée.",
      "SUNAVIO conçoit des micro-réseaux solaires dimensionnés pour couvrir majoritairement votre consommation diurne (quand les clients sont actifs et les équipements en charge) et assurer la continuité de service via un stockage batterie adapté à vos pics d'activité.",
      "Nos installations sont intégrées architecturalement avec soin : panneaux sur toitures plates (parkings, annexes, terrasses techniques), câblage invisible, intégration dans les plans techniques sans compromettre l'esthétique du lieu.",
    ],
    cardTitle: "Bénéfices concrets",
    benefits: [
      "Réduction facture ONEE de 40 à 70% selon configuration",
      "Continuité de service en cas de coupure réseau",
      "Intégration architecturale respectueuse du design existant",
      "Amortissement 5 à 8 ans, ROI positif sur 20 ans",
      "Image de marque renforcée (positionnement RSE crédible)",
    ],
    ctaLabel: "Parler de mon projet hôtelier",
    bg: "bg",
  },
  {
    id: "villas",
    label: "Villas",
    eyebrow: "VILLAS D'EXCEPTION",
    title: "Solaire premium pour résidences de prestige.",
    accent: ["résidences", "de", "prestige."],
    paragraphs: [
      "Une villa d'exception ne se contente pas d'une installation standard. Les propriétés de prestige ont des exigences spécifiques : autonomie énergétique totale pour les séjours de plusieurs mois, alimentation de piscines chauffées et spas, gestion de maisons intelligentes, éclairage extérieur étendu, systèmes de sécurité actifs 24/7.",
      "Nos solutions villa combinent micro-réseau solaire, stockage batterie haute capacité (20-80 kWh selon les besoins), et gestion intelligente de la consommation. L'objectif n'est pas seulement de produire de l'énergie : c'est de vous garantir une autonomie confortable, même en cas de panne réseau prolongée.",
      "Nous intervenons sur tous les types de résidences premium : villas neuves en construction (intégration dès la conception), villas existantes (rénovation énergétique soignée), riads traditionnels (défi technique que nous savons relever sans dénaturer le patrimoine).",
    ],
    cardTitle: "Ce que nous livrons",
    benefits: [
      "Audit énergétique complet sur 12 mois de consommation",
      "Dimensionnement sur-mesure selon usages réels",
      "Autonomie 80-100% selon configuration souhaitée",
      "Monitoring production via app mobile",
      "Intégration esthétique (ombrières piscine, pergolas solaires, toitures invisibles)",
    ],
    ctaLabel: "Étudier mon projet villa",
    bg: "bg3",
  },
  {
    id: "golf",
    label: "Golf",
    eyebrow: "GOLF & DOMAINES",
    title: "Alimenter vos emprises étendues.",
    accent: ["emprises", "étendues."],
    paragraphs: [
      "Les golfs et grands domaines présentent un défi énergétique singulier : des emprises vastes (50 à 200 hectares), des équipements dispersés (club-house, practice, maisonnée staff, irrigation automatisée, éclairage nocturne des allées), et des pics de consommation concentrés sur l'irrigation estivale.",
      "Nos solutions golf combinent toitures solaires sur club-house et bâtiments techniques, avec si nécessaire des installations au sol en zones non-jouées. Le stockage batterie est dimensionné pour l'irrigation critique, permettant de s'affranchir des hausses tarifaires ONEE sur la pointe.",
      "Pour les domaines privés et propriétés agricoles, nous concevons des micro-réseaux totalement autonomes lorsque le raccordement ONEE est coûteux ou indisponible. C'est fréquent dans l'arrière-pays marocain.",
    ],
    cardTitle: "Spécificités golf & domaines",
    benefits: [
      "Couverture irrigation estivale (30-50% de la consommation annuelle)",
      "Micro-réseau autonome possible (off-grid total)",
      "Intégration au sol dans zones non-jouées",
      "Gestion énergétique multi-bâtiments centralisée",
      "Retour sur investissement accéléré (4-6 ans) grâce aux tarifs heures pleines évités",
    ],
    ctaLabel: "Étudier mon domaine",
    bg: "bg",
  },
  {
    id: "tertiaire",
    label: "Tertiaire",
    eyebrow: "TERTIAIRE & BUREAUX",
    title: "Réduire votre facture professionnelle.",
    accent: ["facture", "professionnelle."],
    paragraphs: [
      "Pour les sièges sociaux, immeubles de bureaux, cabinets, cliniques et commerces, le solaire est aujourd'hui le levier le plus rentable pour maîtriser les coûts énergétiques. Les toitures plates ou faiblement inclinées se prêtent idéalement à l'installation de panneaux, et la consommation diurne coïncide avec la production solaire.",
      "SUNAVIO dimensionne vos installations tertiaires pour maximiser l'autoconsommation directe (électricité produite et consommée immédiatement, sans stockage coûteux) et couvrir jusqu'à 70% de vos besoins énergétiques annuels.",
      "Nos clients tertiaires bénéficient également d'un argument RSE tangible : bilan carbone amélioré, certifications environnementales facilitées, communication valorisable auprès de leurs propres clients et partenaires.",
    ],
    cardTitle: "Avantages tertiaire",
    benefits: [
      "Amortissement rapide (5-7 ans) grâce aux tarifs pros élevés",
      "Autoconsommation directe, peu ou pas de stockage nécessaire",
      "Bilan carbone amélioré, certifications facilitées",
      "Argument RSE valorisable auprès clients et partenaires",
      "Maintenance minimale, production continue 25+ ans",
    ],
    ctaLabel: "Optimiser mes coûts",
    bg: "bg3",
  },
  {
    id: "industriel",
    label: "Industriel",
    eyebrow: "INDUSTRIEL",
    title: "Sécuriser vos process critiques.",
    accent: ["process", "critiques."],
    paragraphs: [
      "Pour les sites industriels — ateliers, entrepôts, usines, exploitations agricoles — l'énergie n'est pas seulement un coût, c'est un facteur de continuité d'activité. Une coupure en pleine production peut coûter des dizaines de milliers de dirhams : matières gâchées, commandes retardées, équipements à redémarrer.",
      "SUNAVIO conçoit pour l'industrie des solutions hybrides combinant solaire photovoltaïque, stockage batterie pour les process critiques, et le cas échéant backup générateur pour la redondance totale. Nos installations dépassent régulièrement les 500 kWc avec stockage modulaire.",
      "Nous travaillons étroitement avec vos équipes techniques pour intégrer le système sans perturber l'activité : phasage des travaux, tests hors production, formation des équipes de maintenance internes.",
    ],
    cardTitle: "Ce que nous apportons",
    benefits: [
      "Installations grande puissance (100 kWc à plusieurs MW)",
      "Stockage pour process critiques (ligne prod, chambre froide, etc.)",
      "Hybridation solaire + batterie + générateur si besoin",
      "Phasage travaux compatible avec production continue",
      "Monitoring industriel avec alertes temps réel",
    ],
    ctaLabel: "Sécuriser mon site",
    bg: "bg",
  },
  {
    id: "piscines",
    label: "Piscines",
    eyebrow: "PISCINES & POOL HOUSES",
    title: "Confort et performance.",
    accent: ["performance."],
    paragraphs: [
      "Les piscines et pool houses représentent un poste énergétique souvent sous-estimé dans les résidences premium : filtration continue (6-12h/jour en été), chauffage thermique (eau à 28°C toute l'année exige une puissance soutenue), éclairage subaquatique, équipements annexes (jacuzzis, douches chaudes, locaux techniques).",
      "SUNAVIO propose deux approches complémentaires : le solaire photovoltaïque classique pour alimenter la pompe de filtration et les équipements électriques, et le solaire thermique (capteurs spécifiques) pour chauffer directement l'eau de bassin. Les deux combinés permettent d'atteindre l'autonomie piscine quasi-totale.",
      "Nos dimensionnements tiennent compte de l'usage réel : une piscine utilisée 3 mois par an ne nécessite pas la même installation qu'une piscine chauffée toute l'année. Chaque projet est étudié spécifiquement.",
    ],
    cardTitle: "Configurations possibles",
    benefits: [
      "PV + pompe filtration (autonomie diurne assurée)",
      "Solaire thermique pour chauffage bassin (eau à température toute l'année)",
      "Hybride PV + thermique + batterie (autonomie complète)",
      "Intégration ombrière piscine (panneaux au-dessus du bassin, ombrage bonus)",
      "Pilotage intelligent filtration selon production solaire disponible",
    ],
    ctaLabel: "Étudier ma piscine",
    bg: "bg3",
  },
];

const Services = () => {
  useLenis();
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      // petit délai pour laisser la page monter
      setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-bg text-wh">
      <SEO
        title="Installation solaire villa & hôtel à Marrakech | Services SUNAVIO"
        description="Panneaux solaires Marrakech pour villas, hôtels, golfs et tertiaire. Installation solaire premium, stockage batterie et micro-réseaux par SUNAVIO."
        path="/services"
      />
      <Header />
      <main>
        {/* SECTION 1 — Hero */}
        <section className="relative flex min-h-[50vh] items-center pt-32 pb-20">
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
                <Eyebrow>NOS SERVICES</Eyebrow>
              </Reveal>
              <AnimatedText
                as="h1"
                trigger="mount"
                text="Six expertises, une rigueur."
                accentWords={["rigueur."]}
                className="mt-6 font-display text-display-hero text-wh"
              />
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-2xl text-body text-gr">
                  Chaque segment a ses contraintes, ses usages, ses enjeux. Nos solutions
                  sont dimensionnées spécifiquement pour le vôtre.
                </p>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* SECTION 2 — Sommaire navigable sticky */}
        <nav
          aria-label="Sommaire des services"
          className="sticky top-16 z-30 border-y border-line bg-bg3/90 backdrop-blur-xl md:top-20"
        >
          <Container size="wide" className="py-4">
            <ul className="flex gap-2 overflow-x-auto md:justify-center md:gap-8">
              {NAV_LINKS.map((l) => (
                <li key={l.href} className="shrink-0">
                  <a
                    href={l.href}
                    className="block whitespace-nowrap px-2 py-1 font-mono text-xs uppercase tracking-widest text-gr transition-colors duration-300 hover:text-or"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </nav>

        {/* SECTIONS 3-8 — segments */}
        {SEGMENTS.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className={`${s.bg === "bg" ? "bg-bg" : "bg-bg3"} py-24 md:py-32`}
            style={{ scrollMarginTop: "120px" }}
          >
            <Container size="wide">
              <Reveal>
                <Eyebrow>{s.eyebrow}</Eyebrow>
              </Reveal>
              <AnimatedText
                as="h2"
                text={s.title}
                accentWords={s.accent}
                className="mt-6 font-display text-display-section text-wh"
              />

              <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
                <div className="space-y-6">
                  {s.paragraphs.map((p, i) => (
                    <Reveal key={i} delay={i * 0.1}>
                      <p className="text-body text-gr">{p}</p>
                    </Reveal>
                  ))}

                  <Reveal delay={0.4}>
                    <div className="pt-4">
                      <Link
                        to="/contact"
                        className={sunavioButtonVariants({ variant: "primary", size: "md" })}
                      >
                        {s.ctaLabel}
                      </Link>
                    </div>
                  </Reveal>
                </div>

                <Reveal delay={0.2}>
                  <div className="rounded-md border border-line bg-bg2 p-8 md:p-10">
                    <p className="text-eyebrow">{s.cardTitle}</p>
                    <ul className="mt-6 space-y-4">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex gap-4">
                          <Check
                            className="mt-0.5 shrink-0 text-or"
                            size={20}
                            strokeWidth={2}
                          />
                          <span className="text-body text-gr">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </Container>
          </section>
        ))}

        {/* SECTION 9 — CTA final */}
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
                text="Votre projet n'est pas dans la liste ? Parlons-en quand même."
                accentWords={["Parlons-en", "quand", "même."]}
                className="font-display text-display-section text-wh"
              />
              <Reveal delay={0.2}>
                <p className="mx-auto mt-6 max-w-2xl text-body text-gr">
                  Bâtiments historiques, centres de soins, écoles, complexes sportifs… nos
                  études sont sur-mesure. Nous étudions chaque projet avec la même rigueur.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="https://estimer.sunavio.com"
                    className={sunavioButtonVariants({ variant: "primary", size: "lg" })}
                  >
                    Estimer mon projet
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

export default Services;
