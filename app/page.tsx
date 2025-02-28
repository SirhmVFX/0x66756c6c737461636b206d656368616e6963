import { projects } from "@/data/projects";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex items-center gap-4">
        <p>0x66756c6c737461636b206d656368616e6963</p>

        <button>.</button>
      </div>

      <h1>Ganiu Samuel</h1>



      <div>
        <h1>Projects</h1>

        <div>
        {projects.map((p) => (
        <div key={p.id}>
        <h1>{p.title}</h1>
        </div>
        ))}
        </div>
      </div>
    </div>
  );
}
