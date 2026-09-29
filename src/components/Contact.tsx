import Link from "next/link";
import { Instrument_Serif } from "next/font/google";
import { PiGithubLogo } from "react-icons/pi";
import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import {
    Mail,
    Paperclip,
    ArrowUpRight,
} from "lucide-react";

const instrumentSerif = Instrument_Serif({
    weight: "400",
    subsets: ["latin"],
});

const links = [
    {
        name: "GitHub",
        href: "https://github.com/sadSanta-07",
        icon: PiGithubLogo,
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/sahilsingh107433",
        icon: FiLinkedin,
    },
    {
        name: "Twitter",
        href: "https://x.com/sahilYapsss",
        icon: FaXTwitter,
    },
    {
        name: "Mail",
        href: "mailto:sahilsingh107433@gmail.com",
        icon: Mail,
    },
    {
        name: "Resume",
        href: "https://drive.google.com/file/d/1QK_85miZxc-v16yfxMQAq43bwdoZPQdd/view?usp=sharing",
        icon: Paperclip,
    },
];

export function Contact() {
    return (
        <section className="w-full max-w-200 mx-auto border-x border-dashed border-border">
            {/* Heading */}
            <div className="px-2 pt-0 pb-2 sm:px-4">
                <h2
                    className={`${instrumentSerif.className} text-4xl leading-none text-primary`}
                >
                    Contact
                </h2>
            </div>

            {/* Full-width dashed divider */}
            <div className="relative h-px">
                <div className="absolute left-1/2 top-0 w-screen -translate-x-1/2 border-t border-dashed border-border" />
            </div>

            {/* Links */}
            <div className="grid grid-cols-5">
                {links.map((link) => {
                    const Icon = link.icon;

                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            target={
                                link.href.startsWith("mailto:")
                                    ? undefined
                                    : "_blank"
                            }
                            rel={
                                link.href.startsWith("mailto:")
                                    ? undefined
                                    : "noopener noreferrer"
                            }
                            className="group flex items-center justify-center gap-3 border-b border-r border-dashed border-border px-2 py-2 transition-colors hover:bg-surface/60 last:border-r-0 sm:justify-start sm:px-3"
                        >
                            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-border bg-background">
                                <Icon className="size-6" />
                            </span>

                            <span className="hidden min-w-0 items-center gap-2 text-[17px] text-primary sm:flex">
                                <span>{link.name}</span>

                                <ArrowUpRight
                                    className="size-4 shrink-0 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    strokeWidth={1.8}
                                />
                            </span>
                        </Link>
                    );
                })}
            </div>

            {/* Stripe */}
            <div className="stripe-divider relative left-1/2 h-6 w-screen -translate-x-1/2 border border-dashed border-border" />
        </section>
    );
}