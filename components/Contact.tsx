"use client";

import { site } from "@/lib/site";
import { tracks, type Bay } from "@/lib/tracks";

const CTA: Record<Bay, { kicker: string; h: string; p: string; mail: string }> = {
  fullstack: {
    kicker: "dispatch",
    h: "Let’s open the hood.",
    p: "Product from interface to invoice. Lagos, remote, ready.",
    mail: "Start a brief",
  },
  frontend: {
    kicker: "studio",
    h: "Need an interface that holds.",
    p: "Write me. I will answer like a person, not a form.",
    mail: "A note, not a ticket",
  },
  backend: {
    kicker: "stdin",
    h: "mail -s 'role' " + "sirhmvfx@gmail.com",
    p: "If the job is contracts, data, or money, this is the right host.",
    mail: "send",
  },
  ops: {
    kicker: "pager",
    h: "Page the mechanic.",
    p: "Deploys, mail, rules, the unglamorous uptime.",
    mail: "open a channel",
  },
};

export default function Contact({ bay }: { bay: Bay }) {
  const t = tracks[bay];
  const c = CTA[bay];
  return (
    <section id="contact" className="contact">
      <p className="kicker">{c.kicker}</p>
      <h2>{c.h}</h2>
      <p>{c.p}</p>
      <div className="contact-row">
        <a className="btn btn-accent lg" href={`mailto:${site.email}?subject=${encodeURIComponent(t.shareLine)}`}>
          {c.mail}
        </a>
        <a className="btn lg" href={site.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="btn lg" href={site.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
