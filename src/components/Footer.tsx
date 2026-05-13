
const Footer = () => {
    return (
        <footer className="bg-[var(--charcoal)] text-[var(--bg)] px-6 md:px-12 py-24 md:py-48">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-12">
                            LET'S BUILD <br /> SOMETHING <br /> <span className="text-[var(--accent)]">MEANINGFUL.</span>
                        </h2>
                        <div className="flex gap-4">
                            <a href="sahilsingh107433@gmail.com" className="brutalist-border border-[var(--bg)] p-4 hover:bg-[var(--bg)] hover:text-[var(--charcoal)] transition-all">
                                email
                            </a>
                            <a href="#" className="brutalist-border border-[var(--bg)] p-4 hover:bg-[var(--bg)] hover:text-[var(--charcoal)] transition-all">
                                github
                            </a>
                            <a href="#" className="brutalist-border border-[var(--bg)] p-4 hover:bg-[var(--bg)] hover:text-[var(--charcoal)] transition-all">
                                inkedin
                            </a>
                            <a href="#" className="brutalist-border border-[var(--bg)] p-4 hover:bg-[var(--bg)] hover:text-[var(--charcoal)] transition-all">
                                X
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer