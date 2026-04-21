import { Link } from "react-router-dom";
import { Container } from "@/components/atoms/Container";
import logo from "@/assets/sunavio-logo-white.png";

const SERVICES = [
  { label: "Hôtellerie & Hospitality", to: "/services#hospitality" },
  { label: "Villas d'exception",       to: "/services#villas" },
  { label: "Golf & domaines",          to: "/services#golf" },
  { label: "Tertiaire & bureaux",      to: "/services#tertiaire" },
  { label: "Industriel",               to: "/services#industriel" },
  { label: "Piscines & pool houses",   to: "/services#piscines" },
];

const COMPANY = [
  { label: "À propos", to: "/a-propos" },
  { label: "Contact",  to: "/contact" },
  { label: "Simulateur", href: "https://estimer.sunavio.com" },
];

const LEGAL = [
  { label: "Mentions légales",  to: "/mentions-legales" },
  { label: "Confidentialité",   to: "/confidentialite" },
  { label: "CGU",               to: "/cgu" },
  { label: "Cookies",           to: "/cookies" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-bg3">
      <Container size="wide" className="py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="inline-flex items-center"
              aria-label="SUNAVIO — accueil"
            >
              <img
                src={logo}
                alt="SUNAVIO — Énergie solaire premium Marrakech"
                className="h-12 w-auto"
                loading="eager"
                draggable={false}
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gr2">
              Solutions solaires sur-mesure pour villas, hôtels et domaines d'exception. Ingénierie marocaine, exigence internationale.
            </p>
            <p className="mt-6 text-eyebrow">Marrakech</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-eyebrow mb-5">Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.to}
                    className="text-sm text-gr transition-colors hover:text-or"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="text-eyebrow mb-5">Entreprise</h3>
            <ul className="space-y-3">
              {COMPANY.map((c) =>
                "href" in c ? (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-gr transition-colors hover:text-or"
                    >
                      {c.label}
                    </a>
                  </li>
                ) : (
                  <li key={c.label}>
                    <Link
                      to={c.to}
                      className="text-sm text-gr transition-colors hover:text-or"
                    >
                      {c.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="text-eyebrow mb-5">Légal</h3>
            <ul className="space-y-3">
              {LEGAL.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-gr transition-colors hover:text-or"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-gr2">
            © {new Date().getFullYear()} SUNAVIO SARL — Tous droits réservés.
          </p>
          <p className="text-xs text-gr2">
            Zenith Business Center · Bab Doukala · Marrakech-Guéliz · Maroc
          </p>
        </div>
      </Container>
    </footer>
  );
}
