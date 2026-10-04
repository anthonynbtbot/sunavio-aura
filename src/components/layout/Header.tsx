import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/atoms/Container";
import { SunavioButton } from "@/components/atoms/SunavioButton";
import logo from "@/assets/sunavio-logo-white.png";
import { trackSimulatorStart } from "@/lib/tracking";

const SOLUTIONS = [
  { to: "/services", label: "Vue d'ensemble" },
  { to: "/panneaux-solaires-hotel-marrakech", label: "Hôtels & resorts" },
  { to: "/panneaux-solaires-villa-marrakech", label: "Villas d'exception" },
  { to: "/panneaux-solaires-golf-maroc", label: "Golfs & resorts golfiques" },
  { to: "/panneaux-solaires-industrie-maroc", label: "Industrie & tertiaire" },
  { to: "/kits-piscine", label: "Kits piscine" },
];

const SOLUTION_PATHS = SOLUTIONS.map((s) => s.to);

const TOP_NAV = [
  { to: "/", label: "Accueil" },
  { to: "/decret-2-25-100-autoproduction-maroc", label: "Le décret" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ferme les menus à chaque changement de route
  useEffect(() => {
    setOpen(false);
    setSolutionsOpen(false);
  }, [location.pathname]);

  const solutionsActive = SOLUTION_PATHS.includes(location.pathname);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo",
          scrolled
            ? "bg-bg/80 backdrop-blur-xl border-b border-or/20"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <Container size="wide">
          <div className="flex h-16 items-center justify-between md:h-20">
            <Link
              to="/"
              className="flex items-center transition-opacity hover:opacity-80"
              aria-label="SUNAVIO — accueil"
            >
              <img
                src={logo}
                alt="SUNAVIO — Énergie solaire premium Marrakech"
                className="h-10 w-auto md:h-12"
                loading="eager"
                draggable={false}
              />
            </Link>

            <nav className="hidden items-center gap-10 md:flex" aria-label="Navigation principale">
              {/* Accueil */}
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  cn(
                    "link-underline text-sm font-medium tracking-tight transition-colors",
                    isActive ? "text-or" : "text-gr hover:text-wh",
                  )
                }
              >
                Accueil
              </NavLink>

              {/* Solutions dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setSolutionsOpen((v) => !v)}
                  className={cn(
                    "link-underline inline-flex items-center gap-1 text-sm font-medium tracking-tight transition-colors",
                    solutionsActive ? "text-or" : "text-gr hover:text-wh",
                  )}
                  aria-expanded={solutionsOpen}
                  aria-haspopup="true"
                >
                  Solutions
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform",
                      solutionsOpen && "rotate-180",
                    )}
                  />
                </button>
                <AnimatePresence>
                  {solutionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-1/2 top-full z-50 mt-3 w-72 -translate-x-1/2"
                    >
                      <div className="rounded-xl border border-line bg-bg2/95 p-2 shadow-xl backdrop-blur-xl">
                        {SOLUTIONS.map((s) => (
                          <NavLink
                            key={s.to}
                            to={s.to}
                            className={({ isActive }) =>
                              cn(
                                "block rounded-lg px-4 py-2.5 text-sm transition-colors",
                                isActive
                                  ? "bg-or/10 text-or"
                                  : "text-gr hover:bg-bg3 hover:text-wh",
                              )
                            }
                          >
                            {s.label}
                          </NavLink>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Reste de la navigation */}
              {TOP_NAV.filter((i) => i.to !== "/").map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "link-underline text-sm font-medium tracking-tight transition-colors",
                      isActive ? "text-or" : "text-gr hover:text-wh",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden md:block">
              <SunavioButton size="sm" asChild>
                <a href="https://estimer.sunavio.com" onClick={() => trackSimulatorStart()}>
                  Estimer mon projet
                </a>
              </SunavioButton>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center text-wh md:hidden"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 overflow-y-auto bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <Container size="wide" className="flex min-h-full flex-col gap-8 pb-12 pt-24">
              <ul className="space-y-4">
                <li>
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                      cn(
                        "font-display text-3xl font-semibold tracking-tight",
                        isActive ? "text-or" : "text-wh",
                      )
                    }
                  >
                    Accueil
                  </NavLink>
                </li>
                <li>
                  <div className="font-display text-3xl font-semibold tracking-tight text-wh">
                    Solutions
                  </div>
                  <ul className="mt-3 space-y-2 border-l border-line pl-4">
                    {SOLUTIONS.map((s) => (
                      <li key={s.to}>
                        <NavLink
                          to={s.to}
                          className={({ isActive }) =>
                            cn(
                              "text-base",
                              isActive ? "text-or" : "text-gr",
                            )
                          }
                        >
                          {s.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
                {TOP_NAV.filter((i) => i.to !== "/").map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        cn(
                          "font-display text-3xl font-semibold tracking-tight",
                          isActive ? "text-or" : "text-wh",
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <SunavioButton size="lg" asChild className="w-full">
                <a href="https://estimer.sunavio.com" onClick={() => trackSimulatorStart()}>
                  Estimer mon projet
                </a>
              </SunavioButton>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
