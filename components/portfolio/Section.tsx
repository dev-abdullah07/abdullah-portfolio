import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, subtitle, children, className = "" }: Props) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.78_0.16_210)] shadow-[0_0_10px_oklch(0.78_0.16_210)]" />
              {eyebrow}
            </div>
          )}
          <h2 className="mt-5 text-balance text-3xl font-semibold sm:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-pretty text-base text-white/70 sm:text-lg">{subtitle}</p>
          )}
        </motion.div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}