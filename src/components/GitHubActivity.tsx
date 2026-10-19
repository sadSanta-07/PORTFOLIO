
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [unavailable, setUnavailable] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/github", { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("GitHub activity unavailable");
        return res.json();
      })
      .then((data) => {
        const calendar: ContributionCalendar | undefined =
          data?.data?.user?.contributionsCollection?.contributionCalendar;

        if (!calendar || !Array.isArray(calendar.weeks)) {
          throw new Error("Missing GitHub contribution calendar");
        }

        const days = calendar.weeks.flatMap((week) => week.contributionDays);
        setTotalContributions(calendar.totalContributions);
        setActivities(
          days.map((day) => ({
            date: day.date,
            count: day.contributionCount,
            level:
              day.contributionCount === 0
                ? 0
                : day.contributionLevel === "FIRST_QUARTILE"
                  ? 1
                  : day.contributionLevel === "SECOND_QUARTILE"
                    ? 2
                    : day.contributionLevel === "THIRD_QUARTILE"
                      ? 3
                      : 4,
          })),
        );
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setUnavailable(true);
          setActivities([]);
          setTotalContributions(0);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (loading || activities.length === 0) return;

    const wrapper = calendarRef.current;
    if (!wrapper) return;

    let secondFrame = 0;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const scrollToLatest = () => {
      const internalContainer = wrapper.querySelector(
        ".react-activity-calendar__scroll-container",
      ) as HTMLElement | null;
      const container = internalContainer ?? wrapper;
      container.scrollLeft = container.scrollWidth - container.clientWidth;
    };

    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        scrollToLatest();
        timeoutId = setTimeout(scrollToLatest, 100);
      });
    });

    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [loading, activities]);

  if (loading) {
    return (
      <section className="mx-auto w-full max-w-200 border-x border-dashed border-border" aria-labelledby="github-activity-heading">
        <div className="px-2 py-5 sm:px-4">
          <h2 id="github-activity-heading" className={`${instrumentSerif.className} text-4xl leading-none text-primary`}>
            GitHub Activity
          </h2>
        </div>

        <div className="border-y border-dashed border-border px-2 py-6 sm:px-4" aria-hidden="true">
          <div className="h-32 animate-pulse rounded-2xl border border-border bg-surface" />
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-200 border-x border-dashed border-border" aria-labelledby="github-activity-heading">
      <div className="px-2 py-5 sm:px-4">
        <h2 id="github-activity-heading" className={`${instrumentSerif.className} text-4xl leading-none text-primary`}>
          GitHub Activity
        </h2>
      </div>

      <div className="relative h-px">
        <div className="absolute left-1/2 top-0 w-screen -translate-x-1/2 border-t border-dashed border-border" />
      </div>

      <div className="px-2 py-6 sm:px-4">
        <div
          className="github-activity-calendar w-full overflow-hidden rounded-2xl border border-border bg-surface p-2 sm:p-4"
        >
          {unavailable || activities.length === 0 ? (
            <div className="flex min-h-32 items-center justify-center px-4 text-center text-sm text-muted" role="status">
              GitHub activity is temporarily unavailable. Visit{" "}
              <a
                href="https://github.com/sadSanta-07"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 underline underline-offset-4 hover:text-primary"
              >
                my GitHub profile
              </a>
              .
            </div>
          ) : (
            <>
              <div ref={calendarRef} className="w-full overflow-x-auto overflow-y-hidden">
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
                    const y = Number(block.props.y ?? 0);
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
                            aria-hidden="true"
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
                        ).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}`,
                    },
                  }}
                />
              </div>

              <div className="px-1 pt-3 text-[13px] text-muted sm:px-2 sm:pt-4">
                <span className="text-primary">
                  {totalContributions.toLocaleString()}
                </span>{" "}
                contributions in the last year
              </div>
            </>
          )}
        </div>
      </div>

      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src="/leaf.svg"
          alt=""
          width={180}
          height={180}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-40 sm:w-36 md:w-40 opacity-90 object-contain scale-y-[-1] [mask-image:linear-gradient(to_right,black_0%,black_78%,transparent_100%)]"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
