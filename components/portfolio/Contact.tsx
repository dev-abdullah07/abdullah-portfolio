import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { z } from "zod";
import { Section } from "./Section";
import { profile } from "@/data/portfolio";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(10, "Please add a bit more detail").max(1000),
});

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Invalid input");
      setStatus("error");
      return;
    }
    setStatus("sending");
    const subject = encodeURIComponent(`Portfolio inquiry from ${parsed.data.name}`);
    const body = encodeURIComponent(`${parsed.data.message}\n\n— ${parsed.data.name} (${parsed.data.email})`);
    setTimeout(() => {
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
    }, 400);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build something <span className="text-gradient">unforgettable</span>.</>}
      subtitle="Available for full-time roles, remote engagements, and select freelance work."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-strong rounded-3xl p-8"
        >
          <h3 className="text-lg font-semibold">Get in touch</h3>
          <p className="mt-2 text-sm text-white/60">
            The fastest way to reach me is email — I usually reply within a day.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-xl glass px-3 py-2.5 hover:bg-white/10">
                <Mail className="h-4 w-4" /> {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl glass px-3 py-2.5 hover:bg-white/10">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl glass px-3 py-2.5 hover:bg-white/10">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </li>
            <li>
              <div className="flex items-center gap-3 rounded-xl glass px-3 py-2.5">
                <MapPin className="h-4 w-4" /> {profile.location}
              </div>
            </li>
            <li>
              <a href={profile.resumeUrl} download className="flex items-center gap-3 rounded-xl btn-aurora px-3 py-2.5">
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="glass-strong rounded-3xl p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm">
              <span className="mb-1.5 block text-white/70">Your name</span>
              <input
                name="name"
                required
                maxLength={100}
                className="w-full rounded-xl glass px-4 py-3 outline-none placeholder:text-white/40 focus:ring-2 focus:ring-[oklch(0.72_0.19_295)]/60"
                placeholder="Jane Doe"
              />
            </label>
            <label className="text-sm">
              <span className="mb-1.5 block text-white/70">Email</span>
              <input
                name="email"
                type="email"
                required
                maxLength={255}
                className="w-full rounded-xl glass px-4 py-3 outline-none placeholder:text-white/40 focus:ring-2 focus:ring-[oklch(0.72_0.19_295)]/60"
                placeholder="jane@company.com"
              />
            </label>
          </div>
          <label className="mt-4 block text-sm">
            <span className="mb-1.5 block text-white/70">Message</span>
            <textarea
              name="message"
              required
              maxLength={1000}
              rows={6}
              className="w-full resize-none rounded-xl glass px-4 py-3 outline-none placeholder:text-white/40 focus:ring-2 focus:ring-[oklch(0.72_0.19_295)]/60"
              placeholder="Tell me about your project, timeline, and goals..."
            />
          </label>
          {error && <p className="mt-3 text-sm text-red-300">{error}</p>}
          {status === "sent" && (
            <p className="mt-3 text-sm text-emerald-300">Opening your email client…</p>
          )}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-xs text-white/50">I typically reply within 24 hours.</p>
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-aurora inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium disabled:opacity-70"
            >
              <Send className="h-4 w-4" />
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}