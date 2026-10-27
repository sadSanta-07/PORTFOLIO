import type { Metadata } from "next";
import { Instrument_Serif, JetBrains_Mono, Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import { BottomBlur } from "@/components/ui/EdgeBlur";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const siteUrl = "https://sahilsingh.is-a.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sahil Singh — Software Developer, AI & Systems",
    template: "%s | Sahil Singh",
  },
  description:
    "Sahil Singh is a computer science student at KIIT building open-source developer tools, AI agents, distributed systems, and full-stack products. Explore projects, experience, and technical work.",
  applicationName: "Sahil Singh Portfolio",
  verification: {
    google: "Dw_9qn6Ods2HFgF3DqvpFR7j1uAwIyQNrhLNCV4ZfEA",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Sahil Singh",
    title: "Sahil Singh — Software Developer, AI & Systems",
    description:
      "Portfolio of Sahil Singh: open-source developer tools, AI agents, distributed systems, and full-stack projects.",
    images: [
      {
        url: "/pfp1.png",
        width: 1200,
        height: 1200,
        alt: "Sahil Singh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Singh — Software Developer, AI & Systems",
    description:
      "Explore Sahil Singh's projects in developer tools, AI agents, distributed systems, and full-stack development.",
    images: ["/pfp1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body className={`${instrumentSerif.variable} ${jetbrainsMono.variable} antialiased selection:bg-neutral-800 selection:text-white dark:selection:bg-neutral-200 dark:selection:text-black`}>
        <ThemeProvider>
          <SmoothScroll>
            <Navbar />
            {children}
            <BottomBlur />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
