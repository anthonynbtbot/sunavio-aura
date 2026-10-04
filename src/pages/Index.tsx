import { useLenis } from "@/hooks/useLenis";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBanner } from "@/components/sections/TrustBanner";
import { Simulator } from "@/components/sections/Simulator";
import { Segments } from "@/components/sections/Segments";
import { Approach } from "@/components/sections/Approach";
import { Cases } from "@/components/sections/Cases";
import { WhySunavio } from "@/components/sections/WhySunavio";
import { FinalCTA } from "@/components/sections/FinalCTA";

const Index = () => {
  useLenis();

  return (
    <div className="min-h-screen bg-bg text-wh">
      <SEO
        title="Panneaux solaires Marrakech | Énergie solaire premium — SUNAVIO"
        description="Installation solaire villa, hôtel et domaine à Marrakech. Énergie solaire premium sur-mesure : panneaux, stockage batterie, micro-réseaux intelligents."
        path="/"
      />
      <Header />
      <main>
        <Hero />
        <TrustBanner />
        <Simulator />
        <Segments />
        <Approach />
        <Cases />
        <WhySunavio />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
