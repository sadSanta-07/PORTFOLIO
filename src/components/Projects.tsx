import { motion } from "framer-motion";
import { projectData } from "../data";
import { RoughBorder } from "./ui/RoughShape";
import { BrutalCard } from "./ui/Primitives";

export const Projects = () => {
    return (
        <section
            id="projects"
            className="border-t-2 border-[var(--charcoal)] py-20 md:py-32"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* SECTION HEADER */}
                <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

                    <div className="max-w-2xl">

                        <h2 className="font-display text-5xl font-bold uppercase tracking-tighter md:text-7xl">
                            Selected
                            <br />
                            <span className="italic text-[var(--accent)]">
                                works
                            </span>
                        </h2>

                    </div>

                    <div className="flex items-center gap-4">

                        <div className="h-[2px] w-24 bg-[var(--charcoal)]" />

                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                            RECENT BUILDS
                        </p>

                    </div>

                </div>

                {/* PROJECT GRID */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

                    {projectData.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.08,
                                duration: 0.4,
                            }}
                            className="
                group
                relative bg-[var(--bg)] p-6
              "
                        >
                            <BrutalCard
                                className="
      group
      relative
      bg-[var(--bg)]
      p-6
    "
                            >
                                <RoughBorder />
                                {project.tag && (
                                    <div
                                        className="
      absolute
      right-6
      top-6
      rotate-[2deg]
      border-2
      border-[var(--charcoal)]
      bg-[var(--bg)]
      px-4
      py-2
      transition-all
      duration-200
      hover:rotate-0
    "
                                    >
                                        <p
                                            className="
        font-mono
        text-xs
        uppercase
        tracking-[0.15em]
        text-[var(--text)]
      "
                                        >
                                            {project.tag}
                                        </p>
                                    </div>
                                )}

                                {/* TITLE */}
                                <h3
                                    className="
mb-6 pr-44 pt-4
    font-display
    text-4xl
    font-bold
    tracking-tight
    text-[var(--text)]
    transition-colors
    duration-150
    group-hover:text-[var(--accent)]
  "
                                >
                                    {project.title}
                                </h3>

                                {/* STACK TAGS */}
                                <div className="mb-6 flex flex-wrap gap-2">

                                    {project.stacks.map((tag) => (
                                        <span
                                            key={tag}
                                            className="
        border
        border-[var(--charcoal)]
        px-3
        py-1
        font-mono
        text-[11px]
        uppercase
        tracking-[0.08em]
        text-[var(--text)]
      "
                                        >
                                            {tag}
                                        </span>
                                    ))}

                                </div>

                                {/* DESCRIPTION */}
                                <p
                                    className="
    mb-8
    max-w-xl
    font-sans
    text-[17px]
    leading-[1.8]
    text-[var(--text)]
  "
                                >
                                    {project.description}
                                </p>

                                {/* FOOTER */}
                                <div className="flex items-center gap-1">

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="
                                                font-mono
                                                text-xs
                                                uppercase
                                                tracking-[0.15em]
                                                text-[var(--accent)]
                                                transition-all
                                                duration-150
                                                hover:translate-x-[2px]
                                                "
                                    >
                                        github ↗
                                    </a>

                                </div>
                                </BrutalCard>

                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};