import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title={<>Academic <span className="text-gradient">foundation</span>.</>}
    >
      <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
        {education.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass-strong rounded-2xl p-6"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.65_0.25_300)]/30 to-[oklch(0.78_0.16_210)]/30 ring-1 ring-white/10">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="text-xs text-white/50">{e.period}</span>
            </div>
            <h3 className="mt-4 text-base font-semibold">{e.degree}</h3>
            <p className="text-sm text-[oklch(0.78_0.16_210)]">{e.org}</p>
            <p className="mt-2 text-sm text-white/60">{e.detail}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}