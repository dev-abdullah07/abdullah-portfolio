import { techMarquee } from "../../data/personalData";

export function TechMarquee() {
  const loop = [...techMarquee, ...techMarquee];
  return (
    <div className="relative py-10 border-y border-[var(--color-border-soft)] overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[var(--color-void)] to-transparent" />
      <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[var(--color-void)] to-transparent" />
      <div className="flex w-max animate-marquee gap-10">
        {loop.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="font-mono text-sm text-[var(--color-ink-mute)] whitespace-nowrap px-2"
          >
            {tech} <span className="text-[var(--color-violet)] mx-2">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
