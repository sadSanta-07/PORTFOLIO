"use client";

import React, { useEffect, useRef } from "react";
import rough from "roughjs";

export function RoughUnderline({ children }: { children: React.ReactNode }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      const rc = rough.svg(svgRef.current);
      const node = rc.line(0, 5, 100, 5, {
        roughness: 1.5,
        bowing: 1,
        stroke: "currentColor",
        strokeWidth: 1.5,
      });
      svgRef.current.innerHTML = "";
      svgRef.current.appendChild(node);
    }
  }, []);

  return (
    <span className="relative inline-block text-primary font-medium">
      {children}
      <svg
        ref={svgRef}
        className="absolute w-full h-2.5 -bottom-1 left-0 text-muted opacity-70"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      />
    </span>
  );
}