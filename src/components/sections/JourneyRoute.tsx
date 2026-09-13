"use client";

import { motion } from "framer-motion";
import { journeyStages } from "@/lib/site";

interface JourneyRouteProps {
  className?: string;
}

/** Delay before the route starts drawing, in seconds. */
const DRAW_DELAY = 0.5;
/** How long the route takes to draw, in seconds. */
const DRAW_DURATION = 2;

/** Route nodes on the horizontal SVG, positioned along ROUTE_PATH. */
const nodes = [
  { label: "建筑", x: 40, y: 130, labelX: 28, labelY: 164, anchor: "start", t: 0.04 },
  { label: "运营", x: 265, y: 58, labelX: 265, labelY: 30, anchor: "middle", t: 0.27 },
  { label: "AI", x: 475, y: 122, labelX: 475, labelY: 156, anchor: "middle", t: 0.49 },
  { label: "编程", x: 695, y: 55, labelX: 695, labelY: 27, anchor: "middle", t: 0.71 },
  { label: "创造", x: 923, y: 93, labelX: 940, labelY: 66, anchor: "end", t: 0.95 },
] as const;

/** Winding route through the hero, ending in an arrow (the road ahead). */
const ROUTE_PATH =
  "M 40 130 C 120 130, 195 58, 265 58 C 335 58, 405 122, 475 122 C 545 122, 625 55, 695 55 C 765 55, 850 93, 975 93";
const ARROW_PATH = "M 961 81 L 975 93 L 961 105";

/**
 * The "journey" visual: a gently winding route with a stop per stage.
 * Horizontal SVG route on desktop, vertical route on mobile.
 */
export function JourneyRoute({ className }: JourneyRouteProps) {
  return (
    <div className={className}>
      {/* Desktop: horizontal winding route */}
      <div className="hidden md:block">
        <svg
          viewBox="0 0 1000 180"
          role="img"
          aria-label="Roxy 的旅程：建筑、运营、AI、编程、创造"
          className="h-auto w-full"
        >
          <motion.path
            d={ROUTE_PATH}
            fill="none"
            stroke="var(--color-charcoal)"
            strokeOpacity={0.45}
            strokeWidth={2}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: DRAW_DURATION, delay: DRAW_DELAY, ease: "easeInOut" }}
          />
          <motion.path
            d={ARROW_PATH}
            fill="none"
            stroke="var(--color-charcoal)"
            strokeOpacity={0.55}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: DRAW_DELAY + DRAW_DURATION, duration: 0.4 }}
          />
          {nodes.map((node, index) => {
            const isCurrent = index === nodes.length - 1;
            return (
              <motion.g
                key={node.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: DRAW_DELAY + DRAW_DURATION * node.t,
                  duration: 0.45,
                }}
              >
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isCurrent ? 10 : 8}
                  fill="none"
                  stroke={isCurrent ? "var(--color-ember)" : "var(--color-charcoal)"}
                  strokeOpacity={isCurrent ? 0.6 : 0.3}
                  strokeWidth={1.5}
                />
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isCurrent ? 4.5 : 3.5}
                  fill={isCurrent ? "var(--color-ember)" : "var(--color-charcoal)"}
                />
                <text
                  x={node.labelX}
                  y={node.labelY}
                  textAnchor={node.anchor}
                  fontSize={15}
                  letterSpacing={2.5}
                  fill={isCurrent ? "var(--color-ember)" : "var(--color-charcoal)"}
                  fillOpacity={0.85}
                  className="uppercase"
                >
                  {node.label}
                </text>
              </motion.g>
            );
          })}
        </svg>
      </div>

      {/* Mobile: vertical route */}
      <div className="md:hidden">
        <ol className="relative space-y-8 py-1 pl-0.5">
          <span
            aria-hidden
            className="absolute top-2 bottom-2 left-[4.5px] w-px bg-charcoal/25"
          />
          {journeyStages.map((stage, index) => {
            const isCurrent = index === journeyStages.length - 1;
            return (
              <motion.li
                key={stage}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: DRAW_DELAY + index * 0.18, duration: 0.45 }}
              >
                <span
                  aria-hidden
                  className={`z-10 size-2.5 rounded-full border bg-cream ${
                    isCurrent ? "border-ember bg-ember" : "border-charcoal/40"
                  }`}
                />
                <span
                  className={`text-xs tracking-[0.25em] uppercase ${
                    isCurrent ? "text-ember" : "text-charcoal/70"
                  }`}
                >
                  {stage}
                </span>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
