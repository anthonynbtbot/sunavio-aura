import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scroll automatique en haut de page à chaque changement de route.
 * Ignore les navigations avec hash (ancres) pour laisser les gestionnaires d'ancre opérer.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;

    const lenis = (window as unknown as { __lenis?: { scrollTo: (t: number, o?: { immediate?: boolean }) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [pathname, hash]);

  return null;
}
