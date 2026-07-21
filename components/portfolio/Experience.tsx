import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section } from "./Section";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>A <span className="text-gradient">timeline</span> of building things.</>}
      subtitle="From focused PL/SQL work to full-stack APEX systems and executive dashboards."
    >
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[oklch(0.65_0.25_300)]/60 via-[oklch(0.78_0.16_210)]/50 to-transparent md:left-1/2" />
        <ul className="space-y-10">
          {experience.map((e, i) => (
            <motion.li
              key={e.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative pl-14 md:grid md:grid-cols-2 md:gap-10 md:pl-0 ${
                i % 2 === 0 ? "" : "md:[&>div]:col-start-2"
              }`}
            >
              <span className="absolute left-2 top-1.5 grid h-6 w-6 place-items-center rounded-full btn-aurora md:left-1/2 md:-translate-x-1/2">
                <Briefcase className="h-3 w-3" />
              </span>
              <div className="glass-strong rounded-2xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold">{e.role}</h3>
                  <span className="text-xs text-white/50">{e.period}</span>
                </div>
                <p className="mt-1 text-sm text-[oklch(0.78_0.16_210)]">{e.org}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[oklch(0.72_0.19_295)]" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}