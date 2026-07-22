import { motion } from "framer-motion";
import { ShieldCheck, Gauge, GitBranch, Sparkles } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import { profile } from "../../data/personalData";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Security-minded",
    description: "Role-based access, input validation, and audit trails built in from the start, not bolted on later.",
  },
  {
    icon: Gauge,
    title: "Performance-first",
    description: "Queries and pages are tuned against real data volumes, not just the sample data in dev.",
  },
  {
    icon: GitBranch,
    title: "Clean architecture",
    description: "Reusable PL/SQL packages and APEX components so the next feature doesn't mean starting over.",
  },
  {
    icon: Sparkles,
    title: "User experience",
    description: "Enterprise software people actually enjoy using — clear, fast, and free of unnecessary friction.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionLabel comment="about.sql" title="Who I Am" />

        <div className="mt-14 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <Reveal>
            <div className="relative">
              <div className="glass rounded-2xl p-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--color-violet)] to-[var(--color-cyan)] flex items-center justify-center font-display text-2xl font-bold text-white mb-6">
                  {profile.initials}
                </div>
                <p className="font-mono text-xs text-[var(--color-cyan)] mb-2">role.current</p>
                <p className="font-display text-xl font-semibold">Oracle APEX Developer</p>
                <p className="text-sm text-[var(--color-ink-mute)] mt-1">{profile.location} · Remote-friendly</p>

                <div className="mt-6 pt-6 border-t border-[var(--color-border)] grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-display text-2xl font-bold text-gradient">4+</p>
                    <p className="text-xs text-[var(--color-ink-mute)]">Years building</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-gradient">18+</p>
                    <p className="text-xs text-[var(--color-ink-mute)]">Apps shipped</p>
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ rotate: [0, 4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -right-5 glass rounded-xl px-3 py-2 font-mono text-xs text-[var(--color-cyan)] hidden sm:block"
              >
                STATUS: ACTIVE
              </motion.div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-[var(--color-ink-soft)] text-base sm:text-lg leading-relaxed">
              {profile.summary}
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={0.05 * i}>
                  <div className="glass rounded-xl p-5 h-full hover:border-[var(--color-violet)] transition-colors">
                    <p.icon size={20} className="text-[var(--color-cyan)] mb-3" />
                    <p className="font-display font-semibold mb-1">{p.title}</p>
                    <p className="text-sm text-[var(--color-ink-mute)] leading-relaxed">{p.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
