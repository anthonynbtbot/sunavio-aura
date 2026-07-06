import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  MessageCircle,
  Sun,
  Battery,
  Wrench,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { ReactNode } from "react";
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
import { trackContactClick, trackWhatsAppClick } from "@/lib/tracking";

const SITE_URL = "https://sunavio.com";

const EQUIPMENT = [
  {
    icon: Sun,
    title: "Panneaux Jinko Tiger Neo N-type",
    description:
      "Rendement haut de gamme, garantie produit 12 ans et garantie de production 30 ans. Conçus pour tenir face à la chaleur marocaine.",
  },
  {
    icon: Wrench,
    title: "Onduleurs WeCo",
    description:
      "Plateforme robuste, pilotage fin de l'autoconsommation, compatible monophasé et triphasé.",
  },
  {
    icon: Battery,
    title: "Stockage WeCo / A-KOOL 7X",
    description:
      "Batteries dimensionnées sur votre courbe de charge réelle pour absorber les pics et sécuriser l'alimentation.",
  },
  {
    icon: ShieldCheck,
    title: "Structure galvanisée — garantie SUNAVIO 10 ans",
    description:
      "Visserie inox, galvanisation à chaud, intégration soignée. Notre signature : garantie pose 10 ans.",
  },
];

const GUARANTEES = [
  "Bureau d'études — pas installateur générique",
  "Dimensionnement sur factures ONEE réelles",
  "Suivi performance après mise en service",
  "Garantie pose SUNAVIO 10 ans",
];

export interface SegmentItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SegmentMetric {
  k: string;
  v: string;
}

export interface SegmentShellProps {
  // SEO
  path: string;
  seoTitle: string;
  seoDescription: string;
  ogImage: string;
  // Hero
  eyebrow: string;
  heroTitle: string;
  heroAccentWords: string[];
  heroSubtitle: string;
  whatsappMessage: string;
  // Sections
  painTitle: string;
  painAccent: string[];
  painIntro?: string;
  pains: SegmentItem[];
  approachIntro: string;
  approach: { title: string; description: string }[];
  referenceTitle: string;
  referenceAccent: string[];
  referenceParagraphs: ReactNode[];
  metrics: SegmentMetric[];
  metricsNote?: string;
  ctaTitle: string;
  ctaAccent: string[];
  ctaIntro: string;
  // Optional cross-link extra (e.g. kits-piscine)
  extraCrossLink?: { eyebrow: string; title: string; description: string; to: string; label: string };
}

export function SegmentShell({
  path,
  seoTitle,
  seoDescription,
  ogImage,
  eyebrow,
  heroTitle,
  heroAccentWords,
  heroSubtitle,
  whatsappMessage,
  painTitle,
  painAccent,
  painIntro,
  pains,
  approachIntro,
  approach,
  referenceTitle,
  referenceAccent,
  referenceParagraphs,
  metrics,
  metricsNote,
  ctaTitle,
  ctaAccent,
  ctaIntro,
  extraCrossLink,
}: SegmentShellProps) {
  useLenis();
  const waHref = `https://wa.me/212660449150?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-bg text-wh">
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={`${SITE_URL}${path}`} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={`${SITE_URL}${path}`} />
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
                <Eyebrow>{eyebrow}</Eyebrow>
              </Reveal>
              <AnimatedText
                as="h1"
                trigger="mount"
                text={heroTitle}
                accentWords={heroAccentWords}
                className="mt-6 font-display text-display-hero text-wh"
              />
              <Reveal delay={0.2}>
                <p className="mt-8 max-w-2xl text-body-lg text-gr">{heroSubtitle}</p>
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
                    href={waHref}
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
              title={painTitle}
              accentWords={painAccent}
              intro={painIntro}
            />
            <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
              {pains.map((p, i) => {
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
              intro={approachIntro}
            />
            <div className="mt-20 grid grid-cols-1 gap-x-16 gap-y-14 md:grid-cols-2">
              {approach.map((s, i) => (
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
                  text={referenceTitle}
                  accentWords={referenceAccent}
                  className="mt-6 font-display text-display-section text-wh"
                />
                {referenceParagraphs.map((p, i) => (
                  <Reveal key={i} delay={0.2 + i * 0.1}>
                    <p className="mt-6 text-body text-gr">{p}</p>
                  </Reveal>
                ))}
              </div>
              <div className="space-y-6">
                {metrics.map((row, i) => (
                  <Reveal key={row.k} delay={i * 0.08}>
                    <div className="flex items-baseline justify-between gap-6 border-b border-line pb-5">
                      <span className="text-eyebrow text-gr2">{row.k}</span>
                      <span className="text-right font-display text-lg text-wh">{row.v}</span>
                    </div>
                  </Reveal>
                ))}
                {metricsNote && (
                  <Reveal delay={0.4}>
                    <p className="text-sm italic text-gr2">{metricsNote}</p>
                  </Reveal>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* GARANTIES + LIEN DÉCRET + lien croisé optionnel */}
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
                      Autoproduction, raccordement, revente du surplus : tout ce qui change au
                      Maroc.
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

            {extraCrossLink && (
              <Reveal delay={0.4}>
                <div className="mt-6 rounded-xl border border-line bg-bg2 p-8 md:p-10">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <Eyebrow>{extraCrossLink.eyebrow}</Eyebrow>
                      <h3 className="mt-3 font-display text-2xl font-semibold text-wh">
                        {extraCrossLink.title}
                      </h3>
                      <p className="mt-3 text-body text-gr">{extraCrossLink.description}</p>
                    </div>
                    <Link
                      to={extraCrossLink.to}
                      className={sunavioButtonVariants({ variant: "secondary", size: "md" })}
                    >
                      {extraCrossLink.label}
                    </Link>
                  </div>
                </div>
              </Reveal>
            )}
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
              <AnimatedText
                as="h2"
                text={ctaTitle}
                accentWords={ctaAccent}
                className="font-display text-display-section text-wh"
              />
              <Reveal delay={0.2}>
                <p className="mx-auto mt-6 max-w-2xl text-body text-gr">{ctaIntro}</p>
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
                    href={waHref}
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
}
