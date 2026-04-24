// Tracking GA4 + Meta Pixel pour SUNAVIO
import ReactGA from "react-ga4";

const GA4_ID = "G-GCYVQ3Q6VM";
const META_PIXEL_ID = "__META_PIXEL_ID__"; // Remplace par ton Pixel ID

export const initTracking = () => {
  // GA4
  ReactGA.initialize(GA4_ID);
  ReactGA.send("pageview");

  // Meta Pixel
  if (META_PIXEL_ID && META_PIXEL_ID !== "__META_PIXEL_ID__") {
    (window as any).fbq("init", META_PIXEL_ID);
    (window as any).fbq("track", "PageView");
  }
};

export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: "pageview", page: path });
  if ((window as any).fbq) {
    (window as any).fbq("track", "PageView");
  }
};

export const trackEvent = (eventName: string, params?: Record<string, any>) => {
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
