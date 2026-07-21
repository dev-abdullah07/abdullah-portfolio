import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Section } from "./Section";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title={<>Continuous <span className="text-gradient">learning</span>.</>}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.05 }}
            className="group relative overflow-hidden rounded-2xl glass p-5 transition hover:-translate-y-0.5 hover:bg-white/[0.06]"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.72_0.22_340)]/30 to-[oklch(0.78_0.16_210)]/30 ring-1 ring-white/10">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">{c.title}</h3>
                <p className="text-xs text-white/60">{c.issuer}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}