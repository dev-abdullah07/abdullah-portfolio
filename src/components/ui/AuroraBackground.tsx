export function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[var(--color-void)]" />

      {/* Aurora blobs */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-40 blur-[120px] animate-drift"
        style={{ background: "radial-gradient(circle, var(--color-violet), transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -right-40 w-[550px] h-[550px] rounded-full opacity-30 blur-[130px] animate-drift-slow"
        style={{ background: "radial-gradient(circle, var(--color-cyan), transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-25 blur-[120px] animate-drift"
        style={{ background: "radial-gradient(circle, var(--color-violet-dim), transparent 70%)" }}
      />

      {/* Subtle grid — nods to schema / ER-diagram structure */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.07]" aria-hidden="true">
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="var(--color-ink-mute)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, var(--color-void) 85%)",
        }}
      />
    </div>
  );
}
