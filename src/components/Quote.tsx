import { Inter } from "next/font/google";
import { LeafDecoration } from "@/components/ui/LeafDecoration";

const inter = Inter({
    subsets: ["latin"],
});

export function Quote() {
    return (
        <section
            className="
                relative
                mx-auto
                flex
                w-full
                max-w-200
                flex-col
                items-center
                border-x
                border-dashed
                border-border
                px-6
                py-12
                sm:py-16
            "
        >
            {/* Lower leaf */}
            <LeafDecoration
                side="left"
                className="
                    hidden
                    lg:block
                    top-1/2
                    w-56
                    -translate-y-1/2
                    scale-y-[-1]
                    rotate-180
                "
            />

            {/* Quote content */}
            <div className="relative z-10 flex w-full flex-col items-center justify-center">
                    {/* Quote mark */}
                    <svg
                        viewBox="0 0 448 512"
                        className="size-10 text-muted"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z" />
                    </svg>

                    {/* Quote */}
                    <p
                        className={`
                            ${inter.className}
                            mt-5
                            max-w-xl
                            px-2
                            text-center
                            text-[20px]
                            font-normal
                            italic
                            leading-relaxed
                            tracking-wide
                            text-primary
                            sm:text-[30px]`}>
                        “As long as I&apos;m alive, there are
                        infinite chances!”
                    </p>

                    {/* Author */}
                    <div className="mt-8 flex w-full items-center justify-center gap-4">
                        <span className="h-px w-10 bg-border" />

                        <span
                            className={`
                                ${inter.className}
                                text-[11px]
                                font-semibold
                                uppercase
                                tracking-[0.25em]
                                text-muted`}>
                            Monkey D. Luffy
                        </span>

                        <span className="h-px w-10 bg-border" />
                    </div>
                </div>
            </section>
    );
}