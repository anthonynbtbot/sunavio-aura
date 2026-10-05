import { PHONE_BUSINESS } from "@/lib/phones";
import { TrendingDown, Factory, LineChart } from "lucide-react";
import { SegmentShell } from "@/components/segments/SegmentShell";
import ogImage from "@/assets/og-industrie-maroc.jpg";

const ROWS: [string, string, string][] = [["Consommation annuelle du site", "entre 1 et 1,5 GWh", "entre 1 et 1,5 GWh"], ["Centrale en toiture, sans batterie", "environ 300 kWc", "environ 400 kWc"], ["Production simulée", "environ 500 MWh par an", "environ 650 MWh par an"], ["Part consommée sur place", "environ 90 %", "environ 85 %"], ["Économie simulée sur l'électricité achetée", "environ 350 000 DH HT par an", "environ 450 000 DH HT par an"], ["Retour simple simulé", "environ 5 à 6 ans", "environ 5 à 6 ans"]];

const IndustrieMaroc = () => (
  <SegmentShell
    path="/panneaux-solaires-industrie-maroc"
    seoTitle="Solaire industriel & tertiaire au Maroc | Autoconsommation | SUNAVIO"
    seoDescription="Réduisez vos coûts énergétiques par l'autoconsommation solaire. Étude sur factures moyenne tension, dimensionnement rigoureux, dossier au titre du décret 2-25-100. Marrakech & axe Souss."
    ogImage={ogImage}
    eyebrow="INDUSTRIE & TERTIAIRE · MARRAKECH–SOUSS"
    heroTitle="Votre poste énergie pèse sur vos marges. Reprenez le contrôle."
    heroAccentWords={["Reprenez", "le", "contrôle."]}
    heroSubtitle="Tarification moyenne tension, exigences de décarbonation de vos donneurs d'ordre : l'autoproduction solaire devient un levier de compétitivité. SUNAVIO chiffre ce que le solaire peut vous faire économiser, sur vos factures réelles, avant tout engagement."
    phone={PHONE_BUSINESS}
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
          "Montage du dossier de demande d'accord de raccordement au titre du décret 2-25-100, échanges avec le gestionnaire du réseau de distribution jusqu'à l'accord.",
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
      "L'objectif commun : une réduction durable du coût du kWh autoproduit, mesurable dès la première année et suivie sur la durée par le monitoring.",
    ]}
    metrics={[]}
    referenceEyebrow="EXEMPLES DE SIMULATION"
    referenceAside={
      <div>
        <h3 className="font-display text-xl font-semibold text-wh">Deux exemples de simulation</h3>
        <p className="mt-4 text-body text-gr">
          Voici deux exemples de simulation établis à partir de nos études, pour des sites raccordés en moyenne tension : une année de factures d'électricité, une production simulée avec Huawei FusionSolar SmartDesign, des panneaux solaires et des onduleurs Huawei en limitation d'injection (valeurs arrondies).
        </p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full border-collapse text-left sm:min-w-[480px]">
            <thead>
              <tr className="grid grid-cols-2 border-b border-line sm:table-row">
                <th className="hidden pb-4 sm:table-cell" />
                <th className="pb-4 text-eyebrow text-gr2">Exemple 1</th>
                <th className="pb-4 text-eyebrow text-gr2">Exemple 2</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([k, a, b]) => (
                <tr key={k} className="grid grid-cols-2 border-b border-line sm:table-row">
                  <th scope="row" className="col-span-2 pt-4 sm:py-4 sm:pr-4 text-eyebrow font-normal text-gr2">{k}</th>
                  <td className="pb-4 pt-2 pr-4 font-display text-wh sm:py-4">{a}</td>
                  <td className="pb-4 pt-2 font-display text-wh sm:py-4">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="mt-8 list-disc space-y-2 pl-5 text-sm text-gr2">
          <li>Ce sont des simulations, pas des mesures : aucun résultat n'est garanti.</li>
          <li>L'économie ne compte que l'électricité achetée en moins, en DH hors taxes ; le retour suppose l'énergie réactive du site compensée, ce qui est chiffré à part.</li>
          <li>Le reste de la production possible est perdu : la centrale est bridée pour ne pas injecter sur le réseau.</li>
          <li>Le retour est calculé avec le coût d'installation retenu dans l'étude. Le prix d'un projet est fixé par devis, après visite technique.</li>
        </ul>
        <p className="mt-6 font-semibold text-wh">Votre site est différent. Pré-étude offerte sur votre facture.</p>
      </div>
    }
    ctaTitle="Faites du solaire un actif industriel."
    ctaAccent={["actif", "industriel."]}
    ctaIntro="Un ingénieur SUNAVIO analyse votre facture MT, modélise votre courbe de charge et chiffre votre rentabilité. La pré-étude est offerte sur votre facture, le monitoring est inclus."
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
