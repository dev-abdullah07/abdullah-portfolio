import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Search } from "lucide-react";
import { Section } from "./Section";
import { projects } from "@/data/portfolio";

const CATEGORIES = ["All", "Enterprise", "Dashboard", "Reporting", "API"];

export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [query, setQuery] = useState("");

  const list = useMemo(
    () =>
      projects.filter((p) => {
        const inCat = filter === "All" || p.category === filter;
        const q = query.trim().toLowerCase();
        const inQuery =
          !q ||
          p.title.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q));
        return inCat && inQuery;
      }),
    [filter, query],
  );

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<>Selected <span className="text-gradient">work</span>.</>}
      subtitle="Real enterprise systems — HR, ERP, hospital, sales, and reporting suites."
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                filter === c
                  ? "btn-aurora"
                  : "glass text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="relative flex items-center">
          <Search className="absolute left-3 h-4 w-4 text-white/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects..."
            className="w-full rounded-full glass py-2 pl-10 pr-4 text-sm outline-none placeholder:text-white/40 focus:ring-2 focus:ring-[oklch(0.72_0.19_295)]/50 sm:w-72"
          />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <motion.article
              layout
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
              className="group overflow-hidden rounded-2xl glass-strong transition hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_oklch(0.72_0.19_295_/_0.5)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full glass px-2 py-0.5 text-[10px] uppercase tracking-widest text-white/80">
                  {p.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold">{p.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-white/60">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-white/70 ring-1 ring-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4 text-xs text-white/60">
                  <a href="#" className="inline-flex items-center gap-1 hover:text-white">
                    <Github className="h-3.5 w-3.5" /> Code
                  </a>
                  <a href="#" className="inline-flex items-center gap-1 hover:text-white">
                    <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                  </a>
                  <a href="#" className="hover:text-white">
                    Case Study →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {list.length === 0 && (
        <p className="mt-8 text-center text-sm text-white/50">No projects match your search.</p>
      )}
    </Section>
  );
}