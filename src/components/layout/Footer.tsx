import { Link } from "react-router-dom";
import { Container } from "@/components/atoms/Container";
import logo from "@/assets/sunavio-logo-white.png";
import { trackSimulatorStart, trackContactClick } from "@/lib/tracking";

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
  { label: "Politique de confidentialité",   to: "/confidentialite" },
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
            <p className="mt-6 text-eyebrow">Marrakech · Maroc</p>
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
                      onClick={() => trackSimulatorStart()}
                      className="text-sm text-gr transition-colors hover:text-or"
                    >
                      {c.label}
                    </a>
                  </li>
                ) : (
                  <li key={c.label}>
                    <Link
                      to={c.to}
                      onClick={() => trackContactClick("email")}
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

        {/* Bloc identité légale — signaux de confiance */}
        <div className="mt-16 grid gap-8 border-t border-line pt-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-eyebrow mb-3">Société</h3>
            <p className="text-sm leading-relaxed text-gr">
              <span className="text-wh">SUNAVIO SARL</span><br />
              Société immatriculée au Maroc<br />
              <span className="text-gr2">RC :</span> 164901 Marrakech<br />
              <span className="text-gr2">ICE :</span> 003721552000008<br />
              <span className="text-gr2">IF :</span> 66967281
            </p>
          </div>
          <div>
            <h3 className="text-eyebrow mb-3">Adresse</h3>
            <p className="text-sm leading-relaxed text-gr">
              Zenith Business Center<br />
              Rue Mouslim, Lot Boukar<br />
              3ème étage, Apt N°14<br />
              Bab Doukala, Marrakech — Maroc
            </p>
          </div>
          <div>
            <h3 className="text-eyebrow mb-3">Contact</h3>
            <p className="text-sm leading-relaxed text-gr">
              <a href="tel:+212663284424" className="transition-colors hover:text-or">
                +212 6 63 28 44 24
              </a><br />
              <a href="mailto:sunavio.contact@gmail.com" className="transition-colors hover:text-or">
                sunavio.contact@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-gr2">
            © {new Date().getFullYear()} SUNAVIO SARL — Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-gr2">
            <Link to="/mentions-legales" className="transition-colors hover:text-or">Mentions légales</Link>
            <Link to="/confidentialite" className="transition-colors hover:text-or">Politique de confidentialité</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
