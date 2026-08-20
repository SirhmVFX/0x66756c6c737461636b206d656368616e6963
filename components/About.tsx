"use client";

import { site } from "@/lib/site";
import { tracks, type Bay } from "@/lib/tracks";
import { SERIAL_HEX } from "@/lib/hex";

const COPY: Record<Bay, { kicker: string; p1: string; p2: string }> = {
  fullstack: {
    kicker: "operator file",
    p1: `Also ${site.alias}. Software engineer, designer, and the person who opens the hood when a product is making a noise nobody else wants to hear.`,
    p2: `Trained at ALX, sharpened at HNG. ${SERIAL_HEX} is UTF-8 for fullstack mechanic — the name I work under.`,
  },
  frontend: {
    kicker: "the studio",
    p1: "I treat interface as writing: type, rhythm, and the three seconds a stranger gives you. React and Next.js are the tools. Taste is the job.",
    p2: "Lagos, remote. Campaigns, portals, luxury storefronts, and product UI that a designer does not have to sit on.",
  },
  backend: {
    kicker: "/etc/passwd",
    p1: "uid=1000(ganiu) gid=1000(engineer) groups=api,data,billing",
    p2: "I write the parts that fail in silence: invoices, bounties, exam results, webhooks. Node, Nest, Laravel, FastAPI — whatever the contract is.",
  },
  ops: {
    kicker: "on-call file",
    p1: "I ship it, keep it cheap, keep it up. Vercel, Firebase, AWS SES, rules files that actually lock the data down.",
    p2: "If it is on a URL a board can open, it has already been through my garage.",
  },
};

export default function About({ bay }: { bay: Bay }) {
  const c = COPY[bay];
  return (
    <section id="about" className="about">
      <header className="section-head">
        <p className="kicker">{c.kicker}</p>
        <h2>{site.name}</h2>
      </header>
      <div className="about-grid">
        <div>
          <p>{c.p1}</p>
          <p>{c.p2}</p>
        </div>
        <dl className="spec">
          <div>
            <dt>Base</dt>
            <dd>{site.location}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{site.availability}</dd>
          </div>
          <div>
            <dt>GitHub</dt>
            <dd>
              <a href={site.github} target="_blank" rel="noreferrer">
                @SirhmVFX
              </a>
            </dd>
          </div>
          <div>
            <dt>Now</dt>
            <dd>{tracks[bay].role}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
