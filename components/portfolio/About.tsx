import { motion } from "framer-motion";
import { Code2, Database, LayoutDashboard, Shield } from "lucide-react";
import { Section } from "./Section";
import { profile } from "@/data/portfolio";

const pillars = [
  { icon: Database, title: "Data First", desc: "Solid schemas, indexes, and PL/SQL that scale." },
  { icon: Code2, title: "Clean Architecture", desc: "Modular APEX apps that are easy to evolve." },
  { icon: LayoutDashboard, title: "Delightful UI", desc: "Interfaces users actually enjoy." },
  { icon: Shield, title: "Secure by Default", desc: "RBAC, audit trails, and hardened APIs." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>The developer behind the <span className="text-gradient">systems</span>.</>}
      subtitle="A concise story of what I do, and why enterprise software should feel this good."
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-strong rounded-3xl p-8"
        >
          <div className="space-y-4 text-white/75 leading-relaxed">
            {profile.aboutLong.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {pillars.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="glass rounded-2xl p-5 transition hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.65_0.25_300)]/30 to-[oklch(0.78_0.16_210)]/30 ring-1 ring-white/10">
                <p.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-sm font-semibold">{p.title}</h3>
              <p className="mt-1 text-xs text-white/60">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}