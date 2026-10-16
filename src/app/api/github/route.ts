
import { NextResponse } from "next/server";

const query = `
  query($from: DateTime!, $to: DateTime!) {
    user(login: "sadSanta-07") {
      pullRequests(first: 1) {
        totalCount
      }

      mergedPullRequests: pullRequests(states: MERGED, first: 1) {
        totalCount
      }

      issues(first: 1) {
        totalCount
      }

      repositories(privacy: PUBLIC, first: 1) {
        totalCount
      }

      contributionsCollection(from: $from, to: $to) {
        totalCommitContributions
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              contributionLevel
              color
            }
          }
          months {
            name
            firstDay
            totalWeeks
          }
        }
      }
    }
  }
`;

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: "GitHub token is not configured" },
      { status: 500 },
    );
  }

  const to = new Date();
  const from = new Date(to);
  from.setUTCFullYear(from.getUTCFullYear() - 1);

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          from: from.toISOString(),
          to: to.toISOString(),
        },
      }),
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok || data.errors || !data.data?.user) {
      console.error("GitHub API error:", data.errors ?? response.status);
      return NextResponse.json(
        { error: "Failed to fetch GitHub data" },
        { status: 502 },
      );
    }

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error) {
    console.error("GitHub request failed:", error);

    return NextResponse.json(
      { error: "Unable to reach GitHub" },
      { status: 502 },
    );
  }
}
