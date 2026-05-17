import { achievementSections } from "../data";


export default function Achievements() {
    return (
        <section className="w-full font-mono tracking-tight py-10">

            <div className="max-w-6xl mx-auto px-6">


                <div className="mb-16">
                    <p
                        className=" uppercase tracking-[0.25em] text-sm text-[var(--muted)]">
                        Achievements & Misc
                    </p>

                    <div className="w-full h-[2px] bg-[var(--charcoal)] mt-4" />
                </div>


                <div className="space-y-20">

                    {achievementSections.map((section) => (

                        <div
                            key={section.category}
                            className=" grid md:grid-cols-[180px_1fr] gap-10 border-b border-[var(--muted)] pb-20">
                            <div>
                                <p
                                    className=" uppercase text-xs tracking-[0.18em] text-[var(--muted)]">
                                    {section.category}
                                </p>
                            </div>
                            <div>
                                {section.items.map((item) => (
                                    <div
                                        key={item.title}
                                        className=" flex justify-between gap-6 py-6 border-b border-[var(--muted)]">

                                        <div>
                                            <h3 className="font-semibold text-lg">
                                                {item.title}
                                            </h3>
                                            <p
                                                className=" text-sm text-zinc-500 mt-2 leading-relaxed max-w-3xl font-mono tracking-[-0.03em]">
                                                {item.detail}
                                            </p>
                                        </div>
                                        {item.badge && (
                                            <div
                                                className=" border-2 border-[var(--muted)] px-3 py-1 text-xs h-fit rotate-[-3deg] 
                                                            uppercase tracking-wider transition-all duration-300 hover:rotate-0 
                                                            hover:border-[var(--accent)] hover:text--[var(--accent)]"
                                            >
                                                {item.badge}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}