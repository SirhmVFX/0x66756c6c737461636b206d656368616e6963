"use client";

import { useEffect, useRef } from "react";
import type { Bay } from "@/lib/tracks";

export default function Atmosphere({ bay }: { bay: Bay }) {
  if (bay === "frontend") {
    return (
      <div className="atm atm-fe" aria-hidden>
        <div className="fe-blob" />
        <div className="fe-grain" />
      </div>
    );
  }
  if (bay === "backend") return <Rain />;
  return (
    <div className="atm atm-ops" aria-hidden>
      <div className="ops-radar" />
    </div>
  );
}

function Rain() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    const glyphs = "0123456789abcdef".split("");
    const cols: { y: number; speed: number }[] = [];

    const size = () => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
      const n = Math.floor(c.width / 18);
      cols.length = 0;
      for (let i = 0; i < n; i++) {
        cols.push({ y: Math.random() * c.height, speed: 1.4 + Math.random() * 2.2 });
      }
    };
    size();
    window.addEventListener("resize", size);

    const tick = () => {
      ctx.fillStyle = "rgba(7, 17, 9, 0.18)";
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.font = "12px ui-monospace, monospace";
      cols.forEach((col, i) => {
        const ch = glyphs[(Math.random() * glyphs.length) | 0];
        ctx.fillStyle = i % 7 === 0 ? "#d6ff8a" : "#3d7a48";
        ctx.fillText(ch, i * 18, col.y);
        col.y += col.speed * 6;
        if (col.y > c.height) col.y = -20;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
    };
  }, []);

  return <canvas ref={ref} className="atm atm-be" aria-hidden />;
}
