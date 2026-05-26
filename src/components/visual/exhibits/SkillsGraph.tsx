"use client";

import type { skillGroups } from "@/lib/content";

type GroupId = (typeof skillGroups)[number]["id"];

const positions: Record<GroupId, { x: number; y: number }> = {
  mech: { x: 120, y: 140 },
  cad: { x: 280, y: 70 },
  embedded: { x: 440, y: 140 },
  code: { x: 600, y: 70 },
  product: { x: 360, y: 230 },
  tools: { x: 520, y: 230 },
};

const edges: [GroupId, GroupId][] = [
  ["mech", "cad"],
  ["cad", "embedded"],
  ["embedded", "code"],
  ["mech", "product"],
  ["embedded", "product"],
  ["product", "tools"],
  ["code", "tools"],
];

export function SkillsGraph({
  active,
  groups,
}: {
  active: GroupId;
  groups: typeof skillGroups;
}) {
  return (
    <svg viewBox="0 0 720 300" className="h-full w-full min-h-[220px]" aria-hidden>
      {edges.map(([a, b]) => {
        const pa = positions[a];
        const pb = positions[b];
        const lit = active === a || active === b;
        return (
          <line
            key={`${a}-${b}`}
            x1={pa.x}
            y1={pa.y}
            x2={pb.x}
            y2={pb.y}
            stroke={lit ? "rgba(77,163,255,0.45)" : "rgba(42,49,56,0.7)"}
            strokeWidth={lit ? 1.5 : 1}
          />
        );
      })}
      {groups.map((g) => {
        const p = positions[g.id];
        const isActive = active === g.id;
        return (
          <g key={g.id}>
            <circle
              cx={p.x}
              cy={p.y}
              r={isActive ? 42 : 34}
              fill={isActive ? "rgba(77,163,255,0.08)" : "rgba(16,20,24,0.85)"}
              stroke={isActive ? "rgba(77,163,255,0.55)" : "rgba(42,49,56,0.8)"}
              strokeWidth={isActive ? 1.5 : 1}
            />
            <text
              x={p.x}
              y={p.y + 4}
              textAnchor="middle"
              fill={isActive ? "rgba(231,231,227,1)" : "rgba(182,179,173,0.9)"}
              fontSize="9"
              fontFamily="monospace"
            >
              {g.title.split(" ")[0].slice(0, 8).toUpperCase()}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
