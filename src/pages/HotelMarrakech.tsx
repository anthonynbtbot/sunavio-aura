import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  MessageCircle,
  Sun,
  Battery,
  Wrench,
  ShieldCheck,
  Hotel,
  Sparkles,
  Wallet,
  Leaf,
} from "lucide-react";
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
import ogImage from "@/assets/og-hotel-marrakech.jpg";
import { trackContactClick, trackWhatsAppClick } from "@/lib/tracking";

const SITE_URL = "https://sunavio.com";
const PATH = "/panneaux-solaires-hotel-marrakech";

const PAINS = [
  {
    icon: Wallet,
    title: "Une facture énergie majeure et saisonnière",
    description:
      "Climatisation, piscines, SPA, restauration, blanchisserie : la consommation grimpe précisément quand vos clients sont là. La facture ONEE est l'un de vos premiers postes de charge variable.",
  },
  {
    icon: Sparkles,
    title: "Une exigence absolue de confort",
    description:
      "Pas une coupure, pas un bruit de chantier, pas une zone défigurée. L'intégration architecturale et la continuité de service ne sont pas négociables.",
  },
  {
    icon: Leaf,
    title: "Une attente RSE des voyageurs",
    description:
      "Les clientèles internationales valorisent — et de plus en plus exigent — un établissement engagé dans une démarche énergétique sérieuse.",
  },
];

const APPROACH = [
  {
    title: "Audit énergétique réel",
    description:
      "Analyse de vos 12 à 24 derniers mois de factures ONEE, courbes de charge par saison, identification des postes les plus énergivores. Pas d'estimation : on part de vos chiffres.",
  },
  {
    title: "Étude multi-zones",
    description:
      "Toitures des communs et de service, parkings abrités, pergolas, ombrières techniques : on cherche la surface utile sans toucher aux zones client ni à votre signature architecturale.",
  },
  {
    title: "Dimensionnement sur-mesure",
    description:
      "Centrale calibrée pour maximiser l'autoconsommation aux heures de pointe de votre établissement, avec stockage si la courbe le justifie. Pas de surdimensionnement vendeur.",
  },
  {
    title: "Chantier coordonné, sans gêne client",
    description:
      "Phasage en basse saison, intervention par zones non-accessibles aux clients, coordination directe avec votre direction technique. Aucune interruption de service.",
  },
];

const EQUIPMENT = [
  {
    icon: Sun,
    title: "Panneaux Jinko Tiger Neo N-type",
    description:
      "Rendement haut de gamme, garantie produit 12 ans et garantie de production 30 ans. Conçus pour tenir face à la chaleur de Marrakech.",
  },
  {
    icon: Wrench,
    title: "Onduleurs Huawei SUN2000",
    description:
      "Plateforme FusionSolar robuste pensée pour les configurations triphasées et le pilotage multi-zones d'un établissement hôtelier.",
  },
  {
    icon: Battery,
    title: "Stockage Huawei LUNA2000",
    description:
      "Batteries LFP modulaires dimensionnées sur la courbe réelle de votre hôtel, pour absorber les pics du soir (restauration, SPA, climatisation chambres).",
  },
  {
    icon: ShieldCheck,
    title: "Structure galvanisée — garantie SUNAVIO 10 ans",
    description:
      "Notre signature : visserie inox, structure galvanisée à chaud, intégration soignée. Garantie pose 10 ans par SUNAVIO.",
  },
];

const GUARANTEES = [
  "Bureau d'études — pas installateur générique",
  "Dimensionnement sur factures ONEE réelles",
  "Suivi performance après mise en service",
  "Garantie pose SUNAVIO 10 ans",
];

