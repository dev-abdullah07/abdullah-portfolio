import { useState } from "react";
import { Mail, MapPin, Download, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import { profile } from "../../data/personalData";

const contactLinks = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: GithubIcon, label: "GitHub", value: "m-abdullah-dev", href: profile.github },
  { icon: LinkedinIcon, label: "LinkedIn", value: "m-abdullah-dev", href: profile.linkedin },
  { icon: MapPin, label: "Location", value: profile.location, href: undefined },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend wired up — this is a static, GitHub Pages-hosted portfolio.
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionLabel
          comment="contact.sql"
          title="Let's Build Something"
          subtitle="Have a project in mind, or an Oracle APEX role to fill? I'd like to hear about it."
        />

        <div className="mt-14 grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <Reveal>
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href?.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className={`flex items-center gap-4 glass rounded-xl p-4 transition-colors ${
                    link.href ? "hover:border-[var(--color-violet)] cursor-pointer" : "cursor-default"
                  }`}
                >
                  <span className="w-11 h-11 rounded-lg bg-gradient-to-br from-[var(--color-violet)]/20 to-[var(--color-cyan)]/20 flex items-center justify-center text-[var(--color-cyan)] shrink-0">
                    <link.icon size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-[var(--color-ink-mute)]">{link.label}</p>
                    <p className="text-sm font-medium truncate">{link.value}</p>
                  </div>
                </a>
              ))}

              <a
                href={profile.resumeUrl}
                download
                className="flex items-center justify-center gap-2 rounded-xl p-4 text-sm font-semibold text-white bg-gradient-to-r from-[var(--color-violet)] to-[var(--color-cyan-dim)] hover:opacity-90 transition-opacity"
              >
                <Download size={16} /> Download Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-7">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <CheckCircle2 size={40} className="text-[var(--color-cyan)] mb-4" />
                  <p className="font-display text-xl font-semibold">Message received</p>
                  <p className="text-sm text-[var(--color-ink-mute)] mt-2">
                    Thanks, {form.name.split(" ")[0] || "there"} — I'll get back to you at {form.email || "your email"} soon.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-[var(--color-ink-mute)]">Name</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="mt-1.5 w-full px-4 py-3 rounded-lg bg-[var(--color-panel-2)] border border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-violet)]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-[var(--color-ink-mute)]">Email</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@company.com"
                        className="mt-1.5 w-full px-4 py-3 rounded-lg bg-[var(--color-panel-2)] border border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-violet)]"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="text-xs font-mono text-[var(--color-ink-mute)]">Message</label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      placeholder="Tell me a bit about the project or role..."
                      className="mt-1.5 w-full px-4 py-3 rounded-lg bg-[var(--color-panel-2)] border border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-violet)] resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-5 w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[var(--color-violet)] to-[var(--color-cyan-dim)] hover:opacity-90 transition-opacity"
                  >
                    <Send size={16} /> Send Message
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
