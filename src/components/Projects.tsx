import { Instrument_Serif } from "next/font/google";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
});

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-200 border-x border-dashed border-border"
    >
      <div className="flex items-center justify-between px-4 py-5 sm:px-5">
        <h2
          className={`${instrumentSerif.className} text-4xl leading-none text-primary`}
        >
          Projects
        </h2>

        <Link
          href="https://github.com/sadSanta-07"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative hidden h-9 items-center rounded-xl border-2 border-blue-300 bg-blue-50 px-4 text-[13px] font-semibold text-blue-900 shadow-[0_4px_0_#9bb8ff] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_5px_0_#9bb8ff] active:translate-y-1 active:shadow-[0_1px_0_#9bb8ff] sm:inline-flex"
        >
          VIEW MORE
        </Link>
      </div>

      <div className="relative h-px">
        <div className="absolute left-1/2 top-0 w-screen -translate-x-1/2 border-t border-dashed border-border" />
      </div>

      <div className="px-4 sm:px-5">
        {projects.map((project, index) => (
          <div key={project.title}>
            <ProjectCard project={project} />

            {index < projects.length - 1 && (
              <div className="relative h-px">
                <div className="absolute left-1/2 top-0 w-screen -translate-x-1/2 border-t border-dashed border-border" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="relative h-px">
        <div className="stripe-divider absolute left-1/2 h-6 w-screen -translate-x-1/2 border-y border-dashed border-border" />
      </div>
    </section>
  );
}