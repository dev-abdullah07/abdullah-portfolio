import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "../../hooks/useCountUp";
import { stats } from "../../data/personalData";

function StatCard({ label, value, suffix, delay }: { label: string; value: number; suffix: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useCountUp(value, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="glass rounded-2xl p-6 text-center"
    >
      <p className="font-display text-3xl sm:text-4xl font-bold text-gradient">
        {count}
        {suffix}
      </p>
      <p className="text-xs sm:text-sm text-[var(--color-ink-mute)] mt-2">{label}</p>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="relative py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} label={s.label} value={s.value} suffix={s.suffix} delay={0.05 * i} />
          ))}
        </div>
      </div>
    </section>
  );
}
