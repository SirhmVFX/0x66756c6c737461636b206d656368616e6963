export type Bay = "fullstack" | "frontend" | "backend" | "ops";

export const BAYS: Bay[] = ["fullstack", "frontend", "backend", "ops"];

export const BAY_PATH: Record<Bay, string> = {
  fullstack: "/",
  frontend: "/fe",
  backend: "/be",
  ops: "/ops",
};

export function bayFromPath(pathname: string): Bay {
  if (pathname.startsWith("/fe")) return "frontend";
  if (pathname.startsWith("/be")) return "backend";
  if (pathname.startsWith("/ops")) return "ops";
  return "fullstack";
}

export const tracks: Record<
  Bay,
  {
    id: Bay;
    code: string;
    key: string;
    role: string;
    short: string;
    headline: string;
    lede: string;
    promise: string;
    shareLine: string;
    systems: { code: string; name: string; note: string }[];
    stack: string[];
    services: string[];
  }
> = {
  fullstack: {
    id: "fullstack",
    code: "0xFS",
    key: "1",
    role: "Software Engineer · Fullstack",
    short: "Fullstack",
    headline: "I build the whole machine — then I keep it running.",
    lede: "Product UI, APIs, payments, data, and the cloud they live on. Lagos-based, shipping remotely. If it has a user on one side and a database on the other, I have already taken it apart.",
    promise:
      "Hire this bay when you need one engineer who can own a product from Figma to Firestore to invoice.",
    shareLine: "Fullstack Engineer bay — Ganiu Samuel, The Fullstack Mechanic",
    systems: [
      { code: "UI", name: "Product interfaces", note: "Next.js, React, TypeScript, Tailwind" },
      { code: "API", name: "Application servers", note: "Route handlers, Nest, Express, FastAPI" },
      { code: "DB", name: "Data & auth", note: "Firebase, Postgres, Mongo, JWT, RBAC" },
      { code: "$", name: "Money rails", note: "Stripe, Paystack, invoicing, entitlements" },
      { code: "OPS", name: "Ship & stay up", note: "Vercel, AWS SES, Cloudinary, rules, CI" },
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "React",
      "Node.js",
      "Firebase",
      "Laravel",
      "Python",
      "Stripe",
      "Paystack",
      "AWS SES",
      "Vercel",
    ],
    services: [
      "End-to-end product builds",
      "Admin + customer surfaces",
      "Auth, roles, billing",
      "AI-assisted product features",
    ],
  },
  frontend: {
    id: "frontend",
    code: "0xFE",
    key: "2",
    role: "Frontend Engineer",
    short: "Frontend",
    headline: "Interfaces that feel inevitable.",
    lede: "Type, motion, accessibility, and design systems that survive past the mock. I ship marketing sites, portals, and product UI in React and Next.js — the kind hiring managers can click in the same afternoon.",
    promise:
      "Hire this bay when the brief is craft: conversion, motion, and a frontend a designer will not have to babysit.",
    shareLine: "Frontend Engineer bay — Ganiu Samuel, The Fullstack Mechanic",
    systems: [
      { code: "SYS", name: "Design systems", note: "Tokens, type scales, reusable primitives" },
      { code: "APP", name: "Product UI", note: "App Router, dashboards, editors, portals" },
      { code: "MKT", name: "Brand sites", note: "Campaigns, events, luxury storefronts" },
      { code: "A11Y", name: "Access & performance", note: "WCAG-minded layouts, Core Web Vitals" },
      { code: "FX", name: "Motion", note: "Framer Motion, editorial pacing, micro-interaction" },
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vue",
      "Figma",
      "TipTap",
    ],
    services: [
      "Design-to-code",
      "Design systems",
      "Marketing & product UI",
      "Animation and editorial type",
    ],
  },
  backend: {
    id: "backend",
    code: "0xBE",
    key: "3",
    role: "Backend Engineer",
    short: "Backend",
    headline: "Contracts, data, money. The parts that fail in silence.",
    lede: "Auth, schemas, webhooks, queues of work that have to be correct. I write APIs in Node, Nest, Laravel, and FastAPI — then wire them to the product so billing, tickets, and exams do not lie.",
    promise:
      "Hire this bay when you need someone who treats invoices, bounties, and exam results as systems — not screens.",
    shareLine: "Backend Engineer bay — Ganiu Samuel, The Fullstack Mechanic",
    systems: [
      { code: "AUTH", name: "Identity & access", note: "JWT, SSO-ready flows, RBAC, org tenancy" },
      { code: "DATA", name: "Models & rules", note: "Firestore, SQL, Mongo, audit trails" },
      { code: "PAY", name: "Billing engines", note: "Stripe, Paystack, invoices, entitlements" },
      { code: "AI", name: "Model I/O", note: "OpenAI / Gemini for generation inside product" },
      { code: "API", name: "Public & private APIs", note: "REST, webhooks, file & mail pipelines" },
    ],
    stack: [
      "Node.js",
      "Express",
      "NestJS",
      "Python",
      "FastAPI",
      "Laravel",
      "Firebase Admin",
      "MongoDB",
      "PostgreSQL",
      "Stripe",
    ],
    services: [
      "API design",
      "Multi-tenant backends",
      "Payments & invoicing",
      "Auth and audit logs",
    ],
  },
  ops: {
    id: "ops",
    code: "0xOPS",
    key: "4",
    role: "Cloud · DevOps Engineer",
    short: "Cloud / DevOps",
    headline: "Ship it. Keep it cheap. Keep it up.",
    lede: "Vercel, Firebase, AWS SES, Cloudinary, rules files that actually lock the data down. I take products from localhost to a URL a client can send their board — with email, storage, and environments that do not rot.",
    promise:
      "Hire this bay when you need an engineer who deploys, observes, and hardens — not just commits.",
    shareLine: "Cloud / DevOps bay — Ganiu Samuel, The Fullstack Mechanic",
    systems: [
      { code: "CI", name: "Ship pipeline", note: "GitHub → Vercel, preview deploys, env splits" },
      { code: "CLOUD", name: "Managed cloud", note: "Firebase, AWS SES, Cloudinary, Stripe live" },
      { code: "SEC", name: "Hardening", note: "Firestore rules, secrets, least-privilege admin" },
      { code: "MAIL", name: "Transactional mail", note: "SES templates, password reset, receipts" },
      { code: "OBS", name: "Stay alive", note: "Logs, indexes, backups, domain + TLS" },
    ],
    stack: [
      "Vercel",
      "Firebase",
      "AWS SES",
      "Cloudinary",
      "GitHub Actions",
      "Linux",
      "Bash",
      "Docker",
      "Cloudflare",
    ],
    services: [
      "Production deploys",
      "Firebase / AWS wiring",
      "Email & storage pipelines",
      "Rules, secrets, environments",
    ],
  },
};
