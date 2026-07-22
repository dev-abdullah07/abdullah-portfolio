import * as Icons from "lucide-react";
import { Award } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import { certifications } from "../../data/personalData";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionLabel comment="certifications.sql" title="Certifications" />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((c, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[c.icon] ?? Award;
            return (
              <Reveal key={c.title} delay={0.05 * i}>
                <div className="glass rounded-2xl p-6 flex items-start gap-4 hover:border-[var(--color-cyan)] transition-colors h-full">
                  <span className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-[var(--color-amber)]/20 to-[var(--color-violet)]/20 flex items-center justify-center text-[var(--color-amber)]">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="font-display font-semibold">{c.title}</p>
                    <p className="text-xs text-[var(--color-ink-mute)] mt-1 font-mono">{c.issuer}</p>
                    <span className="inline-block mt-3 text-[11px] font-mono px-2 py-1 rounded-md bg-[var(--color-panel-2)] text-[var(--color-ink-soft)] border border-[var(--color-border-soft)]">
                      {c.category}
                    </span>
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
