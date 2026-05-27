"use client";

import { MotionReveal } from "@/components/motion/MotionReveal";
import { AnnotationList } from "@/components/visual/AnnotationList";
import { ExhibitFrame } from "@/components/visual/ExhibitFrame";
import { SystemsIntegrationDiagram } from "@/components/visual/exhibits/SystemsIntegrationDiagram";
import {
  aboutAnnotations,
  aboutTakeaway,
  toolDomains,
} from "@/lib/content";

export function About() {
  return (
    <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
      <MotionReveal>
        <ExhibitFrame
          label="Exhibit A · Systems integration"
          takeaway={aboutTakeaway}
          badge="SYSTEM MAP"
        >
          <div className="exhibit-corner exhibit-corner-tl" />
          <div className="exhibit-corner exhibit-corner-br" />
          <SystemsIntegrationDiagram />
        </ExhibitFrame>
        <div className="mt-8">
          <AnnotationList items={aboutAnnotations} columns={3} />
        </div>
      </MotionReveal>

      <MotionReveal delay={0.1}>
        <div className="space-y-8">
          <p className="font-mono text-[13px] leading-relaxed text-text-secondary">
            Senior in Systems Engineering & Design at UIUC with hands-on experience across mechanical design, FEA, embedded firmware, and bench validation. My projects span writing control loops in C to structural analysis in Abaqus to reverse-engineering a 1:18 scale car into a regulation-compliant CAD model in NX. I'm drawn to work at the hardware-software boundary — designing components, writing the firmware to run on them, and validating the full system rather than handing off at each interface.
          </p>
          <div className="space-y-2 font-mono text-[10px] leading-relaxed text-text-muted">
            <p>
              <span className="text-text-secondary">CAD:</span>{" "}
              {toolDomains.cad.join(" · ")}
            </p>
            <p>
              <span className="text-text-secondary">Analysis:</span>{" "}
              {toolDomains.analysis.join(" · ")}
            </p>
            <p>
              <span className="text-text-secondary">Embedded:</span>{" "}
              {toolDomains.embedded.join(" · ")}
            </p>
          </div>
        </div>
      </MotionReveal>
    </div>
  );
}
