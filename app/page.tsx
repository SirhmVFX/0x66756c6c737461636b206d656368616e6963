import { projects } from "@/data/projects";
import HeroSection from "@/components/Herosection";

export default function Home() {
  return (
    <main className="w-[1200px] mx-auto">
      <HeroSection />
     



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
    </main>
  );
}
