# Typography pairing review

The root layout already defines a shared typography system:
- Geist for the sans-serif body and UI text (`--font-sans`)
- Instrument Serif for display text (`--font-instrument`)
- JetBrains Mono for monospace text (`--font-jetbrains`)

The navbar previously loaded Inter independently for navigation labels, bypassing the shared sans token. The local Inter import and class usage have been removed so navigation inherits Geist, while the Instrument Serif logo and the existing global typography tokens remain unchanged.
