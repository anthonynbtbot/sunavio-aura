import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SunavioButton } from "@/components/atoms/SunavioButton";
import { initTracking } from "@/lib/tracking";

const KEY = "sunavio-cookie-consent";

function loadScript(src: string, id: string) {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

function activateTracking() {
  const w = window as typeof window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; fbq?: (...args: unknown[]) => void; _fbq?: unknown };
  w.dataLayer = w.dataLayer || [];
  w.gtag = (...args: unknown[]) => w.dataLayer?.push(args);
  w.gtag("js", new Date());
  w.gtag("config", "G-GCYVQ3Q6VM", { send_page_view: false });
  w.gtag("config", "AW-18112043630");
  loadScript("https://www.googletagmanager.com/gtag/js?id=G-GCYVQ3Q6VM", "sunavio-gtag");
  loadScript("https://www.googletagmanager.com/gtm.js?id=GTM-P4KX4936", "sunavio-gtm");
  if (!w.fbq) {
    const fbq = ((...args: unknown[]) => {
      const fn = fbq as typeof fbq & { queue?: unknown[][] };
      fn.queue = fn.queue || [];
      fn.queue.push(args);
    }) as typeof w.fbq;
    w.fbq = fbq;
    loadScript("https://connect.facebook.net/en_US/fbevents.js", "sunavio-meta");
    w.fbq?.("init", "1412298983996838");
    w.fbq?.("track", "PageView");
  }
  initTracking();
}

export function CookieConsent() {
  const [choice, setChoice] = useState<string | null>(() => localStorage.getItem(KEY));
  useEffect(() => { if (choice === "accepted") activateTracking(); }, [choice]);
  if (choice) return null;
  const decide = (value: "accepted" | "refused") => {
    localStorage.setItem(KEY, value);
    setChoice(value);
  };
  return (
    <aside className="fixed inset-x-4 bottom-20 z-[70] mx-auto max-w-4xl border border-line bg-bg p-5 shadow-elevated md:bottom-6" aria-label="Préférences cookies">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-sm text-gr">Nous utilisons Google Tag Manager et Meta Pixel uniquement avec votre accord, conformément à la loi 09-08 et aux recommandations de la CNDP. <Link to="/cookies" className="font-semibold text-or underline">En savoir plus</Link>.</p>
        <div className="flex gap-3">
          <SunavioButton variant="secondary" size="sm" onClick={() => decide("refused")}>Refuser</SunavioButton>
          <SunavioButton size="sm" onClick={() => decide("accepted")}>Accepter</SunavioButton>
        </div>
      </div>
    </aside>
  );
}