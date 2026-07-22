// Central source of truth for portfolio content.
// Also consumed by the offline "Abdullah AI" assistant knowledge base.

export const profile = {
  name: "M. Abdullah",
  initials: "MA",
  roles: [
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
  location: "Pakistan",
  availability: {
    status: "Open to work",
    modes: ["Full-Time", "Remote", "Freelance"],
  },
  email: "abdullah26283638@gmail.com",
  github: "https://github.com/dev-abdullah07",
  linkedin: "https://linkedin.com/in/dev-abdullah07",
  resumeUrl: "/resume/M-Abdullah-Resume.pdf",
  tagline:
    "I design and build enterprise-grade Oracle APEX applications — from schema to screen — turning complex business logic into fast, reliable, good-looking software.",
  summary:
    "I'm an Oracle APEX Developer focused on enterprise application development across the full stack of the Oracle ecosystem: SQL and PL/SQL at the core, ORDS-backed REST APIs at the boundary, Jasper Reports and Apache ECharts for anything that needs to be printed or visualized, and hand-tuned HTML/CSS/JS wherever APEX's defaults aren't enough. I care about clean data models, predictable performance under real load, and interfaces that stay out of the way of the people using them. Most of what I build ends up running quietly in the background of a hospital, warehouse, or finance team's day — which is exactly how I like it.",
};

export type SkillCategory = {
  category: string;
  icon: string; // lucide icon name
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Oracle Technologies",
    icon: "Database",
    skills: [
      { name: "Oracle APEX", level: 96 },
      { name: "Oracle SQL", level: 94 },
      { name: "PL/SQL", level: 92 },
      { name: "Oracle Database", level: 90 },
      { name: "Oracle ORDS", level: 85 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    category: "Reporting & Visualization",
    icon: "BarChart3",
    skills: [
      { name: "Jasper Reports", level: 88 },
      { name: "Apache ECharts", level: 85 },
    ],
  },
  {
    category: "Frontend",
    icon: "LayoutTemplate",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 88 },
      { name: "JavaScript", level: 84 },
      { name: "Responsive Web Design", level: 89 },
      { name: "UI / UX", level: 82 },
    ],
  },
  {
    category: "Version Control",
    icon: "GitBranch",
    skills: [
      { name: "Git", level: 86 },
      { name: "GitHub", level: 86 },
    ],
  },
  {
    category: "Professional",
    icon: "BriefcaseBusiness",
    skills: [
      { name: "Microsoft Office Specialist", level: 90 },
      { name: "Problem Solving", level: 93 },
      { name: "Database Design", level: 91 },
    ],
  },
];

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    title: "Oracle APEX Development",
    description:
      "End-to-end APEX applications — page design, dynamic actions, validations, and interactive grids built for real business workflows.",
    icon: "AppWindow",
  },
  {
    title: "Enterprise Web Applications",
    description:
      "Multi-module systems for HR, inventory, and operations, architected to stay maintainable as requirements grow.",
    icon: "Building2",
  },
  {
    title: "Oracle Database Design",
    description:
      "Normalized schemas, indexing strategy, and constraints that keep data trustworthy under concurrent use.",
    icon: "DatabaseZap",
  },
  {
    title: "SQL & PL/SQL Development",
    description:
      "Query tuning, packages, triggers, and procedures written for correctness first, then optimized for speed.",
    icon: "Terminal",
  },
  {
    title: "REST API Integration",
    description:
      "ORDS-based and third-party API integration connecting APEX applications to the systems around them.",
    icon: "Plug",
  },
  {
    title: "Jasper Reports",
    description:
      "Pixel-accurate printable reports and statements, parameterized and scheduled for recurring business needs.",
    icon: "FileText",
  },
  {
    title: "Interactive Dashboards",
    description:
      "Apache ECharts dashboards that surface the three numbers a manager actually needs before the other thirty.",
    icon: "LayoutDashboard",
  },
  {
    title: "Responsive Web Development",
    description:
      "Interfaces that hold their layout and legibility from a wide monitor down to a warehouse-floor tablet.",
    icon: "MonitorSmartphone",
  },
  {
    title: "Performance Optimization",
    description:
      "Profiling slow pages and slower queries, then fixing the actual bottleneck instead of the obvious guess.",
    icon: "Gauge",
  },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: "Enterprise" | "Dashboard" | "Reporting" | "Integration";
  github: string;
  demo: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "employee-management-system",
    title: "Employee Management System",
    description:
      "A full HR platform covering onboarding, attendance, leave, and payroll approvals for mid-sized organizations.",
    longDescription:
      "Built entirely in Oracle APEX with a normalized PL/SQL backend, this system replaced a spreadsheet-based HR process for a 300+ employee organization. Role-based access control drives what each interactive grid and approval flow exposes, and a PL/SQL package handles payroll calculations with a full audit trail. Jasper Reports generates monthly payslips and compliance reports on a schedule.",
    tech: ["Oracle APEX", "PL/SQL", "Oracle ORDS", "Jasper Reports"],
    category: "Enterprise",
    github: "https://github.com/m-abdullah-dev/employee-management-system",
    demo: "https://apex.example.com/ords/f?p=EMS",
    image: "ems",
  },
  {
    slug: "inventory-management-system",
    title: "Inventory Management System",
    description:
      "Real-time stock tracking across multiple warehouses with automated reorder alerts and barcode-driven intake.",
    longDescription:
      "Designed a multi-warehouse schema with triggers that maintain live stock levels as goods move between locations. Interactive grids let warehouse staff process intake and dispatch quickly, while a PL/SQL scheduler job checks reorder thresholds nightly and emails procurement. Apache ECharts visualizes stock movement trends by SKU and location.",
    tech: ["Oracle APEX", "Oracle SQL", "PL/SQL", "Apache ECharts"],
    category: "Enterprise",
    github: "https://github.com/dev-abdullah07/inventory-management-system",
    demo: "https://apex.example.com/ords/f?p=IMS",
    image: "ims",
  },
  {
    slug: "hospital-management-system",
    title: "Hospital Management System",
    description:
      "Patient records, appointment scheduling, and billing built around strict data-integrity and access requirements.",
    longDescription:
      "A department-by-department rollout for a private clinic network: patient intake, doctor scheduling, prescription records, and billing, all sharing one Oracle Database with row-level security separating clinics. PL/SQL validation packages enforce clinical business rules that the UI alone couldn't guarantee. Jasper Reports produces printable prescriptions and itemized bills.",
    tech: ["Oracle APEX", "PL/SQL", "Oracle Database", "Jasper Reports"],
    category: "Enterprise",
    github: "https://github.com/dev-abdullah07/hospital-management-system",
    demo: "https://apex.example.com/ords/f?p=HMS",
    image: "hms",
  },
  {
    slug: "erp-system",
    title: "ERP System",
    description:
      "A modular ERP covering procurement, sales, and finance with a shared master-data layer.",
    longDescription:
      "Architected around a shared master-data schema (customers, vendors, items, chart of accounts) so procurement, sales, and finance modules stay consistent instead of drifting into their own copies of the truth. Built with reusable APEX plugins for approval workflows, and ORDS REST endpoints that let a separate mobile app read live order status.",
    tech: ["Oracle APEX", "PL/SQL", "Oracle ORDS", "REST APIs"],
    category: "Enterprise",
    github: "https://github.com/dev-abdullah07/erp-system",
    demo: "https://apex.example.com/ords/f?p=ERP",
    image: "erp",
  },
  {
    slug: "sales-dashboard",
    title: "Sales Dashboard",
    description:
      "Executive-facing revenue dashboard with drill-down from region to rep to individual order.",
    longDescription:
      "An Apache ECharts dashboard layered on top of materialized views refreshed hourly, so executives get a fast dashboard without hammering transactional tables. Every chart supports drill-down — click a region, see reps; click a rep, see their orders — built with APEX dynamic actions triggering chart re-renders.",
    tech: ["Apache ECharts", "Oracle SQL", "Oracle APEX"],
    category: "Dashboard",
    github: "https://github.com/m-abdullah-dev/sales-dashboard",
    demo: "https://apex.example.com/ords/f?p=SALESDASH",
    image: "sales",
  },
  {
    slug: "attendance-management",
    title: "Attendance Management",
    description:
      "Biometric-integrated attendance tracking with automated late/absence flagging and monthly summaries.",
    longDescription:
      "Ingests daily punch data from a biometric device via a scheduled PL/SQL job, reconciles it against shift schedules, and flags anomalies for HR review before payroll runs. Interactive calendar views were built as a custom APEX region using a plugin-style JavaScript component.",
    tech: ["Oracle APEX", "PL/SQL", "JavaScript"],
    category: "Enterprise",
    github: "https://github.com/dev-abdullah07/attendance-management",
    demo: "https://apex.example.com/ords/f?p=ATTEND",
    image: "attendance",
  },
  {
    slug: "rest-api-integration-portal",
    title: "REST API Integration Portal",
    description:
      "A control panel for managing and monitoring outbound and inbound REST integrations from Oracle APEX.",
    longDescription:
      "A single place to register external API credentials, monitor call volume and failures, and replay failed webhook deliveries. Built on Oracle APEX Web Source Modules and ORDS, with a PL/SQL logging package that captures every request/response pair for troubleshooting.",
    tech: ["Oracle ORDS", "REST APIs", "PL/SQL", "Oracle APEX"],
    category: "Integration",
    github: "https://github.com/dev-abdullah07/rest-api-integration-portal",
    demo: "https://apex.example.com/ords/f?p=APIPORTAL",
    image: "api",
  },
  {
    slug: "crm",
    title: "Customer Relationship Management",
    description:
      "Lead tracking, pipeline stages, and follow-up automation for a small B2B sales team.",
    longDescription:
      "A lightweight CRM built to replace a shared spreadsheet: pipeline stages as an APEX interactive grid, automated follow-up reminders via a scheduled job, and a simple activity timeline per contact backed by a PL/SQL audit trigger.",
    tech: ["Oracle APEX", "PL/SQL", "Oracle SQL"],
    category: "Enterprise",
    github: "https://github.com/dev-abdullah07/crm",
    demo: "https://apex.example.com/ords/f?p=CRM",
    image: "crm",
  },
  {
    slug: "oracle-analytics-dashboard",
    title: "Oracle Analytics Dashboard",
    description:
      "A cross-department analytics view combining sales, inventory, and HR metrics on one screen.",
    longDescription:
      "Pulls from three separate schemas through database links and a unifying view layer, then renders combined KPIs with Apache ECharts. Query performance was the whole project — most of the effort went into indexing and materialized view strategy, not the charts themselves.",
    tech: ["Apache ECharts", "Oracle SQL", "PL/SQL"],
    category: "Dashboard",
    github: "https://github.com/dev-abdullah07/oracle-analytics-dashboard",
    demo: "https://apex.example.com/ords/f?p=ANALYTICS",
    image: "analytics",
  },
  {
    slug: "jasper-reports-suite",
    title: "Jasper Reports Suite",
    description:
      "A reusable library of parameterized financial and operational reports for recurring business use.",
    longDescription:
      "A shared set of Jasper Reports templates — invoices, statements, stock reports, payroll summaries — designed with a common style sheet and parameter conventions so new reports can be assembled quickly instead of built from scratch each time.",
    tech: ["Jasper Reports", "Oracle SQL", "PL/SQL"],
    category: "Reporting",
    github: "https://github.com/dev-abdullah07/jasper-reports-suite",
    demo: "https://apex.example.com/ords/f?p=REPORTS",
    image: "jasper",
  },
];

