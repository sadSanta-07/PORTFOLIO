import { useEffect, useRef } from "react";
import rough from 'roughjs';

export const RoughBorder = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = svgRef.current;

    while (svg.firstChild) {
      svg.removeChild(svg.firstChild);
    }

    const rc = rough.svg(svg);

    const rect = rc.rectangle(4, 4, 796, 392, {
      stroke: "var(--charcoal)",
      strokeWidth: 6,
      roughness: 1.8,
      bowing: 1.5,
      fill: "none",
    });

    svg.appendChild(rect);
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 800 400"
      className="absolute inset-0 h-full w-full pointer-events-none"
      preserveAspectRatio="none"
    />
  );
};