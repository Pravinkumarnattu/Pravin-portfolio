import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useActiveSection } from "../hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToSection = (id) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 60);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-glass py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container-px max-w-6xl mx-auto flex items-center justify-between">
        <button
          onClick={() => goToSection("home")}
          className="font-display font-bold text-lg tracking-tight text-ink"
        >
          <span className="text-emerald-glow font-mono">&lt;</span>
          Pravin
          <span className="text-gradient">.dev</span>
          <span className="text-emerald-glow font-mono">/&gt;</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1 font-mono text-[13px]">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => goToSection(item.id)}
                className={`relative px-3.5 py-2 rounded-full transition-colors group ${
                  active === item.id && location.pathname === "/"
                    ? "text-emerald-glow"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-3.5 right-3.5 -bottom-0.5 h-px bg-emerald-azure origin-left transition-transform duration-300 ${
                    active === item.id && location.pathname === "/"
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/resume"
            className="font-mono text-[13px] px-4 py-2 rounded-full bg-emerald-azure text-void font-medium shadow-glow hover:opacity-90 transition-opacity"
          >
            Resume
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-ink"
          >
            {open ? <FiX size={19} /> : <FiMenu size={19} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden glass-nav border-t border-white/10 mt-3"
          >
            <ul className="container-px py-4 flex flex-col gap-1 font-mono text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => goToSection(item.id)}
                    className={`w-full text-left py-2.5 ${
                      active === item.id
                        ? "text-emerald-glow"
                        : "text-ink-muted"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/resume"
                  onClick={() => setOpen(false)}
                  className="inline-block px-4 py-2 rounded-full bg-emerald-azure text-void font-medium"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
