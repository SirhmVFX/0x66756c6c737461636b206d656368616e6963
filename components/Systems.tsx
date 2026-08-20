"use client";

import { tracks, type Bay } from "@/lib/tracks";

const HEAD: Record<Bay, { k: string; h: string }> = {
  fullstack: { k: "chassis", h: "What the machine is made of" },
  frontend: { k: "craft", h: "How the picture is made" },
  backend: { k: "runtime", h: "What the process actually does" },
  ops: { k: "runbooks", h: "How it stays up" },
};

export default function Systems({ bay }: { bay: Bay }) {
  const t = tracks[bay];
  const h = HEAD[bay];
  return (
    <section id="systems" className="systems">
      <header className="section-head">
        <p className="kicker">{h.k}</p>
        <h2>{h.h}</h2>
      </header>
      <div className="sys-grid">
        {t.systems.map((s) => (
          <article key={s.code} className="sys-card">
            <span>{s.code}</span>
            <h3>{s.name}</h3>
            <p>{s.note}</p>
          </article>
        ))}
      </div>
      <ul className="stack-row">
        {t.stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  );
}
