import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      <nav className="fixed top-0 z-50 w-full border-b-2 border-[var(--charcoal)] bg-[var(--bg)]">
        
        <div className="flex h-16 items-center justify-between px-6">
          <a
            href="#"
            className="font-display text-xl font-bold tracking-tighter text-[var(--text)]"
          >
            SAHIL SINGH
            <span className="text-[var(--accent)]">.</span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[var(--text)] transition-all duration-200 hover:text-[var(--accent)]"
          >
            {isOpen ? <X size={36} /> : <Menu size={32} />}
          </button>

        </div>
      </nav>

      <div
        className={`
          fixed left-0 top-16 z-40 w-full
          border-b-2 border-[var(--charcoal)]
          bg-[var(--bg)]
          transition-all duration-300 ease-in-out

          ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }
        `}
      >
        
        <div className="flex flex-col gap-6 p-6">

          <a
            href="#"
            className="font-display text-5xl font-bold tracking-tight text-[var(--text)] transition-colors hover:text-[var(--accent)]"
          >
            ghar
          </a>

          <a
            href="#"
            className="font-display text-5xl font-bold tracking-tight text-[var(--text)] transition-colors hover:text-[var(--accent)]"
          >
            kaam
          </a>

          <a
            href="#"
            className="font-display text-5xl font-bold tracking-tight text-[var(--text)] transition-colors hover:text-[var(--accent)]"
          >
           mere baare me 
          </a>

          <a
            href="#"
            className="font-display text-5xl font-bold tracking-tight text-[var(--text)] transition-colors hover:text-[var(--accent)]"
          >
            pata  
          </a>

        </div>
      </div>
    </>
  );
};