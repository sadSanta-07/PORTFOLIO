import Image from "next/image";

type LeafDecorationProps = {
    side: "left" | "right";
    className?: string;
};

export function LeafDecoration({
    side,
    className = "",
}: LeafDecorationProps) {
    return (
        <Image
            src="/leaf.svg"
            alt=""
            width={220}
            height={220}
            aria-hidden="true"
            className={`
                pointer-events-none
                absolute
                z-0
                object-contain
                opacity-90
                ${side === "right"
                    ? "right-[calc(50%-50vw)]"
                    : "left-[calc(50%-50vw)]"
                }
                ${className}
            `}
        />
    );
}