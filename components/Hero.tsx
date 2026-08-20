"use client";

import { motion } from "framer-motion";
import { tracks, type Bay } from "@/lib/tracks";
import { site } from "@/lib/site";
import HexProof from "./HexProof";
import HexLED from "./HexLED";
import Terminal from "./Terminal";

export default function Hero({ bay }: { bay: Bay }) {
  if (bay === "frontend") return <Fe />;
  if (bay === "backend") return <Be />;
  return <Noc bay={bay === "ops" ? "ops" : "fullstack"} />;
}

function Noc({ bay }: { bay: "fullstack" | "ops" }) {
  const t = tracks[bay];
  const pipe =
    bay === "ops"
      ? ["commit", "build", "image", "deploy", "healthy"]
      : ["interface", "api", "data", "billing", "ship"];
  const stats =
    bay === "ops"
      ? [
          ["uptime", "99.97%"],
          ["regions", "Lagos · IAD · AMS"],
          ["probes", "all green"],
          ["last ship", "preview → prod"],
        ]
      : [
          ["range", "UI → invoice"],
          ["products", "20+ shipped"],
          ["base", site.location],
          ["probes", "all green"],
        ];

  return (
    <section className="hero hero-ops" id="top">
      <div>
        <p className="eyebrow">
          <span className="code">LIVE</span>
          {t.role}
        </p>
        <h1 className="display">{t.headline}</h1>
        <p className="lede">{t.lede}</p>
        <div className="ops-pipe">
          {pipe.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 2.4, delay: i * 0.35, repeat: Infinity }}
            >
              {s}
            </motion.span>
          ))}
        </div>
        <div className="hero-cta">
          <a className="btn btn-accent" href="#work">
            topology
          </a>
          <a className="btn" href={`mailto:${site.email}`}>
            {bay === "ops" ? "page me" : site.email}
          </a>
        </div>
      </div>
      <aside className="ops-rail">
        <HexLED hint={bay === "ops" ? "tap rack serial" : "tap chassis serial"} />
        <dl>
          {stats.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd className={v === "all green" ? "ok" : undefined}>{v}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </section>
  );
}

function Fe() {
  const t = tracks.frontend;
  return (
    <section className="hero hero-fe" id="top">
      <p className="fe-meta">
        {site.location} · {t.role}
      </p>
      <h1 className="fe-name">
        <span>Ganiu</span>
        <span>Samuel</span>
      </h1>
      <p className="fe-line">{t.headline}</p>
      <div className="fe-marquee" aria-hidden>
        <div>
          {Array.from({ length: 8 }, (_, i) => (
            <span key={i}>interface · type · motion · systems · craft · </span>
          ))}
        </div>
      </div>
      <p className="lede fe-lede">{t.lede}</p>
      <HexProof />
      <div className="hero-cta">
        <a className="btn btn-accent" href="#work">
          selected work
        </a>
        <a className="btn" href={`mailto:${site.email}`}>
          write me
        </a>
      </div>
    </section>
  );
}

function Be() {
  return (
    <section className="hero hero-be" id="top">
      <Terminal />
    </section>
  );
}
