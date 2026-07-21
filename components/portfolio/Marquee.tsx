import { marqueeTech } from "@/data/portfolio";

export function Marquee() {
  const row = [...marqueeTech, ...marqueeTech];
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-white/[0.02] py-6 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap px-6">
        {row.map((t, i) => (
          <span
            key={i}
            className="text-sm font-medium uppercase tracking-[0.25em] text-white/50"
          >
            {t}
            <span className="ml-10 text-[oklch(0.72_0.19_295)]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}