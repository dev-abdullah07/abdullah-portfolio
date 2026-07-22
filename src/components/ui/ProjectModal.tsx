import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import type { Project } from "../../data/personalData";

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative glass rounded-2xl max-w-lg w-full p-7 max-h-[85vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-lg flex items-center justify-center border border-[var(--color-border)] hover:border-[var(--color-violet)] transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>

            <p className="font-mono text-xs sql-comment text-[var(--color-ink-mute)]">case_study.sql</p>
            <h3 className="font-display text-2xl font-semibold mt-2 pr-10">{project.title}</h3>

            <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed mt-4">{project.longDescription}</p>

            <div className="flex flex-wrap gap-1.5 mt-5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono px-2 py-1 rounded-md bg-[var(--color-panel-2)] text-[var(--color-ink-soft)] border border-[var(--color-border-soft)]"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-7">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold glass hover:border-[var(--color-cyan)] transition-colors"
              >
                <GithubIcon size={16} /> View Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[var(--color-violet)] to-[var(--color-cyan-dim)] hover:opacity-90 transition-opacity"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
