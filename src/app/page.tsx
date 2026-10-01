import { Hero } from "@/components/Hero";
import { Contact } from "@/components/Contact";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { GitHubActivity } from "@/components/GitHubActivity";
import { Experience } from "@/components/Experience";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen pt-12 overflow-x-hidden">
      <Hero />
      <Contact />
      <Projects />
      <TechStack />
      <GitHubActivity />
      < Experience />
    </main>
  );
}