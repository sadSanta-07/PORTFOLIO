"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiSpotify } from "react-icons/si";

type Track = {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  albumArt?: string;
  url?: string;
};

export function NowPlaying() {
  const [track, setTrack] = useState<Track | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch("/api/now-playing");
        const data = await res.json();
        setTrack(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 20_000); // Check every 20s
    return () => clearInterval(interval);
  }, []);

  if (loading || !track || !track.title) return null;

  return (
    <Link
      href={track.url || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-border/50 bg-background/40 px-3 py-1.5 text-[12.5px] text-muted-foreground transition-all duration-200 hover:bg-surface hover:text-foreground"
    >
      <div className="relative flex items-center justify-center">
        <SiSpotify className={`size-4 ${track.isPlaying ? "text-[#1DB954]" : "text-muted-foreground"}`} />
        {track.isPlaying && (
          <span className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-[#1DB954] animate-ping" />
        )}
      </div>

      {track.albumArt && (
        <div className="relative size-4 overflow-hidden rounded-full shrink-0">
          <Image src={track.albumArt} alt={track.title} fill className="object-cover" />
        </div>
      )}

      <div className="truncate max-w-[220px] sm:max-w-[300px]">
        <span className="font-medium text-foreground">{track.title}</span>
        <span className="mx-1 text-muted-foreground">·</span>
        <span className="text-muted-foreground">{track.artist}</span>
      </div>

      <span className="text-[11px] text-muted-foreground/70 shrink-0">
        {track.isPlaying ? "Listening now" : "Last played"}
      </span>
    </Link>
  );
}