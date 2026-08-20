"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { projectBlurb, projectsFor, type Project } from "@/lib/projects";
import type { Bay } from "@/lib/tracks";
import { IconArrow, IconGithub } from "./Icons";
import FeSnippet from "./FeSnippet";

export default function Work({ bay }: { bay: Bay }) {
  const { featured, rest } = projectsFor(bay);
  if (bay === "frontend") return <Fe featured={featured} rest={rest} />;
  if (bay === "backend") return <Be featured={featured} rest={rest} />;
  return <Mesh featured={featured} rest={rest} bay={bay} />;
}

function Fe({ featured, rest }: { featured: Project[]; rest: Project[] }) {
  const [open, setOpen] = useState<string | null>(featured[0]?.slug ?? null);
  const all = [...featured, ...rest];
  const strip = all.filter((p) => p.live).slice(0, 8);
  return (
    <section id="work" className="work work-fe">
      <header className="section-head">
        <p className="kicker">index</p>
        <h2>Selected work</h2>
      </header>

      {strip.length > 0 && (
        <div className="fe-strip" aria-hidden>
          <div className="fe-strip-track">
            {[...strip, ...strip].map((p, i) => (
              <button
                key={`${p.slug}-${i}`}
                type="button"
                className="fe-strip-card"
                onClick={() => {
                  setOpen(p.slug);
                  document.getElementById(`fe-${p.slug}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
              >
                <FeSnippet project={p} size="sm" />
                <span>{p.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <ul className="fe-index">
        {all.map((p, i) => {
          const on = open === p.slug;
          return (
            <motion.li
              key={p.slug}
              id={`fe-${p.slug}`}
              className={`fe-row ${on ? "on" : ""}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: Math.min(i, 8) * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              <button type="button" onClick={() => setOpen(on ? null : p.slug)}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <strong>{p.name}</strong>
                <span className="fe-thumb">
                  <FeSnippet project={p} size="sm" />
                </span>
                <em>{p.year}</em>
              </button>
              <AnimatePresence initial={false}>
                {on && (
                  <motion.div
                    className="fe-drop"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="fe-drop-inner">
                      <motion.div
                        className="fe-drop-shot"
                        initial={{ y: 24, opacity: 0, rotate: -1.5 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <FeSnippet project={p} size="lg" />
                      </motion.div>
                      <motion.div
                        className="fe-drop-copy"
                        initial={{ y: 16, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.45, delay: 0.08 }}
                      >
                        <p>{projectBlurb(p, "frontend")}</p>
                        <ul className="chips">
                          {p.stack.map((s) => (
                            <li key={s}>{s}</li>
                          ))}
                        </ul>
                        <Links p={p} />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}

function Be({ featured, rest }: { featured: Project[]; rest: Project[] }) {
  const [open, setOpen] = useState<string | null>(null);
  const all = [...featured, ...rest];
  return (
    <section id="work" className="work work-be">
      <header className="section-head">
        <p className="kicker">GET /services</p>
        <h2>200 · {all.length} resources</h2>
      </header>
      <div className="be-list">
        {all.map((p) => {
          const on = open === p.slug;
          return (
            <article key={p.slug} className={`be-card ${on ? "on" : ""}`}>
              <button type="button" onClick={() => setOpen(on ? null : p.slug)}>
                <span>GET</span>
                <code>/services/{p.slug}</code>
                <b>200</b>
              </button>
              {on && (
                <pre>{`${projectBlurb(p, "backend")}

stack: ${p.stack.join(" · ")}
year:  ${p.year}
live:  ${p.live ?? "null"}
repo:  ${p.repo ?? "null"}`}</pre>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Mesh({
  featured,
  rest,
  bay,
}: {
  featured: Project[];
  rest: Project[];
  bay: Bay;
}) {
  const all = [...featured, ...rest];
  const [sel, setSel] = useState(all[0]?.slug ?? "");
  const p = all.find((x) => x.slug === sel) ?? all[0];
  return (
    <section id="work" className="work work-ops">
      <header className="section-head">
        <p className="kicker">{bay === "ops" ? "topology" : "chassis"}</p>
        <h2>{bay === "ops" ? "Production mesh" : "Selected machines"}</h2>
      </header>
      <div className="ops-mesh">
        <div className="ops-nodes">
          {all.map((n, i) => (
            <button
              key={n.slug}
              type="button"
              className={`ops-node ${sel === n.slug ? "on" : ""}`}
              style={{ animationDelay: `${i * 90}ms` }}
              onClick={() => setSel(n.slug)}
            >
              <i />
              <span>{n.name}</span>
              <small>{n.live ? "healthy" : "private"}</small>
            </button>
          ))}
        </div>
        {p && (
          <aside className="ops-inspect">
            <p className="kicker">{p.serial}</p>
            <h3>{p.name}</h3>
            <p>{projectBlurb(p, bay)}</p>
            <ul className="chips">
              {p.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <Links p={p} />
          </aside>
        )}
      </div>
    </section>
  );
}

function Links({ p }: { p: Project }) {
  return (
    <div className="card-links">
      {p.live && (
        <a href={p.live} target="_blank" rel="noreferrer">
          live <IconArrow />
        </a>
      )}
      {p.repo && (
        <a href={p.repo} target="_blank" rel="noreferrer">
          <IconGithub size={14} /> source
        </a>
      )}
    </div>
  );
}

