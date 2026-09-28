"use client";

export function BottomBlur() {
  return (
    <div
      className="fixed bottom-0 left-0 w-full pointer-events-none z-40 h-16 md:h-24"
      style={{
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)",
      }}
    />
  );
}