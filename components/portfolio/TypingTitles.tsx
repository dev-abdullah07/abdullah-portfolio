import { useEffect, useState } from "react";

export function TypingTitles({ words }: { words: readonly string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setI((v) => v + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, i, words]);

  return (
    <span className="inline-flex items-baseline">
      <span className="text-gradient">{text}</span>
      <span className="ml-1 inline-block h-[1em] w-[3px] translate-y-[3px] rounded-sm bg-gradient-to-b from-[oklch(0.65_0.25_300)] to-[oklch(0.78_0.16_210)] animate-caret" />
    </span>
  );
}