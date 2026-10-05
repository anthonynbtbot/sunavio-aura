import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense, useEffect } from "react";
import Index from "./pages/Index.tsx";
import { ScrollToTop } from "@/components/ScrollToTop";
import { trackPageView } from "./lib/tracking";

// Chaque page (hors accueil) est chargée uniquement quand on l'ouvre.
const Contact = lazy(() => import("./pages/Contact.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const Services = lazy(() => import("./pages/Services.tsx"));
const LegalMentions = lazy(() => import("./pages/LegalMentions.tsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.tsx"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse.tsx"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const DecretAutoproduction = lazy(() => import("./pages/DecretAutoproduction.tsx"));
const HotelMarrakech = lazy(() => import("./pages/HotelMarrakech.tsx"));
const GolfMaroc = lazy(() => import("./pages/GolfMaroc.tsx"));
const VillaMarrakech = lazy(() => import("./pages/VillaMarrakech.tsx"));
const IndustrieMaroc = lazy(() => import("./pages/IndustrieMaroc.tsx"));

const queryClient = new QueryClient();

const PageTracker = () => {
  const location = useLocation();
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);
  return null;
};

/** Écran de chargement sobre, à la couleur de fond du site. */
const PageFallback = () => (
  <div className="flex min-h-screen items-center justify-center bg-bg">
    <span className="text-eyebrow text-gr2">Chargement…</span>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageTracker />
        <ScrollToTop />
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/mentions-legales" element={<LegalMentions />} />
            <Route path="/confidentialite" element={<PrivacyPolicy />} />
            <Route path="/cgu" element={<TermsOfUse />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/kits-piscine" element={<Navigate to="/panneaux-solaires-villa-marrakech" replace />} />
            <Route path="/decret-2-25-100-autoproduction-maroc" element={<DecretAutoproduction />} />
            <Route path="/panneaux-solaires-hotel-marrakech" element={<HotelMarrakech />} />
            <Route path="/panneaux-solaires-villa-marrakech" element={<VillaMarrakech />} />
            <Route path="/panneaux-solaires-golf-maroc" element={<GolfMaroc />} />
            <Route path="/panneaux-solaires-industrie-maroc" element={<IndustrieMaroc />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
