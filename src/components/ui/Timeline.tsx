import { Reveal } from "../ui/Reveal";
import type { TimelineItem } from "../../data/personalData";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative mt-14 max-w-3xl mx-auto">
      <div
        className="absolute left-[15px] top-2 bottom-2 w-px"
        style={{ background: "linear-gradient(to bottom, var(--color-violet), var(--color-cyan), transparent)" }}
      />
      <div className="space-y-10">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={0.08 * i}>
            <div className="relative pl-12">
              <span
                className="absolute left-0 top-1 w-8 h-8 rounded-full glass flex items-center justify-center"
              >
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: "linear-gradient(90deg, var(--color-violet), var(--color-cyan))" }}
                />
              </span>

              <div className="glass rounded-xl p-5">
                <p className="font-mono text-xs text-[var(--color-cyan)]">{item.period}</p>
                <p className="font-display font-semibold text-lg mt-1">{item.title}</p>
                <p className="text-sm text-[var(--color-ink-mute)]">{item.org}</p>
                <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed mt-3">{item.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-1 rounded-md bg-[var(--color-panel-2)] text-[var(--color-ink-soft)] border border-[var(--color-border-soft)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
