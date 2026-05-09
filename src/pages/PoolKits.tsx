import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Sun,
  Battery,
  Wrench,
  Shield,
  MapPin,
  FileText,
  CheckCircle,
  Check,
  MessageCircle,
} from "lucide-react";

import { useLenis } from "@/hooks/useLenis";
import { SEO } from "@/components/SEO";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { SunavioButton } from "@/components/atoms/SunavioButton";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import poolBg from "@/assets/pool-villa-sunset.jpg";

// Endpoint Formspree pour la page kits piscine
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqvpgng";
const PHONE = "+212663429659";
const PHONE_DISPLAY = "+212 663 429 659";
const WHATSAPP_URL = `https://wa.me/212663429659?text=${encodeURIComponent(
  "Bonjour SUNAVIO, je suis intéressé par un kit solaire piscine.",
)}`;

const EASE = [0.22, 1, 0.36, 1] as const;

const scrollToForm = () => {
  document.getElementById("form")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* ---------------- Reveal helper ---------------- */
const FadeIn = ({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease: EASE, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ---------------- Coin doré décoratif ---------------- */
const GoldCorners = ({ active = false }: { active?: boolean }) => (
  <>
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute left-0 top-0 h-4 w-4 border-l border-t",
        active ? "border-or" : "border-or/60",
      )}
    />
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute right-0 top-0 h-4 w-4 border-r border-t",
        active ? "border-or" : "border-or/60",
      )}
    />
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b border-l",
        active ? "border-or" : "border-or/60",
      )}
    />
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b border-r",
        active ? "border-or" : "border-or/60",
      )}
    />
  </>
);

/* ---------------- Sections ---------------- */
function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24">
      <img
        src={poolBg}
        alt="Villa premium avec piscine au coucher du soleil — Marrakech"
        fetchPriority="high"
        decoding="async"
        width={1920}
        height={1280}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-bg/70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, hsl(var(--bg) / 0.55) 0%, hsl(var(--bg) / 0.55) 50%, hsl(var(--bg) / 0.95) 100%)",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-hero-glow" />

      <Container size="wide" className="relative z-10">
        <div className="max-w-3xl">
          <FadeIn>
            <Eyebrow>Kits solaires piscine · Marrakech · Essaouira · Souss</Eyebrow>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-wh md:text-7xl">
              Votre piscine sans <span className="text-accent-gradient">facture ONEE.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-7 max-w-2xl text-lg text-gr md:text-xl">
              Kits solaires clé en main pour villas premium à Marrakech, Essaouira et Souss.
              Économisez jusqu'à 19 800 DH par an dès la première année.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-9 flex flex-wrap gap-6">
              <div className="relative px-5 py-3">
                <GoldCorners />
                <div className="font-display text-2xl font-semibold text-or md:text-3xl">
                  ROI 4 à 5 ans
                </div>
                <div className="text-eyebrow mt-1">Retour sur investissement</div>
              </div>
              <div className="relative px-5 py-3">
                <GoldCorners />
                <div className="font-display text-2xl font-semibold text-or md:text-3xl">
                  Garantie 25 ans
                </div>
                <div className="text-eyebrow mt-1">Panneaux Jinko</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <SunavioButton size="lg" onClick={scrollToForm}>
                Recevoir mon devis gratuit
              </SunavioButton>
              <span className="text-sm text-gr2">
                Visite technique offerte · Sans engagement
              </span>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