export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  description: string;
  tags: string[];
};

export const experience: TimelineItem[] = [
  {
    period: "2023 — Present",
    title: "Oracle APEX Developer",
    org: "Enterprise Applications Team",
    description:
      "Leading development of internal enterprise applications end to end — data model, PL/SQL logic, APEX front end, and reporting. Own REST API integrations connecting APEX apps with external services via ORDS.",
    tags: ["Oracle APEX", "PL/SQL", "ORDS", "REST APIs"],
  },
  {
    period: "2023 — Present",
    title: "Oracle Database & PL/SQL Developer",
    org: "Database Development",
    description:
      "Focused on schema design, query optimization, and PL/SQL package development for transactional systems handling high daily volume.",
    tags: ["Oracle SQL", "PL/SQL", "Database Design"],
  },
  {
    period: "2023 — Present",
    title: "Reporting & Dashboard Developer",
    org: "Business Intelligence",
    description:
      "Built Jasper Reports for finance and operations teams, and introduced Apache ECharts dashboards to replace static monthly reports with live, drill-down views.",
    tags: ["Jasper Reports", "Apache ECharts"],
  },
  {
    period: "2022 — Present",
    title: "Web Developer",
    org: "Web Development",
    description:
      "Built responsive websites and internal tools with HTML, CSS, and JavaScript, laying the frontend foundation later applied to customizing APEX interfaces.",
    tags: ["HTML5", "CSS3", "JavaScript"],
  },
];

