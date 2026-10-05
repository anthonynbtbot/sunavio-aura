import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type LenisLike = { scrollTo: (t: number | HTMLElement, o?: { immediate?: boolean; offset?: number }) => void };

/**
 * Scroll en haut à chaque changement de route ; si un hash est présent,
 * défilement doux jusqu'à l'élément ciblé (y compris sur la même page).
 */
export function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: LenisLike }).__lenis;
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      let tries = 0;
      const attempt = () => {
        const el = document.getElementById(id);
        if (el) {
          const l = (window as unknown as { __lenis?: LenisLike }).__lenis;
          if (l) l.scrollTo(el, { offset: -80 });
          else el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (tries++ < 20) {
          setTimeout(attempt, 100);
        }
      };
      setTimeout(attempt, 150);
      return;
    }
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash, key]);

  return null;
}
