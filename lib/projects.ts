import type { Bay } from "./tracks";

export type Project = {
  slug: string;
  serial: string;
  name: string;
  year: string;
  client: string;
  featured?: boolean;
  bays: Bay[];
  stack: string[];
  live?: string;
  repo?: string;
  oneLiner: string;
  blurb: Partial<Record<Bay, string>> & { fullstack: string };
};

export const projects: Project[] = [
  {
    slug: "bridgitus",
    serial: "0x01",
    name: "Bridgitus Learning",
    year: "2026",
    client: "Bridgitus",
    featured: true,
    bays: ["fullstack", "frontend", "backend", "ops"],
    stack: ["Next.js", "Firebase", "Stripe", "Paystack", "AWS SES", "Gemini", "Cloudinary"],
    live: "https://bridgitus.vercel.app",
    repo: "https://github.com/SirhmVFX/bridgitus-learning",
    oneLiner: "Academic platform with student portal, payments, and AI-authored practice.",
    blurb: {
      fullstack:
        "A learning product with a public site, student portal, and admin. Checkout on Stripe and Paystack, SES mail, Cloudinary media, and Gemini-backed question generation — one engineer across the stack.",
      frontend:
        "Marketing site, registration, and a student portal for practice, tests, materials, and progress. Pricing cards, analytics charts, and a calendar that has to feel calm on a phone.",
      backend:
        "Checkout sessions, Paystack verify, password reset, contact, and Gemini routes for generated questions. Firebase auth for students, curriculum models, and entitlement after payment.",
      ops: "AWS SES for transactional mail, Firestore rules, Cloudinary, Stripe/Paystack live keys, and Vercel production for both the learning app and the admin at bridgitus-admin.vercel.app.",
    },
  },
  {
    slug: "exampro",
    serial: "0x02",
    name: "ExamPro",
    year: "2026",
    client: "ExamPro",
    featured: true,
    bays: ["fullstack", "frontend", "backend", "ops"],
    stack: ["Next.js", "Firebase", "Stripe", "TipTap", "TypeScript"],
    oneLiner: "Multi-tenant exam platform for institutions, teachers, students, and parents.",
    blurb: {
      fullstack:
        "Institutions, teachers, students, parents, and trainers in one product. Timed exams, gradebook, certificates with public verify codes, billing, and a TipTap authoring surface.",
      frontend:
        "Role-specific dashboards, a WYSIWYG exam builder, student take-exam flow, and a marketing site with pricing. Built so a teacher can author and a student can sit the paper without a tutorial.",
      backend:
        "Org tenancy, SSO-ready auth, assessment lifecycle, certificate verification, gradebook export, audit log, and Stripe billing for institutions.",
      ops: "Firebase Auth + Firestore with indexes and rules, Stripe webhooks, middleware-gated portals, and environment splits for institution slugs.",
    },
  },
  {
    slug: "agreemind",
    serial: "0x03",
    name: "AgreeMind",
    year: "2025",
    client: "AgreeMind",
    featured: true,
    bays: ["fullstack", "frontend", "backend", "ops"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "PDF"],
    repo: "https://github.com/SirhmVFX/agreemind",
    oneLiner: "Invoicing platform — from draft to paid, with a ledger that does not drift.",
    blurb: {
      fullstack:
        "AgreeMind is an invoicing system I built for teams that send real money documents. Clients, line items, tax, sequential invoice numbers, payment status, and a branded PDF the finance lead can forward without apology.",
      frontend:
        "Invoice editor with live totals, client directory, status chips (draft / sent / overdue / paid), and a print-faithful preview. The UI is a ledger, not a dashboard toy.",
      backend:
        "Invoice numbering, tax rules, payment webhooks, reminder jobs, and a double-entry-style status machine so an invoice cannot be paid twice or silently unsent.",
      ops: "Transactional mail for send and reminders, stored PDFs, webhook retries, and environment-safe Stripe keys. The kind of product you do not deploy on vibes.",
    },
  },
  {
    slug: "securex",
    serial: "0x04",
    name: "SecureX",
    year: "2026",
    client: "SecureX",
    featured: true,
    bays: ["fullstack", "frontend", "backend", "ops"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "S3", "RBAC"],
    oneLiner: "Bug bounty platform — programs, reports, severity, payouts, and a sealed trail.",
    blurb: {
      fullstack:
        "SecureX is a bug bounty product I built for orgs that need a private hallway between researchers and security. Programs, scoped assets, severity, report lifecycle, and payouts — with access so tight a duplicate report cannot leak.",
      frontend:
        "Researcher and triager surfaces: markdown reports, severity, attachments, program scope, and a status timeline. Quiet UI. Security products should not look like a game.",
      backend:
        "Program tenancy, report intake, duplicate detection hooks, severity SLAs, bounty payouts, and an audit log. Attachments stored off-box. Researchers never see another org's queue.",
      ops: "Least-privilege roles, signed uploads, secrets out of the client, and a deploy path that assumes the product itself is a target. Hardening is the feature.",
    },
  },
  {
    slug: "whispr",
    serial: "0x05",
    name: "Whispr",
    year: "2026",
    client: "Whispr",
    featured: true,
    bays: ["fullstack", "frontend", "backend", "ops"],
    stack: ["Next.js", "Firebase", "Firestore"],
    live: "https://whispr-kohl.vercel.app",
    repo: "https://github.com/SirhmVFX/whispr",
    oneLiner: "Anonymous messaging — identity optional, delivery not.",
    blurb: {
      fullstack:
        "Anonymous messaging with a public link, inbox, and Firestore rules that keep the whisper on the right desk. Small product, sharp constraints.",
      frontend:
        "A sending surface that feels like a note, not a form. Inbox for the recipient, empty states that do not shame the first user.",
      backend:
        "Message writes with constrained schemas, rate-aware intake, and rules that prevent inbox enumeration.",
      ops: "Firebase hosting path, Firestore rules + indexes, Vercel at whispr-kohl.vercel.app.",
    },
  },
  {
    slug: "fms-africa",
    serial: "0x06",
    name: "FMS Africa",
    year: "2026",
    client: "FMS ECS Africa",
    featured: true,
    bays: ["fullstack", "frontend", "backend", "ops"],
    stack: ["Next.js", "Firebase", "TypeScript"],
    live: "https://fms-ecsafrica.vercel.app",
    repo: "https://github.com/SirhmVFX/fms-ecsafrica",
    oneLiner: "Fleet management website and admin for operations across East & Central Africa.",
    blurb: {
      fullstack:
        "Public fleet site plus an admin for content and operations. Built as a pair: fms-ecsafrica and fms-ecsafrica-admin, same data, different jobs.",
      frontend:
        "A corporate fleet narrative — routes, capability, trust — with an admin that non-engineers can actually use.",
      backend:
        "Firebase-backed content models and admin mutations so the marketing site is not a rebuild every time ops change a line.",
      ops: "Two Vercel projects, shared Firebase, env.local discipline, production admin at fms-ecsafrica-admin-xi.vercel.app.",
    },
  },
  {
    slug: "eshmartagrox",
    serial: "0x07",
    name: "Eshmart AgroX",
    year: "2026",
    client: "Eshmart",
    featured: true,
    bays: ["fullstack", "frontend", "ops"],
    stack: ["Next.js", "Firebase", "TypeScript"],
    live: "https://eshmartagrox.vercel.app",
    repo: "https://github.com/SirhmVFX/eshmartagrox",
    oneLiner: "Agribusiness platform with a matching admin for catalogue and content.",
    blurb: {
      fullstack:
        "Storefront and admin for an agribusiness brand. Catalogue, content, Firebase — shipped as eshmartagrox + admin-eshmartagrox.",
      frontend:
        "Product and brand pages for agro commerce. Admin authoring so the field team is not waiting on a deploy to change a crop story.",
      ops: "Paired Vercel deploys and Firebase. The admin is a production URL, not a localhost myth.",
    },
  },
  {
    slug: "bigbold",
    serial: "0x08",
    name: "Big Bold Original",
    year: "2026",
    client: "Big Bold Original",
    featured: true,
    bays: ["fullstack", "frontend", "backend", "ops"],
    stack: ["Next.js", "Firebase", "TipTap"],
    live: "https://bigboldoriginal.vercel.app",
    repo: "https://github.com/SirhmVFX/bigboldoriginal",
    oneLiner: "Storefront plus a TipTap-powered admin for a fashion / original goods brand.",
    blurb: {
      fullstack:
        "Customer storefront and a Firebase admin with a real editor. Catalogue, content, and the unglamorous CMS work that keeps a brand live.",
      frontend:
        "A storefront that has to hold photography and product, plus an admin with TipTap so merchandising is not a markdown hostage situation.",
      backend:
        "Firebase models, admin auth, and content writes that the storefront reads without a rebuild.",
      ops: "Firebase + Vercel pair (store + admin-bigboldoriginal.vercel.app).",
    },
  },
  {
    slug: "milan",
    serial: "0x09",
    name: "Milan Luxury Hair",
    year: "2025",
    client: "Milan Luxury Hair",
    featured: true,
    bays: ["fullstack", "frontend", "backend"],
    stack: ["Laravel", "PHP", "Vite", "Tailwind", "MySQL"],
    oneLiner: "Luxury hair ecommerce on Laravel — catalogue, checkout, custom pages.",
    blurb: {
      fullstack:
        "A Laravel commerce build for a luxury hair house: catalogue, checkout, custom pages, and a cPanel deploy path that has to survive real hosting.",
      frontend:
        "High-craft storefront for a beauty brand. Pages that feel expensive because the product is.",
      backend:
        "Laravel routes, checkout, CMS-ish custom pages, and image compression scripts for a catalogue that would otherwise crush the server.",
    },
  },
  {
    slug: "tg-ticket",
    serial: "0x0A",
    name: "TG Ticket",
    year: "2025",
    client: "Private event",
    featured: true,
    bays: ["fullstack", "frontend", "backend"],
    stack: ["Next.js", "TypeScript"],
    live: "https://tg-ticket.vercel.app",
    repo: "https://github.com/SirhmVFX/tg-ticket",
    oneLiner: "Wedding ticket system — issue, check, and keep the door honest.",
    blurb: {
      fullstack:
        "A ticket system for a real wedding. Guest list, issue, check-in. No room for a double-entry at the gate.",
      frontend:
        "Guest-facing ticket and a door flow that works on a bad network in a hall.",
      backend:
        "Ticket issuance, uniqueness, and check-in so the list and the door agree.",
    },
  },
  {
    slug: "auraevents",
    serial: "0x0B",
    name: "Aura Events",
    year: "2026",
    client: "Aura Events",
    bays: ["frontend", "fullstack"],
    stack: ["Next.js", "Framer Motion", "TypeScript"],
    live: "https://auraevents.vercel.app",
    repo: "https://github.com/SirhmVFX/auraevents",
    oneLiner: "Official site for an events house — motion as part of the brand.",
    blurb: {
      fullstack: "Brand site for Aura Events. Motion-led, production on Vercel.",
      frontend:
        "Type animation, Framer Motion, and a site that has to look like it can run a night, not just describe one.",
    },
  },
  {
    slug: "dclm-au",
    serial: "0x0C",
    name: "DCLM Australia",
    year: "2026",
    client: "Deeper Life Australia",
    bays: ["fullstack", "frontend", "ops"],
    stack: ["Next.js", "Firebase"],
    live: "https://dclm-au.vercel.app",
    repo: "https://github.com/SirhmVFX/dclm-au",
    oneLiner: "Church platform, admin CMS, and WIW program site — three properties, one mechanic.",
    blurb: {
      fullstack:
        "Public site, Firebase admin, and a WIW program microsite. Content that non-engineers publish without a pull request.",
      frontend:
        "Pastoral and program surfaces that have to read as institution, not startup.",
      ops: "Three Vercel apps (dclm-au, admin, wiw) on shared Firebase with published rules.",
    },
  },
  {
    slug: "eshmartsmarttech",
    serial: "0x0D",
    name: "Eshmart SmartTech",
    year: "2025",
    client: "Eshmart",
    bays: ["fullstack", "frontend", "ops"],
    stack: ["Next.js", "Firebase"],
    live: "https://eshmartsmarttech.vercel.app",
    repo: "https://github.com/SirhmVFX/eshmartsmarttech",
    oneLiner: "Smart solar technology brand site and admin.",
    blurb: {
      fullstack: "Solar / smart-tech brand with a matching admin for catalogue and stories.",
      frontend: "Product storytelling for hardware that has to feel credible, not gadgety.",
      ops: "Paired deploys: eshmartsmarttech + admin-eshmatsmarttech.vercel.app.",
    },
  },
  {
    slug: "fdforg",
    serial: "0x0E",
    name: "Friends of the Deaf",
    year: "2025",
    client: "FDF",
    bays: ["fullstack", "frontend", "backend"],
    stack: ["Laravel", "PHP", "Tailwind", "MySQL"],
    oneLiner: "Accessible CMS — pages, events, registration — WCAG-minded for the deaf community.",
    blurb: {
      fullstack:
        "Laravel CMS for a foundation: pages, blog, events with registration, mobile-first, WCAG 2.1 AA as a requirement not a slogan.",
      frontend:
        "Accessible layouts, caption-aware media, and a public site that works for the community it serves.",
      backend: "CMS, event registration, and content models in Laravel.",
    },
  },
  {
    slug: "droppblog",
    serial: "0x0F",
    name: "Droppblog",
    year: "2025",
    client: "Open",
    bays: ["fullstack", "frontend", "backend"],
    stack: ["JavaScript", "Node", "Express"],
    repo: "https://github.com/SirhmVFX/droppblog",
    oneLiner: "Collaborative blog system — write together, publish once.",
    blurb: {
      fullstack: "A collaborative blog: multiple authors, one publishing pipeline.",
      frontend: "Reading and writing surfaces for a shared editorial desk.",
      backend: "Posts, authors, and collaboration rules in a Node stack.",
    },
  },
  {
    slug: "starhills",
    serial: "0x10",
    name: "Starhills Logistics",
    year: "2026",
    client: "Starhills",
    bays: ["backend", "ops", "fullstack"],
    stack: ["Node.js", "JavaScript", "TypeScript"],
    repo: "https://github.com/SirhmVFX/starhills-logistics-backend",
    oneLiner: "Logistics backend and admin — shipments are a state machine, not a spreadsheet.",
    blurb: {
      fullstack: "Admin + API for a logistics operation. Backend first, admin as the cockpit.",
      backend:
        "starhills-logistics-backend: shipment state, admin mutations, the unglamorous correctness of cargo.",
      ops: "Split backend and admin repos so ops can deploy the API without waiting on a UI tweak.",
    },
  },
  {
    slug: "explense",
    serial: "0x11",
    name: "Explense",
    year: "2025",
    client: "Personal",
    bays: ["frontend", "fullstack", "backend"],
    stack: ["Vue", "Supabase", "shadcn"],
    repo: "https://github.com/SirhmVFX/explense",
    oneLiner: "Expense tracker in Vue, shadcn, and Supabase.",
    blurb: {
      fullstack: "Personal finance tracker on Vue + Supabase. Proof I do not only live in React.",
      frontend: "Vue and shadcn — a ledger UI with the same taste as the React work.",
      backend: "Supabase auth and tables. Expenses are just rows until the RLS is wrong.",
    },
  },
  {
    slug: "product-api",
    serial: "0x12",
    name: "Product API",
    year: "2025",
    client: "Lab",
    bays: ["backend"],
    stack: ["Python", "FastAPI", "Auth"],
    repo: "https://github.com/SirhmVFX/product-api",
    oneLiner: "Authenticated product API in FastAPI.",
    blurb: {
      fullstack: "A small, correct FastAPI with auth — the kind of service you actually reuse.",
      backend: "FastAPI, auth, product resources. Python when the job is a service, not a page.",
    },
  },
  {
    slug: "aleeyah",
    serial: "0x13",
    name: "Aleeyah",
    year: "2024",
    client: "Aleeyah",
    bays: ["fullstack", "frontend", "backend"],
    stack: ["JavaScript", "Node", "AI"],
    live: "https://aleeyah-api.vercel.app",
    repo: "https://github.com/SirhmVFX/aleeyah",
    oneLiner: "Food AI companion — client, server, and model I/O as a split system.",
    blurb: {
      fullstack: "A food AI companion split into aleeyah-client and aleeyah-server.",
      frontend: "Companion UI for food questions that should feel like a chef, not a chatbot skin.",
      backend: "aleeyah-server: model calls, API, the part users never see and always feel.",
    },
  },
  {
    slug: "kreatorpay",
    serial: "0x14",
    name: "KreatorPay",
    year: "2025",
    client: "KreatorPay",
    bays: ["frontend", "fullstack"],
    stack: ["TypeScript", "React"],
    repo: "https://github.com/SirhmVFX/kreatorpay-fe",
    oneLiner: "Frontend for connecting creators with brands.",
    blurb: {
      fullstack: "Creator–brand money surface. Frontend of a marketplace that has to feel fair.",
      frontend: "kreatorpay-fe: marketplace UI where a creator and a brand share a table.",
    },
  },
  {
    slug: "aptrack",
    serial: "0x15",
    name: "APTrack",
    year: "2025",
    client: "Aptech",
    bays: ["frontend", "fullstack"],
    stack: ["JavaScript", "React"],
    live: "https://aptrack-nine.vercel.app",
    repo: "https://github.com/SirhmVFX/aptrack",
    oneLiner: "Student exam app for Aptech.",
    blurb: {
      fullstack: "Exam taking for students — timed, clear, no mystery chrome.",
      frontend: "A student exam UI that has to work under pressure, not in a Dribbble shot.",
    },
  },
  {
    slug: "thinktank",
    serial: "0x16",
    name: "ThinkTank Academy",
    year: "2026",
    client: "ThinkTank",
    bays: ["frontend", "fullstack"],
    stack: ["Next.js", "TypeScript"],
    live: "https://thinktankacademy.vercel.app",
    repo: "https://github.com/SirhmVFX/thinktankacademy",
    oneLiner: "Academy website — curriculum as a product page.",
    blurb: {
      fullstack: "Academy property on Next.js, live on Vercel.",
      frontend: "Education marketing that has to convert a parent, not a VC.",
    },
  },
  {
    slug: "adullam",
    serial: "0x17",
    name: "Adullam Summer Camp",
    year: "2025",
    client: "Adullam",
    bays: ["frontend"],
    stack: ["Next.js", "TypeScript"],
    live: "https://adullamsummercamp.vercel.app",
    repo: "https://github.com/SirhmVFX/adullamsummercamp",
    oneLiner: "From hiding to emerging — camp site with a narrative, not a flyer PDF.",
    blurb: {
      fullstack: "Summer camp site. Story first.",
      frontend: "Editorial landing for a camp. Type and image doing pastoral work.",
    },
  },
  {
    slug: "vidau",
    serial: "0x18",
    name: "Vidau",
    year: "2025",
    client: "Vidau",
    bays: ["frontend", "fullstack"],
    stack: ["TypeScript", "Next.js"],
    live: "https://vidau.vercel.app",
    repo: "https://github.com/SirhmVFX/vidau",
    oneLiner: "Generate high-converting video ad creatives in minutes.",
    blurb: {
      fullstack: "Creative-tool landing and product surface for video ads.",
      frontend: "A tool site that has to demo the promise before anyone uploads a frame.",
    },
  },
  {
    slug: "auth-org-api",
    serial: "0x19",
    name: "Auth Org API",
    year: "2024",
    client: "HNG",
    bays: ["backend"],
    stack: ["JavaScript", "Node", "REST"],
    live: "https://auth-org-api.vercel.app",
    repo: "https://github.com/SirhmVFX/auth-org-api",
    oneLiner: "Organisation auth API — users, orgs, tokens.",
    blurb: {
      fullstack: "Auth and organisations as an API. HNG-grade correctness.",
      backend: "User/org auth service. Tokens, membership, the boring load-bearing stuff.",
    },
  },
  {
    slug: "nestjs-lab",
    serial: "0x1A",
    name: "NestJS Lab",
    year: "2025",
    client: "Lab",
    bays: ["backend"],
    stack: ["NestJS", "TypeScript"],
    repo: "https://github.com/SirhmVFX/nestjs-test-project",
    oneLiner: "NestJS service architecture — modules, providers, the grown-up Node layout.",
    blurb: {
      fullstack: "A NestJS pass so the backend work is not only Express scripts.",
      backend: "Nest modules and providers. Structure as a skill, not a tutorial leftover.",
    },
  },
  {
    slug: "booking-flight-api",
    serial: "0x1B",
    name: "Booking Flight API",
    year: "2022",
    client: "Zuri",
    bays: ["backend"],
    stack: ["Express", "REST", "Node"],
    repo: "https://github.com/SirhmVFX/booking-flight-api",
    oneLiner: "REST flight booking API.",
    blurb: {
      fullstack: "Early REST work that still reads as a real resource model.",
      backend: "Express REST for flights. CRUD that taught the later invoicing and bounty engines.",
    },
  },
  {
    slug: "alx-devops",
    serial: "0x1C",
    name: "ALX Systems & DevOps",
    year: "2022",
    client: "ALX",
    bays: ["ops", "backend"],
    stack: ["Bash", "Linux", "C", "Python"],
    repo: "https://github.com/SirhmVFX/alx-system_engineering-devops",
    oneLiner: "Shell, Linux, interpreters, and the low-level work under every deploy.",
    blurb: {
      fullstack: "ALX years: simple_shell, monty, printf, AirBnB clone, RSA — the mechanic's apprenticeship.",
      backend: "C and Python systems work. Interpreters and clones before frameworks.",
      ops: "alx-system_engineering-devops, simple_shell, Linux. I learned servers before I learned Vercel.",
    },
  },
  {
    slug: "geek-hive",
    serial: "0x1D",
    name: "Geek Hive · Webwing",
    year: "2023",
    client: "Geek Hive",
    bays: ["frontend"],
    stack: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/SirhmVFX/Digital-Agency-Project-Geek-Hive",
    oneLiner: "Digital agency team project — community, first shipped together.",
    blurb: {
      fullstack: "First team site with Geek Hive. Utility classes, real collaborators.",
      frontend: "Hand-built CSS system for a digital agency. The craft started here.",
    },
  },
  {
    slug: "studysmart",
    serial: "0x1E",
    name: "StudySmart",
    year: "2024",
    client: "Open",
    bays: ["frontend", "fullstack"],
    stack: ["TypeScript"],
    repo: "https://github.com/SirhmVFX/studysmart",
    oneLiner: "Study product in TypeScript.",
    blurb: {
      fullstack: "A study tool — another pass at learning products before Bridgitus and ExamPro.",
      frontend: "Typed UI for studying. The lineage that leads to ExamPro.",
    },
  },
  {
    slug: "cyclecare",
    serial: "0x1F",
    name: "CycleCare",
    year: "2024",
    client: "CycleCare",
    bays: ["fullstack", "frontend"],
    stack: ["JavaScript"],
    repo: "https://github.com/SirhmVFX/cyclecare",
    oneLiner: "Platform for period-cycle health.",
    blurb: {
      fullstack: "Health product for cycle tracking. Sensitive data, calm UI.",
      frontend: "A health surface that has to feel private on first paint.",
    },
  },
  {
    slug: "commonperson",
    serial: "0x20",
    name: "Common Person Relief",
    year: "2025",
    client: "CPR",
    bays: ["frontend", "fullstack"],
    stack: ["TypeScript", "Next.js"],
    live: "https://commonpersonrelief.vercel.app",
    repo: "https://github.com/SirhmVFX/commonpersonrelief",
    oneLiner: "Relief org site — basic needs, immediate and sustainable.",
    blurb: {
      fullstack: "Nonprofit site for underprivileged-community relief.",
      frontend: "Cause-driven landing that has to look trustworthy, not loud.",
    },
  },
];

export function projectsFor(bay: Bay) {
  const featured = projects.filter((p) => p.bays.includes(bay) && p.featured);
  const rest = projects.filter((p) => p.bays.includes(bay) && !p.featured);
  return { featured, rest, all: [...featured, ...rest] };
}

export function projectBlurb(project: Project, bay: Bay) {
  return project.blurb[bay] ?? project.blurb.fullstack;
}
