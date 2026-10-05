// Tracking GA4 + Meta Pixel pour SUNAVIO
// Le pixel Meta est initialisé dans index.html (sans PageView).
// Les PageView (GA4 + Meta) partent UNIQUEMENT via trackPageView, appelé par le routeur
// au premier chargement puis à chaque changement de page interne.
import ReactGA from "react-ga4";

const GA4_ID = "G-GCYVQ3Q6VM";

type ContactType = "whatsapp" | "telephone" | "email" | "formulaire" | "rendezvous";

const fbq = (...args: any[]) => {
  const w = window as any;
  if (typeof w.fbq === "function") w.fbq(...args);
};

let lastPagePath: string | null = null;

export const initTracking = () => {
  ReactGA.initialize(GA4_ID);
  // Clics sur moyens de contact (WhatsApp, téléphone, e-mail) — délégation globale
  document.addEventListener(
    "click",
    (e) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      let type: ContactType | null = null;
      if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)/i.test(href)) type = "whatsapp";
      else if (href.startsWith("tel:")) type = "telephone";
      else if (href.startsWith("mailto:")) type = "email";
      if (type) trackContactLead(type);
    },
    true,
  );
};

export const trackPageView = (path: string) => {
  if (path === lastPagePath) return; // évite les doublons (StrictMode, re-render)
  lastPagePath = path;
  ReactGA.send({ hitType: "pageview", page: path });
  fbq("track", "PageView");
};

export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  ReactGA.event(eventName, params);
  fbq("trackCustom", eventName, params);
};

/** contact_click + Lead Meta standard */
export const trackContactLead = (type: ContactType) => {
  trackEvent("contact_click", { contact_type: type });
  fbq("track", "Lead", { content_name: type });
};

// Events métier SUNAVIO
export const trackSimulatorComplete = (data?: Record<string, any>) => {
  trackEvent("simulateur_complete", data);
};

// WhatsApp / téléphone / e-mail sont suivis automatiquement par la délégation globale
// (pour éviter le double comptage, ces appels ne font plus rien pour ces types).
export const trackContactClick = (type: "rendezvous" | "email" | "telephone") => {
  if (type === "rendezvous") trackEvent("contact_click", { contact_type: type });
};

export const trackWhatsAppClick = () => {};
