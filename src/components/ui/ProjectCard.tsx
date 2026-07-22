import { ExternalLink, FileSearch } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import type { Project } from "../../data/personalData";

export function ProjectCard({ project, onCaseStudy }: { project: Project; onCaseStudy: (p: Project) => void }) {
  return (
    <div className="group glass rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-[var(--color-violet)] transition-all duration-300 flex flex-col h-full">
      <div className="relative h-36 flex items-center justify-center overflow-hidden border-b border-[var(--color-border)]">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in srgb, var(--color-violet) 25%, transparent), color-mix(in srgb, var(--color-cyan) 20%, transparent))",
          }}
        />
        <p className="relative font-mono text-xs text-[var(--color-ink)] px-3 py-1.5 rounded-md bg-[var(--color-void)]/40 backdrop-blur-sm">
          {project.category}
        </p>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="font-display font-semibold text-lg mb-2">{project.title}</p>
        <p className="text-sm text-[var(--color-ink-mute)] leading-relaxed flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono px-2 py-1 rounded-md bg-[var(--color-panel-2)] text-[var(--color-ink-soft)] border border-[var(--color-border-soft)]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-5 pt-5 border-t border-[var(--color-border-soft)]">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-ink-soft)] hover:text-[var(--color-cyan)] transition-colors"
          >
            <GithubIcon size={14} /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-ink-soft)] hover:text-[var(--color-violet)] transition-colors"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
          <button
            onClick={() => onCaseStudy(project)}
            className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-ink-soft)] hover:text-[var(--color-amber)] transition-colors ml-auto"
          >
            <FileSearch size={14} /> Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
