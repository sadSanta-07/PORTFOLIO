
import { Inter, Caveat } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const signature = Caveat({
  subsets: ["latin"],
  weight: "500",
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
          py-10
          text-center
          sm:py-12
        `}
      >
        <div className="flex items-center justify-center gap-4">
          <span
            className={`
      ${signature.className}
      -rotate-3
      text-4xl
      leading-none
      tracking-tight
      text-primary
      transition-transform
      duration-300
      hover:rotate-0
    `}
            aria-label="Signed by Sahil"
          >
            Sahil
          </span>

          <p className="text-xs text-muted">
            © 2026 Sahil Singh.
          </p>
        </div>
      </footer>
    </>
  );
}
