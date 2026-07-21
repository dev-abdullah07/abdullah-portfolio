import projectDashboard from "@/assets/project-dashboard.jpg";
import projectHr from "@/assets/project-hr.jpg";
import projectInventory from "@/assets/project-inventory.jpg";
import projectHospital from "@/assets/project-hospital.jpg";
import projectErp from "@/assets/project-erp.jpg";
import projectSales from "@/assets/project-sales.jpg";
import projectApi from "@/assets/project-api.jpg";

export const profile = {
  name: "M.Abdullah",
  shortName: "Abdullah",
  location: "Faisalabad - Pakistan",
  email: "abdullah26283638@gmail.com",
  github: "https://github.com/dev-abdullah07",
  linkedin: "https://linkedin.com/in/dev-abdullah07",
  resumeUrl: "/resume.pdf",
  availability: ["Full-Time", "Remote", "Freelance"] as const,
  titles: [
    "Oracle APEX Developer",
    "Oracle SQL Developer",
    "PL/SQL Developer",
    "Oracle Database Developer",
    "REST API Integration Specialist",
    "Jasper Reports Expert",
    "Apache ECharts Developer",
    "Web Developer",
    "Web Designer",
  ],
  intro:
    "I design and ship enterprise-grade Oracle APEX applications — from data models and PL/SQL packages to REST integrations, Jasper reports, and interactive ECharts dashboards. I care about clean architecture, performance, and interfaces people actually enjoy using.",
  aboutLong: [
    "I'm an Oracle APEX & Database Developer focused on building robust, scalable enterprise applications end-to-end. My work sits at the intersection of solid data modeling, expressive PL/SQL, and modern, responsive UI — the parts most teams struggle to unify.",
    "I've shipped HR, inventory, hospital, ERP, sales analytics, and CRM systems on Oracle APEX, integrated third-party services through Oracle ORDS and REST APIs, and produced polished operational reporting with Jasper Reports and Apache ECharts.",
    "Beyond code, I obsess over problem framing, database design, security, and user experience — because enterprise software should feel as considered as the best consumer products.",
  ],
} as const;

export const stats = [
  { label: "Projects Delivered", value: 40, suffix: "+" },
  { label: "Technologies", value: 25, suffix: "+" },
  { label: "Enterprise Apps", value: 10, suffix: "+" },
  { label: "Reports Built", value: 120, suffix: "+" },
  { label: "Dashboards", value: 30, suffix: "+" },
  { label: "Years Learning", value: 3, suffix: "+" },
];

