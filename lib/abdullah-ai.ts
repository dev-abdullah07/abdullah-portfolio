import {
  certifications,
  education,
  experience,
  profile,
  projects,
  services,
  skillCategories,
} from "@/data/portfolio";

type Intent = {
  keywords: string[];
  answer: () => string;
};

const skillsFlat = skillCategories.flatMap((c) => c.items.map((i) => i.name));

const INTENTS: Intent[] = [
  {
    keywords: ["hello", "hi", "hey", "salam", "assalam"],
    answer: () =>
      `Hey! I'm Abdullah AI 👋 Ask me about ${profile.name}'s skills, projects, experience, or how to get in touch.`,
  },
  {
    keywords: ["name", "who are you", "who is"],
    answer: () =>
      `This portfolio belongs to ${profile.name} — an Oracle APEX & Database Developer based in ${profile.location}.`,
  },
  {
    keywords: ["apex", "oracle apex", "experience with apex"],
    answer: () =>
      "Abdullah works with Oracle APEX daily — building enterprise apps like HR, ERP, hospital, inventory, and CRM systems. He handles data modeling, PL/SQL packages, REST via ORDS, and interactive dashboards with Apache ECharts.",
  },
  {
    keywords: ["plsql", "pl/sql", "pl sql"],
    answer: () =>
      "Strong PL/SQL developer — packages, procedures, functions, triggers, bulk operations, and query tuning. He treats PL/SQL as the backbone of every APEX app he ships.",
  },
  {
    keywords: ["sql", "query", "queries"],
    answer: () =>
      "Advanced Oracle SQL: analytical functions, hierarchical queries, joins, indexing strategy, and performance tuning for OLTP and reporting workloads.",
  },
  {
    keywords: ["database", "db", "oracle db", "schema", "modeling"],
    answer: () =>
      "Oracle Database design is a core strength — normalized schemas, integrity constraints, indexing, partitioning, and secure role-based access.",
  },
  {
    keywords: ["rest", "api", "ords", "integration"],
    answer: () =>
      "REST API work via Oracle ORDS: designing endpoints with auth, pagination, and rate limits, plus consuming external APIs from PL/SQL.",
  },
  {
    keywords: ["jasper", "report", "reports", "reporting"],
    answer: () =>
      "Jasper Reports specialist — pixel-perfect invoices, payroll, financial statements, and compliance reports with parameters, sub-reports, and charts.",
  },
  {
    keywords: ["echarts", "chart", "dashboard", "visualization", "dashboards"],
    answer: () =>
      "Interactive dashboards built with Apache ECharts inside APEX — real-time KPIs, drill-through, role filters, and export options.",
  },
  {
    keywords: ["frontend", "html", "css", "javascript", "responsive", "ui", "ux"],
    answer: () =>
      "Frontend: HTML5, CSS3, JavaScript, responsive design, and thoughtful UI/UX — because enterprise apps deserve modern interfaces too.",
  },
  {
    keywords: ["skill", "skills", "tech", "technolog", "stack", "know"],
    answer: () =>
      `Skills across ${skillCategories.length} areas: ${skillsFlat.slice(0, 12).join(", ")} and more. Ask about any of them.`,
  },
  {
    keywords: ["project", "projects", "portfolio", "built", "build"],
    answer: () =>
      `Selected projects: ${projects
        .map((p) => p.title)
        .slice(0, 6)
        .join(", ")} — plus more in the Projects section. Want details on any specific one?`,
  },
  {
    keywords: ["erp"],
    answer: () =>
      "Yes — Abdullah has built modular ERP systems on Oracle APEX covering finance, procurement, HR, and sales with unified authentication and audit trails.",
  },
  {
    keywords: ["hr", "employee", "hrm"],
    answer: () =>
      "The Employee Management System covers HR, payroll, leaves, attendance, and role-based dashboards — Oracle APEX + PL/SQL + Jasper.",
  },
  {
    keywords: ["hospital", "hms", "clinic"],
    answer: () =>
      "Hospital Management System: patient records, appointments, billing, and departmental reports — built for mid-size hospitals.",
  },
  {
    keywords: ["inventory", "stock", "warehouse"],
    answer: () =>
      "Inventory Management System with warehouse, stock levels, purchase orders, supplier workflows, and real-time alerts.",
  },
  {
    keywords: ["crm", "customer"],
    answer: () =>
      "CRM for B2B sales: leads, opportunities, activities, and pipeline analytics — all on Oracle APEX.",
  },
  {
    keywords: ["experience", "work history", "career"],
    answer: () =>
      experience
        .map((e) => `• ${e.role} — ${e.org} (${e.period})`)
        .join("\n"),
  },
  {
    keywords: ["education", "study", "degree", "university"],
    answer: () =>
      education.map((e) => `• ${e.degree} — ${e.org} (${e.period})`).join("\n"),
  },
  {
    keywords: ["certification", "certificate", "certified"],
    answer: () =>
      "Certifications include: " + certifications.map((c) => c.title).join(", ") + ".",
  },
  {
    keywords: ["service", "services", "offer", "help"],
    answer: () =>
      "Services: " + services.map((s) => s.title).join(", ") + ".",
  },
  {
    keywords: ["available", "availability", "hire", "hiring", "freelance", "remote", "full time", "full-time", "job"],
    answer: () =>
      `Yes — currently open for ${profile.availability.join(", ")}. Email ${profile.email} or use the Contact form.`,
  },
  {
    keywords: ["contact", "email", "reach", "get in touch"],
    answer: () =>
      `The best way to reach Abdullah: email ${profile.email}. Also on GitHub (${profile.github}) and LinkedIn (${profile.linkedin}).`,
  },
  {
    keywords: ["location", "where", "based", "country", "pakistan"],
    answer: () => `Based in ${profile.location}, working remotely with clients worldwide.`,
  },
  {
    keywords: ["resume", "cv"],
    answer: () =>
      "You can download the resume from the Contact section — the Download Resume button on this page.",
  },
  {
    keywords: ["github"],
    answer: () => `GitHub: ${profile.github}`,
  },
  {
    keywords: ["linkedin"],
    answer: () => `LinkedIn: ${profile.linkedin}`,
  },
  {
    keywords: ["thanks", "thank you", "thx"],
    answer: () => "Anytime! Anything else you'd like to know about Abdullah?",
  },
];

const OFF_TOPIC_HINTS = [
  "weather",
  "news",
  "politic",
  "movie",
  "song",
  "recipe",
  "joke",
  "stock market",
  "crypto",
  "president",
  "football",
  "cricket",
];

export function answerAbdullah(raw: string): string {
  const q = raw.toLowerCase();

  let bestScore = 0;
  let best: Intent | null = null;
  for (const intent of INTENTS) {
    let score = 0;
    for (const kw of intent.keywords) {
      if (q.includes(kw)) score += kw.length;
    }
    if (score > bestScore) {
      bestScore = score;
      best = intent;
    }
  }

  if (best && bestScore > 0) return best.answer();

  if (OFF_TOPIC_HINTS.some((k) => q.includes(k))) {
    return "I only answer questions about M. Abdullah — his skills, projects, experience, and how to work with him. Try asking about Oracle APEX, PL/SQL, projects, or availability.";
  }

  return "I'm focused on questions about M. Abdullah. Try asking about his skills, Oracle APEX projects, experience, certifications, or how to contact him.";
}