import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const lines = [
  "CONNECT abdullah@enterprise_db;",
  "SELECT role, status FROM profile WHERE name = 'M. Abdullah';",
  "-- 9 rows returned",
  "Rendering portfolio...",
];

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < lines.length) {
      const t = setTimeout(() => setLineIndex((i) => i + 1), 340);
      return () => clearTimeout(t);
    }
    const done = setTimeout(() => {
      setVisible(false);
      onDone();
    }, 400);
    return () => clearTimeout(done);
  }, [lineIndex, onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-[var(--color-void)] flex items-center justify-center"
        >
          <div className="w-[90vw] max-w-md font-mono text-sm">
            {lines.slice(0, lineIndex).map((line, i) => (
              <p key={i} className="text-[var(--color-ink-soft)] mb-2">
                <span className="text-[var(--color-cyan)]">{">"}</span> {line}
              </p>
            ))}
            {lineIndex < lines.length && (
              <span className="inline-block w-2 h-4 bg-[var(--color-violet)] animate-blink align-middle" />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
