import { useState } from "react";

const EMAIL = "sahilsingh107433@gmail.com";

const links = [
    {
        label: "github",
        href: "https://github.com/sadSanta-07",
    },
    {
        label: "linkedin",
        href: "https://www.linkedin.com/in/sahilsingh107433/",
    },
    {
        label: "x",
        href: "https://x.com/YOUR_USERNAME",
    },
];

const Footer = () => {
    const [copied, setCopied] = useState(false);

    const handleEmail = async () => {
        await navigator.clipboard.writeText(EMAIL);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <footer
            id="contact"
            className="
        w-full
        bg-[var(--charcoal)]
        text-[var(--bg)]
        py-16 md:py-20
        px-6 sm:px-8 md:px-12 lg:px-16
      "
        >
            <div className="max-w-7xl mx-auto">
                {/* TOP */}
                <div className="flex justify-between items-baseline flex-wrap gap-4">
                    <h2>
                        <div className=" text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none uppercase">
                            LET&apos;S BUILD SOMETHING <br />
                            <span className="text-[var(--accent)]">
                                MEANINGFUL.
                            </span>
                        </div>
                    </h2>
                    <span
                        className="
              font-mono
              text-sm
              text-[var(--muted)]
            "
                    >
                        {new Date().getFullYear()}
                    </span>
                </div>

                {/* DIVIDER */}
                <div className="w-full border-t border-[var(--muted)] opacity-30 my-8" />

                <div className="flex justify-between items-start flex-wrap gap-8">

                    <div className="flex flex-wrap gap-3">

                        <button
                            onClick={handleEmail}
                            className=" font-mono text-sm lowercase border border-[var(--muted)] px-4 py-2 transition-all duration-150 hover:border-[var(--bg)]
              "
                        >
                            {copied ? "copied!" : "email"}
                        </button>

                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono text-sm lowercase border border-[var(--muted)] px-4 py-2 transition-all duration-150 hover:border-[var(--bg)]"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="text-left md:text-right">

                        <div
                            className="
                font-mono
                text-xs
                text-[var(--muted)]
                mt-1
              "
                        >
                            Sahil Singh · KIIT · 2028
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;