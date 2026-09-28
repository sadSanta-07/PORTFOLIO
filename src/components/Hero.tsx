import Image from "next/image";

export function Hero() {
    return (
        <>

            <section className="w-full max-w-[800px] mx-auto border-x border-dashed border-border px-2 sm:px-6 md:px-2 py-1 flex flex-col gap-2 relative">

                {/* Banner GIF Container */}
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

                {/* dashed grid line */}
                <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 w-screen border-b border-dashed border-border pointer-events-none z-[-1]"></div>

                <div className="mt-4 text-muted text-sm">
                    Profile Info Area
                </div>

            </section>
        </>
    );
}