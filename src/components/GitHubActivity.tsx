"use client";

<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useEffect, useRef, useState, useMemo } from "react";
>>>>>>> 27daf93b1bf25ce1736273ec94d132ed1980e289
import Image from "next/image";
import { Instrument_Serif } from "next/font/google";
import {
  ActivityHeatmap,
  type HeatDay,
} from "@/components/ui/activity-heatmap";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
});

type ContributionDay = {
  contributionCount: number;
  date: string;
  contributionLevel: string;
};

type ContributionWeek = {
  contributionDays: ContributionDay[];
};

type ContributionCalendar = {
  totalContributions: number;
  weeks: ContributionWeek[];
};

export function GitHubActivity() {
  const [heatData, setHeatData] = useState<HeatDay[]>([]);
  const [endDate, setEndDate] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [unavailable, setUnavailable] = useState(false);
<<<<<<< HEAD
=======
  
  // State to trigger the animation
  const [animate, setAnimate] = useState(false);
  
  const calendarRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null); // Ref to track when section is in view
>>>>>>> 27daf93b1bf25ce1736273ec94d132ed1980e289

  // Map dates to index for the staggered column delay
  const dateToIndex = useMemo(() => {
    const map = new Map<string, number>();
    activities.forEach((act, i) => map.set(act.date, i));
    return map;
  }, [activities]);

  // 1. Fetch Data
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
        if (days.length > 0) {
          setEndDate(days[days.length - 1].date);
        }

        setHeatData(
          days.map((day) => ({
            date: day.date,
            value: day.contributionCount,
          })),
        );
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setUnavailable(true);
          setHeatData([]);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  if (loading) {
    return (
      <section
        className="mx-auto w-full max-w-200 border-x border-dashed border-border"
        aria-labelledby="github-activity-heading"
      >
        <div className="px-2 py-5 sm:px-4">
          <h2
            id="github-activity-heading"
            className={`${instrumentSerif.className} text-4xl leading-none text-primary`}
          >
            GitHub Activity
          </h2>
        </div>

        <div
          className="border-y border-dashed border-border px-2 py-6 sm:px-4"
          aria-hidden="true"
        >
          <div className="h-32 animate-pulse rounded-2xl border border-border bg-surface" />
        </div>
      </section>
    );
  }

  return (
<<<<<<< HEAD
    <section
      className="mx-auto w-full max-w-200 border-x border-dashed border-border"
      aria-labelledby="github-activity-heading"
    >
=======
    <section ref={sectionRef} className="mx-auto w-full max-w-200 border-x border-dashed border-border" aria-labelledby="github-activity-heading">
>>>>>>> 27daf93b1bf25ce1736273ec94d132ed1980e289
      <div className="px-2 py-5 sm:px-4">
        <h2
          id="github-activity-heading"
          className={`${instrumentSerif.className} text-4xl leading-none text-primary`}
        >
          GitHub Activity
        </h2>
      </div>

      <div className="relative h-px">
        <div className="absolute left-1/2 top-0 w-screen -translate-x-1/2 border-t border-dashed border-border" />
      </div>

      <div className="px-2 py-6 sm:px-4">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-3 sm:p-5">
          {unavailable || heatData.length === 0 ? (
            <div
              className="flex min-h-32 items-center justify-center px-4 text-center text-sm text-muted"
              role="status"
            >
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
<<<<<<< HEAD
            <ActivityHeatmap
              data={heatData}
              endDate={endDate}
              color="#34d399"
              unit="contributions"
              animated={true}
              weeks={53}
              weekStart={0}
            />
=======
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
                    
                    const index = dateToIndex.get(activity.date) ?? 0;
                    const column = Math.floor(index / 7);
                    const STAGGER_MS = 10;

                    return (
                      <g
                        className="transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
                        style={{
                          transitionDelay: `${column * STAGGER_MS}ms`,
                          transformBox: "fill-box", // Required to scale from center in SVG
                          transformOrigin: "center",
                          transform: animate ? "scale(1)" : "scale(0.5)", // Grows from 0.5 to 1
                          opacity: animate ? 1 : 0, // Fades from 0 to 1
                        }}
                      >
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
>>>>>>> 27daf93b1bf25ce1736273ec94d132ed1980e289
          )}
        </div>
      </div>

      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src="/leaf.svg"
          alt=""
          width={180}
          height={180}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-40 sm:w-36 md:w-40 opacity-90 object-contain scale-y-[-1] mask-[linear-gradient(to_right,black_0%,black_78%,transparent_100%)]"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}