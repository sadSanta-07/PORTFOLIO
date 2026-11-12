"use client";

import { Instrument_Serif } from "next/font/google";
import { PiGithubLogo } from "react-icons/pi";
import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiGoogledocs } from "react-icons/si";
import { Mail } from "lucide-react";
import { SpotlightGrid, type Feature } from "@/components/ui/spotlight-card";

const instrumentSerif = Instrument_Serif({
    weight: "400",
    subsets: ["latin"],
});

const links: Feature[] = [
    {
        title: "Resume",
        text: "my stats, but in corporate language.",
        href: "https://drive.google.com/file/d/1x69uq1qAiGjYpMNSZISw6DXWoc-mDB4U/view",
        external: true,
        icon: <SiGoogledocs className="size-5" />,
    },
    {
        title: "Mail",
        text: "Say hello",
        href: "mailto:sahilsingh107433@gmail.com",
        icon: <Mail className="size-5" />,
    },
    {
        title: "GitHub",
        text: "build with me",
        href: "https://github.com/sadSanta-07",
        external: true,
        icon: <PiGithubLogo className="size-5" />,
    },
    {
        title: "LinkedIn",
        text: "let's connect professionally",
        href: "https://linkedin.com/in/sahilsingh107433",
        external: true,
        icon: <FiLinkedin className="size-5" />,
    },
    {
        title: "LeetCode",
        text: "one more problem before i touch grass.",
        href: "https://leetcode.com/u/FWNZUdUaXP/",
        external: true,
        icon: <SiLeetcode className="size-5" />,
    },
    {
        title: "Twitter",
        text: "larper, coz that's how i learn",
        href: "https://x.com/sahilYapsss",
        external: true,
        icon: <FaXTwitter className="size-5" />,
    },
];

export function Contact() {
    return (
        <section
            id="contact"
            className="mx-auto w-full max-w-200 border-x border-dashed border-border"
        >
            <div className="mb-2 px-2 pb-2 pt-0 sm:px-4">
                <h2
                    className={`${instrumentSerif.className} text-4xl leading-none text-primary`}
                >
                    Contact
                </h2>

                <p className="mt-2 text-sm text-muted">
                    Have something in mind? Let&apos;s make it happen.
                </p>
            </div>

            <div className="relative h-px">
                <div className="absolute left-1/2 top-0 w-screen -translate-x-1/2 border-t border-dashed border-border" />
            </div>

            <div className="p-2 sm:p-3">
                <SpotlightGrid features={links} />
            </div>

            <div className="stripe-divider relative left-1/2 h-6 w-screen -translate-x-1/2 border border-dashed border-border" />
        </section>
    );
}