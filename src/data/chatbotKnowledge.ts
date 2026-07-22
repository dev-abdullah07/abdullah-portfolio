import {
  profile,
  skillCategories,
  projects,
  experience,
  education,
  certifications,
} from "./personalData";

// A fully offline, keyword + intent driven knowledge base.
// No external API calls — everything below is predefined and matched locally.

type Intent = {
  id: string;
  keywords: string[];
  respond: () => string;
};

const allSkillNames = skillCategories.flatMap((c) => c.skills.map((s) => s.name));

const intents: Intent[] = [
  {
    id: "greeting",
    keywords: ["hello", "hi", "hey", "salam", "assalam", "greetings"],
    respond: () =>
      `Hey! I'm Abdullah AI 👋 — ask me anything about ${profile.name}'s skills, projects, experience, or how to get in touch.`,
  },
  {
    id: "name",
    keywords: ["who are you", "your name", "who is abdullah", "about you"],
    respond: () =>
      `I'm Abdullah AI, a local assistant trained on ${profile.name}'s portfolio. ${profile.name} is an ${profile.roles[0]} based in ${profile.location}.`,
  },
  {
    id: "summary",
    keywords: ["summary", "tell me about", "background", "who is he", "introduce"],
    respond: () => profile.summary,
  },
  {
    id: "skills",
    keywords: ["skill", "skills", "know", "technologies", "tech stack", "stack", "expertise"],
    respond: () => {
      const grouped = skillCategories
        .map((c) => `${c.category}: ${c.skills.map((s) => s.name).join(", ")}`)
        .join(" | ");
      return `Here's the skill set: ${grouped}.`;
    },
  },
  {
    id: "apex",
    keywords: ["apex", "oracle apex experience", "apex experience"],
    respond: () =>
      `${profile.name} builds enterprise applications end to end in Oracle APEX — interactive grids, dynamic actions, validations, and reusable plugins — backed by well-structured PL/SQL. Several full examples are in the Projects section, like the Employee Management System and ERP System.`,
  },
  {
    id: "database",
    keywords: ["database", "sql", "pl/sql", "plsql", "schema", "data model"],
    respond: () =>
      `Core database work covers Oracle SQL, PL/SQL, Oracle Database design, and Oracle ORDS for REST-enabling the database layer. The focus is normalized schemas, indexing, and PL/SQL packages that stay correct under concurrent use.`,
  },
  {
    id: "reporting",
    keywords: ["report", "reports", "jasper", "reporting tools"],
    respond: () =>
      `Reporting is handled mainly with Jasper Reports for parameterized, printable documents — invoices, payslips, statements — and Apache ECharts for interactive, on-screen dashboards.`,
  },
  {
    id: "frontend",
    keywords: ["frontend", "front-end", "html", "css", "javascript", "web design", "ui/ux", "ui", "ux"],
    respond: () =>
      `On the frontend side: HTML5, CSS3, JavaScript, responsive web design, and UI/UX — mostly applied to customizing Oracle APEX interfaces beyond the default theme.`,
  },
  {
    id: "projects",
    keywords: ["project", "projects", "built", "portfolio", "work samples", "case study"],
    respond: () => {
      const list = projects.slice(0, 6).map((p) => p.title).join(", ");
      return `A few highlights: ${list}, and more in the Projects section — each with a live demo link and source code.`;
    },
  },
  {
    id: "erp",
    keywords: ["erp", "can you build erp", "build erp"],
    respond: () =>
      `Yes — there's a full modular ERP System project covering procurement, sales, and finance on a shared master-data layer. Check the Projects section for details.`,
  },
  {
    id: "experience",
    keywords: ["experience", "career", "work history", "years of experience"],
    respond: () => {
      const latest = experience[0];
      return `Currently working as ${latest.title} (${latest.period}) at ${latest.org}. Full career timeline is in the Experience section.`;
    },
  },
  {
    id: "education",
    keywords: ["education", "degree", "university", "study", "studied"],
    respond: () => {
      const deg = education[0];
      return `${deg.title}, ${deg.org} (${deg.period}). Full timeline is in the Education section.`;
    },
  },
  {
    id: "certifications",
    keywords: ["certification", "certificate", "certified", "credentials"],
    respond: () =>
      `Certifications include: ${certifications.map((c) => c.title).join(", ")}.`,
  },
  {
    id: "availability",
    keywords: ["available", "availability", "hire", "hiring", "open to work", "freelance", "full-time", "full time"],
    respond: () =>
      `Yes — ${profile.name} is ${profile.availability.status.toLowerCase()} for ${profile.availability.modes.join(", ")} roles.`,
  },
  {
    id: "contact",
    keywords: ["contact", "email", "reach", "get in touch", "message"],
    respond: () =>
      `You can reach out at ${profile.email}, or use the contact form in the Contact section. GitHub and LinkedIn links are in the footer too.`,
  },
  {
    id: "location",
    keywords: ["location", "where", "based", "live", "country"],
    respond: () => `${profile.name} is based in ${profile.location}, and works remotely with clients worldwide.`,
  },
  {
    id: "resume",
    keywords: ["resume", "cv", "download resume"],
    respond: () => `You can download the resume directly from the Hero or Contact section — look for the "Download Resume" button.`,
  },
  {
    id: "github",
    keywords: ["github", "git hub", "repo", "repository", "source code"],
    respond: () => `GitHub: ${profile.github} — most projects listed here have their source linked from there.`,
  },
  {
    id: "linkedin",
    keywords: ["linkedin"],
    respond: () => `LinkedIn: ${profile.linkedin}`,
  },
  {
    id: "thanks",
    keywords: ["thanks", "thank you", "appreciate"],
    respond: () => `You're welcome! Anything else you'd like to know?`,
  },
];

const fallback =
  "I can only answer questions about M. Abdullah's skills, projects, experience, education, or how to get in touch — could you rephrase around one of those?";

function normalize(text: string) {
  return text.toLowerCase().trim();
}

export function matchIntent(rawInput: string): string {
  const input = normalize(rawInput);
  if (!input) return fallback;

  // direct keyword scoring
  let best: { intent: Intent; score: number } | null = null;
  for (const intent of intents) {
    let score = 0;
    for (const kw of intent.keywords) {
      if (input.includes(kw)) score += kw.split(" ").length; // longer phrase matches score higher
    }
    if (score > 0 && (!best || score > best.score)) {
      best = { intent, score };
    }
  }

  // check for a raw skill name mention too, e.g. "do you know jasper reports"
  if (!best) {
    const mentioned = allSkillNames.find((s) => input.includes(s.toLowerCase()));
    if (mentioned) {
      return `Yes — ${mentioned} is one of the core skills. See the Skills section for the full breakdown and proficiency levels.`;
    }
  }

  return best ? best.intent.respond() : fallback;
}

export const suggestedQuestions = [
  "What technologies do you know?",
  "Tell me about your Oracle APEX experience.",
  "What projects have you built?",
  "Can you build ERP systems?",
  "How can I contact you?",
  "Are you available for work?",
];
