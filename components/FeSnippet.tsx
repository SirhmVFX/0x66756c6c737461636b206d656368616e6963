"use client";

import { useState, type CSSProperties } from "react";
import type { Project } from "@/lib/projects";

export function shotUrl(live?: string) {
  if (!live) return null;
  return `https://v1.screenshot.11ty.dev/${encodeURIComponent(live)}/opengraph/`;
}

const SKINS: Record<string, { bg: string; ink: string; acc: string; ui: string }> = {
  bridgitus: { bg: "#12201c", ink: "#eef6f1", acc: "#3dba8a", ui: "#1c332c" },
  exampro: { bg: "#10141c", ink: "#e8eef8", acc: "#5b8cff", ui: "#1a2230" },
  agreemind: { bg: "#f6f1e8", ink: "#1c1812", acc: "#1f6b4a", ui: "#fff" },
  securex: { bg: "#0e1012", ink: "#d9e0e4", acc: "#e23b3b", ui: "#181c20" },
  whispr: { bg: "#161018", ink: "#f3e8f4", acc: "#c97bff", ui: "#241828" },
  "fms-africa": { bg: "#0f1720", ink: "#e4eef6", acc: "#2aa3ff", ui: "#172230" },
  eshmartagrox: { bg: "#13240f", ink: "#eef6e6", acc: "#8bc34a", ui: "#1c3316" },
  bigbold: { bg: "#111", ink: "#f5f0e8", acc: "#f0c14b", ui: "#1c1c1c" },
  milan: { bg: "#1a1210", ink: "#f7ebe4", acc: "#c9a27a", ui: "#261a16" },
  "tg-ticket": { bg: "#1a1014", ink: "#f8e8ee", acc: "#e35d8c", ui: "#2a1820" },
  auraevents: { bg: "#0c0c0c", ink: "#f2e6d8", acc: "#d4a017", ui: "#181818" },
  "dclm-au": { bg: "#101820", ink: "#e8eef4", acc: "#4aa3ff", ui: "#182430" },
  eshmartsmarttech: { bg: "#10180e", ink: "#eaf4e4", acc: "#f5c518", ui: "#1a2616" },
  fdforg: { bg: "#f3efe6", ink: "#1a1814", acc: "#2b6cb0", ui: "#fff" },
  droppblog: { bg: "#f7f4ee", ink: "#161412", acc: "#111", ui: "#fff" },
  explense: { bg: "#0f1412", ink: "#e6f4ea", acc: "#3dd68c", ui: "#17201c" },
  aleeyah: { bg: "#1a140e", ink: "#f6eadc", acc: "#ff8a3d", ui: "#261c14" },
  kreatorpay: { bg: "#121018", ink: "#eee8f8", acc: "#8b6cff", ui: "#1c1828" },
  aptrack: { bg: "#101820", ink: "#e8f0f8", acc: "#3d8bfd", ui: "#182430" },
  thinktank: { bg: "#14120e", ink: "#f4ead8", acc: "#e0a106", ui: "#221e16" },
  adullam: { bg: "#1c1810", ink: "#f6edd8", acc: "#e8c547", ui: "#2a2418" },
  vidau: { bg: "#0e0e12", ink: "#f0e8ff", acc: "#ff4d8d", ui: "#18181e" },
  "geek-hive": { bg: "#0e1a2a", ink: "#e4eef8", acc: "#0072c6", ui: "#162436" },
  studysmart: { bg: "#12161c", ink: "#e8eef4", acc: "#5ee0c0", ui: "#1a222c" },
  cyclecare: { bg: "#1a1014", ink: "#f8e8ee", acc: "#f07aa8", ui: "#281820" },
  commonperson: { bg: "#f4efe4", ink: "#1a1610", acc: "#c45c26", ui: "#fff" },
};

function skin(slug: string) {
  return (
    SKINS[slug] ?? {
      bg: "#161412",
      ink: "#f4efe6",
      acc: "#c8381e",
      ui: "#221e1a",
    }
  );
}

export default function FeSnippet({
  project,
  size = "lg",
}: {
  project: Project;
  size?: "lg" | "sm";
}) {
  const src = shotUrl(project.live);
  const [broken, setBroken] = useState(!src);
  const s = skin(project.slug);

  return (
    <div className={`fe-frame fe-frame-${size}`} style={{ "--fe-bg": s.bg, "--fe-ink": s.ink, "--fe-acc": s.acc, "--fe-ui": s.ui } as CSSProperties}>
      <div className="fe-chrome">
        <i />
        <i />
        <i />
        <span>{project.live?.replace(/^https?:\/\//, "") ?? `${project.slug}.app`}</span>
      </div>
      <div className="fe-viewport">
        {!broken && src ? (
          <img
            src={src}
            alt={`${project.name} interface`}
            onError={() => setBroken(true)}
          />
        ) : (
          <div className="fe-mock">
            <header>
              <b>{project.name}</b>
              <nav>
                <em />
                <em />
                <em />
              </nav>
            </header>
            <div className="fe-hero-block">
              <small>{project.serial}</small>
              <strong>{project.oneLiner}</strong>
            </div>
            <div className="fe-cards">
              {project.stack.slice(0, 3).map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
