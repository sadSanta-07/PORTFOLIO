"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sun, Moon, Music, GraduationCap } from "lucide-react";
import { SiSpotify } from "react-icons/si";

export type Profile = {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  bio: string;
  location: string;
  status: string;
  availability: string;
  timezone: string;
  email: string;
  calendarUrl: string;
};

type Track = {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  albumArt?: string;
  url?: string;
};

export function HoverCardGroup({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function Mention({ profile }: { profile: Profile }) {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");
  const [isDay, setIsDay] = useState(true);
  const [track, setTrack] = useState<Track | null>(null);
  const reduceMotion = useReducedMotion();

  // Time & Weather Logic
  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      setTime(
        new Intl.DateTimeFormat("en-IN", {
          timeZone: profile.timezone,
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).format(date)
      );

      const hourStr = new Intl.DateTimeFormat("en-IN", {
        timeZone: profile.timezone,
        hour: "numeric",
        hour12: false,
      }).format(date);

      const hour = parseInt(hourStr, 10);
      setIsDay(hour >= 6 && hour < 18);
    };

    updateTime();
    const timer = setInterval(updateTime, 30_000);
    return () => clearInterval(timer);
  }, [profile.timezone]);

  // Music Logic
  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch("/api/now-playing");
        if (!res.ok) return;
        const data = await res.json();
        setTrack(data);
      } catch {
        // Silently ignore if API is not setup yet
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 20_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative inline-block align-middle ${open ? "z-50" : "z-10"}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
        }
      }}
    >
      {/* Compact pill: stays in normal flow */}
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="relative z-0 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border/50 bg-background px-3.5 py-2 text-[13px] text-foreground shadow-sm dark:bg-[#0a0a0a]"
      >
        <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
        <span className="font-medium">{profile.location}</span>
        <span className="text-muted-foreground">·</span>
        <span className="flex items-center gap-1 text-muted-foreground">
          {isDay ? (
            <Sun className="size-3.5 text-orange-400" />
          ) : (
            <Moon className="size-3.5 text-blue-400" />
          )}
          {time || "Loading..."}
        </span>
      </button>

      {/* Expanded overlay card */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="hover-card"
            initial={{ opacity: 0, y: -5, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -3, scale: 0.99 }}
            transition={{
              duration: reduceMotion ? 0 : 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: "top left" }}
            className="absolute left-0 top-0 z-[9999] w-[300px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-[22px] border border-border/60 bg-white text-foreground shadow-[0_12px_40px_rgba(0,0,0,0.14)] dark:bg-[#0a0a0a] dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)] isolate pointer-events-auto"
          >
            {/* Top Bar Button */}
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpen(false)}
              className="flex w-full items-center gap-2 whitespace-nowrap px-3.5 py-2.5 text-[13px]"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
              <span className="font-medium">{profile.location}</span>
              <span className="text-muted-foreground">·</span>
              <span className="flex items-center gap-1 text-muted-foreground">
                {isDay ? (
                  <Sun className="size-3.5 text-orange-400" />
                ) : (
                  <Moon className="size-3.5 text-blue-400" />
                )}
                {time || "Loading..."}
              </span>
            </button>

            <div className="mx-3.5 h-px bg-border/60" />

            <div className="px-3.5 pb-3.5 pt-3">
              <div className="flex items-start gap-2.5">
                <GraduationCap className="mt-0.5 size-4 shrink-0 text-primary" />
                <div className="min-w-0">
                  <p className="text-[13px] font-medium leading-snug">
                    {profile.status}
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                    {profile.availability}
                  </p>
                </div>
              </div>

              {track?.title && (
                <Link
                  href="https://open.spotify.com/user/31ghkk4wpabtcvjqhu2gylzyhswe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-20 mt-3.5 flex items-center gap-2.5 rounded-xl border border-border/60 bg-black/[0.03] p-2 transition-colors hover:bg-black/[0.07] dark:bg-white/[0.04] dark:hover:bg-white/[0.08]"
                >
                  <div className="relative size-9 shrink-0 overflow-hidden rounded-md bg-muted/30">
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
                        className={`size-3 shrink-0 ${track.isPlaying ? "text-[#1DB954]" : "text-muted-foreground"
                          }`}
                      />
                      <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                        {track.isPlaying ? "Listening now" : "Last played"}
                      </span>
                    </div>

                    <p className="mt-0.5 truncate text-[12px] font-medium leading-tight">
                      {track.title}
                    </p>

                    <p className="truncate text-[11px] text-muted-foreground">
                      {track.artist}
                    </p>
                  </div>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 