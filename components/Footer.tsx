import { SERIAL_HEX } from "@/lib/hex";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="foot">
      <span>{site.mark}</span>
      <code>{SERIAL_HEX}</code>
      <span>© {new Date().getFullYear()} {site.name}</span>
    </footer>
  );
}
