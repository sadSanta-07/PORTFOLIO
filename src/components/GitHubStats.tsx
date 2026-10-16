
"use client";

import { useEffect, useState } from "react";
import { Instrument_Serif } from "next/font/google";
import {
  GitPullRequest,
  CircleDot,
  GitCommitHorizontal,
  BookMarked,
  GitMerge,
} from "lucide-react";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
});

type GitHubStatsData = {
  pullRequests: { totalCount: number };
  mergedPullRequests: { totalCount: number };
  issues: { totalCount: number };
  repositories: { totalCount: number };
  contributionsCollection: {
    totalCommitContributions: number;
  };
};

export function GitHubStats() {
  const [stats, setStats] = useState<GitHubStatsData | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/github", { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("GitHub stats unavailable");
        return res.json();
      })
      .then((response) => {
        const user = response?.data?.user;
        if (!user) throw new Error("Missing GitHub user data");
        setStats(user);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Failed to load GitHub stats:", error);
        }
      });

    return () => controller.abort();
  }, []);

  const items = [
    {
      label: "Pull requests",
      value: stats?.pullRequests.totalCount,
      icon: GitPullRequest,
    },
    {
      label: "Merged PRs",
      value: stats?.mergedPullRequests.totalCount,
      icon: GitMerge,
    },
    {
      label: "Issues opened",
      value: stats?.issues.totalCount,
      icon: CircleDot,
    },
    {
      label: "Commits this year",
      value: stats?.contributionsCollection.totalCommitContributions,
      icon: GitCommitHorizontal,
    },
    {
      label: "Public repos",
      value: stats?.repositories.totalCount,
      icon: BookMarked,
    },
  ];

  return (
    <section className="mx-auto w-full max-w-200 border-x border-dashed border-border">
      <div className="px-2 py-5 sm:px-4">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h2
              className={`${instrumentSerif.className} text-4xl leading-none text-primary`}
            >
              GitHub at a glance
            </h2>
            <p className="mt-2 text-sm text-muted">
              A live snapshot of my open-source work.
            </p>
          </div>

          <a
            href="https://github.com/sadSanta-07"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 text-xs text-muted underline-offset-4 hover:text-primary hover:underline"
          >
            View profile ↗
          </a>
        </div>
      </div>

      <div className="relative h-px">
        <div className="absolute left-1/2 top-0 w-screen -translate-x-1/2 border-t border-dashed border-border" />
      </div>
      <div className="grid grid-cols-2 gap-2 px-2 py-4 sm:grid-cols-3 sm:px-4 lg:grid-cols-5">
        {items.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="flex min-w-0 flex-col rounded-lg border border-border bg-surface p-3"
          >
            <Icon
              size={16}
              strokeWidth={1.6}
              className="mb-3 text-muted"
              aria-hidden="true"
            />

            <div className="text-xl font-semibold tracking-tight text-primary sm:text-2xl">
              {value === undefined ? (
                <span className="inline-block h-6 w-10 animate-pulse rounded bg-border" />
              ) : (
                `${value.toLocaleString()}+`
              )}
            </div>

            <p className="mt-1 text-xs leading-snug text-muted">
              {label}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
