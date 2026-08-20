"use client";

import { useEffect, useState } from "react";
import type { Bay } from "@/lib/tracks";

export default function Cursor({ bay }: { bay: Bay }) {
  const [pos, setPos] = useState({ x: -80, y: -80 });
  const [hot, setHot] = useState(false);
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setOk(fine);
    if (!fine) return;
    const move = (e: PointerEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const t = e.target as HTMLElement | null;
      setHot(!!t?.closest("a, button, .byte, .fe-row, .be-card, .ops-node"));
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  if (!ok) return null;

  return (
    <div
      className={`cursor cursor-${bay === "fullstack" ? "ops" : bay} ${hot ? "hot" : ""}`}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      aria-hidden
    />
  );
}
