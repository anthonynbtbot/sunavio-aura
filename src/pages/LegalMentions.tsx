import { LegalLayout } from "@/components/layout/LegalLayout";

const LegalMentions = () => (
  <LegalLayout
    eyebrow="MENTIONS LÉGALES"
    title="Mentions légales."
    accentWords={["légales."]}
    updatedAt="Dernière mise à jour : 21 avril 2026"
  >
    <section>
      <h2>1. Éditeur du site</h2>
      <p>Le site sunavio.com est édité par :</p>
      <p>
        <strong>SUNAVIO SARL</strong>
        <br />
        Société à responsabilité limitée de droit marocain
        <br />
        Capital social : 100 000 MAD
        <br />
        Siège social : Zenith Business Center, Rue Mouslim, Lot Boukar, 3ème étage,
        Apt N°14, Bab Doukala, Marrakech-Guéliz, Maroc
      </p>
      <p>
        <strong>Immatriculations :</strong>
      </p>
      <ul>
        <li>ICE : 003721552000008</li>
        <li>RC : 164901 Marrakech</li>
        <li>IF : 66967281</li>
        <li>TP : 45315807</li>
      </ul>
      <p>
        <strong>Direction de la publication :</strong> Les co-gérants de SUNAVIO SARL
      </p>
      <p>
        <strong>Contact :</strong>
      </p>
      <ul>
        <li>
          Email : <a href="mailto:sunavio.contact@gmail.com">sunavio.contact@gmail.com</a>
        </li>
        <li>
          Téléphone : <a href="tel:+212663284424">+212 663 284 424</a>
        </li>
      </ul>
    </section>

    <section>
      <h2>2. Hébergement</h2>
      <p>
        Le site est hébergé sur une infrastructure dédiée opérée depuis l'Union européenne
        par Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaca, Chypre
        (
        <a href="https://www.hostinger.com" target="_blank" rel="noopener noreferrer">
          https://www.hostinger.com
        </a>
        ).
      </p>
      <p>
        La diffusion est assurée via le réseau de distribution Cloudflare, Inc., 101
        Townsend St, San Francisco, CA 94107, USA (
        <a href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer">
          https://www.cloudflare.com
        </a>
        ).
      </p>
    </section>

    <section>
      <h2>3. Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus présents sur ce site (textes, images, logo, charte
        graphique, code source spécifique) est la propriété exclusive de SUNAVIO SARL ou
        de ses ayants droit, et est protégé par les lois marocaines et internationales
        relatives à la propriété intellectuelle.
      </p>
      <p>
        Toute reproduction, représentation, modification, publication ou adaptation,
        totale ou partielle, sans autorisation écrite préalable de SUNAVIO SARL, est
        interdite et constitue une contrefaçon.
      </p>
      <p>
        Les marques citées à titre de référence (Jinko Solar, WeCo, etc.) restent la
        propriété de leurs détenteurs respectifs.
      </p>
    </section>

    <section>
      <h2>4. Responsabilité</h2>
      <p>
        Les informations diffusées sur ce site ont un caractère indicatif et ne sauraient
        constituer une offre contractuelle. Tout projet d'installation solaire fait
        l'objet d'une étude technique spécifique et d'un devis détaillé avant engagement.
      </p>
      <p>
        SUNAVIO SARL s'efforce d'assurer l'exactitude des informations publiées, mais ne
        peut être tenue responsable des erreurs, omissions, ou indisponibilités du site.
      </p>
    </section>

    <section>
      <h2>5. Loi applicable</h2>
      <p>
        Le présent site est soumis au droit marocain. Tout litige relatif à son
        utilisation relèvera de la compétence exclusive des tribunaux de Marrakech.
      </p>
    </section>
  </LegalLayout>
);

export default LegalMentions;
