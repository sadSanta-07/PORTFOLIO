import { BrutalButton } from './ui/Primitives';
import { motion } from 'motion/react';
import { FlipWords } from "./ui/flip-words";
import MEOW from "../assets/MEOW.jpg";

const words = ["COOL", "WORKING", "INTELLIGENT"];

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >

                            <h1 className="font-display text-4xl md:text-8xl lg:text-6xl font-bold tracking-tight leading-[0.9] mb-8">
                                I TURN IDEAS INTO <br />
                                <span >
                                    <FlipWords words={words}
                                        className="text-[var(--accent)] italic block" /> <br /></span> SOFTWARES.
                            </h1>

                            <p className="font-mono text-sm md:text-base text-[var(--muted)] leading-relaxed mb-10">                                
                                3rd Year CSE(AI-ML) at KIIT · Full-Stack Developer & AI Builder
                            </p>
                            <div className="flex flex-wrap gap-4">

                                <BrutalButton filled>
                                    VIEW MY WORK
                                </BrutalButton>

                                <BrutalButton>
                                    DOWNLOAD RESUME
                                </BrutalButton>

                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-4 hidden lg:block">
                        <BrutalButton>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src={MEOW}
                                    alt="me"
                                    className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-500"
                                />
                            </motion.div>
                        </BrutalButton>
                    </div>

                </div>
            </div>
        </section>
    )
}

