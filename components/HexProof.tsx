"use client";

import { useState } from "react";
import { HEX_BYTES, SERIAL_DECODED } from "@/lib/hex";

export default function HexProof() {
  const [on, setOn] = useState<number | null>(null);
  const [pinned, setPinned] = useState<boolean[]>(() => HEX_BYTES.map(() => false));
  const decoded = HEX_BYTES.every((_, i) => pinned[i]);

  return (
    <div className="proof">
      <p className="proof-k">a typesetter’s proof · hover the metal, pin the letter</p>
      <div className="proof-row">
        {HEX_BYTES.map((b, i) => (
          <button
            key={b.index}
            type="button"
            className={`proof-cell ${pinned[i] || on === i ? "lit" : ""}`}
            onMouseEnter={() => setOn(i)}
            onMouseLeave={() => setOn(null)}
            onClick={() =>
              setPinned((p) => {
                const n = [...p];
                n[i] = !n[i];
                return n;
              })
            }
          >
            <b>{pinned[i] || on === i ? (b.char === " " ? "·" : b.char) : b.hex}</b>
          </button>
        ))}
      </div>
      <p className="proof-out">{decoded ? SERIAL_DECODED : "the plate still thinks it is hex"}</p>
    </div>
  );
}
