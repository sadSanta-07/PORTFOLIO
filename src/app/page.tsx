import { Hero } from "@/components/Hero";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen pt-12 overflow-x-hidden">
      <Hero />
      <Contact />
    </main>
  );
}