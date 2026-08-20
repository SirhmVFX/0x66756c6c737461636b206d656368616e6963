"use client";

import { useState } from "react";
import { HEX_BYTES, SERIAL_DECODED, SERIAL_HEX } from "@/lib/hex";

export default function HexLED({ hint = "tap rack serial" }: { hint?: string }) {
  const [live, setLive] = useState(false);
  return (
    <button type="button" className={`led ${live ? "on" : ""}`} onClick={() => setLive((v) => !v)}>
      <span className="led-dot" />
      <code>{live ? SERIAL_DECODED : SERIAL_HEX}</code>
      <small>{live ? "probe decoded" : hint}</small>
      <span className="led-bytes" aria-hidden>
        {HEX_BYTES.map((b) => (
          <i key={b.index} style={{ animationDelay: `${b.index * 40}ms` }} />
        ))}
      </span>
    </button>
  );
}
