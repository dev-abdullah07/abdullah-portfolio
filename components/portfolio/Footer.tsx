import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} {profile.name}. Crafted with care.
        </p>
        <div className="flex items-center gap-3 text-white/60">
          <a href={`mailto:${profile.email}`} className="hover:text-white" aria-label="Email">
            <Mail className="h-4 w-4" />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}