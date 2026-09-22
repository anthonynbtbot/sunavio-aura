import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Phone, Upload } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/atoms/Container";
import { SunavioButton } from "@/components/atoms/SunavioButton";
import { PlaquetteLink } from "@/components/PlaquetteLink";
import { supabase } from "@/integrations/supabase/client";

const SECTEURS = [
  "Industrie",
  "Logistique et entrepôts",
  "Hôtellerie",
  "Agriculture",
  "Infrastructure et institutionnel",
  "Autre",
];
const RACCORDEMENTS = ["Basse tension", "Moyenne tension", "HTA 22 kV", "Je ne sais pas"];
const SURFACES = ["Toiture", "Parking ou aire de stockage", "Terrain"];

const ECHANGE = [
  {
    demande: "Vos 12 dernières factures ou l'accès au portail du gestionnaire",
    remise: "Une note de calcul indice A",
  },
  {
    demande: "Unifilaire, plaques des transformateurs, plans de toiture",
    remise: "La puissance optimale et l'implantation",
  },
  { demande: "Une visite d'une demi-journée sur site", remise: "Budget, économie annuelle, temps de retour" },
  {
    demande: "Un interlocuteur technique et un interlocuteur financier",
    remise: "Une feuille de route réglementaire et un calendrier",
  },
];

const MAX_FILE = 10 * 1024 * 1024;
const MAX_FILES = 12;
const ALLOWED = ["application/pdf", "image/jpeg", "image/png"];

const field =
  "w-full rounded-md border border-line bg-bg px-4 py-3 text-sm text-gr outline-none placeholder:text-gr2 focus:border-or focus:ring-1 focus:ring-or";
const labelCls = "block text-xs font-medium uppercase tracking-wider text-gr";

