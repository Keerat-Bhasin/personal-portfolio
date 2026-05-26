import { MotionReveal } from "@/components/motion/MotionReveal";
import { TelemetryStrip } from "@/components/visual/TelemetryStrip";
import { certifications, site } from "@/lib/content";
import Link from "next/link";

const contactTelemetry = [
  { label: "Availability", value: "Fall 2026" },
  { label: "Focus", value: "Robotics" },
  { label: "Location", value: "Remote OK" },
] as const;

export function Certifications() {
  return (
    <div className="flex flex-wrap gap-4">
      {certifications.map((cert) => (
        <span
          key={cert}
          className="rounded-lg border border-border/35 px-4 py-3 font-mono text-xs text-text-secondary"
        >
          {cert}
        </span>
      ))}
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
