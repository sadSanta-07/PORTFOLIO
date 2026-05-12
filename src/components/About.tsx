export const About = () => {
    return (
        <section id="about" className="py-20 md:py-32 border-t border">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">

                        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter uppercase">
                            THE <br /> PHILOSOPHY
                        </h2>

                    </div>
                    <div className="lg:col-span-8">
                            <div className="space-y-8 max-w-3xl">
                                <p className="font-sans text-lg text-[var(--charcoal)] leading-relaxed">
                                    3rd-year CSE(AI-ML) student at KIIT. I build full-stack apps,
                                    experiment with AI systems, and spend most of my time turning random ideas into real products.
                                </p>
                                <p className="font-sans text-lg text-[var(--charcoal)] leading-relaxed">
                                    Currently deep into machine learning, backend engineering,
                                    and modern web experiences. Big on hackathons, brutalist design, and shipping fast.
                                </p>
                                <p className="font-sans text-lg text-[var(--charcoal)] leading-relaxed">
                                    When I’m not coding, I’m probably rebuilding my portfolio for the 47th time, optimizing something that was already fast enough,
                                    or convincing myself one more side project is a good idea, exploring my elite music genre, or
                                    overthinking UI details at 2am.
                                </p>
                            </div>

                        {/* <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                                </div>
                                <div className="border-l-2 border-brand-red pl-6 py-2">
                                    <h4 className="font-display font-bold text-xl mb-4 uppercase">AI/ML Focus</h4>
                                    <p className="font-sans text-sm text-brand-charcoal/60">
                                        Fine-tuning transformer models, implementing Retrieval Augmented Generation (RAG), and building autonomous agent workflows.
                                    </p>
                                </div>
                                <div className="border-l-2 border-brand-charcoal pl-6 py-2">
                                    <h4 className="font-display font-bold text-xl mb-4 uppercase">Backend Engineering</h4>
                                    <p className="font-sans text-sm text-brand-charcoal/60">
                                        Designing robust APIs with Go and Node.js, managing PostgreSQL at scale, and orchestrating containers with Kubernetes.
                                    </p>
                                </div>
                            </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};
