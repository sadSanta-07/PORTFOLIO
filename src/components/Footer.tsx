import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export function Footer() {
  return (
    <>
      {/* Divider between quote and footer */}
      <div className="relative left-1/2 h-px w-screen -translate-x-1/2 border-t border-dashed border-border" />

      <footer
        className={`
          ${inter.className}
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
          text-center
          text-[15px]
          leading-relaxed
          text-muted
          sm:py-14
        `}
      >
        <p>
          Designed &amp; Developed by{" "}
          <span className="font-semibold text-primary">
            Sahil
          </span>
        </p>

        <p className="mt-2">
          © 2026 All rights reserved.
        </p>
      </footer>
    </>
  );
}