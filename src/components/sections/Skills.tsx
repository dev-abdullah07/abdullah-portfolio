import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import { skillCategories } from "../../data/personalData";

export function Skills() {
  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionLabel
          comment="skills.sql"
          title="Skills & Proficiency"
          subtitle="The Oracle ecosystem end to end, plus the frontend and tooling that surrounds it."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[cat.icon] ?? Icons.Code;
            return (
              <Reveal key={cat.category} delay={0.06 * i}>
                <div className="glass rounded-2xl p-6 h-full hover:border-[var(--color-violet)] transition-colors">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-violet)]/20 to-[var(--color-cyan)]/20 flex items-center justify-center text-[var(--color-cyan)]">
                      <Icon size={18} />
                    </span>
                    <p className="font-display font-semibold">{cat.category}</p>
                  </div>

                  <div className="space-y-4">
                    {cat.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-xs mb-1.5 font-mono">
                          <span className="text-[var(--color-ink-soft)]">{skill.name}</span>
                          <span className="text-[var(--color-ink-mute)]">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-[var(--color-panel-2)] overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full rounded-full"
                            style={{ background: "linear-gradient(90deg, var(--color-violet), var(--color-cyan))" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
