import { NextResponse } from "next/server";

const query = `
  query {
    user(login: "sadSanta-07") {
      contributionsCollection {
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
    const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
        }),
    });

    const data = await response.json();

    return NextResponse.json(data);
}