"use client";

import { useEffect } from "react";
import { Search, Compass, ChevronRight, Globe, Mail, Sun, ExternalLink } from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      <div className="fixed left-1/2 top-[15%] z-[101] w-full max-w-[600px] -translate-x-1/2 rounded-xl border border-border bg-[#0a0a0a] shadow-2xl overflow-hidden flex flex-col max-h-[70vh]">
        
        {/* Search Input */}
        <div className="flex items-center px-4 border-b border-border/50">
          <Search size={18} className="text-neutral-400 mr-3" />
          <input 
            autoFocus
            type="text" 
            placeholder="Search pages, projects, or actions..." 
            className="flex-1 h-14 bg-transparent text-white outline-none placeholder:text-neutral-500 text-[15px]"
          />
          <kbd className="hidden sm:inline-block px-2 py-1 text-[10px] text-neutral-400 bg-neutral-800/50 border border-border rounded font-mono">
            ESC
          </kbd>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          
          {/* Group 1: Navigation */}
          <div className="mb-4">
            <div className="px-2 py-2 text-xs font-semibold text-neutral-500 tracking-wider">
              NAVIGATION
            </div>
            <Item icon={<Compass size={18} />} title="Go to Home" subtitle="Overview, highlights, and recent code" />
            <Item icon={<ChevronRight size={18} />} title="Go to About" subtitle="Bio, experience, and full skills matrix" active />
            <Item icon={<Globe size={18} />} title="Go to Projects" subtitle="Browse all projects & live demos" />
            <Item icon={<Mail size={18} />} title="Go to Contact" subtitle="Social links, email, and contact form" />
          </div>

          {/* Group 2: Projects */}
          <div className="mb-4">
            <div className="px-2 py-2 text-xs font-semibold text-neutral-500 tracking-wider">
              PROJECTS
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-border/50 bg-[#0a0a0a]">
          <div className="font-[family:var(--font-jetbrains)] text-[9px] text-[#737373] flex items-center gap-3">
            <span>↑↓ navigate</span>
            <span>•</span>
            <span>Enter select</span>
          </div>
          <div className="font-[family:var(--font-jetbrains)] text-[9px] text-[#737373] bg-neutral-800/50 px-1.5 py-0.5 rounded">
            ESC close
          </div>
        </div>
        
      </div>
    </>
  );
}

function Item({ icon, title, subtitle, active = false, external = false }: any) {
  return (
    <div className={`flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer transition-colors ${active ? 'bg-neutral-800/50' : 'hover:bg-neutral-800/30'}`}>
      <div className="text-neutral-400">{icon}</div>
      <div className="flex-1 flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold text-white">{title}</div>
          <div className="text-xs text-neutral-400 mt-0.5">{subtitle}</div>
        </div>
        {external && <ExternalLink size={14} className="text-neutral-500" />}
      </div>
    </div>
  );
}