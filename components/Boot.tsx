"use client";

import { useEffect, useState } from "react";
import { SERIAL_DECODED, SERIAL_HEX } from "@/lib/hex";
import type { Bay } from "@/lib/tracks";

const SCRIPTS: Record<Bay, string[]> = {
  fullstack: [
    `> read serial ${SERIAL_HEX}`,
    `> decode: ${SERIAL_DECODED}`,
    "> ui · api · data · pay · live",
    "> chassis online",
  ],
  frontend: [
    "> load proof sheet",
    "> set type: editorial / 12vw",
    "> kerning ok",
    "> studio lights on",
  ],
  backend: [
    `> ssh ${SERIAL_DECODED.replace(" ", "-")}@0x`,
    "> motd: contracts before chrome",
    "> pty allocated",
    "> ready for stdin",
  ],
  ops: [
    "> probe /health",
    "> iad ok · ams ok · los ok",
    "> last deploy: healthy",
    "> noc online",
  ],
};

export default function Boot({ bay, onDone }: { bay: Bay; onDone: () => void }) {
  const [line, setLine] = useState(0);
  const lines = SCRIPTS[bay];

  useEffect(() => {
    if (line >= lines.length) {
      const t = window.setTimeout(onDone, 380);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => setLine((n) => n + 1), 340);
    return () => window.clearTimeout(t);
  }, [line, lines.length, onDone]);

  return (
    <button type="button" className="boot" onClick={onDone} aria-label="Skip boot">
      <div>
        {lines.slice(0, line + 1).map((l, i) => (
          <p key={i} className={i === line ? "boot-live" : ""}>
            {l}
          </p>
        ))}
        <span className="boot-skip">skip</span>
      </div>
    </button>
  );
}
