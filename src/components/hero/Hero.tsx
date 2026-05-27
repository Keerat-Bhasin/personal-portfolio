"use client";

import { TelemetryBackdrop } from "@/components/hero/TelemetryBackdrop";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { TelemetryStrip } from "@/components/visual/TelemetryStrip";
import { heroTelemetry, site } from "@/lib/content";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <TelemetryBackdrop />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20">
        <MotionReveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-bg-panel/50 px-3 py-1 font-mono text-xs text-text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            {site.availability}
          </p>
        </MotionReveal>

        <MotionReveal delay={0.05}>
          <h1 className="mt-8 font-display text-6xl font-semibold leading-[0.98] tracking-tight text-text-primary md:text-7xl lg:text-8xl">
            {site.name.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="text-aluminum">
              {site.name.split(" ").slice(2).join(" ")}
            </span>
          </h1>
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <p className="mt-4 font-mono text-sm tracking-wide text-text-secondary">
            {site.title}
          </p>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
            {site.positioning}
          </p>
        </MotionReveal>

        <MotionReveal delay={0.15}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="#projects"
              className="rounded-lg bg-aluminum px-5 py-3 text-sm font-medium text-bg-base transition hover:bg-aluminum/90"
            >
              View projects
            </Link>
            <Link
              href="/resume.pdf"
              className="rounded-lg border border-border px-5 py-3 text-sm text-text-secondary transition hover:border-signal/40 hover:text-text-primary"
            >
              Resume
            </Link>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.2}>
          <TelemetryStrip items={heroTelemetry} className="mt-12 max-w-2xl" />
        </MotionReveal>
      </div>
    </section>
  );
}
