"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { BAY_PATH, BAYS, bayFromPath, tracks, type Bay } from "@/lib/tracks";
import Hatch from "./Hatch";
import Boot from "./Boot";
import Hero from "./Hero";
import Work from "./Work";
import Systems from "./Systems";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Atmosphere from "./Atmosphere";
import Cursor from "./Cursor";

export default function Garage() {
  const pathname = usePathname();
  const router = useRouter();
  const bay: Bay = bayFromPath(pathname || "/");
  const [copied, setCopied] = useState(false);
  const [booted, setBooted] = useState(false);
  const [hatch, setHatch] = useState(false);
  const clicks = useRef(0);
  const clickTimer = useRef<number | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem("garage-booted") === "1") setBooted(true);
  }, []);

  const finishBoot = useCallback(() => {
    sessionStorage.setItem("garage-booted", "1");
    setBooted(true);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "`" || e.key === "~") {
        e.preventDefault();
        setHatch((v) => !v);
        return;
      }
      if (e.key === "Escape") setHatch(false);
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const hit = BAYS.find((id) => tracks[id].key === e.key);
      if (hit) {
        e.preventDefault();
        router.push(BAY_PATH[hit]);
        setHatch(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router]);

  const share = useCallback(async () => {
    const url = `${window.location.origin}${BAY_PATH[bay]}`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }, [bay]);

  const onMarkClick = () => {
    clicks.current += 1;
    if (clickTimer.current) window.clearTimeout(clickTimer.current);
    if (clicks.current >= 3) {
      clicks.current = 0;
      setHatch(true);
      return;
    }
    clickTimer.current = window.setTimeout(() => {
      clicks.current = 0;
    }, 420);
  };

  const t = tracks[bay];

  return (
    <div className="shell" data-bay={bay}>
      {!booted && <Boot bay={bay} onDone={finishBoot} />}
      <Cursor bay={bay} />
      <Atmosphere bay={bay} />
      <Hatch
        open={hatch}
        bay={bay}
        copied={copied}
        onOpen={() => setHatch(true)}
        onClose={() => setHatch(false)}
        onShare={share}
      />
      <div className={`garage ${booted ? "ready" : "waiting"}`}>
        <header className="nav">
          <Link href={BAY_PATH[bay]} className="mark" onClick={onMarkClick}>
            <span className="mark-dot" />
            {bay === "backend" ? "ganiu@mechanic" : site.alias}
          </Link>
          <nav className="nav-links">
            <a href="#work">{bay === "backend" ? "/services" : bay === "frontend" ? "work" : "mesh"}</a>
            <a href="#systems">{bay === "frontend" ? "craft" : "systems"}</a>
            <a href="#contact">{bay === "frontend" ? "contact" : bay === "backend" ? "contact" : "page"}</a>
          </nav>
          {(bay === "ops" || bay === "fullstack") && (
            <span className="ops-live">
              <i />
              {t.short} · {site.location}
            </span>
          )}
        </header>
        <main>
          <Hero bay={bay} />
          <Work bay={bay} />
          <Systems bay={bay} />
          <About bay={bay} />
          <Contact bay={bay} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
