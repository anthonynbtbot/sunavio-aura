import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle } from "lucide-react";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Reveal } from "@/components/atoms/Reveal";
import { SunavioButton } from "@/components/atoms/SunavioButton";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqvpgng";

const PROJECT_TYPES = [
  "Résidentiel - villa",
  "Résidentiel - riad",
  "Hôtellerie - Resort",
  "Golf - Loisirs",
  "Industriel - Tertiaire",
  "Pompage solaire agricole",
  "Je ne sais pas encore",
];

const CITIES = ["Marrakech", "Essaouira", "Agadir - Souss", "Casablanca", "Autre"];

const TIMINGS = [
  "Dès que possible",
  "Dans les 3 prochains mois",
  "6-12 mois",
  "Je me renseigne",
];

const inputCls =
  "block w-full rounded-md border border-[#444444] bg-[#1A1A1A] px-4 py-3 text-sm text-wh placeholder:text-gr2 focus:border-or focus:outline-none focus:ring-1 focus:ring-or";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-xs font-medium uppercase tracking-wider text-gr"
      >
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Tracking conversions à l'affichage du message de confirmation
  useEffect(() => {
    if (!done || typeof window === "undefined") return;
    const w = window as any;
    if (typeof w.fbq === "function") {
      w.fbq("track", "Lead");
    }
    if (typeof w.gtag === "function") {
      w.gtag("event", "generate_lead", {
        event_category: "engagement",
        event_label: "contact_form",
      });
    }
    // Google Ads conversion : à ajouter ici quand l'ID sera fourni
    // w.gtag('event', 'conversion', { send_to: 'AW-XXXX/YYYY' });
  }, [done]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get("name") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();
    const projectType = (data.get("project_type") as string) || "";

    if (!name || !phone || !email || !message) {
      setError("Merci de remplir tous les champs obligatoires.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Adresse email invalide.");
      return;
    }
    if (
      name.length > 120 ||
      phone.length > 40 ||
      email.length > 200 ||
      message.length > 2000
    ) {
      setError("Un des champs dépasse la longueur autorisée.");
      return;
    }

    data.append(
      "_subject",
      `Contact général SUNAVIO - ${projectType || "Non précisé"}`,
    );
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
    <section id="contact-form" className="relative py-20 md:py-28">
      <Container size="wide">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>FORMULAIRE DE CONTACT</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-semibold text-wh md:text-5xl">
              Décrivez-nous votre projet
            </h2>
            <p className="mt-4 text-lg text-gr">
              Réponse sous 24h ouvrées — étude personnalisée et sans engagement.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-10 max-w-3xl rounded-2xl border border-or/60 bg-[#2A2A2A] p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)] md:p-10">
            {done ? (
              <div className="py-10 text-center">
                <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-or/10">
                  <CheckCircle className="h-8 w-8 text-or" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-wh">
                  Merci, votre demande a été envoyée.
                </h3>
                <p className="mt-3 text-gr">
                  Nous vous recontactons sous 24h.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                {/* BLOC 1 — Coordonnées */}
                <div>
                  <h3 className="mb-4 font-display text-xl text-wh">Vos coordonnées</h3>
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Nom complet *" htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        maxLength={120}
                        autoComplete="name"
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Téléphone *" htmlFor="phone">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        maxLength={40}
                        autoComplete="tel"
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Email *" htmlFor="email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        maxLength={200}
                        autoComplete="email"
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Société" htmlFor="company">
                      <input
                        id="company"
                        name="company"
                        type="text"
                        maxLength={120}
                        autoComplete="organization"
                        className={inputCls}
                      />
                    </Field>
                  </div>
                </div>

                {/* BLOC 2 — Projet */}
                <div>
                  <h3 className="mb-4 font-display text-xl text-wh">Votre projet</h3>
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Type de projet *" htmlFor="project_type">
                      <select
                        id="project_type"
                        name="project_type"
                        required
                        defaultValue=""
                        className={inputCls}
                      >
                        <option value="" disabled>
                          Sélectionnez…
                        </option>
                        {PROJECT_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Ville *" htmlFor="city">
                      <select
                        id="city"
                        name="city"
                        required
                        defaultValue=""
                        className={inputCls}
                      >
                        <option value="" disabled>
                          Sélectionnez…
                        </option>
                        {CITIES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Échéance envisagée" htmlFor="timing">
                      <select id="timing" name="timing" defaultValue="" className={inputCls}>
                        <option value="">— Optionnel —</option>
                        {TIMINGS.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>
                </div>

                {/* BLOC 3 — Message */}
                <div>
                  <h3 className="mb-4 font-display text-xl text-wh">Votre message</h3>
                  <Field label="Message *" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      maxLength={2000}
                      placeholder="Décrivez brièvement votre projet, votre toiture ou vos besoins..."
                      className={inputCls}
                    />
                  </Field>
                </div>

                {error && (
                  <p className="text-sm text-destructive" role="alert">
                    {error}
                  </p>
                )}

                <div>
                  <SunavioButton
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={submitting}
                  >
                    {submitting ? "Envoi en cours…" : "Envoyer ma demande"}
                  </SunavioButton>
                  <p className="mt-3 text-center text-xs italic text-gr2">
                    Réponse sous 24h ouvrées — visite technique gratuite si éligible.
                  </p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
