import { projects } from "@/data/projects";
import HeroSection from "@/components/Herosection";

export default function Home() {
  return (
    <main className="md:w-[1200px] mx-auto p-4 md:p-0">
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
