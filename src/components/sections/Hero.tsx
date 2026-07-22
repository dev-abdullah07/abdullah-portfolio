import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, ArrowRight, MapPin, CircleDot } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { profile } from "../../data/personalData";

function useTypedRoles(roles: string[]) {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    const speed = deleting ? 35 : 65;
    const pause = 1400;

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setRoleIndex((i) => i + 1);
      return;
    }

    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIndex, roles]);

  return text;
}

export function Hero() {
  const typed = useTypedRoles(profile.roles);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative pt-40 pb-24 px-4 sm:px-6 min-h-screen flex items-center">
      <div className="mx-auto max-w-6xl w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        {/* Left: headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono text-[var(--color-cyan)] mb-6">
            <CircleDot size={12} className="animate-pulse" />
            {profile.availability.status} · {profile.availability.modes.join(" / ")}
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight">
            Hi, I'm {profile.name} —<br />
            <span className="text-gradient">{typed}</span>
            <span className="animate-blink text-[var(--color-violet)]">|</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[var(--color-ink-soft)] max-w-xl leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-[var(--color-ink-mute)] font-mono">
            <MapPin size={14} /> {profile.location}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[var(--color-violet)] to-[var(--color-cyan-dim)] glow-violet hover:opacity-90 transition-opacity"
            >
              View Projects <ArrowRight size={16} />
            </button>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold glass hover:border-[var(--color-violet)] transition-colors"
            >
              <Download size={16} /> Download Resume
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold glass hover:border-[var(--color-cyan)] transition-colors"
            >
              <Mail size={16} /> Contact Me
            </button>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:text-[var(--color-cyan)] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:text-[var(--color-violet)] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right: signature — live query console rendering the result set */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="glass rounded-2xl overflow-hidden glow-violet">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[var(--color-border)]">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-3 font-mono text-xs text-[var(--color-ink-mute)]">query_console.sql</span>
            </div>
            <div className="p-5 font-mono text-[13px] leading-relaxed">
              <p className="text-[var(--color-cyan)]">
                SELECT <span className="text-[var(--color-ink)]">name, role, location</span>
              </p>
              <p className="text-[var(--color-cyan)]">
                FROM <span className="text-[var(--color-violet)]">developers</span>
              </p>
              <p className="text-[var(--color-cyan)]">
                WHERE <span className="text-[var(--color-ink)]">stack = 'Oracle APEX';</span>
              </p>

              <div className="mt-4 rounded-lg border border-[var(--color-border-soft)] overflow-hidden">
                <div className="grid grid-cols-3 bg-[var(--color-panel-2)] text-[var(--color-ink-mute)] px-3 py-2 text-[11px] uppercase tracking-wide">
                  <span>Name</span>
                  <span>Role</span>
                  <span>Location</span>
                </div>
                <div className="grid grid-cols-3 px-3 py-2.5 text-[var(--color-ink)] border-t border-[var(--color-border-soft)]">
                  <span>{profile.name}</span>
                  <span className="truncate">Oracle APEX Dev</span>
                  <span>{profile.location}</span>
                </div>
              </div>

              <p className="mt-4 text-[var(--color-ink-mute)]">
                <span className="text-[var(--color-cyan-dim)]">--</span> 1 row returned in 0.004s
              </p>
            </div>
          </div>

          {/* floating stat chip */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 glass rounded-xl px-4 py-3 hidden sm:block"
          >
            <p className="font-display text-2xl font-bold text-gradient">24+</p>
            <p className="text-xs text-[var(--color-ink-mute)]">Projects delivered</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
