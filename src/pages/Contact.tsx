import { ArrowRight, Clock, Mail, Map, MapPin, MessageCircle, Phone } from "lucide-react";
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

interface PersonCard {
  role: string;
  name: string;
  subtitle: string;
  whatsapp: string;
  email: string;
  phoneDisplay: string;
  phoneHref: string;
}

const PEOPLE: PersonCard[] = [
  {
    role: "CO-FONDATEUR",
    name: "Anthony NEBOUT",
    subtitle: "Direction technique & projets",
    whatsapp: "https://wa.me/212663284424",
    email: "sunavio.contact@gmail.com",
    phoneDisplay: "+212 663 284 424",
    phoneHref: "tel:+212663284424",
  },
  {
    role: "COMMERCIAL",
    name: "Imane ZNIN",
    subtitle: "Développement commercial & relation client",
    whatsapp: "https://wa.me/212663429659",
    email: "contact.sunavio@gmail.com",
    phoneDisplay: "+212 663 429 659",
    phoneHref: "tel:+212663429659",
  },
];

const Contact = () => {
  useLenis();

  return (
    <div className="min-h-screen bg-bg text-wh">
      <Header />
      <main>
        {/* SECTION 1 — Hero court */}
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
                <Eyebrow>CONTACT</Eyebrow>
              </Reveal>
              <AnimatedText
                as="h1"
                trigger="mount"
                text="Parlons de votre projet."
                accentWords={["votre", "projet."]}
                className="mt-6 font-display text-display-hero text-wh"
              />
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-2xl text-body text-gr">
                  Une estimation en ligne, un message direct, ou un rendez-vous sur site.
                  Nous répondons sous 24h ouvrées.
                </p>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* SECTION 2 — Estimation en ligne */}
        <section className="relative overflow-hidden bg-bg3 py-24 md:py-32">
          <img
            src={solarTexture}
            alt=""
            aria-hidden
            loading="lazy"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.15] mix-blend-luminosity"
          />
          <Container size="wide" className="relative">
            <SectionHeader
              eyebrow="ESTIMATION DÉTAILLÉE"
              title="Connaître le potentiel de votre toit en 2 minutes."
              accentWords={["de", "votre", "toit"]}
              intro="Notre simulateur calcule précisément la puissance installable, la production annuelle, les économies réalisées et le retour sur investissement. Basé sur les données ONEE, l'ensoleillement réel Marrakech et les tarifs équipements actualisés."
            />
            <Reveal delay={0.3} className="mt-10">
              <div className="flex flex-col items-start gap-3">
                <a
                  href="https://estimer.sunavio.com"
                  className={sunavioButtonVariants({ variant: "primary", size: "lg" })}
                >
                  <span className="relative z-10 inline-flex items-center gap-2">
                    Lancer le simulateur <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
                <p className="text-xs text-gr2">Estimation gratuite, sans engagement.</p>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* SECTION 3 — Contact direct */}
        <section className="py-24 md:py-32">
          <Container size="wide">
            <SectionHeader
              eyebrow="CONTACT DIRECT"
              title="Une question ? Parlons-en."
              accentWords={["Parlons-en"]}
              intro="Écrivez-nous directement sur WhatsApp ou par email. Nous répondons rapidement, en français ou en anglais."
            />

            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
              {PEOPLE.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.1}>
                  <article className="group h-full rounded-xl border border-line bg-bg2 p-8 transition-all duration-400 ease-out-expo hover:-translate-y-1 hover:border-or md:p-10">
                    <Eyebrow>{p.role}</Eyebrow>
                    <h3 className="mt-4 font-display text-display-sub text-wh">{p.name}</h3>
                    <p className="mt-2 text-sm text-gr2">{p.subtitle}</p>

                    <div className="mt-8 flex flex-col gap-3">
                      <a
                        href={p.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={sunavioButtonVariants({ variant: "primary" })}
                      >
                        <span className="relative z-10 inline-flex items-center gap-2">
                          <MessageCircle className="h-4 w-4" /> WhatsApp
                        </span>
                      </a>
                      <a
                        href={`mailto:${p.email}`}
                        className={sunavioButtonVariants({ variant: "secondary" })}
                      >
                        <span className="relative z-10 inline-flex items-center gap-2">
                          <Mail className="h-4 w-4" /> {p.email}
                        </span>
                      </a>
                      <a
                        href={p.phoneHref}
                        className={sunavioButtonVariants({ variant: "ghost" })}
                      >
                        <span className="relative z-10 inline-flex items-center gap-2">
                          <Phone className="h-4 w-4" /> {p.phoneDisplay}
                        </span>
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* SECTION 4 — Informations pratiques */}
        <section className="bg-bg3 py-24 md:py-32">
          <Container size="wide">
            <div className="max-w-3xl">
              <Reveal>
                <Eyebrow>INFORMATIONS PRATIQUES</Eyebrow>
              </Reveal>
              <AnimatedText
                as="h2"
                text="Venir nous voir."
                className="mt-6 font-display text-display-sub text-wh"
              />
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              <Reveal delay={0}>
                <div className="rounded-xl border border-line bg-bg2 p-8">
                  <MapPin size={48} className="text-or" />
                  <h3 className="mt-6 font-display text-xl text-wh">Notre bureau</h3>
                  <address className="mt-4 not-italic text-sm leading-relaxed text-gr">
                    SUNAVIO SARL<br />
                    Zenith Business Center<br />
                    Rue Mouslim, Lot Boukar<br />
                    3ème étage, Apt N°14<br />
                    Bab Doukala<br />
                    Marrakech-Guéliz, Maroc
                  </address>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="rounded-xl border border-line bg-bg2 p-8">
                  <Clock size={48} className="text-or" />
                  <h3 className="mt-6 font-display text-xl text-wh">Horaires d'ouverture</h3>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-gr">
                    <li>Lundi — Vendredi : 9h00 — 18h00</li>
                    <li>Samedi : 9h00 — 13h00 (sur rendez-vous)</li>
                    <li>Dimanche : Fermé</li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="rounded-xl border border-line bg-bg2 p-8">
                  <Map size={48} className="text-or" />
                  <h3 className="mt-6 font-display text-xl text-wh">Zone d'intervention</h3>
                  <p className="mt-4 text-sm leading-relaxed text-gr">
                    Marrakech et région.<br /><br />
                    Interventions ponctuelles possibles dans tout le Royaume du Maroc
                    pour projets d'envergure (domaines, golfs, groupes hôteliers).
                  </p>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* SECTION 5 — CTA final */}
        <section className="relative overflow-hidden py-32 md:py-40">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(50% 60% at 50% 30%, hsl(var(--or) / 0.18), transparent 70%)",
            }}
          />
          <Container size="wide">
            <div className="mx-auto max-w-3xl text-center">
              <AnimatedText
                as="h2"
                text="Prêt à démarrer ?"
                accentWords={["démarrer"]}
                className="font-display text-display-section text-wh"
              />
              <Reveal delay={0.2}>
                <p className="mx-auto mt-6 max-w-xl text-body text-gr">
                  Commencez par une estimation précise en ligne, ou écrivez-nous directement.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="https://estimer.sunavio.com"
                    className={sunavioButtonVariants({ variant: "primary", size: "lg" })}
                  >
                    <span className="relative z-10 inline-flex items-center gap-2">
                      Estimer mon projet <ArrowRight className="h-4 w-4" />
                    </span>
                  </a>
                  <a
                    href="https://wa.me/212663284424"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={sunavioButtonVariants({ variant: "secondary", size: "lg" })}
                  >
                    <span className="relative z-10 inline-flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" /> WhatsApp Anthony
                    </span>
                  </a>
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

export default Contact;
