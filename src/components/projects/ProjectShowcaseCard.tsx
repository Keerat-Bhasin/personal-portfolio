"use client";

import { MotionReveal } from "@/components/motion/MotionReveal";
import { AnnotationList } from "@/components/visual/AnnotationList";
import { ExhibitFrame } from "@/components/visual/ExhibitFrame";
import { TelemetryStrip } from "@/components/visual/TelemetryStrip";
import { RobotExhibit } from "@/components/visual/exhibits/RobotExhibit";
import { TrussSchematic } from "@/components/visual/exhibits/TrussSchematic";
import type { featuredProjects } from "@/lib/content";

type Project = (typeof featuredProjects)[number];

function ProjectExhibit({ project }: { project: Project }) {
  const isTruss = project.id === "truss";

  return (
    <ExhibitFrame
      label={`Exhibit · ${project.type}`}
      takeaway={project.takeaway}
      badge={project.featured ? "FEATURED" : undefined}
      aspect="wide"
    >
      <div className="exhibit-corner exhibit-corner-tl" />
      <div className="exhibit-corner exhibit-corner-br" />
      {isTruss ? <TrussSchematic /> : <RobotExhibit />}
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
