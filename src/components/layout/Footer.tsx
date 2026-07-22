import { Mail, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { profile } from "../../data/personalData";

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border-soft)] py-10 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-display font-semibold">
          <span className="w-7 h-7 rounded-md flex items-center justify-center bg-gradient-to-br from-[var(--color-violet)] to-[var(--color-cyan)] text-white">
            <Terminal size={14} />
          </span>
          {profile.name}
        </div>

        <p className="text-xs font-mono text-[var(--color-ink-mute)] text-center">
          COMMIT © {new Date().getFullYear()} · Built with React, TypeScript & Tailwind
        </p>

        <div className="flex items-center gap-3">
          <a href={`mailto:${profile.email}`} className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-[var(--color-cyan)] transition-colors" aria-label="Email">
            <Mail size={16} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-[var(--color-cyan)] transition-colors" aria-label="GitHub">
            <GithubIcon size={16} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-[var(--color-violet)] transition-colors" aria-label="LinkedIn">
            <LinkedinIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
