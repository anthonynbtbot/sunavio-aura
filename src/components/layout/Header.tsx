import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/atoms/Container";
import { SunavioButton } from "@/components/atoms/SunavioButton";
import logo from "@/assets/sunavio-logo-white.png";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ferme le menu mobile à chaque changement de route
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

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
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
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
                <a href="https://estimer.sunavio.com">
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
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <Container size="wide" className="flex h-full flex-col justify-center gap-10 pt-20">
              <ul className="space-y-6">
                {NAV.map((item, i) => (
                  <motion.li
                    key={item.to}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.1 + i * 0.08,
                    }}
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className={({ isActive }) =>
                        cn(
                          "font-display text-4xl font-semibold tracking-tight",
                          isActive ? "text-or" : "text-wh",
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              >
                <SunavioButton size="lg" asChild className="w-full">
                  <a href="https://estimer.sunavio.com">
                    Estimer mon projet
                  </a>
                </SunavioButton>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
