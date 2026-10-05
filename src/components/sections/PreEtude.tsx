import { Link } from "react-router-dom";
import { Container } from "@/components/atoms/Container";
import { Reveal } from "@/components/atoms/Reveal";
import { SectionHeader } from "@/components/atoms/SectionHeader";
import { SunavioButton } from "@/components/atoms/SunavioButton";

export function PreEtude() {
  return (
    <section className="relative overflow-hidden bg-bg3 py-24 md:py-32">
      <Container size="wide" className="relative z-10">
        <SectionHeader
          title="Pré-étude offerte sur votre facture"
          accentWords={["facture"]}
          intro="Envoyez-nous votre dernière facture d'électricité : elle sert de base à la pré-étude de votre site. Décrivez votre projet dans le formulaire, nous vous recontactons pour la recevoir."
        />
        <Reveal delay={0.3}>
          <div className="mt-10">
            <SunavioButton size="lg" asChild>
              <Link to="/contact#contact-form">Demander une pré-étude</Link>
            </SunavioButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
