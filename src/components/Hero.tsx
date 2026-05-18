import { Badge, BrutalButton } from './ui/Primitives';
import { motion } from 'motion/react';
import { FlipWords } from "./ui/flip-words";
import MEOW from "../assets/MEOW.jpg";

const words = ["cool", "working", "intelligent"];

export const Hero = () => {
    return (
        <section className="relative overflow-hidden pt-24 pb-16 md:pt-40 md:pb-24">

            <div className="max-w-7xl mx-auto px-5 sm:px-6">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    <div className="lg:col-span-8">

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}>
                            <div className="flex flex-wrap gap-2 mb-5">

                                <Badge className="border border-[var(--muted)]">
                                    WEB ENGINEER
                                </Badge>

                                <Badge className="border border-[var(--muted)]">
                                    AI ENGINEER
                                </Badge>

                            </div>

                            <h1
                                className=" font-display font-bold tracking-tight leading-[0.9] mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-6xl
                                "
                            >
                                I turn ideas into <br />

                                <span>
                                    <FlipWords
                                        words={words}
                                        className="text-[var(--accent)] italic block"
                                    />
                                    <br />
                                </span>

                                software.
                            </h1>

                            <p
                                className=" font-mono text-sm sm:text-base text-[var(--muted)] leading-relaxed max-w-2xl
                                "
                            >
                                3rd Year CSE(AI-ML) at · Full-Stack Developer & AI Builder
                            </p>
                            <div className="flex flex-wrap gap-4 pt-8">

                                <BrutalButton
                                    href="#projects"
                                    className="px-5 py-3"
                                    filled
                                >
                                    VIEW MY WORK ↓
                                </BrutalButton>

                                <BrutalButton
                                    href="/Sahil_Singh_Resume.pdf"
                                    className="px-5 py-3"
                                >
                                    VIEW RESUME
                                </BrutalButton>

                            </div>

                            <div className="mt-16 md:mt-20">
                                <div className="w-full md:w-[600px] border-t border-[var(--muted)] mb-8"></div>
                                <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6 sm:gap-8">                                    <div>
                                    <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--charcoal)] mb-2">
                                        CURRENTLY
                                    </p>
                                    <p className="font-sans font-medium text-sm sm:text-base">
                                        Building RAG Frameworks
                                    </p>
                                </div>
                                    <div>
                                        <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--charcoal)] mb-2">
                                            LOCATION
                                        </p>
                                        <p className="font-sans font-medium text-sm sm:text-base">
                                            India, IN
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </div>

                    <div className="hidden lg:block lg:col-span-4 mt-8">

                        <BrutalButton>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >

                                <img
                                    src={MEOW}
                                    alt="me"
                                    className=" w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration "
                                />
                            </motion.div>
                        </BrutalButton>

                    </div>

                </div>
            </div>
        </section>
    )
}