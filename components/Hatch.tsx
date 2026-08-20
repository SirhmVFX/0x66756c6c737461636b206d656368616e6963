"use client";

import { BAYS, BAY_PATH, tracks, type Bay } from "@/lib/tracks";
import Link from "next/link";

export default function Hatch({
  open,
  bay,
  copied,
  onOpen,
  onClose,
  onShare,
}: {
  open: boolean;
  bay: Bay;
  copied: boolean;
  onOpen: () => void;
  onClose: () => void;
  onShare: () => void;
}) {
  return (
    <>
      <button
        type="button"
        className="hatch-speck"
        aria-label="Service hatch"
        onClick={onOpen}
      />
      {open && (
        <div className="hatch" role="dialog" aria-label="Service hatch">
          <div className="hatch-scrim" onClick={onClose} />
          <div className="hatch-panel">
            <header>
              <span>service hatch</span>
              <button type="button" onClick={onClose} className="hatch-x">
                close
              </button>
            </header>
            <p className="hatch-note">Private. One URL per desk you send this to.</p>
            <div className="hatch-bays">
              {BAYS.map((id) => (
                <Link
                  key={id}
                  href={BAY_PATH[id]}
                  className={bay === id ? "on" : ""}
                  onClick={onClose}
                >
                  <small>{tracks[id].key}</small>
                  {tracks[id].role}
                </Link>
              ))}
            </div>
            <button type="button" className="btn btn-accent" onClick={onShare}>
              {copied ? "copied" : "copy this URL"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
