import { Link } from "react-router-dom";
import { LegalLayout } from "@/components/layout/LegalLayout";

const TermsOfUse = () => (
  <LegalLayout
    eyebrow="CONDITIONS GÉNÉRALES D'UTILISATION"
    title="Conditions d'utilisation."
    accentWords={["d'utilisation."]}
    updatedAt="Dernière mise à jour : 21 avril 2026"
  >
    <section>
      <h2>1. Objet</h2>
      <p>
        Les présentes Conditions Générales d'Utilisation régissent l'accès et l'usage du
        site sunavio.com, édité par SUNAVIO SARL. L'accès au site implique l'acceptation
        pleine et entière des présentes conditions.
      </p>
    </section>

    <section>
      <h2>2. Accès au site</h2>
      <p>
        Le site est accessible gratuitement à toute personne disposant d'un accès
        Internet. Les frais liés à cet accès (matériel, abonnement, connexion) restent à
        la charge de l'utilisateur.
      </p>
      <p>
        SUNAVIO SARL se réserve le droit d'interrompre l'accès au site pour maintenance
        ou pour toute autre raison, sans préavis ni indemnisation.
      </p>
    </section>

    <section>
      <h2>3. Usage du site</h2>
      <p>L'utilisateur s'engage à :</p>
      <ul>
        <li>
          Utiliser le site conformément à sa destination (information sur les services
          de SUNAVIO)
        </li>
        <li>
          Ne pas tenter d'accéder à des espaces restreints, d'altérer le site, ou d'en
          compromettre la sécurité
        </li>
        <li>
          Ne pas extraire de manière automatisée (scraping, robots) le contenu du site à
          des fins commerciales
        </li>
      </ul>
    </section>

    <section>
      <h2>4. Contenu informatif</h2>
      <p>
        Les informations présentées sur ce site ont un caractère{" "}
        <strong>purement informatif</strong>. Elles ne constituent ni offre
        contractuelle, ni engagement commercial, ni conseil en ingénierie spécifique à
        votre situation.
      </p>
      <p>
        Tout projet d'installation solaire nécessite une étude technique individuelle
        menée par nos équipes avant toute décision d'investissement.
      </p>
    </section>

    <section>
      <h2>5. Liens externes</h2>
      <p>
        Le site peut contenir des liens vers des sites tiers (notamment
        estimer.sunavio.com, wa.me pour WhatsApp, partenaires équipementiers cités à
        titre de référence). SUNAVIO SARL n'exerce aucun contrôle sur ces sites externes
        et décline toute responsabilité quant à leur contenu.
      </p>
    </section>

    <section>
      <h2>6. Propriété intellectuelle</h2>
      <p>
        Voir la section dédiée dans les{" "}
        <Link to="/mentions-legales">Mentions légales</Link>.
      </p>
    </section>

    <section>
      <h2>7. Droit applicable</h2>
      <p>
        Les présentes CGU sont soumises au droit marocain. Tout litige relève de la
        compétence exclusive des tribunaux de Marrakech.
      </p>
    </section>

    <section>
      <h2>8. Contact</h2>
      <p>
        Pour toute question relative aux présentes conditions :{" "}
        <a href="mailto:sunavio.contact@gmail.com">sunavio.contact@gmail.com</a>
      </p>
    </section>
  </LegalLayout>
);

export default TermsOfUse;