export const skillCategories = [
  {
    title: "Oracle Technologies",
    items: [
      { name: "Oracle APEX", level: 95 },
      { name: "Oracle SQL", level: 95 },
      { name: "PL/SQL", level: 92 },
      { name: "Oracle Database", level: 90 },
      { name: "Oracle ORDS", level: 88 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "Reporting & Visualization",
    items: [
      { name: "Jasper Reports", level: 92 },
      { name: "Apache ECharts", level: 90 },
      { name: "Interactive Dashboards", level: 90 },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "JavaScript", level: 88 },
      { name: "Responsive Design", level: 90 },
      { name: "UI / UX", level: 85 },
    ],
  },
  {
    title: "Tools & Professional",
    items: [
      { name: "Git & GitHub", level: 90 },
      { name: "Database Design", level: 92 },
      { name: "Problem Solving", level: 95 },
      { name: "Microsoft Office", level: 90 },
    ],
  },
];

export const services = [
  { title: "Oracle APEX Development", desc: "Full-lifecycle enterprise APEX apps — architecture, build, and rollout." },
  { title: "Enterprise Web Applications", desc: "Modular, secure, multi-user systems built to scale with your org." },
  { title: "Oracle Database Design", desc: "Normalized schemas, indexing strategy, and performance-focused modeling." },
  { title: "SQL & PL/SQL Development", desc: "Complex queries, packages, triggers, and optimized stored procedures." },
  { title: "REST API Integration", desc: "Oracle ORDS endpoints and third-party API integrations with auth & retry." },
  { title: "Jasper Reports", desc: "Pixel-perfect operational and financial reports with sub-reports & charts." },
  { title: "Interactive Dashboards", desc: "Real-time KPI dashboards with drill-through and role-based filtering." },
  { title: "Apache ECharts", desc: "Rich, animated visualizations embedded natively inside APEX apps." },
  { title: "Responsive Web Development", desc: "Fast, accessible web front-ends across every device size." },
  { title: "Web Designing", desc: "Clean, modern UI systems with strong hierarchy and micro-interactions." },
  { title: "Performance Optimization", desc: "Query tuning, caching, and APEX rendering optimizations." },
];

export const projects = [
  {
    title: "Employee Management System",
    desc: "APEX-based HR platform: employees, payroll, leaves, attendance, and role-based dashboards.",
    tags: ["Oracle APEX", "PL/SQL", "REST APIs", "Jasper"],
    image: projectHr,
    category: "Enterprise",
  },
  {
    title: "Inventory Management System",
    desc: "Warehouse, stock levels, purchase orders, and supplier workflows with real-time alerts.",
    tags: ["APEX", "PL/SQL", "ECharts"],
    image: projectInventory,
    category: "Enterprise",
  },
  {
    title: "Hospital Management System",
    desc: "Patient records, appointments, billing, and departmental reporting for mid-size hospitals.",
    tags: ["APEX", "Oracle DB", "Jasper"],
    image: projectHospital,
    category: "Enterprise",
  },
  {
    title: "ERP System",
    desc: "Modular ERP: finance, procurement, HR, and sales with unified auth and audit trail.",
    tags: ["APEX", "PL/SQL", "ORDS"],
    image: projectErp,
    category: "Enterprise",
  },
  {
    title: "Sales Dashboard",
    desc: "Executive analytics dashboard: revenue, funnels, cohorts, and forecast comparisons.",
    tags: ["ECharts", "SQL", "APEX"],
    image: projectSales,
    category: "Dashboard",
  },
  {
    title: "Attendance Management",
    desc: "Biometric-integrated attendance with shift rules, overtime, and monthly Jasper reports.",
    tags: ["APEX", "PL/SQL", "Jasper"],
    image: projectDashboard,
    category: "Enterprise",
  },
  {
    title: "REST API Integration Portal",
    desc: "Central hub for consuming and exposing REST endpoints via Oracle ORDS with logging.",
    tags: ["ORDS", "REST", "PL/SQL"],
    image: projectApi,
    category: "API",
  },
  {
    title: "Customer Relationship Management",
    desc: "Leads, opportunities, activities, and pipeline analytics for B2B sales teams.",
    tags: ["APEX", "SQL", "ECharts"],
    image: projectSales,
    category: "Enterprise",
  },
  {
    title: "Oracle Analytics Dashboard",
    desc: "Cross-domain KPI dashboard with drill-through, role filters, and export-to-PDF.",
    tags: ["APEX", "ECharts", "SQL"],
    image: projectDashboard,
    category: "Dashboard",
  },
  {
    title: "Jasper Reports Suite",
    desc: "Reusable reporting library — invoices, statements, payroll, and compliance packs.",
    tags: ["Jasper", "PL/SQL", "APEX"],
    image: projectApi,
    category: "Reporting",
  },
];

export const experience = [
  {
    role: "Senior Oracle APEX Developer",
    org: "Enterprise Consulting",
    period: "2025 — Present",
    points: [
      "Architect and deliver multi-module APEX applications across HR, finance, and operations.",
      "Design REST API layers via Oracle ORDS with authentication, pagination, and rate control.",
      "Mentor junior developers on PL/SQL patterns and APEX component design.",
    ],
  },
  {
    role: "Oracle Database & PL/SQL Developer",
    org: "Freelance / Contract",
    period: "2023 — 2024",
    points: [
      "Built high-performance PL/SQL packages, procedures, and triggers for OLTP workloads.",
      "Delivered Jasper reporting suites with parameterized filters and sub-reports.",
      "Tuned queries and indexes for order-of-magnitude performance improvements.",
    ],
  },
  {
    role: "Web & Reporting Developer",
    org: "Independent Projects",
    period: "2024 — Present",
    points: [
      "Developed responsive front-ends with HTML5, CSS3, and JavaScript.",
      "Integrated Apache ECharts into APEX pages for real-time dashboards.",
      "Shipped internal tools that replaced manual Excel reporting workflows.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Science",
    org: "University of Central Punjab",
    period: "2025 — Present",
    detail: "Core focus on databases, software engineering, and web technologies.",
  },
  {
    degree: "Intermediate — Computer-Science",
    org: "Punjab Group of Colleges",
    period: "2023 — 2025",
    detail: "Mathematics, Physics, and Computer foundations.",
  },
];

export const certifications = [
  { title: "Oracle Database SQL Fundamentals", issuer: "Oracle" },
  { title: "Oracle APEX Application Development", issuer: "Oracle" },
  { title: "PL/SQL Programming Essentials", issuer: "Oracle" },
  { title: "Microsoft Office Specialist", issuer: "Microsoft" },
  { title: "Responsive Web Design", issuer: "freeCodeCamp" },
  { title: "REST API Design & Integration", issuer: "Online Academy" },
];

export const marqueeTech = [
  "Oracle APEX",
  "PL/SQL",
  "Oracle DB",
  "ORDS",
  "REST APIs",
  "Jasper Reports",
  "Apache ECharts",
  "HTML5",
  "CSS3",
  "JavaScript",
  "Git",
  "GitHub",
  "UI / UX",
  "SQL",
];