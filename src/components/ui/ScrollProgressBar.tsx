import { useScrollProgress } from "../../hooks/useScrollProgress";

export function ScrollProgressBar() {
  const progress = useScrollProgress();
  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[60] bg-transparent">
      <div
        className="h-full transition-[width] duration-150 ease-out"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, var(--color-violet), var(--color-cyan))",
        }}
      />
    </div>
  );
}
