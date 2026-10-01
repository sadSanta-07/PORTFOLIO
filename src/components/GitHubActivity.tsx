"use client";

import { useEffect, useRef, useState } from "react";

import { Instrument_Serif } from "next/font/google";

import {
  ActivityCalendar,
  type Activity,
} from "react-activity-calendar";

import "react-activity-calendar/tooltips.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
});

type ContributionDay = {
  contributionCount: number;
  date: string;
  contributionLevel: string;
  color: string;
};

type ContributionWeek = {
  contributionDays: ContributionDay[];
};

type ContributionCalendar = {
  totalContributions: number;
  weeks: ContributionWeek[];
};

export function GitHubActivity() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [totalContributions, setTotalContributions] =
    useState(0);

  const [loading, setLoading] = useState(true);

  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        const calendar: ContributionCalendar =
          data.data.user.contributionsCollection
            .contributionCalendar;

        const days = calendar.weeks.flatMap(
          (week) => week.contributionDays,
        );

        setTotalContributions(
          calendar.totalContributions,
        );

        setActivities(
          days.map((day) => ({
            date: day.date,
            count: day.contributionCount,
            level:
              day.contributionCount === 0
                ? 0
                : day.contributionLevel ===
                    "FIRST_QUARTILE"
                  ? 1
                  : day.contributionLevel ===
                      "SECOND_QUARTILE"
                    ? 2
                    : day.contributionLevel ===
                        "THIRD_QUARTILE"
                      ? 3
                      : 4,
          })),
        );
      })
      .catch(() => {
        setActivities([]);
        setTotalContributions(0);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  /*
   * Start at the latest/rightmost contribution.
   */
  useEffect(() => {
    if (loading || activities.length === 0) return;

    const scrollToLatest = () => {
      const wrapper = calendarRef.current;

      if (!wrapper) return;

      const internalContainer =
        wrapper.querySelector(
          ".react-activity-calendar__scroll-container",
        ) as HTMLElement | null;

      const container = internalContainer ?? wrapper;

      container.scrollLeft =
        container.scrollWidth - container.clientWidth;
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToLatest();

        setTimeout(scrollToLatest, 100);
      });
    });
  }, [loading, activities]);

  if (loading) {
    return (
      <section className="mx-auto w-full max-w-200 border-x border-dashed border-border">
        <div className="px-2 py-5 sm:px-4">
          <h2
            className={`${instrumentSerif.className} text-4xl leading-none text-primary`}
          >
            GitHub Activity
          </h2>
        </div>

        <div className="border-y border-dashed border-border px-2 py-6 sm:px-4">
          <div className="h-32 animate-pulse rounded-2xl border border-border bg-surface" />
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-200 border-x border-dashed border-border">
      {/* Heading */}
      <div className="px-2 py-5 sm:px-4">
        <h2
          className={`${instrumentSerif.className} text-4xl leading-none text-primary`}
        >
          GitHub Activity
        </h2>
      </div>

      {/* Full-width divider */}
      <div className="relative h-px">
        <div className="absolute left-1/2 top-0 w-screen -translate-x-1/2 border-t border-dashed border-border" />
      </div>

      {/* Calendar */}
      <div className="px-2 py-6 sm:px-4">
        <div
          className="
            github-activity-calendar
            w-full
            overflow-hidden
            rounded-2xl
            border
            border-border
            bg-surface
            p-2
            sm:p-4
          "
        >
          {/* Scrollable calendar */}
          <div
            ref={calendarRef}
            className="
              w-full
              overflow-x-auto
              overflow-y-hidden
            "
          >
            <ActivityCalendar
              data={activities}
              blockSize={14}
              blockMargin={3}
              blockRadius={3}
              fontSize={13}
              maxLevel={4}
              showWeekdayLabels={false}
              showColorLegend={false}
              showTotalCount={false}
              showMonthLabels={true}
              theme={{
                light: [
                  "var(--github-level-0)",
                  "var(--github-level-1)",
                  "var(--github-level-2)",
                  "var(--github-level-3)",
                  "var(--github-level-4)",
                ],
                dark: [
                  "var(--github-level-0)",
                  "var(--github-level-1)",
                  "var(--github-level-2)",
                  "var(--github-level-3)",
                  "var(--github-level-4)",
                ],
              }}
              renderBlock={(block, activity) => {
                const y = Number(
                  block.props.y ?? 0,
                );

                const center = 7;

                return (
                  <g>
                    {block}

                    {activity.count > 0 && (
                      <text
                        x={center}
                        y={y + center}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize={7}
                        fontWeight={600}
                        fill={
                          activity.level >= 3
                            ? "var(--github-number-light)"
                            : "var(--github-number-dark)"
                        }
                        pointerEvents="none"
                      >
                        {activity.count}
                      </text>
                    )}
                  </g>
                );
              }}
              tooltips={{
                activity: {
                  withArrow: true,
                  text: (activity) =>
                    `${activity.count} contributions on ${new Date(
                      `${activity.date}T00:00:00`,
                    ).toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      },
                    )}`,
                },
              }}
            />
          </div>

          {/* Total contributions */}
          <div className="px-1 pt-3 text-[13px] text-muted sm:px-2 sm:pt-4">
            <span className="text-primary">
              {totalContributions.toLocaleString()}
            </span>{" "}
            contributions in the last year
          </div>
        </div>
      </div>

      {/* Full-width divider */}
      <div className="relative h-px">
        <div className="stripe-divider relative left-1/2 mt-8 h-6 w-screen -translate-x-1/2 border border-dashed border-border" />
      </div>
    </section>
  );
}