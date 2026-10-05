import { Link } from "react-router-dom";
import { LegalLayout } from "@/components/layout/LegalLayout";

const PrivacyPolicy = () => (
  <LegalLayout
    eyebrow="POLITIQUE DE CONFIDENTIALITÉ"
    title="Politique de confidentialité."
    accentWords={["confidentialité."]}
    updatedAt="Dernière mise à jour : 5 octobre 2026"
    seoTitle="Politique de confidentialité | SUNAVIO Marrakech"
    seoDescription="Politique de confidentialité SUNAVIO : traitement des données pour nos services de panneaux solaires et installation solaire villa à Marrakech."
    path="/confidentialite"
  >
    <section>
      <h2>1. Préambule</h2>
      <p>
        La présente politique décrit comment SUNAVIO SARL traite les données personnelles
        dans le cadre de l'utilisation du site sunavio.com.
      </p>
      <p>
        Le site sunavio.com est un site vitrine. Il recueille des données de deux façons :
        le formulaire de contact, que vous remplissez vous-même, et des outils de mesure
        (Google Analytics pour la mesure d'audience, le pixel Meta pour la publicité,
        Cloudflare pour le nombre de visites et le temps de chargement des pages), décrits
        dans notre <Link to="/cookies">politique cookies</Link>.
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
      <h3>Données de visite (Google Analytics, pixel Meta, Cloudflare)</h3>
      <ul>
        <li>Pages visitées</li>
        <li>Temps passé sur le site</li>
        <li>Source de provenance (moteur de recherche, lien direct, etc.)</li>
        <li>Type d'appareil et de navigateur</li>
        <li>Pays d'origine (via géolocalisation IP approximative)</li>
      </ul>
      <p>
        Ces données sont recueillies par Google Analytics et le pixel Meta, chargés par le
        code du site. Cloudflare, par lequel passe le site, mesure aussi le nombre de
        visites et le temps de chargement des pages, sans déposer de cookie. Elles servent
        à mesurer l'audience du site, à savoir quelles visites viennent de nos publicités
        et se terminent par une prise de contact, et à montrer nos publicités aux personnes
        qui ont déjà visité le site. Ces outils déposent des cookies sur votre appareil :
        leur liste et leur rôle sont dans notre{" "}
        <Link to="/cookies">politique cookies</Link>.
      </p>

      <h3>Données de contact direct</h3>
      <p>
        Si vous nous contactez par le formulaire du site, par WhatsApp, par mail ou par
        téléphone, les données que vous nous communiquez (nom, coordonnées, message)
        servent à vous répondre. Le formulaire du site nous est transmis par le service
        d'envoi de formulaires Formspree.
      </p>

      <h3>Ancien simulateur en ligne</h3>
      <p>
        Les personnes qui ont utilisé l'ancien simulateur en ligne de SUNAVIO peuvent
        demander l'accès à leurs données ou leur suppression par mail à
        sunavio.contact@gmail.com.
      </p>
    </section>

    <section>
      <h2>4. À quoi servent vos données</h2>
      <p>
        Les données de visite servent à mesurer l'audience du site et à l'améliorer, et à
        mesurer et diffuser nos publicités sur Facebook et Instagram ; Google Analytics
        peut aussi servir à constituer des listes de visiteurs pour la publicité Google.
        Les données de contact servent à vous répondre.
      </p>
    </section>

    <section>
      <h2>5. Durée de conservation</h2>
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
