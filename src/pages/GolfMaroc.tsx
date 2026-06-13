import { Battery, Droplets, Zap, Clock } from "lucide-react";
import { SegmentShell } from "@/components/segments/SegmentShell";
import ogImage from "@/assets/og-golf-marrakech.jpg";

const GolfMaroc = () => (
  <SegmentShell
    path="/panneaux-solaires-golf-maroc"
    seoTitle="Solutions solaires pour golfs & resorts golfiques | SUNAVIO Marrakech"
    seoDescription="Alimentez votre flotte de voiturettes, votre arrosage et votre club house au solaire. Stockage intelligent et recharge nocturne. Bureau d'études solaire à Marrakech."
    ogImage={ogImage}
    eyebrow="GOLFS & RESORTS GOLFIQUES · MAROC"
    heroTitle="Votre flotte roule au soleil. Vos charges aussi."
    heroAccentWords={["Vos", "charges", "aussi."]}
    heroSubtitle="Recharge nocturne des voiturettes, pompage et arrosage, club house : un golf consomme en continu. SUNAVIO conçoit un micro-réseau solaire avec stockage adapté à votre rythme d'exploitation."
    whatsappMessage="Bonjour, je gère un golf au Maroc et je souhaite une étude solaire SUNAVIO."
    painTitle="Un golf, ce n'est pas qu'un parcours."
    painAccent={["pas", "qu'un", "parcours."]}
    pains={[
      {
        icon: Battery,
        title: "Une flotte qui dort branchée",
        description:
          "Vos voiturettes électriques se rechargent la nuit, précisément quand le solaire ne produit plus. Sans stockage, vous tirez l'intégralité de cette consommation du réseau ONEE au tarif plein.",
      },
      {
        icon: Droplets,
        title: "Pompage et arrosage en continu",
        description:
          "Forages, surpresseurs, arrosage automatique : ces postes tournent toute l'année, avec des pics saisonniers très énergivores.",
      },
      {
        icon: Zap,
        title: "Un club house jamais éteint",
        description:
          "Cuisine, climatisation, vestiaires, éclairage du practice : la consommation ne s'arrête jamais vraiment.",
      },
    ]}
    approachIntro="Le défi d'un golf, c'est la nuit. La solution est dans le dimensionnement du stockage."
    approach={[
      {
        title: "Audit de la flotte et des équipements",
        description:
          "Inventaire des voiturettes, profils de recharge, équipements de pompage et arrosage, charges du club house. Mesure réelle de la courbe nocturne.",
      },
      {
        title: "Dimensionnement du stockage",
        description:
          "Capacité calibrée pour couvrir la recharge nocturne de la flotte sans tirer sur le réseau. Quasi-zéro surplus, autonomie maximale.",
      },
      {
        title: "Architecture micro-réseau décentralisée",
        description:
          "Production et stockage répartis au plus près des usages (club house, zone de recharge, locaux techniques). Moins de pertes, plus de résilience.",
      },
      {
        title: "Dossier de raccordement & conformité",
        description:
          "Étude technique, dossier réglementaire, conformité décret 2.25.100, monitoring post-installation.",
      },
    ]}
    referenceTitle="Golf type resort · Marrakech."
    referenceAccent={["Marrakech."]}
    referenceParagraphs={[
      "Nous concevons actuellement la centrale solaire d'un golf type resort à Marrakech : environ 50 kWc de production couplés à 225 kWh de stockage, dimensionnés pour alimenter une flotte de voiturettes en recharge nocturne.",
      "Projet en cours de conception par notre bureau d'études. L'architecture privilégie l'autonomie nocturne, avec un objectif de quasi-zéro surplus injecté au réseau.",
    ]}
    metrics={[
      { k: "Production cible", v: "≈ 50 kWc" },
      { k: "Stockage cible", v: "≈ 225 kWh" },
      { k: "Usage prioritaire", v: "Recharge nocturne flotte voiturettes" },
      { k: "Objectif réseau", v: "Quasi-zéro surplus injecté" },
    ]}
    metricsNote="Chiffres projet en cours de conception. Les valeurs définitives seront arrêtées à l'issue de l'étude détaillée."
    ctaTitle="Faisons rouler votre golf au soleil."
    ctaAccent={["au", "soleil."]}
    ctaIntro="Un ingénieur SUNAVIO se déplace, mesure votre courbe nocturne et dimensionne le couple production + stockage qui rend votre exploitation autonome."
  />
);

export default GolfMaroc;
