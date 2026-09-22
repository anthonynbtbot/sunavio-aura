// Tracking GA4 + Meta Pixel pour SUNAVIO
import ReactGA from "react-ga4";

const CONSENT_KEY = "sunavio-cookie-consent";

const hasConsent = () =>
  typeof window !== "undefined" && window.localStorage.getItem(CONSENT_KEY) === "accepted";

export const initTracking = () => {
  if (!hasConsent()) return;
  ReactGA.initialize("G-GCYVQ3Q6VM");
};

export const trackPageView = (path: string) => {
  if (!hasConsent()) return;
  ReactGA.send({ hitType: "pageview", page: path });
  if ((window as any).fbq) {
    (window as any).fbq("track", "PageView");
  }
};

export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (!hasConsent()) return;
  ReactGA.event(eventName, params);
  if ((window as any).fbq) {
    (window as any).fbq("track", eventName, params);
  }
};

// Events métier SUNAVIO
export const trackSimulatorStart = () => {
  trackEvent("simulateur_start", { source: "site_principal" });
};

export const trackSimulatorComplete = (data?: Record<string, any>) => {
  trackEvent("simulateur_complete", data);
};

export const trackContactClick = (type: "rendezvous" | "email" | "telephone") => {
  trackEvent("contact_click", { contact_type: type });
};

export const trackWhatsAppClick = () => {
  trackEvent("whatsapp_click", { platform: "whatsapp" });
};
