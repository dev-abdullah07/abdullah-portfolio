import { motion } from "framer-motion";
import { Section } from "./Section";
import { skillCategories } from "@/data/portfolio";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>An <span className="text-gradient">enterprise-grade</span> toolkit.</>}
      subtitle="A curated set of technologies I use daily to design, build, and ship."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="glass-strong rounded-2xl p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                {cat.title}
              </h3>
              <span className="text-xs text-white/40">{cat.items.length} skills</span>
            </div>
            <ul className="mt-5 space-y-4">
              {cat.items.map((s) => (
                <li key={s.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/85">{s.name}</span>
                    <span className="text-xs text-white/50">{s.level}%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-[oklch(0.65_0.25_300)] via-[oklch(0.6_0.22_265)] to-[oklch(0.78_0.16_210)] shadow-[0_0_16px_oklch(0.72_0.19_295_/_0.6)]"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}