import { skills } from "../data";
import { SectionHeader } from "./ui/SectionHeader";

const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6 sm:px-8 md:px-10 lg:px-16">
      <section id="skills" className="mb-32 md:mb-55">
        <SectionHeader title="Skills & Tools" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-mono text-xs font-black uppercase tracking-widest mb-6 py-2 border-y border-[var(--muted)] text-[var(--accent)]">
                {category}
              </h4>

              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="
                      brutalist-border
                      px-3 py-1.5
                      font-mono text-xs font-bold
                      bg-[var(--bg)] text-black
                      brutalist-shadow-sm
                      transition-all duration-200
                      hover:bg-[var(--charcoal)] hover:text-[var(--bg)]
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;