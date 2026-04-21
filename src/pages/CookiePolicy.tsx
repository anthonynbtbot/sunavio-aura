import { LegalLayout } from "@/components/layout/LegalLayout";

const CookiePolicy = () => (
  <LegalLayout
    eyebrow="POLITIQUE COOKIES"
    title="Politique cookies."
    accentWords={["cookies."]}
    updatedAt="Dernière mise à jour : 21 avril 2026"
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
      <h2>2. Notre approche : minimale et transparente</h2>
      <p>
        Le site sunavio.com applique une politique cookies <strong>minimale</strong>.
        Nous n'utilisons aucun cookie marketing, aucun cookie de tracking tiers, aucun
        cookie publicitaire.
      </p>
      <p>Les seuls cookies présents sur ce site sont :</p>

      <h3>a) Cookies strictement nécessaires</h3>
      <p>
        Ces cookies sont indispensables au fonctionnement technique du site. Ils ne
        peuvent être désactivés. Exemples :
      </p>
      <ul>
        <li>Préférence de langue (si applicable dans le futur)</li>
        <li>Session utilisateur sur les pages interactives</li>
      </ul>

      <h3>b) Cookies de mesure d'audience (Umami Analytics)</h3>
      <p>
        Nous utilisons <strong>Umami Analytics</strong>, une solution d'analyse
        d'audience respectueuse de la vie privée, auto-hébergée, et conforme RGPD par
        conception. Umami ne dépose <strong>aucun cookie persistant</strong>. Les données
        collectées sont anonymisées, agrégées, et ne permettent pas de vous identifier.
      </p>
      <p>
        <strong>Aucun consentement n'est donc requis</strong> pour ces analytics
        respectueux.
      </p>
    </section>

    <section>
      <h2>3. Ce que nous n'utilisons PAS</h2>
      <p>Par transparence, voici ce que nous <strong>n'utilisons pas</strong> :</p>
      <ul>
        <li>Google Analytics (aucun cookie Google)</li>
        <li>Meta Pixel / Facebook Pixel</li>
        <li>Cookies publicitaires programmatiques</li>
        <li>Trackers réseaux sociaux</li>
        <li>Fingerprinting</li>
        <li>Retargeting</li>
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
        <a href="mailto:sunavio.contact@gmail.com">sunavio.contact@gmail.com</a>
      </p>
    </section>
  </LegalLayout>
);

export default CookiePolicy;
