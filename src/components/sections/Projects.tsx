import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import { ProjectCard } from "../ui/ProjectCard";
import { ProjectModal } from "../ui/ProjectModal";
import { projects, type Project } from "../../data/personalData";

const categories = ["All", "Enterprise", "Dashboard", "Reporting", "Integration"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = filter === "All" || p.category === filter;
      const matchesQuery =
        query.trim() === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [filter, query]);

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionLabel
          comment="projects.sql"
          title="Selected Projects"
          subtitle="A sample of enterprise systems built end to end — schema, logic, interface, and reporting."
        />

        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium font-mono border transition-colors ${
                  filter === c
                    ? "text-white border-transparent bg-gradient-to-r from-[var(--color-violet)] to-[var(--color-cyan-dim)]"
                    : "border-[var(--color-border)] text-[var(--color-ink-mute)] hover:text-[var(--color-ink)] hover:border-[var(--color-violet)]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-ink-mute)]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or tech..."
              className="w-full pl-9 pr-3 py-2.5 rounded-lg glass text-sm placeholder:text-[var(--color-ink-mute)] focus:outline-none focus:border-[var(--color-violet)]"
            />
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={0.04 * (i % 6)}>
              <ProjectCard project={p} onCaseStudy={setActive} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-[var(--color-ink-mute)] mt-16 font-mono text-sm">
            -- 0 rows returned. Try a different filter or search term.
          </p>
        )}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
