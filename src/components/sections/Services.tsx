import * as Icons from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import { services } from "../../data/personalData";

export function Services() {
  return (
    <section id="services" className="relative py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionLabel
          comment="services.sql"
          title="What I Can Build For You"
          subtitle="From a single reporting module to a full enterprise application — scoped, built, and handed off cleanly."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[s.icon] ?? Icons.Code;
            return (
              <Reveal key={s.title} delay={0.05 * (i % 3)}>
                <div className="group glass rounded-2xl p-6 h-full relative overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                  <div
                    className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"
                    style={{ background: "radial-gradient(circle, var(--color-violet), transparent 70%)" }}
                  />
                  <span className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-violet)] to-[var(--color-cyan-dim)] flex items-center justify-center text-white mb-5">
                    <Icon size={20} />
                  </span>
                  <p className="relative font-display font-semibold text-lg mb-2">{s.title}</p>
                  <p className="relative text-sm text-[var(--color-ink-mute)] leading-relaxed">{s.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
