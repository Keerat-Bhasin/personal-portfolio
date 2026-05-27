import { MotionReveal } from "@/components/motion/MotionReveal";
import { TelemetryStrip } from "@/components/visual/TelemetryStrip";
import { certifications, site } from "@/lib/content";
import Link from "next/link";

const contactTelemetry = [
  { label: "Availability", value: "Fall 2026" },
  { label: "Interests", value: "Mechanical design · controls · mechatronics · robotics" },
  { label: "Location", value: "Remote OK" },
] as const;

export function Certifications() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4">
        {certifications.map((cert) => (
          <div
            key={cert}
            className="rounded-lg border border-signal/30 bg-bg-panel/40 px-5 py-4"
          >
            <p className="font-display text-base font-semibold text-text-primary">{cert}</p>
            <p className="mt-1 font-mono text-[10px] text-signal">
              {cert.includes("Six Sigma") ? "ASQ-aligned · process improvement · statistical analysis" : "waste elimination · value-stream mapping · continuous improvement"}
            </p>
          </div>
        ))}
      </div>
      <p className="font-mono text-[11px] text-text-muted max-w-lg">
        Both earned through formal coursework and applied project work — process certifications at this level are uncommon at the undergraduate stage.
      </p>
    </div>
  );
}

export function Contact() {
  return (
    <MotionReveal>
      <TelemetryStrip items={contactTelemetry} className="mb-10 max-w-lg" />
      <div className="flex flex-wrap gap-6">
        <Link
          href={`mailto:${site.email}`}
          className="font-mono text-sm text-text-primary underline decoration-border/50 underline-offset-8 transition hover:decoration-signal/40"
        >
          {site.email}
        </Link>
        <Link
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-text-secondary underline decoration-border/40 underline-offset-8 transition hover:text-text-primary"
        >
          LinkedIn
        </Link>
        <Link
          href="/resume.pdf"
          className="font-mono text-sm text-text-secondary underline decoration-border/40 underline-offset-8 transition hover:text-text-primary"
        >
          Resume
        </Link>
      </div>
    </MotionReveal>
  );
}
