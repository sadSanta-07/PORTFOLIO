
import { useEffect, useRef, useState } from "react";

const IDLE = ["."];
const ACTIVE = ["▁", "▂", "▃", "▄", "▅"];
const CHAR_WIDTH = 12;

export const SectionDivider = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [count, setCount] = useState(0);
  const [mouseX, setMouseX] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      setCount(Math.floor(entry.contentRect.width / CHAR_WIDTH));
    });

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMouseX(e.clientX - rect.left);
      }}
      onMouseLeave={() => setMouseX(null)}
      className="
  w-full
  overflow-hidden
  py-10

  flex
  items-center

  font-mono
  text-sm
  leading-none

  select-none
  cursor-crosshair
"
    >
      {Array.from({ length: count }).map((_, i) => {
        const x = i * CHAR_WIDTH;

        const distance =
          mouseX === null
            ? Infinity
            : Math.abs(mouseX - x);

        const active = distance < 120;

        const char = active
          ? ACTIVE[Math.floor(Math.random() * ACTIVE.length)]
          : IDLE[i % IDLE.length];

        return (
          <div
            key={i}
            className="
              transition-all
              duration-75
            "
            style={{
  color: active
    ? "var(--accent)"
    : "var(--muted)",

  opacity: active ? 1 : 0.35,

  width: `${CHAR_WIDTH}px`,
  height: "14px",

  textAlign: "center",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  transform: active
    ? "translateY(-1px)"
    : "translateY(0px)",
}}
          >
            {char}
          </div>
        );
      })}
    </div>
  );
};