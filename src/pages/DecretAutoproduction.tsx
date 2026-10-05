import { PHONE_BUSINESS } from "@/lib/phones";
import { CheckCircle2, FileCheck, Gauge, Scale, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLenis } from "@/hooks/useLenis";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { AnimatedText } from "@/components/atoms/AnimatedText";
import { Reveal } from "@/components/atoms/Reveal";
import { SectionHeader } from "@/components/atoms/SectionHeader";
import { sunavioButtonVariants } from "@/components/atoms/SunavioButton";
import solarTexture from "@/assets/solar-texture.jpg";
import { trackContactClick, trackWhatsAppClick } from "@/lib/tracking";

const CHANGES = [
  {
    icon: Scale,
    title: "Un cadre d'application en vigueur",
    description:
      "Trois ans après la loi 82-21, le décret d'application fixe les règles de réalisation, de raccordement et d'exploitation des installations d'autoproduction, qu'elles soient hors réseau ou raccordées au réseau.",
  },
  {
    icon: Gauge,
    title: "Moins de 11 kW : régime de déclaration",
    description:
      "Moins de 11 kW raccordés en basse tension : régime de déclaration auprès du gestionnaire du réseau de distribution, avec convention de raccordement avant travaux et certificat de conformité à la mise en exploitation.",
  },
  {
    icon: FileCheck,
    title: "Vente de l'excédent plafonnée",
    description:
      "La loi 82-21 (art. 12) permet de vendre au gestionnaire de réseau jusqu'à 20 % de la production annuelle, à un tarif fixé par l'ANRE (aujourd'hui fixé pour les raccordements HT et MT).",
  },
];

const STEPS = [
  { title: "Visite technique gratuite", description: "Relevé du site, analyse de vos factures et de vos contraintes." },
  { title: "Étude & dimensionnement", description: "Dimensionnement à partir de vos factures réelles." },
  { title: "Dossier de raccordement", description: "Montage du dossier de demande d'accord de raccordement." },
  { title: "Installation & mise en service", description: "Pose, raccordement, tests et mise en service supervisés par un ingénieur." },
];

