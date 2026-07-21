import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import avatar from "@/assets/avatar.jpg";
import { profile } from "@/data/portfolio";
import { TypingTitles } from "./TypingTitles";

export function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-white/80">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open for Full-Time · Remote · Freelance
            </div>

            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
              Building enterprise{" "}
              <span className="text-gradient">Oracle APEX</span> systems that feel effortless.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-white/70">
              Hi, I'm <span className="font-medium text-white">{profile.name}</span> — an Oracle
              APEX & Database Developer specializing in{" "}
              <TypingTitles words={profile.titles} />
            </p>

            <p className="mt-4 max-w-xl text-white/60">{profile.intro}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="btn-aurora inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full glass-strong px-5 py-3 text-sm font-medium hover:bg-white/10"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm text-white/80 hover:text-white"
              >
                <Mail className="h-4 w-4" /> Contact Me
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 text-white/60">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full glass hover:text-white hover:bg-white/10 transition"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full glass hover:text-white hover:bg-white/10 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <span className="mx-2 h-px w-8 bg-white/20" />
              <span className="inline-flex items-center gap-1.5 text-sm">
                <MapPin className="h-3.5 w-3.5" /> {profile.location}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-8 rounded-[3rem] blur-3xl opacity-60"
              style={{ background: "conic-gradient(from 90deg, oklch(0.65 0.25 300 / 0.6), oklch(0.78 0.16 210 / 0.6), oklch(0.72 0.22 340 / 0.6), oklch(0.65 0.25 300 / 0.6))" }}
            />
            <div className="relative overflow-hidden rounded-[2rem] glass-strong glow-ring animate-float-slow">
              <img
                src={avatar}
                alt={`${profile.name} — Oracle APEX Developer`}
                width={768}
                height={768}
                className="aspect-square w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl glass px-3 py-2 text-xs">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-[oklch(0.78_0.16_210)]" />
                  <span className="font-medium">Oracle APEX · PL/SQL · ORDS</span>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] text-emerald-300">
                  Available
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}