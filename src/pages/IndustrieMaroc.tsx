import { TrendingDown, Factory, LineChart } from "lucide-react";
import { SegmentShell } from "@/components/segments/SegmentShell";
import ogImage from "@/assets/og-industrie-maroc.jpg";

const IndustrieMaroc = () => (
  <SegmentShell
    path="/panneaux-solaires-industrie-maroc"
    seoTitle="Solaire industriel & tertiaire au Maroc | Autoconsommation | SUNAVIO"
    seoDescription="Réduisez vos coûts énergétiques par l'autoconsommation solaire. Étude sur factures moyenne tension, dimensionnement rigoureux, conformité décret 2.25.100. Marrakech & axe Souss."
    ogImage={ogImage}
    eyebrow="INDUSTRIE & TERTIAIRE · MARRAKECH–SOUSS"
    heroTitle="Votre poste énergie pèse sur vos marges. Reprenez le contrôle."
    heroAccentWords={["Reprenez", "le", "contrôle."]}
    heroSubtitle="Tarification moyenne tension, exigences de décarbonation de vos donneurs d'ordre : l'autoproduction solaire devient un levier de compétitivité. SUNAVIO le rend rentable et conforme."
    whatsappMessage="Bonjour, je dirige un site industriel ou tertiaire au Maroc et je souhaite une étude d'autoconsommation solaire SUNAVIO."
    painTitle="Le tarif MT n'est pas neutre."
    painAccent={["n'est", "pas", "neutre."]}
    pains={[
      {
        icon: TrendingDown,
        title: "Pointe, pleines, creuses : un tarif qui sanctionne",
        description:
          "La structure horaire du tarif moyenne tension fait exploser le coût du kWh en heures de pointe — précisément quand votre process tourne à plein.",
      },
      {
        icon: Factory,
        title: "Une pression compétitive permanente",
        description:
          "Marges sous tension, prix du kWh ONEE en hausse continue : sans levier sur l'énergie, c'est votre compétitivité qui se dégrade chaque année.",
      },
      {
        icon: LineChart,
        title: "Donneurs d'ordre et financeurs vous attendent sur la RSE",
        description:
          "Bilan carbone, scope 2, exigences ESG : l'autoproduction n'est plus une option de communication, c'est un prérequis contractuel.",
      },
    ]}
    approachIntro="L'industriel ne s'équipe pas comme un particulier. Le calcul se fait sur la facture MT, heure par heure."
    approach={[
      {
        title: "Étude tarifaire détaillée",
        description:
          "Décomposition de votre facture ONEE par tranche horaire (pointe, pleines, creuses), identification des postes les plus pénalisés, calcul du coût réel du kWh consommé.",
      },
      {
        title: "Dimensionnement optimisé pour l'autoconsommation",
        description:
          "Centrale calibrée pour maximiser l'autoconsommation pendant les heures les plus chères, sans surdimensionner ni générer de surplus inutile.",
      },
      {
        title: "Dossier de raccordement conforme",
        description:
          "Montage complet du dossier réglementaire au titre du décret 2.25.100, gestion des échanges avec le gestionnaire de réseau régional jusqu'à l'accord.",
      },
      {
        title: "Monitoring temps réel post-installation",
        description:
          "Suivi de production, alertes, rapports mensuels : vous pilotez votre installation comme un actif industriel, pas comme un équipement passif.",
      },
    ]}
    referenceTitle="Sites tertiaires & industriels · axe Marrakech–Souss."
    referenceAccent={["axe", "Marrakech–Souss."]}
    referenceParagraphs={[
      "SUNAVIO accompagne des sites tertiaires et industriels sur l'axe Marrakech–Souss : bâtiments logistiques, ateliers, sièges régionaux, agro-industrie.",
      "L'objectif commun : une réduction durable du coût du kWh autoproduit, mesurable dès la première année et garantie sur la durée par le monitoring.",
    ]}
    metrics={[
      { k: "Cible tarifaire", v: "Heures pointe & pleines en priorité" },
      { k: "Autoconsommation", v: "Optimisée — généralement > 90%" },
      { k: "Conformité", v: "Décret 2.25.100" },
      { k: "Pilotage", v: "Monitoring temps réel inclus" },
    ]}
    metricsNote="Fourchettes indicatives. Le gain réel dépend de votre profil de charge, de votre tarif MT et de la surface exploitable."
    ctaTitle="Faites du solaire un actif industriel."
    ctaAccent={["actif", "industriel."]}
    ctaIntro="Un ingénieur SUNAVIO analyse votre facture MT, modélise votre courbe de charge et chiffre votre rentabilité. L'étude est gratuite, le monitoring est inclus."
    extraCrossLink={{
      eyebrow: "FINANCEMENT VERT",
      title: "Votre projet peut être éligible aux financements verts.",
      description:
        "Lignes de crédit bancaires dédiées à la transition énergétique, dispositifs de soutien sectoriels : nous vous orientons vers les bons interlocuteurs pendant l'étude.",
      to: "/contact",
      label: "En parler avec un ingénieur",
    }}
  />
);

export default IndustrieMaroc;
