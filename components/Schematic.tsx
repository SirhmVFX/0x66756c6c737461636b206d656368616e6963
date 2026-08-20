"use client";

import type { Bay } from "@/lib/tracks";

const NODES = [
  { id: "ui", label: "UI", x: 18, y: 28, bays: ["fullstack", "frontend"] },
  { id: "type", label: "TYPE", x: 38, y: 16, bays: ["fullstack", "frontend"] },
  { id: "api", label: "API", x: 62, y: 22, bays: ["fullstack", "backend"] },
  { id: "auth", label: "AUTH", x: 82, y: 36, bays: ["fullstack", "backend", "ops"] },
  { id: "db", label: "DATA", x: 70, y: 58, bays: ["fullstack", "backend"] },
  { id: "pay", label: "$", x: 48, y: 70, bays: ["fullstack", "backend"] },
  { id: "cdn", label: "CDN", x: 22, y: 64, bays: ["fullstack", "ops"] },
  { id: "ci", label: "CI", x: 34, y: 44, bays: ["fullstack", "ops"] },
] as const;

const LINES: [string, string][] = [
  ["ui", "type"],
  ["type", "api"],
  ["api", "auth"],
  ["auth", "db"],
  ["db", "pay"],
  ["pay", "cdn"],
  ["cdn", "ui"],
  ["ci", "api"],
  ["ci", "cdn"],
  ["ui", "pay"],
];

export default function Schematic({ bay }: { bay: Bay }) {
  const pos = Object.fromEntries(NODES.map((n) => [n.id, n]));
  return (
    <svg className="schematic" viewBox="0 0 100 86" aria-hidden>
      {LINES.map(([a, b]) => {
        const A = pos[a];
        const B = pos[b];
        const on =
          (A.bays as readonly string[]).includes(bay) &&
          (B.bays as readonly string[]).includes(bay);
        return (
          <line
            key={`${a}-${b}`}
            x1={A.x}
            y1={A.y}
            x2={B.x}
            y2={B.y}
            className={on ? "wire on" : "wire"}
          />
        );
      })}
      {NODES.map((n) => {
        const on = (n.bays as readonly string[]).includes(bay);
        return (
          <g key={n.id} className={on ? "node on" : "node"}>
            <circle cx={n.x} cy={n.y} r="5.2" />
            <text x={n.x} y={n.y + 0.6} textAnchor="middle">
              {n.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
