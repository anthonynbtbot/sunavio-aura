import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SunavioButton } from "@/components/atoms/SunavioButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-bg text-gr">
      <SEO
        title="Page introuvable"
        description="La page demandée n'existe pas sur le site SUNAVIO."
        path={location.pathname}
        noIndex
      />
      <Header />
      <main className="flex min-h-[75vh] items-center justify-center px-4 pb-20 pt-32">
        <div className="max-w-xl text-center">
          <p className="text-eyebrow">ERREUR 404</p>
          <h1 className="mt-5 text-4xl font-bold text-wh md:text-6xl">Page introuvable</h1>
          <p className="mt-5 text-lg text-gr2">L'adresse demandée ne correspond à aucune page disponible.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <SunavioButton asChild><Link to="/">Retour à l'accueil</Link></SunavioButton>
            <SunavioButton asChild variant="secondary"><Link to="/pre-etude">Demander une pré-étude</Link></SunavioButton>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
