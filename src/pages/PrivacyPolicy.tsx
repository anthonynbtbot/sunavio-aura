import { LegalLayout } from "@/components/layout/LegalLayout";

const PrivacyPolicy = () => (
  <LegalLayout
    eyebrow="POLITIQUE DE CONFIDENTIALITÉ"
    title="Politique de confidentialité."
    accentWords={["confidentialité."]}
    updatedAt="Dernière mise à jour : 21 avril 2026"
  >
    <section>
      <h2>1. Préambule</h2>
      <p>
        La présente politique décrit comment SUNAVIO SARL traite les données personnelles
        dans le cadre de l'utilisation du site sunavio.com.
      </p>
      <p>
        <strong>Principe fondamental :</strong> le site sunavio.com est un site vitrine.
        Il ne collecte aucune donnée personnelle via formulaire, compte utilisateur ou
        transaction. Les seules données traitées sont des données techniques de
        fréquentation, anonymisées et strictement nécessaires au fonctionnement et à
        l'amélioration du site.
      </p>
    </section>

    <section>
      <h2>2. Responsable du traitement</h2>
      <p>
        SUNAVIO SARL, immatriculée au Registre du Commerce de Marrakech sous le numéro
        164901, dont le siège social est situé au Zenith Business Center, Bab Doukala,
        Marrakech-Guéliz, Maroc.
      </p>
      <p>
        Contact :{" "}
        <a href="mailto:sunavio.contact@gmail.com">sunavio.contact@gmail.com</a>
      </p>
    </section>

    <section>
      <h2>3. Données collectées</h2>
      <h3>Données techniques de fréquentation (via Umami Analytics)</h3>
      <ul>
        <li>Pages visitées</li>
        <li>Temps passé sur le site</li>
        <li>Source de provenance (moteur de recherche, lien direct, etc.)</li>
        <li>Type d'appareil et de navigateur (agrégé)</li>
        <li>Pays d'origine (via géolocalisation IP approximative)</li>
      </ul>
      <p>
        Ces données sont <strong>agrégées et anonymisées</strong>. Aucune adresse IP n'est
        stockée. Aucun identifiant permettant de vous reconnaître personnellement n'est
        utilisé. Aucun cookie de tracking tiers (Google Analytics, Meta Pixel, etc.) n'est
        déployé sur ce site.
      </p>

      <h3>Données de contact direct</h3>
      <p>
        Si vous choisissez de nous contacter via WhatsApp, email ou téléphone depuis notre
        page Contact, les données que vous nous communiquez volontairement (nom,
        coordonnées, contenu du message) sont traitées uniquement pour vous répondre.
        Elles ne sont jamais partagées avec des tiers.
      </p>

      <h3>Estimation de projet</h3>
      <p>
        Si vous utilisez notre simulateur à l'adresse estimer.sunavio.com, ce dernier
        dispose de sa propre politique de confidentialité détaillée, accessible depuis
        son interface. Le simulateur est un outil distinct du site vitrine.
      </p>
    </section>

    <section>
      <h2>4. Base légale et finalité</h2>
      <p>
        Le traitement des données de fréquentation repose sur notre{" "}
        <strong>intérêt légitime</strong> à comprendre l'audience du site et à en
        améliorer les performances techniques. Aucune donnée n'est utilisée à des fins
        commerciales, publicitaires ou de profilage.
      </p>
    </section>

    <section>
      <h2>5. Durée de conservation</h2>
      <p>
        Les statistiques de fréquentation anonymisées sont conservées pendant 12 mois,
        puis automatiquement supprimées.
      </p>
      <p>
        Les échanges directs (emails, messages WhatsApp) sont conservés tant que la
        relation commerciale est active, puis archivés 5 ans conformément aux obligations
        comptables marocaines.
      </p>
    </section>

    <section>
      <h2>6. Vos droits</h2>
      <p>
        Conformément à la <strong>Loi marocaine n° 09-08</strong> relative à la protection
        des personnes physiques à l'égard du traitement des données à caractère
        personnel, et au <strong>RGPD</strong> pour les visiteurs européens, vous disposez
        des droits suivants :
      </p>
      <ul>
        <li>Droit d'accès à vos données</li>
        <li>Droit de rectification</li>
        <li>Droit à l'effacement</li>
        <li>Droit d'opposition au traitement</li>
        <li>Droit à la portabilité</li>
      </ul>
      <p>
        Pour exercer ces droits, écrivez à :{" "}
        <strong>
          <a href="mailto:sunavio.contact@gmail.com">sunavio.contact@gmail.com</a>
        </strong>
      </p>
      <p>
        Nous nous engageons à répondre sous 30 jours. En cas de désaccord, vous pouvez
        saisir la Commission Nationale de contrôle de la protection des Données à
        caractère Personnel (CNDP) au Maroc, ou votre autorité nationale de protection
        des données pour les visiteurs européens.
      </p>
    </section>

    <section>
      <h2>7. Sécurité</h2>
      <p>
        Nous mettons en œuvre les mesures techniques et organisationnelles appropriées
        pour protéger les données contre tout accès non autorisé : hébergement sécurisé,
        chiffrement HTTPS systématique, accès restreints, sauvegardes régulières.
      </p>
    </section>

    <section>
      <h2>8. Modifications</h2>
      <p>
        La présente politique peut être mise à jour pour refléter des évolutions légales
        ou techniques. La date de dernière mise à jour est indiquée en haut de cette
        page.
      </p>
    </section>
  </LegalLayout>
);

export default PrivacyPolicy;
