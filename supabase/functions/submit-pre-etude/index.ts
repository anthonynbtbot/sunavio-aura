import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const NOTIFY_ENDPOINT = "https://formspree.io/f/xaqvpgng";
const NOTIFY_EMAIL = "sunavio.contact@gmail.com";

type Payload = {
  societe?: string;
  secteur?: string;
  ville?: string;
  nom?: string;
  fonction?: string;
  telephone?: string;
  email?: string;
  raccordement?: string;
  puissance_souscrite?: string | number | null;
  facture_mensuelle?: string | number | null;
  surfaces?: string[];
  fichiers?: string[];
  message?: string;
  honeypot?: string;
};

const str = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const num = (v: unknown) => {
  if (v === null || v === undefined || v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  try {
    const body = (await req.json()) as Payload;

    // Anti-spam : champ honeypot rempli → on répond OK sans rien enregistrer.
    if (str(body.honeypot, 200)) return json({ ok: true });

    const record = {
      societe: str(body.societe, 200),
      secteur: str(body.secteur, 100),
      ville: str(body.ville, 200),
      nom: str(body.nom, 200),
      fonction: str(body.fonction, 200) || null,
      telephone: str(body.telephone, 40),
      email: str(body.email, 200),
      raccordement: str(body.raccordement, 100) || null,
      puissance_souscrite: num(body.puissance_souscrite),
      facture_mensuelle: num(body.facture_mensuelle),
      surfaces: Array.isArray(body.surfaces)
        ? body.surfaces.filter((s) => typeof s === "string").slice(0, 10)
        : [],
      fichiers: Array.isArray(body.fichiers)
        ? body.fichiers.filter((s) => typeof s === "string").slice(0, 12)
        : [],
      message: str(body.message, 4000) || null,
    };

    const errors: string[] = [];
    if (!record.societe) errors.push("societe");
    if (!record.secteur) errors.push("secteur");
    if (!record.ville) errors.push("ville");
    if (!record.nom) errors.push("nom");
    if (!record.telephone) errors.push("telephone");
    if (!/^\S+@\S+\.\S+$/.test(record.email)) errors.push("email");
    if (errors.length) {
      return json({ error: "Champs invalides", fields: errors }, 400);
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data: inserted, error: insertError } = await supabase
      .from("pre_etudes")
      .insert(record)
      .select("id")
      .single();

    if (insertError) {
      console.error("Insert pre_etudes failed:", insertError.message);
      return json({ error: "Enregistrement impossible", details: insertError.message }, 500);
    }

    // Liens signés (7 jours) vers les factures déposées
    const links: string[] = [];
    for (const path of record.fichiers) {
      const { data, error } = await supabase.storage
        .from("factures")
        .createSignedUrl(path, 60 * 60 * 24 * 7);
      if (error) console.error("Signed URL failed:", path, error.message);
      else if (data?.signedUrl) links.push(`${path} : ${data.signedUrl}`);
    }

    const recap = [
      `Société : ${record.societe}`,
      `Secteur : ${record.secteur}`,
      `Ville / site : ${record.ville}`,
      `Contact : ${record.nom}${record.fonction ? ` (${record.fonction})` : ""}`,
      `Téléphone : ${record.telephone}`,
      `E-mail : ${record.email}`,
      `Raccordement : ${record.raccordement ?? "non précisé"}`,
      `Puissance souscrite : ${record.puissance_souscrite ?? "non précisée"} kVA`,
      `Facture mensuelle moyenne : ${record.facture_mensuelle ?? "non précisée"} DH TTC`,
      `Surfaces disponibles : ${record.surfaces.join(", ") || "non précisées"}`,
      `Message : ${record.message ?? "—"}`,
      "",
      `Factures déposées (${links.length}) :`,
      links.length ? links.join("\n") : "aucun fichier joint",
      "",
      `Référence interne : ${inserted.id}`,
    ].join("\n");

    const notify = await fetch(NOTIFY_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: `Nouvelle demande de pré-étude — ${record.societe} — ${record.secteur}`,
        _replyto: record.email,
        destinataire: NOTIFY_EMAIL,
        recapitulatif: recap,
      }),
    });

    if (!notify.ok) {
      const details = await notify.text();
      console.error(`Notification failed [${notify.status}]: ${details}`);
      return json({ ok: true, id: inserted.id, notified: false });
    }

    return json({ ok: true, id: inserted.id, notified: true });
  } catch (e) {
    console.error("submit-pre-etude error:", e);
    return json({ error: (e as Error).message }, 500);
  }
});
