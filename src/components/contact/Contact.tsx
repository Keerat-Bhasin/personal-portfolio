import { MotionReveal } from "@/components/motion/MotionReveal";
import { certifications, site } from "@/lib/content";
import Link from "next/link";

export function Certifications() {
  return (
    <div className="flex flex-wrap gap-3">
      {certifications.map((cert) => (
        <span
          key={cert}
          className="font-mono text-xs text-text-secondary"
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
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-lg leading-relaxed text-text-secondary md:text-xl">
          Open to robotics, embedded controls, and product-focused opportunities for Fall 2026.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href={`mailto:${site.email}`}
            className="font-mono text-sm text-text-primary underline decoration-border/50 underline-offset-8 transition hover:decoration-border/80 focus:outline-none focus-visible:decoration-signal/60"
          >
            {site.email}
          </Link>
          <Link
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-text-secondary underline decoration-border/40 underline-offset-8 transition hover:text-text-primary hover:decoration-border/70 focus:outline-none focus-visible:decoration-signal/60"
          >
            LinkedIn
          </Link>
          <Link
            href="/resume.pdf"
            className="font-mono text-sm text-text-secondary underline decoration-border/40 underline-offset-8 transition hover:text-text-primary hover:decoration-border/70 focus:outline-none focus-visible:decoration-signal/60"
          >
            Resume
          </Link>
        </div>
      </div>
    </MotionReveal>
  );
}
