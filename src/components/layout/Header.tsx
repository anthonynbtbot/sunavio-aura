import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/atoms/Container";
import { SunavioButton } from "@/components/atoms/SunavioButton";
import { cn } from "@/lib/utils";
import logo from "@/assets/sunavio-logo-white.png";

const NAV = [
  ["/solutions", "Solutions"],
  ["/panneaux-solaires-industrie-maroc", "Industrie"],
  ["/panneaux-solaires-hotel-marrakech", "Hôtellerie"],
  ["/agriculture-pompage-solaire", "Agriculture"],
  ["/references", "Références"],
  ["/ressources", "Ressources"],
  ["/a-propos", "À propos"],
  ["/contact", "Contact"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);
  return <>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/95 shadow-sm backdrop-blur">
      <Container size="wide">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          <Link to="/" aria-label="SUNAVIO — accueil" className="shrink-0">
            <span className="inline-flex rounded bg-wh px-3 py-2"><img src={logo} alt="SUNAVIO" className="h-6 w-auto lg:h-7" /></span>
          </Link>
          <nav className="hidden items-center gap-5 xl:flex" aria-label="Navigation principale">
            {NAV.map(([to, label]) => <NavLink key={to} to={to} className={({isActive}) => cn("text-[13px] font-medium text-gr2 transition-colors duration-150 hover:text-or", isActive && "text-or")}>{label}</NavLink>)}
          </nav>
          <div className="hidden lg:block xl:block"><SunavioButton asChild size="sm"><Link to="/pre-etude">Pré-étude gratuite</Link></SunavioButton></div>
          <button type="button" onClick={() => setOpen(!open)} aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} className="inline-flex h-10 w-10 items-center justify-center text-wh xl:hidden">{open ? <X /> : <Menu />}</button>
        </div>
      </Container>
    </header>
    {open && <nav className="fixed inset-0 z-40 overflow-y-auto bg-bg px-4 pb-24 pt-24 xl:hidden" aria-label="Navigation mobile">
      <div className="mx-auto flex max-w-xl flex-col divide-y divide-line">{NAV.map(([to,label]) => <NavLink key={to} to={to} className="py-4 text-xl font-semibold text-wh">{label}</NavLink>)}</div>
    </nav>}
  </>;
}