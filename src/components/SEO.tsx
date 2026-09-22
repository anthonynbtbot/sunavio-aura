import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_URL = "https://sunavio.com";
const SOCIAL_IMAGE = `${SITE_URL}/og/sunavio-og.jpg`;

const PAGE_META: Record<string, { title: string; description: string }> = {
  "/": {
    title: "SUNAVIO — Photovoltaïque en autoconsommation pour l'industrie | Marrakech",
    description: "Bureau d'études et installateur certifié Huawei à Marrakech. Centrales solaires en autoconsommation pour usines, entrepôts, hôtels et exploitations agricoles. Pré-étude gratuite.",
  },
  "/solutions": {
    title: "Solutions photovoltaïques, stockage et micro-réseaux — SUNAVIO",
    description: "Autoconsommation en toiture, ombrières ou au sol, stockage LUNA2000, micro-réseaux et pompage solaire. Dimensionnement sur vos factures et courbes de charge.",
  },
  "/panneaux-solaires-industrie-maroc": {
    title: "Panneaux solaires pour usines et sites industriels au Maroc — SUNAVIO",
    description: "Centrale PV en autoconsommation zéro injection pour votre usine : 20 à 35 % de la facture couverte, retour 4 à 6 ans. Note de calcul gratuite sur 12 factures.",
  },
  "/panneaux-solaires-hotel-marrakech": {
    title: "Panneaux solaires pour hôtels et resorts à Marrakech — SUNAVIO",
    description: "Réduisez la facture électrique de votre hôtel : PV en toiture ou ombrières, zéro injection, intégration discrète. Étude gratuite par notre bureau d'études.",
  },
  "/panneaux-solaires-golf-maroc": {
    title: "Énergie solaire pour golfs et resorts au Maroc — SUNAVIO",
    description: "Pompage d'irrigation, club-house et ombrières de parking alimentés par le solaire. Étude et réalisation clé en main à Marrakech.",
  },
  "/agriculture-pompage-solaire": {
    title: "Agrivoltaïque et pompage solaire — SUNAVIO Marrakech",
    description: "Ombrières agrivoltaïques, pompage solaire et chambres froides pour les exploitations agricoles. Dimensionnement et réalisation par SUNAVIO.",
  },
  "/panneaux-solaires-villa-marrakech": {
    title: "Installation solaire villa et domaine à Marrakech — SUNAVIO",
    description: "Offre résidentielle premium : pergolas et ombrières solaires, onduleurs hybrides, zéro export. Estimation en ligne en 5 minutes.",
  },
  "/references": {
    title: "Références et études en cours — SUNAVIO",
    description: "Projets photovoltaïques industriels, agricoles et institutionnels étudiés et réalisés par SUNAVIO dans la région de Marrakech.",
  },
  "/ressources": {
    title: "Ressources : autoproduction solaire au Maroc — SUNAVIO",
    description: "Loi 82-21, décret 2.25.100, zéro injection, stockage : nos explications claires pour les décideurs industriels.",
  },
  "/decret-2-25-100-autoproduction-maroc": {
    title: "Décret 2.25.100 : ce qui change pour l'autoproduction au Maroc — SUNAVIO",
    description: "Comprendre le décret 2.25.100, les règles de raccordement et l'injection du surplus pour un projet d'autoproduction solaire au Maroc.",
  },
  "/a-propos": {
    title: "À propos de SUNAVIO — bureau d'études photovoltaïque à Marrakech",
    description: "Trois co-gérants, un bureau d'études intégré, installateur certifié Huawei Smart PV. Découvrez notre méthode et notre positionnement.",
  },
  "/pre-etude": {
    title: "Demander une pré-étude gratuite — SUNAVIO",
    description: "Envoyez vos 12 dernières factures d'électricité : nous revenons sous trois semaines avec une note de calcul, un budget et un temps de retour.",
  },
  "/contact": {
    title: "Contact — SUNAVIO Marrakech",
    description: "Zenith Business Center, Bab Doukala, Marrakech. +212 6 63 28 44 24. Réponse sous 24 h ouvrées.",
  },
  "/kits-piscine": {
    title: "Kits solaires pour piscine à Marrakech — SUNAVIO",
    description: "Kits photovoltaïques pour la filtration et le chauffage des piscines résidentielles à Marrakech. Étude et installation SUNAVIO.",
  },
  "/mentions-legales": { title: "Mentions légales — SUNAVIO", description: "Informations légales relatives à SUNAVIO SARL et au site sunavio.com." },
  "/confidentialite": { title: "Politique de confidentialité — SUNAVIO", description: "Traitement et protection des données personnelles sur le site SUNAVIO." },
  "/cgu": { title: "Conditions générales d'utilisation — SUNAVIO", description: "Conditions générales d'utilisation du site internet SUNAVIO." },
  "/cookies": { title: "Politique cookies — SUNAVIO", description: "Informations sur les cookies, la mesure d'audience et vos choix de consentement." },
  "/ressources/loi-82-21-autoproduction": { title: "Loi 82-21 et autoproduction industrielle — SUNAVIO", description: "Comprendre le cadre de la loi 82-21 pour préparer un projet photovoltaïque industriel en autoconsommation au Maroc." },
  "/ressources/zero-injection": { title: "Zéro injection ou injection limitée — SUNAVIO", description: "Mesure, régulation et protection : comprendre le zéro injection pour une centrale photovoltaïque professionnelle." },
  "/ressources/stockage-batteries-industrie": { title: "Stockage par batteries dans l'industrie — SUNAVIO", description: "Écrêtage, surplus et continuité : identifier quand une batterie crée une valeur mesurable sur un site industriel." },
};

export function SEO({ title, description, path = "/", noIndex = false, structuredData }: SEOProps) {
  const normalizedPath = path === "/" ? "/" : path.replace(/\/+$/, "");
  const meta = PAGE_META[normalizedPath] ?? { title, description };
  const url = `${SITE_URL}${normalizedPath === "/" ? "" : normalizedPath}`;
  const schemas = Array.isArray(structuredData) ? structuredData : structuredData ? [structuredData] : [];
  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noIndex ? "noindex,follow" : "index,follow"} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_MA" />
      <meta property="og:image" content={SOCIAL_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={SOCIAL_IMAGE} />
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Helmet>
  );
}
