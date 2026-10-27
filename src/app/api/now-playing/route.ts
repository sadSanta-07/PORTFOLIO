import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.LASTFM_API_KEY;
  const username = process.env.LASTFM_USERNAME;

  if (!apiKey || !username) {
    return NextResponse.json({ isPlaying: false, error: "Missing config" }, { status: 500 });
  }

  try {
    const res = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`,
      { next: { revalidate: 15 } } // Refresh cache every 15 seconds
    );

    if (!res.ok) throw new Error("Failed to fetch Last.fm data");

    const data = await res.json();
    const track = data?.recenttracks?.track?.[0];

    if (!track) {
      return NextResponse.json({ isPlaying: false });
    }

    const isPlaying = track["@attr"]?.nowplaying === "true";
    const title = track.name;
    const artist = track.artist["#text"];
    const albumArt = track.image?.find((img: { size: string }) => img.size === "medium")?.["#text"] || "";
    const url = track.url;

    return NextResponse.json({
      isPlaying,
      title,
      artist,
      albumArt,
      url,
    });
  } catch {
    return NextResponse.json({ isPlaying: false }, { status: 500 });
  }
}