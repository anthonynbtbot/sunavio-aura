import { useLenis } from "@/hooks/useLenis";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";

const Index = () => {
  useLenis();

  return (
    <div className="min-h-screen bg-bg text-wh">
      <Header />
      <main>
        <Hero />
        {/* Sections suivantes : Simulateur, Segments, Approche, Cas clients,
            Pourquoi SUNAVIO, CTA final — à venir dans la prochaine itération. */}
        <section className="py-32">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <p className="text-eyebrow">Suite à venir</p>
            <p className="mt-4 text-body text-gr2">
              Les sections complètes (simulateur, segments, cas clients…) seront ajoutées dans la prochaine itération.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
