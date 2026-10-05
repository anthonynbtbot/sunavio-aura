import { LegalLayout } from "@/components/layout/LegalLayout";

const CookiePolicy = () => (
  <LegalLayout
    eyebrow="POLITIQUE COOKIES"
    title="Politique cookies."
    accentWords={["cookies."]}
    updatedAt="Dernière mise à jour : 5 octobre 2026"
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
      <h2>2. Ce que le site utilise</h2>
      <p>
        Le site sunavio.com utilise l'outil de mesure d'audience de Google, Google
        Analytics, et l'outil publicitaire de Meta, le pixel Meta. Ils déposent des cookies
        sur votre appareil dès votre arrivée sur le site. Le site passe aussi par
        Cloudflare, qui n'en dépose pas. Voici ces outils et à quoi ils servent.
      </p>

      <h3>a) Mesure d'audience : Google Analytics</h3>
      <p>
        Google Analytics compte les visites et les pages vues, et nous indique d'où
        viennent les visiteurs (moteur de recherche, publicité, lien direct) et quel
        appareil ils utilisent. Il nous sert à savoir quelles pages sont lues et à
        améliorer le site. Il peut aussi servir à constituer des listes de visiteurs pour
        la publicité Google. Cookies : _ga et _ga_GCYVQ3Q6VM, gardés environ 13 mois.
      </p>

      <h3>b) Publicité : pixel Meta</h3>
      <p>
        Le pixel Meta mesure si une visite vient d'une de nos publicités Facebook ou
        Instagram et si elle se termine par une prise de contact. Il peut aussi servir à
        montrer nos publicités aux personnes qui ont déjà visité le site. Cookie : _fbp,
        gardé environ 3 mois.
      </p>

      <h3>c) Cloudflare</h3>
      <p>
        Le site passe par Cloudflare, qui mesure le nombre de visites et le temps de
        chargement des pages, sans déposer de cookie.
      </p>
    </section>

    <section>
      <h2>3. Gérer vos cookies</h2>
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
      <h2>4. Ancien simulateur en ligne</h2>
      <p>
        Les personnes qui ont utilisé l'ancien simulateur en ligne de SUNAVIO peuvent
        demander l'accès à leurs données ou leur suppression par mail à
        sunavio.contact@gmail.com.
      </p>
    </section>

    <section>
      <h2>5. Contact</h2>
      <p>
        Pour toute question relative aux cookies :{" "}
        <a href="mailto:sunavio.contact@gmail.com">sunavio.contact@gmail.com</a>
      </p>
    </section>
  </LegalLayout>
);

export default CookiePolicy;
