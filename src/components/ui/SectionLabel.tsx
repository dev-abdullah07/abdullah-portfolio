type SectionLabelProps = {
  comment: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

// Signature motif: every section opens like a SQL script — a "-- comment"
// line above a real statement, instead of a generic numbered marker.
export function SectionLabel({ comment, title, subtitle, align = "center" }: SectionLabelProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className="font-mono text-sm sql-comment text-[var(--color-ink-mute)] mb-3 tracking-wide">
        {comment}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-[var(--color-ink-soft)] text-base sm:text-lg max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