function Field({
  label,
  htmlFor,
  children,
  error,
  className,
}: {
  label: string;
  htmlFor?: string;
  children: React.ReactNode;
  error?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className={labelCls}>
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p role="alert" className="mt-2 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

const PreStudy = () => {
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [societe, setSociete] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [globalError, setGlobalError] = useState("");

  const waLink = `https://wa.me/212663284424?text=${encodeURIComponent(
    `Bonjour SUNAVIO, je viens d'envoyer une demande de pré-étude pour ${societe || "mon site"}`,
  )}`;

  const handleFiles = (list: FileList | null) => {
    const next = Array.from(list ?? []);
    const fileErrors: string[] = [];
    if (next.length > MAX_FILES) fileErrors.push(`12 fichiers maximum (${next.length} sélectionnés).`);
    if (next.some((f) => f.size > MAX_FILE)) fileErrors.push("Chaque fichier doit peser 10 Mo maximum.");
    if (next.some((f) => !ALLOWED.includes(f.type))) fileErrors.push("Formats acceptés : PDF, JPG, PNG.");
    setErrors((e) => ({ ...e, fichiers: fileErrors.join(" ") }));
    setFiles(fileErrors.length ? [] : next);
  };

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setGlobalError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => (data.get(k) as string | null)?.trim() ?? "";

    const next: Record<string, string> = {};
    if (!get("societe")) next.societe = "Merci d'indiquer le nom de votre société.";
    if (!get("secteur")) next.secteur = "Merci de choisir votre secteur.";
    if (!get("ville")) next.ville = "Merci d'indiquer la ville ou la localisation du site.";
    if (!get("nom")) next.nom = "Merci d'indiquer vos nom et prénom.";
    if (!get("telephone")) next.telephone = "Merci d'indiquer un numéro de téléphone.";
    else if (get("telephone").replace(/\D/g, "").length < 8)
      next.telephone = "Numéro de téléphone incomplet.";
    if (!get("email")) next.email = "Merci d'indiquer une adresse e-mail.";
    else if (!/^\S+@\S+\.\S+$/.test(get("email"))) next.email = "Adresse e-mail invalide.";
    if (!data.get("consent")) next.consent = "Votre accord est nécessaire pour traiter la demande.";
    if (errors.fichiers) next.fichiers = errors.fichiers;

    setErrors(next);
    if (Object.keys(next).length) {
      setGlobalError("Merci de corriger les champs signalés ci-dessous.");
      return;
    }

    setSending(true);
    try {
      const folder = crypto.randomUUID();
      const paths: string[] = [];
      for (const file of files) {
        const safe = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
        const path = `${folder}/${safe}`;
        const { error } = await supabase.storage.from("factures").upload(path, file, {
          contentType: file.type,
          upsert: false,
        });
        if (error) throw new Error(`Dépôt du fichier « ${file.name} » impossible.`);
        paths.push(path);
      }

      const { error } = await supabase.functions.invoke("submit-pre-etude", {
        body: {
          societe: get("societe"),
          secteur: get("secteur"),
          ville: get("ville"),
          nom: get("nom"),
          fonction: get("fonction"),
          telephone: get("telephone"),
          email: get("email"),
          raccordement: get("raccordement"),
          puissance_souscrite: get("puissance_souscrite"),
          facture_mensuelle: get("facture_mensuelle"),
          surfaces: data.getAll("surfaces").map(String),
          fichiers: paths,
          message: get("message"),
          honeypot: get("societe_bis"),
        },
      });
      if (error) throw error;

      const w = window as typeof window & { dataLayer?: unknown[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: "submit_pre_etude", secteur: get("secteur") });

      setSociete(get("societe"));
      setDone(true);
      form.reset();
      setFiles([]);
    } catch (err) {
      setGlobalError(
        (err as Error).message ||
          "L'envoi a échoué. Vous pouvez nous joindre au +212 6 63 28 44 24.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="min-h-screen bg-bg text-gr">
      <SEO path="/pre-etude" />
      <Header />
      <main>
        <section className="border-b border-line bg-bg2 pb-14 pt-32 md:pt-40">
          <Container size="wide">
            <p className="text-eyebrow">PRÉ-ÉTUDE</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-wh md:text-5xl">
              Demander une pré-étude gratuite
            </h1>
          </Container>
        </section>

        <section className="py-14 md:py-20">
          <Container size="wide">
            {done ? (
              <div className="mx-auto max-w-2xl border border-line bg-bg2 p-8 text-center shadow-sm md:p-12">
                <CheckCircle2 className="mx-auto h-12 w-12 text-or" />
                <h2 className="mt-6 text-2xl font-bold text-wh md:text-3xl">
                  Merci, nous avons bien reçu votre demande.
                </h2>
                <p className="mt-4 text-gr2">
                  Un ingénieur du bureau d'études vous contacte sous 48 h ouvrées.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href="tel:+212663284424"
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-md border border-line px-8 font-semibold text-wh hover:border-or"
                  >
                    <Phone className="h-4 w-4" /> +212 6 63 28 44 24
                  </a>
                  <SunavioButton asChild size="lg">
                    <a href={waLink} target="_blank" rel="noopener noreferrer">
                      Continuer sur WhatsApp
                    </a>
                  </SunavioButton>
                </div>
              </div>
            ) : (
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Colonne gauche */}
                <div>
                  <p className="text-lg leading-8 text-gr2">
                    Envoyez-nous vos 12 dernières factures d'électricité et quelques informations sur
                    votre site. Notre bureau d'études vous remet sous trois semaines une note de
                    calcul : puissance optimale, implantation, option stockage, budget indicatif,
                    économie annuelle et temps de retour. Sans engagement.
                  </p>

                  <div className="mt-10 border border-line bg-bg2 p-6 md:p-8">
                    <div className="grid grid-cols-2 gap-4 border-b border-line pb-3 text-xs font-semibold uppercase tracking-wider text-or">
                      <span>Ce que nous demandons</span>
                      <span>Ce que nous remettons</span>
                    </div>
                    <ul className="divide-y divide-line">
                      {ECHANGE.map((row) => (
                        <li key={row.demande} className="grid grid-cols-2 gap-4 py-4 text-sm">
                          <span className="text-gr2">{row.demande}</span>
                          <span className="font-medium text-wh">{row.remise}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <PlaquetteLink />
                  </div>
                </div>

                {/* Colonne droite : formulaire */}
                <form onSubmit={submit} noValidate className="border border-line bg-bg2 p-6 shadow-sm md:p-8">
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Société *" htmlFor="societe" error={errors.societe}>
                      <input id="societe" name="societe" className={field} maxLength={200} />
                    </Field>
                    <Field label="Secteur *" htmlFor="secteur" error={errors.secteur}>
                      <select id="secteur" name="secteur" defaultValue="" className={field}>
                        <option value="">Sélectionnez…</option>
                        {SECTEURS.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </Field>
                    <Field
                      label="Ville ou localisation du site *"
                      htmlFor="ville"
                      error={errors.ville}
                      className="md:col-span-2"
                    >
                      <input id="ville" name="ville" className={field} maxLength={200} />
                    </Field>
                    <Field label="Nom et prénom *" htmlFor="nom" error={errors.nom}>
                      <input id="nom" name="nom" className={field} maxLength={200} />
                    </Field>
                    <Field label="Fonction" htmlFor="fonction">
                      <input id="fonction" name="fonction" className={field} maxLength={200} />
                    </Field>
                    <Field label="Téléphone (WhatsApp) *" htmlFor="telephone" error={errors.telephone}>
                      <input id="telephone" name="telephone" type="tel" className={field} maxLength={40} />
                    </Field>
                    <Field label="E-mail *" htmlFor="email" error={errors.email}>
                      <input id="email" name="email" type="email" className={field} maxLength={200} />
                    </Field>

                    <Field label="Raccordement" htmlFor="raccordement">
                      <select id="raccordement" name="raccordement" defaultValue="" className={field}>
                        <option value="">— Optionnel —</option>
                        {RACCORDEMENTS.map((r) => (
                          <option key={r}>{r}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Puissance souscrite (kVA)" htmlFor="puissance_souscrite">
                      <input
                        id="puissance_souscrite"
                        name="puissance_souscrite"
                        type="number"
                        min={0}
                        step="any"
                        className={field}
                      />
                    </Field>
                    <Field
                      label="Facture mensuelle moyenne (DH TTC)"
                      htmlFor="facture_mensuelle"
                      className="md:col-span-2"
                    >
                      <input
                        id="facture_mensuelle"
                        name="facture_mensuelle"
                        type="number"
                        min={0}
                        step="any"
                        className={field}
                      />
                    </Field>

                    <fieldset className="md:col-span-2">
                      <legend className={labelCls}>Surfaces disponibles</legend>
                      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:gap-6">
                        {SURFACES.map((s) => (
                          <label key={s} className="flex items-center gap-2 text-sm text-gr2">
                            <input type="checkbox" name="surfaces" value={s} /> {s}
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    <Field
                      label="Factures d'électricité (PDF, JPG, PNG)"
                      htmlFor="fichiers"
                      error={errors.fichiers}
                      className="md:col-span-2"
                    >
                      <input
                        id="fichiers"
                        type="file"
                        multiple
                        accept="application/pdf,image/jpeg,image/png"
                        onChange={(e) => handleFiles(e.target.files)}
                        className="w-full cursor-pointer rounded-md border border-dashed border-line bg-bg px-4 py-3 text-sm text-gr2 file:mr-4 file:rounded file:border-0 file:bg-or file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-primary-foreground"
                      />
                      <p className="mt-2 flex items-center gap-2 text-xs text-gr2">
                        <Upload className="h-3.5 w-3.5" /> 12 fichiers maximum, 10 Mo par fichier.
                        {files.length > 0 && ` ${files.length} fichier(s) prêt(s).`}
                      </p>
                    </Field>

                    <Field label="Message" htmlFor="message" className="md:col-span-2">
                      <textarea id="message" name="message" rows={4} maxLength={4000} className={field} />
                    </Field>

                    {/* Honeypot anti-spam */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="societe_bis">Ne pas remplir</label>
                      <input id="societe_bis" name="societe_bis" tabIndex={-1} autoComplete="off" />
                    </div>

                    <div className="md:col-span-2">
                      <label className="flex items-start gap-3 text-sm text-gr2">
                        <input type="checkbox" name="consent" className="mt-1" />
                        <span>
                          J'accepte que SUNAVIO traite ces informations pour établir ma pré-étude (loi
                          09-08 relative à la protection des données personnelles).{" "}
                          <Link to="/confidentialite" className="text-or underline">
                            Politique de confidentialité
                          </Link>
                        </span>
                      </label>
                      {errors.consent && (
                        <p role="alert" className="mt-2 text-xs text-destructive">
                          {errors.consent}
                        </p>
                      )}
                    </div>

                    {globalError && (
                      <p role="alert" className="text-sm text-destructive md:col-span-2">
                        {globalError}
                      </p>
                    )}

                    <SunavioButton type="submit" size="lg" disabled={sending} className="md:col-span-2">
                      {sending ? "Envoi en cours…" : "Envoyer ma demande"}
                    </SunavioButton>
                    <p className="text-xs text-gr2 md:col-span-2">
                      Vos factures peuvent aussi nous être transmises par WhatsApp au{" "}
                      <a href="https://wa.me/212663284424" className="text-or underline" target="_blank" rel="noopener noreferrer">
                        +212 6 63 28 44 24
                      </a>
                      .
                    </p>
                  </div>
                </form>
              </div>
            )}
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PreStudy;
