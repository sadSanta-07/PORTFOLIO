import Image from "next/image";
import Link from "next/link";
import { Instrument_Serif, Caveat } from "next/font/google";
import {
    BadgeCheck,
    GraduationCap,
    BriefcaseBusiness,
    MapPin,
    Mail,
} from "lucide-react";
import {
    SiReact,
    SiCplusplus,
    SiPython,
    SiNextdotjs,
    SiPostgresql,
    SiMongodb,
} from "react-icons/si";
import { RoughUnderline } from "@/components/ui/rough-underline";
import { LeafDecoration } from "@/components/ui/LeafDecoration";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });
const caveat = Caveat({
    subsets: ["latin"],
});

export function Hero() {
    return (
        <section className="w-full max-w-200 mx-auto border-x border-dashed border-border px-2 sm:px-6 md:px-2 py-1 flex flex-col relative pb-8">
            <LeafDecoration
        side="right"
        className="
            hidden
            lg:block
            top-[52%]
            w-56
            -scale-y-100
        "
    />
            <div className="w-full h-40 sm:h-54 overflow-hidden relative z-0 rounded-[2.5px]">
                <Image
                    src="/banner.gif"
                    alt="Profile Banner"
                    fill
                    priority
                    className="object-cover w-full h-full"
                    sizes="(max-width: 800px) 100vw, 800px"
                />
            </div>

            <div className="relative w-full mt-1 mb-4 sm:mt-2 sm:mb-5 h-px">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen border-b border-dashed border-border pointer-events-none z-[-1]"></div>
            </div>

            <div className="flex flex-row items-center gap-4 sm:gap-6 px-4 sm:px-6 z-10">
                <div className="relative shrink-0 rounded-xl border border-border bg-surface p-1 sm:p-1.25 shadow-sm">
                    <div className="relative size-20 sm:size-24 overflow-hidden rounded-lg bg-muted/20">
                        <Image
                            src="/pfp1.png"
                            alt="Sahil Singh"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 80px, 96px"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center min-w-0">
                    <h1 className={`${instrumentSerif.className} text-[26px] sm:text-4xl text-primary leading-tight`}>
                        <span className="block sm:inline">Hi, I&apos;m </span>

                        <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                            Sahil Singh
                            <BadgeCheck
                                size={22}
                                className="text-background fill-[#1d9bf0] sm:size-6"
                                strokeWidth={1.5}
                            />
                        </span>
                    </h1>

                    <div className={`${instrumentSerif.className} text-lg sm:text-xl text-muted mt-0.5 sm:mt-1`}>
                        21y • cs • ml
                    </div>
                </div>
            </div>

            <div className="mx-4 sm:mx-6 mt-6 py-4">
                {/* stripe divider */}
                <div className="stripe-divider relative left-1/2 h-6 w-screen -translate-x-1/2 border border-dashed border-border" />
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[15px] text-[#8c8c8c] leading-[1.8] font-sans antialiased">

                    <div className="flex items-center gap-3">
                        <GraduationCap className="size-4 shrink-0" />
                        <span>B.Tech CSE (AI-ML) · KIIT</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <BriefcaseBusiness className="size-4 shrink-0" />
                        <span>Open to collab</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <MapPin className="size-4 shrink-0" />
                        <span>Bhubaneswar, India</span>
                    </div>

                    <a
                        href="mailto:sahilsingh107433@gmail.com"
                        className="flex items-center gap-3 transition-colors hover:text-primary"
                    >
                        <Mail className="size-4 shrink-0" />
                        <span>sahilsingh107433@gmail.com</span>
                    </a>

                </div>
            </div>

            <div className="relative w-full mt-1  sm:mt-2  h-px">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen border-b border-dashed border-border pointer-events-none z-[-1]"></div>
            </div>

            {/* About */}

            <div
                id="about"
                className="mt-6 sm:mt-7 px-4 sm:px-6 z-10 w-full">
                <div className={`${caveat.className} text-5xl text-primary mb-3`}>
                    hello
                </div>
                <p className="text-[15px] sm:text-[16px] text-[#8c8c8c] leading-[1.8] font-sans antialiased">
                    I&apos;m a{" "}
                    <RoughUnderline>CS student</RoughUnderline> who likes
                    building things from the ground up, usually starting with a
                    question I probably shouldn&apos;t have asked. I build
                    scalable backends, experiment with distributed systems, and
                    spend my time turning random ideas into real products like
                    Myna and SantaClaw. I use{" "}
                    <span className="inline-flex items-center gap-1 text-primary font-medium">
                        <SiReact className="size-3.5" />
                        React
                    </span>{" "}
                    to build frontends,{" "}
                    <span className="inline-flex items-center gap-1 text-primary font-medium">
                        <SiCplusplus className="size-3.5" />
                        C++
                    </span>{" "}
                    and{" "}
                    <span className="inline-flex items-center gap-1 text-primary font-medium">
                        <SiPython className="size-3.5" />
                        Python
                    </span>{" "}
                    for high-performance engines,{" "}
                    <span className="inline-flex items-center gap-1 text-primary font-medium">
                        <SiNextdotjs className="size-3.5" />
                        Next.js
                    </span>{" "}
                    to create complete full-stack web apps, and modern
                    databases like{" "}
                    <span className="inline-flex items-center gap-1 text-primary font-medium">
                        <SiPostgresql className="size-3.5" />
                        PostgreSQL
                    </span>{" "}
                    and{" "}
                    <span className="inline-flex items-center gap-1 text-primary font-medium">
                        <SiMongodb className="size-3.5" />
                        MongoDB
                    </span>
                    .
                </p>

                <Link
                    href="https://cal.com/amsahil/15min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-5 inline-flex items-center gap-2 rounded-lg border border-border bg-background/40 px-3.5 py-1.5 text-sm font-normal text-primary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                    Book A Call!
                    <span className="text-[15px] leading-none animate-[spin_4s_linear_infinite] group-hover:animate-[spin_0.7s_linear_infinite]">
                        ✿
                    </span>
                </Link>

            </div>
            <div className="stripe-divider relative left-1/2 mt-8 h-6 w-screen -translate-x-1/2 border border-dashed border-border" />

        </section>
    );
}