"use client";

import { MotionReveal } from "@/components/motion/MotionReveal";
import { AnnotationList } from "@/components/visual/AnnotationList";
import { ExhibitFrame } from "@/components/visual/ExhibitFrame";
import { TelemetryStrip } from "@/components/visual/TelemetryStrip";
import { RobotExhibit } from "@/components/visual/exhibits/RobotExhibit";
import type { featuredProjects } from "@/lib/content";

type Project = (typeof featuredProjects)[number];

/** Simple iterative FEA loop diagram for the handle optimization project. */
function FeaExhibit() {
  const steps = [
    { label: "Load", sub: "100 lb dist." },
    { label: "FEA solve", sub: "Abaqus" },
    { label: "Stress map", sub: "concentrations" },
    { label: "Geometry", sub: "fillets · wall" },
    { label: "Validate", sub: "FOS ≥ 7" },
  ];
  const cx = [80, 200, 320, 440, 580];
  const cy = 110;

  return (
    <svg viewBox="0 0 660 220" className="h-full w-full" aria-label="FEA handle optimization loop">
      {/* iteration arrow back from validate to FEA */}
      <path
        d={`M ${cx[4]} ${cy + 28} Q ${cx[4] + 20} 190 ${cx[2]} 190 Q ${cx[0] + 20} 190 ${cx[1]} ${cy + 28}`}
        fill="none"
        stroke="rgba(77,163,255,0.25)"
        strokeWidth="1"
        strokeDasharray="4 3"
      />
      <text x={(cx[4] + cx[1]) / 2} y="208" textAnchor="middle" fill="rgba(77,163,255,0.4)" fontSize="8" fontFamily="monospace">iterate until FOS ≥ 7</text>
      {/* forward arrows */}
      {steps.slice(0, -1).map((_, i) => (
        <line
          key={i}
          x1={cx[i] + 34}
          y1={cy}
          x2={cx[i + 1] - 34}
          y2={cy}
          stroke="rgba(42,49,56,0.9)"
          strokeWidth="1"
        />
      ))}
      {steps.map((s, i) => (
        <g key={s.label}>
          <circle cx={cx[i]} cy={cy} r="32" fill="rgba(16,20,24,0.9)" stroke="rgba(77,163,255,0.35)" strokeWidth="1" />
          <text x={cx[i]} y={cy - 4} textAnchor="middle" fill="rgba(231,231,227,0.95)" fontSize="9" fontFamily="monospace" fontWeight="600">
            {s.label}
          </text>
          <text x={cx[i]} y={cy + 10} textAnchor="middle" fill="rgba(124,122,118,0.9)" fontSize="7" fontFamily="monospace">
            {s.sub}
          </text>
        </g>
      ))}
    </svg>
  );
}

function ProjectExhibit({ project }: { project: Project }) {
  const isRobot = project.id === "robot";

  return (
    <ExhibitFrame
      label={`Exhibit · ${project.type}`}
      takeaway={project.takeaway}
      badge={project.featured ? "PRIMARY" : undefined}
      aspect="wide"
    >
      <div className="exhibit-corner exhibit-corner-tl" />
      <div className="exhibit-corner exhibit-corner-br" />
      {isRobot ? <RobotExhibit /> : <FeaExhibit />}
    </ExhibitFrame>
  );
}

export function ProjectShowcaseCard({ project }: { project: Project }) {
  return (
    <MotionReveal>
      <article className="space-y-6">
        <ProjectExhibit project={project} />
        <TelemetryStrip items={project.telemetry} />
        <div>
          <h3 className="font-display text-lg font-semibold text-text-primary">
            {project.title}
          </h3>
          <p className="mt-1 font-mono text-[11px] text-text-muted">{project.summary}</p>
        </div>
        <AnnotationList items={project.annotations} columns={1} />
        <p className="font-mono text-[10px] text-text-muted">
          {project.tools.join(" · ")}
        </p>
      </article>
    </MotionReveal>
  );
}

export function ProjectGrid({ projects }: { projects: readonly Project[] }) {
  return (
    <div className="grid gap-16 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectShowcaseCard key={project.id} project={project} />
      ))}
    </div>
  );
}
