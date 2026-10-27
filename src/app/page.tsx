
import { Hero } from "@/components/Hero";
import { Contact } from "@/components/Contact";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { GitHubActivity } from "@/components/GitHubActivity";
import { GitHubStats } from "@/components/GitHubStats";
import { Experience } from "@/components/Experience";
import { Quote } from "@/components/Quote";
import { Footer } from "@/components/Footer";
import { StretchyFooter } from "@/components/ui/stretchy-footer";

export default function Home() {
  return (
    <>
      <main
        data-stretchy-page
        className="flex flex-col items-center min-h-screen pt-12 overflow-x-hidden"
      >
        <Hero />
        <Contact />
        <Projects />
        <TechStack />
        <Experience />
        <GitHubStats />
        <GitHubActivity />
        <Quote />
        <Footer />
      </main>

      <StretchyFooter
        windowScroll
        contentSelector="[data-stretchy-page]"
        maxStretch={280}
        blur={16}
        glow={0}
        colors={[
          "#F1FCFD", "#CAF0F8", "#90E0EF", "#48CAE4", "#00B4D8", "#0096C7", "#0077B6", "#3869A8", "#3739A9",]}
      />
    </>
  );
}
