import { motion } from "framer-motion";
import {
  Boxes,
  BarChart3,
  Code2,
  Database,
  FileBarChart,
  Gauge,
  LayoutDashboard,
  LineChart,
  Palette,
  Server,
  Workflow,
} from "lucide-react";
import { Section } from "./Section";
import { services } from "@/data/portfolio";

const icons = [
  Boxes,
  Workflow,
  Database,
  Code2,
  Server,
  FileBarChart,
  LayoutDashboard,
  LineChart,
  Palette,
  BarChart3,
  Gauge,
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title={<>What I can <span className="text-gradient">build for you</span>.</>}
      subtitle="From data model to production dashboard — end-to-end delivery, one accountable partner."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition group-hover:opacity-60"
                style={{ background: "radial-gradient(circle, oklch(0.72 0.19 295 / 0.6), transparent 70%)" }}
              />
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.65_0.25_300)]/25 to-[oklch(0.78_0.16_210)]/25 ring-1 ring-white/10">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-white/60">{s.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}