const HotelMarrakech = () => {
  useLenis();

  return (
    <div className="min-h-screen bg-bg text-wh">
      <Helmet>
        <title>Panneaux solaires pour hôtels & resorts à Marrakech | SUNAVIO</title>
        <meta
          name="description"
          content="Réduisez la facture énergétique de votre hôtel de 40 à 70%. Étude multi-zones, chantier sans gêne pour vos clients, équipements premium. Bureau d'études solaire à Marrakech."
        />
        <link rel="canonical" href={`${SITE_URL}${PATH}`} />
        <meta property="og:title" content="Panneaux solaires pour hôtels & resorts à Marrakech | SUNAVIO" />
        <meta
          property="og:description"
          content="Réduisez la facture énergétique de votre hôtel de 40 à 70%. Étude multi-zones, chantier sans gêne pour vos clients, équipements premium."
        />
        <meta property="og:url" content={`${SITE_URL}${PATH}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}${ogImage}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE_URL}${ogImage}`} />
      </Helmet>

      <Header />

      <main>
        {/* HERO */}
        <section className="relative flex min-h-[75vh] items-center pt-32 pb-20">
          <img
            src={ogImage}
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.22]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(180deg, hsl(var(--bg) / 0.7) 0%, hsl(var(--bg) / 0.95) 100%), radial-gradient(60% 50% at 50% 0%, hsl(var(--or) / 0.14), transparent 70%)",
            }}
          />
          <Container size="wide">
            <div className="max-w-4xl">
              <Reveal>
                <Eyebrow>HÔTELLERIE & RESORTS · MARRAKECH</Eyebrow>
              </Reveal>
              <AnimatedText
                as="h1"
                trigger="mount"
                text="Votre établissement consomme jour et nuit. Faites-en votre première source d'économies."
                accentWords={["première", "source", "d'économies."]}
                className="mt-6 font-display text-display-hero text-wh"
              />
              <Reveal delay={0.2}>
                <p className="mt-8 max-w-2xl text-body-lg text-gr">
                  Climatisation, piscines, SPA, restauration : l'énergie est l'un de vos premiers
                  postes de charge. SUNAVIO conçoit une centrale solaire intégrée à votre
                  architecture, sans compromettre l'expérience client.
                </p>
              </Reveal>
              <Reveal delay={0.35}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    to="/contact"
                    onClick={() => trackContactClick("rendezvous")}
                    className={sunavioButtonVariants({ variant: "primary", size: "lg" })}
                  >
                    Réserver ma visite technique gratuite
                  </Link>
                  <a
                    href="https://wa.me/212660449150?text=Bonjour%2C%20je%20dirige%20un%20%C3%A9tablissement%20hôtelier%20%C3%A0%20Marrakech%20et%20je%20souhaite%20une%20%C3%A9tude%20solaire%20SUNAVIO."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick()}
                    className={sunavioButtonVariants({ variant: "secondary", size: "lg" })}
                  >
                    <span className="inline-flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" /> WhatsApp
                    </span>
                  </a>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* CONSTAT */}
        <section className="bg-bg3 py-24 md:py-32">
          <Container size="wide">
            <SectionHeader
              eyebrow="LE CONSTAT"
              title="Un hôtel n'est pas un bureau."
              accentWords={["pas", "un", "bureau."]}
              intro="Votre courbe de charge ne ressemble à aucune autre. Une étude générique vous coûtera plus cher qu'elle ne vous fera économiser."
            />
            <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
              {PAINS.map((p, i) => {
                const Icon = p.icon;
                return (
                  <Reveal key={p.title} delay={i * 0.1}>
                    <div className="h-full rounded-xl border border-line bg-bg2 p-8 transition-all duration-400 ease-out-expo hover:-translate-y-1 hover:border-or md:p-10">
                      <Icon className="text-or" size={44} strokeWidth={1.5} />
                      <h3 className="mt-6 font-display text-2xl font-semibold text-wh">
                        {p.title}
                      </h3>
                      <p className="mt-4 text-body text-gr">{p.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

        {/* APPROCHE */}
        <section className="bg-bg py-24 md:py-32">
          <Container size="wide">
            <SectionHeader
              eyebrow="NOTRE APPROCHE"
              title="Bureau d'études — pas installateur générique."
              accentWords={["Bureau", "d'études"]}
              intro="On ne vend pas un kit standard. On conçoit une installation calibrée pour votre établissement, vos saisons et votre architecture."
            />
            <div className="mt-20 grid grid-cols-1 gap-x-16 gap-y-14 md:grid-cols-2">
              {APPROACH.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div className="relative border-t border-line pt-8">
                    <span className="font-mono text-sm tracking-widest text-or">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-semibold text-wh">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-body text-gr">{s.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ÉQUIPEMENTS */}
        <section
          className="bg-bg3 py-24 md:py-32"
          style={{
            backgroundImage: `linear-gradient(180deg, hsl(var(--bg3)) 0%, hsl(var(--bg3) / 0.96) 100%), url(${solarTexture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Container size="wide">
            <SectionHeader
              eyebrow="ÉQUIPEMENTS PREMIUM"
              title="Le matériel que nous installons."
              accentWords={["matériel"]}
              intro="Une seule sélection, validée par notre bureau d'études. Pas de second choix selon votre budget."
            />
            <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
              {EQUIPMENT.map((e, i) => {
                const Icon = e.icon;
                return (
                  <Reveal key={e.title} delay={i * 0.08}>
                    <div className="flex h-full gap-6 rounded-xl border border-line bg-bg2 p-8 transition-all duration-400 ease-out-expo hover:border-or">
                      <Icon className="shrink-0 text-or" size={36} strokeWidth={1.5} />
                      <div>
                        <h3 className="font-display text-xl font-semibold text-wh">{e.title}</h3>
                        <p className="mt-3 text-body text-gr">{e.description}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

        {/* RÉALISATION DE RÉFÉRENCE */}
        <section className="bg-bg py-24 md:py-32">
          <Container size="wide">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <Reveal>
                  <Eyebrow>RÉALISATION DE RÉFÉRENCE</Eyebrow>
                </Reveal>
                <AnimatedText
                  as="h2"
                  text="Hôtel de prestige · profil type."
                  accentWords={["profil", "type."]}
                  className="mt-6 font-display text-display-section text-wh"
                />
                <Reveal delay={0.2}>
                  <p className="mt-6 text-body text-gr">
                    Établissement classé 5 étoiles à Marrakech, consommation annuelle 2,5 à 4 GWh.
                    Configuration multi-zones : toitures techniques, parkings ombrés et pergolas
                    de service.
                  </p>
                </Reveal>
                <Reveal delay={0.3}>
                  <p className="mt-6 text-body text-gr">
                    <span className="text-wh">Bon à savoir —</span> votre projet peut, sous
                    conditions de classement, être éligible aux dispositifs de soutien à
                    l'investissement touristique (type Go Siyaha). Nous vous orientons vers les
                    interlocuteurs compétents pendant l'étude.
                  </p>
                </Reveal>
              </div>
              <div className="space-y-6">
                {[
                  { k: "Centrale", v: "250 à 400 kWc multi-zones + stockage" },
                  { k: "Autoconsommation", v: "85 à 95% de la production" },
                  { k: "Réduction de facture", v: "40 à 70% selon le profil" },
                  { k: "Retour sur investissement", v: "5 à 7 ans (variable selon tarif moyen)" },
                ].map((row, i) => (
                  <Reveal key={row.k} delay={i * 0.08}>
                    <div className="flex items-baseline justify-between gap-6 border-b border-line pb-5">
                      <span className="text-eyebrow text-gr2">{row.k}</span>
                      <span className="text-right font-display text-lg text-wh">{row.v}</span>
                    </div>
                  </Reveal>
                ))}
                <Reveal delay={0.4}>
                  <p className="text-sm italic text-gr2">
                    Fourchettes indicatives. Les chiffres réels dépendent de votre tarif ONEE moyen,
                    de votre courbe de charge et de l'étude technique sur site.
                  </p>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>

        {/* GARANTIES + LIEN DÉCRET */}
        <section className="bg-bg3 py-24 md:py-32">
          <Container size="wide">
            <SectionHeader
              eyebrow="GARANTIES"
              title="Ce que SUNAVIO engage."
              accentWords={["SUNAVIO", "engage."]}
            />
            <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {GUARANTEES.map((g, i) => (
                <Reveal key={g} delay={i * 0.06}>
                  <div className="flex items-start gap-4 rounded-xl border border-line bg-bg2 p-6">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-or" size={22} />
                    <span className="text-body text-wh">{g}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.3}>
              <div className="mt-12 rounded-xl border border-or/30 bg-bg2 p-8 md:p-10">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <Eyebrow>CADRE LÉGAL</Eyebrow>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-wh">
                      Le décret 2.25.100 sécurise désormais votre projet.
                    </h3>
                    <p className="mt-3 text-body text-gr">
                      Autoproduction, raccordement, revente du surplus : tout ce qui change pour
                      les hôtels au Maroc.
                    </p>
                  </div>
                  <Link
                    to="/decret-2-25-100-autoproduction-maroc"
                    className={sunavioButtonVariants({ variant: "secondary", size: "md" })}
                  >
                    Lire le décret
                  </Link>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* CTA FINAL */}
        <section className="relative overflow-hidden bg-bg py-24 md:py-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 50%, hsl(var(--or) / 0.18), transparent 70%)",
            }}
          />
          <Container size="wide" className="relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <Hotel className="mx-auto text-or" size={40} strokeWidth={1.5} />
              <AnimatedText
                as="h2"
                text="Votre étude commence par une visite. Elle est gratuite."
                accentWords={["gratuite."]}
                className="mt-6 font-display text-display-section text-wh"
              />
              <Reveal delay={0.2}>
                <p className="mx-auto mt-6 max-w-2xl text-body text-gr">
                  Un ingénieur SUNAVIO se déplace dans votre établissement, relève les zones
                  exploitables et étudie vos factures ONEE. Vous recevez ensuite une étude chiffrée
                  sur-mesure.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    to="/contact"
                    onClick={() => trackContactClick("rendezvous")}
                    className={sunavioButtonVariants({ variant: "primary", size: "lg" })}
                  >
                    <span className="inline-flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      Réserver ma visite technique gratuite
                    </span>
                  </Link>
                  <a
                    href="https://wa.me/212660449150?text=Bonjour%2C%20je%20dirige%20un%20%C3%A9tablissement%20hôtelier%20%C3%A0%20Marrakech%20et%20je%20souhaite%20une%20%C3%A9tude%20solaire%20SUNAVIO."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick()}
                    className={sunavioButtonVariants({ variant: "secondary", size: "lg" })}
                  >
                    <span className="inline-flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" /> WhatsApp
                    </span>
                  </a>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>
      </main>

      <a
        href="https://wa.me/212660449150"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discuter sur WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142_70%_45%)] text-white shadow-lg shadow-black/40 transition-transform hover:scale-105 md:bottom-8 md:right-8"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <Footer />
    </div>
  );
};

export default HotelMarrakech;
