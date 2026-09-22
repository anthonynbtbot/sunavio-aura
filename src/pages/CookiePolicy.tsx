import { LegalLayout } from "@/components/layout/LegalLayout";

const CookiePolicy = () => (
  <LegalLayout
    eyebrow="POLITIQUE COOKIES"
    title="Politique cookies."
    accentWords={["cookies."]}
    updatedAt="Dernière mise à jour : 21 avril 2026"
    seoTitle="Politique cookies | SUNAVIO — Panneaux solaires Marrakech"
    seoDescription="Politique cookies du site SUNAVIO, spécialiste de l'installation solaire villa et de l'énergie solaire premium à Marrakech."
    path="/cookies"
  >
    <section>
      <h2>1. Qu'est-ce qu'un cookie ?</h2>
      <p>
        Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur,
        tablette, smartphone) lors de votre visite d'un site. Il permet notamment de
        mémoriser vos préférences, d'assurer le bon fonctionnement technique du site, ou
        d'analyser son audience.
      </p>
    </section>

    <section>
      <h2>2. Notre approche : consentement préalable</h2>
      <p>
        Le site sunavio.com ne charge aucun outil de mesure ou publicitaire avant votre
        accord. Votre choix est conservé localement et le refus n'empêche pas la navigation.
      </p>
      <p>Les catégories susceptibles d'être utilisées sont :</p>

      <h3>a) Cookies strictement nécessaires</h3>
      <p>
        Ces cookies sont indispensables au fonctionnement technique du site. Ils ne
        peuvent être désactivés. Exemples :
      </p>
      <ul>
        <li>Préférence de langue (si applicable dans le futur)</li>
        <li>Session utilisateur sur les pages interactives</li>
      </ul>

      <h3>b) Mesure d'audience et publicité, après accord</h3>
      <p>
        Après acceptation, Google Tag Manager, Google Analytics et Meta Pixel peuvent
        mesurer les visites et les demandes envoyées afin d'évaluer nos campagnes.
      </p>
      <p>
        <strong>Votre consentement est requis</strong> avant leur chargement.
      </p>
    </section>

    <section>
      <h2>3. Ce que nous n'utilisons pas sans accord</h2>
      <p>Avant acceptation, les outils suivants restent désactivés :</p>
      <ul>
        <li>Google Analytics et Google Tag Manager</li>
        <li>Meta Pixel / Facebook Pixel</li>
        <li>Cookies publicitaires ou de conversion</li>
      </ul>
    </section>

    <section>
      <h2>4. Gérer vos cookies</h2>
      <p>
        Vous pouvez à tout moment configurer votre navigateur pour bloquer ou supprimer
        les cookies. Consultez la documentation de votre navigateur :
      </p>
      <ul>
        <li>
          <strong>Chrome</strong> : Paramètres → Confidentialité et sécurité → Cookies
          et autres données des sites
        </li>
        <li>
          <strong>Firefox</strong> : Paramètres → Vie privée et sécurité → Cookies et
          données de sites
        </li>
        <li>
          <strong>Safari</strong> : Préférences → Confidentialité → Gérer les données de
          sites web
        </li>
        <li>
          <strong>Edge</strong> : Paramètres → Cookies et autorisations de site
        </li>
      </ul>
    </section>

    <section>
      <h2>5. Cookies du simulateur</h2>
      <p>
        Le simulateur à l'adresse estimer.sunavio.com dispose de sa propre politique
        cookies, accessible depuis son interface.
      </p>
    </section>

    <section>
      <h2>6. Contact</h2>
      <p>
        Pour toute question relative aux cookies :{" "}
        <a href="mailto:contact@sunavio.com">contact@sunavio.com</a>
      </p>
    </section>
  </LegalLayout>
);

export default CookiePolicy;
