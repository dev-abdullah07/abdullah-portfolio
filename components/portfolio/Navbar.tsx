import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${
            scrolled ? "glass-strong shadow-[0_10px_40px_-20px_rgba(139,92,246,0.4)]" : "glass"
          }`}
        >
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg btn-aurora text-sm">A</span>
            <span className="hidden sm:inline">M. Abdullah</span>
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <li key={n.id} className="relative">
                <button
                  onClick={() => scrollTo(n.id)}
                  className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                    active === n.id ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {active === n.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/10 ring-1 ring-white/15"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {n.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <button
              onClick={() => scrollTo("contact")}
              className="btn-aurora rounded-full px-4 py-2 text-sm font-medium"
            >
              Hire Me
            </button>
          </div>

          <button
            className="grid h-9 w-9 place-items-center rounded-lg glass md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 grid gap-1 rounded-2xl glass-strong p-3 md:hidden"
          >
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`rounded-lg px-3 py-2 text-left text-sm ${
                  active === n.id ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5"
                }`}
              >
                {n.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </header>
  );
}