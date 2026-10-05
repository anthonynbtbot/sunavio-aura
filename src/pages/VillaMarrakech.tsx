import { PHONE_PRIVATE } from "@/lib/phones";
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
    heroTitle="L'énergie solaire, intégrée à l'architecture de votre villa."
    heroAccentWords={["intégrée"]}
    heroSubtitle="Piscine, climatisation, domotique : votre villa mérite une solution solaire pensée comme une pièce d'architecture, pas un assemblage de panneaux."
    phone={PHONE_PRIVATE}
    whatsappMessage="Bonjour, je souhaite une étude solaire pour ma villa à Marrakech."
    painTitle="Votre villa consomme comme une PME."
    painAccent={["comme", "une", "PME."]}
    pains={[
      {
        icon: Waves,
        title: "La piscine tire en continu",
        description:
          "Filtration, chauffage, traitement, pool house : un bassin haut de gamme consomme chaque jour, et davantage quand il est chauffé.",
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
          "Analyse de 12 mois consécutifs de vos factures d'électricité. Identification des postes piscine, clim et domotique. Pas de chiffres théoriques.",
      },
      {
        title: "Stockage en option",
        description:
          "Batterie dimensionnée selon les circuits à secourir et la consommation du soir. En cas de coupure du réseau, elle alimente les circuits choisis, dans la limite de sa capacité, avec un onduleur hybride et un boîtier de secours.",
      },
      {
        title: "Plan d'implantation",
        description:
          "Avant les travaux, nous vous présentons le plan d'implantation des panneaux.",
      },
    ]}
    referenceEyebrow="RÉALISATION"
    referenceTitle="Une pergola solaire en région de Marrakech."
    referenceAccent={["pergola", "solaire"]}
    referenceParagraphs={[
      "Villa privée de la région de Marrakech, équipée d'une installation photovoltaïque de 13,86 kWc posée sur pergola, réalisée en 2026. Cas réel, anonymisé.",
      "Pour votre maison, nos objectifs de conception : une production dimensionnée sur votre consommation, des économies chiffrées sur vos factures réelles et une intégration étudiée avec l'architecture de la maison.",
    ]}
    metrics={[
      { k: "Puissance installée", v: "13,86 kWc" },
      { k: "Pose", v: "Sur pergola" },
      { k: "Réalisée en", v: "2026" },
    ]}
    metricsNote="Votre installation est dimensionnée sur vos propres factures, après la visite technique."
    ctaTitle="Votre villa, étudiée comme une pièce unique."
    ctaAccent={["pièce", "unique."]}
    ctaIntro="Un ingénieur SUNAVIO se déplace chez vous, étudie l'architecture et conçoit une installation intégrée à la maison, dimensionnée sur votre consommation."
  />
);

export default VillaMarrakech;
