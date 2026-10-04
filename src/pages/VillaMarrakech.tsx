import { Waves, Snowflake, Eye } from "lucide-react";
import { SegmentShell } from "@/components/segments/SegmentShell";
import ogImage from "@/assets/og-villa-marrakech.jpg";

const VillaMarrakech = () => (
  <SegmentShell
    path="/panneaux-solaires-villa-marrakech"
    seoTitle="Panneaux solaires pour villa de luxe à Marrakech | SUNAVIO"
    seoDescription="Installation solaire premium pour villa : autoconsommation, stockage batterie, piscine. Étude sur-mesure et intégration architecturale discrète. Bureau d'études à Marrakech."
    ogImage={ogImage}
    eyebrow="VILLAS D'EXCEPTION · MARRAKECH"
    heroTitle="L'indépendance énergétique, sans compromis sur l'esthétique de votre villa."
    heroAccentWords={["sans", "compromis"]}
    heroSubtitle="Piscine, climatisation, domotique : votre villa mérite une solution solaire pensée comme une pièce d'architecture, pas un assemblage de panneaux."
    whatsappMessage="Bonjour, je souhaite une étude solaire pour ma villa à Marrakech."
    painTitle="Votre villa consomme comme une PME."
    painAccent={["comme", "une", "PME."]}
    pains={[
      {
        icon: Waves,
        title: "La piscine tire en continu",
        description:
          "Filtration, chauffage, traitement, pool house : un bassin haut de gamme représente à lui seul une part majeure de votre facture annuelle.",
      },
      {
        icon: Snowflake,
        title: "Climatisation toute l'année",
        description:
          "Chaleur l'été, fraîcheur des nuits l'hiver : les groupes froid et les PAC tournent presque sans interruption sur les villas modernes.",
      },
      {
        icon: Eye,
        title: "Aucune tolérance pour l'amateurisme visuel",
        description:
          "Une installation mal intégrée détruit la valeur architecturale de votre bien. La discrétion fait partie du cahier des charges.",
      },
    ]}
    approachIntro="Une villa de prestige ne s'équipe pas avec un kit standard. Chaque toiture est unique, chaque architecture impose ses lignes."
    approach={[
      {
        title: "Lecture architecturale",
        description:
          "Relevé des toitures, pergolas, dépendances et pool houses. Étude des contraintes esthétiques, des vues et de l'orientation. On cherche la solution la plus discrète, pas la plus visible.",
      },
      {
        title: "Dimensionnement sur factures réelles",
        description:
          "Analyse de 12 à 24 mois de factures ONEE. Identification des postes piscine, clim et domotique. Pas de chiffres théoriques.",
      },
      {
        title: "Stockage pour l'autonomie",
        description:
          "Batterie calibrée pour absorber les coupures, lisser les pics et garantir une vraie autonomie aux heures critiques.",
      },
      {
        title: "Simulation 3D SUNAVIO",
        description:
          "Vous validez l'intégration visuelle avant la moindre intervention. Aucune surprise sur le rendu final.",
      },
    ]}
    referenceTitle="Villas haut de gamme · axe Marrakech."
    referenceAccent={["axe", "Marrakech."]}
    referenceParagraphs={[
      "SUNAVIO conçoit régulièrement des installations sur l'axe Marrakech — résidences Al Maaden, Ouidane, Tameslouht — pour des villas de 400 à 1 200 m² avec piscine, équipées en climatisation centralisée et domotique.",
      "L'objectif récurrent : autoconsommation élevée, économies annuelles significatives, intégration invisible depuis les zones de vie et les espaces extérieurs.",
    ]}
    metrics={[
      { k: "Profil type", v: "Villa 400 à 1 200 m² avec piscine" },
      { k: "Autoconsommation", v: "Élevée — 70 à 90%" },
      { k: "Économies annuelles", v: "Fourchette significative selon usage" },
      { k: "Intégration", v: "Invisible depuis les zones de vie" },
    ]}
    metricsNote="Fourchettes indicatives. Les chiffres exacts sont arrêtés à l'issue de la visite technique et de l'analyse de vos factures réelles."
    ctaTitle="Votre villa, étudiée comme une pièce unique."
    ctaAccent={["pièce", "unique."]}
    ctaIntro="Un ingénieur SUNAVIO se déplace chez vous, étudie l'architecture et conçoit une installation qui se voit le moins possible — et qui produit le plus possible."
    extraCrossLink={{
      eyebrow: "PISCINE",
      title: "Votre villa a une piscine ? Commencez par là.",
      description:
        "Nos kits solaires piscine sont le point d'entrée le plus efficace pour réduire votre facture sans toucher au reste de la villa.",
      to: "/kits-piscine",
      label: "Voir les kits piscine",
    }}
  />
);

export default VillaMarrakech;
