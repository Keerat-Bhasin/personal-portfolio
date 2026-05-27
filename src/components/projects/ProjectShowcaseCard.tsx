"use client";

import { MotionReveal } from "@/components/motion/MotionReveal";
import { AnnotationList } from "@/components/visual/AnnotationList";
import { ExhibitFrame } from "@/components/visual/ExhibitFrame";
import { TelemetryStrip } from "@/components/visual/TelemetryStrip";
import Image from "next/image";
import { RobotExhibit } from "@/components/visual/exhibits/RobotExhibit";
import { feaImage } from "@/lib/assets";
import type { featuredProjects } from "@/lib/content";

type Project = (typeof featuredProjects)[number];

function FeaExhibit() {
  return (
    <Image
      src={feaImage}
      alt="FEA mesh of 3D-printed nylon handle under 100 lb distributed load — stress concentration map"
      fill
      className="object-contain"
      sizes="(max-width: 768px) 100vw, 50vw"
    />
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
