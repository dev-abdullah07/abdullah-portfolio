import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Terminal } from "lucide-react";
import { useActiveSection } from "../../hooks/useActiveSection";
import { profile } from "../../data/personalData";
import type { Theme } from "../../hooks/useTheme";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export function Navbar({ theme, toggleTheme }: { theme: Theme; toggleTheme: () => void }) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navItems.map((n) => n.id));

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-4">
        <div className="glass rounded-2xl px-4 sm:px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2 font-display font-semibold text-lg"
          >
            <span className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-[var(--color-violet)] to-[var(--color-cyan)] text-white">
              <Terminal size={16} />
            </span>
            <span className="hidden sm:inline">{profile.initials}<span className="text-gradient">.dev</span></span>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  active === item.id
                    ? "text-[var(--color-ink)]"
                    : "text-[var(--color-ink-mute)] hover:text-[var(--color-ink)]"
                }`}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full"
                    style={{ background: "linear-gradient(90deg, var(--color-violet), var(--color-cyan))" }}
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-lg flex items-center justify-center border border-[var(--color-border)] text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] hover:border-[var(--color-violet)] transition-colors"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[var(--color-violet)] to-[var(--color-cyan-dim)] hover:opacity-90 transition-opacity"
            >
              Hire Me
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center border border-[var(--color-border)]"
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass rounded-2xl mt-2 overflow-hidden"
            >
              <div className="flex flex-col p-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`text-left px-4 py-3 rounded-lg text-sm font-medium ${
                      active === item.id ? "text-[var(--color-ink)] bg-[var(--color-panel-2)]" : "text-[var(--color-ink-mute)]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