export const education: TimelineItem[] = [
  {
    period: "2025 — Present",
    title: "Bachelor's in Computer Science",
    org: "University of Central Punjab",
    description:
      "Focused coursework in database systems, software engineering, and web technologies, with a final-year project built on Oracle Database.",
    tags: ["Databases", "Software Engineering"],
  },
  {
    period: "2023 — 2025",
    title: "Intermediate — Computer Science",
    org: "Punjab Group of Colleges",
    description: "Foundational study in programming and computer fundamentals.",
    tags: ["Fundamentals"],
  },
];

export type Certification = {
  title: string;
  issuer: string;
  category: "Oracle" | "Microsoft" | "Web Development" | "Database";
  icon: string;
};

export const certifications: Certification[] = [
  {
    title: "Oracle APEX Development",
    issuer: "Oracle",
    category: "Oracle",
    icon: "Database",
  },
  {
    title: "Oracle SQL & PL/SQL",
    issuer: "Oracle",
    category: "Oracle",
    icon: "Terminal",
  },
  {
    title: "Microsoft Office Specialist",
    issuer: "Microsoft",
    category: "Microsoft",
    icon: "FileSpreadsheet",
  },
  {
    title: "Responsive Web Design",
    issuer: "Web Development",
    category: "Web Development",
    icon: "LayoutTemplate",
  },
  {
    title: "Database Design & Modeling",
    issuer: "Database Technologies",
    category: "Database",
    icon: "DatabaseZap",
  },
];

export const stats = [
  { label: "Projects Delivered", value: 24, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
  { label: "Applications Built", value: 18, suffix: "+" },
  { label: "Reports Designed", value: 60, suffix: "+" },
  { label: "Dashboards Shipped", value: 12, suffix: "+" },
  { label: "Years Learning & Building", value: 4, suffix: "+" },
];

export const techMarquee = [
  "Oracle APEX",
  "Oracle SQL",
  "PL/SQL",
  "Oracle Database",
  "Oracle ORDS",
  "REST APIs",
  "Jasper Reports",
  "Apache ECharts",
  "HTML5",
  "CSS3",
  "JavaScript",
  "Git",
  "GitHub",
];
