import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-center relative">
      <div>
        <p className="font-mono text-sm sql-comment text-[var(--color-ink-mute)]">error.sql</p>
        <h1 className="font-display text-7xl sm:text-8xl font-bold text-gradient mt-3">404</h1>
        <p className="font-mono text-sm text-[var(--color-cyan)] mt-4">
          ORA-00404: page not found in schema 'portfolio'
        </p>
        <p className="text-[var(--color-ink-soft)] mt-3 max-w-md mx-auto">
          The page you're looking for doesn't exist, or the route was rolled back before commit.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[var(--color-violet)] to-[var(--color-cyan-dim)] hover:opacity-90 transition-opacity"
        >
          <Home size={16} /> Back to Home
        </Link>
      </div>
    </div>
  );
}
