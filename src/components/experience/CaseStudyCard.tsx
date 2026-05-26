"use client";

import { MotionReveal } from "@/components/motion/MotionReveal";
import { TelemetryStrip } from "@/components/visual/TelemetryStrip";
import type { experiences } from "@/lib/content";

type Experience = (typeof experiences)[number];

export function CaseStudyCard({ experience }: { experience: Experience }) {
  return (
    <MotionReveal>
      <article className="rounded-xl border border-border/35 bg-bg-panel/25 p-6 md:p-7">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-lg font-semibold text-text-primary">
              {experience.role}
            </h3>
            <p className="mt-1 font-mono text-[11px] text-text-muted">
              {experience.org} · {experience.date}
            </p>
          </div>
          <p className="font-mono text-sm tabular-nums text-accent-amber">
            {experience.impact}
          </p>
        </div>

        <TelemetryStrip items={experience.telemetry} className="mt-6" />

        <div className="mt-5 flex flex-wrap gap-2">
          {experience.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-border/30 px-2.5 py-1 font-mono text-[10px] text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </MotionReveal>
  );
}

export function ExperienceList({ items }: { items: readonly Experience[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((exp) => (
        <CaseStudyCard key={exp.id} experience={exp} />
      ))}
    </div>
  );
}