function Problem() {
  const items = [
    { title: "Pompe filtration", desc: "1 500 à 3 000 kWh par an" },
    { title: "Chauffage piscine", desc: "Jusqu'à 5 000 kWh supplémentaires" },
    { title: "Facture ONEE qui explose", desc: "+30% chaque été" },
  ];
  return (
    <section className="relative py-24 md:py-32">
      <Container size="wide">
        <FadeIn>
          <h2 className="mx-auto max-w-3xl text-center font-display text-4xl font-semibold text-wh md:text-5xl">
            La piscine qui vous coûte une fortune
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <FadeIn key={it.title} delay={i * 0.08}>
              <div className="relative h-full bg-bg2 p-8">
                <GoldCorners />
                <div className="text-eyebrow">0{i + 1}</div>
                <h3 className="mt-4 font-display text-2xl font-semibold text-wh">{it.title}</h3>
                <p className="mt-3 text-gr">{it.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <p className="mt-14 text-center font-display text-2xl italic text-or md:text-3xl">
            Et si votre piscine produisait sa propre énergie ?
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}

function Solution() {
  const cols = [
    {
      icon: Sun,
      title: "Production solaire",
      desc: "Panneaux Jinko Tiger Neo 630W bifaciaux, rendement 22.54%",
    },
    {
      icon: Battery,
      title: "Stockage intelligent",
      desc: "Batteries WeCo 5K3 EVO, 7 000+ cycles",
    },
    {
      icon: Wrench,
      title: "Installation clé en main",
      desc: "De l'étude au raccordement, par notre équipe certifiée",
    },
    {
      icon: Shield,
      title: "Garanties premium",
      desc: "25 ans panneaux, 10 ans onduleur, 10 ans batteries",
    },
  ];
  return (
    <section className="relative border-y border-line/60 bg-bg3 py-24 md:py-32">
      <Container size="wide">
        <FadeIn>
          <h2 className="mx-auto max-w-3xl text-center font-display text-4xl font-semibold text-wh md:text-5xl">
            Une solution pensée pour votre villa
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {cols.map(({ icon: Icon, title, desc }, i) => (
            <FadeIn key={title} delay={i * 0.08}>
              <div className="flex flex-col items-start">
                <div className="relative inline-flex h-14 w-14 items-center justify-center border border-or/40 bg-or/5">
                  <Icon className="h-6 w-6 text-or" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-wh">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gr">{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- KITS ---------------- */
type Kit = {
  badge: string;
  name: string;
  power: string;
  ttc: string;
  ht: string;
  features: string[];
  savings: string;
  roi: string;
  highlight?: boolean;
  topBadge?: string;
};

const KITS: Kit[] = [
  {
    name: "KIT ESSENTIEL",
    power: "8 kW",
    badge: "Idéal piscine 6×12m",
    ttc: "65 905 DH TTC",
    ht: "56 248 DH HT",
    features: [
      "13 panneaux Jinko Tiger Neo 630W",
      "Onduleur hybride 8 kW",
      "Structure et pose incluses",
      "Mise en service garantie",
    ],
    savings: "Jusqu'à 13 000 DH par an",
    roi: "Environ 5 ans",
  },
  {
    name: "KIT CONFORT",
    power: "10 kW",
    badge: "Idéal piscine 8×16m + chauffage",
    ttc: "73 074 DH TTC",
    ht: "62 529 DH HT",
    features: [
      "16 panneaux Jinko Tiger Neo 630W",
      "Onduleur hybride 10 kW",
      "Structure et pose incluses",
      "Mise en service garantie",
    ],
    savings: "Jusqu'à 16 500 DH par an",
    roi: "Environ 4,5 ans",
    highlight: true,
    topBadge: "Le plus choisi",
  },
  {
    name: "KIT PREMIUM",
    power: "12 kW",
    badge: "Idéal grandes villas",
    ttc: "82 464 DH TTC",
    ht: "70 660 DH HT",
    features: [
      "19 panneaux Jinko Tiger Neo 630W",
      "Onduleur hybride 12 kW",
      "Structure et pose incluses",
      "Mise en service garantie",
    ],
    savings: "Jusqu'à 19 800 DH par an",
    roi: "Environ 4 ans",
  },
];

function Kits() {
  return (
    <section className="relative py-24 md:py-32">
      <Container size="wide">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Catalogue 2026</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-semibold text-wh md:text-5xl">
              Nos 3 kits piscine 2026
            </h2>
            <p className="mt-4 text-lg text-gr">
              Choisissez la puissance adaptée à votre piscine
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {KITS.map((kit, i) => (
            <FadeIn key={kit.name} delay={i * 0.08}>
              <div
                className={cn(
                  "relative flex h-full flex-col bg-bg2 p-8",
                  kit.highlight ? "border-2 border-or shadow-cta" : "border border-line",
                )}
              >
                {kit.topBadge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-or px-4 py-1 text-xs font-semibold uppercase tracking-widest text-bg">
                    {kit.topBadge}
                  </div>
                )}

                <div className="text-eyebrow">{kit.name}</div>
                <div className="mt-1 font-display text-5xl font-semibold text-wh">
                  {kit.power}
                </div>
                <div className="mt-3 inline-flex w-fit border border-or/30 px-3 py-1 text-xs font-medium text-or">
                  {kit.badge}
                </div>

                <div className="mt-7 border-t border-line pt-6">
                  <div className="font-display text-3xl font-semibold text-wh md:text-4xl">
                    {kit.ttc}
                  </div>
                  <div className="mt-1 text-sm text-gr2">{kit.ht}</div>
                </div>

                <ul className="mt-7 space-y-3">
                  {kit.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gr">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-or" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 space-y-2 border-t border-line pt-6 text-sm">
                  <div className="flex justify-between text-gr">
                    <span>Économies</span>
                    <span className="text-wh">{kit.savings}</span>
                  </div>
                  <div className="flex justify-between text-gr">
                    <span>ROI</span>
                    <span className="text-wh">{kit.roi}</span>
                  </div>
                </div>

                <div className="mt-8">
                  <SunavioButton
                    size="md"
                    variant={kit.highlight ? "primary" : "secondary"}
                    onClick={scrollToForm}
                    className="w-full"
                  >
                    Choisir ce kit
                  </SunavioButton>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.1}>
          <p className="mt-12 text-center text-sm text-gr">
            Paiement échelonné 30/30/40 — Visite technique gratuite — TVA 10% sur les panneaux
          </p>
          <p className="mx-auto mt-6 max-w-4xl text-center text-xs italic leading-relaxed text-gr2">
            Les tarifs présentés sont indicatifs et correspondent à une installation standard
            sur toiture accessible en zone Marrakech. Le devis définitif est établi après
            visite technique gratuite et peut varier selon la distance, la complexité
            d'installation (toiture en pente, accessibilité, longueur de câblage) et les
            options choisies. Les économies annuelles sont calculées sur la base d'un tarif
            ONEE moyen de 1,55 DH/kWh et d'un taux d'autoconsommation de 65%. Elles peuvent
            varier selon votre profil de consommation et l'évolution des tarifs ONEE.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}

function Method() {
  const items = [
    { icon: MapPin, label: "Visite sur site offerte" },
    { icon: FileText, label: "Devis détaillé sans engagement" },
    { icon: CheckCircle, label: "Prix ferme après étude" },
  ];
  return (
    <section className="relative bg-bg2 py-24 md:py-32">
      <Container size="wide">
        <FadeIn>
          <h2 className="mx-auto max-w-3xl text-center font-display text-4xl font-semibold text-wh md:text-5xl">
            Pourquoi nous visitons avant de chiffrer
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-gr">
            Chaque villa est unique. La distance avec le compteur, l'accessibilité de la
            toiture, l'intégration paysagère, la puissance ONEE souscrite ou la présence d'une
            PAC piscine peuvent ajuster le devis. C'est pour cela que notre visite technique
            est systématique et gratuite, et que nos prix publics restent indicatifs. Vous
            recevez un devis personnalisé, transparent, sans surprise au moment de la
            signature.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {items.map(({ icon: Icon, label }, i) => (
            <FadeIn key={label} delay={i * 0.08}>
              <div className="flex flex-col items-center text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-or/40 bg-or/5">
                  <Icon className="h-6 w-6 text-or" />
                </div>
                <p className="mt-4 font-medium text-wh">{label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}


function WhySunavioPool() {
  const items = [
    {
      icon: FileText,
      title: "Bureau d'études dédié",
      desc: "chaque projet est dimensionné sur mesure",
    },
    {
      icon: Shield,
      title: "Matériel premium uniquement",
      desc: "Jinko Tiger Neo + WeCo",
    },
    {
      icon: Wrench,
      title: "Équipe locale",
      desc: "interventions rapides et SAV garanti",
    },
    {
      icon: CheckCircle,
      title: "Honnêteté technique",
      desc: "nous ne vendons que ce qui est réellement rentable pour vous",
    },
  ];
  return (
    <section className="relative border-y border-line/60 bg-bg3 py-24 md:py-32">
      <Container size="wide">
        <FadeIn>
          <h2 className="text-center font-display text-4xl font-semibold text-wh md:text-5xl">
            Pourquoi SUNAVIO ?
          </h2>
        </FadeIn>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <FadeIn key={title} delay={i * 0.06}>
              <div className="flex gap-5">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center border border-or/40 bg-or/5">
                  <Icon className="h-5 w-5 text-or" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-wh">{title}</h3>
                  <p className="mt-2 text-gr">{desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- FORMULAIRE ---------------- */
function LeadForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Validation simple
    const name = (data.get("name") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim();
    const email = (data.get("email") as string)?.trim();

    if (!name || !phone || !email) {
      setError("Merci de remplir tous les champs obligatoires.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Adresse email invalide.");
      return;
    }
    if (name.length > 120 || phone.length > 40 || email.length > 200) {
      setError("Un des champs dépasse la longueur autorisée.");
      return;
    }

    data.append("_subject", "Nouveau lead — Kit solaire piscine SUNAVIO");
    data.append("_cc", "sunavio.contact@gmail.com,Contact.sunavio@gmail.com");

    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Échec de l'envoi");
      setDone(true);
      form.reset();
    } catch {
      setError("Une erreur est survenue. Merci de réessayer ou de nous appeler.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="form" className="relative py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-cta-final-glow" />
      <Container size="wide" className="relative">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Demande de devis</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-semibold text-wh md:text-5xl">
              Recevez votre devis personnalisé
            </h2>
            <p className="mt-4 text-lg text-gr">
              Réponse sous 24h — visite technique gratuite — sans engagement
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative mx-auto mt-12 max-w-2xl border border-or/60 bg-bg2 p-8 md:p-12">
            <GoldCorners active />

            {done ? (
              <div className="py-10 text-center">
                <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-or/10">
                  <CheckCircle className="h-8 w-8 text-or" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-wh">
                  Merci, nous vous recontactons sous 24h.
                </h3>
                <p className="mt-3 text-gr">
                  Un membre de notre équipe vous contactera très prochainement pour planifier
                  votre visite technique gratuite.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 md:grid-cols-2">
                  <FormField label="Nom complet *" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      maxLength={120}
                      autoComplete="name"
                      className={inputCls}
                    />
                  </FormField>
                  <FormField label="Téléphone *" htmlFor="phone">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      maxLength={40}
                      autoComplete="tel"
                      className={inputCls}
                    />
                  </FormField>
                </div>

                <FormField label="Email *" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={200}
                    autoComplete="email"
                    className={inputCls}
                  />
                </FormField>

                <div className="grid gap-5 md:grid-cols-2">
                  <FormField label="Ville" htmlFor="city">
                    <select id="city" name="city" defaultValue="Marrakech" className={inputCls}>
                      <option>Marrakech</option>
                      <option>Essaouira</option>
                      <option>Agadir</option>
                      <option>Autre</option>
                    </select>
                  </FormField>
                  <FormField label="Taille de piscine" htmlFor="pool_size">
                    <select id="pool_size" name="pool_size" defaultValue="50-80m²" className={inputCls}>
                      <option>Moins de 50m²</option>
                      <option>50-80m²</option>
                      <option>80-120m²</option>
                      <option>Plus de 120m²</option>
                    </select>
                  </FormField>
                </div>

                <FormField label="Avec chauffage piscine ?">
                  <div className="mt-1 flex gap-6">
                    {["Oui", "Non"].map((v, i) => (
                      <label key={v} className="inline-flex cursor-pointer items-center gap-2 text-wh">
                        <input
                          type="radio"
                          name="heating"
                          value={v}
                          defaultChecked={i === 1}
                          className="h-4 w-4 accent-[hsl(var(--or))]"
                        />
                        <span>{v}</span>
                      </label>
                    ))}
                  </div>
                </FormField>

                {error && (
                  <p className="text-sm text-destructive" role="alert">
                    {error}
                  </p>
                )}

                <SunavioButton
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={submitting}
                >
                  {submitting ? "Envoi en cours…" : "Recevoir mon devis"}
                </SunavioButton>

                <p className="text-center text-xs text-gr2">
                  Vos données restent confidentielles et ne sont utilisées que pour vous
                  recontacter.
                </p>
              </form>
            )}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

const inputCls =
  "block w-full rounded-md border border-line bg-bg3 px-4 py-3 text-sm text-wh placeholder:text-gr2 focus:border-or focus:outline-none focus:ring-1 focus:ring-or";

function FormField({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-xs font-medium uppercase tracking-wider text-gr">
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

/* ---------------- WhatsApp flottant ---------------- */
function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142_70%_45%)] text-white shadow-lg shadow-black/40 transition-transform hover:scale-105 md:bottom-8 md:right-8"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

/* ---------------- Page ---------------- */
const PoolKits = () => {
  useLenis();

  return (
    <div className="min-h-screen bg-bg text-wh">
      <SEO
        title="SUNAVIO — Kits solaires piscine premium Marrakech"
        description="Kits solaires clé en main pour piscines de villas premium à Marrakech, Essaouira et Souss. Économisez jusqu'à 19 800 DH par an. Devis gratuit, visite technique offerte."
        path="/kits-piscine"
      />
      {/* Placeholder pixel Meta Ads — à insérer ici */}
      {/* <meta name="meta-pixel-placeholder" /> */}

      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Kits />
        <Method />
        <WhySunavioPool />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default PoolKits;
