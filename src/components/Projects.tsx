import { Instrument_Serif } from "next/font/google";
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
      className="w-full max-w-200 mx-auto border-x border-dashed border-border"
    >
      {/* Heading */}
      <div className="px-2 pt-5 pb-5 sm:px-4">
        <h2
          className={`${instrumentSerif.className} text-4xl leading-none text-primary`}
        >
          Projects
        </h2>
      </div>

      {/* Full-width divider */}
      <div className="relative h-px">
        <div className="absolute left-1/2 top-0 w-screen -translate-x-1/2 border-t border-dashed border-border" />
      </div>

      <div>
        {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, row) => {
          const rowProjects = projects.slice(row * 2, row * 2 + 2);

          return (
            <div key={row}>
              <div className="grid grid-cols-1 gap-10 px-2 py-8 sm:px-4 md:grid-cols-2 md:gap-6">
                {rowProjects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>

              {row < Math.ceil(projects.length / 2) - 1 && (
                <div className="relative h-px">
                  <div className="absolute left-1/2 top-0 w-screen -translate-x-1/2 border-t border-dashed border-border" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Full-width divider */}
      <div className="relative h-px">
        <div className="absolute left-1/2 top-0 w-screen -translate-x-1/2 border-t border-dashed border-border" />
      </div>
    </section>
  );
}