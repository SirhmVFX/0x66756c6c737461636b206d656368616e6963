"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { projectBlurb, projectsFor } from "@/lib/projects";
import { tracks } from "@/lib/tracks";
import { site } from "@/lib/site";
import { SERIAL_DECODED, SERIAL_HEX } from "@/lib/hex";

type Line = { kind: "in" | "out" | "ok" | "err"; text: string };

const HELP = [
  "whoami          identity",
  "ls              list services",
  "cat <slug>      read a service",
  "curl <slug>     fake GET",
  "stack           runtime",
  "serial          decode chassis",
  "clear           wipe buffer",
];

export default function Terminal() {
  const list = projectsFor("backend").all;
  const [lines, setLines] = useState<Line[]>([
    { kind: "ok", text: `ssh ${site.alias}@mechanic — session opened` },
    { kind: "out", text: `motd: ${tracks.backend.headline}` },
    { kind: "out", text: "type help. tab-complete is a myth here. the api is the product." },
  ]);
  const [cmd, setCmd] = useState("");
  const end = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    end.current?.scrollIntoView({ block: "nearest" });
  }, [lines]);

  const print = (next: Line[]) => setLines((prev) => [...prev, ...next]);

  const run = (raw: string) => {
    const text = raw.trim();
    if (!text) return;
    print([{ kind: "in", text: `$ ${text}` }]);
    const [c, arg] = text.split(/\s+/, 2);
    const find = (s?: string) => list.find((p) => p.slug === s || p.name.toLowerCase() === s?.toLowerCase());

    if (c === "help") print(HELP.map((t) => ({ kind: "out", text: t })));
    else if (c === "clear") setLines([]);
    else if (c === "whoami") {
      print([
        { kind: "ok", text: site.name },
        { kind: "out", text: tracks.backend.role },
        { kind: "out", text: site.location },
        { kind: "out", text: site.email },
      ]);
    } else if (c === "serial") {
      print([
        { kind: "out", text: SERIAL_HEX },
        { kind: "ok", text: `=> ${SERIAL_DECODED}` },
      ]);
    } else if (c === "stack") {
      print(tracks.backend.stack.map((t) => ({ kind: "out", text: `· ${t}` })));
    } else if (c === "ls") {
      print(list.map((p) => ({ kind: "out", text: `${p.serial}  ${p.slug.padEnd(16)}  ${p.year}` })));
    } else if (c === "cat" || c === "curl") {
      const p = find(arg);
      if (!p) print([{ kind: "err", text: `not found: ${arg ?? "(need slug)"}` }]);
      else if (c === "curl") {
        print([
          { kind: "ok", text: `GET /services/${p.slug}  200` },
          { kind: "out", text: JSON.stringify({ name: p.name, year: p.year, stack: p.stack, live: p.live ?? null }, null, 2) },
        ]);
      } else {
        print([
          { kind: "ok", text: p.name },
          { kind: "out", text: projectBlurb(p, "backend") },
        ]);
      }
    } else {
      print([{ kind: "err", text: `command not found: ${c}` }]);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    run(cmd);
    setCmd("");
  };

  return (
    <div className="term" onClick={() => input.current?.focus()}>
      <div className="term-bar">
        <span>ganiu@mechanic:~</span>
        <span>pty 0 · utf-8</span>
      </div>
      <div className="term-body">
        {lines.map((l, i) => (
          <pre key={i} className={`term-${l.kind}`}>
            {l.text}
          </pre>
        ))}
        <form onSubmit={onSubmit} className="term-form">
          <span>$</span>
          <input
            ref={input}
            value={cmd}
            onChange={(e) => setCmd(e.target.value)}
            autoCapitalize="off"
            autoComplete="off"
            spellCheck={false}
            aria-label="Terminal command"
          />
        </form>
        <div ref={end} />
      </div>
    </div>
  );
}
