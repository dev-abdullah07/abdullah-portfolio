export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.12),transparent_60%)]" />
      <div
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full opacity-40 blur-[120px] animate-blob"
        style={{ background: "radial-gradient(circle, oklch(0.65 0.25 300 / 0.7), transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full opacity-30 blur-[140px] animate-blob"
        style={{
          animationDelay: "-6s",
          background: "radial-gradient(circle, oklch(0.78 0.16 210 / 0.7), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[480px] w-[480px] rounded-full opacity-25 blur-[130px] animate-blob"
        style={{
          animationDelay: "-12s",
          background: "radial-gradient(circle, oklch(0.72 0.22 340 / 0.7), transparent 70%)",
        }}
      />
      {/* Particles */}
      <div className="absolute inset-0 opacity-60">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/40 animate-float-slow"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              animationDelay: `${(i % 6) * 0.7}s`,
              opacity: 0.15 + ((i % 5) / 10),
            }}
          />
        ))}
      </div>
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
    </div>
  );
}