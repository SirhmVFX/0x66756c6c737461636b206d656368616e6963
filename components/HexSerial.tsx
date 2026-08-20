"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { HEX_BYTES, SERIAL_DECODED, SERIAL_HEX } from "@/lib/hex";
import { IconCheck, IconCopy } from "./Icons";

type Mode = "hex" | "ascii";

export default function HexSerial() {
  const [unlocked, setUnlocked] = useState<boolean[]>(() => HEX_BYTES.map(() => false));
  const [hover, setHover] = useState<number | null>(null);
  const [mode, setMode] = useState<Mode>("hex");
  const [copied, setCopied] = useState<"hex" | "ascii" | null>(null);
  const [cracking, setCracking] = useState(false);
  const timers = useRef<number[]>([]);

  const allOpen = unlocked.every(Boolean);
  const progress = unlocked.filter(Boolean).length;

  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  useEffect(() => () => clearTimers(), []);

  const crack = useCallback(() => {
    if (cracking) return;
    clearTimers();
    setCracking(true);
    setMode("hex");
    setUnlocked(HEX_BYTES.map(() => false));
    HEX_BYTES.forEach((_, i) => {
      const id = window.setTimeout(() => {
        setUnlocked((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
        if (i === HEX_BYTES.length - 1) {
          setMode("ascii");
          setCracking(false);
        }
      }, 55 * i + 120);
      timers.current.push(id);
    });
  }, [cracking]);

  const lock = () => {
    clearTimers();
    setCracking(false);
    setUnlocked(HEX_BYTES.map(() => false));
    setMode("hex");
  };

  const toggleByte = (i: number) => {
    if (cracking) return;
    setUnlocked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  const copy = async (what: "hex" | "ascii") => {
    const text = what === "hex" ? SERIAL_HEX : SERIAL_DECODED;
    await navigator.clipboard.writeText(text);
    setCopied(what);
    window.setTimeout(() => setCopied(null), 1600);
  };

  const decodedPreview = useMemo(
    () => HEX_BYTES.map((b, i) => (unlocked[i] ? b.char : "·")).join(""),
    [unlocked],
  );

  return (
    <div className="serial">
      <div className="serial-head">
        <span className="kicker">
          <span className="pulse" />
          chassis serial
        </span>
        <span className="serial-meta">
          {progress}/{HEX_BYTES.length} bytes · UTF-8
        </span>
      </div>

      <p className="serial-hint">
        Hover a byte. Click to unlock its ASCII. Or crack the whole plate —{" "}
        <em>0x…</em> is the brand.
      </p>

      <div
        className="byte-grid"
        role="list"
        aria-label="Hex serial decoder"
        onMouseLeave={() => setHover(null)}
      >
        <span className="byte ox" aria-hidden>
          0x
        </span>
        {HEX_BYTES.map((b, i) => {
          const open = unlocked[i] || mode === "ascii";
          const isHover = hover === i;
          const showChar = open || isHover;
          return (
            <button
              key={b.index}
              type="button"
              role="listitem"
              className={`byte ${open ? "open" : ""} ${isHover ? "hot" : ""} ${b.char === " " ? "space" : ""}`}
              onMouseEnter={() => setHover(i)}
              onFocus={() => setHover(i)}
              onClick={() => toggleByte(i)}
              aria-pressed={unlocked[i]}
              aria-label={`Byte ${i + 1}: ${b.hex} is '${b.char === " " ? "space" : b.char}'`}
            >
              <span className="byte-ascii">{showChar ? (b.char === " " ? "␣" : b.char) : ""}</span>
              <span className="byte-hex">{b.hex}</span>
            </button>
          );
        })}
      </div>

      <div className="serial-readout">
        <code className="readout-code">{mode === "ascii" || allOpen ? SERIAL_DECODED : decodedPreview}</code>
        <span className="readout-eq">
          {allOpen || mode === "ascii" ? "decoded" : "partial"}
        </span>
      </div>

      <div className="serial-actions">
        <button type="button" className="btn btn-accent" onClick={allOpen ? lock : crack} disabled={cracking}>
          {cracking ? "decoding…" : allOpen ? "re-encode" : "decode serial"}
        </button>
        <button type="button" className="btn" onClick={() => copy("hex")}>
          {copied === "hex" ? <IconCheck /> : <IconCopy />}
          copy hex
        </button>
        <button type="button" className="btn" onClick={() => copy("ascii")}>
          {copied === "ascii" ? <IconCheck /> : <IconCopy />}
          copy plaintext
        </button>
      </div>
    </div>
  );
}