const DecretAutoproduction = () => {
  useLenis();

  return (
    <div className="min-h-screen bg-bg text-wh">
      <SEO
        title="Décret 2-25-100 : autoproduction d'électricité au Maroc — ce qui change | SUNAVIO"
        description="Le décret 2-25-100, en vigueur depuis le 9 juin 2026, fixe les conditions de réalisation et d'exploitation des installations d'autoproduction prévues par la loi 82-21. SUNAVIO monte votre dossier de raccordement."
        path="/decret-2-25-100-autoproduction-maroc"
      />
      <Header />
      <main>
        {/* HERO */}
        <section className="relative flex min-h-[70vh] items-center pt-32 pb-20">
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
                "radial-gradient(60% 50% at 50% 0%, hsl(var(--or) / 0.12), transparent 70%)",
            }}
          />
          <Container size="wide">
            <div className="max-w-4xl">
              <Reveal>
                <Eyebrow>DÉCRET 2-25-100 · EN VIGUEUR DEPUIS LE 9 JUIN 2026</Eyebrow>
              </Reveal>
              <AnimatedText
                as="h1"
                trigger="mount"
                text="Autoproduction : le décret d'application est en vigueur."
                accentWords={["en", "vigueur"]}
                className="mt-6 font-display text-display-hero text-wh"
              />
              <Reveal delay={0.2}>
                <p className="mt-8 max-w-2xl text-body-lg text-gr">
                  Le décret 2-25-100, en vigueur depuis le 9 juin 2026, fixe les conditions de
                  réalisation et d'exploitation des installations d'autoproduction prévues par la
                  loi 82-21. SUNAVIO conçoit votre projet et monte le dossier, clé en main.
                </p>
              </Reveal>
              <Reveal delay={0.35}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    to="/contact"
                    onClick={() => trackContactClick("rendezvous")}
                    className={sunavioButtonVariants({ variant: "primary", size: "lg" })}
                  >
                    Demander une pré-étude
                  </Link>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* SECTION — Ce que la loi change */}
        <section className="bg-bg3 py-24 md:py-32">
          <Container size="wide">
            <SectionHeader
              eyebrow="CE QUE LE DÉCRET FIXE"
              title="Concrètement, pour vous."
              accentWords={["pour", "vous."]}
            />
            <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
              {CHANGES.map((c, i) => {
                const Icon = c.icon;
                return (
                  <Reveal key={c.title} delay={i * 0.1}>
                    <div className="h-full rounded-xl border border-line bg-bg2 p-8 transition-all duration-400 ease-out-expo hover:-translate-y-1 hover:border-or md:p-10">
                      <Icon className="text-or" size={48} strokeWidth={1.5} />
                      <h3 className="mt-6 font-display text-2xl font-semibold text-wh">
                        {c.title}
                      </h3>
                      <p className="mt-4 text-body text-gr">{c.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

        {/* SECTION — Ce qui s'applique à votre projet */}
        <section className="bg-bg py-24 md:py-32">
          <Container size="wide">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <Reveal>
                  <Eyebrow>VOTRE PROJET</Eyebrow>
                </Reveal>
                <AnimatedText
                  as="h2"
                  text="Ce qui s'applique à votre site."
                  accentWords={["votre", "site."]}
                  className="mt-6 font-display text-display-section text-wh"
                />
              </div>
              <div className="space-y-6">
                <Reveal delay={0.1}>
                  <p className="text-body text-gr">
                    De 11 kW à 5 MW, en basse ou moyenne tension : accord de raccordement du
                    gestionnaire du réseau de distribution, avant les travaux.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-body text-gr">
                    Le dossier à déposer doit être complet. Il comprend notamment : coordonnées du
                    site, spécifications techniques détaillées des équipements (fabricant,
                    références), étude d'impact sur l'environnement, conformément à la législation
                    en vigueur, rapport de consommation annuelle des trois dernières années (ou
                    consommation prévue sur trois ans pour un nouveau raccordement ou une hausse
                    des quantités souscrites) et schéma de raccordement. La décision dépend de la
                    capacité d'accueil du réseau et d'une étude technique réalisée par le
                    gestionnaire du réseau de distribution, aux frais du demandeur.
                  </p>
                </Reveal>
                <Reveal delay={0.3}>
                  <p className="text-body text-gr">
                    À partir de 5 MW : autorisation des services du ministère chargé de
                    l'énergie, après avis du gestionnaire de réseau.
                  </p>
                </Reveal>
                <Reveal delay={0.4}>
                  <p className="text-xs text-gr2">
                    Le texte officiel du décret 2-25-100 est en arabe : il est publié au Bulletin
                    officiel n° 7489 du 9 mars 2026. Sa traduction française officielle n'est pas
                    disponible au 5 octobre 2026. Cette page en présente le contenu, sans le citer.
                  </p>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION — Pourquoi un bureau d'études */}
        <section className="bg-bg3 py-24 md:py-32">
          <Container size="wide">
            <SectionHeader
              eyebrow="POURQUOI SUNAVIO"
              title="Pourquoi passer par un bureau d'études."
              accentWords={["bureau", "d'études."]}
              intro="Ce dossier n'est pas un formulaire qu'on remplit seul. Un dossier incomplet doit être complété sous 30 jours, sinon il est renvoyé ; une étude technique défavorable entraîne un refus. SUNAVIO réalise votre dimensionnement, monte le dossier de demande d'accord de raccordement et vous accompagne jusqu'à la mise en service, sous réserve de l'accord du gestionnaire de réseau."
            />
            <div className="mt-20 grid grid-cols-1 gap-x-16 gap-y-14 md:grid-cols-2">
              {STEPS.map((s, i) => (
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

        {/* SECTION — CTA final */}
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
              <AnimatedText
                as="h2"
                text="Le décret est en vigueur depuis le 9 juin 2026."
                accentWords={["9", "juin", "2026"]}
                className="font-display text-display-section text-wh"
              />
              <Reveal delay={0.2}>
                <p className="mx-auto mt-6 max-w-2xl text-body text-gr">
                  Faites étudier votre site dès maintenant.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    to="/contact"
                    onClick={() => trackContactClick("rendezvous")}
                    className={sunavioButtonVariants({ variant: "primary", size: "lg" })}
                  >
                    <span className="relative z-10 inline-flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      Réserver ma visite technique gratuite
                    </span>
                  </Link>
                  <a
                    href={`${PHONE_BUSINESS.whatsapp}?text=Bonjour%2C%20je%20souhaite%20une%20%C3%A9tude%20pour%20mon%20projet%20d%27autoproduction%20solaire%20(d%C3%A9cret%202.25.100).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick()}
                    className={sunavioButtonVariants({ variant: "secondary", size: "lg" })}
                  >
                    <span className="relative z-10 inline-flex items-center gap-2">
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
        href={PHONE_BUSINESS.whatsapp}
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

export default DecretAutoproduction;
