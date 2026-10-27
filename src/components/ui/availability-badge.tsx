"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sun, Moon, Music, GraduationCap } from "lucide-react";
import { SiSpotify } from "react-icons/si";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Track = {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  albumArt?: string;
  url?: string;
};

interface AvailabilityBadgeProps {
  timeZone?: string;
  city?: string;
  statusText?: string;
  className?: string;
}

export function AvailabilityBadge({
  timeZone = "Asia/Kolkata",
  city = "Bhubaneswar, India",
  statusText = "Open to collaboration & interesting projects.",
  className,
}: AvailabilityBadgeProps) {
  const [open, setOpen] = useState(false);
  const [timeStr, setTimeStr] = useState<string>("");
  const [isDay, setIsDay] = useState(true);
  const [track, setTrack] = useState<Track | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update live clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-IN", {
          timeZone,
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });
        setTimeStr(formatter.format(now));

        const hourFormatter = new Intl.DateTimeFormat("en-IN", {
          timeZone,
          hour: "numeric",
          hour12: false,
        });
        const hour = parseInt(hourFormatter.format(now), 10);
        setIsDay(hour >= 6 && hour < 18);
      } catch {
        setTimeStr("1:30 AM");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 15000);
    return () => clearInterval(interval);
  }, [timeZone]);

  // Fetch Spotify music
  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch("/api/now-playing");
        if (!res.ok) return;
        const data = await res.json();
        setTrack(data);
      } catch {
        // Silently ignore if offline
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 20000);
    return () => clearInterval(interval);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handlePointerEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handlePointerLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative inline-block select-none", className)}
      onMouseEnter={handlePointerEnter}
      onMouseLeave={handlePointerLeave}
    >
      {/* Trigger pill (solid green dot, no pulsating ping animation) */}
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "group flex h-8 items-center gap-2 rounded-full border border-border bg-surface px-3 text-[13px] font-medium text-primary shadow-sm transition-all duration-200 hover:border-blue-400/50 hover:shadow-md active:scale-95",
          open && "border-blue-500/50 ring-2 ring-blue-500/10",
        )}
      >
        {/* Solid emerald dot (no ping) */}
        <span className="size-2 shrink-0 rounded-full bg-emerald-500" />

        {/* Location */}
        <span className="whitespace-nowrap font-medium text-primary">
          {city}
        </span>

        {/* Separator dot */}
        <span className="text-muted/60" aria-hidden>
          ·
        </span>

        {/* Weather / Time */}
        <span className="flex items-center gap-1.5 font-mono text-xs text-muted tabular-nums">
          {isDay ? (
            <Sun className="size-3.5 text-amber-500" />
          ) : (
            <Moon className="size-3.5 text-blue-400" />
          )}
          <span>{timeStr || "Loading..."}</span>
        </span>
      </button>

      {/* Expanded popover card on hover / click */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top left" }}
            className="absolute left-0 top-full z-50 mt-2 w-76 origin-top-left overflow-hidden rounded-2xl border border-border bg-surface p-3.5 text-primary shadow-[0_12px_36px_rgba(0,0,0,0.12)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.6)] sm:w-80"
          >
            {/* Status / Education */}
            <div className="flex items-start gap-2.5">
              <GraduationCap className="mt-0.5 size-4 shrink-0 text-primary" />
              <div className="min-w-0">
                <p className="text-[13px] font-semibold leading-tight text-primary">
                  B.Tech CSE (AI-ML) @ KIIT
                </p>
                <p className="mt-1 text-[12px] leading-relaxed text-muted">
                  {statusText}
                </p>
              </div>
            </div>

            {/* Time info */}
            <div className="mt-2.5 border-t border-border/50 pt-2 text-[11.5px] leading-relaxed text-muted">
              <p>
                Local time in{" "}
                <span className="font-medium text-primary">{city}</span> is{" "}
                <span className="font-mono font-medium text-primary">
                  {timeStr}
                </span>{" "}
                (IST · UTC+5:30).
              </p>
            </div>

            {/* Spotify Now Playing (The Song Thing) */}
            {track?.title && (
              <Link
                href={
                  track.url ||
                  "https://open.spotify.com/user/31ghkk4wpabtcvjqhu2gylzyhswe"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-20 mt-3 flex items-center gap-2.5 rounded-xl border border-border bg-background/50 p-2 transition-colors hover:bg-surface"
              >
                <div className="relative size-9 shrink-0 overflow-hidden rounded-lg bg-muted/20">
                  {track.albumArt ? (
                    <Image
                      src={track.albumArt}
                      alt={track.title}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <Music className="size-4 text-primary" />
                    </div>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <SiSpotify
                      className={`size-3 shrink-0 ${
                        track.isPlaying
                          ? "text-[#1DB954]"
                          : "text-muted"
                      }`}
                    />
                    <span className="text-[10px] font-medium uppercase tracking-wider text-muted">
                      {track.isPlaying ? "Listening now" : "Last played"}
                    </span>
                  </div>

                  <p className="mt-0.5 truncate text-[12px] font-medium leading-tight text-primary">
                    {track.title}
                  </p>

                  <p className="truncate text-[11px] text-muted">
                    {track.artist}
                  </p>
                </div>
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AvailabilityBadge;
